import chalk from 'chalk';

export const logger = {
  error(...args: unknown[]) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(chalk.red(...args));
  },
  warn(...args: unknown[]) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(chalk.cyan(...args));
  },
  success(...args: unknown[]) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(chalk.green(...args));
  },
};
