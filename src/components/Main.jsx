import { useState } from "react";
import { products } from "../data/product";
import ProductCard from "./ProductCard";

function Main() {
  const [gender, setGender] = useState("all");

  const [discountOnly, setDiscountOnly] = useState(false);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesGender =
      gender === "all" ||
      (gender === "male" && product.isMale) ||
      (gender === "female" && !product.isMale);

    const matchesDiscount =
      !discountOnly || product.isDiscounted;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    return (
      matchesGender &&
      matchesDiscount &&
      matchesSearch
    );
  });

  return (
    <main className="main">
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-label">
            COLLECTION 2027
          </span>

          <h1>استایل بهتر، انتخاب بهتر</h1>

          <p>
            جدیدترین محصولات را کشف کن و استایل منحصربه‌فرد
            خودت را بساز.
          </p>

          <a href="#products" className="shop-button">
            مشاهده محصولات
          </a>
        </div>
      </section>

      <section className="catalog" id="products">
        <aside className="filters">
          <h2>فیلتر محصولات</h2>

          <div className="filter-group">
            <label htmlFor="gender">
              دسته‌بندی جنسیت
            </label>

            <select
              id="gender"
              value={gender}
              onChange={(event) =>
                setGender(event.target.value)
              }
            >
              <option value="all">همه محصولات</option>
              <option value="male">مردانه</option>
              <option value="female">زنانه</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={discountOnly}
                onChange={(event) =>
                  setDiscountOnly(event.target.checked)
                }
              />

              فقط محصولات تخفیف‌دار
            </label>
          </div>

          <div className="filter-group">
            <label htmlFor="search">
              جست‌وجوی محصول
            </label>

            <input
              id="search"
              type="text"
              placeholder="نام محصول را بنویس..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <button
            className="reset-button"
            onClick={() => {
              setGender("all");
              setDiscountOnly(false);
              setSearch("");
            }}
          >
            پاک کردن فیلترها
          </button>
        </aside>

        <div className="products-section">
          <div className="products-heading">
            <div>
              <h2>محصولات فروشگاه</h2>

              <p>
                بهترین انتخاب‌ها برای استایل تو
              </p>
            </div>

            <span className="product-count">
              {filteredProducts.length} محصول
            </span>
          </div>

          {filteredProducts.length > 0 ? (
          <div className="products-grid">
  {filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
      isDiscounted={product.isDiscounted}
      isMale={product.isMale}
      image={product.image}
    />
  ))}
</div>
          ) : (
            <div className="empty-state">
              <span>🔎</span>

              <h3>محصولی پیدا نشد!</h3>

              <p>
                عبارت جست‌وجو یا فیلترهای انتخابی را تغییر بده.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>چرا ShopVerse؟</h2>

        <p>
          ما تلاش می‌کنیم تجربه‌ای ساده و لذت‌بخش از خرید
          آنلاین برای تو فراهم کنیم.
        </p>

        <div className="features">
          <div className="feature-card">
            <span>🚚</span>
            <h3>ارسال سریع</h3>
            <p>سفارش‌هایت را در سریع‌ترین زمان دریافت کن.</p>
          </div>

          <div className="feature-card">
            <span>⭐</span>
            <h3>کیفیت مناسب</h3>
            <p>محصولات متنوع را در یک مکان بررسی کن.</p>
          </div>

          <div className="feature-card">
            <span>💳</span>
            <h3>خرید آسان</h3>
            <p>محصول مورد علاقه‌ات را به‌راحتی پیدا کن.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;