//DOMContentLoaded para que todo cargue antes de ejecutarse, event.preventDefault para la suerte.
document.addEventListener('DOMContentLoaded', () => {
    event.preventDefault()
//Se obtienen los elementos del html
    const Mostrar = document.getElementById('contener-frase');
    const generar = document.getElementById('generar-frase');
    const reset = document.getElementById('reset');
//Se define la funcion para obtener frases provenientes de la API
    async function obtenerfrase(){
        try{
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            if (!response.ok){
                throw new Error('Error')
            }
            const data = await response.json()
            Mostrar.textContent = data.value;
        } catch (error){
            console.error(error);
            Mostrar.textContent = 'Error'
        }
    }
    
    // Evento clic para obtener una frase al hacer clic en el botón
    generar.addEventListener('click', obtenerfrase);

    // Evento clic para restablecer el texto del contenedor de frases
    reset.addEventListener('click', () => {
        Mostrar.textContent = '';
    });
});