import styles from './icon.module.css';
import theme from '../../theme';

function Icon({
  icon = '',
  size = 26,
  color = 'mainBrand',
  type = 'solid'
}) {
  return (
    <span
      className={`${styles[type]}`}
      style={{ fontSize: size, color: theme.colors?.[color] || color }}
    >
      { icon }
    </span>
  )
}

export default Icon;
