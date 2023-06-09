import React, { useEffect } from "react";
import { Text, Heading } from "evergreen-ui";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <Heading
        size={900}
        marginTop={12}
        marginBottom={8}
        style={{ fontWeight: "600", textAlign: "center" }}
      >
        If your bank go insolvent, you may ask: &quot;Where&apos;s my dollar?&quot;
      </Heading>

      <Heading
        size={900}
        marginTop={48}
        marginBottom={8}
        style={{ fontWeight: "600", textAlign: "center" }}
      >
        That&apos;s a question worth explaining.
      </Heading>
      <Text
        size={500}
        marginTop={48}
        style={{ textAlign: "center", lineHeight: "150%" }}
      >
        Where&apos;s My Dollar is dedicated to educating people about the US
        financial system and how to safeguard their finances in uncertain times.
        Whether you&apos;re concerned about the safety of your bank, want to learn
        about the history of the US financial system, or want to hear the latest
        about FED announcements, our site provides comprehensive resources and
        tools to help protect your wealth. Join our community of
        financially-savvy individuals and start securing your financial future
        today.
      </Text>
    </Layout>
  );
};

export default Index;
