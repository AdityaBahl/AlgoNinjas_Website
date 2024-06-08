import React, { Component } from "react";
import img_mail from '../assets/img/em1.webp';
import '../assets/css/footer.css';
import logo from '../assets/img/Alg.svg';
const FooterComponent = () => {
  return (
    <div className="footer2">
      <div className="footer2-sub">
        <div>
          <div className="footer-img">
            <a href='/' ><img src={logo} alt="mls logo" /></a>
          </div>
          <div className="footer-share">
            <div className="scl">
              <a
                href="https://www.facebook.com/profile.php?id=61551997760834&mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f" style={{ alignItems: "center", justifyContent: "center", minWidth: "1em" }}></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://instagram.com/algo.ninjas?igshid=NGVhN2U2NjQ0Yg=="
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.linkedin.com/company/algo-ninjas/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://twitter.com/sat_act_ap?t=jv42tLOy1RdXU4hNZ5zOZA&s=08"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://youtube.com/@mittallearningstars8293"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="scl">
              <a href="https://wa.me/qr/VGZ2UFB2MP4FI1" target="_blank">
                <i className="fa-brands fa-whatsapp" style={{ alignItems: "center", justifyContent: "center", minWidth: "1em" }}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer2-sub-h">
          <div className="footer2-h">Company</div>
          <div >
            <a href="#">About</a>
          </div>
          <div >
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <div >
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer2-sub-h">
          <div className="footer2-h">Reach us</div>
          <div className="footer-mail">
            <img src={img_mail} alt="email" width="10%" className="MailImg" /> &nbsp;
            <a href="mailto:admission@mlsclasses.com">admission@mlsclasses.com</a>

          </div>
          <div className="footer-mail" >
            <img src={img_mail} alt="email" width="10%" className="MailImg" /> &nbsp;
            <a href="mailto:support@mlsclasses.com" >support@mlsclasses.com</a>
          </div>

        </div>


        <div className="footer2-sub-h">
          <div className="footer2-h">Parent Resources</div>
          <div >
            <a href="#">Initial Setup</a>
          </div>
          <div >
            <a href="#accord-home">FAQs</a>
          </div>
        </div>

        <div className="footer2-sub-h">
          <div className="footer2-h">Other Resources</div>
          <div >
            <a href="#">Blogs</a>
          </div>
          <div >
            <a href="#">Resources Center</a>
          </div>
          <div >
            <a href="#">Affiliates</a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div>Copyright 2023 By Algo Ninjas . All Rights</div>
      </div>
    </div>
  );
};
export default FooterComponent;
