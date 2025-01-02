const quotes = [`“Be yourself; everyone else is already taken.”\n ― Oscar Wilde`, `“Be who you are and say what you feel, because those who \nmind don't matter, and those who matter don't mind.”― Bernard M. Baruch`,`“You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.”\n― William W. Purkey`, `“Be the change that you wish to see in the world.”\n― Mahatma Gandhi`, `“Live as if you were to die tomorrow. Learn as if you were to live forever.”\n― Mahatma Gandhi`, `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”\n― Ralph Waldo Emerson`, `"Every saint has a past, and every sinner has a future."\n- Oscar Wilde`, `"You were born to be real, not to be perfect."\n- Unknown`, `"Success lies in relentless execution of the basics."\n- Leonardo da Vinci`, `"He who has led you so far will guide you further"\n- Rumi`, `"Slow success builds character, fast success builds Ego"\n- Ratan Tata`, `"The secret of getting ahead is getting started"\n- Mark Twain`, `"Think lightly of yourself and deeply of the world"\n- Miyamoto Musashi`, `" Hard times create strong men. Strong men create good times.\nGood times create weak men.\nAnd weak men create hard times."\n- G.Michael Hope, "Those who remain"`]

const btn = document.querySelector("button");
const p = document.querySelector("p");


btn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    p.innerText = `${quotes[randomIndex]}`;
})