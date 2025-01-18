'use client'

import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MapControls from '../components/MapControls'
import AnimalSidebar from '../components/AnimalSidebar'
import { Animal } from '../types/animal'
import { motion } from 'framer-motion'

const animalData: Animal[] = [
  {
    id: 1,
    species: 'African Elephant',
    lat: -2.4833,
    lng: 34.8333,
    population: 415000,
    conservationStatus: 'Vulnerable',
    habitat: 'Savanna',
    description: 'The African elephant is the largest land animal on Earth. They are keystone species, playing an important role in maintaining the biodiversity of the ecosystems in which they live.',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    species: 'Bengal Tiger',
    lat: 26.8467,
    lng: 80.9462,
    population: 2500,
    conservationStatus: 'Endangered',
    habitat: 'Tropical and subtropical moist broadleaf forests',
    description: 'The Bengal tiger is the most numerous tiger subspecies. Its populations are primarily found in India, with smaller populations in Bangladesh, Nepal, Bhutan, China and Myanmar.',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    species: 'Giant Panda',
    lat: 30.7333,
    lng: 104.1333,
    population: 1864,
    conservationStatus: 'Vulnerable',
    habitat: 'Temperate broadleaf and mixed forests',
    description: 'The giant panda, also known as the panda bear, is a bear native to South Central China. It is characterised by its bold black-and-white coat and rotund body.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    species: 'Sumatran Orangutan',
    lat: 3.5333,
    lng: 98.6667,
    population: 14000,
    conservationStatus: 'Critically Endangered',
    habitat: 'Tropical and subtropical moist broadleaf forests',
    description: 'The Sumatran orangutan is one of three species of orangutan. Found only on the island of Sumatra in Indonesia, it is rarer than the Bornean orangutan but more common than the recently identified Tapanuli orangutan.',
    image: 'https://images.unsplash.com/photo-1580867532901-7e3707f178ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    species: 'Black Rhino',
    lat: -1.2921,
    lng: 36.8219,
    population: 5500,
    conservationStatus: 'Critically Endangered',
    habitat: 'Semi-Desert Savannah',
    description: 'The black rhinoceros is a species of rhinoceros native to eastern and southern Africa. Although it is referred to as black, its colors vary from brown to grey.',
    image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    species: 'Sea Turtle',
    lat: 21.3069,
    lng: -157.8583,
    population: 6500000,
    conservationStatus: 'Endangered',
    habitat: 'Tropical and subtropical oceans',
    description: 'Sea turtles are reptiles of the order Testudines and of the suborder Cryptodira. They can be found in all the world\'s oceans except the Arctic Ocean.',
    image: 'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    species: 'Snow Leopard',
    lat: 35.8617,
    lng: 76.5150,
    population: 4080,
    conservationStatus: 'Vulnerable',
    habitat: 'Alpine and subalpine zones',
    description: 'The snow leopard, also known as the ounce, is a felid in the genus Panthera native to the mountain ranges of Central and South Asia.',
    image: 'https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 8,
    species: 'Blue Whale',
    lat: -34.6037,
    lng: -58.3816,
    population: 25000,
    conservationStatus: 'Endangered',
    habitat: 'All major oceans',
    description: 'The blue whale is a marine mammal belonging to the baleen whale suborder Mysticeti. Reaching a maximum confirmed length of 29.9 meters and weight of 199 tonnes, it is the largest animal known to have ever existed.',
    image: 'https://images.unsplash.com/photo-1566235102945-d231f3ea963f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 9,
    species: 'Mountain Gorilla',
    lat: -1.4823,
    lng: 29.6334,
    population: 1063,
    conservationStatus: 'Endangered',
    habitat: 'Mountain forests',
    description: 'The mountain gorilla is one of the two subspecies of the eastern gorilla. It is listed as endangered by the IUCN as of 2018.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 10,
    species: 'Polar Bear',
    lat: 78.2333,
    lng: -15.6333,
    population: 22000,
    conservationStatus: 'Vulnerable',
    habitat: 'Sea ice and Arctic tundra',
    description: 'The polar bear is a hypercarnivorous bear whose native range lies largely within the Arctic Circle. It is the largest extant bear species, as well as the largest extant land carnivore.',
    image: 'https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
]

export default function InteractiveMapPage() {
  const mapRef = useRef<L.Map | null>(null)
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleFilterChange = (status: string) => {
    setActiveFilters(prev =>
      prev.includes(status)
        ? prev.filter(f => f !== status)
        : [...prev, status]
    )
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mapRef.current) {
        mapRef.current = L.map('map', {
          center: [20, 0],
          zoom: 3,
          zoomControl: false,
          scrollWheelZoom: true,
          dragging: true,
          tap: true,
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current)

        // Add zoom control to the bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current)
      }

      const updateMarkers = () => {
        if (!mapRef.current) return

        mapRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            mapRef.current!.removeLayer(layer)
          }
        })

        const filteredAnimals = activeFilters.length > 0
          ? animalData.filter(animal => activeFilters.includes(animal.conservationStatus))
          : animalData

        const getMarkerClass = (status: string) => {
          switch (status.toLowerCase()) {
            case 'critically endangered':
              return 'marker-critically-endangered'
            case 'endangered':
              return 'marker-endangered'
            case 'vulnerable':
              return 'marker-vulnerable'
            default:
              return ''
          }
        }

        filteredAnimals.forEach((animal) => {
          const icon = L.divIcon({
            className: `custom-icon ${getMarkerClass(animal.conservationStatus)}`,
            html: `<div style="background-image: url(${animal.image})" class="marker ${getMarkerClass(animal.conservationStatus)}"></div>`,
            iconSize: [50, 50],
          })

          L.marker([animal.lat, animal.lng], { icon })
            .addTo(mapRef.current!)
            .on('click', () => setSelectedAnimal(animal))
        })
      }

      updateMarkers()

      // Ensure the map fills the container
      const resizeMap = () => {
        if (mapRef.current) {
          mapRef.current.invalidateSize()
        }
      }
      window.addEventListener('resize', resizeMap)
      resizeMap()

      return () => {
        window.removeEventListener('resize', resizeMap)
        if (mapRef.current) {
          mapRef.current.remove()
          mapRef.current = null
        }
      }
    }
  }, [activeFilters])

  const handleLayerChange = (layer: string) => {
    if (mapRef.current) {
      mapRef.current.eachLayer((mapLayer) => {
        if (mapLayer instanceof L.TileLayer) {
          mapRef.current!.removeLayer(mapLayer)
        }
      })

      if (layer === 'satellite') {
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(mapRef.current)
      } else {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current)
      }
    }
  }

  const handleSearch = (query: string) => {
    const animal = animalData.find(a => a.species.toLowerCase().includes(query.toLowerCase()))
    if (animal && mapRef.current) {
      mapRef.current.setView([animal.lat, animal.lng], 6, { animate: true, duration: 1 })
      setSelectedAnimal(animal)
    }
  }

  return (
    <motion.div 
      className="h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0">
        <div id="map" className="w-full h-full" />
      </div>
      <div className="relative z-10">
        <MapControls onLayerChange={handleLayerChange} onSearch={handleSearch} onFilterChange={handleFilterChange} />
      </div>
      <AnimalSidebar animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
    </motion.div>
  )
}

