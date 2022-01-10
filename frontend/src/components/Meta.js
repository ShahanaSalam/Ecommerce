import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Wedding Gown Studio",
  description: "Luxury Wedding Gowns",
  keywords: "wedding gowns, evening gowns, wedding dresses, braidsmaid dresses",
};

export default Meta;
