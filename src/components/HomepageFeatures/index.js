import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Tea",
    Img: require("@site/static/img/tea.png").default,
    description: (
      <>
        Tea was designed with you in mind. Tea was designed with you in mind.
        Tea was designed with you in mind.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Img: require("@site/static/img/kombucha.jpg").default,
    description: (
      <>
        Sometimes in life it can be hard to find meaningful connections. Scream
        into the darkness. Consider kombucha.
      </>
    ),
  },
  {
    title: "Hide Amongst Foliage",
    Img: require("@site/static/img/cat.jpg").default,
    description: <>Do not be alarmed; the creature will not hurt you.</>,
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
