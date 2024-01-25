import "./MetamagicCard.css";

export const MetamagicIcon = ({ type }) => {
  type ??= "basic";
  return (
    <img
      class="avatar__photo"
      src={
        require("@site/static/img/metamagic-icons/metamagic-" + type + ".png")
          .default
      }
    />
  );
};

function getMetamagicSubtitle(type, restriction) {
  switch (type) {
    case "basic":
      return null;
    case "restricted":
      return "Requires: " + restriction;
    case "signature":
      return "Signature";
    default:
      return "Invalid Metamagic type.";
  }
}

export default function MetamagicCard({
  title,
  type = "basic",
  restriction,
  children,
}) {
  var metamagicSubtitle = getMetamagicSubtitle(type, restriction);
  return (
    <div class="row">
      <div class="col col--6 col--offset-3">
        <div class="card">
          <div class="card__header">
            <div class="avatar">
              <MetamagicIcon type={type} />
              <div class="avatar__intro">
                <div class="avatar__name">{title}</div>
                {metamagicSubtitle == null ? null : (
                  <small class="avatar__subtitle">
                    <i>{metamagicSubtitle}</i>
                  </small>
                )}
              </div>
            </div>
          </div>
          <div class="card__body">{children}</div>
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
