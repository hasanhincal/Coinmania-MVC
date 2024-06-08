import { FaPercent } from "react-icons/fa";
import { MdEventAvailable, MdOutlinePriceChange } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";
import { SiCoinmarketcap } from "react-icons/si";

export class DetailModel {
  constructor(coin, history) {
    this.coin = coin;

    //* arayüz kutuları için veriyi hazırla;
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: this.coin?.supply,
      },
      {
        icon: <MdOutlinePriceChange />,
        label: "Fiyat (USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockLine />,
        label: "24s Hacim (%)",
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    //* grafik için veri hazırlama;
    this.chartData = {
      labels: history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          label: "Fiyat Değeri",
          data: history?.map((i) => Number(i.priceUsd).toFixed(2)),
        },
      ],
    };
    console.log(this.chartData);
  }
}
