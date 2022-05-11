import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* main */}
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </>
  );
};

export default Home;
