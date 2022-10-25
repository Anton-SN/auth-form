import React, { useState }  from 'react';
import styles from './styles.module.css';

const getError = errors => {
  const values = Object.values(errors);
  if (values.length === 0) return null;
  return values[0]
}

const getCurrentStyles = (isHover, error, hide) => {
  const showButton = { transform: 'perspective(600px) rotateY(0deg)' }
  const hideButton = { transform: 'perspective(600px) rotateY(-180deg)' }

  const showError = { transform: 'perspective(600px) rotateY(0deg)' }
  const hideError = { transform: 'perspective(600px) rotateY(180deg)' }

  const defaultState = { button: showButton, error: hideError };
  const errorExist = { button: hideButton, error: showError }

  if (isHover) return error === null || hide ? defaultState : errorExist;
  return defaultState;
}

const setHoverContainerStyles = (isHover, hide) => {
  const showButton = { opacity: 1, cursor: 'pointer' }
  const hideButton = { opacity: 0, cursor: 'auto' }

  if (isHover) return hide ? hideButton : showButton;
  return showButton;
}

const Button = ({ errors, hide }) => {
  const [isHover, setIsHovering] = useState(false)

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const currentError = getError(errors);
  const { button, error } = getCurrentStyles(isHover, currentError, hide);

  return (
  <div className={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={setHoverContainerStyles(isHover, hide)}>
    <input
      className={styles.input}
      type="submit"
      value="Войти"
      style={button}
    />
    <div className={styles.error} style={error}>
      <span>{currentError}</span>
    </div>
  </div>
  )
};

export default Button;
