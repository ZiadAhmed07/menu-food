import React from 'react'
import { Button } from 'react-bootstrap';

function AllButton(props) {
  const onFilter = (type)=>{
    props.FilterData(type)
  }
  return (
    <main>
        <div id='titel'>
            <h2>قائمه الطعام</h2>
            <hr/>
        </div>
        <div id='but'>
        {
          props.ButDataType.length ? props.ButDataType.map((e,i)=>{
            return(
                <Button key={i} className='button' onClick={()=> onFilter({e})}>{e}</Button>
            )
          }) : console.log('ghjk')
        }
        </div>
    </main>
  )
}

export default AllButton;
