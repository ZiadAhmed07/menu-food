import React, { useState } from "react";
import { Container} from "react-bootstrap";
import NavBar from './components/navbar'
import AllButton from "./components/allButton";
import Cards from "./components/Cards";
import { Data } from "./Data";

function App (){

    const [state , setState] = useState(Data)

    const ButDataType = ['الكل',...new Set(Data.map((e)=>e.type))]

    const FilterData = (Datatype) => {
        console.log(Datatype.e)
        if (Datatype.e === 'الكل'){
            setState(Data)
        }else{
            const filter = Data.filter((e)=>e.type === Datatype.e) 
            setState(filter)
        }
    }

    const FilterSearch = (SearchValue) => {
        if (SearchValue !== ''){
            const filter = Data.filter((e)=>e.titel === SearchValue) 
            setState(filter)
        }
    }

    return(
        <>
        <NavBar FilterSearch={FilterSearch} />
        <Container>
            <AllButton FilterData={FilterData} ButDataType={ButDataType}/>
            <Cards CardsData={state} />
        </Container>
        </>
    )
}

export default App