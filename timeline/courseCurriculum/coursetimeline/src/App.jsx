import React from "react";
import { Chrono } from "react-chrono";

const Home = () => {
  const coursecurriculum = [
    {
      title: "1st Month",
      contentTitle: "Introduction to programming",
      contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
    },
    {
      title: "2nd Month",
      contentTitle: "Data Structures and Algorithm",
      contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
    },
    {
      title: "3rd Month",
      contentTitle: "Data Structures and Algorithm",
      contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
    },
    {
      title: "4th Month",
      contentTitle: "Data Structures and Algorithm",
      contentText: `-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun
          -vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      // contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May.  `,
    },
  ];

  return (
    <div style={{ width: "500px", height: "400px" }}>
      <Chrono items={coursecurriculum} mode="VERTICAL" />
    </div>
  );
};

export default Home;
