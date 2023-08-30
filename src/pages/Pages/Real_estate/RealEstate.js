import { useLoadScript } from "@react-google-maps/api";
import Map_component from "./MapComponent";

//Real estate component
export default function RealEstate() {
  // load the map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBSCFnTISCCE9KLqQH_NkfRK0czW1BkThE" // Add your API key
  });

  return isLoaded ? <Map_component /> : <div></div>;
}
