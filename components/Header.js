import React from "react";
import { Heading, Text } from "evergreen-ui";
import Image from "next/image";
import Link from "next/link";
//  assets
import Logo from "../assets/logo.png";

const Header = () => {
  const pages = ["bills", "bitcoin", "banking", "bad", "bretton", "balaji"];
  return (
    <div className="header">
      <Image src={Logo} className="logo" />
      <Heading
        size={900}
        marginTop={12}
        marginBottom={8}
        style={{ fontWeight: "500" }}
      >
        Where's my dollar
      </Heading>

      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        {pages.map((page) => {
          return (
            <Text size={400} padding="1rem">
              <Link href={`/${page}`}>{page}</Link>
            </Text>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
