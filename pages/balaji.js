import React, { useEffect, useState } from "react";
import { Heading, Text, Pane, Link } from "evergreen-ui";
import { Spinner } from "evergreen-ui";
import Image from "next/image";
//  assets
import medlockTweet from "../assets/medlock.png";
import balajiTweet from "../assets/balaji.png";
//  components
import Layout from "@/components/Layout";
import BitcoinTracker from "@/components/BitcoinTracker";

const balaji = () => {
  let today = new Date();
  let dueDate = new Date(2023, 5, 17);
  let dayMilliseconds = 1000 * 60 * 60 * 24;
  let remainingDays = Math.ceil(
    (dueDate.getTime() - today.getTime()) / dayMilliseconds
  );

  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/btc");
      const data = await response.json();
      setPrice(data.data.BTC[0].quote.USD.price);
    }

    fetchData();
  }, []);

  if (!price) {
    return <Spinner />;
  }

  let remainingPrice = 1000000 - price.toFixed(0);

  return (
    <Layout>
      <Text size={400} style={{ textAlign: "center", marginBottom: "1rem" }}>
        Balaji Srinivasan is the former CTO of Coinbase. He has a track record
        for predicting industry trends, events, and catastrophe such as the rise
        of genomic sequencing, blockchain, COVID, the Network State, and now the
        rise of Bitcoin within the next 90 days (currently March of 2023). Given
        the recent events, Balaji bet James Medlock that the price of Bitcoin
        would reach $1 million by June 17, 2023. Many people believe Balaji is
        insane for making such a statement, although people thought Michael
        Burry was crazy when he predicted the 2008 financial crisis.
      </Text>
      <Heading size={800} marginTop={24} style={{ fontWeight: "500" }}>
        Stats
      </Heading>
      <Text size={600}>{remainingDays} days remaining</Text>
      <Text size={600}>${remainingPrice.toLocaleString()} to go</Text>

      <Pane display="flex" flexDirection="column" className="pane">
        <Heading size={600} marginTop={52} marginBottom={8}>
          March 16, 2023
        </Heading>
        <Image
          src={medlockTweet}
          alt="Medlock's Tweet"
          className="infographic"
        />
      </Pane>
      <Pane display="flex" flexDirection="column" className="pane">
        <Heading size={600} marginBottom={8}>
          March 17, 2023
        </Heading>
        <Image src={balajiTweet} alt="Balaji's Tweet" className="infographic" />
      </Pane>
      <Pane display="flex" flexDirection="column" className="pane">
        <Heading size={600} marginBottom={8}>
          June 17, 2023
        </Heading>
        <Text size={500}>
          {" "}
          If the price of Bitcoin reaches $1 million Balaji wins, otherwise
          Medlock wins
        </Text>
      </Pane>
    </Layout>
  );
};

export default balaji;
