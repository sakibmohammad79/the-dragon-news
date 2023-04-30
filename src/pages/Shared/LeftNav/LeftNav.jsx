import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNavInsightsNews from '../../News/LeftNavInsightsNews/LeftNavInsightsNews';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('https://the-dragon-news-server-sakibmohammad79.vercel.app/catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div className='mt-5'>
            <h4>All Catagories</h4>
            <h6>International News</h6>
            <div className='ps-3'>
            {
                catagories.map((catagorie) => <p
                kay={catagorie.id}
                >
                    <Link to={`/catagory/${catagorie.id}`} className='text-decoration-none text-black'>{catagorie.name}</Link>
                </p>)
            }
            </div>
            <LeftNavInsightsNews></LeftNavInsightsNews>
        </div>
    );
};

export default LeftNav;