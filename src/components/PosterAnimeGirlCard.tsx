import cn from "classnames";
import styles from "./PosterAnimeGirlCard.module.scss";

const PosterAnimeGirlCard = () => {
	return (
		<div className={styles.card}>
			<InnerPosterBlock />
			<div className='px-[40px] mb-[40px] w-[300px] font-bold italic'>
				{
                    "Ohaiyo, Sych-chan!"
				}
			</div>
		</div>
	);
};

const InnerPosterBlock = () => {
	return (
		<div className={styles.posterInnerBlock}>
			<div className={styles.girl} />
			<div className={styles.posterMainTextContainer}>
				<PosterMainText />
			</div>
			<div className={styles.bgRectangles}>
				<div className={styles.bgRecSmall} />
				<div className={styles.bgRecSmall} />
				<div className={styles.bgRecBig} />
			</div>
		</div>
	);
};

const PosterMainText = () => {
	const posterText = "J75 <3";
	return (
		<div className={styles.posterMainText}>
			<div className={cn("z-[11]", styles.text, styles.outlineText)}>
				{posterText}
			</div>
			<div className={cn("z-[9]", styles.text)}>{posterText}</div>
		</div>
	);
};

export default PosterAnimeGirlCard;
