// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function AddProduct() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     image: null,
//     coverImages: [],
//     price: "",
//     discount: "",
//     mainCategory: [],
//     subCategory: [],
//     stock: "",
//     size: [],
//     color: "",
//   });
//   const navigate = useNavigate();
//   const [selectedSize, setSelectedSize] = useState([]);
//   const [selectedMainCategory, setSelectedMainCategory] = useState([]);
//   const [selectedSubCategory, setSelectedSubCategory] = useState([]);
//   const sizeOptions = ["S", "M", "L", "XL", "XXL"];
//   const mainOptions = ["Men", "Women", "Kids", "Accessories"];
//   const subOptions = [
//     "T-shirt",
//     "Shirt",
//     "Jeans",
//     "Jacket",
//     "Sweater",
//     "Watch",
//   ];
//   const handleCheckboxChange = (e, group) => {
//     const { value, checked } = e.target;
//     const updateGroup = (currentState, setState) => {
//       if (checked) {
//         setState([...currentState, value]);
//       } else {
//         setState(currentState.filter((option) => option !== value));
//       }
//     };

//     if (group === "size") {
//       updateGroup(selectedSize, setSelectedSize);
//       console.log("selectedSize", selectedSize);
//     } else if (group === "mainCategory") {
//       updateGroup(selectedMainCategory, setSelectedMainCategory);
//       console.log("selectedMainCategory", selectedMainCategory);
//     } else if (group === "subCategory") {
//       updateGroup(selectedSubCategory, setSelectedSubCategory);
//       console.log("selectedSubCategory", selectedSubCategory);
//     }
//   };
//   const { role, access_token } = useSelector((state) => state.auth?.token);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name } = e.target;
//     const files = Array.from(e.target.files);

//     if (name === "coverImages" && e.target.files.length < 3) {
//       return toast.error("please upload atleast 3 cover images");
//     }
//     if (name === "coverImages" && e.target.files.length > 5) {
//       return toast.error("please upload only 5 cover images");
//     }
//     if (name === "coverImages") {
//       console.log("files", files);
//       setFormData((prevData) => ({
//         ...prevData,
//         coverImages: files,
//       }));
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.coverImages.length < 4) {
//       return toast.error("please upload atleast 3 cover images");
//     }

//     formData.mainCategory = selectedMainCategory;
//     formData.subCategory = selectedSubCategory;
//     formData.size = selectedSize;
   

//     const submissionData = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === "coverImages") {
//         if (!formData.key) {
//           return toast.error("All fields are required");
//         }
//         formData[key].forEach((file) => {
//           submissionData.append("coverImages", file);
//         });
//       } else if (Array.isArray(formData[key])) {
//         formData[key].forEach((value) => {
//           submissionData.append(`${key}`, value);
//         });
//       } else {
//         submissionData.append(key, formData[key]);
//       }
//     });
   

//     let productloading;
//     try {
//       productloading = toast.loading("...adding product");
//       await axios.post("https://clothophile.onrender.com/add-product", submissionData, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       toast.remove(productloading);
//       toast.success("product added successfully");
//       // navigate("/");
//     } catch (error) {
//       toast.remove(productloading);
//       return toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (role !== "admin" || !access_token ) navigate("/");
//   }, [role,access_token]);
//   return role === "admin" ? (
//     <>
//       <Toaster />
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 box-border">
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
//           <h2 className="text-2xl font-bold mb-6 text-center">
//             Add New Product
//           </h2>
//           <form onSubmit={handleSubmit}>
//             {/* name */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="name"
//               >
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 placeholder="Enter product Name"
//                 required
//               />
//             </div>

//             {/* Description */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="description"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
//                 placeholder="Enter product description"
//                 rows="4"
//                 required
//               ></textarea>
//             </div>

//             {/* Price */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="price"
//               >
//                 Price (₹)
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 placeholder="Enter price"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="discount"
//               >
//                 Discount
//               </label>
//               <input
//                 type="number"
//                 id="discount"
//                 name="discount"
//                 value={formData.discount}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 placeholder="Enter discount"
//                 required
//               />
//             </div>
//             {/* Category */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="mainCategory"
//               >
//                 Main Category
//               </label>
//               {mainOptions.map((option) => (
//                 <label key={option} className="block">
//                   <input
//                     type="checkbox"
//                     name="mainOptions"
//                     value={option}
//                     onChange={(e) => handleCheckboxChange(e, "mainCategory")}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="subCategory"
//               >
//                 Sub Category
//               </label>
//               {subOptions.map((option) => (
//                 <label key={option} className="block">
//                   <input
//                     type="checkbox"
//                     name="subCategory"
//                     value={option}
//                     onChange={(e) => handleCheckboxChange(e, "subCategory")}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>

//             {/* Stock */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="stock"
//               >
//                 Stock
//               </label>
//               <input
//                 type="number"
//                 id="stock"
//                 name="stock"
//                 value={formData.stock}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 placeholder="Enter available stock"
//                 required
//               />
//             </div>

//             {/* Size */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="size"
//               >
//                 Size
//               </label>

//               {sizeOptions.map((option) => (
//                 <label key={option} className="block">
//                   <input
//                     type="checkbox"
//                     name="size"
//                     value={option}
//                     onChange={(e) => handleCheckboxChange(e, "size")}
//                     className="mr-2"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>

//             {/* Color */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="color"
//               >
//                 Color
//               </label>
//               <input
//                 type="text"
//                 id="color"
//                 name="color"
//                 value={formData.color}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 placeholder="Enter color"
//                 required
//               />
//             </div>

//             {/* Upload Photo */}
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="image"
//               >
//                 Upload image
//               </label>
//               <input
//                 type="file"
//                 id="image"
//                 name="image"
//                 onChange={handleFileChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 accept="image/*"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-medium mb-2"
//                 htmlFor="coverImages"
//               >
//                 Upload Cover Images{" "}
//                 <span className="text-red-600">(Atleast three)</span>
//               </label>
//               <input
//                 type="file"
//                 id="coverImages"
//                 name="coverImages"
//                 onChange={handleFileChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 accept="image/*"
//                 multiple
//                 required
//               />
//             </div>
//             {/* Submit Button */}
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
//               >
//                 Add Product
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   ) : null;
// }

