import elasticClient from "../connect-elastic.js";

export const getStores = async (req, res) => {
  const { lat, lon } = req.params;

  try {
    const response = await elasticClient.search({
      index: "stores_info",
      query: {
        geo_distance: {
          distance: "2km", // Radio de búsqueda
          location: {
            lat: parseFloat(lat),
            lon: parseFloat(lon),
          },
        },
      },
    });

    const stores = response.hits.hits.map((hit) => hit._source);
    res.status(200).json(stores);
  } catch (error) {
    //console.error("Error al buscar tiendas:", error);
    res.status(500).json({ error: "Error al buscar tiendas" });
  }
};

export const getStoresByName = async (req, res) => {
  let { name, category } = req.params;

  // if (!name) {
  //   name = "";
  // }
  try {
    const query = {
      bool: {
        should: [
          // permite coincidencias inexactas
          {
            match: {
              store_name: {
                query: name,
                fuzziness: "AUTO", // Coincidencia difusa en el nombre
              },
            },
          },
          {
            match: {
              category: {
                query: category,
                fuzziness: "AUTO", // Coincidencia difusa en la categoría
              },
            },
          },
        ],
        minimum_should_match: 1, // Al menos una de las condiciones debe coincidir
      },
    };

    const response = await elasticClient.search({
      index: "stores_info",
      query: query,
    });

    const stores = response.hits.hits.map((hit) => hit._source);
    res.status(200).json(stores);
  } catch (error) {
    console.error("Error al buscar tiendas:", error);
    res.status(500).json({ error: "Error al buscar tiendas" });
  }
};
