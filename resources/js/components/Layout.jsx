import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AddToCartTopNavbar from "./add_to_cart/components/TopNavbar";
function AppLayout() {
    return (
        <>
            <AddToCartTopNavbar />
            <Outlet />
        </>
    );
}

export default AppLayout;
