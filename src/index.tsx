import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import Error from "./components/Error";

ReactDOM.render(
    <>
        <Hello compiler="TypeScript" framework="React" />
        <Error />
    </>,
    document.getElementById("root")
);
