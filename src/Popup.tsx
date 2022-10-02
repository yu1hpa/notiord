import { usePopup } from "./hooks/usePopup";

const Popup = () => {
  const { dbId, token, handleInput, onSubmit, reset } = usePopup();

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
      <label>Token</label>
      <input
        type="password"
        value={token}
        name="token"
        onChange={handleInput}
        required
      />
      <p>Ctrl + Shift + N : open setting popup</p>
      <button type="submit">Save</button>
      <button onClick={reset}>Reset</button>
    </form>
  );
};

export default Popup;
