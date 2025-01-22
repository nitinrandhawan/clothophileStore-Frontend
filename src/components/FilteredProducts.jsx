import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  discountProducts,
  fetchHighToLowProducts,
  fetchLatestProducts,
  fetchProducts,
  fetchSellProducts,
  highToLowProducts,
  newestProducts,
  updateProducts,
} from "../redux/slices/Products";
import Loading from "../utils/Loading.jsx";
import axios from "axios";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const sortOptions = [
  { name: "Best Rating", href: "#", current: false },
  { name: "Discount", href: "/filter-products?discount=true", current: false },
  { name: "Newest", href: "/filter-products?newest=true", current: false },
  { name: "Price: Low to High", href: "/filter-products?lowtohigh=true", current: false },
  { name: "Price: High to Low", href: "/filter-products?hightolow=true", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FilteredProducts() {
  const query = useQuery();
  let discount = query.get("discount"); 
  let newest = query.get("newest");
  let highToLow = query.get("hightolow");
  let lowToHigh = query.get("lowtohigh");
  let colorNames =
    query.get("colorName")?.length === 1
      ? [query.get("colorName")]
      : query.get("colorName")?.split(",") || [];

  let price = [];
  try {
    price = query.get("price")
      ? JSON.parse(decodeURIComponent(query.get("price")))
      : [];
  } catch (error) {
    console.error("Invalid price format:", error);
  }

  let size =
    query.get("size")?.length === 1
      ? [query.get("size")]
      : query.get("size")?.split(",") || [];

  console.log("Color Names:", colorNames);
  console.log("Price Ranges:", price);
  console.log("Size:", size);

  const [filters, setFilters] = useState([
    {
      id: "color",
      name: "Color",
      options: [],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S", checked: false },
        { value: "M", label: "M", checked: false },
        { value: "L", label: "L", checked: false },
        { value: "XL", label: "XL", checked: false },
        { value: "XXL", label: "XXL", checked: false },
      ],
    },
    {
      id: "price",
      name: "Price",
      options: [
        { value: "200-400", label: " ₹200 - ₹400", checked: false },
        { value: "400-600", label: " ₹400 - ₹600", checked: false },
        { value: "600-1000", label: " ₹600 - ₹1000", checked: false },
        { value: "1000-2000", label: " ₹1000 - ₹2000", checked: false },
        {
          value: "2000-1.7976931348623157e+308",
          label: " up to  ₹2000",
          checked: false,
        },
      ],
    },
  ]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const dispatch = useDispatch();

  const [selectedPriceRanges, setselectedPriceRanges] = useState([]);
  const [selectedsizeRanges, setselectedsizeRanges] = useState([]);
  const [selectedcolorNames, setselectedcolorNames] = useState([]);

  const navigate = useNavigate();

  const handleChecked = (e, sectionId) => {
    const { checked, value } = e.target;

    if (sectionId === "price") {
      let minPrice, maxPrice;
      if (value.includes("-")) {
        [minPrice, maxPrice] = value.split("-").map(Number);
        setselectedPriceRanges((prevRanges) => {
          const updatedRanges = checked
            ? [...prevRanges, { minPrice, maxPrice }]
            : prevRanges.filter(
                (range) =>
                  range.minPrice !== minPrice || range.maxPrice !== maxPrice
              );
          updateQueryParams(
            selectedsizeRanges,
            selectedcolorNames,
            updatedRanges
          ); // Pass updated values
          return updatedRanges;
        });
      }
    } else if (sectionId === "size") {
      setselectedsizeRanges((prevRanges) => {
        const updatedRanges = checked
          ? [...prevRanges, value]
          : prevRanges.filter((range) => range !== value);
        updateQueryParams(
          updatedRanges,
          selectedcolorNames,
          selectedPriceRanges
        ); // Pass updated values
        return updatedRanges;
      });
    } else if (sectionId === "color") {
      setselectedcolorNames((prevRanges) => {
        const updatedRanges = checked
          ? [...prevRanges, value]
          : prevRanges.filter((range) => range !== value);
        updateQueryParams(
          selectedsizeRanges,
          updatedRanges,
          selectedPriceRanges
        ); // Pass updated values
        return updatedRanges;
      });
    }
  };

  const updateQueryParams = (sizeRanges, colorNames, priceRanges) => {
    const colorQuery =
      colorNames?.length === 1 ? colorNames[0] : colorNames.join(",");
    const sizeQuery =
      sizeRanges?.length === 1 ? sizeRanges[0] : sizeRanges.join(",");
    const priceQuery = encodeURIComponent(JSON.stringify(priceRanges));

    const queryParams = new URLSearchParams({
      colorName: colorQuery,
      size: sizeQuery,
      price: priceQuery,
    });
    if (
      sizeRanges.length === 0 &&
      priceRanges.length === 0 &&
      colorNames.length === 0
    ) {
      navigate("/filter-products");
    } else {
      navigate(`/filter-products?${queryParams.toString()}`);
    }
    console.log(
      "priceRanges2:",
      priceRanges,
      "sizeRanges:",
      sizeRanges,
      "colorName:",
      colorNames
    );
  };

  const filterRange = async () => {
    console.log("size ranges2", selectedsizeRanges);
    console.log("colorname", selectedcolorNames);
    console.log("SizeOfQueryzzzzzzzzzz:", size);


if(discount){
  dispatch(discountProducts())
}
if(newest){
  dispatch(newestProducts())
}
if(highToLow){
  dispatch(highToLowProducts())
}


    if (colorNames[0] === "") {
      colorNames = [];
    }
    if (size[0] === "") {
      size = [];
    }

    let DataToSend = {
      priceRanges: price,
      sizeRanges: size,
      colorName: colorNames,
    };
    console.log("dataTosend", DataToSend);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/filter-products",
        DataToSend
      );
      dispatch(updateProducts({ data: data.AllProducts }));
      console.log("data", data.AllProducts);
    } catch (error) {
      console.log("filter data error");
      toast.error("something went wrong please try later");
    }
  };

  const handleSortOption = (e) => {
    console.log("sort item", e.target.innerText);
    if (e.target.innerText === "Discount") {
      // navigate("/filter-products?discount=true");
     
    } else if (e.target.innerText === "Newest") {
      // dispatch(newestProducts());
    } else if (e.target.innerText === "Price: Low to High") {
      dispatch(fetchProducts());
    } else if (e.target.innerText === "Price: High to Low") {
      // dispatch(highToLowProducts());
    }
    sortOptions.map((option) => {
      if (option.name === e.target.innerText) {
        option.current = true;
      } else {
        option.current = false;
      }
    });
  };
  const filtersInitialized = useRef(false);
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    // dispatch(fetchProducts());
    dispatch(fetchSellProducts());
    dispatch(fetchLatestProducts());
    dispatch(fetchHighToLowProducts());
  }, [dispatch]);

  useEffect(() => {
    filterRange();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedPriceRanges, selectedsizeRanges, selectedcolorNames,discount,newest,highToLow,lowToHigh]);

  useEffect(() => {
    if (!filtersInitialized.current && products && products.length > 0) {
      const uniqueColorNames = [
        ...new Set(
          products
            .map((product) => product.colors.map((color) => color.colorName))
            .flat()
        ),
      ];

      const options = uniqueColorNames.map((colorName) => ({
        value: colorName.toLowerCase(),
        label: colorName.charAt(0).toUpperCase() + colorName.slice(1),
        checked: false,
      }));

      // Update the filters state
      setFilters((prevFilters) =>
        prevFilters.map((filter) =>
          filter.id === "color" ? { ...filter, options } : filter
        )
      );
      filtersInitialized.current = true;
    }
    console.log("chaning names");
    if(discount){
      dispatch(discountProducts());
    }
    if(newest){
      dispatch(newestProducts());
    }
    if(highToLow){
      dispatch(highToLowProducts());
    }
  }, [products, window.location]);

  useEffect(() => {
    if(discount){
      sortOptions[1].current=true
    }
    if(newest){
      sortOptions[2].current=true
    }
    if(lowToHigh){
      sortOptions[3].current=true
    }
    if(highToLow){
      sortOptions[4].current=true
    }
    filterRange();
  }, []);
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        {
          <Dialog
            open={mobileFiltersOpen}
            onClose={setMobileFiltersOpen}
            className="relative z-[60] lg:hidden"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-[60] flex">
              <DialogPanel
                transition
                className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full "
              >
                {/* <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div> */}

                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {/* <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul> */}
                  {/* smaller screen */}

                  <h1>Smaller Screen</h1>
                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-t border-gray-200 px-4 py-6"
                      defaultOpen
                    >
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="h-5 w-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                onClick={(e) => handleChecked(e, section.id)}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </DialogPanel>
            </div>
          </Dialog>
        }

        <main className="mx-auto max-w-7xl px-4 smallest:px-0 sm:px-6  lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6 smaller1:px-3 smallest:px-2">
            <h1 className="text-[2.5rem] md:text-[2rem] lg:text-[2.5rem] sm:text-[1.5rem] smaller1:text-[1.3rem] smallest:text-[1.1rem] font-openSans tracking-wider font-medium text-gray-900">
              Filters
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name} onClick={handleSortOption}>
                        <Link
                          to={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          )}
                        >
                          {option.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex gap-10">
              {/* grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4  */}
              {/* Filters */}
              <form className="hidden lg:block w-[22rem]">
                {/* <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}
                {/* mobile screen */}
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                    defaultOpen
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              onClick={(e) => handleChecked(e, section.id)}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              {/* {/* //gap-y-12   w-[60rem]} */}
              <div
                className={`w-full   ${
                  loading
                    ? "flex items-start justify-center"
                    : "flex flex-wrap sm:justify-start justify-center gap-4 gap-y-12 max-xl:gap-3 max-xl:gap-y-10 max-lg:gap-2 max-lg:gap-y-12 mx-auto max-w-screen-lg  "
                }`}
              >
                <Toaster />
                {loading ? (
                  <Loading />
                ) : (
                  products.map((product) => {
                    return (
                      <Link
                        to={`/product/${product.colors[0].slug}`}
                        key={product.colors[0].slug}
                        className={
                          "w-full smaller:w-[48%] smallest:w-[90%] smaller1:w-[48.6%] sm:w-[32%] md:w-[32%] lg:w-[30%] xl:w-[32%]"
                        }
                      >
                        <Card
                          image={product.colors[0].image}
                          price={product.colors[0].price}
                          discount={product.colors[0].discount}
                          heading={product.name}
                          className={"w-[100%] "}
                        />
                      </Link>
                    );
                  })
                )} {!products.length && !loading ? (
                  <div className="flex  justify-center font-openSans text-gray-500 relative top-4 w-full">
                    <p className="text-lg md:text-xl lg:text-2xl">
                      No products available.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>

             
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FilteredProducts;
