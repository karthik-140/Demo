<script>
    export let year = new Date().getFullYear();
  </script>
  
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <p>About Svelte</p>
        <p>Who We Are</p>
        <p>Blog</p>
        <p>Work With Us</p>
        <p>Investor Relations</p>
        <p>Report Fraud</p>
        <p>Contact Us</p>
      </div>
      <div class="footer-links">
        <p>Svelteaverse</p>
        <p>Svelte</p>
        <p>Blinkit</p>
        <p>Feeding India</p>
        <p>Hyperpure</p>
        <p>Svelteland</p>
      </div>
      <div class="footer-links">
        <p>For Restaurants</p>
        <p>Partner With Us</p>
        <p>Apps For You</p>
      </div>
      <div class="footer-links">
        <p>For Enterprises</p>
        <p>Svelte For Enterprise</p>
      </div>
      <div class="footer-links">
        <p>Learn More</p>
        <p>Privacy</p>
        <p>Security</p>
        <p>Terms</p>
        <p>Sitemap</p>
      </div>
    </div>
    <div class="footer-social">
      <img src="" alt="Svelte Logo">
      <div class="social-icons">
        <img src="" alt="facebook">
        <img src="" alt="Linkedin">
      </div>
    </div>
    <div class="footer-legal">
      <p>
        By continuing past this page, you agree to our <a href="#">Terms of Service</a>,
        <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a>, and <a href="#">Content Policies</a>.
        All trademarks are properties of their respective owners. {{year}} &copy; Svelte&#8482; Ltd. All rights reserved.
      </p>
    </div>
  </footer>
  
  <style>
    footer {
      background-color: #f8f8f8;
      padding: 20px 0;
      text-align: center;
      font-size: 14px;
      color: #777;
    }
  
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      margin-bottom: 20px;
    }
  
    .footer-links {
      flex: 0 0 180px;
    }
  

    .footer-social {
      margin-bottom: 20px;
    }
  
    .footer-social img {
      width: 100px;
      height: auto;
      margin-bottom: 10px;
    }
  
    .social-icons img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  
    .footer-legal {
      font-size: 12px;
    }
  
    .footer-legal a {
      color: #777;
      text-decoration: none;
    }
  
    .footer-legal a:hover {
      color: #333;
    }
  </style>
  