import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 27" fill="none" {...props}>
         <img src="/images/sftransparent.png" alt="logo" />
    </Svg>
  );
};

export default Icon;
