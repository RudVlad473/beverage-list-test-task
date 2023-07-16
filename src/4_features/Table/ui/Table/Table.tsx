import { FC } from "react"

import styles from "./Table.module.scss"

type TableProps = {
  title?: string
  headers: string[]
  rows: (string | number | boolean)[][]
}

export const Table: FC<TableProps> = ({ title, headers, rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        {title && (
          <tr className={styles.tr}>
            <th className={styles.th} colSpan={headers.length}>
              {title.toUpperCase()}
            </th>
          </tr>
        )}
        <tr className={styles.tr}>
          {headers.map((header, index) => (
            <th className={styles.th} key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.tr}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.td}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
