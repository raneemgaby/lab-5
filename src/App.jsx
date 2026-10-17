import {useState} from 'react';
import ProductList from './components/ProductList';

function App(){ //cretaed the component name the same as the class name to match the standard entry points
  const[showProducts,setShowProducts]=useState(true);
  function handleClick(){
    setShowProducts(!showProducts);
  }
  return(
    <div>
     <h1>React Product Dashboard</h1>
     <button onClick={handleClick}>
     {showProducts?"Hide Products":"Show Products"}
     </button>
     <NameInput/>
     {showProducts && <ProductList/>}
    </div>
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
export default App;
