import React from "react";
import Carousel from "../../components/carousel/carousel";
import FeaturedProduct from "../../components/featuredProduct/featuredProduct";
import getImageByKey from "../../ImageMapping";

const Home = () => {
  return (
    <main>
      <section className="container container--center landingpage gap--lg">
        <h1 className="landingpage__heading">
          Photography is poetry & beautiful untold stories
        </h1>
        <p className="landlingpage__para">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>

        <div className="container gap--lg carousel">
          <Carousel />
          <Carousel />
          <Carousel />
          <Carousel />
        </div>
        <img src={getImageByKey( "landingImage")} alt="" className="landing__image" />
      </section>

      <section className="featured">
        <h2 className="featured__heading">Featured products</h2>
        <FeaturedProduct image={getImageByKey("feature1") } />
        <FeaturedProduct image={getImageByKey("feature2")} />
        <FeaturedProduct image={getImageByKey("feature3")} />

      </section>

      <section className="events container container--col gap--md">
        <h2 className="events__heading">
          See Upcoming Auctions and Exhibitions
        </h2>

        <div className="events__slide container container--between">
          <div className="event__slide__info container gap--lg">
            <p className="slide__no">01</p>
            <div className="slide__detail container container--col gap--md">
              <h3 className="slide__heading">MONALISA REDEFINED IN STYLE.</h3>
              <p className="slide__para">Start on : 08:00 GTS . Monday </p>
              <p className="slide__para">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
          </div>
          <div className="container container--center-row gap--lg">
            <a className="underline" href="/">
              See More
            </a>
            <a className="reminder" href="/">
              Set A Reminder
            </a>
          </div>
        </div>
      </section>

      <section className="explore container container--col round">
        <a href="/" className="container container--between secondary-links ">
          Explore marketplace
          <img className="" src={getImageByKey( "arrow")} alt="" />
        </a>
        <a href="/" className="container container--between secondary-links ">
          See auctions
          <img src={getImageByKey( "arrow")} alt="" />
        </a>
      </section>

      <section className="creator">
        <img className="creator__image" src={getImageByKey( "creator")} alt="" />

        <div className="container container--between">
          <h4 className="creator__heading">TOP CREATORS OF THE WEEK</h4>
          <ul className="creator__list container container--col gap--md">
            <li>Editorials</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
          </ul>
        </div>
        <p className="creator__quotes">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
      </section>

      <section className="newsletter container container--center gap--lg">
        <h4 className="newsletter__heading">NewsLetter</h4>
        <p className="newsletter__para">
          Subscribe to get daily updates on new drops & exciting deals{" "}
        </p>
        <form action="" className="container gap--lg newsletter__form">
          <input
            placeholder="Enter Email"
            className="input--light"
            type="email"
          />
          <button className="button--dark">Subscribe</button>
        </form>
      </section>
    </main>
  );
};

export default Home;