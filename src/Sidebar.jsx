export const Sidebar = ({ count, setCount }) => {
  return (
    <aside>
      <button onClick={() => setCount(count + 1)}>Klick mich</button>
    </aside>
  );
};
