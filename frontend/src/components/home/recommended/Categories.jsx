import React from "react";
import Batch from "../../shared/homeFilterSection/Batch";
import { FilterSectionContainer } from "../../shared/homeFilterSection/FilterSectionContainer";
import FilterSectionHeading from "../../shared/homeFilterSection/FilterSectionHeading";

const Categories = () => {
  return (
    <FilterSectionContainer>
      <FilterSectionHeading title="Recommended topics" />

      <div className="flex flex-wrap ">
        <Batch label="Programming" />
        <Batch label="Design" />
        <Batch label="UI/UX" />
        <Batch label="JavaScript" />
        <Batch label="ReactJS" />{" "}
      </div>
    </FilterSectionContainer>
  );
};

export default Categories;
