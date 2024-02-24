import { useState } from 'react';
import ProductDetails from './component/ProductDetails';
import ProductList from './component/ProductList'
import AddProduct from './component/AddProduct';
export default function App() {
  const [productId,setProductId]=useState("")
  console.log('aoop',productId)
  return (
    <div className='flex m-2'>
    <AddProduct />
      <ProductList setProductId={setProductId}/>
      <ProductDetails id={productId} />
      
    </div>
  );
}
