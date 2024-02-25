import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="nav">
          <div>
            <a className="logo-flex" href="">
              <img src="../src/assets/images/logo.png" alt="" />
              <p className="logo-flex-item">Product</p>
            </a>
          </div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a className="nav-list-item__link" href="#product-sec">
                Product
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-item__link" href="#customer-sec">
                Customers
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-item__link" href="#pricing-sec">
                Pricing
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-list-item__link" href="#resource-sec">
                Resourses
              </a>
            </li>
            <button className="nav-btn-1">Sign In</button>
            <button className="nav-btn-2">Sign Up</button>
            <button className="mode-btn">
              <img src="../src/assets/images/dark.svg" alt="dark-icon" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
