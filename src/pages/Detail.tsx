import { useNavigate, useParams } from "react-router";
import useProduct from "../hooks/useProduct";
import Button from "../components/UI/Button";
import useCart from "../hooks/useCart";
import { useState } from "react";

export default function Detail() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products, updateStock } = useProduct();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id as string));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return <div className="text-center p-10">Product not found</div>;
  }

  return (
    <div className="p-4 md:p-10 lg:p-20">
      <div className="flex justify-between items-center mb-6">
        <Button
          onClick={() => navigate(-1)}
          className="text-only text-black"
          label="Back to home"
          imageUrl="/assets/back-black.svg"
        />
      </div>

      <div className="flex flex-col md:flex-row shadow-md shadow-gray-200 p-6 md:p-8 rounded-2xl gap-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full h-auto rounded-2xl"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col ">
          <h1 className="font-bold text-2xl md:text-4xl mb-4">
            {product.name}
          </h1>
          <p className="text-base md:text-lg mb-4">{product.desc_long}</p>
          <p className="text-sm mb-4 text-neutral-400">
            Stock: {product.stock > 0 ? product.stock : "Out of stock"}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold">{product.price}</p>
              <Button
                label="Add to Cart"
                imageUrl="/assets/cart.svg"
                className="w-auto"
                onClick={() => {
                  addToCart(product);
                  updateStock(product.id, 1, true);
                }}
                disabled={product.stock === 0}
              />
            </div>
            <button
              className="p-2 outline-2 outline-offset-2 outline-cyan-600 bg-cyan-600 rounded-full text-white shadow-md cursor-pointer flex items-center justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/assets/quest.svg" alt="Help" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <img src="/assets/howTo.svg" alt="Instructions" className="mb-4" />
            <h2 className="text-md font-semibold mb-2">Cara Membeli Obat:</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>Cari obat sesuai kebutuhan Anda</li>
              <li>
                Pilih obat sesuai deskripsi (lampirkan resep dokter jika
                diperlukan)
              </li>
              <li>Isi form keterangan pengguna</li>
              <li>Tambahkan ke keranjang dan lanjutkan ke pembayaran</li>
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
