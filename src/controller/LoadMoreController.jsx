import React from "react";
import LoadMoreView from "../view/LoadMoreView";
import { useSearchParams } from "react-router-dom";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    //* güncel sayfa sayısını al;(params varsa onu getir veya 1 olsun sayfa birden başlasın )
    const pageNumber = params.get("page") || 1;
    //* url'i güncelle
    setParams({ page: Number(pageNumber) + 1 });
  };
  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;
