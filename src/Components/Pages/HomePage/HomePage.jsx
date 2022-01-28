import "./HomePage.scss";

export default function HomPage() {
  return (
    <section className="c-homePage">
      <h1>The Rick and Morty API</h1>
      <article className="c-homePage__hero">
        <h2>Lo que hace de ‘Rick y Morty’ una serie imprescindible</h2>
        <h4>Wubalubadubdub!</h4>
        <div className="c-homePage__hero-span">
          <span>por</span>
          <a href="https://hipertextual.com/author/vonnelara"> Vonne Lara</a>
        </div>
        <time>
          30 de julio de 2017 <span>Última actualización de marzo de 2021</span>{" "}
        </time>
        <img
          className="c-homePage__hero-img"
          src="../Images/rick-morty-.jpg"
          alt=""
        />
        <div className="c-homePage__hero-text" >
          <p>
            La grandiosa serie animada "Rick y Morty" regresa con su tercera
            temporada. Esta esperadísima entrega por fin nos llevará de nueva
            cuenta al alocado mundo universo creado por Justin Roiland y Dan
            Harmon.
          </p>

          <p>
            Desde que en 2015 fuera lanzada la segunda temporada todos los fans
            no teníamos claro cuando volvería la siguiente entrega. En el April
            Fool's Day pasado fue estrenado por sorpresa el primer episodio de
            la tercera temporada. Esto levantó de nuevo el clamor de los
            fanáticos de la serie y poco después tuvimos una fecha clave para el
            estreno de la nueva temporada: 30 de julio.
          </p>

          <p>
            Es por esto que repasaremos algunas de las muchas locuras de este
            increíble show para ponernos a tono con lo que está por venir. Es
            muy difícil escoger entre los muchos elementos que hacen de "Rick y
            Morty" una serie imprescindible y es posible cada quien tiene sus
            propios motivos por los que espera con ansias los nuevos episodios.
            Tengamos en cuenta que este es un ejercicio para hacer honor a este
            show y que puedes compartir nuestra comunidad lo que más te gusta o
            te ha sorprendido (hasta ahora) de "Rick y Morty".
          </p>
        </div>
      </article>
    </section>
  );
}
