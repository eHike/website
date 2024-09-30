"use client";
import React, { useEffect } from "react";
import { easeIn, stagger, useAnimate, useInView } from "framer-motion";
// import {motion} from "framer-motion";
// import styles from './Home.module.css'
import { InfiniteScroll } from "../../../Components/ui/InfiniteScroll";
const Stories = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  const items = [
    {
      link: "https://www.trustpilot.com/reviews/668265ac381660218193a4f9",
      profilePicture:
        "https://user-images.trustpilot.com/668265a5ec26fe7c6bf2178d/73x73.png",
      quote:
        "It feels very effortless on our side when he takes charge of the project. Overall a very good experience.🔥",
      name: "Suman Das",
      title: "Messy Programmer",
    },
    {
      link: "https://www.linkedin.com/in/ayush-paul-05405b1b8/#:~:text=directly%20to%20Ayush-,August%207%2C%202024%2C%20Amarnath%20reported%20directly%20to%20Ayush,challenging%20project.%0A%0ASincerely%2C%20%0AAmarnath%2C%20Asst.%20Librarian%2C%20Dayananda%20Sagar%20University%2C%20Library%2C%20Banaglore.,-It%20is%20with",
      profilePicture:
        "https://media.licdn.com/dms/image/v2/D5603AQH-kLGsswC3sA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724556946461?e=1732147200&v=beta&t=Gw7pmBjW5WnhmNRBL6s9a2I-GXkhV8zrI6K2Lze-8M8",
      quote:
        "Ayush showed great command handling and solving complex Issues throughout the Project ( Library Management System ).",
      name: "Amarnath Sureshrao",
      title: "Asst. Librarian, Dayananda Sagar University",
    },
    {
      link: "https://d1secure/",
      profilePicture: "https://d1secure.in/assets/img/team/team-1.jpg",
      quote: "They provide best solution in best price.",
      name: "Dildar Hussain",
      title: "D1 SECURE",
    },
    {
      link: "https://www.trustpilot.com/reviews/6682c9f8c7b17a27e0a42768",
      profilePicture:
        "https://user-images.trustpilot.com/66824cae70e2056911a0dd98/73x73.png",
      quote:
        "A project with Ayush where he was leading tha team, he is very hardworking always comes up with an effective work and also helped me 😁",
      name: "Md Arif",
      title: "NIT Jamshedpur",
    },
    {
      link: "https://drtanmaydas.com/",
      profilePicture:
        "https://drtanmaydas.com/images/nirishinghaimg/doctor-img.png",
      quote: "They are best at there work. They commit and deliver",
      name: "Dr Tanmaydas",
      title: "General and laparoscopic surgeon",
    },
  ];
  useEffect(() => {
    if (inView) {
      animate(
        ".anim_fadeup",
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.5,
          ease: easeIn,
          delay: stagger(0.3),
        }
      );
    }
  }, [inView]);
  return (
    <div ref={scope} className="text-center h-auto mt-16 ">
      <p className="anim_fadeup text-[45px] font-bold anim_fadeup leading-[50px] text-3xl md:text-5xl mb-20 ">
        Stories from the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f86285] to-[#5142f2]">
          heart
        </span>
      </p>
      <div className="flex flex-col items-center justify-center">
        <InfiniteScroll items={items} speed="slow"></InfiniteScroll>
        <InfiniteScroll
          items={items}
          direction="right"
          speed="slow"
        ></InfiniteScroll>
      </div>
    </div>
  );
};

export default Stories;
