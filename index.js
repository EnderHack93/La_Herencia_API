import app from "./app.js";
import { sequelize } from "./src/config/sequelize.js";

try {
  try {
    await sequelize.sync({force:false}); 
    console.log("Conexion exitosa a la base de datos");
  } catch (error) {
    console.log(error.message);
  }
  app.listen(process.env.PORT);
  console.log("Servidor activo en el puerto: " + process.env.PORT);

} catch (error) {
  console.log("Error al desplegar el servidor");
}
