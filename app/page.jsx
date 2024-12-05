import styles from "./page.module.css";
import Image from "next/image";
import Nav from "./(section)/Nav";
import Hero from "./(section)/Hero";
import Partner from "./(section)/Partner";
import Properties from "./(section)/Properties";
import WhyChooseUs from "./(section)/WhyChooseUs";
import Footer from "./(section)/Footer";

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav />
      <Hero />
      <Partner />
      <Properties />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
