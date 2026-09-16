const validite = [
  {imgSrc:"pp.jpg", name:"5 HEURE",imgSrce:"trat.png",parapheun:"50",paragraphedeux:"FCFA",titreval:"Validite",parag:"1 jour" },
  {imgSrc:"pp.jpg", name:"7 JOURS",imgSrce:"trat.png",parapheun:"500",paragraphedeux:"FCFA",titreval:"Validite",parag:" 7 jour" },
  {imgSrc:"pp.jpg", name:"1 MOIS",imgSrce:"trat.png",parapheun:"1500",paragraphedeux:"FCFA",titreval:"Validite",parag:" 30 jour" },
  {imgSrc:"pp.jpg", name:"1 MOIS",imgSrce:"trat.png",parapheun:"1500",paragraphedeux:"FCFA",titreval:"Validite",parag:" 30 jour" },
]



function cretCarde (item) {
  const divPrin = document.createElement('div');
  divPrin.className ='md:ml-[60px] md:bg-gray-50 md:h-[290px] md:w-[150px] md:relative md:top-2 md:rounded-3xl md:items-center md:text-center bg-gray-50 relative top-7 ml-4 h-[220px] w-[85px] rounded-3xl items-center  text-center';

  const divSec = document.createElement('div');
  divSec.className = 'md:p-4 md:flex md:flex-col p-1 flex flex-col';
  divPrin.appendChild(divSec);

  const divDesVal = document.createElement('div');
  divDesVal.className = 'md:rounded-full md:h-[130px] md:w-[130px] bg-blue-800 p-5 h-20 w-20 rounded-full  md:bg-blue-800 md:p-3   ';
  divSec.appendChild(divDesVal);

  const iconImag = document.createElement('img');
  iconImag.className = 'md:h-[90px] md:w-[90px] m-2 h-10 w-15';
  iconImag.src = item.imgSrc;
  divDesVal.appendChild(iconImag);
  divSec.appendChild(divDesVal);

  const divDesdon = document.createElement('div');
  const titreTrois = document.createElement('h3');
  titreTrois.className = ' md:text-blue-800 md:font-bold text-blue-800 mr-2font-sm-bold';
  titreTrois.textContent = item.name;
  divDesdon.appendChild(titreTrois);
  divSec.appendChild(divDesdon);

  const imagSce = document.createElement("img");
  imagSce.className = "md:w-24 w-16"; 
  imagSce.src = item.imgSrce ;
  divDesdon.appendChild(imagSce);
  const pargUn = document.createElement("p");
  pargUn.className = "md:text-amber-700 md:font-bold text-amber-700 font-bold"
  pargUn.textContent = item.parapheun;
  divDesdon.appendChild(pargUn);
  const paraDeux = document.createElement("p");
  paraDeux.className = "font-bold" 
  paraDeux.textContent = item.paragraphedeux;
  divDesdon.appendChild(paraDeux);

  const divVal = document.createElement("div");
  divVal.className = "md:bg-blue-800 md:rounded-b-3xl  bg-blue-800 rounded-b-3xl ";
  divPrin.appendChild(divVal);
  const titreVal = document.createElement("h3");
  titreVal.className = " md:font-bold md:text-2xl md:text-gray-50 font-bold text-xl text-gray-50";
  titreVal.textContent = item.titreval;
  divVal.appendChild(titreVal)
  const paragrapheVal = document.createElement("p");
  paragrapheVal.className = "font-bold text-xl text-gray-50 font-bold md:text-xl md:text-gray-50";
  paragrapheVal.textContent = item.parag;
  divVal.appendChild(paragrapheVal);

  return divPrin
}

const paraVn = document.getElementById("paraVn")

validite.forEach(p => {
  const validites = cretCarde(p);
  paraVn.appendChild(validites);
  
});