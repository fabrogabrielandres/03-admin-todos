
import { ProductCard } from '@/components';
import { mockdataProducts } from '../../../components/Products/mockdataProducts/mockdataProducts';


export const metadata = {
    title: 'ProductsPage Title',
    description: 'ProductsPage desc',
};

export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {mockdataProducts.map(product =>
                <ProductCard key={product.id} {...product} />

            )}
        </div>
    );
}