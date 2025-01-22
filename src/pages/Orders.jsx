import React from "react";

const Orders = () => {
  // Sample order data (replace with real data fetched from an API)
  const orders = [
    {
      orderNo: "ORD12345678",
      date: "2024-11-20",
      status: "Shipped", // Possible statuses: Pending, Shipped, Delivered, Cancelled
      totalAmount: "$150.00",
      address: {
        name: "John Doe",
        phone: "123-456-7890",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        postalCode: "10001",
      },
      items: [
        {
          name: "Men's T-shirt",
          quantity: 2,
          image: "https://via.placeholder.com/80",
        },
        {
          name: "Wireless Headphones",
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
      ],
    },
    {
      orderNo: "ORD98765432",
      date: "2024-11-18",
      status: "Delivered",
      totalAmount: "$230.00",
      address: {
        name: "Jane Smith",
        phone: "987-654-3210",
        street: "456 Park Ave",
        city: "San Francisco",
        state: "CA",
        postalCode: "94103",
      },
      items: [
        {
          name: "Gaming Keyboard",
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
        {
          name: "Mouse Pad",
          quantity: 3,
          image: "https://via.placeholder.com/80",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Orders</h1>

      {/* Orders List */}
      <div className="w-full max-w-5xl space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-700 font-medium">
                  Order No: <span className="text-gray-500">{order.orderNo}</span>
                </p>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
              </div>
              <p
                className={`text-sm font-medium ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : order.status === "Shipped"
                    ? "text-blue-600"
                    : order.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </p>
            </div>

            {/* Order Items */}
            <div className="border-t pt-4">
              <h3 className="text-gray-800 font-medium mb-2">Items:</h3>
              <ul className="space-y-4">
                {order.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between space-x-4"
                  >
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    {/* Item Details */}
                    <div className="flex-1">
                      <p className="text-gray-700 font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Section */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-gray-800 font-medium mb-2">Shipping Address:</h3>
              <div className="text-sm text-gray-600">
                <p>
                  <span className="font-medium">Name:</span> {order.address.name}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {order.address.phone}
                </p>
                <p>
                  <span className="font-medium">Street:</span> {order.address.street}
                </p>
                <p>
                  <span className="font-medium">City:</span> {order.address.city}
                </p>
                <p>
                  <span className="font-medium">State:</span> {order.address.state}
                </p>
                <p>
                  <span className="font-medium">Postal Code:</span>{" "}
                  {order.address.postalCode}
                </p>
              </div>
            </div>

            {/* Order Footer */}
            <div className="border-t pt-4 mt-4 flex justify-between items-center">
              <p className="text-gray-700 font-medium">
                Total Amount: <span className="text-gray-500">{order.totalAmount}</span>
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium"
                onClick={() => alert(`Track order ${order.orderNo}`)}
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
