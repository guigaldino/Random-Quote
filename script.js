//API KEY = MK2aJ9fpCEmsvquRPa4D7Q==XEQQ4AfJiI8HRqxT

//VARIAVEIS
let btnGenerateQuote = document.getElementById("generateQuote")
let btnCopyQuote = document.getElementById("copyQuote")
let authorName = document.getElementById("authorName")
let category = document.getElementById("category")
let quoteText = document.getElementById("quoteText")
let title = document.getElementById("titleQuote")

//EVENTOS
btnGenerateQuote.addEventListener('click', function () {
    generateRandomQuoete().then((response) => {
        let newTag;
        if (category.children.length === 0) {
            newTag = document.createElement("p");
            newTag.classList.add("tag");
            category.appendChild(newTag);
        } else {
            newTag = category.children[0];
        }

        title.style.display = "none"

        let quote = response
        authorName.textContent = quote[0].author
        newTag.textContent = quote[0].category
        quoteText.textContent = `"${quote[0].quote}"`
    })
})

btnCopyQuote.addEventListener('click', function () {
    copyQuote()
})

//FUNÇÕES
async function generateRandomQuoete() {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
        headers: { 'X-Api-Key': 'MK2aJ9fpCEmsvquRPa4D7Q==XEQQ4AfJiI8HRqxT' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    })
    return response.json()
}

function copyQuote() {
    const quote = quoteText.textContent

    if (!quote || quote.trim() === "") {
        alert("Não há citação para copiar!");
        return;
    }

    const input = document.createElement("input")
    input.value = quote
    document.body.appendChild(input)
    input.select()
    document.execCommand("copy")
    document.body.removeChild(input)
    alert("Texto copiado para a área de transferência!");
}

