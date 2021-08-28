import React, { useState } from "react";
import Expand from "react-expand-animated";
import Image from "next/image";
import SampleImage from "../public/sample.jpg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Banner() {
  // const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(0);
  return (
    <div
      className={`${
        isExpanded ? "" : ""
      } max-w-[770px] mx-auto border-[1px] bg-white lg:hover:shadow-md h-full rounded-lg p-4`}
    >
      <div className="flex flex-col ">
        {/* Heading,subtitle and image */}
        <div className=" flex items-center w-full justify-between">
          <div className="mr-1 md:mr-4">
            {/* Title */}
            <div>
              <h3 className="text-base lg:text-base leading-normal font-semibold text-customGray">
                Afghanistan-Taliban Crisis LIVE Updates: US Drone Strike Targets
                ISIS "Planner" In Afghanistan: Pentagon
              </h3>
            </div>
            {/* SubTitle */}
            <div className="mb-2">
              <p className="text-gray-500 text-sm">5 hours ago.</p>
            </div>
            {/* First point */}
            <div className="text-customGray text-sm lg:text-base">
              <ul className="list-disc list-inside">
                <li className="mt-1">This is a point</li>
              </ul>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-none w-[100px] h-[100px] items-center relative">
            <Image
              src={SampleImage}
              objectFit="contain"
              layout="fill"
              objectPosition="left"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Expandable content goes here */}
        <Expand open={isExpanded} duration={300}>
          <ul className="list-disc list-inside text-sm lg:text-base">
            <li className="my-3">This Happend</li>
            <li className="my-3">This Happend</li>
            <li className="my-3">This Happend</li>
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

export default Banner;

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
