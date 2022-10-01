import { usePopup } from "./hooks/usePopup";

const Popup = () => {
  const { dbId, apiSec, handleInput, onSubmit, reset } = usePopup();

  return (
    <form onSubmit={onSubmit}>
      <h2>Notiord</h2>
      <label>Database ID</label>
      <input
        type="password"
        name="dbId"
        onChange={handleInput}
        value={dbId}
        required
      />
      <label>API Secret</label>
      <input
        type="password"
        value={apiSec}
        name="apiSec"
        onChange={handleInput}
        required
      />
      <h4>input is hidden for security</h4>
      <p>Cmd/Ctrl + Shift + L : open setting popup</p>
      <p>Cmd/Ctrl + Shift + I : open new page</p>
      <button type="submit">Save</button>
      <button onClick={reset}>Reset</button>
      {/* check dbid & apisec are valid */}
    </form>
  );
};

export default Popup;
