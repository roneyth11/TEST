import React from "react";
import PropTypes from "prop-types";

const variants = {
  icbFillWhiteA7004c: "bg-white_A700_4c",
  icbFillBlueA400: "bg-blue_A400",
  icbFillBlue500: "bg-blue_500",
  icbFillIndigo300: "bg-indigo_300",
  icbFillDeeppurple600: "bg-deep_purple_600",
  icbOutlineBlack90026: "bg-white_A700 shadow-bs",
  FillBluegray50: "bg-blue_gray_50 text-black_900",
  FillGreen600: "bg-green_600 text-white_A700",
  FillRed700: "bg-red_700 text-white_A700",
  OutlineBlack90033: "bg-gray_100 shadow-bs1 text-black_900",
  OutlineWhiteA700:
    "bg-green_600 border border-solid border-white_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
};
const sizes = { smIcn: "p-2", mdIcn: "p-4", sm: "p-1.5", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  variant: PropTypes.oneOf([
    "icbFillWhiteA7004c",
    "icbFillBlueA400",
    "icbFillBlue500",
    "icbFillIndigo300",
    "icbFillDeeppurple600",
    "icbOutlineBlack90026",
    "FillBluegray50",
    "FillGreen600",
    "FillRed700",
    "OutlineBlack90033",
    "OutlineWhiteA700",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "sm", "md"]),
};

Button.defaultProps = { className: "", variant: "", size: "" };
export { Button };
