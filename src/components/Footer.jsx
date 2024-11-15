import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" mx-auto w-full relative text-center bg-black  text-white bottom-[-26px]">
    <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
        Discover Your Unique Style Today!  <br/>Unleash your fashion potential with our latest collection.
        </h2>
        <Link  to="/All-products" className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-[#201f1f] rounded-full shadow-xl border border-transparent hover:bg-[#0a0a0a]  transition-all ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            >Shop Now</Link>
        <div className="mt-14 xl:mt-16">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
                <div className="px-5 py-2"><Link to="/contact-us">Contact Us</Link></div>
                <div className="px-5 py-2"><Link to="/about-us">About US</Link></div>
                <div className="px-5 py-2"><Link to="/return-policy">Return Policy</Link></div>
                <div className="px-5 py-2"><Link to="/terms-and-conditions">Terms and Conditions</Link></div>
                <div className="px-5 py-2"><Link to="/privacy-policy">Privacy Policy</Link></div>
            </nav>
            <p className="mt-7 text-base">© 2024 Clothophile Store, All Rights Reserved</p>
        </div>
    </div>
</footer>
  )
}

export default Footer