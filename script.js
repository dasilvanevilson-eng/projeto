function togglemode() {
  const html = document.documentElement
  // Essa é uma forma de fazer a funcionalidade tela clara e tela escura
  //  if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //{
  //Essa é outra forma de fazer a mesma função acima
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
