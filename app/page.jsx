import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./(section)/Nav";
import Hero from "./(section)/Hero";
import Partner from "./(section)/Partner";
import Properties from "./(section)/Properties";

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav />
      <Hero />
      <Partner />
      <Properties />
    </div>
  );
}
