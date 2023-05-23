import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
  // podemos pasar funciones como props como cualquier otro valor que no se string, es decir entre llaves { }
  const formatUserName = (userName) => `@${userName}`;

  // podemos pasar tambien elementos que seran renderizados donde los coloquemos dentro del hijo
  const formattingUserName = <span>@UserName</span>;

  return (
    <div className="App">
      <h2 style={{ gap: '4px', marginLeft: '10px', fontSize: '20px'}}>A quién seguir</h2>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="VueJs"
        name="Vue"
        avatar="vuejs"
        // se peude pasar props boolenas con solo el nombre pero solo tomaran el valor de true
        initialIsFollowing
      >
        {/* se puede envolver contenido html en un componente para que este sea recuperado en el hijo con la propiedad children */}
        Vue
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Angular"
        name="Angular"
        avatar="angular"
        // para pasar el valor de false en una prop booleana no hay un metodo abreviado
        initialIsFollowing={false}
      >
        Angular
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Astro"
        name="Astro"
        avatar="astrojs"
        initialIsFollowing
      >
        Astro
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="ReactJs"
        name="React"
        avatar="reactjs"
        initialIsFollowing={false}
      >
        React
      </TwitterFollowCard>
      <div className="more-results">
        <a>Mostar más</a>
      </div>
    </div>
  );
}
