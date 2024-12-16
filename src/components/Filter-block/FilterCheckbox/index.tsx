import styles from "./checkbox.module.scss";
interface IFilterCheckbox {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

const FilterCheckbox: React.FC<IFilterCheckbox> = ({
  label,
  isChecked,
  onChange,
}) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        aria-label={label}
      />
      <span>{label}</span>
    </label>
  );
};

export default FilterCheckbox;
