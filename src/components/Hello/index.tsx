import * as React from "react";
import img from "@src/assets/img/111.png";
export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <div>
    <h1>

        Waiting for a beauty~
    </h1>
        <img src={img} alt="" width={500} />
    </div>


);
