# Titel På Projektet

## Inlämning 2 Apputveckling

Av: Andreas, Ardi, Emina, Kicki, Mathias

## Beskrivning Av Projektet

## Info Om Hur Projektet Bygg & Körs

För att bygga projektet, kör:
> `npm install`

För att starta projektet, kör:
> `npm start`

## Kravlista

*: Dessa krav måste göras (21st).

### Antal krav: 40

- G: 24 (60%).
- VG: 34 (85%).

### Kravlista (4)

1. ***[X]***  En logga, splashscreen och appikon ska designas och användas. *
2. ***[X]***  Applikationen ska byggas med RN, Expo & TS. *
3. ***[X]***  Designen av appen ska utgå ifrån befintliga skisser, undantag kan ges men ska diskuteras med produktägare, godkännas och dokumenteras. *
4.***[ ]***  All information ska kommuniceras till och från en server. (VG)

### Hushåll (7)

5.***[X]***  Ett hushåll ska ha ett namn och en genererad (enkel) kod så andra kan gå med i hushållet, namnet ska gå att ändra. *
6.***[X]***  Alla användare i ett hushåll ska kunna se vilka som tillhör ett hushåll.
7.***[ ]***  En ägare av ett hushåll ska kunna se förfrågningar om att gå med i hushållet.
8.***[ ]***  En ägare ska kunna acceptera eller neka förfrågningar.
9.***[ ]***  En ägare ska kunna göra andra till ägare.
10.***[ ]***  En ägare ska kunna pausa en användare och under pausade perioder ska användare inte tas med i statistiken.
11.***[ ]***  Om en använder har pausats under en del av en period i statistiken ska graferna normaliseras.

### Konto (5)

12.***[X]***  En användare ska kunna logga in sig. *
13.***[X]***  En användare ska kunna skapa ett nytt hushåll. *
14.***[X]***  En användare ska kunna gå med i ett hushåll genom att ange hushållets kod. *
15.***[ ]***  När en användare har valt att gå med i ett hushåll behöver en ägare av hushållet först godkänna användaren.
16.***[X]***  En användare ska kunna lämna ett hushåll.

### Profil (6)

17.***[X]***  En användare ska kunna ange sitt namn. *
18.***[X]***  En användare ska kunna välja en avatar (emoji-djur + färg) från en fördefinierad lista. *
19. ***[X]***  Valda avatarer ska inte kunna väljas av andra användare i hushållet. *
20. ***[X]***  Avataren ska användas i appen för att visa vad användaren har gjort. *
21. ***[X]***  En användare ska kunna ställa in appens utseende (mörkt, ljust, auto).
22. ***[X]***  Om en användare tillhör två eller fler hushåll ska denne kunna välja att byta mellan de olika hushållen.

### Sysslor (6)

23.***[X]***  En ägare ska kunna lägga till sysslor att göra i hemmet. *
24.***[X]***  En syssla ska ha ett namn, en beskrivning (text), hur ofta den ska göras (dagar), och en vikt som beskriver hur energikrävande den är. *
25.***[ ]***  En användare ska kunna lägga till en ljudinspelning och en bild för att beskriva sysslan ytterligare.
26.***[X]***  En ägare ska kunna redigera en syssla. *
27.***[X]***  En ägare ska kunna ta bort en syssla. *
28.***[ ]***  När en syssla tas bort ska användaren få en varning om att all statistik gällande sysslan också kommer att tas bort och få valet att arkivera sysslan istället.

### Dagsvyn (3)

29.***[X]***  Alla sysslor ska listas i en dagsvy och ge en översikt kring vad som behöver göras. *
30.***[X]***  Utöver sysslans namn ska även vem/vilka som har gjort sysslan visas, hur många dagar sedan sysslan gjordes senast samt om den är försenad. *
31.***[X]***  När en användare väljer en syssla ska beskrivningen av sysslan visas och det ska även med ett enkelt tryck gå att markera sysslan som gjord. *

### Statistik (6)

32.***[X]***  En användare ska kunna se fördelningen av gjorda sysslor mellan användarna i sitt hushåll. *
33.***[X]***  Varje statistikvy ska visa den totala fördelningen (inräknat vikterna för sysslorna) samt fördelning av varje enskild syssla. *
34.***[X]***  Det ska finnas en statistikvy över ”nuvarande vecka”. *
35.***[ ]***  Det ska finnas en statistikvy över ”förra vecka”.
36.***[ ]***  Det ska finnas en statistikvy över ”förra månaden”.
37.***[ ]***  Om det inte finns statistik för en av vyerna ska den vyn inte visas.

### Schemaläggning (3)

38.***[ ]***  En ägare ska kunna tilldela och ta bort sysslor från användare i hushållet.
39.***[ ]***  Användare ska kunna se de tilldelade sysslorna i sitt gränssnitt.
40.***[ ]***  En ägare ska kunna skapa grupper av sysslor som automatiskt tilldelas användarna i hushållet och roteras baserat på ett intervall i dagar.
