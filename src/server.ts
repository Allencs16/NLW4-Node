import express from 'express';

const app = express();

app.get ("/", (request, response)  => {
  return response.json({ message: "Tudo certo, servidor operando no status 200" });
});

app.listen(3000, () => console.log("Server is Running!"));