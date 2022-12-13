import React from "react";
import ProductList from "../../components/list/ProductList";
import SearchInput from "../../components/form/SearchInput";
import ModalForm from "../../components/form/ModalForm";
import AddProductForm from "../../components/form/AddProductForm";
import { useCollection } from "../../hooks/useCollection";
import SkeletonWithList from "../../components/skeleton/SkeletonWithList";

function Products() {
  const {
    documents: products,
    error,
    isPending,
  } = useCollection(
    "products"
    // ["category", "==", "powerpoint"],
    // ["createdAt", "desc"]
  );
  return (
    <div className="mt-20 max-w-[800px] mx-auto px-5">
      <h1 className="text-center text-headline4 font-700 ">Quản lý sản phẩm</h1>
      <div className=" mt-10 sm:flex sm:gap-3 sm:items-center ">
        <div className="basis-10/12 ">
          <SearchInput />
        </div>
        <div className="mt-2 sm:mt-0">
          <ModalForm action="Tạo mới">
            <AddProductForm />
          </ModalForm>
        </div>
      </div>
      <div className="mt-5">
        {isPending && <SkeletonWithList />}
        {products && <ProductList docs={products} />}
        {error && <h1>{error}</h1>}
      </div>
    </div>
  );
}

export default Products;
