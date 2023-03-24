import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Text } from "evergreen-ui";
import Title from "@/components/Title";
//  assets
import BitcoinOutpreformance from "../assets/bitcoin/bitcoin outpreformance.png";

const Bitcoin = () => {
  return (
    <Layout>
      <Title title={"Bitcoin out preforms traditional assets"} />
      <Image src={BitcoinOutpreformance} className="infographic" />
    </Layout>
  );
};

export default Bitcoin;
