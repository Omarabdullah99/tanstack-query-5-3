import { useState } from 'react';
import ProductDetails from './component/ProductDetails';
import ProductList from './component/ProductList'
export default function App() {
  const [productId,setProductId]=useState("")
  console.log('aoop',productId)
  return (
    <div className='flex m-2'>
      <ProductList setProductId={setProductId}/>
      <ProductDetails id={productId} />
    </div>
  );
}
