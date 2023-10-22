import { Serie } from './Serie.js';
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "documents/BreakingBad.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "documents/Orange.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "documents/Game.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "documents/TheBigBangTheory.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "documents/Sherlock.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "documents/AveryEnglishScandal.jpg"),
];
var serieTable = document.getElementById("serie");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    mostrarDatosSerie(serie);
}
mostrarCursos(series);
mostrarEstadisticas(series);
function mostrarDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr><td>Nombre:</td><td>".concat(serie.name, "</td></tr>\n                            <tr><td>Channel:</td><td>").concat(serie.channel, "</td></tr>\n                            <tr><td>Seasons:</td><td>").concat(serie.seasons, "</td></tr>\n                            <tr><td>Description:</td><td>").concat(serie.description, "</td></tr>\n                            <tr><td>Webpage:</td><td>").concat(serie.webpage, "</td></tr>\n                            <tr><td>Image:</td><td><img src=\"").concat(serie.image, "\" width=\"200\" height=\"200\"></td></tr>");
    serieTable.appendChild(tbodySerie);
}
function mostrarEstadisticas(array) {
    var numeroElementos = 0;
    for (var index = 0; index < array.length; index++) {
        numeroElementos += array[index].seasons;
    }
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Seasons average: ".concat(numeroElementos / array.length, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarCursos(array) {
    var cursosTbody = document.createElement("tbody");
    for (var index = 0; index < array.length; index++) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(array[index].id, "</td>\n                            <td>").concat(array[index].name, "</td>\n                            <td>").concat(array[index].channel, "</td>\n                            <td>").concat(array[index].seasons, "</td>");
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
