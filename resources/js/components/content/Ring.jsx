import React, { useState, useEffect } from "react";
import SectionA from "./sections/SectionA";
import SectionB from "./sections/SectionB";
import SectionC from "./sections/SectionC";
import SectionD from "./sections/SectionD";
import SectionE from "./sections/SectionE";
import SectionF from "./sections/SectionF";
import SectionG from "./sections/SectionG";
function Ring(props) {
    const container = {
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
        border: "solid 1px #006fbd",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
    };
    return (
        <center className="container">
            <svg
                style={{
                    transform: `scale(${props.zoom})`,
                    enableBackground: "new 0 0 612 792",
                }}
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 612 792"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs id="defs18930" />
                <g id="viewport">
                    <SectionA />
                    {/* <SectionB /> */}
                    <SectionC />
                    {/* <SectionD /> */}
                    <SectionE />
                    {/* <SectionF /> */}
                    <SectionG />
                    <rect
                        x="292"
                        y="291"
                        className="st6"
                        width="77.5"
                        height="77.5"
                        id="rect18191"
                    />
                    <rect
                        x="292"
                        y="291"
                        className="st21"
                        width="77.5"
                        height="77.5"
                        id="rect18193"
                    />
                    <text
                        transform="matrix(1 0 0 1 316.9026 331.7651)"
                        className="st22 st23"
                        id="text18195"
                    >
                        RING
                    </text>
                </g>
            </svg>
        </center>
    );
}

export default Ring;
