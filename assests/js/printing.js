const text = [
    'Меня зовут Савин Алексей.\n',
    'Я веб-разработчик.\n',
    'Занимаюсь разработкой сайтов с применением технологий HTML/CSS/JS/React.\n',
    'Считаю, что к любому продукты нужно подходить, как к произведению искусства.\n',
    'Моим главным приоритетом в работе является качество выпускаемого продукта.\n'
];

let line = 0;
let count = 0;
let result = '';
function typeLine() {
    let interval = setTimeout(
        () => {
            result += text[line][count]
            document.querySelector('pre').innerHTML =result +'|';


            count++;
            if (count >= text[line].length) {
                count = 0;
                line++;
                if (line == text.length) {
                    clearTimeout(interval);
                    document.querySelector('pre').innerHTML =result;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(130*2)))
}
typeLine();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}