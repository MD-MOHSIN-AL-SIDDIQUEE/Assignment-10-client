import React, { useEffect, useState } from 'react';
import VolunteeryInfo from '../VolunteeryInfo/VolunteeryInfo';



const VolunteeryWorkData = () => {
    const [volunteryData, setVolunteryData] = useState([]);

    useEffect(() => {
        fetch('https://mighty-lake-85220.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setVolunteryData(data)
            }
            )
    }, [])

    return (
        <div className="row ml-5 p-5 mt-5">
            {

                volunteryData.map(singleData => <VolunteeryInfo key={singleData._id} singleData={singleData}></VolunteeryInfo>)

            }
        </div>
    );
};

export default VolunteeryWorkData;