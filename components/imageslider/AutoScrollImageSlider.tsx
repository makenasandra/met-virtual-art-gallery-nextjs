"use client"

import { useState, useEffect, Key, Suspense } from "react"
import Image from "next/image"
import styles from "./AutoScrollImageSlider.module.css"
import commentSectionStyles from "../featured/Featured.module.css"
import Featured from "../featured/Featured"
import { Artwork } from "@/data/local-art-data"
import LoadingComments from "../comment/LoadingComments"
import StoredComments from "../comment/StoredComments"
import Comment from "../comment/Comment";

export default function AutoScrollImageSlider({images}: {images: any}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  let artWorkId = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      changeColor()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeColor(){
    let newColor = getRandomColor();
    document.getElementById("slider-container").style.backgroundColor = newColor;
  }

  function changeArtWorkID(objectID: number){
    artWorkId = objectID;
  }

  return (
    <div>
          <div id="slider-container" className={styles.sliderContainer}>
      <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((artWork: Artwork, index: number) => {
          changeArtWorkID(artWork.objectID);
          return (
          <div key={index} className={styles.slide}>
            <Featured key={artWork.objectID} {...artWork}/>
          </div>
        )})}
      </div>
      <div className={styles.indicators}>
        {images.map((_, index: number) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    <div className={commentSectionStyles.comments_section}>
        <Suspense fallback={<LoadingComments />}>
          <StoredComments id={artWorkId} />
        </Suspense>
    </div>
        <Comment />
    </div>

  )
}

