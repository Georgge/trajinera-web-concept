import Icon from '../Icon/Icon';
import styles from './button.module.css';

function Button({ title, type, size, iconPrefix, iconSufix }) {
  const classes = `${styles.button} ${styles[type]} ${styles[size]}`;
  return (
    <button className={classes}>
      {iconPrefix ? (
        <Icon
          icon={iconPrefix}
          className={styles['icon-prefix']}
          color="pureWhite"
          size={17}
        />
      ) : null}
      {title}
      {iconSufix ? (
        <Icon
          icon={iconSufix}
          className={styles['icon-sufix']}
          color="pureWhite"
          size={17}
        />
      ) : null}
    </button>
  );
}
export default Button;
Button.defaultProps = {
  title: 'Title',
  type: 'primary',
  size: 'normal',
  iconPrefix: '',
  iconSufix: '',
};
