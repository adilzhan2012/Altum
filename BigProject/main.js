let text2 = document.getElementById("text2")
let das = document.getElementById("das")
let container4 = document.getElementById("container4")

async function fetchOpenAi() {
    const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
            model: "gpt-4.1",
            input: text2.value            //Сдезь короче данные нужны
        }),
    })

    const data = await response.json();
    parag.innerHTML = data.output[0].content[0].text;
}

das.addEventListener("click", function () {
    fetchOpenAi();
})


function scrollToCourses() {
  document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
}

