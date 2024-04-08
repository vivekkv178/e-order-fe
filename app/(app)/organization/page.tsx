"use client";
import React, { useEffect, useState } from 'react'

const ManageOrganizations = () => {

    const [organizations, setOrganizations] = useState([]);

    const getData = async () => {
        const response = await fetch("https://open-api-be-vivekkv.vercel.app/v1/config/organization");
        const data = await response.json();
        console.log(data);
        setOrganizations(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        {organizations.map((org:any,index)=>(
            <div key={index} className='tw-border tw-border-b-2 tw-w-1/4 tw-text-center tw-rounded-md tw-p-4'>
            {org.name}
            </div>
        ))}
        </>
    )
}

export default ManageOrganizations