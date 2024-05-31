

import React, { useState, useEffect } from "react";
import project1 from "../1.png";
import project2 from "../2.png";
import project3 from "../3.png";
import project5 from "../5.png";
import project6 from "../6.png";
import project7 from "../7.png";
import project8 from "../8.png";

const tabsData = [
  {
    title: "All",
    images: [
      { src: project2, title: "Todo List", sizeClass: "size-0",link: "https://moizfaisal654.github.io/Todo-List-App/" },
      { src: project3, title: "Calculator", sizeClass: "size-1",link:"https://moizfaisal654.github.io/Calculator/" },
      { src: project7, title: "AREG", sizeClass: "size-2",link:"https://moizfaisal654.github.io/AREG-Builder/" },
      { src: project6, title: "Academic Service", sizeClass: "size-3",link:"https://moizfaisal654.github.io/Academic-service/" },
      { src: project8, title: "Written Paper", sizeClass: "size-4",link:"https://moizfaisal654.github.io/Written-Paper/" },
      { src: project5, title: "Techzone", sizeClass: "size-5",link:"https://moizfaisal654.github.io/Techzone/" },
      { src: project1, title: "Animated Search Bar", sizeClass: "size-6",link:"https://moizfaisal654.github.io/Animated-Search-User/" },
    ],
  },
  {
    title: "Web",
    images: [
      { src: project5, title: "Techzone", sizeClass: "size-5",link:"https://moizfaisal654.github.io/Techzone/" },
      { src: project6, title: "Academic Service", sizeClass: "size-3",link:"https://moizfaisal654.github.io/Academic-service/" },
      { src: project7, title: "AREG", sizeClass: "size-2",link:"https://moizfaisal654.github.io/AREG-Builder/" },
      { src: project8, title: "Written Paper", sizeClass: "size-4",link:"https://moizfaisal654.github.io/Written-Paper/" },
    ],
  },
  {
    title: "Web App",
    images: [
      { src: project3, title: "Calculator App", sizeClass: "size-1",link:"https://moizfaisal654.github.io/Calculator/" },
      { src: project2, title: "Todo List App", sizeClass: "size-0",link: "https://moizfaisal654.github.io/Todo-List-App/" },
      { src: project1, title: "Animated Search Bar", sizeClass: "size-6",link:"https://moizfaisal654.github.io/Animated-Search-User/" },
    ],
  },
];

const Tabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const triggerAnimation = () => {
    const cards = document.querySelectorAll(".card img");
    cards.forEach((card) => {
      card.classList.remove("image-animated"); // Reset the animation
      void card.offsetWidth; // Trigger reflow to restart animation
      card.classList.add("image-animated"); // Add the animation class
    });
  };

  useEffect(() => {
    const moveTracker = () => {
      const title = document.querySelector(
        `.tabs__titles__title[data-index="${currentTab}"]`
      );
      const tracker = document.querySelector(".tabs__tracker");
      if (title && tracker) {
        tracker.style.width = `${title.clientWidth}px`;
        tracker.style.left = `${title.offsetLeft}px`;
      }
    };

    moveTracker();
    triggerAnimation();
  }, [currentTab]); // Removed moveTracker from the dependency array

  const changeTab = (index) => {
    setCurrentTab(index);
  };

  return (
    <section id="portfolio" className="section-portfolio">
      <div className="d-flex text-center mb-5">
        <h2 className="About">Portfolio</h2>
        <p className="know">Projects</p>
      </div>
      <div className="tabs">
        <div className="tabs__tracker" />
        <div className="tabs__titles">
          {tabs.map((tab, index) => (
            <h2
              className={`tabs__titles__title ${
                currentTab === index ? "active" : ""
              }`}
              data-index={index}
              key={`tab-title-${index}`}
              onClick={() => changeTab(index)}
            >
              {tab.title}
            </h2>
          ))}
        </div>
        <div className="tabs__contents">
          <div className="tabs__contents__content">
            <div className="container portfolio">
              {tabs[currentTab].images.map((image, index) => (
                <div className={`card ${image.sizeClass}`} key={`card-${index}`}>
                  <a href={image.link} key={`link-${index}`} target="_blank" rel="noopener noreferrer">
                    <img src={image.src} alt={image.title} />
                    <div className="overlay">
                      <h1 className="text-h1">{image.title}</h1>
                    </div>
                  </a>
                </div> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return <Tabs tabs={tabsData} />;
};

export default Portfolio;
