import React, { useState, useEffect } from "react";

function Row1() {
    const items = [];

    for (let i = 0; i < 20; i++) {
        const gap1 = 279.8 + i * 5.2;
        const gap2 = 279.7 + i * 5.2;
        const gap3 = 280.1 + i * 5.2;
        const gap4 = 281 + i * 5.2;
        const gap5 = 283.3 + i * 5.2;
        const gap6 = 284.2 + i * 5.2;
        const gap7 = 284.5 + i * 5.2;
        const gap8 = 284.1 + i * 5.2;
        const gap9 = 284.4 + i * 5.2;
        const gap10 = 284.6 + i * 5.2;

        const gap11 = 284.3 + i * 5.2;
        const gap12 = 283.8 + i * 5.2;
        const gap13 = 282.2 + i * 5.2;
        const gap14 = 280.5 + i * 5.2;
        const gap15 = 279.9 + i * 5.2;
        const gap16 = 280.2 + i * 5.2;

        const gap17 = 282.1 + i * 5.2;
        items.push(
            <>
                <g id="seat-3827" className="booth" section="1">
                    <polygon
                        className="st6 booth-fill"
                        fill="#FFFFFF"
                        stroke="#000000"
                        strokeWidth=".5"
                        strokeMiterlimit="10"
                        points={
                            gap1 +
                            ",404.5 " +
                            gap2 +
                            ",402.8 " +
                            gap3 +
                            ",402.2 " +
                            gap4 +
                            ",401.9 " +
                            gap5 +
                            ",401.9 " +
                            gap6 +
                            ",402.2 " +
                            gap7 +
                            ",402.8 " +
                            gap7 +
                            ",404.4   " +
                            gap6 +
                            ",406.2 " +
                            gap8 +
                            ",406.4 " +
                            gap9 +
                            ",406.4 " +
                            gap10 +
                            ",406.5 " +
                            gap10 +
                            ",406.9 " +
                            gap11 +
                            ",407.2 " +
                            gap12 +
                            ",407.4 " +
                            gap13 +
                            ",407.5 " +
                            gap14 +
                            ",407.4 " +
                            gap15 +
                            ",407.2   " +
                            gap2 +
                            ",407 " +
                            gap2 +
                            ",406.5 " +
                            gap15 +
                            ",406.4 " +
                            gap16 +
                            ",406.4 " +
                            gap3 +
                            ",406.2"
                        }
                        id="polygon12149"
                    />
                    <polygon
                        className="st19"
                        points={
                            gap1 +
                            ",404.5 " +
                            gap2 +
                            ",402.8 " +
                            gap3 +
                            ",402.2 " +
                            gap4 +
                            ",401.9 " +
                            gap5 +
                            ",401.9 " +
                            gap6 +
                            ",402.2 " +
                            gap7 +
                            ",402.8 " +
                            gap7 +
                            ",404.4   " +
                            gap6 +
                            ",406.2 " +
                            gap8 +
                            ",406.4 " +
                            gap9 +
                            ",406.4 " +
                            gap10 +
                            ",406.5 " +
                            gap10 +
                            ",406.9 " +
                            gap11 +
                            ",407.2 " +
                            gap12 +
                            ",407.4 " +
                            gap13 +
                            ",407.5 " +
                            gap14 +
                            ",407.4 " +
                            gap15 +
                            ",407.2   " +
                            gap2 +
                            ",407 " +
                            gap2 +
                            ",406.5 " +
                            gap15 +
                            ",406.4 " +
                            gap16 +
                            ",406.4 " +
                            gap3 +
                            ",406.2"
                        }
                        id="polygon12151"
                    />
                    <polyline
                        className="st20"
                        points={
                            gap8 +
                            ",406.4 " +
                            gap5 +
                            ",406.5 " +
                            gap17 +
                            ",406.6 " +
                            gap4 +
                            ",406.6 " +
                            gap16 +
                            ",406.5 "
                        }
                        id="polyline12153"
                    />
                </g>
            </>
        );
    }
    return <>{items}</>;
}

export default Row1;
