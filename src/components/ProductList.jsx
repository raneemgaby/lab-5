const products=[
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Phone", price: 800 },
  { id: 3, title: "Tablet", price: 600 }
]
function ProductList(){
   return(
    <ul style={{color:"lime",fontFamily:"Arial",fontSize:"16px"}}> {products.map(product=>(
         <li key={product.id}>
            {product.title}{product.price}
         </li>))}
    </ul>
   )
}  

