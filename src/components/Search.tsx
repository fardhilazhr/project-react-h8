import Input from "./UI/Input";
import useProduct from "../hooks/useProduct";

export default function Search() {
  const { setKeyword } = useProduct();

  return (
    <Input
      type="text"
      placeholder="Search"
      className="bg-white w-auto rounded-3xl"
      onChange={(value: string) => setKeyword(value)}
    />
  );
}
