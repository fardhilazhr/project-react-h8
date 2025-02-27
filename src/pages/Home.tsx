import Product from "../components/Product";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const { products, loading, error, setSortBy } = useProduct();

  if (loading) {
    return (
      <div className="flex justify-center fixed inset-0 items-center">
        <div className="relative">
          <div className="w-30 h-30 border-purple-200 border-2 rounded-full"></div>
          <div className="w-30 h-30 border-cyan-600 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-8 text-slate-50">{error}</div>;
  }

  return (
    <div>
      <div className="p-6 sm:p-2">
        <div className="mx-4 my-4 flex justify-center">
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
