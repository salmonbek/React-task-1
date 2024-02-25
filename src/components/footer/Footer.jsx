import "./Footer.scss";

function Footer() {
  return (
    <div id="footer-sec" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-grid-left">
            <p className="footer-grid-left__p">
              Join 100 Compannies who boost their business with Product
            </p>
            <button className="footer-grid-left__btn">Get This</button>
          </div>
          <div className="footer-grid-right">
            <img src="../src/assets/images/footer-right-img.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
