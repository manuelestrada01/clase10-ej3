class NumbersMemModel
{
    constructor(){
        this.numbers = [
            {numero: "1"},
            {numero: "3"},
            {numero: "8"}
        ]
    }

    postWords = async (data) =>{
        sePuede == null
       try {
        const index = this.numbers.findIndex((e)=> e.numero == numero)
        if(index == -1) throw new Error ("el numero no existe")
            this.numbers.push(data)

        } catch (error) {
            console.error("ha ocurrido un error")
       }
    }
}

export default NumbersMemModel