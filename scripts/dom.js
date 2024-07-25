export const renderCocktail = (cocktailContainer, cocktail) => {
    const cocktailHTML = `
    <h2>${cocktail.strDrink}</h2>
    <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" id="cocktail-image" />
    <p>${cocktail.strInstructions}</p>
    <ol>
        ${Object.keys(cocktail)
            .filter(key => key.startsWith('strIngredient') && cocktail[key])
            .map(key => `<li>${cocktail[key]}</li>`)
            .join('')}
    </ol>`
    // couldnt get the measurements to work next to the ingredient list
    //  <p>${cocktail.strMeasure}</p>
    // <ul>
    //     ${Object.keys(cocktail)
    //         .filter(key => key.startsWith('strMeasure') && cocktail[key])
    //         .map(key => `<li>${cocktail[key]}</li>`)
    //         .join('')}
    // </ul>`

    cocktailContainer.innerHTML = cocktailHTML;

    return document.getElementById('cocktail-image');
};

export const displayError = (cocktailContainer, message) => {
    cocktailContainer.innerHTML = `<p>${message}</p>`;
};

export const createCocktail = (cocktails) => {
    console.log('Created cocktail:', cocktails);
    alert('New cocktail created!');
};

export const updateCocktail = (currentCocktail) => {
    if (!currentCocktail) {
        alert('No cocktail selected to update.');
        return;
    }

    currentCocktail.strDrink = "Updated Cocktail";
    console.log('Updated cocktail:', currentCocktail);
    alert('Cocktail updated!');
};

export const deleteCocktail = (cocktails, currentCocktail, cocktailContainer) => {
    if (!currentCocktail) {
        alert('No cocktail selected to delete.');
        return;
    }

    cocktails = cocktails.filter(cocktail => cocktail.id !== currentCocktail.id);
    currentCocktail = null;
    cocktailContainer.innerHTML = '<p>Cocktail deleted!</p>';
    console.log('Deleted cocktail:', currentCocktail);
    alert('Cocktail deleted!');
    return cocktails;
};