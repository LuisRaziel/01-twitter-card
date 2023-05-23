import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  {
    name: "Vue",
    userName: "vuejs",
    avatar: "vuejs",
    isFollowing: true,
  },
  {
    name: "Angular",
    userName: "angular",
    avatar: "angular",
    isFollowing: true,
  },
  {
    name: "Astro",
    userName: "astro",
    avatar: "astrojs",
    isFollowing: false,
  },
  {
    name: "React",
    userName: "reactjs",
    avatar: "reactjs",
    isFollowing: true,
  },
];

export function App() {
  // podemos pasar funciones como props como cualquier otro valor que no se string, es decir entre llaves { }
  const formatUserName = (userName) => `@${userName}`;

  // podemos pasar tambien elementos que seran renderizados donde los coloquemos dentro del hijo
  const formattingUserName = <span>@UserName</span>;
  return (
    <div className="App">
      <h2 style={{ gap: "4px", marginLeft: "10px", fontSize: "20px" }}>
        A quién seguir
      </h2>
      {users.map((user) => {
        const { name, userName, avatar, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            formatUserName={formatUserName}
            userName={userName}
            avatar={avatar}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
      <div className="more-results">
        <a>Mostar más</a>
      </div>
    </div>
  );
}
