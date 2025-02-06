import React, { Suspense, useState } from "react";
import Image from "next/image";
import { Artwork } from "../../utils/utils";
import styles from "./Featured.module.css";
import StoredComments from "../comment/StoredComments";
import Comment from "../comment/Comment";
import LoadingComments from "../comment/LoadingComments";

export default function Featured({
  objectID,
  primaryImage,
  title,
  objectDate,
  artistDisplayName,
}: Artwork) {


  return (
    <div id="featured" className={styles.featured}>
      <Image
        className={styles.featuredImage}
        src={primaryImage == "" ? "/blank.jpg" : primaryImage}
        alt={title}
        width={500}
        height={500}
      />
      <p className={styles.title}>{title}</p>
      <p>{artistDisplayName}</p>
      <p>{objectDate}</p>
    </div>
  );
}
