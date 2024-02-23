import React from "react";
import ConditionalOutputIfElse
    from "./ConditionalOutputIfElse";
import ConditionalOutputInline
    from "./ConditionalOutputInline";
const ConditionalOutput = () => {
    return (
        <>
            <br/>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline /><br/>
        </>
    );
};
export default ConditionalOutput;