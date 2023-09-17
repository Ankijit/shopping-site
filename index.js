import express from "express";
import generateUniqueRandomNumbers from "./config/generaterandom.mjs";
const app = express();
const port = 3000;
import { productsData, allProducts } from "./config/products.mjs";
app.use(express.static("public"));

app.set(app.set("view engine", "ejs"));



app.get("/", (req, res) => {
  const randomNumbers = generateUniqueRandomNumbers(
    8,
    1,
    allProducts.length - 1
  );
  const random1 = {
    randomProduct1: allProducts[randomNumbers[0]],
    randomProduct2: allProducts[randomNumbers[1]],
    randomProduct3: allProducts[randomNumbers[2]],
    randomProduct4: allProducts[randomNumbers[3]]
  };
  const random2 = {
    randomProduct5: allProducts[randomNumbers[4]],
    randomProduct6: allProducts[randomNumbers[5]],
    randomProduct7: allProducts[randomNumbers[6]],
    randomProduct8: allProducts[randomNumbers[7]],
  };
    res.render("index.ejs", {random1,random2 });
});

app.get("/man", (req, res) => {
  res.render("man.ejs", { men: productsData.men });
});

app.get("/woman", (req, res) => {
  res.render("woman.ejs", { women: productsData.women });
});

app.get("/athletes", (req, res) => {
  res.render("athletes.ejs", { athletes: productsData.athletes });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/shopall", (req, res) => {
  const products = allProducts;

  res.render("shopall.ejs", { products: allProducts });
});
