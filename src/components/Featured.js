import featurepost_1 from "../img/featurepost_1.png";
import featurepost_2 from "../img/featurepost_2.png";
import featurepost_3 from "../img/featurepost_3.png";

function Featured() {
  return (
    <div className="featured-posts">
      <div className="featured-post-item">
        <img src={featurepost_1} />
        <span>
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </span>
      </div>

      <div className="featured-post-item">
        <img src={featurepost_2} />
        <span>
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </span>
      </div>

      <div className="featured-post-item">
        <img src={featurepost_3} />
        <span>
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </span>
      </div>
    </div>
  );
}

export default Featured;
