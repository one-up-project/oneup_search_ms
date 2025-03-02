import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";
dotenv.config();

const URL_ELASTICSEARCH = process.env.URL_ELASTICSEARCH;
const API_KEY = process.env.API_KEY_ELASTICSEARCH;
// const elasticClient = new Client({
//   node: URL_ELASTICSEARCH, // URL del servicio en Docker
// });

const elasticClient = new Client({
  node: URL_ELASTICSEARCH,
  auth: {
    apiKey: API_KEY,
  },
});

export default elasticClient;
