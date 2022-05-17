import mongoose from "mongoose";
import Article from "./models/article";

export async function connectDatabase() {
  const connectionString = process.env.MONGODB_URL
  if (!connectionString) {
    throw new Error(
      "MONGODB_URL not set as environment variable. Please configure it in an .env file."
    );
  }

  return mongoose.connect(connectionString);
}

export async function seedDatabase() {
  console.log(mongoose.connection.readyState)
  let articleCount = await Article.countDocuments();
  if (articleCount === 0) {
    const defaultArticles = [
      {

        titel: "Død efter plejehjemsbrand",
        undertitel: "Årsag til brand på plejehjem er endnu ukendt.",
        journalist: "STEN BRØGGER",
        tekst: "En mand i slutningen af 70’erne mistede søndag aften livet i forbindelse med en brand på et plejehjem i Valby. Det oplyser vagtchef hos Københavns Politi, Henrik Brix, mandag til TV 2 Lorry. Politi, brandvæsen og ambulancereddere rykkede ud til branden, der udbrød på plejehjemmet omkring klokken 19. Den ældre mand, født i 1943, blev kørt til hospitalet, men hans liv stod ikke til at redde. De pårørende er underrettet. Årsagen til branden er endnu ukendt. Der var kun brand på værelset, hvor manden befandt sig, skriver TV2 Lorry. Plejehjemmet ligger på Carl Jacobsens Vej i Valby. Københavns Politi vil nu forsøge at blive klogere på årsagen til branden på mandens værelse.",
        type: "112",
      
      },
        {
            titel: "Smidt væk",
            undertitel: "Mirakel",
            journalist: "Bo Madsen",
            tekst:"kdmadlmkdaldladakld alkf kal a",
            type: "Sport",
        },
    ];
    await Article.insertMany(defaultArticles);
    console.log("Seeding database with %d articles", defaultArticles.length);
  } else {
    console.log("Database has content, not seeding");
  }
}