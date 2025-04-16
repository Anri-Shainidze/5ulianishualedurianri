import { useState, useEffect } from "react";
import styles from "./strengthMeter.module.css";

export default function StrengthMeter({
  length,
  upperCase,
  lowerCase,
  numbers,
  symbols,
}: {
  length: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
}) {
  const [strength, setStrength] = useState(1);

  useEffect(() => {
    const value =
      (upperCase ? 1 : 0) +
      (lowerCase ? 1 : 0) +
      (numbers ? 1 : 0) +
      (symbols ? 1 : 0);

    if (length < 8 || value === 0) {
      return setStrength(1);
    } else if (length > 16) {
      return setStrength(4);
    } else {
      const correctedValue = value + Math.round((length - 8) / 4);

      setStrength(correctedValue > 4 ? 4 : correctedValue);
    }
  }, [length, upperCase, lowerCase, numbers, symbols]);

  return (
    <div className={styles.strength_container}>
      <span>STRENGTH</span>

      <div className={styles.strength}>
        <span>
          {strength === 1 && "TOO WEAK!"}
          {strength === 2 && "WEAK"}
          {strength === 3 && "MEDIUM"}
          {strength === 4 && "STRONG"}
        </span>

        <div className={styles.segment_container}>
          <div
            className={styles.segment}
            data-filled={strength > 0}
            data-strength={strength}
          ></div>

          <div
            className={styles.segment}
            data-filled={strength > 1}
            data-strength={strength}
          ></div>

          <div
            className={styles.segment}
            data-filled={strength > 2}
            data-strength={strength}
          ></div>

          <div
            className={styles.segment}
            data-filled={strength > 3}
            data-strength={strength}
          ></div>
        </div>
      </div>
    </div>
  );
}
