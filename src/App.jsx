import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import ErrorMsg from "./components/general/ErrorMsg";
import UserLoader from "./components/general/UserLoader";

const App = () => {

  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading');

  const loaderArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const baseUrl = import.meta.env.VITE_BASE_URL;


  const getUsers = async () => {
    setStatus('loading');
    try {
      const res = await fetch(`${baseUrl}/users`);
      if (!res.ok) {
        setStatus('error');
        throw new Error('Something went wrong...');
      }

      const data = await res.json();
      setUsers(data);
      setTimeout(() => {
        setStatus('success');
      }, 2000)

    } catch (e) {
      console.log(e)

      setTimeout(() => {
        setStatus('error');
      }, 2000)
    }
  }

  useEffect(() => {
    let ignore = false

    if (!ignore) {
      getUsers();
      ignore = true;
    } else {
      return;
    }
  }, [])


  return <div className="flex flex-col gap-4">
    {
      status === 'error' ? <ErrorMsg /> : (status === 'success' ? (users.map((user) => <UserCard key={user.id} user={user} />)) : loaderArray.map((item, index) => <UserLoader key={index} />))
    }
  </div>;
};

export default App;
