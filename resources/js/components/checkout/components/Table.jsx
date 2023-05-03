import React, { useState, useEffect } from "react";

function CheckoutTable() {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
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
