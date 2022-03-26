import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {API} from "./globe.js"
import { useFormik } from "formik";
import * as yup from "yup";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import swal from 'sweetalert';

export function Postanswer() {
  const { id } = useParams();
  const [question, setquestion] = useState(null);
 
  useEffect(()=>{fetch(`${API}/${id}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((mv)=>setquestion(mv));},[id])
    
  return (
   <div>
   <Postanswerform question={question}/> 
   </div>
  );
}

const questionValidationSchema = yup.object({


   answer:yup.string().required("Give answer").min(5),
  
});
function Postanswerform({question}){
  const his=useHistory();
  const { id } = useParams();
  const formik = useFormik({
    initialValues: { answer: ""},
     validationSchema: questionValidationSchema,
    onSubmit: (updatedanswer) => {
      editanswer(updatedanswer)
    },
  });
  const history=useHistory();
  const editanswer = (updatedanswer)=>{
  fetch(`${API}/questions/${id}`,{
    method:"PUT", 
    body: JSON.stringify(updatedanswer),
     headers:{
       "content-Type" : "application/json"
    }}).then(() => history.push('/'))
      
     swal({
      title: "Updated",
      text: "Your answer updated",
      icon: "success",
      button: "ok",
    });}
  
 
  return(
    <form  onSubmit={formik.handleSubmit} className="answer_form">
    <TextField  id="answer" label="Give answer"   name="answer" variant="outlined" value={formik.values.answer}  onChange={formik.handleChange}
        onBlur={formik.handleBlur} error={formik.touched.answer && formik.errors.answer}  />

   
    <Button  color="success" variant="contained" type="submit">Save</Button>
    <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
   
    </form>
  
)
}
