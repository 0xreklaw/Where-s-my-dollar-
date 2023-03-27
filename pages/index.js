import React from "react";
import Image from "next/image";
import { Heading, Text } from "evergreen-ui";
//  assets
import Logo from "../static/images/Where's My Dollar Logo.png";
import Dollar from "../public/assets/dollar.png";
import Dollar75 from "../public/assets/dollar75.png";

const Index = () => {
  return (
    <div className="container">
      <Image src={Logo} className="logo" alt="logo" />
      <Text size={500} style={{ margin: "6rem 0 6rem 0", textAlign: "center" }}>
        Inflation is the silent killer.
        <br /> Since 2000, the dollar has lost 43% of its value.
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "75%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Heading size={700} fontFamily="times" marginBottom={16}>
            2000
          </Heading>
          <Image src={Dollar} className="dollar" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Heading size={700} fontFamily="times" marginBottom={16}>
            2023
          </Heading>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Dollar}
              className="dollar"
              style={{ marginBottom: "16px" }}
            />
            <Image src={Dollar75} className="dollar" />
          </div>
        </div>
      </div>

      <Text size={500} style={{ margin: "6rem 0 6rem 0", textAlign: "center" }}>
        Our financial system is collapsing before our eyes. <br /> It&apos;s
        important to understand how we got here.
      </Text>

      <Heading size={700} fontFamily="times" marginBottom={16}>
        1944 Bretton Wood Conference
      </Heading>

      <Heading size={700} fontFamily="times" marginBottom={16}>
        1971 Off the Gold Standard
      </Heading>

      <Heading size={700} fontFamily="times" marginBottom={16}>
        2008 Financial Crisis
      </Heading>

      <Heading size={700} fontFamily="times" marginBottom={16}>
        2020 Pandemic
      </Heading>

      <Heading size={700} fontFamily="times" marginBottom={16}>
        Now
      </Heading>
      <Text size={500} style={{ margin: "6rem 0 3rem 0", textAlign: "center" }}>
        In the past few months several banks have failed. <br /> You can follow
        this growing list{" "}
        <a href="https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/">
          here
        </a>
      </Text>

      <Text size={500} style={{ margin: "3rem 0 6rem 0", textAlign: "center" }}>
        We are witnessing the collapse of our financial system, but a new system
        will arise. <br /> A system that is fairer, transparent, and one that
        depositors can trust.
      </Text>
    </div>
  );
};

export default Index;
