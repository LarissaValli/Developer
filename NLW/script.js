const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementBuId('questionInput')
const askButtom = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const perguntarAI = async (question, game, apiKey) ==> {

}


const enviarFormulario = (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value 
    const game = gameSelect.value
    const question = questionInput.value

    console.log({apiKey, game, question})

    if(apiKey == '' || game == '' || question == '') {
        alert('Por favor, preencha todos os campos')
        return
    }

    askButton.disabled = true
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading')

    try {
        //perguntar para IA
    } catch(error) {
        console.log('Erro: ', error)
    } finally {
        askButton.disabled = false 
        askButton.textContent = "Perguntar"
        askButton.classList.remove('loading')
    }

    console.log(event)
}
form.addEventListener('submit', enviarFormulario)
