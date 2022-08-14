import * as React from "react";
import img from "@src/assets/img/111.png";
export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps) => (
    <div>
    <h1>

        亲亲我的宝贝林艾宇
    </h1>
        <img src={img} alt="" width={500} />
    </div>


);
