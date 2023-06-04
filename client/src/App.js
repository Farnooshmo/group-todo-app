import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";

const App = () => {
  const userEmail = "farnooshmoayeri@gmail.com";
  const [tasks, setTasks] = useState(null);

  const AuthToken = false;

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  //slightly modified to run the server
  useEffect(() => {
    if (AuthToken) {
      getData();
    }
  }, []);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div className="app">
      {!AuthToken && <Auth />}
      {AuthToken && (
        <>
          <ListHeader listName={"🏝️ Holiday tick list"} getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}{" "}
        </>
      )}
    </div>
  );
};

export default App;
