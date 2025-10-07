//exercice 6
(
    function life(nubChild, partName, geoLocation, jobTitle){
        const sorcereres =` You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${nubChild} kids`;
        document.body.innerHTML= `<p>${sorcereres}</p>`;

    }
)(11," manar", "ankara", "actor");