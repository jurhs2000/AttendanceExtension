let participantsArray = []
let attendance = {
    date: new Date().toLocaleDateString(),
}
participantsArray.push(new Date().toLocaleDateString())

function saveStaticDataToFile() {
    let archivo = ''
    for (const item in attendance) {
        archivo += `${item}: ${attendance[item]}\n`
    }
    var file = new Blob([archivo], {type: 'text/plain'})
    var a = document.getElementById('a');
    a.href = URL.createObjectURL(file);
    a.download = `Asistencia ${new Date().toLocaleDateString()}`
    a.classList.remove('not-downloadable')
    a.classList.add('download-link')
}

let buttonFinish = document.createElement('button')
buttonFinish.innerHTML = 'Generar Asistencia'
buttonFinish.onclick = saveStaticDataToFile
buttonFinish.classList.add('button-generate')
let genareButtonExists = false

let downloadLink = document.createElement('a')
downloadLink.innerHTML = 'Descargar Archivo de Asistencia'
downloadLink.id = 'a'
downloadLink.classList.add('not-downloadable')

setInterval(() => {
    let container = document.getElementById('wc-container-right')
    if (container) {
        let list = document.getElementsByClassName('participants-ul')[0]
        if (!genareButtonExists) {
            list.appendChild(buttonFinish)
            list.appendChild(downloadLink)
        }
        let participants = list.querySelectorAll('[role="application"]')
        participants.forEach((participant) => {
            if (!attendance.hasOwnProperty(participant.getAttribute('aria-label'))) {
                let name = participant.getAttribute('aria-label')
                attendance[participant.getAttribute('aria-label')] = new Date().toLocaleTimeString()
                participantsArray.push(participant.getAttribute('aria-label'))
            }
        })
    }
}, 10000);