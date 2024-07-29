import { ReactNode } from 'react';

import classes from './GridLayout.module.scss';

interface CharacterGridProps {
  children?: ReactNode;
}

export const GridLayout = ({ children }: CharacterGridProps) => {
  return <div className={classes.gridLayoutRoot}>{children}</div>;
};
