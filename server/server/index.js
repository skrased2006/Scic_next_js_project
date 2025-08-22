import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion,ObjectId  } from "mongodb";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads"))); // serve images

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jogbo5m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

let productCollection;

async function run() {
  try {
    const db = client.db('next_js_project_db');
    productCollection = db.collection("products");
    console.log("MongoDB connected");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

// Configure multer
// GET all products
app.get("/products", async (req, res) => {
  try {
    const products = await productCollection.find().toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new product with image
app.post("/products", async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body; // নতুন fields
    const result = await productCollection.insertOne({
      name,
      description,
      price,
      image,
      category,
      stock,
      createdAt: new Date(), 
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// GET product by id
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productCollection.findOne({ _id: new ObjectId(id) });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET recent products
app.get("/recentProduct", async (req, res) => {
  try {
    const recentProducts = await productCollection
      .find()
      .sort({ _id: -1 }) // latest first
      .limit(9)
      .toArray();

    res.json(recentProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch recent products" });
  }
});
