import React from "react";

const formulations = [
  {
    number: "01",
    title: "Botanical Blending",
    description:
      "Bring selected botanical ingredients together in a balanced formulation.",
    mark: "✳",
  },
  {
    number: "02",
    title: "Culture Blending",
    description:
      "Develop blends around culture selection, target use, and product needs.",
    mark: "◉",
  },
  {
    number: "03",
    title: "Bio-Nutrient Formulation",
    description:
      "Shape a bio-based formulation direction around a defined application.",
    mark: "⌁",
  },
  {
    number: "04",
    title: "Custom Formulation",
    description:
      "Start with a brief and explore ingredients, formats, and blend options.",
    mark: "＋",
  },
];

const FormulationSection: React.FC = () => (
  <section className="formulation-section px-5 py-12 md:px-10 md:py-16">
    <div className="formulation-heading">
      <div>
        <span className="eyebrow">
          <span className="eyebrow-line" /> OUR APPROACH
        </span>
        <h2>
          Blending <em>Formulation</em>
        </h2>
      </div>
      <p>
        Explore formulation pathways shaped around ingredients, intended use,
        and product goals.
      </p>
    </div>
    <div className="formulation-grid grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {formulations.map((item) => (
        <article className="formulation-card rounded-xl" key={item.number}>
          <div className="formulation-card-top">
            <span>{item.number}</span>
            <b aria-hidden="true">{item.mark}</b>
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default FormulationSection;
