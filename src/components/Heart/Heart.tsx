import heartSelected from '../../assets/heart_selected.png';
import heartUnselected from '../../assets/heart_unselected.png';
import { getClassNames } from '../../shared/utils';
import classes from './Heart.module.scss';

interface HeartProps {
  selected: boolean;
  value?: number;
  onClick?: (event: any) => void;
  className?: string;
}

export const Heart = ({ value, selected, onClick, className = '' }: HeartProps) => {
  const heartRoot = getClassNames({
    [classes.heartRoot]: true,
    [className]: !!className,
  });
  const heartImg = selected ? heartSelected : heartUnselected;
  return (
    <div className={heartRoot} onClick={onClick}>
      <img className={classes.heartRoot__img} src={heartImg} alt="favorite" />
      <span className={classes.heartRoot__value}>{value}</span>
    </div>
  );
};
