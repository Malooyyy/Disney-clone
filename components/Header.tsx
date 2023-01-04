import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/Header.module.scss'

const Header = () => {
	const [nav, setNav] = useState<boolean>()
	return (
		<>
			<header className={styles.header}>
				<div className={styles.box}>
					<div className={styles.logo_image}>
						<img
							width={95}
							height={40}
							src='https://static-mh.content.disney.io/matterhorn/assets/logos/disney_logo_dark-baa807690db7.png'
							alt='logo'
						/>
					</div>
					<ul
						className={
							nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
						}
					>
						<li>
							<a href='##'>disney +</a>
						</li>
						<li>
							<a href='##'>shop</a>
						</li>
						<li>
							<a href='##'>movies</a>
						</li>
						<li>
							<a href='##'>shows</a>
						</li>
						<li>
							<a href='##'>parks</a>
						</li>
						<li>
							<a href='##'>disney 100</a>
						</li>
					</ul>
					<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
						{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
					</div>
				</div>
			</header>

			<header className={styles.header_module}>
				<span className={styles.header_module__title}>
					THE GREATEST STORIES, ALL IN ONE PLACE.| SUBSCRIVE NOW
				</span>
				<img
					src='https://lumiere-a.akamaihd.net/v1/images/disneyplus-white_50264639.svg?region=0,0,48,36'
					alt='mod'
				/>
			</header>
		</>
	)
}

export default Header
