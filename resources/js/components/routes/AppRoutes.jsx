import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "./Error404";
import AppLayout from "../Layout";
import SectionIndex from "../content/Index";
import AddToCart from "../add_to_cart/Layout";
import CheckoutLayout from "../checkout/Layout";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <AddToCart />,
            },
            {
                path: "/buy_ticket",
                element: <SectionIndex />,
            },
            {
                path: "/checkout",
                element: <CheckoutLayout />,
            },
        ],
    },
    { path: "*", element: <Error404 /> },
]);
