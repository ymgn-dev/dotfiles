import gradient from 'gradient-string';
import { logger } from '.';

const ENDING_TEXT = 'Everything is complete! Enjoy your wonderful coding life!';

export const renderEnding = () => {
  const endingGradient = gradient('red', 'green', 'blue');

  logger.info('');
  logger.info(endingGradient.multiline(ENDING_TEXT));
};
