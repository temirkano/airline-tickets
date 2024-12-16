import CurrencyButton from "./CurrencyButton";
import styles from "./filter.module.scss";
import FilterCheckbox from "./FilterCheckbox";

interface IFilterBlockItems {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  stops: number[];
  setStops: (stops: (prev: number[]) => number[]) => void;
}
const FilterBlock: React.FC<IFilterBlockItems> = ({
  selectedCurrency,
  setSelectedCurrency,
  stops,
  setStops,
}) => {
  const currencies = ["RUB", "USD", "EUR"];
  const stopOptions = [
    { label: "Без пересадок", value: 0 },
    { label: "1 пересадка", value: 1 },
    { label: "2 пересадки", value: 2 },
    { label: "3 пересадки", value: 3 },
  ];

  const toggleStop = (value: number) => {
    setStops((prev) =>
      prev.includes(value)
        ? prev.filter((stop) => stop !== value)
        : [...prev, value]
    );
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.filterBlock}>
        <h2>Валюта</h2>
        <div className={styles.filterBlock_currencyButtons}>
          {currencies.map((currency) => (
            <CurrencyButton
              key={currency}
              currency={currency}
              isActive={currency === selectedCurrency}
              onClick={() => setSelectedCurrency(currency)}
              type={"currency"}
            />
          ))}
        </div>
      </div>

      <div className={styles.filterBlock}>
        <h2>Количество Пересадок</h2>
        <div className={styles.filterBlock_checkboxGroup}>
          {stopOptions.map(({ label, value }) => (
            <FilterCheckbox
              key={value}
              label={label}
              isChecked={stops.includes(value)}
              onChange={() => toggleStop(value)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterBlock;
