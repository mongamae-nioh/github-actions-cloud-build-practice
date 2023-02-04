import express from "express";
import messageController from "./controllers/message";

console.log("launch server side!");

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/messages", messageController);

app.listen(8080, () => {
  console.log("launch express 8080 port");
});
