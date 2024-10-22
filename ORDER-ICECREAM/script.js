// Function to order food
async function orderFood() {
  console.log("Ordering food...");
  await new Promise((resolve) => setTimeout(resolve, 2000)); 
  console.log("Food ordered successfully!");
}

async function chooseFlavor() {
  console.log("Choosing flavor...");
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  console.log("Flavor chosen: Italian");
}

// Function to add topping
async function addTopping() {
  console.log("Adding topping...");
  await new Promise((resolve) => setTimeout(resolve, 1500)); 
}

// Function to process food
async function processFood() {
  console.log("Processing food...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Food processed successfully!");
}

// Function to serve food
async function serveFood() {
  console.log("Serving food...");
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  console.log("Food served!");
}

// Main function to execute the order
async function executeOrder() {
  await orderFood();
  await chooseFlavor();
  await addTopping();
  await processFood();
  await serveFood();
}

// Execute the order
executeOrder();
