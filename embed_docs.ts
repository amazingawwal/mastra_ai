import { Mastra } from "mastra";
import { OpenAIEmbeddingModel } from "mastra/models/openai";
import { RecursiveTextSplitter } from "mastra/text-splitter";


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
