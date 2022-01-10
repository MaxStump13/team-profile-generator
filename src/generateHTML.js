function generateHtml(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
    
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <main class ="container">
            <section class= "row">
            <header class = "col-12 text-center">
                <h1>My Team</h1>
            </header>
            <section class="col">
                <div class="card-deck my-4">
                <section class = "card">
                    <div class="card-header">
                        <h5 class="card-title">Name</h5>
                        <h5>Position</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">ID: </p>
                        <p class="card-text">Email: </p>
                        <p class="card-text">Office Number: </p>
                    </div>
                
                </section>
                </div>
            </section>
        </main>
        
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
        <script src="./assets/js/script.js"></script>
    </body>
    </html>`
}