import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
       <img src="/images/caribswap/clogo_180h.png" alt="logo" />
    </Svg>
  );
};

export default Icon;
