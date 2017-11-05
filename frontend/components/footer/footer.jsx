import React from 'react';

const PageFooter = () => {
  return (
    <div className="footer-main">
      <div className="footer-top"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <nav>
            <a href="https://www.facebook.com/Eventbrite">Facebook</a>
            <a href="https://twitter.com/eventbrite">Twitter</a>
            <a href="https://www.linkedin.com/company/eventbrite/">LinkedIn</a>
            <a href="https://www.instagram.com/eventbrite/">Instagram</a>
          </nav>
        </div>
        <div className="footer-bottom-logo">
          <div>
            E
          </div>
        </div>
        <div className="footer-bottom-name">
          <footer>&copy; 2017 Happeningbrite</footer>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
