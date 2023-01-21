const form = document.querySelector("#form-habits")
const nwlSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nwlSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🛑")
    return
  }

  alert("Adicionado com Sucesso ✔")
  nwlSetup.addDay(today)
}

function save() {
  localStorage.setItem("NWLSetup@habits", JSON.stringify(nwlSetup.data)) || {}
}

const data = JSON.parse(localStorage.getItem("NWLSetup@habits"))
nwlSetup.setData(data)
nwlSetup.load()