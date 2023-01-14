import React from 'react'
import styles from '../styles/Article.module.scss'

const Article = () => {
	return (
		<div className={styles.article}>
			<div className={styles.art_box}>
				<img
					width={470}
					src='https://lumiere-a.akamaihd.net/v1/images/eu_ava-2_v1_c169_r_17be38f0.jpeg?region=0,0,1460,824'
					alt=''
				/>
				<div className={styles.art_gap}>
					<h2>Avatar: La Via dell'Acqua</h2>
					<p>Nei cinema</p>
					<span>FILM</span>
				</div>
			</div>
			<div className={styles.art_box}>
				<img
					width={470}
					src='https://lumiere-a.akamaihd.net/v1/images/it_strange-world_c196_r_c2dc65ff.jpeg?region=0,0,3840,2160&width=960'
					alt=''
				/>
				<div className={styles.art_gap}>
					<h2> Strange World – Un mondo misterioso </h2>
					<p>Nei cinema</p>
					<span>FILM</span>
				</div>
			</div>
			<div className={styles.art_box}>
				<img
					width={470}
					src='https://lumiere-a.akamaihd.net/v1/images/it_national-treasure-edge-of-history_c169_4e030ed5.jpeg?region=0,0,700,394'
					alt=''
				/>
				<div className={styles.art_gap}>
					<h2> Il mistero dei templari - La serie </h2>
					<p>Nei cinema</p>
					<span>FILM</span>
				</div>
			</div>
		</div>
	)
}

export default Article
