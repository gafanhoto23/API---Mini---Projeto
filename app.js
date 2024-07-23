import express from "express";
import livrosRoutes from "./src/routes/livrosRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.use("/livros", livrosRoutes);

export default app;