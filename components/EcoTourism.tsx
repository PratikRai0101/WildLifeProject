import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  { id: 1, name: 'Amazon Rainforest', country: 'Brazil', image: 'https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 2, name: 'Serengeti National Park', country: 'Tanzania', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 3, name: 'Great Barrier Reef', country: 'Australia', image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
]

export default function EcoTourism() {
  return (
    <section id="eco-tourism" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Eco-Tourism Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <Image src={destination.image || "/placeholder.svg"} alt={destination.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.country}</p>
                <Link href={`/eco-tourism/${destination.id}`} className="text-green-500 hover:text-green-600 font-medium">
                  Explore &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

