"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";

export interface Location {
  id: number;
  name: string;
  coords: [number, number];
  image: string;
}

const isClient = typeof window !== "undefined";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "/images/marker.png",
  iconSize: [35, 45],
  iconAnchor: [17, 42],
});

const locations: Location[] = [
  {
    id: 1,
    name: "حديقة المنتزه",
    coords: [30.01, 31.23],
    image: "/images/hero/1.jpeg",
  },
  {
    id: 2,
    name: "حديقة الأزهر",
    coords: [30.04, 31.28],
    image: "/images/hero/1.jpeg",
  },
  {
    id: 3,
    name: "حديقة الأورمان",
    coords: [30.06, 31.21],
    image: "/images/hero/1.jpeg",
  },
];

export default function MapView() {
  const [mounted, setMounted] = useState(false);
  // const [selectedLocation, setSelectedLocation] = useState<Location | null>(
  //   null
  // );
  // const [distances, setDistances] = useState<
  //   { name: string; distance: number }[]
  // >([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const calculateDistances = (selected: Location) => {
  //   const distances = locations
  //     .filter((loc) => loc.id !== selected.id)
  //     .map((loc) => ({
  //       name: loc.name,
  //       distance: getDistance(selected.coords, loc.coords),
  //     }));
  //   setDistances(distances);
  // };

  // const getDistance = (
  //   [lat1, lon1]: [number, number],
  //   [lat2, lon2]: [number, number]
  // ) => {
  //   const R = 6371; // نصف قطر الأرض بالكيلومترات
  //   const dLat = ((lat2 - lat1) * Math.PI) / 180;
  //   const dLon = ((lon2 - lon1) * Math.PI) / 180;
  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos((lat1 * Math.PI) / 180) *
  //       Math.cos((lat2 * Math.PI) / 180) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);
  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   return parseFloat((R * c).toFixed(2)); // ✅ إرجاع قيمة رقمية (number) بدلًا من نص
  // };

  if (!mounted || !isClient) return <p>Loading map...</p>;

  return (
    <MapContainer center={[30.02, 31.24]} zoom={13} className="map-container">
      <TileLayer
        url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        attribution="Map data &copy; Google"
      />

      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.coords}
          icon={customIcon}
          // eventHandlers={{
          //   click: () => {
          //     setSelectedLocation(loc);
          //     calculateDistances(loc);
          //   },
          // }}
        >
          <Popup>
            <div className="popUpflex">
              <div className="parkpopdata">
                <h6>{loc.name}</h6>
                <div className="itR">
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span>{"200 تقييم"}</span>
                </div>
                {/* {selectedLocation?.id === loc.id && (
                  <ul>
                    {distances.map((d, index) => (
                      <li key={index}>
                        {d.name}: {d.distance} كم
                      </li>
                    ))}
                  </ul>
                )} */}
              </div>
              <Image
                src={loc.image}
                alt={loc.name}
                width={100}
                height={60}
                className="rounded-md"
              />
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline positions={locations.map((loc) => loc.coords)} color="orange" />
    </MapContainer>
  );
}
