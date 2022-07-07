import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "",
    thumbnail: "assets/images/product-details/thum-1.png",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "assets/images/product-details/thum-2.png",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function ImageSlider() {
  return <ImageGallery items={images} />;
}
