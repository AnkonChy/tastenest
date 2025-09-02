import React from "react";
import Banner from "../../components/Banner/Banner";
import Bbq from "../../components/Bbq/Bbq";
import FoodItem from "../../components/FoodItem/FoodItem";
import DiscoverMenu from "../../components/DiscoverMenu/DiscoverMenu";
import ReserveTable from "../../components/ReserveTable/ReserveTable";

const Home = () => {
  return (
    <div>
      <Banner />
      <FoodItem></FoodItem>
      <Bbq />
      <DiscoverMenu/>
      <ReserveTable/>
    </div>
  );
};

export default Home;
