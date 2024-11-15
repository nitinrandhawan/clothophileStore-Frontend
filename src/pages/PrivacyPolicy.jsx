import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-6">
        At <span className="font-semibold">ClothoPhile Store</span>, your privacy is our priority. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your information.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect various types of information to improve your experience on our website, including:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>**Personal Information**: This includes your name, email address, phone number, and shipping address when you create an account or make a purchase.</li>
        <li>**Payment Information**: We collect payment details when you purchase products from our store, but we do not store payment information on our servers.</li>
        <li>**Browsing Information**: This includes details like your IP address, browser type, and browsing behavior on our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        The information we collect is used for the following purposes:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>To process and fulfill your orders</li>
        <li>To improve our products and services</li>
        <li>To send updates, promotions, and newsletters (you can opt out at any time)</li>
        <li>To analyze site usage and enhance user experience</li>
        <li>To respond to your inquiries and provide customer support</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following cases:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>**Trusted Third Parties**: We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, such as payment processors and shipping companies.</li>
        <li>**Legal Compliance**: We may disclose your information if required to do so by law or to protect our rights, property, or safety.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement industry-standard security measures to protect your information from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
      <p className="text-gray-700 mb-4">
        We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences and understand how you use our site. You can choose to disable cookies through your browser settings, but doing so may affect the functionality of certain features on our site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Your Choices and Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, update, and delete your personal information at any time. To do so, log into your account or contact us at <a href="mailto:support@clothophile.com" className="text-red-600 hover:underline">support@clothophile.com</a>. You may also opt out of receiving promotional emails by following the unsubscribe instructions in each email.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
      <p className="text-gray-700 mb-6">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review the policy periodically to stay informed about how we protect your information.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@clothophile.com" className="text-red-600 hover:underline">support@clothophile.com</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
