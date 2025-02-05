"use client";

import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchedData } from "@/types";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<SearchedData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm.trim()) return;
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/search?searchParam=${searchTerm}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result.results);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm])

  return (
    <div>
      <h1>Welcome To Star Wars Rebels Alliance Search System !</h1>
      <Input 
        placeholder='search...' 
        type="text"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      {loading && (<>Loading...</>)}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <ul>
          {data.map((unit, index) => (
            <li key={index}>
              <Link href={`/details/${unit.type}/${unit.id}`}>{unit.name}</Link>
            </li>
          ))} 
        </ul>
      )}
    </div>
  );
}
