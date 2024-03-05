import "../../App.css";

const Card = ({ title, thumbnail }: any) => {
  return (
    <div className="card">
      <div style={{ width: "100%", height: "200px" }}>
        <img
          src={thumbnail}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
      </div>
    </div>
  );
};

export default Card;
