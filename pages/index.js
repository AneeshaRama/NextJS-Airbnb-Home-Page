import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Largecard from "../components/Largecard";
import Mediumcard from "../components/Mediumcard";
import Smallcard from "../components/Smallcard";

const Home = ({ exploreData, cardData }) => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* main */}
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-gray-800">
            Explore Nearby
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <Smallcard key={item.location} item={item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold text-gray-800 py-10">
            Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map((item) => (
              <Mediumcard key={item.title} item={item} />
            ))}
          </div>
        </section>
        <div>
          <Largecard
            img="http://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Whishlists Curated by Airbnb"
            buttonText="Get Inspired"
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}

export default Home;
