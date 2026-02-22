import { useState, useEffect } from "react";
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { LuMapPinHouse } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";

function BookRide() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    userType: "passenger",
  });

  const [fromResults, setFromResults] = useState([]);
  const [toResults, setToResults] = useState([]);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);

  // 🔹 Debounce Function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // 🔹 Fetch Autocomplete
  const fetchLocations = async (value, setter) => {
    if (value.length < 3) {
      setter([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&filter=countrycode:in&limit=5&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`
      );

      const data = await res.json();
      setter(data.features || []);
    } catch (err) {
      console.error("Geoapify error:", err);
    }
  };

  const debouncedFetchFrom = debounce((value) =>
    fetchLocations(value, setFromResults),
  400);

  const debouncedFetchTo = debounce((value) =>
    fetchLocations(value, setToResults),
  400);

  useEffect(() => {
    debouncedFetchFrom(formData.from);
  }, [formData.from]);

  useEffect(() => {
    debouncedFetchTo(formData.to);
  }, [formData.to]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (place, type) => {
    const formatted = place.properties.formatted;
    const lat = place.geometry.coordinates[1];
    const lng = place.geometry.coordinates[0];

    if (type === "from") {
      setSelectedFrom({ formatted, lat, lng });
      setFormData((prev) => ({ ...prev, from: formatted }));
      setFromResults([]);
    } else {
      setSelectedTo({ formatted, lat, lng });
      setFormData((prev) => ({ ...prev, to: formatted }));
      setToResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFrom || !selectedTo || !formData.date) {
      alert("Please select valid locations and date");
      return;
    }

    const payload = {
      from: selectedFrom,
      to: selectedTo,
      date: formData.date,
      userType: formData.userType,
    };

    console.log("Ride Search Payload:", payload);

    // 🔥 Call backend here
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-5">

              {/* Leaving From */}
              <div className="relative">
                <LuMapPinHouse className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  placeholder="Leaving from"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg"
                />
                {fromResults.length > 0 && (
                  <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-md max-h-60 overflow-y-auto">
                    {fromResults.map((place) => (
                      <div
                        key={place.properties.place_id}
                        onClick={() => handleSelect(place, "from")}
                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                      >
                        {place.properties.formatted}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Going To */}
              <div className="relative">
                <GrMapLocation className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  placeholder="Going to"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg"
                />
                {toResults.length > 0 && (
                  <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-md max-h-60 overflow-y-auto">
                    {toResults.map((place) => (
                      <div
                        key={place.properties.place_id}
                        onClick={() => handleSelect(place, "to")}
                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
                      >
                        {place.properties.formatted}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="relative">
                <FaRegCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* User Type */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="passenger">I am a passenger</option>
                  <option value="driver">I am a driver</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 cursor-pointer"
            >
              Search Rides
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookRide;