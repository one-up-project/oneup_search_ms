import { Client } from "@elastic/elasticsearch";

const elasticClient = new Client({
  node: process.env.URL_ELASTICSEARCH, // URL del servicio en Docker
});

export default elasticClient;
