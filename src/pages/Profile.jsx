import React, { useState } from "react";

const Profile = () => {
  // Sample user data (replace with real data from backend)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    addresses: [
      {
        label: "Home Address",
        line1: "123 Elm Street",
        line2: "Springfield, USA",
        postalCode: "12345",
      },
      {
        label: "Work Address",
        line1: "456 Maple Avenue",
        line2: "Metropolis, USA",
        postalCode: "67890",
      },
    ],
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    address: null, // null when not editing, otherwise the index of the address being edited
  });

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field, newValue) => {
    if (field === "address") {
      const { index, updatedAddress } = newValue;
      const updatedAddresses = [...user.addresses];
      updatedAddresses[index] = updatedAddress;
      setUser({ ...user, addresses: updatedAddresses });
    } else {
      setUser({ ...user, [field]: newValue });
    }
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Profile Header */}
      <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-4xl mb-6">
        <div className="flex justify-between items-center">
          <div>
            {isEditing.name ? (
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2"
                defaultValue={user.name}
                onBlur={(e) => handleSave("name", e.target.value)}
              />
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-600">Profile</p>
              </>
            )}
          </div>
          <button
            className="text-blue-600 hover:underline"
            onClick={() => handleEdit("name")}
          >
            Edit
          </button>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-4xl mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 font-medium">Email</p>
              {isEditing.email ? (
                <input
                  type="email"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={user.email}
                  onBlur={(e) => handleSave("email", e.target.value)}
                />
              ) : (
                <p className="text-gray-500">{user.email}</p>
              )}
            </div>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => handleEdit("email")}
            >
              Edit
            </button>
          </div>
          {/* Phone */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 font-medium">Phone</p>
              {isEditing.phone ? (
                <input
                  type="tel"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={user.phone}
                  onBlur={(e) => handleSave("phone", e.target.value)}
                />
              ) : (
                <p className="text-gray-500">{user.phone}</p>
              )}
            </div>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => handleEdit("phone")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-4xl mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Address Information</h2>
        {user.addresses.map((address, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 mb-4 flex justify-between"
          >
            {isEditing.address === index ? (
              <div className="space-y-2 w-full">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={address.line1}
                  onBlur={(e) =>
                    handleSave("address", {
                      index,
                      updatedAddress: { ...address, line1: e.target.value },
                    })
                  }
                />
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={address.line2}
                  onBlur={(e) =>
                    handleSave("address", {
                      index,
                      updatedAddress: { ...address, line2: e.target.value },
                    })
                  }
                />
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={address.postalCode}
                  onBlur={(e) =>
                    handleSave("address", {
                      index,
                      updatedAddress: { ...address, postalCode: e.target.value },
                    })
                  }
                />
              </div>
            ) : (
              <div>
                <p className="text-gray-700 font-medium">{address.label}</p>
                <p className="text-gray-500">{address.line1}</p>
                <p className="text-gray-500">{address.line2}</p>
                <p className="text-gray-500">{address.postalCode}</p>
              </div>
            )}
            <button
              className="text-blue-600 hover:underline"
              onClick={() => handleEdit("address", index)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
