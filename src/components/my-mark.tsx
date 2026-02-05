import type { SVGProps } from "react";

export function MyMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 233.367"
      {...props}
    >
      <text
        xmlSpace="preserve"
        x={0.606}
        y={325.601}
        style={{
          fontSize: "232.156px",
          fontFamily: "QuinqueFive",
          textAlign: "start",
          letterSpacing: 0,
          writingMode: "horizontal-tb",
          direction: "ltr",
          textAnchor: "start",
          fill: "currentColor",
          stroke: "none",
          strokeWidth: 1.211,
          strokeDasharray: "none",
        }}
        transform="translate(0 -139.316)"
      >
        <tspan
          x={0.606}
          y={325.601}
          style={{
            fontSize: "232.156px",
            letterSpacing: 0,
            fill: "currentColor",
            stroke: "none",
            strokeWidth: 1.211,
            strokeDasharray: "none",
          }}
        >
          {"MG"}
        </tspan>
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 233.367"><text xml:space="preserve" x="0.606" y="325.601" style="font-size:232.156px;font-family:QuinqueFive;text-align:start;letter-spacing:0;writing-mode:horizontal-tb;direction:ltr;text-anchor:start;fill:${color};stroke:none;stroke-width:1.211;stroke-dasharray:none" transform="translate(0 -139.316)"><tspan x="0.606" y="325.601" style="font-size:232.156px;letter-spacing:0;fill:${color};stroke:none;stroke-width:1.211;stroke-dasharray:none">MG</tspan></text></svg>`;
}

export default MyMark;
