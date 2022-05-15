function mandaZap(tag) {
    const texto = tag.firstElementChild.innerText;
    const numero = prompt("Qual é o número?");
    const twitterUrl = `https://api.whatsapp.com/send?
phone=55${numero}&text=${texto}`
    window.open(twitterUrl, "_blank");
  }