import React, { useEffect, useState } from 'react'
import NoteContext from './NodeContext'
import axios from 'axios';

function NoteState({children}) {

    let [apiData,setApiData]=useState([]);
    let [loading,setLoading]=useState(true);
    let [firstIndex,setFirstIndex]=useState(0);
    let [lastIndex,setLastIndex]=useState(6);

    function GetData(){
        setTimeout(()=>{
            let url='https://jsonplaceholder.typicode.com/posts'
            axios.get(url).then((res)=>{
                setApiData(res.data);
                setLoading(false);
                console.log(res.data);
            })
        },5000)
    }
    useEffect(()=>{
        GetData();
    },[]);

    const removeCard=(id)=>{
        setApiData(apiData.filter((note)=>note.id !== id));
    }
  return (
    <NoteContext.Provider value={{apiData,setFirstIndex,firstIndex,setLastIndex,lastIndex,loading,removeCard}}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteState