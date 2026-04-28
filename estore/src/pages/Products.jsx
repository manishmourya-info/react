import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import useDebounce from "../hooks/useDebounce";

export default function Products() {

  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  
  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const categories = useMemo(() => {
    const unique = [...new Set(products.map((item) => item.category))];
    return unique;
  }, [products]);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    data = data.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    // Category
    if (category !== "all") {
      data = data.filter((item) => item.category === category);
    }

    // Sort
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl mt-20 font-bold">
        Loading Products...
      </h1>
    );
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Products
      </h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-3 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-lg outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>

          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-lg outline-none"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl">No products found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}