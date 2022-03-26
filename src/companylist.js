import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';






export function Company({company_name,image,location,company_description}) {
    
  return (
  
    <div>
    
    <Card className="question-container"  >
     
      <CardContent>
        <div className="question-info">
          <div className="question-specs">
              <img src={image} alt={company_name} className="company-poster"></img>
            <h3>{company_name} </h3>
            <p className="span">
              <span>
                {location}
              </span>
              <p>
                {company_description}
              </p>
             
            </p>
         
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  
  );
}
