import { getFilteredDataWithPagination } from "./helper";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const city = url.searchParams.get("city");
  const specialty = url.searchParams.get("specialty");
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "4");

  try {
    // Get the filtered data with pagination
    const data = await getFilteredDataWithPagination(
      city,
      specialty,
      page,
      limit
    );

    // Return the data as JSON response
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    // Return an error response if something goes wrong
    return new Response(
      JSON.stringify({
        error: "Failed to fetch doctors",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
