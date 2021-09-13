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

import "@brainhubeu/react-carousel/lib/style.css";
import dynamic from "next/dynamic";

const { default: Carousel, Dots } = dynamic(
  () => require("@brainhubeu/react-carousel"),
  { ssr: false }
);

const Banner = () => (
  <Carousel plugins={["arrows"]}>
    <div>Hi</div>
    <div>Hi</div>
    <div>Hi</div>
  </Carousel>
);

export default Banner;
