import React from 'react'
import Brand from '../Brand/Brand';
import {NavLink} from 'react-router-dom'
import './Footer.css'
import {FaWhatsapp ,FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = ({links}) => {
  return (
    <>
      <div className="mt-5 container-fluid menu-container">
        <ul className="contMenuLink mb-0" >
          {/* en un futuro se creará un componente para estos links. */}
          {links.map((link, i) => <li onClick={() => window.scroll(0,0)} style={{ listStyle: "none" }} key={i} > <NavLink className="menuLink mx-4" to={link.route}>{link.section}</NavLink> </li>)}
        </ul>
      </div>
      <footer className='footer'>
        <div className="row container-fluid p-5 pb-1 text-white">
          <div className="col-xs-12 col-md-6 col-lg-3 padre-empresa-footer">
            <Brand img="./img/icon.png" title="TechStore"/>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Sobre Nosotros</p>
            <div className="mb-3">
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem repudianda.</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Contacto</p>
            <div className="mb-1">
              <a href="html/contacto.html" className="text-secondary text-decoration-none footer_hover">Quiero Preguntar</a>
            </div>
            <div className="mb-1">
              <a href="tel:3515524406" className="text-secondary text-decoration-none footer_hover">3515524406</a>
            </div>
            <div className="mb-1">
              <p className="text-secondary mb-0">Av.Rafael Nuñez 1912, Córdoba, Argentina.</p>
            </div>
            <div className="mb-1">
              <p className="text-secondary mb-0">Lunes a Viernes de 9:00 a 18:00. Sábados de 9:00 a 13:00</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 padre_redes">
            <p className="h5 mb-3">Redes Sociales</p>
            <div className="mb-3">
              <p className="text-white">Seguinos en nuestras redes sociales!</p>
            </div>
            {/* hacer componente */}
            <section className="redes-sociales">
                <div className="contenedor-redes">
                    <a className="twitter" rel="noreferrer" href="https://twitter.com/" target="_blank"><FaTwitter/></a>
                    <a className="github" rel="noreferrer" href="https://github.com/Diegoes420"
                        target="_blank"><FaGithub/></a>
                    <a className="instagram" rel="noreferrer" href="https://www.instagram.com/diego.escuderoo/"
                        target="_blank"><FaInstagram/></a>
                    <a className="whatsapp" rel="noreferrer" href="https://wa.me/3515524406" target="_blank"><FaWhatsapp/></a>
                </div>
            </section>
          </div>
          <div className="col-xs-12 pt-4">
            <hr />
            <p className="text-white text-center">© 2022 Escudero Diego - Todos los Derechos Resevados</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;