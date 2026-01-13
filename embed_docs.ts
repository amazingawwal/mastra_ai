import { Mastra } from "mastra";
import { OpenAIEmbeddingModel } from "mastra/models/openai";
import { RecursiveTextSplitter } from "mastra/text-splitter";

import { MDocument } from "@mastra/rag";


const mastra = new Mastra({
  embeddings: new OpenAIEmbeddingModel({
    apiKey: process.env.OPENAI_API_KEY,
    model: "text-embedding-3-small",
  }),
});

const documentText = `
Mastra is a framework for building AI agents.
It supports memory, tools, workflows, and observability.
`;


const splitter = new RecursiveTextSplitter({
  chunkSize: 500,
  chunkOverlap: 50,
});

const chunks2 = await splitter.splitText(documentText);

console.log(chunks2);


const doc = MDocument.fromText(`Mastra is a framework for building AI agents.
It supports memory, tools, workflows, and observability.
`);

const chunks = await doc.chunk({
  strategy: "recursive",
  size: 512,
  overlap: 50,
});

console.log(chunks);

const embeddings = await mastra.embeddings.embedDocuments(chunks);

console.log(embeddings);

// console.log(embeddings[0].embedding.length); // vector size
