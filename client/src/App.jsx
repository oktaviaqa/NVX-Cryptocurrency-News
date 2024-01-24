import { useState } from "react";

function App() {
  return (
    <>
      <div>
        {" "}
        <section className="app">
          <header>
            <nav className="header">
              <a href="#">
                <img
                  src="images/logo-black.png"
                  alt=""
                  className="header-logo"
                />
              </a>
              <button className="header-menu-burger" onclick="showMenu()">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="header-menu" id="menu">
                <li className="header-menu-item">
                  <a href="#" className="header-menu-item-link">
                    NEWS
                  </a>
                </li>
                <li className="header-menu-item">
                  <a href="#" className="header-menu-item-link">
                    GUIDES & ANALYTICS
                  </a>
                </li>
                <li className="header-menu-item">
                  <a href="#" className="header-menu-item-link">
                    EVENTS
                  </a>
                </li>
                <li className="header-menu-item">
                  <a href="#" className="header-menu-item-link">
                    EXPLAINED
                  </a>
                </li>
                <li className="header-menu-item">
                  <a href="#" className="header-menu-item-link">
                    ICON CLAENDER
                  </a>
                </li>
              </ul>
              <section className="clear-fix"></section>
            </nav>
          </header>

          <section className="content">
            <section className="intro-h-600px">
              <section className="row-intro intro-h-2-3 mb-10x">
                <section className="intro-2-3-col intro-h-100 position-relative h-md-300px">
                  <section className="img-bg bg-1 intro-h-100"></section>
                  <section className="intro-item-caption">
                    <h3 className="caption-title">
                      <span>
                        {" "}
                        Experts Say Bitcoin Could Hit $100,000 In 2022{" "}
                      </span>
                    </h3>
                    <ul className="caption-info-bar">
                      <li>
                        by<b className="text-yellow">Olivia Capzallo</b> April
                        18, 2022
                      </li>
                      <li>
                        <i className="fa fa-bolt text-yellow"></i>31,627
                      </li>
                      <li>
                        <i className="fa fa-comments text-yellow"></i>183
                      </li>
                    </ul>
                  </section>
                </section>

                <section className="intro-1-3-col intro-h-100">
                  <section className="intro-1-3-item intro-h-50 position-relative h-md-300px">
                    <section className="img-bg bg-2 intro-h-100"></section>
                    <section className="intro-item-caption">
                      <h3 className="caption-title">
                        <b> Elon Musk gets Twitter for $44 billion </b>
                      </h3>
                      <ul className="caption-info-bar">
                        <li>April 13, 2022</li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>28,464
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>84
                        </li>
                      </ul>
                    </section>
                  </section>

                  <section className="intro-1-3-item intro-h-50 position-relative h-md-300px">
                    <section className="img-bg bg-3 intro-h-100"></section>
                    <section className="intro-item-caption">
                      <h3 className="caption-title">
                        <b> Russia Might Take Bitcoin as Payment </b>
                      </h3>
                      <ul className="caption-info-bar">
                        <li>April 11, 2022</li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>24,621
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>63
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
                <section className="clear-fix"></section>
              </section>

              <section className="row-intro intro-h-1-3">
                <section className="intro-1-3-col-item intro-h-100 position-relative h-md-300px">
                  <section className="img-bg bg-4 intro-h-100"></section>
                  <section className="intro-item-caption">
                    <h3 className="caption-title">
                      <b> Prime Ape Planet NFT Price Analysis </b>
                    </h3>
                    <ul className="caption-info-bar">
                      <li>April 07, 2022</li>
                      <li>
                        <i className="fa fa-bolt text-yellow"></i>25,326
                      </li>
                      <li>
                        <i className="fa fa-comments text-yellow"></i>51
                      </li>
                    </ul>
                  </section>
                </section>

                <section className="intro-1-3-col-item intro-h-100 position-relative h-md-300px">
                  <section className="img-bg bg-5 intro-h-100"></section>
                  <section className="intro-item-caption">
                    <h3 className="caption-title">
                      <b> The Future of Metaverse in 2030 </b>
                    </h3>
                    <ul className="caption-info-bar">
                      <li>April 23, 2022</li>
                      <li>
                        <i className="fa fa-bolt text-yellow"></i>21,841
                      </li>
                      <li>
                        <i className="fa fa-comments text-yellow"></i>48
                      </li>
                    </ul>
                  </section>
                </section>

                <section className="intro-1-3-col-item intro-h-100 position-relative h-md-300px">
                  <section className="img-bg bg-6 intro-h-100"></section>
                  <section className="intro-item-caption">
                    <h3 className="caption-title">
                      <b> Biden's Crypto Executive Order </b>
                    </h3>
                    <ul className="caption-info-bar">
                      <li>April 17, 2022</li>
                      <li>
                        <i className="fa fa-bolt text-yellow"></i>23,316
                      </li>
                      <li>
                        <i className="fa fa-comments text-yellow"></i>87
                      </li>
                    </ul>
                  </section>
                </section>
                <section className="clear-fix"></section>
              </section>
            </section>

            <section className="container">
              <main className="main">
                <section className="main-news">
                  <h2 className="title">RECENT NEWS</h2>
                  <article>
                    <img
                      src="images/recent-news-bitcoin.jpg"
                      alt="Bitcoin"
                      className="main-news-img"
                    />
                    <h3 className="article-title">
                      <a href="#">
                        Bitcoin price crashes, other Cryptocurrencies in red
                      </a>
                    </h3>
                    <ul className="info-bar">
                      <li>
                        <span className="text-muted">by</span>
                        <a className="color-black">
                          <b>Olivia Capzallo</b>
                        </a>
                        <span> April 24, 2022</span>
                      </li>
                      <li>
                        <i className="fa fa-bolt text-yellow"></i>30,562
                      </li>
                      <li>
                        <i className="fa fa-comments text-yellow"></i>74
                      </li>
                    </ul>
                    <p>
                      Bitcoin's price fell below $40,000 after trading flat.
                      Other important cryptocurrencies, including Ethereum, fell
                      as the global crypto market gyrates in a volatile mode.
                    </p>
                  </article>
                </section>

                <section className="main-nft-news">
                  <h2 className="title">NFT NEWS</h2>
                  <section className="main-news-w-50">
                    <article>
                      <img
                        src="images/NFT-news-Grandpa-Apes.jpg"
                        alt="Grandpa Ape"
                        className="main-news-img"
                      />
                      <h3 className="article-title">
                        <a href="#"> NFT Bored Ape marketplace gets hacked </a>
                      </h3>
                      <ul className="info-bar">
                        <li>
                          <span className="text-muted">by</span>
                          <a className="color-black">
                            <b>Olivia Capzallo</b>
                          </a>
                          <span> April 26, 2022</span>
                        </li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>17,924
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>69
                        </li>
                      </ul>
                    </article>
                  </section>

                  <section className="main-news-w-50">
                    <article>
                      <img
                        src="images/NFT-news-PAP.png"
                        alt="Prime Ape Planet"
                        className="main-news-img"
                      />
                      <h3 className="article-title">
                        <a href="#">
                          Why is the Prime Ape Planet NFT so in demand?
                        </a>
                      </h3>
                      <ul className="info-bar">
                        <li>
                          <span className="text-muted">by</span>
                          <a className="color-black">
                            <b>Olivia Capzallo</b>
                          </a>
                          <span> April 28, 2022</span>
                        </li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>16,834
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>32
                        </li>
                      </ul>
                    </article>
                  </section>
                  <section className="clear-fix"></section>
                </section>
              </main>

              <aside className="sidebar">
                {/* <section className="sidebar-item">
                        <ul className="sidebar-list">
                            <li><b>1 BTC = $39,081</b></li>
                            <li><b>1 ETH = $2,867</b></li>
                            <li><b>1 BNB = $394.3</b></li>
                            <li><b>1 ADA = $0.874</b></li>
                            <li><b>1 XRP = $0.691</b></li>
                            <li><b>1 SOL = $87.63</b></li>
                        </ul>
                    </section> */}
                <section className="sidebar-item">
                  <h2 className="title">POPULAR POSTS</h2>
                  <section className="popular-post">
                    <img
                      src="images/bitcoin-popular-1.jpg"
                      alt=""
                      className="popular-post-img"
                    />
                    <section className="popular-post-title">
                      <h3>
                        <a href="#">
                          <b>Experts Say Bitcoin Could Hit $100,000 In 2022</b>
                        </a>
                      </h3>
                      <ul className="info-bar">
                        <li>
                          <span className="text-muted">by</span>
                          <a className="color-black">
                            <b>Olivia Capzallo</b>
                          </a>
                          <span> April 18, 2022</span>
                        </li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>31,627
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>183
                        </li>
                      </ul>
                    </section>
                    <section className="clear-fix"></section>
                  </section>
                  <section className="popular-post">
                    <img
                      src="images/bitcoin-popular-2.jpg"
                      alt=""
                      className="popular-post-img"
                    />
                    <section className="popular-post-title">
                      <h3>
                        <a href="#">
                          <b>
                            Bitcoin price crashes, other Cryptocurrencies in red
                          </b>
                        </a>
                      </h3>
                      <ul className="info-bar">
                        <li>
                          <span className="text-muted">by</span>
                          <a className="color-black">
                            <b>Olivia Capzallo</b>
                          </a>
                          <span> April 24, 2022</span>
                        </li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>30,562
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>74
                        </li>
                      </ul>
                    </section>
                    <section className="clear-fix"></section>
                  </section>
                  <section className="popular-post">
                    <img
                      src="images/Elon-musk-popular.jpg"
                      alt=""
                      className="popular-post-img"
                    />
                    <section className="popular-post-title">
                      <h3>
                        <a href="#">
                          <b>Elon Musk gets Twitter for $44 billion</b>
                        </a>
                      </h3>
                      <ul className="info-bar">
                        <li>
                          <span className="text-muted">by</span>
                          <a className="color-black">
                            <b>Olivia Capzallo</b>
                          </a>
                          <span> April 13, 2022</span>
                        </li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>28,464
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>84
                        </li>
                      </ul>
                    </section>
                    <section className="clear-fix"></section>
                  </section>
                  <section className="popular-post">
                    <img
                      src="images/Prime-Ape-Planet-popular.png"
                      alt=""
                      className="popular-post-img"
                    />
                    <section className="popular-post-title">
                      <h3>
                        <a href="#">
                          <b>Prime Ape Planet NFT Price Analysis</b>
                        </a>
                      </h3>
                      <ul className="info-bar">
                        <li>
                          <span className="text-muted">by</span>
                          <a className="color-black">
                            <b>Olivia Capzallo</b>
                          </a>
                          <span> April 07, 2022</span>
                        </li>
                        <li>
                          <i className="fa fa-bolt text-yellow"></i>25,326
                        </li>
                        <li>
                          <i className="fa fa-comments text-yellow"></i>51
                        </li>
                      </ul>
                    </section>
                    <section className="clear-fix"></section>
                  </section>
                </section>
                <section className="sidebar-item">
                  <h2 className="title">NEWSLETTER</h2>
                  <p>
                    Subscribe to our Newsletter and stay up to date on our
                    latest releases and promotions!
                  </p>
                  <form action="" className="subscribe-form">
                    <input
                      type="text"
                      className="subscribe-form-text"
                      placeholder="Your email"
                    />
                    <button>
                      <i className="fa fa-bitcoin"></i>
                    </button>
                    <section className="clear-fix"></section>
                  </form>
                </section>
              </aside>
              <section className="clear-fix"></section>
            </section>
          </section>
        </section>
        <footer className="footer">
          <section className="app">
            <section className="footer-row">
              <section className="footer-col">
                <img
                  src="images/logo-white.png"
                  alt=""
                  className="footer-logo"
                />
                <section className="clear-fix"></section>
                <p className="footer-p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  consectetur a repellendus Lorem ipsum dolor sit amet
                  consectetur.
                </p>
                <p className="footer-p footer-p-padding-20px">
                  Copyright ©2022 All rights reserved
                </p>
              </section>

              <section className="footer-col">
                <h3 className="footer-section-title">MOST POPULAR</h3>
                <section className="footer-section-link-item">
                  <a href="#">Experts Say Bitcoin Could Hit $100,000 In 2022</a>
                  <p>April 18, 2022</p>
                </section>
                <section className="footer-line"></section>
                <section className="footer-section-link-item">
                  <a href="#">
                    Bitcoin price crashes, other Cryptocurrencies in red
                  </a>
                  <p>April 24, 2022</p>
                </section>
              </section>

              <section className="footer-col">
                <h3 className="footer-section-title">MOST POPULAR</h3>
                <section className="footer-section-link-item">
                  <a href="#">Elon Musk gets Twitter for $44 billion</a>
                  <p>April 13, 2022</p>
                </section>
                <section className="footer-line"></section>
                <section className="footer-section-link-item">
                  <a href="#">Prime Ape Planet NFT Price Analysis</a>
                  <p>April 07, 2022</p>
                </section>
              </section>
              <section className="clear-fix"></section>
            </section>
            <section className="clear-fix"></section>
            <section className="footer-line"></section>

            <section className="footer-row">
              <ul className="footer-menu">
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Jobs advertising</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>

              <ul className="footer-social-network">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-bitcoin"></i>
                  </a>
                </li>
              </ul>
            </section>
          </section>
          <section className="clear-fix"></section>
        </footer>
      </div>
    </>
  );
}

export default App;
