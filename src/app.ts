import express ,{ Application } from "express";
import exphbs from "express-handlebars";
import helmet from "helmet";
import compression from "compression";
import { Route } from "./route";

class App {
    public app:Application
    constructor(){
        this.app = express()
        this.expressConfig()
        this.viewEngine()
        this.routeConfig()
        this.mongoSetup()
        this.securityOptions()
    }

    private expressConfig = () => {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(compression())
    }

    private viewEngine = () => {
        this.app.use("/static", express.static("./assets"))
        this.app.engine("handlebars", exphbs({
            helpers:{
                sum: function(x: any) {
                    return x+1;
                }
            }
        }))
        this.app.set("view engine", "handlebars")
    }

    private routeConfig = () => {
        this.app.use("/", new Route().Routes())
    }

    private securityOptions = () => {
        this.app.use(helmet())
    }

    private mongoSetup = () => {

    }
}

export default new App().app