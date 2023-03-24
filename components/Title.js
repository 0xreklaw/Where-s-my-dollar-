import React from "react";
import { Heading } from "evergreen-ui";

const Title = ({ title }) => {
  return (
    <Heading size={600} style={{ fontFamily: "times", fontWeight: "600" }}>
      {title}
    </Heading>
  );
};

export default Title;
