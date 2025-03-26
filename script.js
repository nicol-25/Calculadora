let intentos = 0;
let operacion = '';
const acertijos = [
    { pregunta: "¿Cuántos meses tienen 28 días?", respuesta: "todos" },
    { pregunta: "¿Qué está en el centro de París?", respuesta: "la letra r" },
    { pregunta: "¿Qué hay que romper antes de usar?", respuesta: "el huevo" },
    { pregunta: "¿Qué sube, pero nunca baja?", respuesta: "tu edad" },
    { pregunta: "Cuando me necesitan me tiran. Cuando terminan conmigo me traen de vuelta. ¿Qué soy?", respuesta: "un ancla" },
    { pregunta: "Si me nombras desaparezco, ¿qué soy?", respuesta: "el silencio" },
    { pregunta: "Qué es lo que es algo y a la vez nada", respuesta: "el pez" },
    { pregunta: "Tiene manos, pero no puede aplaudir, ¿qué es?", respuesta: "un reloj" },
    { pregunta: "Soy alto cuando soy joven y corto cuando soy viejo, ¿qué soy?", respuesta: "una vela" },
    { pregunta: "¿Qué te pertenece, pero otras personas lo usan más que tú?", respuesta: "tu nombre" },
    { pregunta: "¿Qué puedes sostener sin tocarlo?", respuesta: "una conversacion" },
    { pregunta: "Solo puedo vivir donde hay luz, pero muero si la luz brilla sobre mí … ¿Qué soy?", respuesta: "la sombra" },
    { pregunta: "Quien lo hace no lo dice, quien lo recibe, no lo sabe, quien lo sabe no lo quiere. ¿Qué es?", respuesta: "el dinero falso" },
    { pregunta: "¿Qué es negro cuando lo compras, rojo cuando lo usas, y gris cuando lo tiras", respuesta: "carbon" },
    { pregunta: "¿Qué hay delante de ti siempre pero que no se puede ver?", respuesta: "el futuro" },
    { pregunta: "Un hombre mira una foto y dice: 'No tengo hermanos ni hermanas, pero el padre de este hombre es el hijo de mi padre'. ¿A quién está mirando?", respuesta: "su hijo" },
    { pregunta: "Me puedes romper sin tocarme ni verme. ¿Qué soy?", respuesta: "una promesa" },
    { pregunta: "Cuanto más me quitas, más grande me vuelvo. ¿Qué soy?", respuesta: "un agujero" },
    { pregunta: "Tengo un inicio, pero no un fin. ¿Qué soy?", respuesta: "un círculo" },
    { pregunta: "Si me tienes, quieres compartirme. Si me compartes, ya no me tienes. ¿Qué soy?", respuesta: "un secreto" }
];

const frasesSarcasticas = [
    "¡Increíble! Pero increíblemente mal.",
    "¿Seguro que no quieres una calculadora de juguete?",
    "¿Tus neuronas están en huelga?",
    "Déjame adivinar… ¿te saltaste las clases de matemáticas?",
    "Te daré un consejo: usa los dedos, quizás te ayude.",
    "Mira el lado positivo, al menos intentaste...",
    "¿Tienes un primo pequeño? Tal vez él pueda ayudarte.",
    "¡Uy! Esto es doloroso de ver...",
    "Si la paciencia es una virtud, yo ya soy un santo contigo.",
    "Oh vaya, otro error... ¡esto se está poniendo emocionante!",
    "Si el error fuera un arte, serías Picasso.",
    "No te preocupes, la NASA tampoco te iba a contratar.",
    "¡Sorprendente! Pero no en el buen sentido.",
    "Parece que tienes un doctorado en... equivocarte.",
    "¿Así es como sumas el cambio cuando compras pan?",
    "¡Error 404: inteligencia no encontrada!",
    "Voy a empezar a contar cuántas veces fallas… ¡esto se pone divertido!",
    "Si la calculadora tuviera sentimientos, ya estaría llorando.",
    "Mmm... ¿por qué tengo la sensación de que lo volverás a intentar y fallarás otra vez?",
    "Quizás deberíamos probar con una piedra, seguro que tiene más probabilidades de acertar."
];

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("sarcasmo").innerText = "";
    intentos = 0;
}

function solve() {
    let display = document.getElementById("display");
    operacion = display.value;

    try {
        let resultado = eval(operacion);
        let acertijoSeleccionado = acertijos[Math.floor(Math.random() * acertijos.length)];
        
        let respuestaUsuario = prompt(acertijoSeleccionado.pregunta);
        if (respuestaUsuario && respuestaUsuario.toLowerCase().trim() === acertijoSeleccionado.respuesta) {
            display.value = resultado;
            intentos = 0;
        } else {
            intentos++;
            mostrarSarcasmo();
        }

    } catch {
        mostrarSarcasmo(true);
    }

    if (intentos >= 3) {
        display.value = "";
        document.getElementById("sarcasmo").innerText = "¡Ya mejor deja de intentar!";
        setTimeout(() => {
            document.getElementById("sarcasmo").innerText = "";
        }, 3000);
    }
}

function mostrarSarcasmo(error = false) {
    let mensaje = error ? "Error de sintaxis... al menos eso intentaste." : frasesSarcasticas[Math.floor(Math.random() * frasesSarcasticas.length)];
    let sarcasmo = document.getElementById("sarcasmo");

    sarcasmo.innerText = mensaje;
    sarcasmo.style.fontFamily = "Arial, Times New Roman";
    sarcasmo.style.fontSize = "12px";
    setTimeout(() => {
        sarcasmo.innerText = "";
        document.getElementById("display").value = operacion;
    }, 3000);
}
// FUNCION PARA CONVERTIR A NÚMEROS CHINOS
function convertirANumerosChinos(numero) {
    const numerosChinos = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    return numero.toString().split("").map(char => {
        if (char === ".") return "点";  // Punto decimal en chino
        if (char === "-") return "负";  // Signo negativo en chino
        return numerosChinos[parseInt(char)] || char;
    }).join("");
}