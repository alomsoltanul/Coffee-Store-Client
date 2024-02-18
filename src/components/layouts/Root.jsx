// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Navbar/Header";

const Root = () => {
    return (
        <div>
            <div className=" max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;