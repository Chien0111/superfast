import { useRouter } from "next/router";
import React from "react";

const Beginers = () => {
  const { type } = useRouter().query;
  console.log(type);
  return <div>Beginers</div>;
};

export default Beginers;
