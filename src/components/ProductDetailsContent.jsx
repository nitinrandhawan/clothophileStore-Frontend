import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/slices/Products";
import logo from "../assets/image/logo.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../utils/Loading";
import Footer from "./Footer";

const ProductDetailsContent = () => {
let productDataStructure={
  price: null,
  discountedPrice: null,
  discount: null,
  image: null,
  colorName: "",
  coverImages: [],
  size: [],
  stock: null,
}

  const [productData, setProductData] = useState(productDataStructure);
  let { slug } = useParams();

  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setactiveItem] = useState("Home");
  const navitem = useRef("");
  const dropdownRef = useRef(null);

  const handleNavBar = () => {
    setVisible((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const access_token = useSelector((state) => state.auth.token?.access_token);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartItems = 10;

  const handleItemClick = (e) => {
    console.log(activeItem);

    setactiveItem(e.target.innerText);
  };

  const { loading, error } = useSelector((state) => state.products);
  
  useEffect(() => {
    console.log("slug product details ", slug);
    dispatch(fetchProductDetails(slug));
  }, [dispatch, slug]);


  const { name, description, colors, mainCategory, subCategory } = useSelector(
    (state) => state.products.productDetails
  );
 
  useEffect(() => {
    setProductData(productDataStructure)
    if (colors && colors[0] && colors[0].slug===slug) {
      console.log("colors",colors);
      
      const {
        price,
        discountedPrice,
        discount,
        image,
        coverImages,
        size,
        stock,
        colorName,
      } =
        colors[
          colors.findIndex((color) => {
            return color.slug === slug;
          })
        ];

      setProductData({
        price,
        discountedPrice,
        discount,
        image,
        coverImages,
        size,
        stock,
        colorName,
      });
    }
  }, [colors]);

  let {
    price,
    discountedPrice,
    discount,
    image,
    coverImages,
    size,
    stock,
    colorName,
  } = productData;

  const [mainImage, setMainImage] = useState();

  const changeImage = (src) => {
    setMainImage(src);
  };

 

  useEffect(() => {
    if (image) setMainImage(image);
    else {
      toast.loading("...loading");
    }
  }, [image]);


  let loading2=true;
  return (
    <>

      <Toaster />
    
      

      {loading2 ? (
        <Loading />
      ) : (
       
        ""
      )}
      <Footer />
    </>
  );
};

export default ProductDetailsContent;
