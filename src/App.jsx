import ProductDetails from './component/ProductDetails';
import ProductList from './component/ProductList'
export default function App() {
  return (
    <div className='flex m-2'>
      <ProductList />
      <ProductDetails id={5} />
    </div>
  );
}
