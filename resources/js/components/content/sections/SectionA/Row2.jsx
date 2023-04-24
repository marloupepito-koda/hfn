import React, { useState, useEffect } from "react";

function Row2() {
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

        const gapColumn1 = 404.5 + 8;
        const gapColumn2 = 402.8 + 8;
        const gapColumn3 = 402.2 + 8;
        const gapColumn4 = 401.9 + 8;
        const gapColumn5 = 404.4 + 8;
        const gapColumn6 = 406.2 + 8;
        const gapColumn7 = 406.4 + 8;
        const gapColumn8 = 406.5 + 8;
        const gapColumn9 = 406.9 + 8;
        const gapColumn10 = 407.2 + 8;
        const gapColumn11 = 407.4 + 8;
        const gapColumn12 = 407.5 + 8;
        const gapColumn13 = 407 + 8;
        const gapColumn14 = 406.6 + 8;

        //  points =
        //      "279.8,412.4 279.7,410.7 280.1,410.1 281,409.9 283.3,409.8 284.2,410.1 284.5,410.7 284.5,412.4   284.2,414.2 284.1,414.4 284.4,414.3 284.6,414.4 284.6,414.9 284.3,415.2 283.8,415.4 282.1,415.4 280.5,415.4 279.9,415.2   279.7,414.9 279.7,414.4 279.9,414.3 280.2,414.4 280.1,414.1 ";

        items.push(
            <g key={i} id="seat-3843" className="booth" section="1">
                <polygon
                    className="st6 booth-fill"
                    fill="#FFFFFF"
                    stroke="#000000"
                    strokeWidth=".5"
                    strokeMiterlimit="10"
                    points={
                        gap1 +
                        "," +
                        gapColumn1 +
                        " " +
                        gap2 +
                        "," +
                        gapColumn2 +
                        " " +
                        gap3 +
                        "," +
                        gapColumn3 +
                        " " +
                        gap4 +
                        "," +
                        gapColumn4 +
                        " " +
                        gap5 +
                        "," +
                        gapColumn4 +
                        " " +
                        gap6 +
                        "," +
                        gapColumn3 +
                        " " +
                        gap7 +
                        "," +
                        gapColumn2 +
                        " " +
                        gap7 +
                        "," +
                        gapColumn5 +
                        " " +
                        gap6 +
                        "," +
                        gapColumn6 +
                        " " +
                        gap8 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap9 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap10 +
                        "," +
                        gapColumn8 +
                        " " +
                        gap10 +
                        "," +
                        gapColumn9 +
                        " " +
                        gap11 +
                        "," +
                        gapColumn10 +
                        " " +
                        gap12 +
                        "," +
                        gapColumn11 +
                        " " +
                        gap13 +
                        "," +
                        gapColumn12 +
                        " " +
                        gap14 +
                        "," +
                        gapColumn11 +
                        " " +
                        gap15 +
                        "," +
                        gapColumn10 +
                        " " +
                        gap2 +
                        "," +
                        gapColumn13 +
                        " " +
                        gap2 +
                        "," +
                        gapColumn8 +
                        " " +
                        gap15 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap16 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap3 +
                        "," +
                        gapColumn6
                    }
                    id="polygon12197"
                />
                <polygon
                    className="st19"
                    points={
                        gap1 +
                        "," +
                        gapColumn1 +
                        " " +
                        gap2 +
                        "," +
                        gapColumn2 +
                        " " +
                        gap3 +
                        "," +
                        gapColumn3 +
                        " " +
                        gap4 +
                        "," +
                        gapColumn4 +
                        " " +
                        gap5 +
                        "," +
                        gapColumn4 +
                        " " +
                        gap6 +
                        "," +
                        gapColumn3 +
                        " " +
                        gap7 +
                        "," +
                        gapColumn2 +
                        " " +
                        gap7 +
                        "," +
                        gapColumn5 +
                        " " +
                        gap6 +
                        "," +
                        gapColumn6 +
                        " " +
                        gap8 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap9 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap10 +
                        "," +
                        gapColumn8 +
                        " " +
                        gap10 +
                        "," +
                        gapColumn9 +
                        " " +
                        gap11 +
                        "," +
                        gapColumn10 +
                        " " +
                        gap12 +
                        "," +
                        gapColumn11 +
                        " " +
                        gap13 +
                        "," +
                        gapColumn12 +
                        " " +
                        gap14 +
                        "," +
                        gapColumn11 +
                        " " +
                        gap15 +
                        "," +
                        gapColumn10 +
                        " " +
                        gap2 +
                        "," +
                        gapColumn13 +
                        " " +
                        gap2 +
                        "," +
                        gapColumn8 +
                        " " +
                        gap15 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap16 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap3 +
                        "," +
                        gapColumn6
                    }
                    id="polygon12199"
                />
                <polyline
                    className="st20"
                    points={
                        gap8 +
                        "," +
                        gapColumn7 +
                        " " +
                        gap5 +
                        "," +
                        gapColumn8 +
                        " " +
                        gap17 +
                        "," +
                        gapColumn14 +
                        " " +
                        gap4 +
                        "," +
                        gapColumn14 +
                        " " +
                        gap16 +
                        "," +
                        gapColumn8 +
                        " "
                    }
                    id="polyline12153"
                />
            </g>
        );
    }
    return <>{items}</>;
}

export default Row2;
