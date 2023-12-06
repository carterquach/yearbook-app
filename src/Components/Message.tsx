interface MessageProps {
  words: string;
}

const Message = ({ words }: MessageProps) => {
  return <p>{words}</p>;
};

export default Message;
