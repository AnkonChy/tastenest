import React from "react";
import girlImage from "../../assets/girl-image.jpg";
import picFire from "../../assets/about/picfire.png";
import picDrinks from "../../assets/about/picdrinks.png";
import picDining from "../../assets/about/picdining.png";
const About = () => {
  return (
    // <div>
    //   <div>
    //     <div>
    //       <h4>About The Food Restaurant</h4>
    //       <h1>New Ground with Dishes to be Enjoyed</h1>
    //     </div>
    //     <div>
    //       <p>
    //         Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci
    //         varius nat oque pena tibus et urient monte nascete ridiculus mus
    //         nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
    //         ligula.
    //       </p>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //         <img src="" className="w-5 h-5 rounded-full" alt="" />
    //     </div>
    //     <div></div>
    //   </div>
    // </div>
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10 lg:mt-32">
      <div className="">
        {/* Upper Content */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Upper left */}
          <div className="w-full lg:w-1/2">
            <p className="text-red-500 font-semibold uppercase text-lg tracking-wide">
              About the Food Restaurant
            </p>
            <h2 className="text-5xl font-extrabold leading-snug mt-2">
              New Ground with <br /> Dishes to be <br /> Enjoyed
            </h2>
          </div>
          {/* upper right  */}
          <div className="w-full lg:w-1/2">
            <p className="text-gray-500 text-lg">
              Nisl quam vestibulum ac quam nec odio eleme aucan ligula. Orci
              varius nat quae pena tibus et urient monte nascete ridiculus mus
              nellentesque um ac qu am nec odio finibu. Nisl quam nestibu aucan
              ligula.
            </p>

            {/* Profile */}
            <div className="flex items-center gap-3 mt-6">
              <img
                src={girlImage} // replace with your profile image
                alt="Willimes James"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">Willimes James</h4>
                <p className="text-sm text-gray-500">
                  Director and Chief Operations Officer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second Content - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-22 gap-6 mt-9">
          {/* Card 1 */}
          <div
            className="rounded-3xl overflow-hidden bg-black w-full h-96 lg:w-[413px] lg:h-[524px] relative"
            style={{
              backgroundImage: `url(${picFire})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* Inner bordered div spanning almost full width */}
            <div className="absolute top-3 left-3 right-3 bottom-3 border-4 border-[#FFD40D] rounded-3xl flex items-center justify-center">
              <button className="absolute bottom-0 left-0 w-full bg-[#FFD40D] text-center font-bold text-lg py-3 rounded-xl">
                Restaurant
              </button>
            </div>

            {/* Bottom button */} 
          </div>
          {/* Card 1 */}
          <div
            className="rounded-3xl overflow-hidden bg-black w-full h-96 lg:w-[413px] lg:h-[524px] relative lg:mt-10"
            style={{
              backgroundImage: `url(${picDrinks})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* Inner bordered div spanning almost full width */}
            <div className="absolute top-3 left-3 right-3 bottom-3 border-4 border-[#FFD40D] rounded-3xl flex items-center justify-center">
              <button className="absolute bottom-0 left-0 w-full bg-[#FFD40D] text-center font-bold text-lg py-3 rounded-xl">
                Cocktail Bar
              </button>
            </div>

            {/* Bottom button */}
          </div>
          {/* Card 2 */}
          <div
            className="rounded-3xl overflow-hidden bg-black w-full h-96 lg:w-[413px] lg:h-[524px] relative"
            style={{
              backgroundImage: `url(${picDining})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {/* Inner bordered div spanning almost full width */}
            <div className="absolute top-3 left-3 right-3 bottom-3 border-4 border-[#FFD40D] rounded-3xl flex items-center justify-center">
              <button className="absolute bottom-0 left-0 w-full bg-[#FFD40D] text-center font-bold text-lg py-3 rounded-xl">
                Private Dining
              </button>
            </div>

            {/* Bottom button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
