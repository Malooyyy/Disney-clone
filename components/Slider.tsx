import React from 'react'
import styles from '../styles/Slider.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Slider() {
	return (
		<>
			<div className={styles.slider}>
				<div className={styles.slider_top}>
					<img
						width={130}
						className={styles.slider_img}
						src='https://lumiere-a.akamaihd.net/v1/images/uk_xx_dcl-25th-anniversary_logo_f87ffcfb.png?region=0,0,195,272'
						alt='25'
					/>
					<p className={styles.slider_title}>
						L’estate prossima festeggiamo 25 anni di magiche vacanze sul mare.
					</p>
					<a href='/' className={styles.slider_button}>
						<p>prenota subito</p>
					</a>
				</div>
			</div>
		</>
	)
}

export default Slider
