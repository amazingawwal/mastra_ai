import { Mastra } from "@mastra/core/mastra";
import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { PgVector } from "@mastra/pg";
import { MDocument } from "@mastra/rag";
import 'dotenv/config';

const documentText = `
Mastra is a framework for building AI agents.
It supports memory, tools, workflows, and observability.
`;



const docs = MDocument.fromText(documentText)


async function rag(){
  const chunks = await docs.chunk({
  strategy:"recursive",
  maxSize:512,
  overlap:50 })

 console.log(chunks)

 const { embeddings } = await embedMany({
  values: chunks.map((chunk) => chunk.text),
  model: openai.embedding("text-embedding-3-small") ,
 });

 console.log("This is embedding:",embeddings)
}

rag();








