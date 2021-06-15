import express from 'express';
export class Route{
    protected route:express.Router

    constructor(){
        this.route = express.Router()
    }

    public Routes = ():express.Router => {

        this.route.get("/",(req:express.Request, res:express.Response) => {
            res.render("site/index", {
                layout: "indexLayout",
                title: "AnaSayfa",
                cssName: "index",
              });
        })

        return this.route
    }
}