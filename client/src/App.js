import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

const App = () => {
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    const userEmail = "farnooshmoayeri@gmail.com";
    try {
      const response = await fetch(`http://localhost:8080/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <div className="app">
      <ListHeader listName={"🏝️ Holiday tick list"} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
