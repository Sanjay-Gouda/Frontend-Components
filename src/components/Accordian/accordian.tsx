import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { ReactNode } from "react";

type TAccordian = {
  handleExpand: () => void;
  heading: string;
  children: ReactNode;
  isExpand: boolean;
};

type TAccordianDetail = {
  isExpand: boolean;
  desc: string;
};

export const Accordian = ({
  children,
  handleExpand,
  heading,
  isExpand,
}: TAccordian) => {
  return (
    <div className="accordian-wrapper" onClick={handleExpand}>
      <div className="heading-wrapper">
        <p className="heading">{heading}</p>
        {isExpand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
      </div>
      {children}
    </div>
  );
};

export const AccordianDetails = ({ isExpand, desc }: TAccordianDetail) => {
  //   console.log(isExapand);
  return (
    <div
      className="desc-wrapper"
      style={{ display: isExpand ? "block" : "none" }}
    >
      <p className="desc">{desc}</p>
    </div>
  );
};
