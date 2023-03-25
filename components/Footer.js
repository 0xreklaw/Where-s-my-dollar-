import React from "react";
import { Text } from "evergreen-ui";

const Footer = () => {
  return (
    <>
      <ul style={{ listStyle: "none", marginTop: "64px" }}>
        <li>
          <Text size={400} style={{ color: "black", fontWeight: "bold" }}>
            <a href="https://twitter.com/wheresmydollar_">Twitter</a>
          </Text>
        </li>
      </ul>
    </>
  );
};

export default Footer;
