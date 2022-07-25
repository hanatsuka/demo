import * as React from "react";
import img from "@src/assets/img/fire.png";
export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <h1>
        Hello from {props.compiler} and {props.framework}!
        <img src={img} alt="" />
    </h1>
);
