import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer black darken-3">
      <div className="container">
        <div className="row">

          <div className="flex text-xs-center col l1 m2 s12">
            {/* <img src="../img/me_small.png" alt="Y.X." /> */}
            <p className="center">Y.X.</p>
          </div>

          <div className="col l5 offset-l1 m5 s12 hide-on-small-only">
            <h5>Who is Y.X.?</h5>
            <p>Y.X. is a software developer. She loves traveling, dancing, drawing, and playing instruments, and values a balanced, creative lifestyle.</p>
          </div>

          <div className="col l4 offset-l1 m5 s12">
            {/* <h5 className="white-text">Connect</h5> */}
            <div className="text-xs-center mx my social-icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ahri0126"
                className="btn-floating btn-small transparent"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UClv5NmxBvWIjid8crocDvZQ"
                className="btn-floating btn-small transparent"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container copyright center-align">
          Copyright &copy; 2025 Y.X.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
