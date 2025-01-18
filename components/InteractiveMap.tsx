import Image from 'next/image'
import Link from 'next/link'

export default function InteractiveMap() {
  return (
    <section id="map" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Interactive Wildlife Map</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Link href="/map" className="block relative">
            <Image 
              src="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Interactive Map" 
              width={1200} 
              height={600} 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-bold">Explore Full Map</span>
            </div>
          </Link>
          <p className="mt-4 text-center text-gray-600">
            Explore wildlife migration patterns, habitat ranges, and conservation hotspots.
          </p>
        </div>
      </div>
    </section>
  )
}

