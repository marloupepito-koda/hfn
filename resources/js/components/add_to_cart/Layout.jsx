import React, { useState, useEffect } from "react";
import AddToCartTopNavbar from "./components/TopNavbar";
import Ring from "../content/Ring";
import AddToCartNoSeats from "./components/Cart";
import AddToCartTable from "./components/Table";

function AddToCart() {
    return (
        <div>
            <AddToCartTopNavbar />
            <div className="row col-md-8 offset-md-2">
                <AddToCartNoSeats />
                <AddToCartTable />
                <Ring />
            </div>
        </div>
    );
}

export default AddToCart;
