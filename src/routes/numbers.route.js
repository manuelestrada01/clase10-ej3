import NumbersController from "../controllers/numbers.controller.js"
import express from "express"

class NumbersRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new NumbersController()
    }

    start(){
        this.router.get("/numbers", this.controller.getControllers)
        this.router.post("/numbers", this.controller.postNumbers)
        this.router.patch("/words/update/:id", this.controller.patchWords)
    
        return this.router
    }
}

export default NumbersRoutes