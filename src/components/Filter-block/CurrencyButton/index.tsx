import styles from "./button.module.scss";

interface ICurrencyButton {
  currency: string;
  isActive: boolean;
  onClick: () => void;
  type: "currency" | "price";
}
const CurrencyButton: React.FC<ICurrencyButton> = ({
  currency,
  isActive,
  onClick,
  type = "currency",
}) => {
  const buttonClass = `${styles.button} ${styles[type]} ${
    isActive ? styles.active : ""
  }`;
  return (
    <button onClick={onClick} aria-pressed={isActive} className={buttonClass}>
      {currency}
    </button>
  );
};

export default CurrencyButton;
