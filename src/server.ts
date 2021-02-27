import express from 'express';

const app = express();

app.get ("/", (request, response)  => {
  return response.json({ message: "Tudo certo, servidor operando no status 200" });
});

app.post ("/", (request, response)  => {
  return response.json({ message: "Salvo com sucesso!" });
});

app.listen(3000, () => console.log("Server is Running!"));