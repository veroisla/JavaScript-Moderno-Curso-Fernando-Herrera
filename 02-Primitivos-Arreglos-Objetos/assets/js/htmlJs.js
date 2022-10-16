//MODIFICAR HTML DESDE JS, UTILIZANDO DOCUMENT.QUERYSELECTOR()

//HELLO WORLD

const helloWorld = document.querySelector('.hello');

helloWorld.innerHTML = helloWorld.innerHTML + ' Mundo';

//LOREM IPSUM

const article = document.querySelector('.article');
const contentArticle = '<h1>Título artículo</h1> <p> "Lorem ipsun doler" </p> ';

article.innerHTML = contentArticle;
