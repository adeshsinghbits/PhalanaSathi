import { useEffect, useState } from "react";

export default function useUserCountry() {
  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("userCountry");

    if (cached) {
      const parsed = JSON.parse(cached);
      setCountry(parsed.country);
      setCountryCode(parsed.countryCode);
      setLoading(false);
      return;
    }

    if (!navigator.geolocation) {
      fallbackIP();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          const data = await res.json();

          const result = {
            country: data.countryName,
            countryCode: data.countryCode.toLowerCase(),
          };

          localStorage.setItem("userCountry", JSON.stringify(result));

          setCountry(result.country);
          setCountryCode(result.countryCode);
        } catch {
          fallbackIP();
        }

        setLoading(false);
      },
      () => {
        fallbackIP();
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 0,
      }
    );

    async function fallbackIP() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const result = {
          country: data.country_name,
          countryCode: data.country_code.toLowerCase(),
        };

        localStorage.setItem("userCountry", JSON.stringify(result));

        setCountry(result.country);
        setCountryCode(result.countryCode);
      } catch {
        setCountry("Unknown");
      }
      setLoading(false);
    }
  }, []);

  return { country, countryCode, loading };
}
