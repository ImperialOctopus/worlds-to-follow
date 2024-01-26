import "./AbilityCard.css";

export const SpeedIcon = ({ speed }) => (
  <img
    class="avatar__photo"
    src={require("@site/static/img/speed-icons/" + speed + ".png").default}
  />
);

export default function AbilityCard({
  speed,
  title,
  subtitle,
  image,
  parameters,
  children,
}) {
  return (
    <div class="row">
      <div class="col col--8 col--offset-2">
        <div class="card">
          <div class="card__header">
            <div class="avatar">
              <SpeedIcon speed={speed ?? "action"} />

              <div class="avatar__intro">
                <div class="avatar__name">{title}</div>
                <small class="avatar__subtitle">
                  <i>{subtitle}</i>
                </small>
              </div>
            </div>
          </div>
          <div class="card__image">{image}</div>
          <div class="card__body ability_card_body">
            <small>
              {parameters != null ? (
                <ul class="parameters">
                  {parameters.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
              ) : null}
            </small>

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
