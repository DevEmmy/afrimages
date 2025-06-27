import React from "react";
import V_ImagesContainer from "./V_ImagesContainer";
import { ImageContentProps } from "./ImageContent";

const H_ImagesContainer = () => {

  const images: ImageContentProps[] = [
    {
      _id: "1",
      title: "Sunset Over Beach",
      newDimension: { url: "https://example.com/images/sunset1.jpg" },
      userId: {
        firstName: "John",
        profilePicture: "https://example.com/images/profile1.jpg"
      }
    },
    {
      _id: "2",
      title: "Mountain Hike",
      newDimension: { url: "https://example.com/images/mountain.jpg" },
      userId: {
        firstName: "Jane",
        profilePicture: "https://example.com/images/profile2.jpg"
      }
    },
    {
      _id: "3",
      title: "City Skyline",
      newDimension: { url: "https://example.com/images/city.jpg" },
      userId: {
        firstName: "Michael",
        profilePicture: "https://example.com/images/profile3.jpg"
      }
    },
    {
      _id: "4",
      title: "Forest Path",
      newDimension: { url: "https://example.com/images/forest.jpg" },
      userId: {
        firstName: "Sophia",
        profilePicture: "https://example.com/images/profile4.jpg"
      }
    },
    {
      _id: "5",
      title: "Desert Dunes",
      newDimension: { url: "https://example.com/images/desert.jpg" },
      userId: {
        firstName: "Liam",
        profilePicture: "https://example.com/images/profile5.jpg"
      }
    },
    {
      _id: "6",
      title: "Night Sky Stars",
      newDimension: { url: "https://example.com/images/night-sky.jpg" },
      userId: {
        firstName: "Emma",
        profilePicture: "https://example.com/images/profile6.jpg"
      }
    },
    {
      _id: "7",
      title: "Ocean Waves",
      newDimension: { url: "https://example.com/images/ocean.jpg" },
      userId: {
        firstName: "Noah",
        profilePicture: "https://example.com/images/profile7.jpg"
      }
    },
    {
      _id: "8",
      title: "Autumn Leaves",
      newDimension: { url: "https://example.com/images/autumn.jpg" },
      userId: {
        firstName: "Olivia",
        profilePicture: "https://example.com/images/profile8.jpg"
      }
    },
    {
      _id: "9",
      title: "Snowy Mountains",
      newDimension: { url: "https://example.com/images/snow.jpg" },
      userId: {
        firstName: "James",
        profilePicture: "https://example.com/images/profile9.jpg"
      }
    }
  ];
  

  function splitArrayIntoThree(arr: any[]) {
    const chunkSize = Math.ceil(arr.length / 3); // Get the size of each chunk
    const images1 = arr.slice(0, chunkSize);
    const images2 = arr.slice(chunkSize, 2 * chunkSize);
    const images3 = arr.slice(2 * chunkSize);
  
    return {images1, images2, images3};
  }

  const {images1, images2, images3} = splitArrayIntoThree(images)

  return (
    <div className="grid gap-5  sm:grid-cols-2 md:grid-cols-3">
      <V_ImagesContainer images={images1} />
      <V_ImagesContainer images={images2} />
      <V_ImagesContainer images={images3} />
    </div>
  );
};

export default H_ImagesContainer;
