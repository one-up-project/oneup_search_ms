# OneUp Search Microservice

## Descripción General
Este servicio implementa todas las tareas relacionadas con la búsqueda de tiendas y productos por parte de los usuarios de la plataforma.

## Módulos del Microservicio

###  `routes/`
Define los endpoints a los cuales se realizan las respectivas peticiones:
- Consulta de tiendas cercanas al usuario en un radio de 2 km.
- Consulta de tiendas por nombre y/o categoría.

###  `callbacks/`
Define la implementación de las consultas al índice definido en **Elasticsearch**.

###  `index.js`
Define la creación de la aplicación en el framework **Express**, además de los orígenes permitidos.

###  `connect-elastic.js`
Define el punto de conexión con el servicio de **Elasticsearch**.

##  Docker
### Obtención de la Imagen
1. Crear la imagen de contenedor a partir del `Dockerfile` establecido.
2. Obtener la imagen desde Docker Hub:
   ```
   docker pull d0kc3rgriverab/oneup_search_ms:v2
   ```

