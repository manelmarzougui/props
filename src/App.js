import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const personne = {
    fullname: "Manel Marzougui",
    bio: "Queen",
    profession: "etudiante",
    img: "https://static.vecteezy.com/ti/vecteur-libre/p1/2002257-belle-femme-avatar-personnage-icone-gratuit-vectoriel.jpg",
  };
  const handleName = (x) => {
    alert(x);
  };

  return (
    <div className="App">
      <Profile personne={personne} handlname={handleName}>
        <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/2002257-belle-femme-avatar-personnage-icone-gratuit-vectoriel.jpg" />
      </Profile>
    </div>
  );
}

export default App;
