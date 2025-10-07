function makeJuice(obervragaSize){

   let ingredients =[];

    function addIngredients(firsting, seconding, thirding){ 
        ingredients.push(firsting, seconding, thirding);
       

    }
    function displayJuice(){
        const display =`the client wants a ${obervragaSize} juice, contaning ${ingredients.join(", ")}`;
        document.body.innerHTML += display;
    }
    addIngredients("pears", "bannana", "splash berry");
    addIngredients("mango", "dragon fruit", "lime");
    displayJuice();
}
makeJuice("large");
makeJuice("medium");