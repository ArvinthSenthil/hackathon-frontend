import React, { useEffect } from 'react';
import { useState } from "react";
import {Company} from "./companylist.js"
import {API} from "./globe.js"


export function Companylist() {
 
    const [company, setcompany] = useState([]);
   const getcompany=()=>{fetch(`${API}/company`,{
      method:"GET"}) //Promise
      .then((data)=>data.json())// Response
      .then((mvs)=>setcompany(mvs));}
  
      useEffect(()=> getcompany(),[])
      
    return (
      <section className="company-list">
        
        <div className="company-list-container">
         
          {company.map(({company_name,image,location,company_description},index) => (
            <Company
          key={index}
          company_name={company_name}
          image={image}
          location={location}
          company_description={company_description} 
              />
              
          ))
        
          }
         </div>
      </section>
    );
  }





















