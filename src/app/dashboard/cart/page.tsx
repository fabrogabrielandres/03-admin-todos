import { WidGetItem } from "@/components";
import { Product, mockdataProducts } from "@/components/Products/mockdataProducts/mockdataProducts";
import { ItemCard } from "@/components/shopping-cart/ItemIncart/ItemIncart";
import { CookieInterface } from "@/components/shopping-cart/actions/actions";
import { cookies } from "next/headers";


interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductsInCart = (cart: CookieInterface): Array<ProductInCart> => {
    const createProductsInCart = Object.keys(cart).map(keys => {
        const product = mockdataProducts.find(prod => prod.id === keys)!;
        return { product, quantity: cart[keys] }
    });
    return createProductsInCart
}



export default function CartPage() {
    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as CookieInterface;
    const productsInCart = getProductsInCart(cart);

    const totalToPay = productsInCart.reduce(
        (prev, current) => (current.product.price * current.quantity) + prev, 0);

    return (
        <div>
            <h1 className="text-5xl">Productos en el carrito</h1>
            <hr className="mb-2" />

            <div className="flex flex-col sm:flex-row gap-2 w-full">

                <div className="flex flex-col gap-2 w-full sm:w-8/12">
                    {
                        productsInCart.map(({ product, quantity }) => (
                            <ItemCard key={product.id} product={product} quantity={quantity} />
                        ))
                    }
                </div>

                <div className="flex flex-col w-full sm:w-4/12">
                    <WidGetItem title="Total a pagar">
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">${(totalToPay * 1.15).toFixed(2)}</h3>
                        </div>
                        <span className="font-bold text-center text-gray-500">Impuestos 15%: ${(totalToPay * 0.15).toFixed(2)}</span>
                    </WidGetItem>
                </div>



            </div>

        </div>
    );
}