import React from "react";
import { Heading, Text } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
//  assets
import Logo from "../public/assets/logo2.png";

const Header = () => {
  const pages = ["inflation", "history", "banks"];
  return (
    <div className="header">
      <Link href="/">
        <Image src={Logo} className="logo" />
      </Link>
      <Heading
        size={900}
        marginTop={12}
        marginBottom={8}
        style={{ fontWeight: "600", fontFamily: "times" }}
      >
        Where&apos;s my dollar
      </Heading>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {pages.map((page) => {
          return (
            <Text size={400} padding="1rem" key={page}>
              <Link href={`/${page}`}>{page}</Link>
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
