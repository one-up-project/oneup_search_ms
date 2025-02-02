
#oneup_search_ms

##De manera general en este servicio se busca implementar toda aquella tarea asociada a las busquedas de tiendas y productos por parte de parte de los usuarios de la plataforma. 

###Modulos del microservicio:
-routes-> se definen los endpoints a los cuales se realizan las respectivas peticiones
          - consulta de tiendas cercanas al usuario en un radio de 2km
          - consulta de tiendas por nombre y/o categoria
-callbacks-> define la implementacion de las consultas al indice definido en elastic search
-index.js-> define la creacion de la aplicacion en el framework express, ademas de los origenes permitidos
-connect-elasctic.js->define el punto de conexion con el servicio de elastic_search 

###docker
-1. crear imagen de contenedor a partir del dockerfile establecido
-2. obtener imagen desde dokcer hub: docker pull d0kc3rgriverab/oneup_search_ms:v2
