import React from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
             <a href="https://wa.link/8xgen9" target="_blank"> <FaWhatsapp size={24} /></a>
             <a href="https://t.me/8005371140" target="_blank"> <FaTelegram size={24} /></a>
             <a href="https://www.instagram.com/santosh_yadav_up66?igsh=aWsweDNzcDRwOTUx" target="_blank"><FaInstagram size={24} /></a>
             <a href="https://www.linkedin.com/in/sk8005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"> <FaLinkedinIn size={24} /></a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Made with ❤️ by Santosh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
