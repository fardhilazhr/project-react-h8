import Product from "../components/Product";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const { products, loading, error, setSortBy } = useProduct();

  if (loading) {
    return <div className="text-center mt-8 text-slate-50">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-slate-50">{error}</div>;
  }

  return (
    <div>
      <div className="p-8">
        <div className="mx-4 my-4">
          <select
            className="border border-slate-200 px-4 py-3 rounded-lg"
            onChange={(e) => setSortBy(e.target.value as "name" | "stock")}
          >
            <option value="">Sort by</option>
            <option value="stock">Sort by Stock</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        <div className="flex gap-5 flex-wrap my-8 justify-center items-center m-auto w-auto px-6 py-3">
          {products.map((product, id) => (
            <Product product={product} key={id} />
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
}
