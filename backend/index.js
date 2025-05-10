import express from "express";
import cors from "cors";
import GejalaRoute from "./routes/GejalaRoute.js";
import PenyakitRoute from "./routes/PenyakitRoute.js";
import DiagnosaRoute from "./routes/DiagnosaRoute.js";
import AturanRoute from "./routes/AturanRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(GejalaRoute);
app.use(PenyakitRoute);
app.use(DiagnosaRoute);
app.use(AturanRoute);

app.listen(5000, () => console.log("Server connected"));