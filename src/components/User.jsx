import { useAppStore } from '../store/AppStore'

const User = () => {
    const store = useAppStore()
  return (
    <div>
      <h1>{store.userName}</h1>
      <input
        type="text"
        onChange={(e) => {
          const newUsername = e.target.value;
          store.setUsername(newUsername);
        }}
      />
    </div>
  );
}

export default User