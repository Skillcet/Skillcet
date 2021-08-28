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
      } w-full border-[1px] bg-white h-full rounded-lg p-4`}
    >
      <div className="flex flex-col">
        <div className=" flex items-center w-full justify-between">
          <div className="mr-1 md:mr-4">
            <div>
              <h3 className="text-lg font-medium text-customGray">
                Afghanistan-Taliban Crisis LIVE Updates: US Drone Strike Targets
                ISIS "Planner" In Afghanistan: Pentagon
              </h3>
            </div>
          </div>
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
        <Expand open={isExpanded} duration={300}>
          <div>This is Summary</div>
        </Expand>
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${
              isExpanded
                ? "transform rotate-180 ease-in duration-300"
                : "transform rotate-0 ease-out duration-300"
            } hover:text-blue-600 `}
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
