import { useState } from "react";

function GeoAutocomplete({ placeholder, onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 3) {
      setResults([]);
      return;
    }

    const res = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&filter=countrycode:in&limit=5&apiKey=${import.meta.env.VITE_GEOAPIFY_KEY}`
    );

    const data = await res.json();
    setResults(data.features);
  };

  const handleSelect = (place) => {
    setQuery(place.properties.formatted);
    setResults([]);

    onSelect({
      address: place.properties.formatted,
      lat: place.geometry.coordinates[1],
      lng: place.geometry.coordinates[0],
    });
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
      />

      {results.length > 0 && (
        <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-md max-h-60 overflow-y-auto">
          {results.map((place) => (
            <div
              key={place.properties.place_id}
              onClick={() => handleSelect(place)}
              className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
            >
              {place.properties.formatted}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GeoAutocomplete;