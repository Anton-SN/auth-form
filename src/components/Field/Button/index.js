import React, { useState }  from 'react';
import styles from './styles.module.css';

const Button = ({ isValid }) => {
  const [isHover, setIsHovering] = useState(false)

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const setHoverStyles = () => {
    const showButton = { opacity: 1, cursor: 'pointer' }
    const hideButton = { opacity: 0, cursor: 'auto' }

    if (isHover) return isValid ? showButton : hideButton;
    return showButton;
  }

  return (
    <input
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.input}
      type="submit"
      value="Войти"
      style={setHoverStyles()} />
  )
};

export default Button;
