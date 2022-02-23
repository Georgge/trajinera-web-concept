import styles from './icon.module.css';
import theme from '../../theme';

function Icon({
  icon = '',
  size = 48,
  color = '#FFFFFF',
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
