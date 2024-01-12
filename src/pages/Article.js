import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Article = () => {
  const { id } = useParams();
  const {
    data: article,
    isPending,
    error,
  } = useFetch(`http://localhost:3005/articles/${id}`);
  return (
    <div>
      {isPending && <p>Loading the data...</p>}
      {error && <p>Error while fetching the data...</p>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By: {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
