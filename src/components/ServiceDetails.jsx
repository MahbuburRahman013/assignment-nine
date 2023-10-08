import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'

const ServiceDetails = () => {
     const [data,setData] = useState({});
     const {id} = useParams();
     
     useEffect(()=>{
        fetch('/wedding.json')
        .then(res=>res.json())
        .then(data1=> setData(data1.find(data2=> data2.id === id)))
     },[id])

         const {detailed_description,banner_pic,name,price} = data;     
    return (
        <div className='container mx-auto'>
            <img className='w-[90%] rounded md:h-[85vh] mt-5 mx-auto' src={banner_pic} alt="" />
            <div className='w-[90%] mx-auto'>
            <h1 className='text-4xl font-semibold mt-5'>{name}</h1>
            <p className='text-xl font-semibold mt-2'>{price}</p>
            <p className='text-xl text-gray-500'>{detailed_description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;