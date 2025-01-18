import { useState } from "react";
import { motion } from "framer-motion";

interface MapControlsProps {
  onLayerChange: (layer: string) => void;
  onSearch: (query: string) => void;
  onFilterChange: (status: string) => void;
}

export default function MapControls({
  onLayerChange,
  onSearch,
  onFilterChange,
}: MapControlsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setError("Please enter an animal name");
    } else {
      setError("");
      onSearch(searchQuery);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ width: "50px", height: "50px" }}
      animate={{
        width: isExpanded ? "350px" : "50px",
        height: isExpanded ? "auto" : "50px",
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleExpand}
        className="w-full h-12 flex items-center justify-center bg-blue-500 text-white"
      >
        {isExpanded ? "Close" : "Menu"}
      </button>
      {isExpanded && (
        <motion.div
          className="p-4 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Map Style
            </label>
            <div className="flex space-x-2">
              <button
                onClick={() => onLayerChange("satellite")}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Satellite
              </button>
              <button
                onClick={() => onLayerChange("streets")}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Streets
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Conservation Status
            </label>
            <div className="flex flex-col space-y-2">
              {[
                {
                  status: "Critically Endangered",
                  color: "bg-red-500",
                  hoverColor: "hover:bg-red-600",
                  dotColor: "bg-red-700",
                },
                {
                  status: "Endangered",
                  color: "bg-orange-500",
                  hoverColor: "hover:bg-orange-600",
                  dotColor: "bg-orange-700",
                },
                {
                  status: "Vulnerable",
                  color: "bg-yellow-500",
                  hoverColor: "hover:bg-yellow-600",
                  dotColor: "bg-yellow-700",
                },
              ].map(({ status, color, hoverColor, dotColor }) => (
                <button
                  key={status}
                  onClick={() => onFilterChange(status)}
                  className={`px-3 py-1 text-white rounded transition duration-300 flex items-center ${color} ${hoverColor}`}
                >
                  <div
                    className={`w-4 h-4 rounded-full mr-2 ${dotColor}`}
                  ></div>
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search Animals
            </label>
            <div className="flex flex-col">
              <div className="flex">
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setError("");
                  }}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter animal name"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300"
                >
                  Search
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
