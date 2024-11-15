import React from 'react';

function ReturnPolicy() {
  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Return Policy</h1>
      <p className="text-gray-700 mb-6">
        At <span className="font-semibold">ClothoPhile Store</span>, we strive to ensure that you are completely satisfied with your purchase. If for any reason you are not happy with your purchase, we are here to help.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Eligibility for Returns</h2>
      <p className="text-gray-700 mb-4">
        You have <span className="font-semibold">30 days</span> from the date of purchase to return an item. To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging. Please make sure to include the receipt or proof of purchase.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
      <p className="text-gray-700 mb-4">
        Certain types of items cannot be returned, including:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Gift cards</li>
        <li>Personalized items</li>
        <li>Items purchased on sale</li>
        <li>Opened or used cosmetics</li>
      </ul>
      <p className="text-gray-700 mb-6">
        If you have any questions about whether your item is eligible for a return, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return</h2>
      <p className="text-gray-700 mb-4">
        To start a return, please contact us at <a href="mailto:support@clothophile.com" className="text-red-600 hover:underline">support@clothophile.com</a>. Include your order number and details about the product you wish to return. Our team will respond with instructions on how to proceed.
      </p>
      <p className="text-gray-700 mb-6">
        Please note that you are responsible for covering the shipping costs for returning the item. We recommend using a trackable shipping method to ensure your item is safely returned to us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Refunds and Processing Time</h2>
      <p className="text-gray-700 mb-4">
        Once we receive your returned item, we will inspect it and notify you of the status of your refund. If the return is approved, we will process the refund to your original method of payment. Refunds typically take <span className="font-semibold">5-10 business days</span> to appear in your account, depending on your payment provider.
      </p>
      <p className="text-gray-700 mb-6">
        If you have not received your refund after 10 business days, please contact us for further assistance.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
      <p className="text-gray-700 mb-4">
        If you receive a damaged or defective item, please notify us immediately at <a href="mailto:support@clothophile.com" className="text-red-600 hover:underline">support@clothophile.com</a> with photos of the damage. We will arrange a replacement or refund at no extra cost to you.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions or need further assistance with your return, please don't hesitate to reach out to us at <a href="mailto:support@clothophile.com" className="text-red-600 hover:underline">support@clothophile.com</a>. We are here to help!
      </p>
    </div>
  );
}

export default ReturnPolicy;
