import "./ConnexionAdminApp.css";

const ConnexionAdminApp = () => {
  return (
    <div className="connexion-adminapp">
      <div className="footer">
        <b className="mot-de-passe">Mot de passe oublié ?</b>
        <div className="button">
          <div className="button-child" />
          <b className="se-connecter">
            <p className="se-connecter1">Se connecter</p>
          </b>
        </div>
      </div>
      <div className="subscriptionchoicescreen">
        <div className="header">
          <img className="header-child" alt="" src="/group-1.svg" />
          <b className="b">{`9:40 `}</b>
        </div>
        <b className="vous-tes">Vous êtes :</b>
        <div className="group-parent">
          <div className="group-wrapper">
            <div className="rectangle-parent">
              <div className="group-child" />
              <b className="administrateur">Administrateur</b>
            </div>
          </div>
          <div className="group-container">
            <div className="rectangle-parent">
              <div className="group-item" />
              <b className="administrateur">Référent</b>
            </div>
          </div>
          <div className="je-souhaite-accder">
            Je souhaite accéder à l’Espace KALAN pour lequel je suis le référent
          </div>
        </div>
        <div className="je-souhaite-accder-lespace-wrapper">
          <div className="je-souhaite-accder1">
            Je souhaite accéder à l’Espace KALAN de mon Etablissement
          </div>
        </div>
        <div className="subscriptionchoicescreen-inner">
          <div className="dj-membre-parent">
            <div className="dj-membre">{`Déjà membre ? `}</div>
            <b className="se-connecter2">Se connecter</b>
          </div>
        </div>
        <img
          className="bouton-suivant2-2-icon"
          alt=""
          src="/boutonsuivant2-2@2x.png"
        />
        <img
          className="bouton-suivant2-3-icon"
          alt=""
          src="/boutonsuivant2-2@2x.png"
        />
      </div>
      <div className="justthekk-1-parent">
        <img className="justthekk-1-icon" alt="" src="/justthekk-1@2x.png" />
        <div className="main-page">
          <b className="title">Connexion</b>
        </div>
      </div>
      <div className="connexion-adminapp-child" />
      <div className="connexion-adminapp-item" />
      <div className="connexion-adminapp-inner" />
      <div className="identifiant">identifiant</div>
      <div className="div">@</div>
      <div className="div1">************</div>
      <b className="identifiant1">Identifiant</b>
      <b className="mot-de-passe1">Mot de passe</b>
      <img className="oeil2-3-icon" alt="" src="/oeil2-3@2x.png" />
      <div className="oeil1-2" />
      <div className="oeil1-3" />
    </div>
  );
};

export default ConnexionAdminApp;
