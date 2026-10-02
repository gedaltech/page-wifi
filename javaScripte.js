const validite = [
  {
    imgSrc: 'pp.png',
    name: '5 HEURE',
    imgSrce: 'trat.png',
    parapheun: '50',
    paragraphedeux: 'FCFA',
    titreval: 'Validité',
    parag: '1 jour'
  },
  {
    imgSrc: 'pp.png',
    name: '7 JOURS',
    imgSrce: 'trat.png',
    parapheun: '500',
    paragraphedeux: 'FCFA',
    titreval: 'Validité',
    parag: ' 7 jour'
  },
  {
    imgSrc: 'pp.png',
    name: '1 MOIS',
    imgSrce: 'trat.png',
    parapheun: '1500',
    paragraphedeux: 'FCFA',
    titreval: 'Validité',
    parag: ' 30 jour'
  },
  {
    imgSrc: 'pp.png',
    name: '1 MOIS',
    imgSrce: 'trat.png',
    parapheun: '1500',
    paragraphedeux: 'FCFA',
    titreval: 'Validité',
    parag: ' 30 jour'
  }
]

function cretCarde (item) {
  const divPrin = document.createElement('div')
  divPrin.className =
    'md:bg-gray-50 md:h-[290px] md:w-[150px] md:relative md:top-2 rounded-xl md:items-center md:text-center bg-gray-50 relative top-7 ml-4 h-[220px]  md:rounded-2xl items-center  text-center'

  const divSec = document.createElement('div')
  divSec.className = 'md:p-4 md:flex md:flex-col p-1 flex flex-col'
  divPrin.appendChild(divSec)

  const divDesVal = document.createElement('div')
  divDesVal.className =
    'md:rounded-full md:h-[130px] md:w-[130px] bg-blue-800 h-20 w-20 rounded-full  md:bg-blue-800 flex items-center justify-center align-center '
  divSec.appendChild(divDesVal)

  const iconImag = document.createElement('img')
  iconImag.className = 'md:h-[75px] md:w-[75px] m-2 h-8 w-8'
  iconImag.src = item.imgSrc
  divDesVal.appendChild(iconImag)
  divSec.appendChild(divDesVal)

  const divDesdon = document.createElement('div')
  const titreTrois = document.createElement('h3')
  titreTrois.className =
    ' md:text-blue-800 md:font-bold text-blue-800 mr-2font-sm-bold'
  titreTrois.textContent = item.name
  divDesdon.appendChild(titreTrois)
  divSec.appendChild(divDesdon)

  const imagSce = document.createElement('img')
  imagSce.className = 'md:w-24 w-16'
  imagSce.src = item.imgSrce
  divDesdon.appendChild(imagSce)
  const pargUn = document.createElement('p')
  pargUn.className = 'md:text-amber-700 md:font-bold text-amber-700 font-bold'
  pargUn.textContent = item.parapheun
  divDesdon.appendChild(pargUn)
  const paraDeux = document.createElement('p')
  paraDeux.className = 'font-bold'
  paraDeux.textContent = item.paragraphedeux
  divDesdon.appendChild(paraDeux)

  const divVal = document.createElement('div')
  divVal.className =
    'md:bg-blue-800 md:rounded-b-3xl  bg-blue-800 rounded-b-3xl '
  divPrin.appendChild(divVal)
  const titreVal = document.createElement('h3')
  titreVal.className =
    ' md:font-bold md:text-2xl md:text-gray-50 font-bold text-xl text-gray-50'
  titreVal.textContent = item.titreval
  divVal.appendChild(titreVal)
  const paragrapheVal = document.createElement('p')
  paragrapheVal.className =
    'font-bold text-xl text-gray-50 font-bold md:text-xl md:text-gray-50'
  paragrapheVal.textContent = item.parag
  divVal.appendChild(paragrapheVal)

  return divPrin
}

const paraVn = document.getElementById('paraVn')

validite.forEach(p => {
  const validites = cretCarde(p)
  paraVn.appendChild(validites)
})

function intercepterCodeTemps () {
  const codeTempsInput = document.getElementById('login')
  codeTempsInput.placeholder = 'Code temps'
  const passwordInput = document.getElementById('password')
  passwordInput.className =
    'rounded px-2 py-1 md:px-3 md:py-1.5 md:hover:bg-blue-200 hover:bg-blue-200 w-full hidden'
    const iconImag = document.getElementById('eyeicn');
    iconImag.className = `w-10 h-10 relative left-180 bottom-10 hidden`;
    
    

}

function intercepterAccount () {
  const codeTempsInput = document.getElementById('login')
  codeTempsInput.placeholder = 'Identifiant'
  const passwordInput = document.getElementById('password')
  passwordInput.className =
    'rounded px-2 py-1 md:px-3 md:py-1.5 md:hover:bg-blue-200 hover:bg-blue-200 w-full '
    const iconImag = document.getElementById('eyeicn');
    iconImag.className = `w-8 h-8 relative left-[400px] pt-4   bottom-10 md:w-10 md:h-10 md:relative md:left-[730px] `;
    
  }
  



const timeCode = document.getElementById('timeCode')
timeCode.addEventListener('click', () => intercepterCodeTemps())

function pesswordHidne(){
  const inputPassword = document.getElementById("password");
  const imgVois = document.getElementById("eyeicn");
  if(inputPassword.type === "password"){
    inputPassword.type = "text"
    imgVois.src = "eyes.svg"

  }else{
    inputPassword.type = "password";
    imgVois.src = "eye.svg"

  }
  
}
