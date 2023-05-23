import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <div className="container">
            <div className='row'>
            {
                chefs.map((c,i)=>(
                   <div  key={i} className="col-sm-4 mb-2">
                    <Chef chef={c}
                    ></Chef>
                   </div>
                ))
                // chefs.map((c,i)=>
                
            }
        </div>
        </div>
    );
};

export default Chefs;