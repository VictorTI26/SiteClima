const botaoBuscar = document.getElementById("botao-buscar");
const campoCidade = document.getElementById("campo-cidade");
const containerResposta = document.getElementById("container-resposta");

botaoBuscar.addEventListener("click", async () => {
  const cidade = campoCidade.value;

  try {
    const cidadeFormatada = cidade.split(" ").join("_");
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7ce5a12fad9449c589f01524230407&q=${cidadeFormatada}`);
    const consulta = await response.json();

    if (consulta.error) {
      containerResposta.innerHTML = `<p>Erro: ${consulta.error.message}</p>`;
    } else {
      containerResposta.innerHTML = `
        <p><i class="fa-solid fa-location-dot"></i> ${consulta.location.name}</p>
        <p><i class="fa-solid fa-sun"></i> ${consulta.current.temp_c}°C</p>
        <p><i class="fa-solid fa-droplet"></i> ${consulta.current.humidity}%</p>
        <p><i class="fa-solid fa-wind"></i> ${consulta.current.wind_kph}kmh</p>
        <p><i class="fa-solid fa-person"></i> ${consulta.current.feelslike_c}°C</p>

      `;
    }
  } catch (error) {
    console.log(error,"Digite uma cidade valída");
  }
});
