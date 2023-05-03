import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartData from "../../../add_to_cart/CartData";
function Row1() {
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);
    const [random, setRandom] = useState([]);
    const navigate = useNavigate();
    const addCartSeat = (e) => {
        const seat = data.find((obj) => obj.id === e.id);
        console.log(seat);
        if (seat === undefined) {
            data.push(e);
            setData(data);
            CartData.data = data;
            setRandom(Math.random());
            navigate("#" + Math.floor(Math.random() * 9999));
        } else {
            const index = data.findIndex((res) => res.id === e.id);
            data.splice(index, 1);
            setData(data);
            CartData.data = data;
            setRandom(Math.random());
            navigate("#" + Math.floor(Math.random() * 9999));
        }
    };

    useEffect(() => {
        CartData.data = data;
    }, [random]);

    for (let i = 0; i < 22; i++) {
        const gapRow1 = 279.8 + i * 5.2 - 1 * 10.4;
        const gapRow2 = 279.7 + i * 5.2 - 1 * 10.4;
        const gapRow3 = 280.1 + i * 5.2 - 1 * 10.4;
        const gapRow4 = 281 + i * 5.2 - 1 * 10.4;
        const gapRow5 = 283.3 + i * 5.2 - 1 * 10.4;
        const gapRow6 = 284.2 + i * 5.2 - 1 * 10.4;
        const gapRow7 = 284.5 + i * 5.2 - 1 * 10.4;
        const gapRow8 = 284.1 + i * 5.2 - 1 * 10.4;
        const gapRow9 = 284.4 + i * 5.2 - 1 * 10.4;
        const gapRow10 = 284.6 + i * 5.2 - 1 * 10.4;
        const gapRow11 = 284.3 + i * 5.2 - 1 * 10.4;
        const gapRow12 = 283.8 + i * 5.2 - 1 * 10.4;
        const gapRow13 = 282.2 + i * 5.2 - 1 * 10.4;
        const gapRow14 = 280.5 + i * 5.2 - 1 * 10.4;
        const gapRow15 = 279.9 + i * 5.2 - 1 * 10.4;
        const gapRow16 = 280.2 + i * 5.2 - 1 * 10.4;
        const gapRow17 = 282.1 + i * 5.2 - 1 * 10.4;

        const gapColumn1 = 404.5 + 8 * 1;
        const gapColumn2 = 402.8 + 8 * 1;
        const gapColumn3 = 402.2 + 8 * 1;
        const gapColumn4 = 401.9 + 8 * 1;
        const gapColumn5 = 404.4 + 8 * 1;
        const gapColumn6 = 406.2 + 8 * 1;
        const gapColumn7 = 406.4 + 8 * 1;
        const gapColumn8 = 406.5 + 8 * 1;
        const gapColumn9 = 406.9 + 8 * 1;
        const gapColumn10 = 407.2 + 8 * 1;
        const gapColumn11 = 407.4 + 8 * 1;
        const gapColumn12 = 407.5 + 8 * 1;
        const gapColumn13 = 407 + 8 * 1;
        const gapColumn14 = 406.6 + 8 * 1;

        if (i !== 10 && i !== 11) {
            const seat = data.find((res) => res.id === i);
            items.push(
                <g
                    key={i + Math.random()}
                    onClick={() =>
                        addCartSeat({
                            id: i,
                            name: "General Admission",
                            section: "A",
                            row: "1",
                            seat: i,
                        })
                    }
                    id="seat-3827"
                    className="booth"
                    section="1"
                >
                    <polygon
                        value={i}
                        className={seat === undefined ? "st6 booth-fill" : ""}
                        fill={seat === undefined ? "#000000" : "#ffff66"}
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
                            gapColumn5 +
                            " " +
                            gapRow6 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow11 +
                            "," +
                            gapColumn10 +
                            " " +
                            gapRow12 +
                            "," +
                            gapColumn11 +
                            " " +
                            gapRow13 +
                            "," +
                            gapColumn12 +
                            " " +
                            gapRow14 +
                            "," +
                            gapColumn11 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn10 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn13 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow16 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn6
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
                            gapColumn5 +
                            " " +
                            gapRow6 +
                            "," +
                            gapColumn6 +
                            " " +
                            gapRow8 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow9 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow10 +
                            "," +
                            gapColumn9 +
                            " " +
                            gapRow11 +
                            "," +
                            gapColumn10 +
                            " " +
                            gapRow12 +
                            "," +
                            gapColumn11 +
                            " " +
                            gapRow13 +
                            "," +
                            gapColumn12 +
                            " " +
                            gapRow14 +
                            "," +
                            gapColumn11 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn10 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn13 +
                            " " +
                            gapRow2 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow15 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow16 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow3 +
                            "," +
                            gapColumn6
                        }
                        id="polygon12151"
                    />
                    <polyline
                        className="st20"
                        points={
                            gapRow8 +
                            "," +
                            gapColumn7 +
                            " " +
                            gapRow5 +
                            "," +
                            gapColumn8 +
                            " " +
                            gapRow17 +
                            "," +
                            gapColumn14 +
                            " " +
                            gapRow4 +
                            "," +
                            gapColumn14 +
                            " " +
                            gapRow16 +
                            "," +
                            gapColumn8 +
                            " "
                        }
                        id="polyline12153"
                    /> */}
                </g>
            );
        }
    }
    return <>{items}</>;
}

export default Row1;
