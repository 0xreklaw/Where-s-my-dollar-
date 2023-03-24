import axios from "axios";

export default async function handler(req, res) {
  try {
    const coinmarketcap = await axios.get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API,
        },
      }
    );
    res.status(200).json(coinmarketcap.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
