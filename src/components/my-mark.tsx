import type { SVGProps } from "react";

export function MyMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 233.367"
      fill="currentColor"
      {...props}
    >
      <path d="m0.60565 0.60565v232.16h46.25v-139.54h46.363v-46.477h-46.363v-46.136h-46.25zm92.613 92.613v92.613h46.25v-92.613h-46.25zm46.25 0h47.043v139.54h46.25v-232.16h-46.25v46.136h-47.043v46.477zm186.25-92.613v46.363h185.68v-46.363h-185.68zm0 46.363h-46.476v139.32h46.476v-139.32zm0 139.32v46.477h185.68v-139.32h-139.32v46.363h92.84v46.476h-139.2z" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 233.367" fill="${color}"><path d="m0.60565 0.60565v232.16h46.25v-139.54h46.363v-46.477h-46.363v-46.136h-46.25zm92.613 92.613v92.613h46.25v-92.613h-46.25zm46.25 0h47.043v139.54h46.25v-232.16h-46.25v46.136h-47.043v46.477zm186.25-92.613v46.363h185.68v-46.363h-185.68zm0 46.363h-46.476v139.32h46.476v-139.32zm0 139.32v46.477h185.68v-139.32h-139.32v46.363h92.84v46.476h-139.2z" /></svg>`;
}

export default MyMark;
