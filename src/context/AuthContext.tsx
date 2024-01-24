"use client";

import axios from "axios";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface ContextProps {
  dataUser: any;
  setDataUser: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<ContextProps>({
  dataUser: {},
  setDataUser: (): any => {},
});

export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [dataUser, setDataUser] = useState<any | any>({});
  useEffect(() => {
    getuser();
  }, []);

  async function getuser() {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      if (res.data.success == true) {
        setDataUser(res.data.data);
        console.log(res.data.data._id);
      }
    } catch (error: any) {}
  }
  return (
    <GlobalContext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
