import React from "react";

interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
  raw?: boolean;
}

const Index = ({
  size = 24,
  color = "currentColor",
  className = "",
  children,
  raw = false,
  ...props
}: IconBaseProps) => {
  if (raw && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<React.SVGProps<SVGSVGElement>>, {
      width: size,
      height: size,
      className,
      ...props,
    });
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Index;
