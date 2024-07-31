import React from 'react';
import styles from './styles.module.css';

const Input = ({ field, form, title, type = 'text' }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={name}>{title}</label>
    <input className={styles.input} id={name} type={type} value={value} onChange={({ target: { value }}) => setFieldValue(name, value)} />
  </div>
  )
};

export default Input;
