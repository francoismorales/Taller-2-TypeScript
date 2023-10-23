import {Serie} from './Serie.js';

export const series: Serie[] = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","documents/BreakingBad.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","documents/Orange.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "documents/Game.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "documents/TheBigBangTheory.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "documents/Sherlock.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "documents/AveryEnglishScandal.jpg"),
  ];

  let estadisticasTable : HTMLElement = document.getElementById("estadisticas")!;
  let cursosTable: HTMLElement = document.getElementById("cursos")!;
  const tarjeta = document.getElementById("tarjetas")!;

    mostrarCursos(series);
    mostrarEstadisticas(series);



  function mostrarEstadisticas(array: Serie[]):void{
    let numeroElementos: number = 0;
    for(let index = 0; index < array.length; index++){
      numeroElementos += array[index].seasons;
    }
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td>Seasons average: ${numeroElementos/array.length}</td>`;
    estadisticasTable.appendChild(trElement);
  }

  function mostrarCursos(array: Serie[]):void{
    let cursosTbody = document.createElement("tbody");
    for(let serie of array){
      let trElement:HTMLElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.id}</td>
      <td><a class="tarjetaTitulo" link="${serie.webpage}" cardImage="${serie.image}" cardDescription="${serie.description}">${serie.name}</a></td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
      cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);

    const tituloPeliculas = document.querySelectorAll(".tarjetaTitulo");
  
    tituloPeliculas.forEach((name) => {
        name.addEventListener("click", () => {

            const image = name.getAttribute("cardImage")!;
            const texto = name.getAttribute("cardDescription")!;
            const pagina=name.getAttribute("link")!;

            const ImagenAgregar = tarjeta.querySelector(".card-img-top") as HTMLImageElement ;
            const NombreAgregar = tarjeta.querySelector(".tarjetaTitulo") as HTMLHeadingElement;
            const DescripcionAgregar = tarjeta.querySelector(".tarjetaDescripcion") as HTMLParagraphElement;
            const PaginaAgregar = tarjeta.querySelector(".TarjetaLink") as HTMLAnchorElement;

            ImagenAgregar.src = image;
            console.log(ImagenAgregar.src);
            NombreAgregar.textContent = name.textContent!;
            DescripcionAgregar.textContent = texto;
            PaginaAgregar.href = pagina;

            tarjeta.style.display = "block";
        });

    });

  }

  cursosTable.addEventListener("click", (event) => {
    const target = event.target as HTMLTableCellElement;
    if (target.classList.contains("tarjetaTitulo")) {
        const foto = target.getAttribute("cardImage");
        const descripcion = target.getAttribute("cardDescription");

        const ImagenAgregar = tarjeta?.querySelector(".card-img-top") as HTMLImageElement;
        const TituloAgregar = tarjeta?.querySelector(".tarjetaTitulo") as HTMLHeadingElement;
        const DescripcionAgregar = tarjeta?.querySelector(".tarjetaDescripcion") as HTMLParagraphElement;

        if (ImagenAgregar && TituloAgregar && DescripcionAgregar && tarjeta) {
            ImagenAgregar.src = foto || "";
            TituloAgregar.textContent = target.textContent || "";
            DescripcionAgregar.textContent = descripcion || "";

            tarjeta.style.display = "block";
        }
    }
});
