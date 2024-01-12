import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3005/articles");

  return (
    <div className="home">
      <h2>Home</h2>
      {isPending && <p>Loading data...</p>}
      {error && <p>Error while fetching the data</p>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
