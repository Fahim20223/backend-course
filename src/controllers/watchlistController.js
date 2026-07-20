import { Prisma } from "../config/db";

const addToWatchList = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  // verify movie exists
  const movie = await Prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
};
