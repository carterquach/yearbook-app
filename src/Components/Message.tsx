import { useEffect } from "react";
import "../styles/styles.css";
interface MessageProps {
  sayHi: () => void;
}

const Message = ({ sayHi }: MessageProps) => {
  useEffect(() => {
    console.log("Welcome!");
  }, []);
  return (
    <button className="btnn" onClick={sayHi}>
      Click Me!
    </button>
  );
};

export default Message;
