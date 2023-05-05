declare module "\*.svg" {
   import { ReactElement, SVGProps } from "react";
   const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
   export { ReactComponent }
}

declare module "\*.jpg" {
   const content: string;
   export default content;
}

declare module "\*.png" {
   const content: string;
   export default content;
}

declare module "\*.json" {
   const content: string;
   export default content;
}

declare module '*.module.scss' {
   const classes: { [key: string]: string };
   export default classes;
}

declare module '*.module.css' {
   const classes: { [key: string]: string };
   export default classes;
}