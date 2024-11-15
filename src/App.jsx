import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import AuthForm from "./components/AuthForm";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import TermsAndConditions from './pages/TermAndConditions.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ReturnPolicy from "./pages/ReturnPolicy.jsx";
import ContactUs from './pages/ContactUs.jsx'
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
// import FilteredProducts from "./components/FilteredProducts.jsx";
import FilteredProduct2 from "./components/FilteredProduct2.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'
import BagPage from "./pages/BagPage.jsx";
import DiscountedProducts from "./components/DiscountedProducts.jsx";
import AddProduct2 from "./pages/AddProduct2.jsx";
import ProductInfo from "./pages/Tab.jsx";
import SideCartBar from "./components/SideCartBar.jsx";
import ViewCart from "./components/ViewCart.jsx";
import CheckOut from "./components/CheckOut.jsx";

export default function App() {


  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<AuthForm type={"Sign-in"} />} />
          <Route path="sign-up" element={<AuthForm type={"Sign-up"} />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="return-policy" element={<ReturnPolicy/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="All-products" element={<FilteredProduct2/>}/>
        <Route path="view-cart" element={<ViewCart/>}/>
        <Route path="checkout" element={<CheckOut/>}/>

          {/* <Route path="discounted-products" element={<DiscountedProducts/>}/> */}
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-product" element={<AddProduct2 />} />
        <Route path="/bag" element={<BagPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
