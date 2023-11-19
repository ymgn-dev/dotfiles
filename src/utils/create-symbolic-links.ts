import * as path from 'path';

import chalk from 'chalk';
import { execa } from 'execa';
import { spinner } from './spinner';

const SYMLINKS = ['bash', 'editorconfig', 'git', 'ibus-mozc', 'tmux', 'wezterm', 'ni'];

export const createSymbolicLinks = async () => {
  const currentDir = import.meta.dir;
  const symlinksDir = path.resolve(currentDir, '../../symlinks/');

  try {
    spinner.start(chalk.grey('Linking dotfiles.'));
    await execa(`stow -v --adopt ${SYMLINKS.join(' ')} --dir=${symlinksDir} --target=$HOME`, {
      shell: true,
    });
    spinner.stop(chalk.green('Linking of dotfiles is complete.'));
  } catch (e) {
    spinner.stop(chalk.red(`An error has occurred. ${e}`));
    throw e;
  }
};
