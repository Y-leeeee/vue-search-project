<template>
  <h1>Contact us</h1>
  <form
    accept-charset="UTF-8"
    action="https://www.formbackend.com/f/{your-identifier}"
    method="POST"
  >
    <div class="form-field">
      <label for="name">Name</label>
      <input type="text" id="name" required />
    </div>

    <div class="form-field">
      <label for="email">Email</label>
      <input type="email" id="email" required />
    </div>
    <div class="form-field">
      <label for="message">Message</label>
      <textarea type="message" id="message" required></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</template>

<style scoped>
form {
  text-align: center;
}
h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 8rem;
}
.form-fields {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
}
input[type="text"],
input[type="email"],
textarea {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
}
body {
  display: block;
}
button[type="submit"] {
  background-color: rgb(67 56 202);
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
  margin-top: 2rem;
}
</style>
