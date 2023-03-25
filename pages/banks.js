import React from "react";
import Layout from "@/components/Layout";
import { Text, Heading } from "evergreen-ui";

const Banks = () => {
  const banks = ["Silicon Valley Bank", "Signature Bank"];

  return (
    <Layout>
      <Text size={400} style={{ textAlign: "center" }}>
        It is rare for a bank to fail, this year several have fallen. You can
        visit the{" "}
        <a href="https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/">
          FDIC website
        </a>{" "}
        to see for yourself
      </Text>

      <Heading size={600} marginBottom={12} marginTop={24}>
        Fallen banks:
      </Heading>
      <ul style={{ textAlign: "center" }}>
        {banks.map((bank) => {
          return (
            <li style={{ listStyle: "none" }} key={bank}>
              <Text size={400}>{bank}</Text>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Banks;
