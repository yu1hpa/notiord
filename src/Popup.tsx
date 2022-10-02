import { usePopup } from "./hooks/usePopup";
import SecretInput from "./components/SecretInput";

const Popup = () => {
  const { dbId, token, handleInput, onSubmit, reset } = usePopup();

  return (
    <form onSubmit={onSubmit}>
      <h2>Notiord</h2>
      <label>Database ID</label>
      <SecretInput name="dbId" value={dbId} onChange={handleInput} />
      <label>Token</label>
      <SecretInput name="token" value={token} onChange={handleInput} />
      <p>Ctrl + Shift + N : open setting popup</p>
      <button type="submit">Save</button>
      <button onClick={reset}>Reset</button>
    </form>
  );
};

export default Popup;
