// import React from 'react';

import { useLoaderData } from "react-router-dom";
import SingleCoffe from "./SingleCoffe";

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <h2>{coffees.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    coffees.map(coffee => <SingleCoffe key={coffee._id} coffee={coffee}></SingleCoffe>)
                }
            </div>
        </div>
    );
};

export default Home;