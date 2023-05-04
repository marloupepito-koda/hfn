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
                        <th scope="col">Product Name</th>
                        <th scope="col">Section</th>
                        <th scope="col">Row</th>
                        <th scope="col">Seat</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 || data.length === undefined
                        ? ""
                        : data.map((res) => (
                              <tr>
                                  <td>{res.product_name}</td>
                                  <td>
                                      Section{" "}
                                      {res.venue_section_id === 1
                                          ? "A"
                                          : res.venue_section_id === 2
                                          ? "B"
                                          : res.venue_section_id === 3
                                          ? "C"
                                          : "D"}
                                  </td>
                                  <td>Row {res.venue_row}</td>
                                  <td>Seat {res.venue_seat}</td>
                              </tr>
                          ))}
                </tbody>
            </table>
        </>
    );
}

export default AddToCartTable;
