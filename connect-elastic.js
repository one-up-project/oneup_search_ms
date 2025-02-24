import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";
dotenv.config();

const URL_ELASTICSEARCH = process.env.URL_ELASTICSEARCH;
const elasticClient = new Client({
  node: URL_ELASTICSEARCH, // URL del servicio en Docker
});

export default elasticClient;
