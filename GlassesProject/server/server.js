const express = require("express");
const app = express();
const port = 8000;
const bodyParser=require("body-parser");
const cors=require("cors");

let products = [
  {
    id: 1,
    title: "NAVY SPARKLE SUNGLASSES",
    price: "$89.00",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/02e95237b79f923f0dd0bd25276165f3/p/r/product_glasses_08_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_08_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_08_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_08_4.jpg",
  },
  {
    id: 2,
    title: "UNISEX GENTLE MONSTER",
    price: "75.00$",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_05_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_05_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_05_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_05_4.jpg"
  },
  {
    id: 3,
    title: "CLUBMASTER SUNGLASSES",
    price: "$59.00",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_09_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_09_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_09_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_09_4.jpg"
  },
  {
    id: 4,
    title: "OLIVER PEOPLES GLASSES",
    price: "$86.00",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_11_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_11_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_11_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_11_4.jpg"
  },
  {
    id: 5,
    title: "OLIVER PEOPLES GLASSES",
    price: "$79.00",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_02_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_02_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_02_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_02_4.jpg"
  },
  {
    id: 6,
    title: "LINDBERG UNISEX GLASSES",
    price: "$54.00",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_10_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_10_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_10_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_10_4.jpg"
  },
  {
    id: 7,
    title: "UNISEX EXODUS GLASSES",
    price: "$79.00",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_07_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_07_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_07_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_07_4.jpg"
  },
  {
    id: 8,
    title: "FULL RIM EYEGLASSES",
    price: "$73.00",
    category: "men's clothing",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_12_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_12_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_12_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_12_4.jpg"
  },
  {
    id: 9,
    title: "THICK PLASTIC SUNGLASSES",
    price: "$86.00",
    image:
      "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_06_1.jpg",
      image2:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_06_2.jpg",
      image3:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_06_3.jpg",
      image4:"https://blueskytechmage.com/next_minimog/media/catalog/product/cache/39e85fdc96c458ca49c0e99472589ef8/p/r/product_glasses_06_4.jpg"
  },
  // {
  //   id: 10,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   category: "men's clothing",
  //   image:
  //     "https://blueskytechmage.com/next_minimog/media/catalog/product/cache/02e95237b79f923f0dd0bd25276165f3/p/r/product_glasses_05_1.jpg",
  // },
];

app.use(cors());
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    const selectedProducts=products.find((products)=>products.id ==id)
    res.send(selectedProducts)
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})
