interface MessageProps {
  name: string;
}

const Message = ({ name }: MessageProps) => {
  return <button onClick={() => console.log(name)}>Hello</button>;
};

export default Message;
