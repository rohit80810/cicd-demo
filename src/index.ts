
import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});




app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
