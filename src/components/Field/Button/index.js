import React, { useState }  from 'react';
import styles from './styles.module.css';

const getError = errors => {
  const values = Object.values(errors);
  if (values.length === 0) return null;
  return values[0]
}

const Button = ({ errors }) => {
  const [isHover, setIsHovering] = useState(false)

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const setHoverInputStyles = () => {
    const showButton = { transform: 'perspective(600px) rotateY(0deg)' }
    const hideButton = { transform: 'perspective(600px) rotateY(-180deg)' }

    if (isHover) return error === null ? showButton : hideButton;
    return showButton;
  }

  const setHoverErrorStyles = () => {
    const showError = { transform: 'perspective(600px) rotateY(0deg)' }
    const hideError = { transform: 'perspective(600px) rotateY(180deg)' }

    if (isHover) return error !== null ? showError : hideError;
    return hideError;
  }

  const error = getError(errors);

  return (
  <div className={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {/*<div className={styles.card}>*/}
      <input
        className={styles.input}
        type="submit"
        value="Войти"
        style={setHoverInputStyles()}
      />
      <div className={styles.error} style={setHoverErrorStyles()}>
        <span>{error}</span>
      </div>
    {/*</div>*/}
  </div>
  )
};

export default Button;
