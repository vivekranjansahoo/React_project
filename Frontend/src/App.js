import {Routes , Route, Navigate} from "react-router-dom";

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
import Allitem from "./Pages/Cart/Allitem/Allitem";
import AddressandPayment from "./Pages/Cart/AddressandPayment/AddressandPayment";
import Razorpay from "./components/Razorpay/Razorpay";
import Thankyou from "./components/Thankyou/Thankyou";
import Bill from "./Pages/Bill/Bill";
import OrderRecived from "./Pages/Admin/OrderRecived/OrderRecived";

function App() {
  // const isAuthenticated = true;
  return (
    <div className="App">
      
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/adminlogin' element={<AdminLogin/>} />

      {/* <PrivateRoute
          path="/admindashboard"
          component={AdminDashboard}
          isAuthenticated={isAuthenticated}
          adminOnly={true} // Set this to true if only admin users should access the page
        /> */}

      <Route exact path='/admindashboard' element={<AdminDashboard/>} />cd 

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
      {/* <Route exact path='/addtocart' element={<Allitem/>} /> */}
      </Routes>
    </div>
  );
}

// const PrivateRoute = ({ component: Component, isAuthenticated, adminOnly, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated ? (
//         adminOnly ? (
//           // Check if the user is an admin before rendering the component
//           isAdmin() ? (
//             <Component {...props} />
//           ) : (
//             <Navigate to="/" />
//           )
//         ) : (
//           // Render the component if the user is authenticated and it's not an admin-only page
//           <Component {...props} />
//         )
//       ) : (
//         // Redirect to login if the user is not authenticated
//         <Navigate to="/login" />
//       )
//     }
//   />
// );

export default App;
