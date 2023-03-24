import React from "react";
import Layout from "@/components/Layout";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Text } from "evergreen-ui";

const bad = () => {
  return (
    <Layout>
      <Text size={600}>US begins to lose its position as a reserve currency</Text>
      <TwitterTweetEmbed
        key={"1638349879171792896"}
        tweetId={"1638349879171792896"}
      />
    </Layout>
  );
};

export default bad;
