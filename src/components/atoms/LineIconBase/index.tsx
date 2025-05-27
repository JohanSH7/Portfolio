import React from "react";

interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const Index = ({
  size = 48,
  color = "currentColor",
  className = "",
  children,
  ...props
}: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export default Index;
