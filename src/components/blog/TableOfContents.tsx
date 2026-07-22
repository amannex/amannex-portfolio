import styles from "./TableOfContents.module.css";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings?: TocItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}

export default function TableOfContents({
  headings = [],
  activeId,
  onItemClick,
}: TableOfContentsProps) {
  if (!headings.length) return null;

  return (
    <nav className={styles.widget} aria-label="Table of contents">
      <p className={styles.heading}>On this page</p>

      <ol className={styles.list}>
        {headings.map(({ id, text, level }) => {
          const isActive = id === activeId;
          const isH3 = level === 3;

          return (
            <li
              key={id}
              className={`${styles.item} ${isH3 ? styles.itemH3 : ""}`}
            >
              <button
                type="button"
                onClick={() => onItemClick(id)}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "location" : undefined}
                aria-label={`Jump to: ${text}`}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
