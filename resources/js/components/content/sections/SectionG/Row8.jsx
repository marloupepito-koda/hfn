import React, { useState, useEffect } from "react";

function Row8() {
    const items = [];

    for (let i = 0; i < 30; i++) {
        const gapRow1 = 396.7 + 8 * 6;
        const gapRow2 = 395.1 + 8 * 6;
        const gapRow3 = 394.5 + 8 * 6;
        const gapRow4 = 394.2 + 8 * 6;
        const gapRow5 = 394.4 + 8 * 6;
        const gapRow6 = 395 + 8 * 6;
        const gapRow7 = 398.5 + 8 * 6;
        const gapRow8 = 398.7 + 8 * 6;
        const gapRow9 = 398.6 + 8 * 6;
        const gapRow10 = 398.8 + 8 * 6;
        const gapRow11 = 399.2 + 8 * 6;
        const gapRow12 = 399.5 + 8 * 6;
        const gapRow13 = 399.7 + 8 * 6;
        const gapRow14 = 399.8 + 8 * 6;
        const gapRow15 = 399.3 + 8 * 6;
        const gapRow16 = 296.4 + 8 * 6;
        const gapRow17 = 293.3 + 8 * 6;
        const gapRow18 = 398.9 + 8 * 6;
        const a1 = 406.6 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a2 = 292 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a3 = 406.7 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a4 = 291.2 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a5 = 406.7 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a6 = 290 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a7 = 406.7 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a8 = 288.9 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a9 = 406.6 + 8 + 8 + 8 + 8 + 8 + 8 + 8;
        const a10 = 288.1 + 8 + 8 + 8 + 8 + 8 + 8 + 8;

        const gapColumn1 = 292.8 + i * 5.2 - 41.6;
        const gapColumn2 = 293.1 + i * 5.2 - 41.6;
        const gapColumn3 = 294.1 + i * 5.2 - 41.6;
        const gapColumn4 = 296.3 + i * 5.2 - 41.6;
        const gapColumn5 = 297.3 + i * 5.2 - 41.6;
        const gapColumn6 = 297.6 + i * 5.2 - 41.6;
        const gapColumn7 = 297.2 + i * 5.2 - 41.6;
        const gapColumn8 = 297.5 + i * 5.2 - 41.6;
        const gapColumn9 = 297.7 + i * 5.2 - 41.6;
        const gapColumn10 = 297.4 + i * 5.2 - 41.6;
        const gapColumn11 = 296.9 + i * 5.2 - 41.6;
        const gapColumn12 = 295.2 + i * 5.2 - 41.6;
        const gapColumn13 = 293.5 + i * 5.2 - 41.6;
        const gapColumn14 = 293 + i * 5.2 - 41.6;
        const gapColumn15 = 292.7 + i * 5.2 - 41.6;
        const gapColumn16 = 292.9 + i * 5.2 - 41.6;
        const gapColumn17 = 293.2 + i * 5.2 - 41.6;

        if (i !== 14 && i !== 15) {
            items.push(
                <g key={i} id="seat-4206" className="booth" section="1">
                    <polygon
                        className="st6 booth-fill"
                        fill="#FFFFFF"
                        stroke="#000000"
                        strokeWidth=".5"
                        strokeMiterlimit="10"
                        points={
                            gapRow1 +
                            "," +
                            gapColumn1 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn1 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn2 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn3 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn4 +
                            " " +
                            gapRow5 +
                            "," +
                            gapColumn5 +
                            " " +
                            gapRow6 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow1 +
                            "," +
                            gapColumn6 +
                            "   " +
                            gapRow7 +
                            "," +
                            gapColumn5 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow11 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow12 +
                            "," +
                            gapColumn10 +
                            " " +
                            gapRow13 +
                            "," +
                            gapColumn11 +
                            " " +
                            gapRow14 +
                            "," +
                            gapColumn12 +
                            " " +
                            gapRow13 +
                            "," +
                            gapColumn13 +
                            " " +
                            gapRow12 +
                            "," +
                            gapColumn14 +
                            "   " +
                            gapRow15 +
                            "," +
                            gapColumn15 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn15 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn16 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn17 +
                            " " +
                            gapRow7 +
                            "," +
                            gapColumn2 +
                            " "
                        }
                        id="polygon15455"
                    />
                    {/* <polygon
                        className="st19"
                        points={
                            gapRow1 +
                            "," +
                            gapColumn1 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn1 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn2 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn3 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn4 +
                            " " +
                            gapRow5 +
                            "," +
                            gapColumn5 +
                            " " +
                            gapRow6 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow1 +
                            "," +
                            gapColumn6 +
                            "   " +
                            gapRow7 +
                            "," +
                            gapColumn5 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow11 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow12 +
                            "," +
                            gapColumn10 +
                            " " +
                            gapRow13 +
                            "," +
                            gapColumn11 +
                            " " +
                            gapRow14 +
                            "," +
                            gapColumn12 +
                            " " +
                            gapRow13 +
                            "," +
                            gapColumn13 +
                            " " +
                            gapRow12 +
                            "," +
                            gapColumn14 +
                            "   " +
                            gapRow15 +
                            "," +
                            gapColumn15 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn15 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn16 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn17 +
                            " " +
                            gapRow7 +
                            "," +
                            gapColumn2 +
                            " "
                        }
                        id="polygon15457"
                    /> */}
                    {/* <polyline
                        className="st20"
                        points={
                            a1 +
                            "," +
                            a2 +
                            " " +
                            a3 +
                            " , " +
                            a4 +
                            " " +
                            a5 +
                            " , " +
                            a6 +
                            " " +
                            a7 +
                            " , " +
                            a8 +
                            " " +
                            a9 +
                            " , " +
                            a10
                        }
                        id="polyline15459"
                    /> */}
                </g>
            );
        }
    }
    return <>{items}</>;
}

export default Row8;
