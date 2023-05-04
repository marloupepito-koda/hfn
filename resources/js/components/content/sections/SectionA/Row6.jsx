import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartData from "../../../add_to_cart/CartData";
function Row6(props) {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const addCartSeat = (e) => {
        const seatCheck = CartData.data.find(
            (obj) => obj.cart_product_id === e.cart_product_id
        );
        if (seatCheck === undefined) {
            CartData.data.push(e);
            navigate("#" + Math.floor(Math.random() * 9999));
        } else {
            const index = CartData.data.findIndex(
                (res) => res.cart_product_id === e.cart_product_id
            );
            CartData.data.splice(index, 1);
            navigate("#" + Math.floor(Math.random() * 9999));
        }
    };

    for (let i = 0; i < 30; i++) {
        const gapRow1 = 279.8 + i * 5.2 - 3 * 10.4;
        const gapRow2 = 279.7 + i * 5.2 - 3 * 10.4;
        const gapRow3 = 280.1 + i * 5.2 - 3 * 10.4;
        const gapRow4 = 281 + i * 5.2 - 3 * 10.4;
        const gapRow5 = 283.3 + i * 5.2 - 3 * 10.4;
        const gapRow6 = 284.2 + i * 5.2 - 3 * 10.4;
        const gapRow7 = 284.5 + i * 5.2 - 3 * 10.4;
        const gapRow8 = 284.1 + i * 5.2 - 3 * 10.4;
        const gapRow9 = 284.4 + i * 5.2 - 3 * 10.4;
        const gapRow10 = 284.6 + i * 5.2 - 3 * 10.4;
        const gapRow11 = 284.3 + i * 5.2 - 3 * 10.4;
        const gapRow12 = 283.8 + i * 5.2 - 3 * 10.4;
        const gapRow13 = 282.2 + i * 5.2 - 3 * 10.4;
        const gapRow14 = 280.5 + i * 5.2 - 3 * 10.4;
        const gapRow15 = 279.9 + i * 5.2 - 3 * 10.4;
        const gapRow16 = 280.2 + i * 5.2 - 3 * 10.4;
        const gapRow17 = 282.1 + i * 5.2 - 3 * 10.4;

        const gapColumn1 = 404.5 + 8 + 8 + 8 + 8 + 8;
        const gapColumn2 = 402.8 + 8 + 8 + 8 + 8 + 8;
        const gapColumn3 = 402.2 + 8 + 8 + 8 + 8 + 8;
        const gapColumn4 = 401.9 + 8 + 8 + 8 + 8 + 8;
        const gapColumn5 = 404.4 + 8 + 8 + 8 + 8 + 8;
        const gapColumn6 = 406.2 + 8 + 8 + 8 + 8 + 8;
        const gapColumn7 = 406.4 + 8 + 8 + 8 + 8 + 8;
        const gapColumn8 = 406.5 + 8 + 8 + 8 + 8 + 8;
        const gapColumn9 = 406.9 + 8 + 8 + 8 + 8 + 8;
        const gapColumn10 = 407.2 + 8 + 8 + 8 + 8 + 8;
        const gapColumn11 = 407.4 + 8 + 8 + 8 + 8 + 8;
        const gapColumn12 = 407.5 + 8 + 8 + 8 + 8 + 8;
        const gapColumn13 = 407 + 8 + 8 + 8 + 8 + 8;
        const gapColumn14 = 406.6 + 8 + 8 + 8 + 8 + 8;

        if (i !== 14 && i !== 15) {
            const aa = i < 15 ? 29 - i - 2 : 29 - i;
            const seatData = props.data[aa];

            const seatColor = CartData.data.find(
                (res) => res.cart_product_id === seatData.cart_product_id
            );
            items.push(
                <g
                    key={i + Math.random()}
                    onClick={() => addCartSeat(seatData)}
                    id="seat-3827"
                    className="booth"
                    section="1"
                >
                    <polygon
                        className={
                            seatColor === undefined ? "st6 booth-fill" : ""
                        }
                        fill={seatColor === undefined ? "#000000" : "#ffff66"}
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
                </g>
            );
        }
    }
    return <>{items}</>;
}

export default Row6;
