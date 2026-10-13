/** Fictional books; prices are integer USD cents, with no payment flow. */
export const books = [
  {
    id: "moonlit-atlas",
    title: "The Moonlit Atlas",
    author: "Mira Vale",
    genre: "Adventure",
    priceCents: 1800,
    description: "A mapmaker follows a wandering island across a sea of stars.",
    cover: "covers/moonlit-atlas.png",
    excerpt:
      "The island had moved again. By dawn, Ada’s careful ink lines described a coastline that no longer existed. She folded the map, watched a silver trail vanish into the harbor, and set out to ask the moon for directions.",
  },
  {
    id: "small-hours",
    title: "Small Hours, Big Gardens",
    author: "Rowan Finch",
    genre: "Cozy fiction",
    priceCents: 1400,
    description: "Neighbors turn an abandoned railway into a midnight garden.",
    cover: "covers/small-hours.png",
    excerpt:
      "At eleven minutes past midnight, the first tomato appeared on the platform. Nobody admitted planting it. By Friday, the old station clock had become a trellis, and the neighbors had begun arriving with watering cans instead of suitcases.",
  },
  {
    id: "paper-planets",
    title: "Paper Planets",
    author: "Ellis Wren",
    genre: "Science fiction",
    priceCents: 2200,
    description:
      "An archivist discovers a universe folded between library pages.",
    cover: "covers/paper-planets.png",
    excerpt:
      "Every book in the archive weighed precisely what it should, except the blue one. It was getting lighter. When Jun opened it, a tiny paper moon slipped from the index and began to orbit the reading lamp.",
  },
  {
    id: "the-lighthouse-post",
    title: "The Lighthouse Post",
    author: "Nora Bell",
    genre: "Adventure",
    priceCents: 1700,
    description:
      "A lighthouse keeper delivers letters to places that have vanished from the maps.",
    cover: "covers/the-lighthouse-post.png",
    excerpt:
      "The letter arrived without a stamp, damp with seawater and addressed to a town nobody remembered. Elin set it beside the lighthouse lamp. As the beam swept across the bay, a street of golden windows appeared on the waves.",
  },
  {
    id: "the-last-orchard",
    title: "The Last Orchard",
    author: "Theo Moss",
    genre: "Literary fiction",
    priceCents: 1900,
    description:
      "Three estranged siblings return home to save their grandmother’s orchard.",
    cover: "covers/the-last-orchard.png",
    excerpt:
      "The gate still caught on the same stone. Sam lifted it the way their grandmother had taught them, and the smell of fallen apples rose from the grass. Beyond the first row of trees, two familiar figures stood pretending they had not been waiting.",
  },
  {
    id: "a-pocketful-of-tides",
    title: "A Pocketful of Tides",
    author: "Lena Shore",
    genre: "Fantasy",
    priceCents: 1600,
    description:
      "A beachcomber finds a bottled ocean whose tides answer forgotten wishes.",
    cover: "covers/a-pocketful-of-tides.png",
    excerpt:
      "There was a tide inside the jar. It washed over a shore no wider than Mara’s thumb, carrying a blue boat and the faint sound of bells. She loosened the lid, and the kitchen filled with the smell of a summer she thought she had forgotten.",
  },
  {
    id: "the-clockwork-forest",
    title: "The Clockwork Forest",
    author: "Felix Reed",
    genre: "Fantasy",
    priceCents: 2100,
    description:
      "An apprentice mechanic follows a brass fox into a forest that is running out of time.",
    cover: "covers/the-clockwork-forest.png",
    excerpt:
      "The fox was missing a minute. Each time it took twelve steps, it paused and listened to the trees. Kit knelt beside it with a pocket watch and a screwdriver. Somewhere under the roots, an enormous gear turned once, then stopped.",
  },
  {
    id: "letters-from-saturn",
    title: "Letters from Saturn",
    author: "Iris North",
    genre: "Science fiction",
    priceCents: 2000,
    description:
      "Two pen pals on distant worlds discover their letters are arriving a century apart.",
    cover: "covers/letters-from-saturn.png",
    excerpt:
      "Dear stranger, the letter began, your sunrise reached us yesterday. Sol read the sentence twice beneath the station’s violet lamps. Outside, Saturn’s rings glittered with ice. The postmark was dated one hundred years before the station had been built.",
  },
  {
    id: "the-quiet-bakery",
    title: "The Quiet Bakery",
    author: "June Alder",
    genre: "Cozy fiction",
    priceCents: 1500,
    description:
      "A baker starts leaving handwritten invitations inside the bread for her lonely neighbors.",
    cover: "covers/the-quiet-bakery.png",
    excerpt:
      "The first invitation went into a walnut loaf. Come by at six, it said. There will be soup. Bea slid the bread across the counter and watched Mr. Penn tuck it under his arm. That evening, she set two bowls on the little table by the oven.",
  },
  {
    id: "a-house-for-the-rain",
    title: "A House for the Rain",
    author: "Ada Fern",
    genre: "Magical realism",
    priceCents: 1800,
    description:
      "An architect builds a home for a raincloud that refuses to leave her street.",
    cover: "covers/a-house-for-the-rain.png",
    excerpt:
      "On the forty-third wet morning, Nell carried a chair into the street. The cloud hovered politely above her. ‘You can’t stay here forever,’ she told it. A single drop fell into her tea. She opened her sketchbook and began drawing a roof.",
  },
  {
    id: "the-velvet-train",
    title: "The Velvet Train",
    author: "Oscar Vale",
    genre: "Mystery",
    priceCents: 2300,
    description:
      "A night train arrives with one extra carriage and a passenger nobody can remember boarding.",
    cover: "covers/the-velvet-train.png",
    excerpt:
      "The conductor counted seven carriages at departure and eight at the border. In the last compartment, a woman in a red coat was pouring tea for an empty seat. ‘You’re late,’ she said, before he had asked to see her ticket.",
  },
  {
    id: "the-museum-of-wind",
    title: "The Museum of Wind",
    author: "Cleo Hart",
    genre: "Adventure",
    priceCents: 1700,
    description:
      "A young curator must recover the world’s missing breezes before the last kite falls.",
    cover: "covers/the-museum-of-wind.png",
    excerpt:
      "Every jar in the west gallery was open. The summer breeze had escaped first, taking the smell of cut grass with it. Tavi found a feather on the windowsill and a map scratched into the dust. Outside, the flags hung still.",
  },
] as const;
