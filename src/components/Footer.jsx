import React from "react";

function Footer() {
  let date = new Date();
  return (
    <footer>
      <p>copyright©{date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
