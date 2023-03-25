import React from "react";
import Layout from "@/components/Layout";
import { Text, Heading } from "evergreen-ui";
import Image from "next/image";

const History = () => {
  const GoldChart =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Price_of_gold.webp/1200px-Price_of_gold.webp.png";
  const SPChart =
    "https://fred.stlouisfed.org/graph/fredgraph.png?width=880&height=440&id=SP500";
  return (
    <Layout>
      <Heading size={600}>Bretton Woods Conference, 1944</Heading>
      <Text size={400} style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}>
        The Bretton Woods Conference on July 1, 1944 reshaped the global
        financial system and positioned the dollar as the world&apos;s reserve
        currency.
      </Text>
      <Heading size={600}>Off the Gold Standard, 1971</Heading>
      <Text size={400} style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}>
        <a href="https://wtfhappenedin1971.com/">
          You can check out a website that highlights this
        </a>
      </Text>
      <Image src={GoldChart} className="infographic" width={500} height={500} />
      <Heading size={600}>Financial Crisis, 2008</Heading>
      <Text
        size={400}
        style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}
      ></Text>
      <Heading size={600}>COVID Pandemic, 2020</Heading>
      <Text
        size={400}
        style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}
      >
        {/* Money pumped into system, unprecedented gains, mention real value of money */}
      </Text>
      <Image src={SPChart} className="infographic" width={500} height={500} />
    </Layout>
  );
};

export default History;

// The Bretton Woods Conference in July 1, 1944 positioned the dollar as
// the worlds reserve. Prior to 1944 gold was the world reserve currency.
// Why did it switch? WWII was a significant event,\ that ultimately led to
// the United States rise in power and establishment as the world reserve
// currency. While european states were occupied by war, the US profitted
// off exports and loans. European states such as Britian and France owed
// the US large amounts of debt, and in doing so they transfered much of
// there gold reserves to cover their loss. Having the worlds largest gold
// reserve, the US was in the position to assert its dominance as a reserve
// currency. Today the dollar operates as many countries reserve currency.
