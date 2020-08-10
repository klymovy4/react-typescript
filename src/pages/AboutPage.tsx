import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Инфо</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        necessitatibus recusandae eum voluptatum, sunt exercitationem eveniet
        minima ducimus saepe facere.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
