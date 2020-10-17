import React, { useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import  { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerKImg from '../images/map-marker.svg'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=>{
        api.get('orphanages').then(res=>{
            setOrphanages(res.data);
        })
    },[]);

    return (
        <div id = "page-map">
            <aside>
                <header>
                    <img src = {mapMarkerKImg} alt = "Happy"/>
                
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
            <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}/>
            
            {orphanages.map(orphanage=>{
                return (
                    <Marker
                        key = {orphanage.id}
                        icon = {mapIcon}
                        position = {[orphanage.latitude,orphanage.longitude]}
                    >
                        <Popup closebutton = {false} minWidth = { 240 } maxWidth = { 240 } className = "map-popup">
                            {orphanage.name}
                            <Link to = {`/orphanages/${orphanage.id}`}>
                                <FiArrowRight  size={20} color = "#FFF"/> 
                            </Link>
                        </Popup>
                    </Marker>
                )
            })}
            </Map>

            <Link to ="/orphanages/create" className = "create-orphanage">
                <FiPlus size= {32} color = "#FFF"/> 
            </Link>
        </div>

    )

}

export default OrphanagesMap;