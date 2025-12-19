import ProductCard from "./ProductCard";

function ProductList({products}) {
  return (
    <>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        category={product.category}
        image={product.image}
      />
    ))}
    </>
  )}

  export default ProductList;