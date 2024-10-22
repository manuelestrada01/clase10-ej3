import NumbersController from "../controllers/numbers.controller.js"
import express from "express"

class NumbersRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new NumbersController()
    }

    start(){
        this.router.get("/numbers", this.controller.getNumbers)
        this.router.post("/numbers", this.controller.postNumbers)
        this.router.get("/entrada", this.controller.getEntrada)
        this.router.get("/promedio", this.controller.getPromedio)
        this.router.get("/minmax", this.controller.getMinMax)
        this.router.get("/cantidad", this.controller.getCantidad)
        
    
        return this.router
    }
}

export default NumbersRoutes