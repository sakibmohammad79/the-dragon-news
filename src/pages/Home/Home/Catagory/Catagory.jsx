import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Catagory = () => {
    const catagorNews = useLoaderData();
    const {id} = useParams();
    return (
        <div className='mt-5'>
            {
                id && <h2>this catagory news: {catagorNews.length}</h2>
            }
            {
                catagorNews.map(news => <NewsCard key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;