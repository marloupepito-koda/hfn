import React, { useState, useEffect } from "react";
import CheckoutTable from "./components/Table";
import CheckoutPaymentMethods from "./components/PaymentMethod";
import { Link } from "react-router-dom";

function CheckoutLayout() {
    return (
        <div className="row col-md-8 offset-md-2">
            <CheckoutTable />
            <Link to="/" className="btn btn-dark col-md-3 mb-3">
                BACK TO CART
            </Link>
            <CheckoutPaymentMethods />
        </div>
    );
}

export default CheckoutLayout;
