export async function signup(name, email, password, cellphone) {
  try {
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Allows sending cookies to the backend
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        cellphone: cellphone,
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