// export default AddProduct;



import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    mainCategory: [],
    subCategory: [],
    colors: [],
  });
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];
  const mainOptions = ["Men", "Women", "Kids", "Accessories"];
  const subOptions = ["T-shirt", "Shirt", "Jeans", "Jacket", "Sweater", "Watch"];

  const handleCheckboxChange = (e, group) => {
    const { value, checked } = e.target;
    let updatedGroup;

    if (group === "mainCategory") {
      updatedGroup = checked
        ? [...selectedMainCategory, value]
        : selectedMainCategory.filter((option) => option !== value);
      setSelectedMainCategory(updatedGroup);
      setFormData((prev) => ({ ...prev, mainCategory: updatedGroup }));
    } else if (group === "subCategory") {
      updatedGroup = checked
        ? [...selectedSubCategory, value]
        : selectedSubCategory.filter((option) => option !== value);
      setSelectedSubCategory(updatedGroup);
      setFormData((prev) => ({ ...prev, subCategory: updatedGroup }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleColorChange = (e, index, field) => {
    const { value, files } = e.target;
    const updatedColors = [...formData.colors];

    if (field === "colorName") {
      updatedColors[index] = { ...updatedColors[index], colorName: value };
    } else if (field === "hexColor") {
      updatedColors[index] = { ...updatedColors[index], hexColor: value };
    } else if (field === "price") {
      updatedColors[index] = { ...updatedColors[index], price: value };
    } else if (field === "discount") {
      updatedColors[index] = { ...updatedColors[index], discount: value };
    } else if (field === "stock") {
      updatedColors[index] = { ...updatedColors[index], stock: value };
    } else if (field === "colorImage") {
      updatedColors[index] = { ...updatedColors[index], image: files[0] };
    } else if (field === "coverImages") {
      updatedColors[index] = {
        ...updatedColors[index],
        coverImages: Array.from(files),
      };
    }

    setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
  };

  const handleAddColor = () => {
    setFormData((prevData) => ({
      ...prevData,
      colors: [
        ...prevData.colors,
        {
          colorName: "",
          hexColor: "",
          price: "",
          discount: "",
          stock: "",
          image: null,
          coverImages: [],
        },
      ],
    }));
  };

  const handleColorCheckBox = (e, index, group) => {
    const { value, checked } = e.target;
    if (group === "size") {
      let updatedSizes = checked
        ? [...selectedSize, value]
        : selectedSize.filter((option) => option !== value);

      const updatedColors = [...formData.colors];
      updatedColors[index] = {
        ...updatedColors[index],
        size: updatedSizes,
      };

      setSelectedSize(updatedSizes);
      setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let color of formData.colors) {
      if (
        !color.colorName ||
        !color.hexColor ||
        !color.price ||
        !color.stock ||
        !color.discount ||
        !color.image ||
        color.coverImages.length > 4
      ) {
        return toast.error(
          "Please complete all required fields and ensure no more than 4 cover images."
        );
      }
    }

    const submissionData = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "colors" && formData[key].length > 0) {
        formData[key].forEach((color, index) => {
          submissionData.append(`colors[${index}][colorName]`, color.colorName);
          submissionData.append(`colors[${index}][hexColor]`, color.hexColor);
          submissionData.append(`colors[${index}][price]`, color.price);
          submissionData.append(`colors[${index}][stock]`, color.stock);
          submissionData.append(`colors[${index}][discount]`, color.discount);
          submissionData.append(`colors[${index}][image]`, color.image);

          color.coverImages.forEach((coverImage, coverIndex) => {
            submissionData.append(
              `colors[${index}][coverImages][${coverIndex}]`,
              coverImage
            );
          });
        });
      } else if (Array.isArray(formData[key])) {
        formData[key].forEach((value) =>
          submissionData.append(`${key}[]`, value)
        );
      } else if (formData[key]) {
        submissionData.append(key, formData[key]);
      }
    });

    try {
      const productLoading = toast.loading("...adding product");
      await axios.post("https://clothophile.onrender.com/add-product", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.remove(productLoading);
      toast.success("Product added successfully");
      navigate("/");
    } catch (error) {
      toast.remove(productLoading);
      toast.error("Error adding product");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 box-border">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Add New Product
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none resize-none"
                rows="4"
                required
              />
            </div>

            {/* Main Category */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Main Category
              </label>
              {mainOptions.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) => handleCheckboxChange(e, "mainCategory")}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Sub Category */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Sub Category
              </label>
              {subOptions.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    value={option}
                    onChange={(e) => handleCheckboxChange(e, "subCategory")}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Color Variants */}
            <div className="mb-4">
              <button
                type="button"
                onClick={handleAddColor}
                className="btn btn-primary mb-2 border bg-red-500 text-white h-10 rounded-lg  w-full"
              >
                Add Color Variant
              </button>
              {formData.colors.map((color, index) => (
                <div key={index} className="color-variant mb-4">
                  {/* Color Name */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Color Name
                    </label>
                    <input
                      type="text"
                      value={color.colorName}
                      onChange={(e) => handleColorChange(e, index, "colorName")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      required
                    />
                  </div>

                  {/* Hex Color */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Color Hex
                    </label>
                    <input
                      type="text"
                      value={color.hexColor}
                      onChange={(e) => handleColorChange(e, index, "hexColor")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="#FFFFFF"
                      required
                    />
                  </div>

                  {/* Sizes */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Sizes
                    </label>
                    {sizeOptions.map((sizeOption) => (
                      <label key={sizeOption} className="mr-2">
                        <input
                          type="checkbox"
                          value={sizeOption}
                          onChange={(e) =>
                            handleColorCheckBox(e, index, "size")
                          }
                          className="mr-1"
                        />
                        {sizeOption}
                      </label>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Price
                    </label>
                    <input
                      type="number"
                      value={color.price}
                      onChange={(e) => handleColorChange(e, index, "price")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Enter price"
                      required
                    />
                  </div>

                  {/* Discount */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Discount (%)
                    </label>
                    <input
                      type="number"
                      value={color.discount}
                      onChange={(e) => handleColorChange(e, index, "discount")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Enter discount percentage"
                      required
                    />
                  </div>

                  {/* Stock */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Stock
                    </label>
                    <input
                      type="number"
                      value={color.stock}
                      onChange={(e) => handleColorChange(e, index, "stock")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Stock"
                      required
                    />
                  </div>

                  {/* Color Image */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Color Image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => handleColorChange(e, index, "colorImage")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      required
                    />
                  </div>

                  {/* Cover Images */}
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium">
                      Cover Images (max 4)
                    </label>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleColorChange(e, index, "coverImages")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
