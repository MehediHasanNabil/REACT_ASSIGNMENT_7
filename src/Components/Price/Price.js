import React from 'react';

const Price = (props) => {
    const totalPrice = props.totalPrice;
    return (
        <div>
            <h3><b>Total Price: ${totalPrice.toFixed(2)}</b></h3>
        </div>
    );
};

export default Price;