class NumbersMemModel {
    constructor() {
        this.numbers = [
            { numero: "1" },
            { numero: "3" },
            { numero: "8" }
        ];
    }

    getNumbers = async () => {
        return this.numbers.map((e) => parseInt(e.numero));
    }

    postNumbers = async (data) => {
        const { numero } = data;
        try {
            this.numbers.push({ numero });
            return { success: true };
        } catch (error) {
            console.error("Error al agregar el número", error);
            return { success: false, error: error.message };
        }
    }

    getPromedio = async () => {
        const numbers = await this.getNumbers();
        const sum = numbers.reduce((a, b) => a + b, 0);
        return numbers.length > 0 ? sum / numbers.length : 0;
    }

    getMinMax = async () => {
        const numbers = await this.getNumbers();
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);
        return { min, max };
    }

    getCantidad = async () => {
        const numbers = await this.getNumbers();
        return numbers.length;
    }
}

export default NumbersMemModel;
