"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SearchedData, SwapiType } from "@/types";
import { DEBOUNCE_TIME } from "@/constants";
import Filters from "@/components/Filters";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [data, setData] = useState<SearchedData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<SwapiType[]>([
    SwapiType.FILMS,
    SwapiType.PEOPLE,
    SwapiType.PLANETS,
    SwapiType.SPECIES,
    SwapiType.STARSHIPS,
    SwapiType.VEHICLES,
  ]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, DEBOUNCE_TIME);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/search?searchParam=${debouncedSearchTerm}&types=${filters.join(",")}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData([...result.results]);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchTerm, filters]);

  return (
    <div className="m-10 flex flex-col items-center">
      <h1 className="font-bold text-center mb-5">
        Welcome To Star Wars Rebels Alliance Search System !
      </h1>
      <Input
        placeholder="search..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-1/3 mb-5"
      />
      <Filters
        filters={filters}
        setFilters={(newFilters) => setFilters([...newFilters])}
      />
      {loading && <>Loading...</>}
      {error && <p className="text-red-500">{error}</p>}
      {data && data.length > 0 && (
        <ul className="w-1/3">
          {data.map((unit, index) => (
            <li key={index} className="mb-3">
              <Link
                className="hover:bg-emerald-400 p-2"
                href={`/details/${unit.type}/${unit.id}`}
              >
                {unit.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!data && !loading && (
        <p>
          Please search for a Star Wars planet, starship, vehicle, film, species, or character...
        </p>
      )}
    </div>
  );
}
