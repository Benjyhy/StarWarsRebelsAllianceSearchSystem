import { NextRequest } from "next/server";
import { SwapiType } from "@/types/SwapiType";

export async function GET(
  request: NextRequest,
  { params }: { params: { type: SwapiType; id: string } }
) {
  const { type, id } = await params;
  if (!type || !id) {
    return Response.json(
      { error: "Missing type or id parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`http://localhost:3001/details/${type}/${id}`);
    const data = await response.json();
    return Response.json({ results: data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
