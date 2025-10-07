let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries= ()=> { 
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries=() =>{
   let user= client;
   console.log(user);// john
   client = "Betty";
   console.log(client); // Betty
   console.log(user);// john because client is a primitive string so the copying is pass by value

   const shopping =groceries;
   groceries.totalPrice='35$';
   console.log(shopping); // yes because groceries is an object it means the copying is by referance 

   groceries.paid= false;
   console.log(shopping); // yes because it's the same thing groceries is an object so the copying is always by referance as long as it's an object or an array or a function
};
cloneGroceries()

