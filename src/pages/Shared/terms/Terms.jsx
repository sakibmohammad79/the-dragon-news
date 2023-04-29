import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Accept terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae ex, atque officiis ad aliquid? Quo facere perferendis doloremque asperiores!</p> 
            <p>Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;