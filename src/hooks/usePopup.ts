import { useEffect, useState } from "react";

export const usePopup = () => {
  const [dbId, setDbId] = useState<string>("");
  const [apiSec, setApiSec] = useState<string>("");
  useEffect(() => {
    chrome.storage.local.get(["dbId", "apiSec"], (res) => {
      setDbId(res.dbId || "");
      setApiSec(res.apiSec || "");
    });
  }, []);
  const reset = () => {
    chrome.storage.local.set({ dbId: "", apiSec: "" }, () => {
      setDbId("");
      setApiSec("");
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    chrome.storage.local.set({ dbId, apiSec }, () => {});
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "dbId":
        setDbId(e.target.value);
        break;
      case "apiSec":
        setApiSec(e.target.value);
        break;
      default:
    }
  };
  return { dbId, apiSec, handleInput, onSubmit, reset };
};
