import { useAppStore } from "../store/AppStore";

const Count = () => {
  const store = useAppStore();
  console.log(store);

  return (
    <>
      <h1>{store.count}</h1>
      <button type="button" onClick={store.increase}>
        {" "}
        increase
      </button>
      <button type="button" onClick={store.decrease}>
        {" "}
        decrease
      </button>
    </>
  );
};

export default Count;
