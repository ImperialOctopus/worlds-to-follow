import "./PotionCard.css";

export const PotionIcon = ({ strength }) => (
  <img
    class="avatar__photo"
    src={
      require("@site/static/img/potion-icons/potion-" + strength + ".png")
        .default
    }
  />
);

export default function PotionCard({
  strength,
  title,
  image,
  effect,
  children,
}) {
  return (
    <div class="row">
      <div class="card-demo col col--6 col--offset-3">
        <div class="card">
          <div class="card__header">
            <div class="avatar">
              <PotionIcon strength={strength} />

              <div class="avatar__intro">
                <div class="avatar__name">{title}</div>
                <small class="avatar__subtitle">
                  <i>{strength == 0 ? "Free" : strength + " Alchemy"}</i>
                </small>
              </div>
            </div>
          </div>
          <div class="card__image">{image != null ? image : null}</div>
          <div class="card__body">
            <small>Effect: {effect}</small>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// image={
//   <img
//         src="https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
//         alt="Image alt text"
//         title="Logo Title Text 1"
//       />}
