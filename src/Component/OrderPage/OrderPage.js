import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import OrderInfo from '../OrderInfo/OrderInfo';

const OrderPage = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://mighty-lake-85220.herokuapp.com/order/' + loggedInUser.name)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    function deleteProduct(id) {
        const A = order.filter(b => b._id !== id)
        setOrder(A)
        fetch('https://mighty-lake-85220.herokuapp.com/delete/' + id, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log("deleted");
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">

                {
                    order.map(singleData => <OrderInfo deleteProduct={deleteProduct} order={singleData}></OrderInfo>)
                }
            </div>
        </div>

    );
};

export default OrderPage;