"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Home() {
  

  return (
    <div className="m-10 flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-center mb-5">
        Welcome To Star Wars Rebels Alliance Search System !
      </h1>
      
      <Button asChild className="w-[300px]">
        <Link href="/login">Enter our system</Link>
      </Button>
    </div>
  );
}
