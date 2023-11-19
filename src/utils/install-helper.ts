import chalk from 'chalk';
import { $, ExecaChildProcess, execa } from 'execa';
import { existsCommand } from './exists-command';
import { logger } from './logger';
import { password } from './read-password';
import { spinner } from './spinner';

type InstallHelperOptions = {
  commandName: string;
  requirePassword?: boolean;
  /** When execute the sudo command, please add the -S option. */
  execaAction: (arg1: typeof execa, arg2: typeof $) => ExecaChildProcess;
  overrideExistsMethod?: () => Promise<boolean>;
};

export const installHelper = async ({ commandName, requirePassword = true, execaAction, overrideExistsMethod }: InstallHelperOptions) => {
  const exists = overrideExistsMethod ? await overrideExistsMethod() : await existsCommand(commandName);
  if (exists) {
    logger.success(`✔  ${commandName} is already installed.`);
    return;
  }
  try {
    spinner.start(chalk.grey(`Installing ${commandName}.`));
    if (requirePassword) {
      await execa(`echo ${password}`, { shell: true }).pipeStdout?.(execaAction(execa, $));
    } else {
      await execaAction(execa, $);
    }
    spinner.stop(chalk.green(`${commandName} has been installed.`));
  } catch (e) {
    spinner.stop(chalk.red(`✗ An error has occurred. ${e}`));
    throw e;
  }
};
