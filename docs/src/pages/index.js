import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import * as React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={"hero hero--primary " + styles.hero}>
      <img src={"./img/logo.svg"} alt="" className={styles.logo} />
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div>
          <Link className="button button--lg" to="/getting-started">
            Get started
          </Link>
          <span className={styles.separator} />
          <Link className="button button--lg" to="/option">
            API reference
          </Link>
        </div>
      </div>
      <div className={styles.code}>
        <CodeBlock className={styles.codeBlock} language={"typescript"}>
          {`import { AsyncData } from "@swan-io/boxed";

const UserCard = ({user}: {user: AsyncData<User>}) => {
  return user.match({
    NotAsked: () => null,
    Loading: () => \`Loading\`,
    Done: (user) => {
      const name = user.name.getWithDefault("anonymous");
      return \`Hello \${name}!\`;
    },
  });
};`}
        </CodeBlock>
      </div>
    </header>
  );
}

const Block = ({ children, reversed = false, title, description }) => {
  return (
    <div className={reversed ? styles.blockReversed : styles.block}>
      <div className={styles.blockSide}>{children}</div>
      <div className={styles.blockSide}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Boxed: ${siteConfig.tagline}`}
      description="Functional utility types and functions for TypeScript"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <Block
            children={
              <img
                style={{ width: "100%", borderRadius: "1rem" }}
                loading="lazy"
                src="/boxed/img/react.jpg"
                alt="Example of a request lifecycle management in a React component using Boxed.AsyncData"
              />
            }
            title={"Build with the right tools"}
            description={
              <>
                By using <strong>functional type-safe constructs</strong> like{" "}
                <a href="./option">Option</a>, <a href="./result">Result</a> and{" "}
                <a href="./asyncdata">AsyncData</a>, you can{" "}
                <strong>eliminate bugs right from the modeling</strong>
                .
                <br />
                <br />
                Your code will be <strong>simpler</strong>,{" "}
                <strong>safer</strong>,and{" "}
                <strong>easier to reason about</strong> than with regular
                null-checks, exception flows and manual value tracking.
              </>
            }
          />

          <Block
            reversed
            title={"Taylored for your IDE"}
            description={
              <>
                Thanks to our <strong>chaining API</strong>, you get a nice{" "}
                <strong>autocomplete</strong> right from the value and can
                easily name intermediate variables.
                <br />
                <br />
                Boxed leverages the JavaScript class API so that you don't need
                to import any module to work with a Boxed value:{" "}
                <strong>it's all available as a method</strong>. On top of that,
                the Boxed API is minimal, so that your tooling doesn't feel
                overwhelming.
              </>
            }
            children={
              <video
                style={{ width: "100%", borderRadius: "1rem" }}
                autoPlay
                muted
                loop
                src="/boxed/video/ide.mov"
              />
            }
          />

          <Block
            title={"Get productive immediately"}
            description={
              <>
                Boxed gives you the tools you need without requiring loads of
                theoretical knowledge.
                <br />
                <br />
                We provide <strong>simple naming</strong>,{" "}
                <strong>documentation</strong> and{" "}
                <strong>escape hatches</strong> so that you don't get stuck. You
                get to <strong>learn as you use the library</strong> instead of
                getting frustrated over complex concepts.
              </>
            }
            children={
              <img
                style={{ width: "100%", borderRadius: "1rem" }}
                loading="lazy"
                src="/boxed/img/cheatsheet.jpg"
                alt="Cheatsheet table for the types of the map and flatMap functions"
              />
            }
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
