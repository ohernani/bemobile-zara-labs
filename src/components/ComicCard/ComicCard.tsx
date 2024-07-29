import classes from './ComicCard.module.scss';

interface ComicCardProps {
  imgUrl: string;
  title: string;
  year: string;
}

export const ComicCard = ({ imgUrl, title, year }: ComicCardProps) => {
  return (
    <div className={classes.comicCardRoot}>
      <img className={classes.comicCardRoot__img} src={imgUrl} alt={`${title + '_comic'}`} />
      <h4 className={classes.comicCardRoot__title}>{title}</h4>
      <p className={classes.comicCardRoot__year}>{year}</p>
    </div>
  );
};
