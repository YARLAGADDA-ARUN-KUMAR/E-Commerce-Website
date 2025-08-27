import { Navbar } from "../../components/Navbar";
import { GetAllProducts } from "../../api/getAllProducts";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GetAllProducts();
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
                    products.length > 0 && products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </main>
        </div>
    );
};