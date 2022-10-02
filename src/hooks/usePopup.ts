import { useCallback, useEffect, useState } from "react";

export const usePopup = () => {
  const [dbId, setDbId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    chrome.storage.local.get(["dbId", "token"], (res) => {
      setDbId(res.dbId || "");
      setToken(res.token || "");
    });
  }, []);
  const reset = () => {
    chrome.storage.local.set({ dbId: "", token: "" }, () => {
      setDbId("");
      setToken("");
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chrome.storage.local.set({ dbId, token }, () => {});
  };
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "dbId":
        setDbId(e.target.value);
        break;
      case "token":
        setToken(e.target.value);
        break;
      default:
    }
  }, []);
  return { dbId, token, handleInput, onSubmit, reset };
};
