import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "./Error404";
import HomeIndex from "../homepage/Index";
import SectionIndex from "../content/Index";
import AddToCart from "../add_to_cart/Layout";
export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <AddToCart />,
            },
            {
                path: "/buy_ticket",
                element: <SectionIndex />,
            },
        ],
    },
    { path: "*", element: <Error404 /> },
]);
