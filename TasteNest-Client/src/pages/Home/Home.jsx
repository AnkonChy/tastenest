import React from "react";
import Banner from "../../components/Banner/Banner";
import Bbq from "../../components/Bbq/Bbq";
import FoodItem from "../../components/FoodItem/FoodItem";
import DiscoverMenu from "../../components/DiscoverMenu/DiscoverMenu";
import ReserveTable from "../../components/ReserveTable/ReserveTable";
import About from "../../components/About/About";
import FeaturedDishes from "../../components/FeaturedDishes/FeaturedDishes";
import Feedbacks from "../../components/Feedbacks/Feedbacks";
import Experts from "../../components/Experts/Experts";
import AppStore from "../../components/AppStore/AppStore";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <FoodItem></FoodItem>
      <Bbq />
      <DiscoverMenu/>
      <ReserveTable/>
      <FeaturedDishes/>
      <Feedbacks/>
      <Experts/>
      <AppStore/>
    </div>
  );
};

export default Home;
