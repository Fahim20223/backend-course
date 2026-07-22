import { prisma } from "../config/db";

const addToWatchList = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  // verify movie exists
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  // check it already added
  const existingInsWatchList = await prisma.watchlistItem.findUnique({
    where: {
      userId_movieId: {
        userId: userId,
      },
    },
  });
};
