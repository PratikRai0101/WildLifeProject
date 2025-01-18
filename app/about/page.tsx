import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About WildLife Connect</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At WildLife Connect, our mission is to protect and preserve the world's most endangered species and their habitats. We strive to create a global community of conservationists, researchers, and nature enthusiasts working together to ensure a sustainable future for all wildlife.
        </p>
        <Image 
          src="https://images.unsplash.com/photo-1541414779316-956a5084c0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
          alt="Wildlife conservation"
          width={1400}
          height={600}
          className="rounded-lg shadow-md"
        />
      </section>
      
      <section className="mb-12" id="team">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
            { name: 'John Smith', role: 'Head of Conservation', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
            { name: 'Emily Brown', role: 'Lead Researcher', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center">
              <Image 
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section id="partners">
        <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
            'https://images.unsplash.com/photo-1614680376739-8568f7989bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
          ].map((logo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
              <Image 
                src={logo || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                width={150}
                height={75}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

