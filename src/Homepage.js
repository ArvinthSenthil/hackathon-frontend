import React, { useEffect } from 'react';
import { useState } from "react";
import {Question} from "./question.js"
import {API} from "./globe.js"


export function Questionlist() {
    
    const [questions, setquestions] = useState([]);
   const getquestions=()=>{fetch(`${API}/questions`,{
      method:"GET"}) //Promise
      .then((data)=>data.json())// Response
      .then((mvs)=>setquestions(mvs));}
  
      useEffect(()=> getquestions(),[])
      
    return (
      <section className="question-list">
        
        <div className="question-list-container">
         
          {questions.map(({question_title, vote,views,_id,answer},index) => (
            <Question
          key={index}
          question_title={question_title}
          vote={vote}
          views={views} 
              id={_id}
              answer={answer}
              />
              
          ))
        
          }
         </div>
      </section>
    );
  }























// import { purple } from '@mui/material/colors';

// export function Homepage() {
//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor:"#FFEFDF",
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//       }));
         
//   return (
//       <div>
// <h2>Top Questions</h2>

// </div>

//   );
// }


// {/* <Stack spacing={0.5}  >
//   <Item className='item'></Item>
//   <Item className='item'></Item>
//   <Item className='item'></Item>
// </Stack> */}