import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct2() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    mainCategory: [],
    subCategory: [],
    colors: [],
  });
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedMainCategory, setSelectedMainCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [features, setFeatures] = useState([""]);
  const [productDetails, setProductDetails] = useState([""]);
  const [otherDetails, setOtherDetails] = useState([""]);

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
    setFormData((prevData)=>({...prevData,features:newFeatures}))
  };

  const addFeatureField = () => {
    console.log("clicked add field");
    setFeatures([...features, ""]);
  };

  const handleRemoveFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
    setFormData((prevData)=>({...prevData,features}))

  };


  const handleProductDetailsChange = (index, value) => {
    const newProductDetails = [...productDetails];
    newProductDetails[index] = value;
    setProductDetails(newProductDetails);
    setFormData((prevData)=>({...prevData,productDetails:newProductDetails}))

  };

  const addProductDetailsField = () => {
    console.log("clicked add field");
    setProductDetails([...productDetails, ""]);
  };

  const handleRemoveProductDetails = (index) => {
    setProductDetails(productDetails.filter((_, i) => i !== index));
    setFormData((prevData)=>({...prevData,productDetails}))

  };

  const handleOtherDetailsChange = (index, value) => {
    const newOtherDetails = [...otherDetails];
    newOtherDetails[index] = value;
    setOtherDetails(newOtherDetails);
    setFormData((prevData)=>({...prevData,otherDetails:newOtherDetails}))

  };

  const addOtherDetailsField = () => {
    console.log("clicked add field");
    setOtherDetails([...otherDetails, ""]);
  };

  const handleRemoveOtherDetails = (index) => {
    setOtherDetails(otherDetails.filter((_, i) => i !== index));
    setFormData((prevData)=>({...prevData,otherDetails}))

  };

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];
  const mainOptions = ["Men", "Women", "Kids", "Accessories"];
  const subOptions = [
    "T-shirt",
    "Shirt",
    "Jeans",
    "Jacket",
    "Sweater",
    "Watch",
  ];

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

  const updatedColors = [...formData.colors];
  const handleColorChange = (e, index, field) => {
    const { value, files } = e.target;

    if (field === "colorName") {
      updatedColors[index] = { ...updatedColors[index], colorName: value };
    } else if (field === "hexColor") {
      updatedColors[index] = { ...updatedColors[index], hexColor: value };
    } else if (field === "price") {
      updatedColors[index] = { ...updatedColors[index], price: value };
    } else if (field === "discount") {
      updatedColors[index] = { ...updatedColors[index], discount: Math.max(0, Math.min(100, value)) };
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

  

  //   if (group == "size") {
  //     setSelectedSize((prev) =>
  //       checked ? [...selectedSize, value] : selectedSize.filter((option) => option !== value)
  //     );
  //     updatedColors[index] = { ...updatedColors[index], size: selectedSize };

  //     console.log("selectedsize", selectedSize);

  //     setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const submissionData = new FormData();

  //   Object.keys(formData).forEach((key) => {
  //     if (key === "colors" && formData[key].length > 0) {
  //       formData[key].forEach((color, index) => {
  //         if (
  //           [
  //             formData.mainCategory,
  //             formData.subCategory,
  //             formData.name,
  //             formData.description,
  //             color.image,
  //             color.coverImage,
  //             color.colorName,
  //             color.hexColor,
  //             color.price,
  //             color.stock,
  //             color.discount,
  //             color.size,
  //           ].some((option) => option==="")
  //         ) {
  //           return toast.error("All fields are required");
  //         }
  //         if (color.coverImages.length > 4) {
  //         return  toast.error("max limit to upload coverimages is 4");

  //         }

  //         if (color.image)
  //           submissionData.append(`colors[${index}][image]`, color.image);

  //         color.coverImages.forEach((coverImage, coverIndex) => {
  //           if (coverImage) {
  //             submissionData.append(
  //               `colors[${index}][coverImages][${coverIndex}]`,
  //               coverImage
  //             );
  //           }
  //         });

  //         if (color.colorName)
  //           submissionData.append(
  //             `colors[${index}][colorName]`,
  //             color.colorName
  //           );
  //         if (color.hexColor)
  //           submissionData.append(`colors[${index}][hexColor]`, color.hexColor);
  //         if (color.price)
  //           submissionData.append(`colors[${index}][price]`, color.price);
  //         if (color.stock)
  //           submissionData.append(`colors[${index}][stock]`, color.stock);
  //         if (color.discount)
  //           submissionData.append(`colors[${index}][discount]`, color.discount);
  //         color.size.forEach((option, sizeindex) => {
  //           if (option) {
  //             submissionData.append(
  //               `colors[${index}][size][${sizeindex}]`,
  //               option
  //             );
  //           }
  //         });
  //       });
  //     } else if (Array.isArray(formData[key])) {
  //       formData[key].forEach((value) =>
  //         submissionData.append(`${key}[]`, value)
  //       );
  //     } else if (formData[key]) {
  //       submissionData.append(key, formData[key]);
  //     }
  //   });

  //   let productloading;
  //   try {
  //     console.log("FormData contents:", submissionData);
  //     for (let [key, value] of submissionData.entries()) {
  //       console.log(key, value);
  //     }

  //     productloading = toast.loading("...adding product");
  //     console.log("submissionData", submissionData); // Check submissionData
  //     await axios.post("http://localhost:3000/add-product", submissionData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     toast.remove(productloading);
  //     toast.success("Product added successfully");
  //     navigate("/"); // Uncomment if you want to redirect
  //   } catch (error) {
  //     toast.remove(productloading);
  //     console.log("error", error);
  //   }
  // };
  const handleColorCheckBox = (e, index, group) => {
    const { value, checked } = e.target;

    if (group === "size") {
      const updatedSelectedSize = { ...selectedSize };
      if (checked) {
        updatedSelectedSize[index] = updatedSelectedSize[index]
          ? [...updatedSelectedSize[index], value]
          : [value];
      } else {
        updatedSelectedSize[index] = updatedSelectedSize[index].filter(
          (option) => option !== value
        );
      }

      setSelectedSize(updatedSelectedSize);

      const updatedColors = [...formData.colors];
      updatedColors[index] = {
        ...updatedColors[index],
        size: updatedSelectedSize[index],
      };

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
          // Additional checks for each color variant
          if (
            !color.colorName ||
            !color.hexColor ||
            !color.price ||
            !color.stock ||
            !color.discount ||
            !color.image ||
            !color.size ||
            color.coverImages.length > 4
          ) {
            return toast.error(
              "All fields are required, and no more than 4 cover images can be added."
            );
          }
          // Append the form data
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
          color.size.forEach((size, sizeIndex) => {
            submissionData.append(`colors[${index}][size][${sizeIndex}]`, size);
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
    let productloading;

    try {
      const productloading = toast.loading("...adding product");
      await axios.post("http://localhost:3000/add-product", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.remove(productloading);
      // window.location.reload()
      toast.success("Product added successfully");
    } catch (error) {
      toast.remove(productloading);
      toast.error("Error adding product");
      console.log("Error", error);
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
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter product Name"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Enter product description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Discount */}

            {/* Main Category */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="mainCategory"
              >
                Main Category
              </label>
              {mainOptions.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    name="mainCategory"
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
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="subCategory"
              >
                Sub Category
              </label>
              {subOptions.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    name="subCategory"
                    value={option}
                    onChange={(e) => handleCheckboxChange(e, "subCategory")}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Features
              </label>
              {features.map((feature, index) => (
                <div key={index} className="feature-input mt-2">
                  <input
                    type="text"
                    required
                    value={feature}
                    placeholder={`Feature ${index + 1}`}
                    className="w-[80%]"
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                  />
                  <button
                    onClick={() => handleRemoveFeature(index)}
                    type="button"
                    className="bg-red-500 text-white px-5 py-[0.54rem] "
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addFeatureField}
                type="button"
                className="my-5 bg-green-600 px-5 py-2 text-white"
              >
                Add Feature
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Product Details
              </label>
              {productDetails.map((ProductDetail, index) => (
                <div key={index} className="ProductDetails-input mt-2">
                  <input
                    type="text"
                    value={ProductDetail}
                    placeholder={`Product Detail ${index + 1}`}
                    className="w-[80%]"
                    required
                    onChange={(e) => handleProductDetailsChange(index, e.target.value)}
                  />
                  <button
                    onClick={() => handleRemoveProductDetails(index)}
                    type="button"
                    className="bg-red-500 text-white px-5 py-[0.54rem] "
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addProductDetailsField}
                type="button"
                className="my-5 bg-green-600 px-5 py-2 text-white"
              >
                Add Product Details
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Other Details
              </label>
              {otherDetails.map((otherDetail, index) => (
                <div key={index} className="OtherDetails-input mt-2">
                  <input
                    type="text"
                    value={otherDetail}
                    placeholder={`OtherDetail ${index + 1}`}
                    required
                    className="w-[80%]"
                    onChange={(e) => handleOtherDetailsChange(index, e.target.value)}
                  />
                  <button
                    onClick={() => handleRemoveOtherDetails(index)}
                    type="button"
                    className="bg-red-500 text-white px-5 py-[0.54rem] "
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addOtherDetailsField}
                type="button"
                className="my-5 bg-green-600 px-5 py-2 text-white"
              >
                Add Other Details
              </button>
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
                    <label
                      className="block text-gray-700 font-medium"
                      htmlFor={`colorName-${index}`}
                    >
                      Color Name
                    </label>
                    <input
                      type="text"
                      id={`colorName-${index}`}
                      value={color.colorName}
                      onChange={(e) => handleColorChange(e, index, "colorName")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Enter color name"
                      required
                    />
                  </div>

                  {/* Hex Color */}
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 font-medium"
                      htmlFor={`hexColor-${index}`}
                    >
                      Hex Color
                    </label>
                    <input
                      type="text"
                      id={`hexColor-${index}`}
                      value={color.hexColor}
                      onChange={(e) => handleColorChange(e, index, "hexColor")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="#FFFFFF"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="size"
                    >
                      Size
                    </label>
                    {sizeOptions.map((option, sizeIndex) => (
                      <label key={option} className="block">
                        <input
                          type="checkbox"
                          name="size"
                          value={option}
                          onChange={(e) =>
                            handleColorCheckBox(e, index, "size")
                          }
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 font-medium"
                      htmlFor={`price-${index}`}
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id={`price-${index}`}
                      value={color.price}
                      onChange={(e) => handleColorChange(e, index, "price")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Price"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="discount"
                    >
                      Discount
                    </label>
                    <input
                      type="number"
                      id="discount"
                      name="discount"
                      value={color.discount}
                      min={0}
                      max={100}
                      onChange={(e) => handleColorChange(e, index, "discount")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter discount"
                      required
                    />
                  </div>

                  {/* Stock */}
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 font-medium"
                      htmlFor={`stock-${index}`}
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      id={`stock-${index}`}
                      value={color.stock}
                      onChange={(e) => handleColorChange(e, index, "stock")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      placeholder="Stock"
                      required
                    />
                  </div>

                  {/* Color Image */}
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 font-medium"
                      htmlFor={`colorImage-${index}`}
                    >
                      Color Image
                    </label>
                    <input
                      type="file"
                      id={`colorImage-${index}`}
                      onChange={(e) =>
                        handleColorChange(e, index, "colorImage")
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      required
                    />
                  </div>

                  {/* Cover Images */}
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 font-medium"
                      htmlFor={`coverImages-${index}`}
                    >
                      Cover Images (maximum 4)
                    </label>
                    <input
                      type="file"
                      id={`coverImages-${index}`}
                      multiple
                      onChange={(e) =>
                        handleColorChange(e, index, "coverImages")
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct2;
