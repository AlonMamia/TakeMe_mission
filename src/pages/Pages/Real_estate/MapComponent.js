import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

// our database
const markers = [
  {
    id: 1,
    name: "אלון מאמיה",
    position: { lat: 41.881832, lng: -87.623177 },
    phone_number: "972505997550",
  },
  {
    id: 2,
    name: "סיוון מנחם",
    position: { lat: 39.739235, lng: -104.99025 },
    phone_number: "972524518134",
  },
  {
    id: 3,
    name: "ישראל ישראלי",
    position: { lat: 34.052235, lng: -118.243683 },
    phone_number: "972505997550",
  },
  {
    id: 4,
    name: "ישראל ישראלי השני",
    position: { lat: 40.712776, lng: -74.005974 },
    phone_number: "972505997550",
  },
];

// map component
function MapComponent() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // visible the map and load the map bounds (borders) from our coordinations
  const handleOnLoad = (map) => {
    const google = window.google;
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    //google maps buitin component
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {/* creates markers list with components and then renders it */}
      {markers.map(({ id, name, position, phone_number }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {/* when marker selected, opens an InfoWindow, from this window, we can call or send whatsapp message to the marker's phone  */}
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <h1>{name}</h1>
                <a href={"tel:" + phone_number}> התקשר: </a>
                <br></br>
                <a href={"https://wa.me/" + phone_number}> שלח הודעה: </a>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default MapComponent;
