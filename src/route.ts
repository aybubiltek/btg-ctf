import express from "express";
import axios from "axios";
export class Route {
  protected route: express.Router;

  constructor() {
    this.route = express.Router();
  }

  public Routes = (): express.Router => {
    this.route.get("/", (req: express.Request, res: express.Response) => {
      res.render("site/index", {
        layout: "indexLayout",
        title: "AnaSayfa",
        cssName: "index",
      });
    });

    this.route.get("/register", function (req, res) {
      res.render("site/register", {
        layout: "registerLayout",
      });
    });

    this.route.post(
      "/add/team",
      async (req: express.Request, res: express.Response) => {
        try {
          const result = await axios.post(
            "http://localhost:4445/ctf/team",
            req.body
          );
          res.status(200).json({
            status: "success",
            data: result.data,
          });
        } catch (error) {
          res.status(400).json({
            status: "error",
            data: error.response.data,
          });
        }
      }
    );

    this.route.post(
      "/add/member",
      async (req: express.Request, res: express.Response) => {
        try {
          const result = await axios.put(
            "http://localhost:4445/ctf/team",
            req.body
          );
          res.status(200).json({
            status: "success",
            data: result.data,
          });
        } catch (error) {
          res.status(400).json({
            status: "error",
            data: error.response.data,
          });
        }
      }
    );

    return this.route;
  };
}
