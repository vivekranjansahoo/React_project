import {Routes , Route } from "react-router-dom";

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AdminLogin from './Pages/AdminLogin/AdminLogin'
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminProduct from "./Pages/Admin/AddProduct/AddProduct"
import AllProduct from "./Pages/Admin/AllProduct/AllProduct";
import ProductDetails from "./Pages/ProductDeatails/ProductDetails";
import DeleteProduct from "./Pages/Admin/Delete/DeleteProduct";
import AddressandPayment from "./Pages/Cart/AddressandPayment/AddressandPayment";
import Razorpay from "./components/Razorpay/Razorpay";
import Thankyou from "./components/Thankyou/Thankyou";
import Bill from "./Pages/Bill/Bill";
import OrderRecived from "./Pages/Admin/OrderRecived/OrderRecived";
import Billdetails from "./Pages/Admin/Billdetails/Billdetails";
import Furniture from "./Pages/CatagoryItem/Furniture/Furniture";
import Lighting from "./Pages/CatagoryItem/Lighting/Lighting";
import Outdoor from "./Pages/CatagoryItem/Outdoor/Outdoor";
import Windowa from "./Pages/CatagoryItem/Window/Window";
import Andkids from "./Pages/CatagoryItem/&kids/Andkids";
import Bath from "./Pages/CatagoryItem/Bath/Bath";
import Bedding from "./Pages/CatagoryItem/Bedding/Bedding";
import DecordandPillows from "./Pages/CatagoryItem/Decor & Pillows/Decor&Pillows";
import Gifts from "./Pages/CatagoryItem/Gifts/Gifts";
import Kitchen from "./Pages/CatagoryItem/Kitchen/Kitchen";
import Rugs from "./Pages/CatagoryItem/Rugs/Rugs";
import Sale from "./Pages/CatagoryItem/Sale/Sale";
import TableandBar from "./Pages/CatagoryItem/Tabletop & Bar/Tabletop&Bar";

function App() {
  // const isAuthenticated = true;
  return (
    <div className="App">
      
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/adminlogin' element={<AdminLogin/>} />
      <Route exact path='/admindashboard' element={<AdminDashboard/>} />
      <Route exact path='/userdashboard' element={<UserDashboard/>} />
      <Route exact path='/addproduct'  element={<AdminProduct/>} />
      <Route exact path='/allproduct' element={<AllProduct/>} />
      <Route exact path='/productdetails/:id' element={<ProductDetails/>} />
      <Route exact path='/deleteproduct/:id' element={<DeleteProduct/>} />
      <Route exact path='/addresspay' element={<AddressandPayment/>} />
      <Route exact path='/payment' element={<Razorpay/>} />
      <Route exact path='/thankyou' element={<Thankyou/>} />
      <Route exact path='/bill' element={<Bill/>} />
      <Route exact path='/orderrecived' element={<OrderRecived/>} />
      <Route exact path='/billdetails/:billno' element={<Billdetails/>} />
      <Route exact path='/userdashboard/:catagory' element={<Furniture/>} />
      <Route exact path='/userdashboard/andkids/:catagory' element={<Andkids/>} />
      <Route exact path='/userdashboard/outdoor/:catagory' element={<Outdoor/>} />
      <Route exact path='/userdashboard/bath/:catagory' element={<Bath/>} />
      <Route exact path='/userdashboard/bedding/:catagory' element={<Bedding/>} />
      <Route exact path='/userdashboard/decorandpillows/:catagory' element={<DecordandPillows/>} />
      <Route exact path='/userdashboard/gifts/:catagory' element={<Gifts/>} />
      <Route exact path='/userdashboard/kitchen/:catagory' element={<Kitchen/>} />
      <Route exact path='/userdashboard/rugs/:catagory' element={<Rugs/>} />
      <Route exact path='/userdashboard/windowa/:catagory' element={<Windowa/>} />
      <Route exact path='/userdashboard/sale/:catagory' element={<Sale/>} />
      <Route exact path='/userdashboard/tabletopandbar/:catagory' element={<TableandBar/>} />
      <Route exact path='/userdashboard/lighting/:catagory' element={<Lighting/>} />
      </Routes>
    </div>
  );
}


export default App;
