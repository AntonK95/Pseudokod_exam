// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
// För att göra det enklare så har jag valt att bryta ned detta i till sex punkter
// 1. Ange totala kostnaden - let totalCost = 0;
// 2. Ange antal vänner - let numberOfFriends = 0;
// 3. Ange procent dricks - let tipAmount = 0;
// 4. Beräkna kostnaden ink dricks - let totalCostWithTip 
//    För att räkna ut - let totalCostWithTip = totalCost + tipAmount;?
// 5. Dela den totala kostnaden med antal vänner - 
//    För att räkna ut - let costPerFriend = totalCostWithTip / numberOfFriends;
// 6. Visa hur mycket varje vän skall betala - let costPerFriend

let totalCost = läs in användarinput("vad är den totala kostnaden?");

let numberOfFriends = läs in användarinput("Hur många är ni som skall dela på kostnaden?");

let tipAmount = läs in användarinput("Hur mycket vill ni lämna i dricks?");

let totalCostWithTip = totalCost + (totalCost * tipAmount);

let costPerFriend = totalCostWithTip / numberOfFriends;

skriv ut ("Varje person skall betala: " + costPerFriend);

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";

    while(kör tills startOrd === slutOrd)
        // Användaren anger ett nytt ord / ny bokstav
        SET variabel nyttOrd till användarinput;
        // Kontrollera om nyttOrd har samma längd som startOrd
        kolla om nyttOrd.length = startOrd.length
            // och om det finns i ordbok och är ett bokstavsbyte bort
            kolla om ordbok innehåller nyttOrd && isOneLetterApart är SANT
                // Uppdatera startOrd
                startOrd tilldelas nyttOrd;
    end while
    Skriv ut "Grattis du vann!"

end function

function isOneLetterApart(wordOne, wordTwo)
    // Räkna antalet bokstavsavvikelser
    SET variabel diffCount till 0;


    // Index för varje bokstav i orden
    for (index = 0; index < wordOne.length; index++)
        // Om en bokstav inte är lika i de två orden
        if (wordOne[index] INTE är lika med wordTwo[index])
            ÖKA diffCount med 1;
    end for

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/