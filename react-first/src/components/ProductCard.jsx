function ProductCard(props) {
    // const { name, price, category, image } = props;
    const name = props.name;
    const price = props.price;
    const category = props.category;
    const image = props.image;
  return (
    <div className="product-card bg-dark text-light flex flex-col items-center p-4 rounded-lg">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price}$</p>
      <p className="category">{category}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

export default ProductCard;