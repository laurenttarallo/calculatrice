//DOM
const touches = [...document.querySelectorAll('.bouton')]; // BALISES OUVRANTES POUR LE TABLEAU
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector(".ecran");
// la fonction (MAP) prend chaque element d'un tableau
//fait quelque chose a cet element (fonction callBack),
//et retourne le resultat sous forme d'un nouveau tableau
// dans notre cas ce sera dans une variable nouveau tab
// const tableau = [3,5,9];
// console.log(tableau);
// const nouveauTableau = tableau.map(element => element*2);
// console.log(nouveauTableau);

document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString();
//   console.log(valeur,typeof valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
//   console.log(e);
  calculer(valeur);
});
//POUR EVITER QUE DAUTRES TOUCHES NE FONCTIONNE
// ON scan uniquement notre liste de key code et includes renvoi la valeur true , si j'avais utiliser une touche non programmée dans ma keyliste j'aurais eu un false en consol log
const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];//ON RECUPERE JUSTE LA TOUCHE SUR LAQUELLE ON A APPUYE DANS LE TABLEAU INDEXKEYCODE
        ecran.textContent += touche.innerHTML;
    }
  }
};
//si on tape n'importe quoi on obtient une erreur dans le consol log mais pas visible de l'utilisateur on va rajouter un event
window.addEventListener('error', (e) =>{
    alert ('Une erreur est survenue dans votre calcul : ' +  e.message)
})