import * as express from "express"

const app = express()

app.listen(8000, () => console.log("Server running on 8000 with auto restart!"))

app.get("/", (req, res) => {
    res.send("Lets show why breakpoints rock!")
})