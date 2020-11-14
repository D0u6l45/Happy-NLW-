import React from 'react'
import map from '../img/map-marker.svg'
import '../styles/orphanage-map.css'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
 function OrphanageMap(){
    return(

        <div id="page-map">
            <aside>
                <header>
                    <img src={map}alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>

                </header>

                <footer>

                    <strong>Rio de Janeiro</strong>
                    <span>Madureira</span>

                </footer>



            </aside>
             <MapContainer 
                center={[-22.8732024,-43.339805]}
                zoom={15}
                style={{width: '100%', height:'100%'}}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}  />
            </MapContainer> 

        <Link className="create_orphanage" to="">
            <FiPlus size={32} color="#FFF"/>
        </Link>

        </div>
        
       
    )
}

export default OrphanageMap