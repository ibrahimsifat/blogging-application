import React from "react";
import Batch from "../../shared/homeFilterSection/Batch";
import { FilterSectionContainer } from "../../shared/homeFilterSection/FilterSectionContainer";
import FilterSectionHeading from "../../shared/homeFilterSection/FilterSectionHeading";

const Tags = () => {
  return (
    <FilterSectionContainer>
      <FilterSectionHeading title="Recommended Tags" />
      <div className="flex flex-wrap ">
        <Batch label="Programming" />
        <Batch label="Design" />
        <Batch label="UI/UX" />
        <Batch label="JavaScript" />
        <Batch label="ReactJS" />
      </div>
    </FilterSectionContainer>
  );
};

export default Tags;
