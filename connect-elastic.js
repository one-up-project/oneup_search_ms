import { Client } from "@elastic/elasticsearch";

const elasticClient = new Client({
  node: "http://localhost:9200", // URL del servicio en Docker
});

export default elasticClient;
