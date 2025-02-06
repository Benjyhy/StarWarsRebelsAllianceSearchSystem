import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchParam = searchParams.get("searchParam");
  const types = searchParams.get("types");

  const authorization = request.headers.get("authorization");
  if (authorization === null) {
    return Response.json(
      { error: "Authorization header is missing" },
      { status: 401 }
    );
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HAPI_API_URL}/search?searchParam=${searchParam}&types=${types}`,
    {
      method: "GET",
      headers: {
        Authorization: authorization,
      },
    }
  );

  const data = await response.json();

  return Response.json(data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
