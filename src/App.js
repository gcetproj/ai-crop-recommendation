// src/App.js
import { useState } from "react";

function App() {
  // ... paste the entire component code
  //  here, replacing CropRecommendationApp with App

  // Form state
  const [formData, setFormData] = useState({
    soilType: "",
    climateZone: "",
    region: "",
    annualRainfall: "",
    temperatureRange: "",
    soilPH: "",
    farmingExperience: "",
    budget: "",
    farmSize: "",
    waterAvailability: "",
    season: "",
    previousCrops: "",
  });

  // Results state
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Generate mock recommendations based on inputs
      const mockRecommendations = generateMockRecommendations(formData);
      setRecommendations(mockRecommendations);
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  // Reset form and results
  const handleReset = () => {
    setFormData({
      soilType: "",
      climateZone: "",
      region: "",
      annualRainfall: "",
      temperatureRange: "",
      soilPH: "",
      farmingExperience: "",
      budget: "",
      farmSize: "",
      waterAvailability: "",
      season: "",
      previousCrops: "",
    });
    setRecommendations([]);
    setShowResults(false);
  };

  // Generate mock recommendations based on form data
  const generateMockRecommendations = (data) => {
    // This is a simplified mock based on common agricultural knowledge
    const baseRecommendations = [
  {
    name: "Corn (Maize)",
    suitability: "High",
    yield: "8-12 tons/hectare",
    waterNeeds: "Medium-High",
    profitability: "100000",
    image: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg?w=300",
    imageAlt: "Field of tall green corn plants with developing ears under sunny skies",
    description: "Excellent choice for your soil and climate conditions. Requires good irrigation and nutrient management."
  },
  {
    name: "Soybeans",
    suitability: "High",
    yield: "2.5-3.5 tons/hectare",
    waterNeeds: "Medium",
    profitability: "80000",
    image: "https://5.imimg.com/data5/EB/ZD/VU/SELLER-541545/js-9560-soyabean-seeds-500x500.jpeg",
    imageAlt: "Lush soybean field with green plants and pods ready for harvest",
    description: "Well-suited to your region. Good for crop rotation and soil health improvement."
  },
  {
    name: "Wheat",
    suitability: "Medium",
    yield: "3-5 tons/hectare",
    waterNeeds: "Low-Medium",
    profitability: "150000",
    image: "https://www.farmatma.in/wp-content/uploads/2019/05/wheat-cultivation-india.jpg",
    imageAlt: "Golden wheat field swaying in the wind with clear blue sky background",
    description: "Suitable with proper management. Consider winter varieties for your climate."
  }
];


    // Adjust recommendations based on user inputs
    if (parseFloat(data.waterAvailability) < 3) {
      baseRecommendations.push({
  name: "Sorghum",
  suitability: "High",
  yield: "3-6 tons/hectare",
  waterNeeds: "Low",
  profitability: "100000",
  image: "https://cdn.britannica.com/21/136021-050-FA97E7C7/Sorghum.jpg",
  imageAlt: "Field of drought-resistant sorghum with tall stalks and grain heads",
  description: "Excellent drought-tolerant option for your water availability conditions."
});
    }

    if (parseFloat(data.soilPH) < 6) {
     baseRecommendations.push({
  name: "Blueberries",
  suitability: "High",
  yield: "5-10 kg/plant",
  waterNeeds: "Medium",
  profitability: "200000",
  image: "https://cdn.shopify.com/s/files/1/0767/4655/files/berries-3548239_1280_grande.jpg?v=1586376857",
  imageAlt: "Cluster of ripe blueberries on bush with green leaves and blue fruits",
  description: "Acidic soil is perfect for blueberries. High-value crop with good market demand."
});
    }

    return baseRecommendations;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">AI Crop Recommendation System</h1>
          <p className="opacity-90">
            Get personalized crop recommendations based on your farm's specific conditions
          </p>
        </div>

        {!showResults ? (
          /* Input Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Soil Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil Type
                </label>
                <select
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Soil Type</option>
                  <option value="sandy">Sandy</option>
                  <option value="loamy">Loamy</option>
                  <option value="clay">Clay</option>
                  <option value="silt">Silt</option>
                  <option value="peat">Peat</option>
                  <option value="chalky">Chalky</option>
                </select>
              </div>

              {/* Climate Zone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Climate Zone
                </label>
                <select
                  name="climateZone"
                  value={formData.climateZone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Climate Zone</option>
                  <option value="tropical">Tropical</option>
                  <option value="subtropical">Subtropical</option>
                  <option value="temperate">Temperate</option>
                  <option value="continental">Continental</option>
                  <option value="arid">Arid</option>
                </select>
              </div>

              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  placeholder="e.g., Midwest, Southeast"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Annual Rainfall */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Rainfall (mm)
                </label>
                <input
                  type="number"
                  name="annualRainfall"
                  value={formData.annualRainfall}
                  onChange={handleInputChange}
                  placeholder="e.g., 1000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Temperature Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temperature Range (°C)
                </label>
                <input
                  type="text"
                  name="temperatureRange"
                  value={formData.temperatureRange}
                  onChange={handleInputChange}
                  placeholder="e.g., 15-30"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Soil pH */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Soil pH Level
                </label>
                <input
                  type="number"
                  name="soilPH"
                  value={formData.soilPH}
                  onChange={handleInputChange}
                  min="0"
                  max="14"
                  step="0.1"
                  placeholder="e.g., 6.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Farming Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farming Experience
                </label>
                <select
                  name="farmingExperience"
                  value={formData.farmingExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Experience Level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (3-7 years)</option>
                  <option value="expert">Expert (8+ years)</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Level
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Budget Level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* Farm Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Size (hectares)
                </label>
                <input
                  type="number"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleInputChange}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              {/* Water Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Water Availability (1-5 scale)
                </label>
                <select
                  name="waterAvailability"
                  value={formData.waterAvailability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Availability</option>
                  <option value="1">1 (Very Limited)</option>
                  <option value="2">2 (Limited)</option>
                  <option value="3">3 (Moderate)</option>
                  <option value="4">4 (Good)</option>
                  <option value="5">5 (Excellent)</option>
                </select>
              </div>

              {/* Season */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Planting Season
                </label>
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall/Autumn</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              {/* Previous Crops */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Crops (if any)
                </label>
                <input
                  type="text"
                  name="previousCrops"
                  value={formData.previousCrops}
                  onChange={handleInputChange}
                  placeholder="e.g., Corn, Wheat"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  "Get Recommendations"
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Results Display */
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Crop Recommendations</h2>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                New Analysis
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((crop, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="h-48 overflow-hidden">
                    <img
                        src={crop.image || "https://via.placeholder.com/400x300"}
                        alt={crop.imageAlt}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{crop.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        crop.suitability === "High" 
                          ? "bg-green-100 text-green-800" 
                          : crop.suitability === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        {crop.suitability} Suitability
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-gray-600 text-sm">{crop.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium">Yield:</span> {crop.yield}
                      </div>
                      <div>
                        <span className="font-medium">Water Needs:</span> {crop.waterNeeds}
                      </div>
                      <div>
                        <span className="font-medium">Profitability:</span> 
                        <span className="ml-1">{crop.profitability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Next Steps</h3>
              <p className="text-blue-700">
                Based on our AI analysis, we recommend starting with the highest suitability crop. 
                Consider soil preparation, irrigation planning, and market analysis before finalizing your decision.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );


}
export default App;


