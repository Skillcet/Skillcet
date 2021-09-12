import React, { useState } from "react";
import Expand from "react-expand-animated";
import Image from "next/image";
import moment from "moment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Post({ title, time, subTitle, points, picture, alt }) {
  const Points = points?.map((point) => (
    <li className="my-3 expandable-content" key={point._id}>
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
  const readmore = ["Read More...", "Read Less..."];
  return (
    <div
      className={`${
        isExpanded ? "" : ""
      } mx-auto border-[1px] border-customBorderColor bg-white shadow-sm  text-customLightGray rounded-lg px-4 pt-4 pb-1 mb-4 Post`}
    >
      <div className="flex flex-col ">
        {/* Heading,subtitle and image */}
        <div className=" flex w-full justify-between items-start">
          {/* Heading and subs */}
          <div className="mr-4 h-auto">
            {/* Title */}
            <div className="h-1/2">
              <h3 className="text-sm sm:text-base lg:text-lg leading-normal font-semibold text-customGray">
                {title}
              </h3>
            </div>
            {/* Time */}
            <div className="mt-2 mb-4">
              <p className="text-gray-500 text-xs">{time1}</p>
            </div>
            {/* First point */}
            <div className="text-customLightGray hidden sm:inline text-xs lg:text-sm expandable-content">
              <ul className="list-disc list-outside w-[95%] mx-auto">
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
          <ul className="list-disc list-outside w-[95%] mx-auto text-xs lg:text-sm text-customLightGray expandable-content">
            <li className="mt-1 sm:hidden expandable-content">{subTitle}</li>
            {Points}
          </ul>
        </Expand>
        {/* The Readmore line */}
        <div className="flex justify-between mt-4">
          <div
            className="text-primaryBlue1 cursor-pointer text-xs lg:ml-[20px]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {!isExpanded ? <div>{readmore[0]}</div> : <div>{readmore[1]}</div>}
          </div>
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
