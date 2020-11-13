import React from 'react'
import map from '../img/map-marker.svg'
import '../styles/orphanage-map.css'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {  TileLayer } from 'react-leaflet'
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
            {/* <Map 
                center={[-22.8732024,-43.339805]}
                zoom={15}
                style={{width: '100%', height:'100%'}}
            >

            </Map> */}

        <Link className="create_orphanage" to="">
            <FiPlus size={32} color="#FFF"/>
        </Link>

        </div>
        
       
    )
}

export default OrphanageMap