import { SwapiType } from "@/types/SwapiType";
import { NextRequest } from "next/server";
type tParams = Promise<{ type: SwapiType; id: string }>;
export async function GET(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const { type, id } = await params;
  if (!type || !id) {
    return Response.json(
      { error: "Missing type or id parameter" },
      { status: 400 }
    );
  }

  try {
    const authorization = request.headers.get("authorization");
    if (authorization === null) {
      return Response.json(
        { error: "Authorization header is missing" },
        { status: 401 }
      );
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HAPI_API_URL}/details/${type}/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      }
    );
    const data = await response.json();
    return Response.json({ results: data }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
