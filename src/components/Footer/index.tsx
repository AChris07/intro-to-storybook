import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import InverseImage from '../elements/InverseImage';
import { FooterParagraph, FooterLogos } from './styles';

type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <FooterParagraph>
          Built with <strong>Bulma</strong> and <strong>Next.js</strong>.
        </FooterParagraph>

        <div>
          <FooterLogos>
            <a href="https://bulma.io/">
              <Image src="/bulma.svg" width={120} height={40} />
            </a>
            <a href="https://nextjs.org/">
              <InverseImage src="/nextjs.svg" width={80} height={40} />
            </a>
          </FooterLogos>
        </div>

        <FooterParagraph>
          Integrates <strong>Storybook</strong>.
        </FooterParagraph>

        <FooterParagraph>
          <a href="https://storybook.js.org/">
            <Image src="/storybook.svg" width={160} height={40} />
          </a>
        </FooterParagraph>
      </div>
    </footer>
  );
};

export default Footer;
