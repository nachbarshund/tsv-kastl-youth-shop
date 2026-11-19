import { notFound } from 'next/navigation';
import { BackBar } from '../../../../components/TopBar';
import ProductView from './ProductView';
import { getProduct } from '../../../../lib/products';

export default async function Produkt({ params }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  return (
    <>
      <BackBar href="/" cart />
      <ProductView product={product} />
    </>
  );
}
