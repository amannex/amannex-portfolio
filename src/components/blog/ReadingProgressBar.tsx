import styles from "./ReadingProgressBar.module.css";

export default function ReadingProgressBar({ progress }: { progress: number }) {
  return (
    <div
      className={styles.bar}
      style={{ transform: `scaleX(${progress / 100})` }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Article reading progress"
    />
  );
}
