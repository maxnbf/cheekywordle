import React from "react";
import { useParams } from "react-router-dom";
export const GroupPage = () => {
  const { id } = useParams();

  return <div>group: {id}</div>;
};
