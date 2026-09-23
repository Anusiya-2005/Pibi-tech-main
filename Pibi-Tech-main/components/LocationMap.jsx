"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/map";
import Image from "next/image";

const offices = [
  // 🌍 Global Offices
  {
    id: 1,
    name: "USA – Texas",
    lat: 30.2672,
    lng: -97.7431,
    icon: "/usa.png",
  },
  {
    id: 2,
    name: "Canada – Ontario",
    lat: 43.6532,
    lng: -79.3832,
    icon: "/canada.png",
  },
  {
    id: 3,
    name: "Germany",
    lat: 51.1657,
    lng: 10.4515,
    icon: "/germany.png",
  },
  {
    id: 4,
    name: "UAE – Abu Dhabi",
    lat: 24.4539,
    lng: 54.3773,
    icon: "/uae.png",
  },
  {
    id: 5,
    name: "Chennai",
    lat: 13.0827,
    lng: 80.2707,
    icon: "/madurai.png",
  },
  {
    id: 6,
    name: "Coimbatore",
    lat: 11.0168,
    lng: 76.9558,
    icon: "/coimbatore.png",
  },
  {
    id: 7,
    name: "Madurai",
    lat: 9.9252,
    lng: 78.1198,
    icon: "/madurai.png",
  },
];

export function LocationMap() {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <Map
        center={[0, 20]}
        zoom={0}
        interactive={false}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        keyboard={false}
        pitchWithRotate={false}
        touchZoomRotate={false}
      >
        {offices.map((office) => (
          <MapMarker
            key={office.id}
            latitude={office.lat}
            longitude={office.lng}
          >
            <MarkerContent>
              <div className="flex items-center justify-center size-1 md:size-2 rounded-full bg-[#1f6fb2] shadow-lg"></div>
            </MarkerContent>

            <MarkerTooltip>
              <span className="text-sm font-medium">{office.name}</span>
            </MarkerTooltip>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
