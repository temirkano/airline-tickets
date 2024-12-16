import React from "react";
import styles from "./card.module.scss";
import ticketsData from "../constants/ticket-data/tickets.json";
import CurrencyButton from "../Filter-block/CurrencyButton";
import { formatDate } from "../../utils/formDate";
import airlineIcons from "../../assets/turkish.png";
import { convertPrice } from "../../utils/convertPrice";
interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

interface ICardsItem {
  stops: number[];
  selectedCurrency: string;
}
const tickets: ITicket[] = ticketsData.tickets;

const Card: React.FC<ICardsItem> = ({ selectedCurrency, stops }) => {
  const filteredTickets = tickets.filter((ticket) => {
    const matchStops = stops.length === 0 || stops.includes(ticket.stops);
    return matchStops;
  });

  return (
    <section className={styles.cards_container}>
      {filteredTickets.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.card_price}>
            <img src={airlineIcons} alt="turkish-airline_icon" />
            <CurrencyButton
              type="price"
              currency={`КУПИТЬ ЗА ${convertPrice(
                item.price,
                selectedCurrency
              )} ${selectedCurrency}`}
              isActive={false}
              onClick={() =>
                alert(
                  `Вы купили билет за ${convertPrice(
                    item.price,
                    selectedCurrency
                  )} ${selectedCurrency}`
                )
              }
            />
          </div>
          <div className={styles.card_border}></div>
          <div className={styles.card_flightInfo}>
            <div className={styles.card_flightInfo__departure}>
              <h1>{item.departure_time}</h1>
              <h4>
                {item.origin}, {item.origin_name}
              </h4>
              <p>{formatDate(item.departure_date)}</p>
            </div>
            <div className={styles.card_flightInfo__way}>
              <p>{item.stops} пересадка</p>
              <h1>--------</h1>
            </div>
            <div className={styles.card_flightInfo__arrival}>
              <h1>{item.arrival_time}</h1>
              <h4>
                {item.destination_name}, {item.destination}
              </h4>
              <p>{formatDate(item.arrival_date)}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
