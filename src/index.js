import app from "./app.js";
import { sequelize } from "./config/sequelize.js";

try {
  await sequelize.sync({force: true});
  console.log("Conexion exitosa a la base de datos");
  app.listen(process.env.PORT);
  console.log("Servidor activo en el puerto: " + process.env.PORT);

} catch (error) {
  console.log("Error al desplegar el servidor");
}
