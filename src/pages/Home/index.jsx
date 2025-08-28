import { Navbar } from "../../components/Navbar";
import { getAllProducts } from "../../api/getAllProducts";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cartContext";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const { cart } = useCart()
    console.log({cart})
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                return error;
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Navbar />
            <main className="flex gap-12 justify-center flex-wrap mt-8">
                {
                    products?.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </main>
        </div>
    );
};