import BaseRoute from "./BaseRoute.js";
import {ReturnWrapper} from "../Helper/err.js";
import jwt from 'jsonwebtoken'

class AuthRoute extends BaseRoute {
    constructor(route_name, verify = true) {
        super(route_name, verify);
        this.RegisterRoutes()
    }

    RegisterRoutes() {
        this.router.post(`${this.router_path}/`, (req, res, next) => {
            let [email, password] = [req.body?.email || null,req.body?.password || null]
            if (!email || !password) {
                res.send(ReturnWrapper(400, "No Auth Data!", []))
            } else {
                if (email === "dangkhanh.dev@gmail.com" && password === "13122002k@") {
                    res.send(ReturnWrapper(200, "Login Success", {
                        api_token: jwt.decode(jwt.sign({
                            email,
                            password
                        }, this.config._secret),this.config._secret)
                    }))
                } else {
                    res.send(ReturnWrapper(200, "Email Or Password Incorrect!",[]))
                }
            }
        })
    }
}

export default new AuthRoute('auth', true).router