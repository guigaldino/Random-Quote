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
        title.style.display = "none"
        let quote = response
        authorName.textContent = quote[0].author
        category.textContent = quote[0].category
        quoteText.textContent = `"${quote[0].quote}"`
    })
})

btnCopyQuote.addEventListener('click', function () {
    alert("copiar")
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

