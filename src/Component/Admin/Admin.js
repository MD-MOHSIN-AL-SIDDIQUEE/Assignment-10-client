import React from 'react';
import VolunteryData from '../VolunteryData/VolunteryData';

const Admin = () => {
 
    const handleAddProduct = () => {
        fetch('https://mighty-lake-85220.herokuapp.com/addProduct',{
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
                },
            body: JSON.stringify(VolunteryData)
        })
    }
    return (
        <div>
            <button onClick={handleAddProduct}className="btn btn-primary">Add Product</button>
        </div>
    );
};

export default Admin;