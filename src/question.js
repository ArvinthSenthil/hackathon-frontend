import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function Question({ question_title, vote,views,id}) {
    const history=useHistory();
  return (
  
    <div>
    
    <Card className="question-container"  onClick={()=>{
        history.push(`/questions/${id}`) 
    }}>
     
      <CardContent>
        <div className="question-info">
          <div className="question-specs">
            <h3>{question_title} </h3>
            <p className="span">
              <span role="img" aria-label="star">
               Vote:  {vote}
              </span>
              <span role="img" aria-label="star">
                Views:{views}
                </span>
            </p>
         
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  
  );
}



