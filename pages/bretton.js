import React from "react";
import Layout from "@/components/Layout";
import { Text } from "evergreen-ui";

const Bretton = () => {
  return (
    <Layout>
      <Text size={400} style={{ textAlign: "center", marginBottom: "1rem" }}>
        The Bretton Woods Conference in July 1, 1944 positioned the dollar as
        the worlds reserve. Prior to 1944 gold was the world reserve currency.
        Why did it switch? WWII was a significant event, that ultimately led to
        the United States rise in power and establishment as the world
        superpower. While european states were occupied by war, the US profitted
        of exports and loans for military equipment and support. European states
        such as Britian and France owed the US large amounts of debt, and in
        doing so they transfered much of there gold reserves to cover their
        spreads. Having the worlds largest gold reserve, the US was in the
        position to assert its dominance as a reserve currency. Today the dollar
        operates as many countries reserve currency.
      </Text>
    </Layout>
  );
};

export default Bretton;
