import "./TwitterFollowCard.css";
export function TwitterFollowCard({
  userName,
  name,
  avatar,
  isFollowing,
  formatUserName,
}) {
  // las props que se reciben en el componte hijo no se puede modificar, deben ser inmutables
  // para añaridr nu valor nuevo o complemetarlo se puede usar una constante: const userName = props.userName

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${avatar}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong> {name} </strong>
          <span className="tw-followCard-user">
            {formatUserName(userName)}{" "}
          </span>
        </div>
      </header>
      <aside>
        <button className="tw-followButton">Seguir </button>
      </aside>
    </article>
  );
}
