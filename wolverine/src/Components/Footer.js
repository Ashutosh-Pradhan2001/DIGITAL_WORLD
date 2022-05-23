import React from "react";
import Wave from "react-wavify";
import paymentIcon from "../assets/images/payment-img.png";

export const Footer = () => {
  return (
    <div className="DHASKJD">
      <Wave
        fill="#00FFFF"
        paused={false}
        options={{
          height: 30,
          amplitude: 35,
          speed: 0.43,
          points: 3,
        }}
      />
      <div className="bgcolor">
        {" "}
        <footer class="footer">
          <div class="footer-top">
            <div class="container">
              <div class="footer-brand">
                <a href="#" class="logo">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1636/8779/files/logo_digital_3_250x.png?v=1490156229"
                    alt="Casmart logo"
                  />
                </a>

                <p class="footer-text">
                  Digital World is a online store where products are designed
                  according to market demand.Digital World provides best
                  hospitality to its customers with warranty certification and
                  offer in each and every product. In this world an customer
                  gets to explore new innovation everytime whenever he/she
                  visits the store. ~ENJOY SHOPPING SPREAD HAPPINESS~
                </p>

                <ul class="social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/Ashutosh-Pradhan-113067353686126/"
                      target="blank"
                      class="social-link"
                    >
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/ashutosh20012?t=1MMClJ6jgIHq5wdw8Hr4bw&s=08"
                      class="social-link"
                    >
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/" class="social-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="https://pin.it/6QWGfst" class="social-link">
                      <ion-icon name="logo-pinterest"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>

              <ul class="footer-list">
                <li>
                  <p class="footer-list-title">Information</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    About Company
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Payment Type
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Awards Winning
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    World Media Partner
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Become an Agent
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Refund Policy
                  </a>
                </li>
              </ul>

              <ul class="footer-list">
                <li>
                  <p class="footer-list-title">Category</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Intel Core i3 variants
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Intel Core i5 variants
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Intel Core i7 variants
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    AMD RYZEN 3 variants
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    AMD RYZEN 5 variants
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    AMD RYZEN 7 variants
                  </a>
                </li>
              </ul>

              <ul class="footer-list">
                <li>
                  <p class="footer-list-title">Help & Support</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Dealers & Agents
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    FAQ Information
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Return Policy
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Shipping & Delivery
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Order Tracking
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    List of Shops
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container">
              <p class="copyright">
                &copy; 2022 <a href="#">codewithashutosh</a>. All Rights
                Reserved
              </p>

              <ul class="footer-bottom-list">
                <li>
                  <a href="#" class="footer-bottom-link">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-bottom-link">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-bottom-link">
                    Sitemap
                  </a>
                </li>
              </ul>

              <div class="payment">
                <p class="payment-title">We Support</p>

                <img
                  src={paymentIcon}
                  alt="Online payment logos"
                  class="payment-img"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
