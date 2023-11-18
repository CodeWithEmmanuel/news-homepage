function NewPosts() {
  return (
    <div className="new-posts">
      <h2 className="posts-header">New</h2>

      <div className="post-item">
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>

      <div className="line"></div>

      <div className="post-item">
        <h2>The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>

      <div className="line"></div>

      <div className="post-item">
        <h2>Is VC Funding Dring Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}

export default NewPosts;
