import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import Button from "../../../shared/ui/Button/Button";
const ArticleLikeUnlike = () => {
  return (
    <div className="mb-2 flex items-center space-x-4">
      <LikeUnlikeButton value={0} Icon={AiFillLike} />
      <LikeUnlikeButton value={0} Icon={AiFillDislike} />
    </div>
  );
};

export default ArticleLikeUnlike;
const LikeUnlikeButton = ({ value, Icon }) => {
  return (
    <Button>
      <Icon size={20} />
      <span className="ml-5 text-md">{value}</span>
    </Button>
  );
};
