import { ReactNode } from 'react';

import classes from './CharacterGrid.module.scss';

interface CharacterGridProps {
  children?: ReactNode;
}

export const CharacterGrid = ({ children }: CharacterGridProps) => {
  return <ul className={classes.characterGrid}>{children}</ul>;
};
