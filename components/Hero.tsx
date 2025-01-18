import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
        alt="Lush green forest"
        width={1600}
        height={600}
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Connect with Wildlife, Protect Our Planet</h1>
          <p className="text-xl mb-8">Explore, learn, and contribute to wildlife conservation efforts around the globe.</p>
          <div className="space-x-4">
            <Link href="/animals" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300">
              Discover Animals
            </Link>
            <Link href="/donate" className="bg-white text-green-500 px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition duration-300">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

