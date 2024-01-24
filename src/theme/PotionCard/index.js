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

function getPotionRarity({ strength }) {
  switch (strength) {
    case 1:
      return "Nigredo (1)";
    case 3:
      return "Albedo (3)";
    case 5:
      return "Citrinitas (5)";
    case 7:
      return "Rubedo (7)";
    case 9:
      return "Magnum Opus (9)";
    default:
      return "Undefined Potion Strength";
  }
}

export default function PotionCard({ strength, title, effect, children }) {
  return (
    <div class="row">
      <div class="col col--6 col--offset-3">
        <div class="card">
          <div class="card__header">
            <div class="avatar">
              <PotionIcon strength={strength} />
              <div class="avatar__intro">
                <div class="avatar__name">{title}</div>
                <small class="avatar__subtitle">
                  <i>{getPotionRarity({ strength })}</i>
                </small>
              </div>
            </div>
          </div>
          <div class="card__body">
            <p class="potion_card_effect">{effect}</p>
            <small class="potion_card_text">{children}</small>
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
