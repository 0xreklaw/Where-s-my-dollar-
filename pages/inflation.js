import React from "react";
import Layout from "@/components/Layout";
import { Text, Heading } from "evergreen-ui";
import Image from "next/image";

const Inflation = () => {
  const PurchasingPower =
    "https://www.visualcapitalist.com/wp-content/uploads/2021/03/Purchasing-Power-of-the-U.S.-Dollar.jpg";
  return (
    <Layout>
      <Text size={400}>
        Inflation is the silent killer, it is the reason why currencies fail.
        Since 2000, the dollar has{" "}
        <a href="https://www.in2013dollars.com/us/inflation/2000?amount=1#:~:text=Value%20of%20%241%20from%202000%20to%202023&text=This%20means%20that%20today's%20prices,rate%20in%202000%20was%203.36%25.">
          lost 43%
        </a>{" "}
        of its value
      </Text>
      <Heading size={600} marginBottom={12} marginTop={24}>
      $1 in 2000 = $1.75 in 2023
      </Heading>
      <Image
        src={PurchasingPower}
        className="infographic"
        width={500}
        height={500}
      />
    </Layout>
  );
};

export default Inflation;
