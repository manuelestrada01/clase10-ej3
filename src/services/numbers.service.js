import Factory from "../models/Factory.js";

class NumbersService {
    constructor() {
        this.model = Factory.get("");
    }

    getNumbers = async () => {
        const numbers = await this.model.getNumbers();
        return numbers;
    }

    postNumbers = async (data) => {
        const newNumber = await this.model.postNumbers(data);
        return newNumber;
    }

    getPromedio = async () => {
        return await this.model.getPromedio();
    }

    getMinMax = async () => {
        return await this.model.getMinMax();
    }

    getCantidad = async () => {
        return await this.model.getCantidad();
    }
}

export default NumbersService;
