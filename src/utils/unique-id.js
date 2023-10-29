export function generateUniqueId() {
    // Create a timestamp
    const timestamp = Date.now();
  
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 1000000);
  
    // Combine the timestamp and random number to create a unique ID
    const uniqueId = `${timestamp}-${randomNumber}`;
  
    // Return the unique ID
    return uniqueId;
  }
  