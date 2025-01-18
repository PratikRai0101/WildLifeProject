const stats = [
  { id: 1, name: 'Species Protected', value: '2,500+' },
  { id: 2, name: 'Conservation Projects', value: '500' },
  { id: 3, name: 'Volunteers Worldwide', value: '100,000+' },
  { id: 4, name: 'Funds Raised', value: '$50M' },
]

export default function StatsDashboard() {
  return (
    <section id="stats" className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Conservation Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

