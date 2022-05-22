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

	titel: "Skole til forældre: Tjek børnenes karameller - der kan være puttet noget i",
	undertitel: "På Søndervangskolen i Hammel florerer der rygter om, at de karameller, som 9. klasse-eleverne deler ud af sidste skoledag, er blevet åbnet, og at der er puttet noget i.",
	journalist: "SØREN LADEFOGED",
	tekst: "Når niende klasses elever markerer skoleåret og folkeskolens afslutning er det mange steder en tradition at kaste karameller ud til resten af skolen. På Søndervangskolen i Hammel går der dog nogle rygter, om at årets ellers søde gestus kan være knap så sød, og at karamellerne, der er kastet ud fredag i forbindelse med sidste skoledag, er blevet åbnet og proppet fulde af alskens ubehageligheder. Lokalavisen er bekendt med rygterne, der peger på konkrete, ubehagelige tilsætninger til karamellerne, men vælger ikke at viderebringe dem, da det er ubekræftet. Men bekymringen over rygterne blandt forældrene har dog alligevel givet skolen anledning til at skrive ud til forældre på alle klassetrin. I en Aula-besked skriver skoleleder René Guldbrandsen blandt andet: Der går på skolen et rygte om, at nogle af karamellerne fra 9.-klasserne har været åbnede, og at der er puttet noget i. En medarbejder fandt to karameller med noget i, som vi ikke helt kunne se hvad var.« Skoleleder René Guldbrandsen bekræfter over for Lokalavisen, at skolen har skrevet ud, og at rygterne florerer på skolen, men at der indtil videre ikke har været grund til bekymring. »Jeg tror ikke, der er noget i det, må jeg indrømme. Historien er kommet af, at nogle af eleverne de sidste uger har snakket om, at de ville gøre et eller andet. Så opstår der en stemning omkring det, og folk bliver lidt ekstra opmærksomme. Men vi har ikke noget håndfast bevis på, at der har været noget i,« siger han til Lokalavisen. I Aula-beskeden opfordrer skolen forældrene til at tjekke de karameller, som nogle af eleverne tager med hjem fra skole fredag, og alternativt kassere dem. »Vi fandt en med en sort prik i, men vi kunne ikke se, hvad det var. Det kan lige så godt være, hvis du køber en pose karameller, så er der måske én, der ser lidt anderledes ud end de andre fra fabrikken. Så vi har ikke noget konkret at hænge det op på,« siger han og fortsætter: »Men vi har sagt, man skal tjekke karamellerne, når de åbnede dem. Det skrev vi til klasserne og til forældrene. Men vi har ikke noget håndfast bevis om det. Så havde det jo været en anden historie.«",
	type: "Samfund",

},
{

	titel: "Aarhus Pride fylder atter gaden med regnbueflag og fest",
	undertitel: "Efter et par år uden, fyldes gaderne nu igen med regnbueflag, fest, musik og god queer-stemning, når Aarhus Pride er tilbage 28. maj.",
	journalist: "SØ",
	tekst: "Aarhus Pride er en kampdag og en festdag for lige rettigheder og muligheder for alle – uanset kønsidentitet eller seksuel orientering. Aarhus Pride byder alle, der støtter dette mål hjertelig velkommen ombord i paraden og på paradepladsen bagefter. Dagen begynder på Bispetorv klokken 10, hvor paraden samles til hygge og god musik fra DJ, og klokken 11 begynder paraden at bevæge sig gennem Aarhus skønne gader, hvor optoget hylder mangfoldigheden samt synliggør retten til at være den man er. Enden er på Pier 3 (Molslinjens gamle færgeterminal), der denne dag er omdannet til paradeplads med boder, telte og scener – og alle er velkommen. Paradepladsen åbner klokken 12.30",
	type: "Samfund",

},  

{

	titel: "Hør den her: Basim 'nyfortolker' Thomas Helmigs udødelige kærlighedshymne",
	undertitel: "Basim har nyfortolket Thomas Helmigs hit ”Det er mig der står herude og banker på”.",
	journalist: "Sophia Juliane Lydolph",
	tekst: "”Det er mig, der står herude og banker på...” Sådan lød det tilbage i 1988, da Thomas Helmigs udødelige kærlighedshymne udkom, men nu - 34 år efter - har nummeret fået nyt liv og en ny lyd af popproduceren og sangeren Basim. Han har nemlig nyfortolket det ikoniske hit, som netop er udkommet på de musiske streamingtjenester, og det er med Thomas Helmigs velsignelse. »Jeg spillede sangen for nogle, der sagde: ”Uh, det er nærmest blasfemisk!”.« »Men så skrev jeg til Thomas med ærefrygt og respekt og blev ret rolig, da han hørte den og svarede: Det må du godt. For når manden selv blåstempler det og giver mig carte blanche, så kan det ikke være helt skidt,« siger Basim.",
	type: "Musik",

},

{

	titel: "Antonio Dayyani spiller sit jazzede debutalbum på HeadQuarters",
	undertitel: "Aarhusianske Antonio Dayyani har komponeret rolig nordisk og jazzet musik, som nu kan høres live for første gang: 'Herfra kan det kun gå to veje'",
	journalist: "BENTE TAHMASBI HANSEN",
	tekst: "Den 22-årige aarhusianske trommeslager og komponist Antonio Dayyani er nu ude med sit debutalbum ”Herfra Kan Det Kun Gå To Veje”. Det spiller han på HeadQuarters 9. juni klokken 20. Musikken er rolig og lyrisk og blander folk med nordiske toner i en omfavnende jazzfeeling, hvilket tydeligt fornemmes på debutsinglen Fred Og Ro (Og Det Der Følger Med), der rykkede direkte i radiorotation på P8 Jazz efter udgivelsen i april. Hele albummet er liveindspillet og indeholder den nerve og intensitet, som kun en liveoptræden kan skabe. På samme tid har rammerne omkring musikken været åbnet op, så hver enkelt medvirkende musiker haft plads til at sætte sit eget tydelige præg på pladen.",
	type: "Musik",
},

{

  titel: "Ung mand fik klip nummer 18 i sit kørekort - så slap betjents tålmodighed op",
  undertitel: "Politiet skrev 29 sigtelser under endnu en 'givtig' færdselskontrol i det vestlige Aarhus.",
  journalist: "",
  tekst: "Torsdag eftermiddag og aften i tidsrummet fra 17.30 til 23.00 var Østjyllands Politis færdselsafdeling en tur i det vestlige Aarhus for at udføre endnu en stor kontrol. Det førte til i alt 29 sigtelser fordelt på 23 personer. En af dem, der fik flere sigtelser med sig hjem, var en 45-årig mand, der blev standset, da han kørte i en personbil med kun én nummerplade ved Viby Torv. Han var tydeligt spirituspåvirket, og det viste sig, at han også var frakendt førerretten. Bilen viste sig desuden at være uindregistreret og uden forsikring, og den ene nummerplade, der var påsat bilen, tilhørte en anden personbil, der havde været afmeldt i flere år.",
  type: "112",

},




    ];
    await Article.insertMany(defaultArticles);
    console.log("Seeding database with %d articles", defaultArticles.length);
  } else {
    console.log("Database has content, not seeding");
  }
}