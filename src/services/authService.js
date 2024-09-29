export async function login(email, password) {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Allows sending cookies to the backend
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // If the response is not successful (response.ok === false), throw an error
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message); // Error to call the catch block
    }

    return await response.json(); // Return success response
  } catch (error) {
    throw new Error(error.message || "Server communication failed");
  }
}
