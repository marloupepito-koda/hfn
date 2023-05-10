import React, { useState, useEffect } from "react";

function SearchTicketTable() {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Order</th>
                    <th scope="col">NameTicket</th>
                    <th scope="col">Code</th>
                    <th scope="col">Upgrade</th>
                    <th scope="col">Release</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>General Admission No Seat</td>
                    <td>1139635697</td>
                    <td>
                        <button type="button" className="btn btn-success">
                            Upgrade
                        </button>
                    </td>
                    <td>
                        <button type="button" className="btn btn-success">
                            Release
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>General Admission No Seat</td>
                    <td>1139635697</td>
                    <td>
                        <button type="button" className="btn btn-success">
                            Upgrade
                        </button>
                    </td>
                    <td>
                        <button type="button" className="btn btn-success">
                            Release
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>General Admission No Seat</td>
                    <td>1139635697</td>
                    <td>
                        <button type="button" className="btn btn-success">
                            Upgrade
                        </button>
                    </td>
                    <td>
                        <button type="button" className="btn btn-success">
                            Release
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default SearchTicketTable;
