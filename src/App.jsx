import {useState} from 'react';
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
  return <p>{name}</p>;
}

