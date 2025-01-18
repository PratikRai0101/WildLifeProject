import Link from 'next/link'

const resources = [
  { id: 1, title: 'Wildlife Conservation 101', type: 'Article', link: '/education/wildlife-conservation-101' },
  { id: 2, title: 'The Last Rhinos', type: 'Documentary', link: '/education/the-last-rhinos' },
  { id: 3, title: 'Saving the Oceans', type: 'Expert Talk', link: '/education/saving-the-oceans' },
]

export default function EducationalResources() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Learn About Conservation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.type}</p>
              <Link href={resource.link} className="text-green-500 hover:text-green-600 font-medium">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

