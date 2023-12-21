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
        SET variabel nyttOrd till användarinput;
        kolla om nyttOrd.lenght = startOrd.lenght
            kolla om ordbok innehåller nyttOrd && isOneLetterApart är SANT
                startOrd tilldelas nyttOrd;
    end while
    Skriv ut "Grattis du vann!"

end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    for()

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/