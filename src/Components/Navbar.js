import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({chal}) => {
    const getTotal = () => {
        let sum = 0
        chal.forEach((qual) => {
            sum += qual.count
        })
        return sum;
    }
    return <div className="navbar">Challenged Buddyfighters: {getTotal()} <FontAwesomeIcon  icon={faAngleDown} /></div>
}

export default Navbar;