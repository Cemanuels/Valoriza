import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.get("/", (req,res)=>{
  return res.json("Bem vindo a api do projeto valoriza!")
})

app.get("/test", (req, res) => {
  return res.send("Olá NLW");
} )

app.post("/test-post", (req, res) => {
  return res.json("Adicionado com Sucesso!")
})

app.listen(3000, () => console.log("Server iniciado com sucesso!"));
