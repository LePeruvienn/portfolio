import { useState } from "react";
import { useTranslation } from "react-i18next";

function Explore() {
  const { t } = useTranslation("explore");

  const sections = t("explore.sections", { returnObjects: true });
  const colors = [
    { BgColor: "bg-teal-400", TextColor: "text-teal-400" },
    { BgColor: "bg-purple-400", TextColor: "text-purple-400" }
  ];

  const [expandedSections, setExpandedSections] = useState(
    sections.map(() => false)
  );

  const toggleExpand = (index) => {
    setExpandedSections((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${colors[index].BgColor} flex-shrink-0`}></div>
              <h4 className={`ml-2 text-2xl font-semibold ${colors[index].TextColor}`}>
                {section.title}
              </h4>
            </div>
          </div>

          <p
            className="text-xl text-gray-300"
            dangerouslySetInnerHTML={{ __html: section.paragraphs[0] }}
          ></p>

          {expandedSections[index] &&
            section.paragraphs.slice(1).map((paragraph, i) => (
              <p
                key={i}
                className="mt-2 text-xl text-gray-300"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            ))}

          {section.paragraphs.length > 1 && (
            <button
              className="mt-2 text-lg text-teal-400 hover:underline"
              onClick={() => toggleExpand(index)}
            >
              {expandedSections[index] ? t("explore.seeLess") : t("explore.seeMore")}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
