import React from 'react'
import Logo from '../../assets/logo.png'

export default function Footer() {
	return (
		<footer className='footer'>
		<img src={Logo} alt="Kasa - agence de location d'appartements entre particuliers" className="footer_logo"/>
		  <p className='footer_copyright'>&copy; 2023 Kasa. Tous droits réservés.</p>
		</footer>
	)
}