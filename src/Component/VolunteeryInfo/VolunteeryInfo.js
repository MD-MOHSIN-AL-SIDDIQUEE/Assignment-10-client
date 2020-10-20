import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteeryInfo.css'

const VolunteeryInfo = (props) => {
    
  const {img,title,_id} = props.singleData
  
    return (
        <Link to={"/resister/"+ _id}className="card-container">
            <div className="card " style={{ width: '17rem' }}>
                <img className="img-fluid" src={require(`../../resources/images/${img}`)} alt="" />
                <div className="card-body">
                    <p className="card-text text-center">{title}</p>
                </div>
            </div>
        </Link>

    );
};

export default VolunteeryInfo;