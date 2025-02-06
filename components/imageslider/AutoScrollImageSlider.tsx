"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./AutoScrollImageSlider.module.css"

const images = [
  "/placeholder.svg?height=400&width=600&text=Image+1",
  "/placeholder.svg?height=400&width=600&text=Image+2",
  "/placeholder.svg?height=400&width=600&text=Image+3",
  "/placeholder.svg?height=400&width=600&text=Image+4",
  "/placeholder.svg?height=400&width=600&text=Image+5",
]

export default function AutoScrollImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={src || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {images.map((_, index) => (
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

