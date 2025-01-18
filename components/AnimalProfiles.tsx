import Image from 'next/image'
import Link from 'next/link'

const animals = [
  { id: 1, name: 'African Elephant', status: 'Vulnerable', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 2, name: 'Bengal Tiger', status: 'Endangered', image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 3, name: 'Giant Panda', status: 'Vulnerable', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 4, name: 'Sumatran Orangutan', status: 'Critically Endangered', image: 'https://images.unsplash.com/photo-1580867532901-7e3707f178ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 5, name: 'Black Rhino', status: 'Critically Endangered', image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  { id: 6, name: 'Sea Turtle', status: 'Endangered', image: 'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
]

export default function AnimalProfiles() {
  return (
    <section id="animals" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Animals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div key={animal.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <Image src={animal.image || "/placeholder.svg"} alt={animal.name} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
                <p className="text-gray-600 mb-4">Conservation Status: {animal.status}</p>
                <Link href={`/animals/${animal.id}`} className="text-green-500 hover:text-green-600 font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

