import addSpaceBookService from "../../services/addSpaceBookService";
import results from "./Result";

function verifScanISBN(results, accessToken, spaceId) {
    console.log("******* results : " + results);
    addIsbn(results).then(r => console.log(r));


// Fonction pour vérifier si une chaîne est un code ISBN
    function isIsbn(str) {
        // Expression régulière pour valider un ISBN
        const isbnRegex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
        if (str === null || str === undefined) {
            return false;
        } else {
            if (isbnRegex.test(str) === true) {
                return true;
            }

        }
    }

// Fonction pour ajouter un code ISBN à la liste
    async function addIsbn(isbn) {
        if (isIsbn(isbn)) {
            console.log("Le scan a été ajouté : ", results);

            const isbnData = JSON.stringify({isbn: results});
            console.log("******* isbnData : " + isbnData);

            // const accessToken2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidHlwZSI6InJlZmVyZW50IiwiaWF0IjoxNzA3ODIxMTYwLCJleHAiOjE3MDc4MjQ3NjB9.Od4a6_Ve7wAUHv-bjWyknbO9UyQNGuy8SD_mS2PQFXQ";
            const spaceId2 = 3;

            console.log("******* Spaceid : " + spaceId + " | accesstoken : " + accessToken);
            console.log("******* isbn : " + isbnData);
            try {
                const message = await addSpaceBookService.addBookToSpaceByIsbn(spaceId2, isbnData, accessToken);
                console.log("Message add book to space : " + message.toString());
                navigator.vibrate([1, 5, 100]);

                return document.querySelector(".results").innerHTML += `<li>${message}</li>`;
            }
            catch (error) {
                console.error('Error fetching data:', error.message);
                return document.querySelector(".results").innerHTML += `<li>${error.message}</li>`;

            }

        }
    }

}

// Export the function
export default verifScanISBN;
