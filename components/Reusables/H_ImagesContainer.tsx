import React from "react";
import ImageContent from "./ImageContent";
import { ImageContentProps } from "./ImageContent";

const H_ImagesContainer = () => {

  const images: ImageContentProps[] = [
    {
      _id: "1",
      title: "Sunset Over Beach",
      newDimension: { url: "/images/banner.jpg" },
      userId: {
        firstName: "John",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "2",
      title: "Mountain Hike",
      newDimension: { url: "/images/showcase.jpg" },
      userId: {
        firstName: "Jane",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "3",
      title: "City Skyline",
      newDimension: { url: "/images/ads.png" },
      userId: {
        firstName: "Michael",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "4",
      title: "Forest Path",
      newDimension: { url: "/images/banner.jpg" },
      userId: {
        firstName: "Sophia",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "5",
      title: "Desert Dunes",
      newDimension: { url: "/images/showcase.jpg" },
      userId: {
        firstName: "Liam",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "6",
      title: "Night Sky Stars",
      newDimension: { url: "/images/ads.png" },
      userId: {
        firstName: "Emma",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "7",
      title: "Ocean Waves",
      newDimension: { url: "/images/banner.jpg" },
      userId: {
        firstName: "Noah",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "8",
      title: "Autumn Leaves",
      newDimension: { url: "/images/showcase.jpg" },
      userId: {
        firstName: "Olivia",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "9",
      title: "Snowy Mountains",
      newDimension: { url: "/images/ads.png" },
      userId: {
        firstName: "James",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "10",
      title: "African Market",
      newDimension: { url: "/images/banner.jpg" },
      userId: {
        firstName: "Aisha",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "11",
      title: "Traditional Dance",
      newDimension: { url: "/images/showcase.jpg" },
      userId: {
        firstName: "Kemi",
        profilePicture: "/images/logo.png"
      }
    },
    {
      _id: "12",
      title: "Savanna Sunset",
      newDimension: { url: "/images/ads.png" },
      userId: {
        firstName: "David",
        profilePicture: "/images/logo.png"
      }
    }
  ];

  return (
    <>
      {images.map((image) => (
        <ImageContent key={image._id} {...image} />
      ))}
    </>
  );
};

export default H_ImagesContainer;
