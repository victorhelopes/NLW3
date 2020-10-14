import React from 'react'
import { Link } from 'react-router-dom'
import  { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerKImg from '../images/map-marker.svg'

import '../styles/pages/orphanages.css'

function OrphanagesMap(){
    return (
        <div id = "page-map">
            <aside>
                <header>
                    <img src = {mapMarkerKImg} alt = ""/>
                
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criancas estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Araxa</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map
                center = {[-19.599415,-46.9382473]}
                zoom = {15}
                style = {{width: '100%', height: '100%'}}
            >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png "></TileLayer>
            </Map>

            <Link to ="" className = "create-orphanage">
                <FiPlus size= {32} color = "#FFF"/> 
            </Link>
        </div>

    )

}

export default OrphanagesMap;