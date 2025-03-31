async function search(username, password, callback) {
  try {
      const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      callback(result.success);
  } catch (error) {
      console.error('Error:', error);
      callback(false);
  }
}