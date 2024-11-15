// import React, { useState } from 'react';

// const ProductInfo = () => {
//   // Options for the tabs
//   const tabs = ['Description', 'Features' ,'Product Details', 'Other Details'];
  
//   // Data for each tab
//   const tabContent = [
//     {
      
//       content: 'Care for fiber: 30% more recycled polyester. We label garments manufactured using environmentally friendly technologies and raw materials with the Join Life label.',
     
//     },
//     // Add other tab data if needed (e.g., Product Details, video, review)
//     {  content: [
//         "Premium Quality Fabric: Soft, comfortable, and durable material that feels great against your skin.",
//         "Versatile Fit: Available in multiple sizes, this t-shirt fits perfect for every body type.",
//         "Perfect Gift: An ideal gift for busy friends, family members, or anyone who live to love the clothes.",
//         ""
//       ] },
//     {  content: [
//         "Versatile Fit: Available in multiple sizes, this t-shirt fits perfect for every body type.",
//         "Perfect Gift: An ideal gift for busy friends, family members, or anyone who live to love the clothes.",
//         ""
//       ] },
//     {  content: [
        
//         "Perfect Gift: An ideal gift for busy friends, family members, or anyone who live to love the clothes.",
//         ""
//       ] }
//   ];

//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="p-6">
//       {/* Tabs */}
//       <div className="flex justify-center space-x-8 border-b pb-2">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`${activeTab === index ? 'border-b-2 border-black text-black' : 'text-gray-600'} text-lg font-semibold pb-2  hover:border-b-2 hover:border-black hover:text-black transition ease-in-out `}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="flex justify-center mt-8 space-x-12">
      
//         <div>
          
//           {Array.isArray(tabContent[activeTab].content) && tabContent[activeTab].content.length > 0 ? 
//           <p className='mt-2'>{
//             tabContent[activeTab].content.map((li,i)=>{
//                return <li key={i}>{li}</li>
//             })
//           }</p> 
//           : tabContent[activeTab].content} 
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;


import React, { useState } from 'react';

const ProductInfo = () => {
  // Options for the tabs
  const tabs = ['Description', 'Features', 'Product Details', 'Other Details'];
  
  // Data for each tab
  const tabContent = [
    {
      content: 'Care for fiber: 30% more recycled polyester. We label garments manufactured using environmentally friendly technologies and raw materials with the Join Life label.',
    },
    {  
      content: [
        "Premium Quality Fabric: Soft, comfortable, and durable material that feels great against your skin.",
        "Versatile Fit: Available in multiple sizes, this t-shirt fits perfect for every body type.",
        "Perfect Gift: An ideal gift for busy friends, family members, or anyone who live to love the clothes.",
      ]
    },
    {  
      content: [
        "Versatile Fit: Available in multiple sizes, this t-shirt fits perfect for every body type.",
        "Perfect Gift: An ideal gift for busy friends, family members, or anyone who live to love the clothes.",
      ]
    },
    {  
      content: [
        "Perfect Gift: An ideal gift for busy friends, family members, or anyone who live to love the clothes.",
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 gap-y-4 border-b ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${activeTab === index ? 'border-b-2  border-black text-black' : 'text-gray-600'} text-sm sm:text-lg font-semibold pb-3 hover:border-b-2 hover:border-black hover:text-black transition ease-in-out`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="text-sm sm:text-base p-4 sm:p-6 bg-[#f9f9f9] rounded-lg max-w-md sm:max-w-lg">
          {Array.isArray(tabContent[activeTab].content) && tabContent[activeTab].content.length > 0 ? 
            <ul className="list-disc ml-4">
              {tabContent[activeTab].content.map((li, i) => (
                <li key={i} className="mt-1">{li}</li>
              ))}
            </ul>
          : 
            <p>{tabContent[activeTab].content}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

