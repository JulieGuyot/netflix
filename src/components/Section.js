import React from "react";
import Categorie from "./Categorie";

const Section = ({ data }) => {
  console.log("la props data reçue:", data);
  return (
    <div className="sections">
      {data.map((categorie, index) => {
        console.log("index", index, "categorie", categorie);
        return <Categorie categorie={categorie} />;
      })}
    </div>
  );
};
export default Section;
