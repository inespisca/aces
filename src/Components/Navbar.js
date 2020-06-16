import React from 'react';

const Navbar = ({chal}) => {
    const getTotal = () => {
        let sum = 0
        chal.forEach((qual) => {
            sum += qual.count
        })
        return sum;
    }
    return <div className="challenges">Challenged Buddyfighters: {getTotal()}</div>
}

export default Navbar;