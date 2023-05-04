import React, { useState, useEffect } from "react";
import CartData from "../../add_to_cart/CartData";
import { useLocation } from "react-router-dom";
function CheckoutTable() {
    const location = useLocation().hash;
    const [addCart, setAddCart] = useState([]);

    useEffect(() => {
        setAddCart(CartData.data);
        console.log("waaa", addCart);
    }, [location]);
    return (
        <>
            <h3 className="mt-3">Order Summary</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {addCart.map((res) => (
                        <tr>
                            <th scope="row">
                                {res.product_name}(Section{" "}
                                {res.venue_section_id === 1
                                    ? "A"
                                    : res.venue_section_id === 2
                                    ? "B"
                                    : res.venue_section_id === 3
                                    ? "C"
                                    : "D"}
                                , Row {res.venue_row}, Seats {res.venue_seat})
                            </th>
                            <td>{res.price_list}</td>
                            <td>{res.price_fee}</td>
                            <td>{res.quantity}</td>
                            <td>{res.price_fee + res.price_list}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="col-md-4 offset-md-8">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td scope="row">Sub Total:</td>
                            <th>$160.00</th>
                        </tr>
                        <tr>
                            <td scope="row">Ticket Fee:</td>
                            <th>$15.00</th>
                        </tr>
                        <tr>
                            <td scope="row">Discount:</td>
                            <th>00.00</th>
                        </tr>
                        <tr>
                            <td scope="row">Grand Total:</td>
                            <th>$175.00</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
}

export default CheckoutTable;
