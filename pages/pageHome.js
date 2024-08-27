export function pageHome() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Atlyginimai</title>
         <link rel="stylesheet" href="/css/main.css" />
          <link rel="stylesheet" href="/css/header.css" />
    </head>
    <body>
     <header>
         <img src="/img/logo.png" alt="Logo">
         <nav> 
             <a href="/create-account">Home</a>
             <a href="/about">About</a>
         </nav>
     </header>

     <main>
          <h1>Welcome to our platform</h1>
          <p>Choose your next action<p>
          <a href="/">Create acount</a>
           <a href="/">View all acounts</a>
     </main>

     <FOOTER>
          Cipyrigth &copy; 2024
     </FOOTER>
    </body>
    </html>`
}