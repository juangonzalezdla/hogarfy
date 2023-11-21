import { Link } from "react-router-dom";

function MessageLink({ message, to, name }) {
  return (
    <>
      <p className="mt-5 flex gap-2">
        {message}
        <Link to={to} className="text-azul hover:underline">
          {name}
        </Link>
      </p>
    </>
  );
}

export default MessageLink;