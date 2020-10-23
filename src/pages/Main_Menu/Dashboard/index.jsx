import React from "react";
import Classrooms from "../../../components/Dashboard/Classrooms";
import Hero from "../../../components/Dashboard/Hero";
import Summaries from "../../../components/Dashboard/Summaries";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <Summaries />
      <Classrooms />
    </>
  );
};

export default Dashboard;
 