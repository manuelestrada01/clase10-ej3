import NumbersMemModel from "../models/DAO/numbers.models.mem.js"

class Factory{
    static get(persistencia){
        switch(persistencia){
            case "MEM":
                console.warn("Persistencia en la memoria del servidor")
                return new NumbersMemModel()

            default: 
            console.warn("Persistencia en default")
            return new NumbersMemModel()
        }
    }
}

export default Factory