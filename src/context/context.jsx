import { createContext, useState, useContext } from "react";
import * as api from "../api/repository";
export const RepoContext = createContext({});

export function RepositoryProvider({ children }) {
  const [repositoriesArray, setRepositoriesArray] = useState([]);
  const [urlEnding, setUrlEnding] = useState("");

  const searchRepository = async () => {
    const resp = await api.getRepository(urlEnding);
    setRepositoriesArray([...repositoriesArray, resp]);
    setUrlEnding("");
    return resp.data;
  };

  return (
    <RepoContext.Provider
      value={{
        repositoriesArray,
        setRepositoriesArray,
        urlEnding,
        setUrlEnding,
        searchRepository,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}
export const useRepositories = () => useContext(RepoContext);

export default RepositoryProvider;
