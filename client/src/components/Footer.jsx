import visaImg from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import maestro from "../assets/maestro.svg";
import american from "../assets/amex.svg";
import discover from "../assets/discover.svg";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 mt-12 flex flex-row gap-6 ">
        <div className="mt-16">
          <img
            className="w-72 p-4 "
            src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
          />
        </div>
        <div className="flex flex-row justify-center gap-28">
          <div className="mt-10">
            <p className="text-bold text-black text-lg">Information</p>
            <div>
              <ul className="text-gray-500 mt-4">
                <a href="/about-us">
                  <li className="m-2">About Us</li>
                </a>
                <a href="/terms-conditions">
                  <li className="m-2">Terms & Conditions</li>
                </a>
                <a href="/shipping-policy">
                  <li className="m-2">Shipping Policy</li>
                </a>
                <a href="/privacy-policy">
                  <li className="m-2">
                    Privacy Policy page of Toy
                    <br />
                    Fort - Online toy Store
                  </li>
                </a>
                <a href="/help-center">
                  <li className="m-2">Help Center</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-bold text-black text-lg">Quick Links</p>
            <div>
              <ul className="text-gray-500 mt-4">
                <a href="home">
                  <li className="m-2">Home </li>
                </a>
                <a href="contact">
                  <li className="m-2">Contact</li>
                </a>
                <a href="/blog">
                  {" "}
                  <li className="m-2">Blog</li>
                </a>
                <a href="/write-for-us">
                  <li className="m-2">Write for us</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-row gap-6">
            <div>
              <p className="text-bold text-black text-lg ">Locate Me</p>
              <p className="m-2 hover:text-red-600 font-light cursor-pointer">
                Address: E - 99, Kamla Nagar,- 110007
              </p>
              <p className="m-2 hover:text-red-600 font-light cursor-pointer">
                Phone: +91 - 93152-57050
              </p>
              <p className="m-2 hover:text-red-600 font-light cursor-pointer">
                Email: support@toyfort.in
              </p>
            </div>

            <div className="w-full md:w-1/2 h-64">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8393742061!2d77.0688998!3d28.5275195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3502f2d17b1%3A0x8b63638e3f5219fd!2sKamla%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707580109182"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-6">
        <p className="m-5 text-gray-400">
          Copyright 2024 Toyfort - All Rights Reserved, Developed by Austere
          Systems /Designed by Crazy Bunny
        </p>
        <div className="flex-row flex w-8 gap-4">
          <img src={visaImg} />
          <img src={masterCard} />
          <img src={maestro} />
          <img src={american} />
          <img src={discover} />
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Footer;
