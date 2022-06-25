import BaseRoute from "./BaseRoute.js";
import {ReturnWrapper} from "../Helper/err.js";

class BookRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {

        this.router.get(`${this.router_path}/:api_token`, (req, res, next) => {
            if (this.VerifyToken(this.GetToken(req), next, res)) {
                res.send("api success valid")
            }
        })

        this.router.get(`${this.router_path}/:bookId/:api_token`, (req, res, next) => {
            if (this.VerifyToken(this.GetToken(req), next, res)) {
                res.send(ReturnWrapper(200, "", {bookId: req.params.bookId, api_token: this.GetToken(req)}))
            }
        })

        this.router.post(`${this.router_path}/`, (req, res, next) => {
            if (this.VerifyToken(this.GetToken(req), next, res)) {
                res.send("create success")
            }
        })
        this.router.put(`${this.router_path}/:bookId/:api_token`,(req,res,next)=>{
            if (this.VerifyToken(this.GetToken(req),next,res)){
                res.send('update success')
            }
        })
    }
}

export default new BookRoute('books', true).router