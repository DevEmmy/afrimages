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
    },
    {
      _id: "10",
      title: "Flower Garden",
      newDimension: { url: "https://example.com/images/garden.jpg" },
      userId: {
        firstName: "Isabella",
        profilePicture: "https://example.com/images/profile10.jpg"
      }
    },
    {
      _id: "11",
      title: "Rainy Window",
      newDimension: { url: "https://example.com/images/rain.jpg" },
      userId: {
        firstName: "Lucas",
        profilePicture: "https://example.com/images/profile11.jpg"
      }
    },
    {
      _id: "12",
      title: "Sunflower Field",
      newDimension: { url: "https://example.com/images/sunflowers.jpg" },
      userId: {
        firstName: "Mia",
        profilePicture: "https://example.com/images/profile12.jpg"
      }
    },
    {
      _id: "13",
      title: "Rolling Hills",
      newDimension: { url: "https://example.com/images/hills.jpg" },
      userId: {
        firstName: "Elijah",
        profilePicture: "https://example.com/images/profile13.jpg"
      }
    },
    {
      _id: "14",
      title: "City Night Lights",
      newDimension: { url: "https://example.com/images/night-lights.jpg" },
      userId: {
        firstName: "Charlotte",
        profilePicture: "https://example.com/images/profile14.jpg"
      }
    },
    {
      _id: "15",
      title: "Green Meadows",
      newDimension: { url: "https://example.com/images/meadows.jpg" },
      userId: {
        firstName: "Mason",
        profilePicture: "https://example.com/images/profile15.jpg"
      }
    },
    {
      _id: "16",
      title: "Sunrise in the Forest",
      newDimension: { url: "https://example.com/images/sunrise.jpg" },
      userId: {
        firstName: "Amelia",
        profilePicture: "https://example.com/images/profile16.jpg"
      }
    },
    {
      _id: "17",
      title: "Foggy Morning",
      newDimension: { url: "https://example.com/images/fog.jpg" },
      userId: {
        firstName: "Benjamin",
        profilePicture: "https://example.com/images/profile17.jpg"
      }
    },
    {
      _id: "18",
      title: "Golden Wheat Field",
      newDimension: { url: "https://example.com/images/wheat.jpg" },
      userId: {
        firstName: "Evelyn",
        profilePicture: "https://example.com/images/profile18.jpg"
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
