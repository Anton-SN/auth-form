import React from 'react';
import styles from './styles.module.css';

const Input = ({ field, form, title, type = 'text' }) => {
  const { name } = field;
  const { setFieldValue } = form;

  return (
  <div className={styles.container}>
    <label className={styles.label}>{title}</label>
    <input className={styles.input} type={type} onChange={({ target: { value}}) => setFieldValue(name, value ? value : null)} />
  </div>
  )
};

export default Input;
