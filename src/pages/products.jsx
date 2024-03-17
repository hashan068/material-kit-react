import { Helmet } from 'react-helmet-async';
import { ProductsView } from '../sections/products/view'; // use relative import for consistency

export default function ProductsPage() {
  return (
    <>
      <Helmet title="Products | Minimal UI" />
      <ProductsView />
    </>
  );
}
