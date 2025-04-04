function Header() {
  return (
    <>
      <header>
        <div class="logo_container">
          <a href="#">
            <img
              class="myntra_home"
              src="../images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav class="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div class="search_bar">
          <span class="material-symbols-outlined search_icon">search</span>
          <input
            class="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div class="action_bar">
          <div class="action_container">
            <span class="material-symbols-outlined action_icon">person</span>
            <span class="action_name">Profile</span>
          </div>

          <div class="action_container">
            <span class="material-symbols-outlined action_icon">favorite</span>
            <span class="action_name">Wishlist</span>
          </div>

          <div class="action_container">
            <span class="material-symbols-outlined action_icon">
              shopping_bag
            </span>
            <span class="action_name">Bag</span>
            <span class="bag-item-count">0</span>
          </div>
        </div>
      </header>
     
    </>
  );
}

export default Header;
