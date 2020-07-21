import React from "react";

const Section = ({ data }) => {
  console.log("la props data reçue:", data);
  return (
    <div className="sections">
      {data.map((categorie, index) => {
        console.log("index", index, "categorie", categorie);
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
      })}
    </div>
  );
};
export default Section;
