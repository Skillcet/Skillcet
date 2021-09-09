import React, { useState } from "react";
import Expand from "react-expand-animated";
import Image from "next/image";
import moment from "moment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Post({ title, time, subTitle, points, picture, alt }) {
  const Points = points?.map((point) => (
    <li className="my-3" key={point._id}>
      {point.ThePoint}
    </li>
  ));
  var time1 = "just now.";
  var timeToday = new moment();
  var timePost = moment(time);
  var timeDiff = moment.duration(timeToday.diff(timePost))._data;

  if (timeDiff.years > 0) {
    timeDiff.years > 1
      ? (time1 = `${timeDiff.years} years ago.`)
      : (time1 = `${timeDiff.years} year ago.`);
  } else if (timeDiff.months > 0) {
    timeDiff.months > 1
      ? (time1 = `${timeDiff.months} months ago.`)
      : (time1 = `${timeDiff.months} month ago.`);
  } else if (timeDiff.days > 0) {
    timeDiff.days > 1
      ? (time1 = `${timeDiff.days} days ago.`)
      : (time1 = `${timeDiff.days} day ago.`);
  } else if (timeDiff.hours > 0) {
    timeDiff.hours > 1
      ? (time1 = `${timeDiff.hours} hours ago.`)
      : (time1 = `${timeDiff.hours} hour ago.`);
  } else if (timeDiff.minutes > 0) {
    timeDiff.minutes > 1
      ? (time1 = `${timeDiff.minutes} minutes ago.`)
      : (time1 = `${timeDiff.minutes} minute ago.`);
  } else {
    time1 = "Just Now";
  }

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`${
        isExpanded ? "" : ""
      } mx-auto border-[1px] bg-white shadow-sm lg:hover:shadow-md text-customLightGray rounded-lg px-4 pt-4 pb-1 my-4 `}
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
            {/* Time */}
            <div className="my-2">
              <p className="text-gray-500 text-xs">{time1}</p>
            </div>
            {/* First point */}
            <div className="text-customLightGray hidden sm:inline text-xs lg:text-sm font-semibold">
              <ul className="list-disc list-inside">
                <li className="mt-1">{subTitle}</li>
              </ul>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-none w-[100px] h-[100px] items-center relative">
            <Image
              src={picture}
              alt={alt}
              objectFit="contain"
              layout="fill"
              objectPosition="left"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Expandable content goes here */}
        <Expand open={isExpanded} duration={300}>
          <ul className="list-disc list-inside text-xs lg:text-sm font-semibold text-customLightGray">
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
