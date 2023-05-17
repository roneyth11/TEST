import React from "react";

const variantClasses = {
  h1: "font-normal text-[8px]",
  h2: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  h3: "font-normal text-[17px]",
  h4: "font-normal text-[15px]",
  h5: "font-normal text-sm",
  h6: "font-normal text-xs",
  body1: "font-normal text-[10px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
