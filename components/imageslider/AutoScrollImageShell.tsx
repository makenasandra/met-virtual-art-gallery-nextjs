import Image from "next/image";
import styles from "./AutoScrollImageSlider.module.css";
import { fetchArtData } from "../../utils/utils";
import AutoScrollImageSlider from "./AutoScrollImageSlider";

const images = [
  "https://placehold.co/600x400/000000/FFFFFF/png",
  "https://placehold.co/600x400/000000/FFFFFF/png",
  "https://placehold.co/600x400/000000/FFFFFF/png",
  "https://placehold.co/600x400/000000/FFFFFF/png",
  "https://placehold.co/600x400/000000/FFFFFF/png",
];

export default async function AutoScrollImageShell() {
  const artData = await fetchArtData();

  return <AutoScrollImageSlider images={artData} />;
}
