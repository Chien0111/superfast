import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Mapcontact = () => {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "200hv",
        latitude: 21.0244246,
        longitude: 105.7938072,
        zoom: 12
    })
    return <div>
        <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // onViewportChange={(viewport => setViewport(viewport))}
        mapboxAccessToken="pk.eyJ1IjoiY2hpZW5ueCIsImEiOiJjbDZoenJnZ3EwcGM1M2pycGZqMXh6NG45In0.fkuhfQ-SljRS1o2dXenQhg"
        />
    </div>;
};

export default Mapcontact;