import { db } from "../connect.js";



export const getStores = (req, res) => {
  //obtener los parametros lat y lon del usuario
    const userLatitude = req.params.lat;
    const userLongitude = req.params.lon;
    //traer las reseñas laborales asociadas a un usuario especifico
    const q = 'select store_name, lat, lon from oneup_users_db.store WHERE lat BETWEEN (? - 0.02) AND (? + 0.02) AND lon BETWEEN (? - (0.02 / COS(RADIANS(?)))) AND (? + (0.02 / COS(RADIANS(?))));'
                
    
        db.query(q, [userLatitude,userLatitude,userLongitude, 
            userLatitude, userLongitude, userLatitude], (err,data) =>{
          if (err) return res.status(500).json(err);
          return res.status(200).json(data);
          
        });
  };