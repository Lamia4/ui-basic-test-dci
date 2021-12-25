import React from 'react';

import { useParams } from 'react-router';

import Dog from './Dog';

function Dogs()
{
  const { name } = useParams();

  const dogs = [
    {
      name: "whiskey",
      id: 0,
      image: "whiskeyPic",
      age: 4,
      facts: [
        "Whiskey loves eating popcorn",
        "Whiskey is a terrible guard dog",
        "Whiskey wants to cuddle with you"
      ]
    },
    {
      name: "hazel",
      id: 1,
      image: "hazelPic",
      age: 0,
      facts: [
        "Hazel loves eating popcorn",
        "Hazel is a terrible guard dog",
        "Hazel wants to cuddle with you"
      ]
    },
    {
      name: "tubby",
      id: 2,
      image: "tubbyPic",
      age: 4,
      facts: [
        "Tubby is really stupid",
        "Tubby is a terrible guard dog",
        "Tubby wants to cuddle with you"
      ]
    }
  ]

  console.log(name);

  return (
    <>
      <Dog dog={ dogs.find(dog => dog.name === name)  } allDogs={ dogs }/>
    </>
  );
}


export default Dogs;