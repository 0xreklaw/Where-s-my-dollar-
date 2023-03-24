import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Text } from "evergreen-ui";
import Title from "@/components/Title";
//  assets
import BitcoinOutpreformance from "../public/assets/bitcoin/bitcoin outpreformance.png";

const Bitcoin = () => {
  const BitcoinReturnsUrl = "https://www.etftrends.com/wp-content/uploads/2021/11/Bitcoin-Vastly-Outperformed-Gold-and-the-SP-500-The-Past-Decade-1.png"
  return (
    <Layout>
      <Title title={"Bitcoin out preforms traditional assets"} />
      <Image src={BitcoinReturnsUrl} className="infographic" width={500} height={500} />
    </Layout>
  );
};

export default Bitcoin;
