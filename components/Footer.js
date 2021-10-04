import React from "react";

function Footer() {
  return (
    <div className="shadow-xl rounded-xl justify-self-end mb-10">
      <div className="flex justify-between py-4 px-8">
        <div className=" w-[70%]">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-sm text-primaryBlue1">About Us</h3>
              <div className="flex flex-col text-xs text-customLightGray pt-4">
                <a href="#" className="pb-2">
                  Overview
                </a>
                <a href="#" className="pb-2">
                  Vision and Mission
                </a>
                <a href="#" className="pb-2">
                  Careers
                </a>
                <a href="#" className="pb-2">
                  Faculty
                </a>
                <a href="#" className="pb-2">
                  Overview
                </a>
              </div>
            </div>
            <div className="">
              <h3 className="text-primaryBlue1 text-sm">Resources</h3>
              <div className="flex flex-col text-xs text-customLightGray pt-4">
                <a href="#" className="pb-2">
                  Inspiring quotes
                </a>
                <a href="#" className="pb-2">
                  Materials
                </a>
                <a href="#" className="pb-2">
                  Useful Links
                </a>
                <a href="#" className="pb-2">
                  Videos
                </a>
                <a href="#" className="pb-2">
                  Current Affairs
                </a>
                <a href="#" className="pb-2">
                  Live Classes
                </a>
                <a href="#" className="pb-2">
                  Blog
                </a>
              </div>
            </div>
            <div className="">
              <h3 className="text-primaryBlue1 text-sm">Timesaver</h3>
              <div className="flex flex-col text-xs text-customLightGray pt-4">
                <a href="#" className="pb-2">
                  Tips and Tricks
                </a>
                <a href="#" className="pb-2">
                  Smart Cuts
                </a>
                <a href="#" className="pb-2">
                  Tricks
                </a>
                <a href="#" className="pb-2">
                  Test your suitability
                </a>
                <a href="#" className="pb-2">
                  Select Course Survey
                </a>
                <a href="#" className="pb-2">
                  Shortcuts
                </a>
              </div>
            </div>
            <div className="">
              <h3 className="text-primaryBlue1 text-sm">Help Center</h3>
              <div className="flex flex-col text-xs text-customLightGray pt-4">
                <a href="#" className="pb-2">
                  Your question/query
                </a>
                <a href="#" className="pb-2">
                  FAQs
                </a>
                <a href="#" className="pb-2">
                  Talk with Toppers
                </a>
                <a href="#" className="pb-2">
                  Talk to your mentor
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <h3>Stay Updated</h3>
              <div className="flex border-2 rounded-lg justify-between">
                <input
                  placeholder="Enter your mail-id"
                  className="outline-none text-xs"
                />
                <div className="bg-blue-600 rounded-lg px-2 text-xs text-white flex items-center">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-1/4">
          <div>
            <h3 className="text-base text-primaryBlue1">
              Our Branches Locates
            </h3>
            <div className="py-4 text-customLightGray text-xs">
              <div className="mb-2">
                <h4 className="text-sm my-1">Ashoknagar</h4>
                <p>
                  301b, Kancham Bluw Spphire Building, Ashoknagar Cross roads,
                  Hyderabad, Telangana-500080
                </p>
              </div>
              <div className="">
                <h4 className="text-sm">Dilsukhnagar</h4>
                <p>
                  301b, Kancham Bluw Spphire Building, Dilsukhnagar metro,
                  Hyderabad, Telangana-500080
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base text-primaryBlue1 mb-4">Contact Us</h3>
            <div className="text-customLightGray text-xs">
              <div className="pb-2">90005 05523</div>
              <div className="pb-2">contact.hyd@skillcet.com</div>
              <div className="pb-2">Schedule a call</div>
              <div className="pb-2">Whatsapp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
