import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resources/logos/Group 1329.png';
import './ResisterPage.css'

const ResisterPage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { productKey } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history=useHistory();

    useEffect(() => {
        fetch('https://mighty-lake-85220.herokuapp.com/products/'+ productKey)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productKey])

    const onSubmit = data => {
       
        const newResister = { ...loggedInUser, img:product.img,title:product.title, date:new Date() };
        console.log(newResister);
      
          fetch('https://mighty-lake-85220.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newResister)
          })
          .then(res => res.json())
          .then(data => {
            if(data){
             
              alert('your order placed successfully');
             
              history.push(`/orderPage/${loggedInUser.name}`)
            }
          })
          .catch(err => {
            console.log("error")
          })
    
        };
    
     


    return (


        <div className="login ">
            <div className="d-flex  justify-content-center">
                <img src={logo} alt="" />
            </div>
            <br />
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <form className="ship-form  " onSubmit={handleSubmit(onSubmit)}>
                <h1>Resister as volunteer</h1>
                <h5>Name</h5>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <h5>Email</h5>
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}
                <h5>Date</h5>
                <input name="address" ref={register({ required: true })} placeholder="Your Address" value={new Date()} />
                {errors.address && <span className="error">Date is required</span>}
                <h5>Description</h5>
                <input name="text" ref={register({ required: true })} placeholder="Description" />
                {errors.phone && <span className="error">Phone Number is required</span>}
                <input name="text" ref={register({ required: true })} placeholder="Your Phone Number"value={product.title} />
                {errors.phone && <span className="error">Phone Number is required</span>}
                <input type="submit" />
            </form>
              </div>
              <div className="col-md-4"></div>
            </div>
         


        </div>




    );
};

export default ResisterPage;