const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'vivek';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mern?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const User = require('./Models/User');
const Product = require('./Models/Product');

// const userSchema = new mongoose.Schema({
//     email: String,
//     password: String
//   });
//   const admin = mongoose.model('admin', userSchema);

app.post('/register', async (req, res) => {
  try {
    const { firstname,lastname,email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ firstname,lastname,email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/productregister', async (req, res) => {
    try {
      const { name,image,desc,price } = req.body;
      const existingProduct = await User.findOne({ name });
  
      if (existingProduct) {
        return res.status(400).json({ message: 'product already exists' });
      }
      const newProduct = new Product({ name,image, desc, price });
      await newProduct.save();
  
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to added product' });
    }
  });


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
});

// app.post('/adminlogin', async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await admin.findOne({ email });
//       res.json({ user });
  
//       if (!user || user.password !== password) {
//         return res.status(401).json({ message: 'Invalid  Admin credentials' });
//       }
  
//       const token = jwt.sign({ userId: user._id }, SECRET_KEY);
//       res.json({ token });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to login' });
//     }
//   });


app.get("/getproduct",async (req, res) => {

    try {
        await Product.find({}).then(data=>{
            res.send({status:"ok",data})
        })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
})

app.get("/count",async (req, res) => {

    try {
        const pcount=await Product.find().count();
        const ucount=await User.find().count();
        res.json({ count: ucount, ccount: pcount});
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
})

app.get("/productdetails/:id",async (req, res) => {

    const id = req.params.id;
    try {
        const data = await Product.findById(id);
        if (data) {
          res.json(data);
        } else {
          res.status(404).json({ message: 'Data not found' });
        }
    }
     catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
})

app.delete("/deleteproduct/:id",async (req, res) => {

    const id = req.params.id;
    try {
        const data = await Product.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json({ message: 'Item not found' });
          }
          res.json({ message: 'Item deleted successfully', data });
    }
     catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
})






const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
};


app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
