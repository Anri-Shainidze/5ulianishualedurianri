import { Dispatch, SetStateAction } from "react";
import Button from "../button/Button";
import StrengthMeter from "../strengthMeter/StrengthMeter";
import styles from "./form.module.css";

export default function Form({
  options,
  setOptions,
  generatePassword,
}: {
  options: Options;
  setOptions: Dispatch<SetStateAction<Options>>;
  generatePassword: () => void;
}) {
  const { length, upperCase, lowerCase, numbers, symbols } = options;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    generatePassword();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <div className={styles.char_length}>
          <label htmlFor="length">Character Length</label>

          <span>{length}</span>
        </div>

        <div className={styles.length_bg}>
          <div
            style={{
              height: "8px",
              width: (length / 20) * 98 + "%",
              background: "var(--clr-teal)",
            }}
          ></div>
        </div>

        <input
          type="range"
          name="length"
          id="length"
          className={styles.length_input}
          value={length}
          min={1}
          max={20}
          onChange={(e) =>
            setOptions({
              length: Number(e.target.value),
              upperCase,
              lowerCase,
              numbers,
              symbols,
            })
          }
        />
      </fieldset>

      <fieldset className={styles.options}>
        <label htmlFor="upper">
          <input
            type="checkbox"
            name="upper"
            id="upper"
            checked={upperCase}
            onChange={(e) =>
              setOptions({
                length,
                upperCase: e.target.checked,
                lowerCase,
                numbers,
                symbols,
              })
            }
          />

          <span>Include Uppercase Letters</span>
        </label>

        <label htmlFor="lower">
          <input
            type="checkbox"
            name="lower"
            id="lower"
            value="lower"
            checked={lowerCase}
            onChange={(e) =>
              setOptions({
                length,
                upperCase,
                lowerCase: e.target.checked,
                numbers,
                symbols,
              })
            }
          />

          <span>Include Lowercase Letters</span>
        </label>

        <label htmlFor="numbers">
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            value="numbers"
            checked={numbers}
            onChange={(e) =>
              setOptions({
                length,
                upperCase,
                lowerCase,
                numbers: e.target.checked,
                symbols,
              })
            }
          />

          <span>Include Numbers</span>
        </label>

        <label htmlFor="symbols">
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            value="symbols"
            checked={symbols}
            onChange={(e) =>
              setOptions({
                length,
                upperCase,
                lowerCase,
                numbers,
                symbols: e.target.checked,
              })
            }
          />

          <span>Include Symbols</span>
        </label>
      </fieldset>

      <StrengthMeter {...options} />

      <Button />
    </form>
  );
}
