import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Heading, Text } from "evergreen-ui";
import Title from "@/components/Title";
//  assets
import MonthlyInflationChanges from "../public/assets/inflation charts/monthly-inflation-change.png";
import PurchasingPower from "../public/assets/inflation charts/purchasing power.jpeg";

const Bills = () => {
  const PurchasingPowerUrl = "https://www.visualcapitalist.com/wp-content/uploads/2021/03/Purchasing-Power-of-the-U.S.-Dollar-Over-Time.jpg"
  return (
    <Layout>
      <Text size={400} style={{ textAlign: "center", marginBottom: "1rem" }}>
        Inflation is the silent killer and it is a reason why currencies fail.
        The US dollar is the worlds reserve currency. It has also lost 43% of its
        worth since to beginning of this century. If the dollar collapses, the
        world might as well. Our goal is to educate the public about
        inflation and the mismanagement of the US economic/financial systems.
      </Text>
      <Title title={"The decreasing value of the dollar since 1913"} />
      <Image src={PurchasingPowerUrl} className="infographic" width={500} height={500} />

      <Image src={MonthlyInflationChanges} className="infographic" />
    </Layout>
  );
};

export default Bills;
