import React from 'react';
import styles from './styles.module.css';

const Input = ({ title, field, form }) => {
  const { name } = field;
  const { setFieldValue } = form;
  console.log(field, form)
  return (
  <div className={styles.container}>
    <label className={styles.label}>{title}</label>
    <input className={styles.input} onChange={({ target: { value}}) => setFieldValue(name, value ? value : null)} />
  </div>
  )
};

export default Input;
