import React from "react";

const Categorie = ({ categorie }) => {
  return (
    <div>
      <h2>{categorie.category}</h2>
      <div className="list">
        {categorie.images.map((link, i) => {
          return <img src={link} />;
        })}
        ;
      </div>
    </div>
  );
};

export default Categorie;
