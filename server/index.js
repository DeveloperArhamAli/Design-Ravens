import express from "express"
import cors from "cors"

const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
}
app.use(cors(corsOptions))

app.get("/", function(req, res) {
    res.send("hi")
})

app.listen(3000, () => console.log("server started on port 3000"))