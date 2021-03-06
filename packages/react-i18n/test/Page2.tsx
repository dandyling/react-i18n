import React from "react";
import { I18NText } from "./Text";
import { I18NProvider } from "../src/I18NProvider";

const Page2Bundle = {
  a: () =>
    Promise.resolve({
      4: "a4"
    }),
  b: () =>
    Promise.resolve({
      4: "b4"
    })
};

export default () => {
  return (
    <I18NProvider bundles={Page2Bundle}>
      <I18NText label="4" id="t4" />
    </I18NProvider>
  );
};
