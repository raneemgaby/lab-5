import {useState} from 'react';

function App(){
  console.log("React Product Dashboard");
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
  return(
   <>
    <input type="text" value={name}
     onChange={ (n)=>setName(n.target.value)}
    />
    <p>Hello,{name}</p>
  </>
  );
}

