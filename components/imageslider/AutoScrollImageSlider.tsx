"use client"

import { useState, useEffect, Key } from "react"
import Image from "next/image"
import styles from "./AutoScrollImageSlider.module.css"
import Featured from "../featured/Featured"
import { Artwork } from "@/data/local-art-data"

export default function AutoScrollImageSlider({images}: {images: any}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((artWork: Artwork, index: number) => (
          <div key={index} className={styles.slide}>
            <Featured key={artWork.objectID} {...artWork}/>
          </div>
        ))}
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
  )
}

