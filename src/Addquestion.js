import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from './globe';
import { useFormik } from "formik";
import * as yup from "yup";

 const questionValidationSchema = yup.object({
  question_title : yup.string().required("Enter question title"),
 
    question:yup.string().required("Write your question").min(20),
  
    
});

export function Addquestion() {
  const formik = useFormik({
    initialValues: { question_title: "", question:"" },
     validationSchema: questionValidationSchema,
    onSubmit: (newquestion) => {
        addquestion (newquestion)
    },
  });
  const his=useHistory();
 const addquestion = (newquestion) => {
console.log("onSubmit",newquestion)
    fetch(`${API}/questions`,{
      method:"POST", 
      body: JSON.stringify([newquestion]),
       headers:{
         "content-Type" : "application/json"
      }})
  
    .then(() =>his.push("/"))
   };

  return (
   
      <form className="question_form" onSubmit={formik.handleSubmit}>
      <TextField  id="question_title" type="text"  name="question_title" label="question_title" variant="outlined" values={formik.values.question_title}  onChange={formik.handleChange}
          onBlur={formik.handleBlur} error={formik.touched.question_title && formik.errors.question_title} helperText={formik.touched.question_title && formik.errors.question_title? formik.errors.question_title: ""} />  
      <TextField id="question" type="text"  name="question" label="question" variant="outlined" values={formik.values.question}  onChange={formik.handleChange}  onBlur={formik.handleBlur} error={formik.touched.question && formik.errors.question}  helperText= {formik.touched.question && formik.errors.question ? formik.errors.question : ""} />
 

      <Button variant="contained" type="submit">Add question</Button>
      <Button onClick={()=>his.goBack()} variant="contained" startIcon={<ArrowBackIosIcon />}>back</Button>
      </form>
  
  );
}

