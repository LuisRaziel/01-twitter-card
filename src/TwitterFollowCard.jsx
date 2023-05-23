import { useState } from "react";
import "./TwitterFollowCard.css";
export function TwitterFollowCard({
  userName,
  // name,
  avatar,
  initialIsFollowing,
  formatUserName,
  children,
}) {
  // las props que se reciben en el componte hijo no se puede modificar, deben ser inmutables
  // para añadir un valor nuevo desde una prop o complemetarlo se puede usar una constante: const userName = props.userName

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  // se pueden usar props para inicializar estados del componente
 
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followButton is-following"
    : "tw-followButton";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${avatar}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong> {children} </strong>
          <span className="tw-followCard-user">
            {formatUserName(userName)}{" "}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followButton-text">{text}</span>
          <span className="tw-followButton-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
