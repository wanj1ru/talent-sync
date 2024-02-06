import Link from "next/link";
import React from "react";
interface Props {
  value: string;
  styles: string;
  link: string;
}
const Button = ({ value, styles, link }: Props) => {
  return (
    <Link
      className={`${styles} rounded-full text-center py-3 font-semibold px-6 w-max`}
      href={link}
    >
      {value}
    </Link>
  );
};

export default Button;