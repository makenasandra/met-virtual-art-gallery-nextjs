import React, { Suspense } from "react";
import ArtGallery from "../components/gallery/ArtGallery";
import LoadingGallery from "../components/featured/LoadingGallery";
import styles from "./page.module.css";
import AutoScrollImageSlider from "@/components/imageslider/AutoScrollImageSlider";

export default function Home() {
  return (
    // <main className={styles.main}>
    //   <Suspense fallback={<LoadingGallery />}>
    //     <ArtGallery />
    //   </Suspense>
    // </main>
    <main  style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
      padding: "16px",
    }}>
    <AutoScrollImageSlider />
  </main>
  );
}
