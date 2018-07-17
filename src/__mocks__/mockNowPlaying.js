export const movie1 = {
  adult: false,
  backdrop_path: "/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg",
  genre_ids: [28, 12, 878],
  id: 351286,
  original_language: "en",
  original_title: "Jurassic World: Fallen Kingdom",
  overview: "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
  popularity: 240.222,
  poster_path: "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
  release_date: "2018-06-06",
  title: "Jurassic World: Fallen Kingdom",
  video: false,
  vote_average: 6.6,
  vote_count: 1853
}

export const movie2 = {
  adult: false,
  backdrop_path: "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg",
  genre_ids: [28, 12, 14, 35, 878],
  id: 363088,
  original_language: "en",
  original_title: "Ant-Man and the Wasp",
  overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
  popularity: 183.122,
  poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
  release_date: "2018-07-04",
  title: "Ant-Man and the Wasp",
  video: false,
  vote_average: 7.2,
  vote_count: 480
}

export const expectedRecentMovies = [
  { 
    favorite: false, 
    id: 351286, 
    overview: "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.", 
    poster: "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg", 
    ratings: 6.6, 
    "releaseDate": "2018-06-06", 
    title: "Jurassic World: Fallen Kingdom" 
  }, 
  { 
    favorite: false, 
    id: 363088, 
    overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.", 
    poster: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg", 
    ratings: 7.2, 
    releaseDate: "2018-07-04", 
    title: "Ant-Man and the Wasp" 
  }
]

export const mockFavorite = {
  favorite: false,
  id: 363088, 
  overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.", 
  poster: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg", 
  ratings: 7.2, 
  releaseDate: "2018-07-04", 
  title: "Ant-Man and the Wasp" 
}

export const expectedFavoriteMovie = {
  movie_id: 363088,
  user_id: 4,
  overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
  poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
  vote_average: 7.2,
  release_date: "2018-07-04",
  title: "Ant-Man and the Wasp"
}

export const expectedFavoriteKey = [
  {
    movie_id: 363088,
    user_id: 4,
    overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
    poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    vote_average: 7.2,
    release_date: "2018-07-04",
    title: "Ant-Man and the Wasp",
    favorite: true
  }
]

export const mockRetrievedFavorites = [
  {
    movie_id: 351286,
    user_id: 4,
    overview: "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    vote_average: 6.6,
    release_date: "2018-06-06",
    title: "Jurassic World: Fallen Kingdom",
  },
  {
    movie_id: 363088,
    user_id: 4,
    overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
    poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    vote_average: 7.2,
    release_date: "2018-07-04",
    title: "Ant-Man and the Wasp",
  }
]

export const expectedFavorites = [
  {
    favorite: true,
    id: 351286,
    overview: "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    poster: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    ratings: 6.6,
    releaseDate: "2018-06-06",
    title: "Jurassic World: Fallen Kingdom"
  },
  {
    favorite: true,
    id: 363088,
    overview: "As Scott Lang awaits expiration of his term of house detention, Hope van Dyne and Dr. Hank Pym involve him in a scheme to rescue Mrs. van Dyne from the micro-universe into which she has fallen, while two groups of schemers converge on them with intentions of stealing Dr. Pym's inventions.",
    poster: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    ratings: 7.2,
    releaseDate: "2018-07-04",
    title: "Ant-Man and the Wasp"
  }
]