import React, { useContext } from 'react';
import { UserContext } from '../../App';


const OrderInfo = (props) => {
    const { title, img, date,_id } = props.order;
   

 
    return (
        
     
        <div className="d-flex justify-content-center col-md-4" >
            <img className="img-fluid" style={{ width: '100px' }} src={require(`../../resources/images/${img}`)} alt="" />
            <div className="card-body">
                <p className="card-text text-center">{title}</p>
                <h3>{new Date(date).toDateString('dd/MM/yyyy')}</h3>
                <button className="btn btn-warning" onClick={()=>props.deleteProduct(`${_id}`)}>Cancel</button>
            </div>
        </div>


    );
};

export default OrderInfo;