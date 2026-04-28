import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {

  const { addToCart } = useCart();

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getSingleProduct() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl mt-20 font-bold">
        Loading Product...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="bg-white p-8 rounded-2xl shadow">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 w-full object-contain"
        />
      </div>

      <div>
        <p className="text-sm text-gray-500 uppercase mb-2">
          {product.category}
        </p>

        <h1 className="text-4xl font-bold mb-4">
          {product.title}
        </h1>

        <p className="text-gray-600 leading-7 mb-6">
          {product.description}
        </p>

        <p className="text-3xl font-bold text-green-600 mb-4">
          ${product.price}
        </p>

        <p className="mb-6">
          ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}