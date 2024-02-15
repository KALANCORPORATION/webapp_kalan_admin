import addSpaceBookService from "../../services/addSpaceBookService";
import result from "./Result";

function verifScanISBN(results, accessToken, spaceId) {
    addIsbn(results).then(r => console.log(r));


// Fonction pour vérifier si une chaîne est un code ISBN
    function isIsbn(str) {
        // Expression régulière pour valider un ISBN
        const isbnRegex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
        return isbnRegex.test(str);
    }

// Fonction pour ajouter un code ISBN à la liste
    async function addIsbn(isbn) {
        if (isIsbn(isbn)) {
            console.log("Le scan a été ajouté : ", result);
            navigator.vibrate([1, 5, 100]);

            const isbnData = JSON.stringify({isbn: result});

            // const accessToken2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InJlZmVyZW50IiwiaWF0IjoxNzA3ODIxMTYwLCJleHAiOjE3MDc4MjQ3NjB9.Od4a6_Ve7wAUHv-bjWyknbO9UyQNGuy8SD_mS2PQFXQ";
            // const spaceId2 = 1;

            console.log("******* Spaceid : " + spaceId + " | accesstoken : " + accessToken);
            console.log("******* isbn : " + isbnData);
            //const message = await addSpaceBookService.addBookToSpaceByIsbn(spaceId, isbnData, accessToken);

            console.log("Message add book to space : "/* + message*/);

            // Display the scanned result in the UI
            return document.querySelector(".results").innerHTML += `<li>${/*message.isbn*/" oui"}</li>`;

        }
    }

}

// Export the function
export default verifScanISBN;
