
        const myName = document.querySelector("h1");
        myName.style.cursor = "pointer";
        myName.title = "Click me!";
        myName.addEventListener("click", function () {
            // Pick a random color and make it the page's accent
            const randomColor = "hsl(" + Math.floor(Math.random() * 360) + ", 70%, 45%)";
            document.documentElement.style.setProperty("--accent", randomColor);
        });
