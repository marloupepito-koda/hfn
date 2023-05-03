import React, { useState, useEffect } from "react";
import CartData from "../CartData";
import { useLocation } from "react-router-dom";
function AddToCartTable() {
    const location = useLocation().hash;
    const [data, setData] = useState(CartData);
    useEffect(() => {
        setData(CartData.data);
    }, [location]);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Seat #</th>
                        <th scope="col">Name</th>
                        <th scope="col">Section</th>
                        <th scope="col">Seat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 || data.length === undefined
                        ? ""
                        : data.map((res) => (
                              <tr>
                                  <th scope="row">{res.id}</th>
                                  <td>{res.name}</td>
                                  <td>{res.section}</td>
                                  <td>{res.seat}</td>
                              </tr>
                          ))}
                </tbody>
            </table>
        </>
    );
}

export default AddToCartTable;
