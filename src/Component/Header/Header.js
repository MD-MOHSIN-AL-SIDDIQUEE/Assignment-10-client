import React from 'react';
import Navbar from '../Navbar/Navbar';
import VolunteeryWorkData from '../VolunteeryWorkData/VolunteeryWorkData';


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <VolunteeryWorkData></VolunteeryWorkData>
        </div>
    );
};

export default Header;