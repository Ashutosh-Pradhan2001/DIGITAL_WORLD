import React from "react";
import i1 from "../assets/images/service-icon-1.svg";
import i2 from "../assets/images/service-icon-2.svg";
import i3 from "../assets/images/service-icon-3.svg";
import i4 from "../assets/images/service-icon-4.svg";
import v1 from "../assets/images/InShot_1.mp4";
import v2 from "../assets/images/InShot_2.mp4";
import { Link } from "react-router-dom";
import Lenovo1 from "./Lenovo1";
import Lenovo2 from "./Lenovo2";
import Lenovo3 from "./Lenovo3";
import Lenovo4 from "./Lenovo4";
import HP1 from "./HP1";
import HP2 from "./HP2";
import HP3 from "./HP3";
import HP4 from "./HP4";
import Acer1 from "./Acer1";
import Acer2 from "./Acer2";
import Acer3 from "./Acer3";
import Acer4 from "./Acer4";
import ASUS1 from "./ASUS1";
import ASUS2 from "./ASUS2";
import ASUS3 from "./ASUS3";
import ASUS4 from "./ASUS4";

export const Article = () => {
  return (
    <div className="bgcolor">
      <main>
        <article>
          <section
            class="hero"
            id="home"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/hand-using-gadgets-laptop-top-view-blank-screen-with-copyspace-minimalistic-style-technologies-modern-marketing-negative-space-ad-flyer-yellow-color-background-stylish-trendy_155003-39472.jpg?size=626&ext=jpg&uid=R70649956')",
            }}
          >
            <div class="container">
              <div class="hero-content">
                <div class="retail" aria-hidden="true">
                  R
                </div>
                <p class="hero-subtitle"> Advance Your Life</p>

                <h2 class="h1 hero-title">Unrivalled Laptop HUB</h2>

                <button class="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </section>

          <section class="service">
            <div class="container">
              <ul class="service-list">
                <li class="service-item">
                  <div class="service-item-icon">
                    <img src={i1} alt="Service icon" />
                  </div>

                  <div class="service-content">
                    <p class="service-item-title">Free Shipping</p>

                    <p class="service-item-text">On All Order Over Rs.700</p>
                  </div>
                </li>

                <li class="service-item">
                  <div class="service-item-icon">
                    <img src={i2} alt="Service icon" />
                  </div>

                  <div class="service-content">
                    <p class="service-item-title">Easy Returns</p>

                    <p class="service-item-text">30 Day Returns Policy</p>
                  </div>
                </li>

                <li class="service-item">
                  <div class="service-item-icon">
                    <img src={i3} alt="Service icon" />
                  </div>

                  <div class="service-content">
                    <p class="service-item-title">Secure Payment</p>

                    <p class="service-item-text">100% Secure Gaurantee</p>
                  </div>
                </li>

                <li class="service-item">
                  <div class="service-item-icon">
                    <img src={i4} alt="Service icon" />
                  </div>

                  <div class="service-content">
                    <p class="service-item-title">Special Support</p>

                    <p class="service-item-text">24/7 Dedicated Support</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="section category">
            <div class="container">
              <ul class="category-list">
                <li class="category-item">
                  <figure class="category-banner">
                    <video
                      autoPlay
                      loop="true"
                      muted
                      src={v1}
                      alt="Active & outdoor"
                      loading="lazy"
                      width="520"
                      height="300"
                      class="w-100"
                    />
                  </figure>

                  <a href="#" class="btn btn-secondary">
                    GAMING SEGMENTS
                  </a>
                </li>

                <li class="category-item">
                  <figure class="category-banner">
                    <video
                      autoPlay
                      loop
                      muted
                      src={v2}
                      alt="Active & outdoor"
                      loading="lazy"
                      width="510"
                      height="600"
                      class="w-100"
                    />
                  </figure>

                  <a href="#" class="btn btn-secondary">
                    ULTRABOOKS SEGMENTS
                  </a>
                </li>

                {/* <h2 class="h2 section-title"> All Laptop Products</h2> */}
              </ul>
            </div>
          </section>

          <section class="section product">
            <h2 class="h2 section-title0"> All Laptop Products</h2>
            <div class="container">
              <ul class="filter-list">
                <li>
                  <button class="filter-btn  active">Best Seller</button>
                </li>

                <li>
                  <button class="filter-btn">New Innovation</button>
                </li>

                <li>
                  <button class="filter-btn">Trending</button>
                </li>

                <li>
                  <button class="filter-btn">Latest laptops</button>
                </li>
              </ul>

              {/* Lenovo1 */}
              <h2
                class="h2 section-title"
                style={{ textDecoration: "underline" }}
              >
                LENOVO LAPTOPS
              </h2>

              <ul class="product-list">
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <Lenovo1 />

                      <div class="card-badge red"> -25%</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="/checkout/lenovo1">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">
                          Lenovo IdeaPad 3 11th Gen Intel Core i3 35.56cm (14
                          inches) FHD Thin & Light Laptop (8 GB/256GB
                          SDD/Windows 11/MS Office 2021/2Yr Warranty/Platinum
                          Grey/1.5Kg), 81X700CWIN
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="36,900">&#8377;36,900</data>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Lenovo2 */}
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Lenovo2 />
                      </a>

                      <div class="card-badge green"> New</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <Link to="checkout/lenovo2">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Lenovo ThinkPad E14 Intel Core i5 11th Gen 14-inch
                          (35.56cm) FHD IPS Antiglare Thin and Light Laptop
                          (16GB RAM/512GB SSD/Windows 11 Home/Microsoft Office
                          H&S 2021/FPR/Black/1.59 kg), 20TAS13N00
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="73,980">&#8377;73,980</data>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Lenovo3 */}
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Lenovo3 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <Link to="checkout/lenovo3">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Lenovo V15-ADA AMD Ryzen 3 3250U 15.6 inches HD
                          Business Laptop (4GB/1TB/Windows 10/Iron Grey),
                          82C700H3IH, 1.85kg
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="34,590">&#8377;34,590</data>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Lenovo4 */}
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Lenovo4 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <Link to="checkout/lenovo4">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Lenovo Legion 5 AMD Ryzen 5 4600H 15.6 inch (39.62
                          cms) Full HD Gaming Laptop (8GB/1TB HDD + 256GB
                          SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB
                          GDDR6/Phantom Black/2.3Kg), 82B500BHIN
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="60,990">&#8377;60,990</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* HP1 */}
              <h2
                class="h2 section-title"
                style={{ textDecoration: "underline" }}
              >
                HP LAPTOPS
              </h2>
              <ul class="product-list">
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <HP1 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <Link to="checkout/HP1">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          HP 15s 11th Gen Intel Core i3 15.6 inches Laptop (8GB
                          RAM/512GB SSD , HD,Anti-Glare Display/UHD
                          Graphics/Windows 11 Home/Alexa-Built in/MS
                          Office/Natural Silver/1.75 Kg,-15s-dy3501TU)
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="41,990">&#8377;41,990</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <HP2 />
                      </a>

                      <div class="card-badge red"> -25%</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/HP2">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          HP Pavilion 15 11th Gen Intel Core i5-8GB RAM/512GB
                          SSD 15.6 inch(39.6 cm)Laptop, FHD Anti-Glare Display/
                          Intel Iris Xe Graphics/Backlit KB/B&O Audio/Windows
                          11/ 1.75kg, 15-eg1000TU
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="61,250">&#8377;61,250</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <HP3 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/HP3">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          HP 14(2021) 5th Gen AMD Ryzen 3 5300U 14 inches FHD
                          Gaming Laptop with Alexa Built-in (8GB/512GB
                          SSD/Windows 10/MS Office), Natural Silver, 1.46Kg,
                          14s-fq1029AU
                        </a>
                      </h3>
                      <div class="card-price">
                        <data value="41,700">&#8377;41,700</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <HP4 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <Link to="checkout/HP4">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          HP Pavilion Gaming Latest AMD Ryzen 5 5600H Processor
                          15.6 inch(39.6 cm) FHD Gaming Laptop (8GB/512GB
                          SSD/Win 11 Home/NVIDIA GeForce GTX 1650 4GB
                          Graphics/B&O/Backlit KB/MSO/1.98 Kg), 15-ec2150AX
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="58,990">&#8377;58,990</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <h2
                class="h2 section-title"
                style={{ textDecoration: "underline" }}
              >
                ACER LAPTOPS
              </h2>
              <ul class="product-list">
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Acer1 />
                      </a>

                      <div class="card-badge green"> New</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/Acer1">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Acer Aspire 3 Intel 11th Generation Core i3 Laptop
                          15.6-inch (39.6 cms) Full HD (1920x1080) Anti-Glare
                          Display - (8 GB/512 GB SSD/Windows 11 Home/MS
                          Office/1.7 Kg/Silver) A315-58
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="41,800">&#8377;41,800</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Acer2 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/Acer2">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Acer Aspire 5 11th Gen Core i5 14-inch (35.56 cms)
                          Full HD IPS Thin & Light Laptop- (8 GB/256GB SSD/1TB
                          HDD/Windows 10 Home/Intel Iris Xe Graphics/Pure
                          Silver/1.55 Kg), A514-54
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="55,990">&#8377;55,990</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Acer3 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/Acer3">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6" (39.6
                          cms) Full HD Laptop - (8 GB/512 GB SSD/Windows 11
                          Home/AMD Radeon Graphics /1.9Kg/Silver) A315-23
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="35,990">&#8377;35,990</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <Acer4 />
                      </a>

                      <div class="card-badge red"> -25%</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/Acer4">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Acer Nitro 5 Gaming Laptop AMD Ryzen 5-5600H- (8GB/
                          1TB HDD/256GB SSD/NVIDIA GeForce RTX 3050/ Windows 10
                          Home/144Hz)| AN515-45
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="87,500">&#8377;87,500</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="Asus">
                <h2
                  class="h2 section-title"
                  style={{ textDecoration: "underline" }}
                >
                  ASUS LAPTOPS
                </h2>
              </div>
              <ul class="product-list">
                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <ASUS1 />
                      </a>

                      <div class="card-badge green"> New</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/ASUS1">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          ASUS VivoBook 14 (2021), Intel Core i3-1115G4 11th
                          Gen, 14-inch (35.56 cms) FHD Thin and Light Laptop
                          (8GB/256GB SSD/Office 2021/Windows 11/Integrated
                          Graphics/Silver/1.6 Kg), X415EA-EK342WS
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="34979">&#8377;34979</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <ASUS2 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/ASUS2">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          ASUS TUF Gaming F15 (2021) 15.6-inch (39.62 cms) FHD
                          144Hz, Intel Core i5-11400H 11th Gen, RTX 3050 Ti 4GB
                          Graphics, Gaming Laptop (16GB/512GB SSD/Windows
                          10/Gray/2.3 Kg), FX566HEB-HN249T
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="77990">&#8377;77990</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <ASUS3 />
                      </a>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/ASUS3">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6" (39.6
                          cms) Full HD Laptop - (4 GB/512 GB SSD/Windows 11
                          Home/AMD Radeon Graphics /1.9Kg/Silver) A315-23
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="33999">&#8377;33999</data>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="product-card">
                    <figure class="card-banner">
                      <a href="#">
                        <ASUS4 />
                      </a>

                      <div class="card-badge red"> -25%</div>

                      <div class="card-actions">
                        <button class="card-action-btn" aria-label="Quick view">
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>

                        <button class="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          ></ion-icon>
                          <Link to="checkout/ASUS4">
                            <p>Buy Now</p>
                          </Link>
                        </button>

                        <button
                          class="card-action-btn"
                          aria-label="Add to Whishlist"
                        >
                          <ion-icon name="heart-outline"></ion-icon>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <h3 class="h4 card-title">
                        <a href="#">
                          ASUS ROG Strix G15 AMD Ryzen 5 Hexa Core 5600H 15.6
                          inches Gaming Laptop (16 GB/512 GB SSD/Windows 10
                          Home/4 GB Graphics/NVIDIA GeForce RTX 3050 Ti/144 Hz)
                          G513QE-HN115T (Eclipse Gray, 2.1 KG)
                        </a>
                      </h3>

                      <div class="card-price">
                        <data value="96890">&#8377;96890</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <button class="btn btn-outline">
                <a href="" target="_blank">
                  View all products
                </a>
              </button>
            </div>
          </section>

          <section class="section newsletter">
            <div class="container">
              <div
                class="newsletter-card"
                style={{
                  backgroundImage: "url('./assets/images/newsletter-bg.png')",
                }}
              >
                <h2 class="card-title">Subscribe Newsletter</h2>

                <p class="card-text">
                  Enter your email below to be the first to know about new
                  collections and product launches.
                </p>

                <form action="" class="card-form">
                  <div class="input-wrapper">
                    <ion-icon name="mail-outline"></ion-icon>

                    <input
                      type="email"
                      name="emal"
                      placeholder="Enter your email"
                      required
                      class="input-field"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary w-100">
                    <span>Subscribe</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
      ;
    </div>
  );
};
