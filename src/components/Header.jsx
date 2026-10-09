function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        ShopVerse
      </a>

      <nav className="navigation">
        <a href="#home">خانه</a>
        <a href="#products">محصولات</a>
        <a href="#about">درباره ما</a>
        <a href="#contact">تماس با ما</a>
      </nav>

      <a href="#products" className="header-button">
        خرید کنید
      </a>
    </header>
  );
}

export default Header;