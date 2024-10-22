import express from "express"
import NumbersRoutes from "./routes/words.routes.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json)

app.use("/", new NumbersRoutes().start())

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("ERROR", (err) => console.error(err))