import React from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

function BasicExample(props) {

  return (
    <div>
      {
        props.CardsData.length > 1? props.CardsData.map((e , i) => {
          return(
            <Card  key={i} className='Card' style={{
               width: '100%',
                display: 'flex',
                flexDirection: 'row',
                margin:'20px 0px' ,
                backgroundColor:'#fff',
                boxShadow:'3px 3px 5px #ccc',
                borderRadius:'7px',
                }}>
            <Card.Img variant="top" src={e.img} alt='#' style={{width: '200px',borderRadius:'0px 5px 5px 0px'}}/>
            <Card.Body>
              <div style={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-between'}}>
                  <Card.Title>{e.titel}</Card.Title>
                  <Card.Title>{e.salary}</Card.Title>
              </div>
              <Card.Text style={{fontSize:'15px' ,marginTop:'20px'}}>{e.description}</Card.Text>
            </Card.Body>
          </Card>
          )
        }) : <Alert variant='warning' style={{textAlign:'center'}}> لا يوجد وجبات متاحه  ;  تاكد من مفتاح البحث  </Alert>  
        }
    </div>
  );
}

export default BasicExample;