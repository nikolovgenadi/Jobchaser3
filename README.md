Vad menas med Reacts ekosystem? 
Man menar React och dess alla verktyg som används för att bygga appar, inte bara biblioteket men också saker som hanterar states, formulär, ui komponenter, testing, routing mm. 

Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form
RTK react toolkit för global state management, axios/fetch för api anrop och react query för hantering av datahäntning och caching. 

Vad är fördelen med att använda React Hook Form?
genom RHF förenklar man koden, den är snabb pga den inte renderar hela formuläret vid varje input som görs, har inbyggda validering och man kan även använda YUP som valideringsbibliotek. Den stöds också av ts.

Vad är syftet med useContext? Vilket problem med props löser den?
Man undviker props drilling där man i flera komponenter behöver data eller funktion som man inte vill manuellt hantera data genom alla nivåer. Den måste gå igenom som props från parent till child genom flera nivåer av kod som man kan undvika med useContext. Man lägger datan längst upp i koden och frågar med varje komponent om datan direkt utan att gå igenom alla komponenter emellan som gör koden renare, tydligare och mycket mindre. 

Vilka fördelar finns det att använda Tailwind / nackdelar? 
Det var lite konstigt och obekant i början när man blivit van vid css, behövde mycket hjälp från nätet och de långa raderna. 

Med mer kompetens blir det snabbt då man slipepr skriva css och hantera massa filer och mycket mer agilt där man kan ändra snabbt och enkelt. 
