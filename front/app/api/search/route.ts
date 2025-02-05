import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const searchParam = searchParams.get("searchParam");

  const response = await fetch(
    `http://localhost:3001/search?searchParam=${searchParam}`
  );
  const data = await response.json();

  return Response.json(data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
