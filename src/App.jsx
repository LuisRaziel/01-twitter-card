import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  
  // podemos pasar funciones como props como cualquier otro valor que no se string, es decir entre llaves { }
  const formatUserName = (userName) => `@${userName}`;
  
  // podemos pasar tambien elementos que seran renderizados donde los coloquemos dentro del hijo
  const formattingUserName = <span>@UserName</span>;

  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="VueJs"
        name="Vue"
        avatar="vuejs"
        // se peude pasar props boolenas con solo el nombre pero solo tomaran el valor de true
        isFollowing
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Angular"
        name="Angular"
        avatar="angular"
        // para pasar el valor de false en una prop booleana no hay un metodo abreviado
        isFollowing={false}
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Astro"
        name="Astro"
        avatar="astrojs"
        isFollowing
      />
      ;
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="ReactJs"
        name="React"
        avatar="reactjs"
        isFollowing={false}
      />
      ;
    </div>
  );
}
