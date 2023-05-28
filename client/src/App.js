import ListHeader from "./components/ListHeader";
import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = "farnooshmoayeri@gmail.com";
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:9090/todos/${userEmail}`);
      const json = response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  //Sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  useEffect(() => getData, []);

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
