import React, { useState } from "react";
import Expand from "react-expand-animated";
import Image from "next/image";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Post({ title, time, subTitle, points, picture }) {
  const Points = points?.map((point) => (
    <li className="my-3">{point.ThePoint}</li>
  ));

  const [isExpanded, setIsExpanded] = useState(0);
  return (
    <div
      className={`${
        isExpanded ? "" : ""
      } max-w-[770px] mx-auto border-[1px] bg-white lg:hover:shadow-md text-customGray rounded-lg px-4 pt-4 pb-1 my-4 `}
    >
      <div className="flex flex-col ">
        {/* Heading,subtitle and image */}
        <div className=" flex items-center w-full justify-between align-middle">
          {/* Heading and subs */}
          <div className="mr-4 h-auto">
            {/* Title */}
            <div className="h-1/2">
              <h3 className="text-sm lg:text-base leading-normal font-bold text-customGray">
                {title}
              </h3>
            </div>
            {/* SubTitle */}
            <div className="my-2">
              <p className="text-gray-500 text-xs">{time}</p>
            </div>
            {/* First point */}
            <div className="text-customGray hidden sm:inline text-xs lg:text-sm font-semibold">
              <ul className="list-disc list-inside">
                <li className="mt-1">{subTitle}</li>
              </ul>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-none w-[100px] h-[100px] items-center relative">
            <Image
              src={picture}
              objectFit="contain"
              layout="fill"
              objectPosition="left"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Expandable content goes here */}
        <Expand open={isExpanded} duration={300}>
          <ul className="list-disc list-inside text-xs lg:text-sm font-semibold">
            <li className="mt-1 sm:hidden">{subTitle}</li>
            {Points}
          </ul>
        </Expand>
        {/* The Readmore line */}
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${
              isExpanded
                ? "transform rotate-180 ease-in duration-300"
                : "transform rotate-0 ease-out duration-300"
            } lg:hover:text-blue-600`}
          >
            <ExpandMoreIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;

/*<div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex flex-col">
            <div>This is Heading</div>
            <div>This is Summary</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    /* <div className="h-48 rounded-lg flex items-center border-gray-200 border-2 justify-around w-11/12 shadow-md mb-3 bg-white mx-auto">
      <p>Post</p>
    </div> */
