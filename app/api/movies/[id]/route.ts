export async function GET(
  request: Request,
  { params }: { params: Promise<{ movieId: string }> }
) {
  const { movieId } = await params;

  return Response.json({
    message: `GET request for movie ${movieId} received`
  });
}

export async function POST() {
  return Response.json({ message: "POST request movie received" });
}

export async function PUT() {
  return Response.json({ message: "PUT request movie received" });
}
