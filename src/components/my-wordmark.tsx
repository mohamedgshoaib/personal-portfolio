import type { SVGProps } from "react";

export function MyWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={2957.25}
      height={192}
      viewBox="0 0 782.439 50.8"
      {...props}
    >
      <text
        xmlSpace="preserve"
        x={35.121}
        y={87.039}
        style={{
          fontSize: "50.8px",
          fontFamily: "QuinqueFive",
          textAlign: "start",
          letterSpacing: 0,
          writingMode: "horizontal-tb",
          direction: "ltr",
          textAnchor: "start",
          fill: "currentColor",
          stroke: "none",
          strokeWidth: 1.211,
        }}
        transform="translate(-35.12 -46.408)"
      >
        <tspan
          x={35.121}
          y={87.039}
          style={{
            fill: "currentColor",
            stroke: "none",
            strokeWidth: 1.211,
          }}
        >
          {"Mohamed Gamal"}
        </tspan>
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="2957.25" height="192" viewBox="0 0 782.439 50.8"><text xml:space="preserve" x="35.121" y="87.039" style="font-size:50.8px;font-family:QuinqueFive;InkscapeFontSpecification:QuinqueFive;text-align:start;letter-spacing:0;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:${color};stroke:none;stroke-width:1.211" transform="translate(-35.12 -46.408)"><tspan x="35.121" y="87.039" style="fill:${color};stroke:none;stroke-width:1.211">Mohamed Gamal</tspan></text></svg>`;
}

export default MyWordmark;
