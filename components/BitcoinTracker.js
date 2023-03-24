import React from "react";
import { useState, useEffect } from "react";
import { Heading, Pane, Spinner } from "evergreen-ui";
import Image from "next/image";

const BitcoinTracker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/btc");
      const data = await response.json();
      setData(data.data.BTC[0].quote.USD.price);
    }

    fetchData();
  }, []);

  if (!data) {
    return <Spinner />;
  }

  return (
    <div>
      <Pane display="flex" flexDirection="row" alignItems="center">
        <Image
          alt="Bitcoin"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
          width={75}
          height={75}
        />

        <Heading size={900} fontSize="64px" marginLeft={16}>
          ${data.toFixed(2)}
        </Heading>
      </Pane>
    </div>
  );
};

export default BitcoinTracker;
