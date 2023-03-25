import React from "react";
import { Text } from "evergreen-ui";

const Footer = () => {
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          marginTop: "64px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <li style={{ marginBottom: "6px" }}>
          <Text size={400}>
            <a
              href="https://twitter.com/wheresmydollar_"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Twitter
            </a>
          </Text>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <Text size={400}>
            <a
              href="https://wheresmydollar.beehiiv.com/subscribe"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Newsletter
            </a>
          </Text>
        </li>
      </ul>
    </>
  );
};

export default Footer;
