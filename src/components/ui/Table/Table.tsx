import React from 'react';
import styles from './Table.module.css';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export const Table: React.FC<TableProps> = ({ children, className, ...props }) => (
  <div className={styles.tableContainer}>
    <table className={[styles.table, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </table>
  </div>
);

export const TableHeader: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ children, className, ...props }) => (
  <th className={[styles.th, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </th>
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, className, ...props }) => (
  <tr className={[styles.tr, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </tr>
);

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ children, className, ...props }) => (
  <td className={[styles.td, className].filter(Boolean).join(' ')} {...props}>
    {children}
  </td>
);
