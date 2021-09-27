// import React from "react";
// import Image from "next/image";
// import BannerImage from "../public/bannerImage.png";
// function Banner() {
//   return (
//     <div className=" h-[130px] mt-6 sm:h-[185px] rounded-lg flex items-center justify-around w-full shadow-sm mb-3 bg-white mx-auto relative">
//       <Image
//         src={BannerImage}
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         className="rounded-lg"
//       ></Image>
//     </div>
//   );
// }

// export default Banner;

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import BannerImage from "../public/bannerImage.png";
import BannerImage1 from "../public/bannerImage1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="  ">
      <Slider {...settings} className="h-full ">
        <div className=" text-black h-[130px] mt-6 sm:h-[185px] rounded-lg flex items-center justify-around w-full shadow-sm mb-4 mx-auto relative">
          <Image
            src={BannerImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          ></Image>
        </div>
        <div className=" text-black h-[130px] mt-6 sm:h-[185px] rounded-lg flex items-center justify-around w-full shadow-sm mb-3 mx-auto relative">
          <Image
            src={BannerImage1}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg"
          ></Image>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
