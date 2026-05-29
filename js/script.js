const themeBtn = document.getElementById("themeBtn");

function applyTheme(isDark, save = true) {
    document.body.classList.toggle("dark", isDark);

    themeBtn.textContent = isDark ? "☀️" : "🌙";

    if (save) {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }
}

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    const isDark = savedTheme === "dark";

    applyTheme(isDark, false);
});

themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");

    applyTheme(!isDark);
});

const loadMoreBtn = document.getElementById("loadMore");
const moviesContainer = document.getElementById("moviesContainer");

loadMoreBtn.addEventListener("click", () => {

    const movies = [
        {
            title: "Интерстеллар",
            genre: "Фантастика, драма",
            image: "img/interstellar.jpg"
        },
        {
            title: "Джокер",
            genre: "Триллер, драма",
            image: "img/joker.jpg"
        }
    ];

    movies.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie-card";

        card.style.backgroundImage = `url(${movie.image})`;

        card.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.genre}</p>
        `;

        moviesContainer.appendChild(card);
    });

    loadMoreBtn.textContent = "Фильмы загружены";
    loadMoreBtn.disabled = true;
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = document.getElementById("email").value;
    const message = form.querySelector("textarea").value;

    if (!email.includes("@")) {
        alert("Введите корректный email");
        return;
    }

    console.log({ name, email, message });

    alert("Сообщение отправлено!");
});