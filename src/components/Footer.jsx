function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">
            ShopVerse
          </h2>

          <p>
            انتخابی متفاوت برای استایلی متفاوت.
          </p>
        </div>

        <div className="footer-column">
          <h3>دسترسی سریع</h3>

          <a href="#home">خانه</a>
          <a href="#products">محصولات</a>
          <a href="#about">درباره ما</a>
          <a href="#contact">تماس با ما</a>
        </div>

        <div className="footer-column">
          <h3>خدمات مشتریان</h3>

          <a href="#contact">پشتیبانی</a>
          <a href="#contact">راهنمای خرید</a>
          <a href="#contact">سؤالات متداول</a>
          <a href="#contact">قوانین فروشگاه</a>
        </div>

        <div className="footer-newsletter">
          <h3>عضویت در خبرنامه</h3>

          <p>
            از جدیدترین محصولات و تخفیف‌ها باخبر شو.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("عضویت آزمایشی با موفقیت انجام شد!");
            }}
          >
            <input
              type="email"
              placeholder="ایمیل خود را وارد کن"
              aria-label="ایمیل"
              required
            />

            <button type="submit">
              عضویت
            </button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2027 ShopVerse. تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

export default Footer;