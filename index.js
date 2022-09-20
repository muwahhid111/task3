const header = () => {
  const h1 =  document.createElement("h1")
  h1.textContent = "Работа с DOM"
  document.body.prepend(h1);
};
header();

const div = document.createElement('div');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
li1.style.listStyleType = 'none';
li2.style.listStyleType = 'none'

const header2 = () => {
 const a = document.createElement('a');
 a.href = 'https://paper.dropbox.com/doc/DOM-KrSbmrOQHo09BZwgsOmhp';
 a.textContent = 'Текст'
div.append(a)
};
header2();

const collor = (red) => {
    document.body.style.backgroundColor = 'red'
}
collor();

const newText = (text) => {
    const li = document.createElement('li');
     li.textContent = text;
     li.style.listStyleType = 'none'
     ul.append(li)

};
newText('хелло ворлд');

const delDivv = (div) => {
     return div.remove()
}


const divv = document.createElement('div');
divv.id = 'copyright';
divv.textContent = 'INTOCODE';

document.body.append(div);
document.body.append(divv)
div.append(ul);
ul.append(li1, li2);

delDivv(divv);

