function ProductCard({
  name,
  price,
  description,
  isDiscounted,
  isMale,
  image,
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={image}
          alt={name}
          loading="lazy"
        />

        {isDiscounted && (
          <span className="discount-badge">
            تخفیف ویژه
          </span>
        )}
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <p className="product-description">
          {description}
        </p>

        <p className="product-price">
          {price.toLocaleString("fa-IR")} تومان
        </p>

        <div className="product-tags">
          <span
            className={isMale ? "male-tag" : "female-tag"}
          >
            {isMale ? "مردانه" : "زنانه"}
          </span>

          <span
            className={
              isDiscounted ? "sale-tag" : "no-sale-tag"
            }
          >
            {isDiscounted ? "تخفیف‌دار" : "بدون تخفیف"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;