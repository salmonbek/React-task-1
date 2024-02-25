import "./Main.scss";

function Main() {
  return (
    <main className="main">
      {/* hero-section */}
      <section className="hero">
        <div className="container">
          <div className="site-hero">
            <div className="site-hero-left">
              <h1 className="site-hero-left__title">
                Work at the speed of thought
              </h1>
              <p className="site-hero-left__description">
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
              <div className="site-hero-left__links">
                <a className="site-hero-left__links__1" href="">
                  Get started
                </a>
                <div className="site-hero-left__links__flex">
                  <img src="../src/assets/images/play-hero.png" alt="play" />
                  <a className="site-hero-left__links__flex__link" href="#">
                    Watch the Video
                  </a>
                </div>
              </div>
            </div>
            <div className="site-hero-right">
              <img
                src="../src/assets/images/hero-right-img.png"
                alt="her-right-img"
                className="heroright-img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero-section */}

      {/* product-section */}
      <div className="container">
        <h1 className="product-title">
          Product was Built Specifically for You
        </h1>
      </div>
      <section id="product-sec" className="product">
        <div className="container">
          <div className="product-card">
            <div className="product-card__items">
              <img
                className="img-1"
                src="../src/assets/images/cursor-icon.png"
                alt="icon-cursor"
              />
              <h4 className="product-card__items__description1">
                First click tests
              </h4>
              <p className="product-card__items__description2">
                While most people enjoy casino gambling,
              </p>
            </div>
            <div className="product-card__items">
              <img
                className="img-2"
                src="../src/assets/images/design-icon.png"
                alt="icon-design"
              />
              <h4 className="product-card__items__description1">
                Design surveys
              </h4>
              <p className="product-card__items__description2">
                Sports betting, lottery and bingo playing for the fun
              </p>
            </div>
            <div className="product-card__items">
              <img
                className="img-3"
                src="../src/assets/images/heart-icon.png"
                alt="heart-icon"
              />
              <h4 className="product-card__items__description1">
                Preference tests
              </h4>
              <p className="product-card__items__description2">
                The Myspace page defines the individual.
              </p>
            </div>
            <div className="product-card__items">
              <img
                className="img-4"
                src="../src/assets/images/test-icon.png"
                alt="icon-test"
              />
              <h4 className="product-card__items__description1">
                Five second tests
              </h4>
              <p className="product-card__items__description2">
                Personal choices and the overall personality of the person.{" "}
              </p>
            </div>
          </div>
          <div>
            {" "}
            <button className="product-card__btn">SIGN UP NOW</button>
          </div>
        </div>
      </section>
      {/* product-section */}

      {/* content-cards */}
      <section id="customer-sec" className="card-content">
        <div className="container">
          <div className="card-content-top">
            <h1 className="card-content-top__h">Contents Strategies</h1>
            <p className="card-content-top__p">
              We focus on ergonomics and meeting you where you work. Its only a
              keystroke away.
            </p>
          </div>
          <div className="card-content-grid">
            <div className="card-content-grid__items">
              <img
                src="../src/assets/images/content-card1.png"
                alt="card-img1"
              />
              <div className="padd">
                <p className="card-content-grid__items__p1">
                  By <b> Wahid Ari</b> | 03 March 2019
                </p>
                <h1 className="card-content-grid__items__p2">
                  Increasing Prosperity With Positive Thinking
                </h1>
              </div>
            </div>
            <div className="card-content-grid__items">
              <img
                src="../src/assets/images/content-card-2.png"
                alt="card-img2"
              />
              <div className="padd">
                <p className="card-content-grid__items__p1">
                  By <b>Wahid Ari</b> | 03 March 2019
                </p>
                <h1 className="card-content-grid__items__p2">
                  Motivation Is The First Step To Success
                </h1>
              </div>
            </div>
            <div className="card-content-grid__items">
              <img
                src="../src/assets/images/content-card3.png"
                alt="card-img3"
              />
              <div className="padd">
                <p className="card-content-grid__items__p1">
                  By <b>Wahid Ari</b> | 03 March 2019
                </p>
                <h1 className="card-content-grid__items__p2">
                  Success Steps For Your Personal Or Business
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* content-cards */}

      {/* price card */}
      <section id="pricing-sec" className="price">
        <div className="container">
          <div className="price-top">
            <h3 className="price-top__h">Price Table</h3>
            <p className="price-top__p">We offer competitive price</p>
          </div>
          <div className="price-card">
            <div className="price-card-items">
              <p className="price-card-items__p1">Free</p>
              <p className="price-card-items__p2">Brief price description</p>
              <div className="price-card-items__flex">
                <p className="price-card-items__flex__zero">0</p>
                <div>
                  <p className="price-card-items__flex__price">$</p>
                  <p className="price-card-items__flex__description">
                    Per / month
                  </p>
                </div>
              </div>
              <p className="price-card-items__p3">Only 2 Operators</p>
              <p className="price-card-items__p4">Notifications</p>
              <p className="price-card-items__p5">Landing Pages</p>
              <button className="price-card-items__btn">Order Now</button>
            </div>
            <div className="price-card-items">
              <p className="price-card-items__p1">Standard</p>
              <p className="price-card-items__p2">Brief price description</p>
              <div className="price-card-items__flex">
                <p className="price-card-items__flex__zero">5</p>
                <div>
                  <p className="price-card-items__flex__price">$</p>
                  <p className="price-card-items__flex__description">
                    Per / month
                  </p>
                </div>
              </div>
              <p className="price-card-items__p3">5+ Operators</p>
              <p className="price-card-items__p4">Notifications</p>
              <p className="price-card-items__p5">Landing Pages</p>
              <button className="price-card-items__btn">Order Now</button>
            </div>
            <div className="price-card-items">
              <p className="price-card-items__p1">Premium</p>
              <p className="price-card-items__p2">Brief price description</p>
              <div className="price-card-items__flex">
                <p className="price-card-items__flex__zero">10</p>
                <div>
                  <p className="price-card-items__flex__price">$</p>
                  <p className="price-card-items__flex__description">
                    Per/month
                  </p>
                </div>
              </div>
              <p className="price-card-items__p3">10+ Operators</p>
              <p className="price-card-items__p4">Notifications</p>
              <p className="price-card-items__p5">Landing Pages</p>
              <button className="price-card-items__btn">Order Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* price card */}

      {/* client section */}
      <section id="resource-sec" className="client">
        <div className="container">
          <div className="client-top">
            <h1 className="client-top__title">What Clients Say</h1>
            <p className="client-top__paragraph">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="client-card">
            <div className="client-card-items">
              <img src="../src/assets/images/star-img.png" alt="" />
              <p className="client-card-items__p">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="client-card-items-flex">
                <div>
                  <img src="../src/assets/images/vahid-1.png" alt="img-man" />
                </div>
                <div>
                  <p className="client-card-items-flex__p1">Wahid Ari</p>
                  <p className="client-card-items-flex__p2">Designer</p>
                </div>
              </div>
            </div>
            <div className="client-card-items">
              <img src="../src/assets/images/star-img.png" alt="star-icon" />
              <p className="client-card-items__p">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="client-card-items-flex">
                <div>
                  <img src="../src/assets/images/vahid-2.png" alt="img-man" />
                </div>
                <div>
                  <p className="client-card-items-flex__p1">Wahid Ari</p>
                  <p className="client-card-items-flex__p2">Designer</p>
                </div>
              </div>
            </div>
            <div className="client-card-items">
              <img src="../src/assets/images/star-img.png" alt="star-icon" />
              <p className="client-card-items__p">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="client-card-items-flex">
                <div>
                  <img src="../src/assets/images/vahid-3.png" alt="img-man" />
                </div>
                <div>
                  <p className="client-card-items-flex__p1">Wahid Ari</p>
                  <p className="client-card-items-flex__p2">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* client section */}
    </main>
  );
}

export default Main;
