import React, { useState, useEffect } from "react";

function AddToCartNoSeats() {
    const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    return (
        <>
            <div className="card mb-5 mt-5">
                <div className="card-header">Seats Pricing</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div
                                    className="card "
                                    style={{ backgroundColor: "#d9d9d9" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">Legend</h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        Seat Type
                                                    </th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Color</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        VIP Ringside
                                                    </th>
                                                    <td>$ 200-$ 150</td>
                                                    <td>
                                                        <div
                                                            className="card "
                                                            style={{
                                                                backgroundColor:
                                                                    " #a800ff",
                                                            }}
                                                        >
                                                            &nbsp;
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Preferred Seating
                                                    </th>
                                                    <td>$ 100</td>
                                                    <td>
                                                        <div
                                                            className="card "
                                                            style={{
                                                                backgroundColor:
                                                                    "#0e7a00",
                                                            }}
                                                        >
                                                            &nbsp;
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        General Admission
                                                        Seating
                                                    </th>
                                                    <td>$ 80</td>
                                                    <td>
                                                        <div
                                                            className="card "
                                                            style={{
                                                                backgroundColor:
                                                                    "#fdb100",
                                                            }}
                                                        >
                                                            &nbsp;
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        General Admission No
                                                        Seat
                                                    </th>
                                                    <td>$ 60</td>
                                                    <td>
                                                        <div
                                                            className="card "
                                                            style={{
                                                                backgroundColor:
                                                                    "white",
                                                            }}
                                                        >
                                                            &nbsp;
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            General Admission No Seat
                                        </h5>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Row</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">$ 60.00</th>
                                                    <td>
                                                        <select
                                                            className="form-select form-select-sm mb-3"
                                                            aria-label=".form-select-sm example"
                                                            defaultValue="1"
                                                        >
                                                            <option
                                                                selected
                                                                disabled
                                                                value="selected"
                                                            >
                                                                Select Row
                                                            </option>
                                                            {rows.map((res) => (
                                                                <option
                                                                    key={res}
                                                                    value={res}
                                                                >
                                                                    {res}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary">
                                                            ADD TO CART
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </>
    );
}

export default AddToCartNoSeats;
