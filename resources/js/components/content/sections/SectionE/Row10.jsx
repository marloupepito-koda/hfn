import React, { useState, useEffect } from "react";

function Row10() {
    const items = [];

    for (let i = 0; i < 38; i++) {
        const gapRow1 = 279.8 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow2 = 279.7 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow3 = 280.1 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow4 = 281 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow5 = 283.3 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow6 = 284.2 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow7 = 284.5 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow8 = 284.1 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow9 = 284.4 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow10 = 284.6 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow11 = 284.3 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow12 = 283.8 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow13 = 282.2 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow14 = 280.5 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow15 = 279.9 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow16 = 280.2 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;
        const gapRow17 = 280.1 + i * 5.2 - 20.8 - 10.4 - 10.4 - 10.4;

        const gapColumn1 = 262.1 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn2 = 263.8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn3 = 264.4 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn4 = 264.6 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn5 = 260.3 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn6 = 260.1 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn7 = 260.2 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn8 = 259.6 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn9 = 259.3 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn10 = 259.1 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn11 = 259 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn12 = 260.4 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn13 = 260.4 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;
        const gapColumn14 = 260.4 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8 - 8;

        if (i !== 18 && i !== 19) {
            items.push(
                <g key={i} id="seat-3827" className="booth" section="1">
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
                            gapColumn2 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn3 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn4 +
                            " " +
                            gapRow5 +
                            "," +
                            gapColumn4 +
                            " " +
                            gapRow6 +
                            "," +
                            gapColumn3 +
                            " " +
                            gapRow7 +
                            "," +
                            gapColumn2 +
                            " " +
                            gapRow7 +
                            "," +
                            gapColumn1 +
                            "   " +
                            gapRow6 +
                            "," +
                            gapColumn5 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn8 +
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
                            gapColumn10 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow2 +
                            ", " +
                            gapColumn8 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow16 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn12
                        }
                        id="polygon12149"
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
                            gapColumn2 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn3 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn4 +
                            " " +
                            gapRow5 +
                            "," +
                            gapColumn4 +
                            " " +
                            gapRow6 +
                            "," +
                            gapColumn3 +
                            " " +
                            gapRow7 +
                            "," +
                            gapColumn2 +
                            " " +
                            gapRow7 +
                            "," +
                            gapColumn1 +
                            "   " +
                            gapRow6 +
                            "," +
                            gapColumn5 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn8 +
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
                            gapColumn10 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn9 +
                            "   " +
                            gapRow2 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow2 +
                            " " +
                            gapColumn6 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow16 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn12
                        }
                        id="polygon12151"
                    />
                    <polyline
                        className="st20"
                        points={
                            gapRow2 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow5 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow17 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow16 +
                            "," +
                            gapColumn6 +
                            " " +
                            " "
                        }
                        id="polyline10485"
                    /> */}
                </g>
            );
        }
    }
    return <>{items}</>;
}

export default Row10;
