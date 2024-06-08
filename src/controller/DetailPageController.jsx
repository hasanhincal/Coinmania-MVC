import React, { useEffect, useState } from "react";
import DetailPageView from "../view/DetailPageView";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailModel } from "../model/DetailModel";

const DetailPageController = () => {
  //* tıklanılan yapının id'sini kullanma;
  const params = useParams();

  const [coin, setCoin] = useState();
  const [history, setHistory] = useState();

  //* şimdiki ve geçmiş'den günümüze olan fiyat değişimine istek atma işlemi;
  useEffect(() => {
    axios
      .get(`/assets/${params.id}`)
      .then((res) => setCoin(res.data.data))
      .catch((err) => console.error(err));

    axios
      .get(`/assets/${params.id}/history?interval=d1`)
      .then((res) => setHistory(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  //* verilerin örneğini alma model gönderme;
  const model = new DetailModel(coin, history);

  return <DetailPageView model={model} />;
};

export default DetailPageController;
