import React from 'react';
import { FaEdit, FaTrashAlt, FaUpload } from 'react-icons/fa';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-md h-screen px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Dashboard</li>
              <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Manage Photos</li>
              <li className="text-gray-700 hover:text-blue-500 cursor-pointer">User Management</li>
              <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Analytics</li>
              <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add New Photo</button>
          </header>

          {/* Photo Management Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Manage Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photo Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Sample"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Sample Photo</h3>
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <FaUpload />
                    </button>
                  </div>
                </div>
              </div>
              {/* Repeat Photo Cards as needed */}
            </div>
          </section>

          {/* Chart Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bar Chart */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Bar Chart */}
                  <span className="text-gray-500">Bar Chart Placeholder</span>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Pie Chart */}
                  <span className="text-gray-500">Pie Chart Placeholder</span>
                </div>
              </div>

              {/* Comparison Chart */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Comparison Chart</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Comparison Chart */}
                  <span className="text-gray-500">Comparison Chart Placeholder</span>
                </div>
              </div>

              {/* Line Chart */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Line Chart</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Line Chart */}
                  <span className="text-gray-500">Line Chart Placeholder</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
