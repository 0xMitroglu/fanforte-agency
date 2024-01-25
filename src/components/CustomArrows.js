import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather"; // Import the specific Feather Icons you want to use

const customArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  zIndex: 1, // Ensure arrows appear above the carousel content
  color: "white", // Set the arrow color to white
};

const customArrowLeftStyle = {
  ...customArrowStyle,
  left: "0px", // Adjust left position for the left arrow
};

const customArrowRightStyle = {
  ...customArrowStyle,
  right: "0px", // Adjust right position for the right arrow
};

const CustomLeftArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-arrow-left"
    style={customArrowLeftStyle}
    onClick={onClick}
  >
    <ChevronLeft size={40} color="white" /> {/* Adjust size and color */}
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div
    className="custom-arrow custom-arrow-right"
    style={customArrowRightStyle}
    onClick={onClick}
  >
    <ChevronRight size={40} color="white" /> {/* Adjust size and color */}
  </div>
);

export { CustomLeftArrow, CustomRightArrow };
