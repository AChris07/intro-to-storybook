import React, { FunctionComponent } from 'react';
import Image from 'next/image';

type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Built with <strong>Bulma</strong> and <strong>Next.js</strong>.
        </p>

        <p>
          <a href="https://bulma.io/">
            <Image src="/bulma.svg" width={120} height={40} />
          </a>
          <a href="https://nextjs.org/">
            <Image src="/nextjs.svg" width={80} height={40} />
          </a>
        </p>

        <p>
          Integrates <strong>Storybook</strong>.
        </p>

        <p>
          <a href="https://storybook.js.org/">
            <Image src="/storybook.svg" width={160} height={40} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
