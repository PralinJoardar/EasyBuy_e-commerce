import React from "react";

function Footer() {
  return (
    <div>
      
      <div class="fixed-bottom">
        <footer
          class="text-center text-white"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div
            class="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright : &nbsp;
            <a class="text-dark">
              Easy Buy
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    </div>
  );
}

export default Footer;
