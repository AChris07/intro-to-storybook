import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import type { MatchImageSnapshotOptions } from 'jest-image-snapshot';

const getMatchOptions = (): MatchImageSnapshotOptions => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  };
};

const beforeScreenshot = (): Promise<void> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
};

initStoryshots({
  suite: 'Puppeteer storyshots',
  test: imageSnapshot({ getMatchOptions, beforeScreenshot }),
});
