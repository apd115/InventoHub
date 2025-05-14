import React from "react";
import { Card } from "../components/Card";
import content from "./data/homeContent.json";

const Home = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Title */}
        <Card
          content={`<strong class='text-2xl font-bold '>${content.title}</strong>`}
          isHtml={true}
        />

        {/* Combined Intro Paragraphs */}
        <Card
          content={content.introParagraphs.join("<br /><br />")}
          isHtml={true}
        />

        {/* Sections */}
        {content.sections.map((section, idx) => (
          <Card
            key={idx}
            title={section.heading}
            content={section.items}
            isList={section.type === "list"}
            isHtml={section.type === "paragraphs"}
          />
        ))}

      </div>
    </div>
  );
};

export default Home;
