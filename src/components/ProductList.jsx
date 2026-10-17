const products=[
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Phone", price: 800 },
  { id: 3, title: "Tablet", price: 600 }
]
function rendering(){
   return(
    <p style={{color:"lime",fontFamily:"Arial",fontSize:"16px"}}> {products.map(products=>(
         <li key={products.id}>
            {products.title}{products.price}
         </li>))}
    </p>
   )
}  

