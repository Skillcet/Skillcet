import React from "react";
import Image from "next/image";
import MaterialSample from "../public/material_1.png";
import Slider from "react-slick";
import Styles from "./Material.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={`${className}`}
      style={{ ...style, display: "block", color: "#202124" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={`${className}`}
      style={{ ...style, display: "block", color: "#202124" }}
      onClick={onClick}
    />
  );
}

const Material = () => {
  const settings = {
    "& .slick-track": {
      paddingTop: "10px",
    },
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="my-3">
      <div className=" bg-customSearchBar w-full pb-4 rounded-lg">
        <h1 className="pt-2 text-center">Material</h1>
        <hr className="border-t-w-[2px] border-secondaryBlue1 mx-6 mt-2 mb-4 " />
        <div className="w-[70%] mx-auto slide-box">
          <Slider {...settings} className=" py-2">
            <div className="py-2">
              <div className="h-full">
                <Image
                  className=""
                  src={MaterialSample}
                  alt="Material"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="py-2">
              <div className="h-full">
                <Image
                  className="mx-auto"
                  src={MaterialSample}
                  alt="Material"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="py-2">
              <div className="h-full">
                <Image
                  className="mx-auto"
                  src={MaterialSample}
                  alt="Material"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="py-2">
              <div className="h-full">
                <Image
                  className="mx-auto"
                  src={MaterialSample}
                  alt="Material"
                  objectFit="contain"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Material;
