import React, { useEffect, useState } from "react";
import { styled } from "@storybook/theming";
import { ColumnsProps } from "../../types";

// const createResponsiveStyles = (array: GridProps[]) => {
//   let stylesString = "";
//   array.map((bp) => {
//     const { breakpoint, gap, maxWidth, gutter } = bp;
//     stylesString += `
//       @media (min-width:${breakpoint}px) {
//         gap: ${gap}px;
//         max-width: ${maxWidth ? `${maxWidth}px` : "none"};
//         padding-inline: ${gutter || 0}px;
//       }`;
//   });
//   return stylesString;
// };

/** Creates the grid UI */
const Grid: React.FC<ColumnsProps> = ({
  active,
  bgColor,
  columns,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const checkActiveIndex = () => {
  //   breakpointsArray.every((bp, i) => {
  //     if (!window.matchMedia(`(min-width: ${bp}px)`).matches) return false;
  //     setActiveIndex(i);
  //     return true;
  //   });
  // };

  // useEffect(() => {
  //   checkActiveIndex();
  //   window.addEventListener("resize", checkActiveIndex);
  //   return () => window.removeEventListener("keydown", checkActiveIndex);
  // }, []);

  return (
    <Columns
      bgColor={bgColor}
      columns={columns}
      active={active}
    >
     { bgColor?.toString() }
     { columns }
     { active?.toString() }
    </Columns>
  );
};

export default Grid;

type StyledProps = Omit<ColumnsProps, "breakpoints"> & {
  responsiveStyles?: string;
};

/** @todo make non-column background color dynamic */
const Columns = styled.div<StyledProps>`
  position: absolute;
  inset: 0;
  margin: 0 auto;
  pointer-events: none;
  background-color: cyan;
  height: 100vh;
`;
