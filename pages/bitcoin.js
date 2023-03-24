import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Text } from "evergreen-ui";
//  assets
import BitcoinOutpreformance from "../assets/bitcoin/bitcoin outpreformance.png";

const Bitcoin = () => {
  return (
    <Layout>
      <Text size={600}>Bitcoin out preforms traditional assets</Text>
      <Image src={BitcoinOutpreformance} className="infographic" />
    </Layout>
  );
};

export default Bitcoin;
