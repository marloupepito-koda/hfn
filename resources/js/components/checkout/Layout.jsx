import React, { useState, useEffect } from "react";
import CheckoutTable from "./components/Table";
import CheckoutPaymentMethods from "./components/PaymentMethod";

function CheckoutLayout() {
    return (
        <div className="row col-md-8 offset-md-2">
            <CheckoutTable />
            <CheckoutPaymentMethods />
        </div>
    );
}

export default CheckoutLayout;
