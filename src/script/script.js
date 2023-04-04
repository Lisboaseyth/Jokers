const textJoke = document.querySelector('.joke_text')
const btnNewJoke = document.querySelector('.btn_new_joke')

const newJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then((resp) => resp.json()
    )
    .then((data) => {
        const joke = data.joke;
        textJoke.innerText = joke;
    })
}

newJoke()
btnNewJoke.addEventListener('click', newJoke)