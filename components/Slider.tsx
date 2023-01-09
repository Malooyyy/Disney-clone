import React from 'react'
import styles from '../styles/Slider.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Slider() {
	return (
		<>
			<Carousel autoPlay>
				<div className={styles.slider_one}>
					<button className={styles.slider_button}>
						<a href=''>prenato subito</a>
					</button>
				</div>
				<div className={styles.slider_two}>
					<button className={styles.slider_button}>
						<a href=''>prenato subito</a>
					</button>
				</div>
				<div className={styles.slider_thre}>
					<button className={styles.slider_button}>
						<a href=''>prenato subito</a>
					</button>
				</div>
			</Carousel>
		</>
	)
}

export default Slider
