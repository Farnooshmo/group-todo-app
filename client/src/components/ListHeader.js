import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName, getData }) => {
  const [showModal, setShowMpdal] = useState(false);
  const signOut = () => {
    console.log("signout");
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowMpdal(true)}>
          ADD NEW
        </button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      {showModal && (
        <Modal model={"create"} setShowMpdal={setShowMpdal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
