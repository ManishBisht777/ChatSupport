import React from "react";
import Carousel from "../../components/carousel/carousel";
import FeaturedProduct from "../../components/featuredProduct/featuredProduct";
import getImageByKey from "../../ImageMapping";
import { motion } from "framer-motion";
import { container, fromright, item } from "../../animation/animation";
const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
    >
      <section className="container container--center landingpage gap--lg">
        <motion.h1
          initial={{ y: "10%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="landingpage__heading"
        >
          Art is Poetry And & Beautiful Untold Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut" }}
          className="landlingpage__para"
        >
          Flip through more than 10,000 Artworks from artists around the globe
          seamlessly in one place.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ ease: "easeInOut" }}
          className="container gap--lg carousel"
        >
          <Carousel image={getImageByKey("c1")} />
          <Carousel image={getImageByKey("c2")} />
          <Carousel image={getImageByKey("c3")} />
          <Carousel image={getImageByKey("c4")} />
        </motion.div>
        <img
          src={getImageByKey("landingImage")}
          alt=""
          className="landing__image"
        />
      </section>

      <section className="featured">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.25, ease: "easeInOut" }}
          className="featured__heading"
        >
          Featured Artworks
        </motion.h2>
        <FeaturedProduct image={getImageByKey("feature1")} />
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
        <motion.a
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          href="/"
          className="container container--between secondary-links "
        >
          Explore marketplace
          <img className="" src={getImageByKey("arrow")} alt="" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          href="/"
          className="container container--between secondary-links "
        >
          See auctions
          <img src={getImageByKey("arrow")} alt="" />
        </motion.a>
      </section>

      <section className="creator">
        <img className="creator__image" src={getImageByKey("creator")} alt="" />

        <div className="container container--between">
          <motion.h4
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="creator__heading"
          >
            TOP CREATORS OF THE WEEK
          </motion.h4>
          <motion.ul
            variants={fromright}
            initial="hidden"
            whileInView={"show"}
            transition={{ ease: "easeInOut" }}
            className="creator__list container container--col gap--md"
          >
            <motion.li
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Editorials
            </motion.li>
            <motion.li
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Fashion
            </motion.li>
            <motion.li
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Lifestyle
            </motion.li>
            <motion.li
              variants={item}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Blueprint
            </motion.li>
          </motion.ul>
        </div>
        <p className="creator__quotes">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
      </section>
    </motion.main>
  );
};

export default Home;
