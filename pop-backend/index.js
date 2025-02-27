const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors=require('cors')
const Signup = require("./models/signupSchema");
const app = express();
// app.use(cors({
//   origin:""
// }))
app.use(cors())
app.use(express.json());

const PORT = 3001;
dotenv.config();

console.log(process.env.MONGODB_URL);
mdb
  //if it doesn't connect with global host replace it with mongodb://127.0.0:27017/
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection successfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend</h1>");
});

app.get("/static", (req, res) => {
  res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/index2.html");
});
app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 2^10 salting rounds
    //bcrypt.compare()
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: hashedPassword,
      email: email,
    });
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "Signup Successful", isSignUp: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Signup Unsuccessful", isSignUp: false });
  }
});
// app.get("/action.html",(req,res)=>{
//     res.sendFile("C:/Users/Thiri/OneDrive/Desktop/mern/Day2/action.html")
// })

app.get("/getsignupdet",async(req, res) => {
  const signup = await Signup.find();
  console.log(signup);
  res.send("Signup details fetched");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email: email });
    console.log(existingUser);
    if (existingUser) {
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);
      if (isValidPassword) {
        res.status(201).json({ message: "Login successful", isLoggedin: true });
      } else {
        res
          .status(201)
          .json({ message: "Incorrect password", isLoggedin: false });
      }
    } else {
      res
        .status(201)
        .json({ message: "User not found Signup first", isLoggedin: false });
    }
  } catch (error) {
    console.log("Error");
    res.status(400).json({ message: "Login Error", isLoggedin: false });
  }
});




app.listen(PORT, () => {
  console.log("Server started successfully");
});