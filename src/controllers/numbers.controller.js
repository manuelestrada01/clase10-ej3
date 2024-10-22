import NumbersRoutes from "../services/numbers.service.js";
import NumbersService from "../services/numbers.service.js"

class NumbersController{
    constructor(){
        this.service = new NumbersService()
    }

    getNumbers = async (req, res) =>{
        const numbers = await this.service.getNumbers()
        res.send(numbers)
    }

    postNumbers = async (req, res) =>{
        console.log(req.body);
        const data = req.body
        const newNumber = await this.service.postNumbers(data)
        res.send(newNumber)
    }

    getEntrada = async (req, res) => {
        const numbers = await this.service.getNumbers();
        res.send(numbers);
    }
    
    getPromedio = async (req, res) => {
        const numbers = await this.service.getNumbers();
        const sum = numbers.reduce((a, b) => a + parseInt(b), 0);
        const avg = sum / numbers.length;
        res.send({ promedio: avg });
    }
    
    getMinMax = async (req, res) => {
        const numbers = await this.service.getNumbers();
        const nums = numbers.map(n => parseInt(n));
        const min = Math.min(...nums);
        const max = Math.max(...nums);
        res.send({ min, max });
    }
    
    getCantidad = async (req, res) => {
        const numbers = await this.service.getNumbers();
        res.send({ cantidad: numbers.length });
    }
    
    
}

export default NumbersController
