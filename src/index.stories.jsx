import React from "react";
import MyCounter from "./index.js";

export default {
  parameters: {
    layout: "centered",
  },
};

function handler(ev) {
  console.log(ev);
}

export const story1 = () => <MyCounter handler={handler}></MyCounter>;
