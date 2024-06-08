import React from "react";
import { IoLogoBitcoin } from "react-icons/io";
import CardView from "./CardView";
import millify from "millify";
import LoadMoreController from "../controller/LoadMoreController";

const MainPageView = ({ popular, coins, navigate }) => {
  return (
    <div className="container-lg mt-5 d-flex flex-column align-items-center">
      <h3 className="title d-flex gap-2 align-items-center gap-2 mb-3">
        <p className="mb-1">
          <IoLogoBitcoin />
        </p>
        <p className="mb-0">Bitcoin'in Yükselişi</p>
      </h3>
      <p>
        Bitcoin, kripto dünyasında büyük bir çıkış yakaladı.Son birkaç haftada
        değeri hızla arttı ve birçok yatırımcı tarafından ilgiyle takip
        ediliyor.Peki bu yükseliş ne anlama geliyor?
      </p>
      {/* popular area*/}

      <div className=" d-flex flex-wrap gap-4 my-5 px-5 justify-content-center">
        {popular?.map((data) => (
          <CardView key={data.id} data={data} />
        ))}
      </div>

      {/* coins area */}

      <table className="table table-dark table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th>Market Hacmi</th>
            <th>Değişim (24s)</th>
            <th>% Değişim (24s)</th>
          </tr>
        </thead>

        <tbody>
          {coins?.map((coin, i) => (
            <tr key={coin.id} onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{i + 1}</td>
              <td>
                <span className={"text-warning font-bold text-nowrap me-2"}>
                  {coin.symbol}
                </span>
                <span>{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td
                className={
                  Number(coin.changePercent24Hr) >= 0
                    ? "text-success"
                    : "text-danger"
                }
              >
                % {Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
