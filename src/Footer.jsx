export const Footer = ({ setCount }) => {
  return (
    <footer>
      <button onClick={() => setCount(0)}>Reset</button>
    </footer>
  );
};
