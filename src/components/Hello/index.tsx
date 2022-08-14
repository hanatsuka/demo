import * as React from "react";
import img from "@src/assets/img/wait.png";
export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <h1>
        等待一个美女归来
        <img src={img} alt="" width={500} />
    </h1>
);
