import React from "react";

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to the Cocktail app!</h2>
      <div style={{ backgroundColor: "#F8B195" }}>
        <img
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1425&q=80"
          alt="Welcome page cocktails"
          style={{ maxWidth: 700, paddingTop: 50, paddingBottom: 50 }}
        />
      </div>
    </div>
  );
}
