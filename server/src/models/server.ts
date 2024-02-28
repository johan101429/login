import express, { Application } from "express";
import routesProduct from "../routes/product";
import routesUser from "../routes/user";
import { product } from "./product";
import { User } from "./user";


class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {

      console.log(`Server running on port ${this.port}`);
    });
  }

  routes() {
    this.app.use("/api/products", routesProduct);
    this.app.use("/api/users", routesUser);
  }

  midlewares() {
    // Parseo body
    this.app.use(express.json());
  }
  async dbConnect(){
    try{
      await product.sync()
      await User.sync()

      console.log("Conexión a la base de datos exitosa");
    }catch (error){
      console.error("Error al conectar a la base de datos: ", error);
      
    }
  }






}

export default Server;
