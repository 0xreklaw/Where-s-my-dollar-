import React from "react";
import Layout from "@/components/Layout";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Text } from "evergreen-ui";
import Title from "@/components/Title";

const Bad = () => {
  return (
    <Layout>
      <Title
        title={
          "US begins to lose its position as a reserve currency to the Yuan"
        }
      />
      <TwitterTweetEmbed
        key={"1638349879171792896"}
        tweetId={"1638349879171792896"}
      />
    </Layout>
  );
};

export default Bad;
