import NumbersRoutes from "../services/numbers.service.js";
import WordsService from "../services/numbers.service.js"

class NumbersController{
    constructor(){
        this.service = new NumbersService()
    }

    getWords = async (req, res) =>{
        const numbers = await this.service.getNumbers()
        res.send(numbers)
    }

    postNumbers = async (req, res) =>{
        const data = req.body
        const newNumber = await this.service.postNumbers(data)
        res.send(newNumber)
    }

    patchNumbers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const update = await this.service.patchNumbers(id, data)
        res.send(update)
    }
}
