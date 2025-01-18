import { Animal } from '../types/animal'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimalSidebarProps {
  animal: Animal | null
  onClose: () => void
}

export default function AnimalSidebar({ animal, onClose }: AnimalSidebarProps) {
  if (!animal) return null

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'critically endangered':
        return 'border-red-500'
      case 'endangered':
        return 'border-orange-500'
      case 'vulnerable':
        return 'border-yellow-500'
      default:
        return 'border-green-500'
    }
  }

  return (
    <AnimatePresence>
      {animal && (
        <motion.div
          className="absolute top-4 right-4 z-20 bg-white rounded-lg shadow-md p-6 w-96 max-h-[calc(100vh-2rem)] overflow-y-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {animal.species}
          </motion.h2>
          <motion.div
            className={`mb-4 rounded-md overflow-hidden border-4 ${getStatusColor(animal.conservationStatus)}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={animal.image || "/placeholder.svg"}
              alt={animal.species}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={`inline-block px-2 py-1 rounded-full text-white text-sm font-semibold ${getStatusColor(animal.conservationStatus)}`}>
              {animal.conservationStatus}
            </span>
          </motion.div>
          <motion.p
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <strong>Population:</strong> {animal.population.toLocaleString()}
          </motion.p>
          <motion.p
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <strong>Habitat:</strong> {animal.habitat}
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {animal.description}
          </motion.p>
          <motion.div
            className="mt-4 p-4 bg-green-100 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-2">How You Can Help</h3>
            <ul className="list-disc list-inside">
              <li>Donate to conservation efforts</li>
              <li>Spread awareness about {animal.species}</li>
              <li>Support sustainable practices</li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

