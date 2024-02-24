// import React from 'react';

import Swal from "sweetalert2";

const SingleCoffe = ({ coffee }) => {
    const { _id, name, chef, supplier, category, taste, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} style={{ width: '300px' }} alt="Movie" /></figure>
                <div className="flex w-full justify-between ml-4 items-center">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{chef}</h2>
                        <h2 className="card-title">{supplier}</h2>
                        <h2 className="card-title">{category}</h2>
                        <h2 className="card-title">{taste}</h2>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical ">
                            <button className="btn join-item mb-4">View</button>
                            <button className="btn join-item mb-4">Edit</button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn bg-orange-500 mb-4">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffe;