import { useState } from "react";

const Jokers = ({ clicked5050, setClicked5050 }) => {
  const [used5050, setUsed5050] = useState(false);
  const handle5050 = () => {
    setClicked5050(true);
    setUsed5050(true);
  };

  return (
    <div>
      <button disabled={used5050} onClick={() => handle5050()}>
        50:50
      </button>
      <button>Phone a friend</button>
      <button>Audience</button>
    </div>
  );
};

export default Jokers;
