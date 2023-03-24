import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Text } from "evergreen-ui";
//  assets
import MonthlyInflationChanges from "../assets/inflation charts/monthly-inflation-change.png";
import PurchasingPower from "../assets/inflation charts/purchasing power.jpeg";

const bills = () => {
  return (
    <Layout>
      <Text size={400} style={{ textAlign: "center", marginBottom: "1rem"}}>
        Inflation is the silent killer and it is a reason why currencies fail.
        The US dollar is the worlds reserve currency, it is also lost 43% of its
        worth since to beginning of this century. If the dollar collapses, the
        world might as just well follow. Our goal is to educate the public about
        inflation and mismanagement of the US economy and financial systems.
      </Text>
      <Text size={600}>The decreasing value of the dollar since 1913</Text>
      <Image src={PurchasingPower} className="infographic" />
      <Image src={MonthlyInflationChanges} className="infographic" />
    </Layout>
  );
};

export default bills;
