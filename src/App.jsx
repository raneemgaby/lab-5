import {useState} from 'react';

function App(){ //cretaed the component name the same as the class name to match the standard entry points
  console.log("React Product Dashboard"); //rendering a header and the event functions
  return <div><ToggleButton/><NameInput/></div> 
}

function ToggleButton(){
  const[showProducts,setShowProducts]=useState(true);
  function handleClick(){
    setShowProducts(!showProducts);
  }
  return(
    <button onClick={handleClick}>
    {showProducts?"Hide Products":"Show Products"}
    </button>
  );
}

function NameInput(){
  const[name,setName]=useState("");
  return(                                                         /*added <></> for dynamic variables*/
   <> 
    <input type="text" value={name}
     onChange={ (n)=>setName(n.target.value)}
    />
    <p>Hello,{name}</p>
  </>
  );
}

