// import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleCoffeAdd = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, category, taste, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Coffee Added Successfully! ',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div className=" p-24">
            <h2 className="text-6xl font-extrabold text-center mb-4">ADD coffee</h2>
            <form onSubmit={handleCoffeAdd}>
                {/* form row chef coffee name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="text" name="name" className="input input-bordered  w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Chef Name" name="chef" className="input input-bordered ml-1 w-full" required />
                    </div>
                </div>
                {/* form row chef coffee name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered gap-1 w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="coffee taste" name="taste" className="input input-bordered ml-1 w-full" required />
                    </div>
                </div>
                {/* form row chef coffee name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="test" placeholder="Coffee Category" name="category" className="input input-bordered gap-1 w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details </span>
                        </label>
                        <input type="test" placeholder="Details of Coffee" name="details" className="input input-bordered ml-1 w-full" required />
                    </div>
                </div>
                {/* form row chef coffee name */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered gap-1 " required />
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-info" />
            </form>
        </div>
    );
};

export default AddCoffee;