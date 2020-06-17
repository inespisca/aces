import React from 'react';

const Navbar = ({chal}) => {
    const getTotal = () => {
        let sum = 0
        chal.forEach((qual) => {
            sum += qual.count
        })
        return sum;
    }
    return <div className="challenges">You've challenged {getTotal()} Buddyfighters.</div>
}

export default Navbar;