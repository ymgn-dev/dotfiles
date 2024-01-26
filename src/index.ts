import {
  installAws,
  installBat,
  installCdk,
  installCode,
  installDelta,
  installDocker,
  installEza,
  installFfmpeg,
  installFigmaLinux,
  installFirebase,
  installFzf,
  installGnomeShellExtensionManager,
  installGoogleChrome,
  installHackGenFont,
  installInkscape,
  installInshellisense,
  installIntelOneMonoFont,
  installLazygit,
  installMkusb,
  installNi,
  installRye,
  installSlack,
  installStow,
  installTerraform,
  installThorium,
  installTmux,
  installTree,
  installUsbCreatorGtk,
  installVlc,
  installVolta,
  installWezterm,
  installXsel,
} from './installers';
import { createSymbolicLinks, logger, prepareForInstallation, readPassword, renderEnding, renderTitle } from './utils';

const main = async () => {
  console.clear();
  renderTitle();

  if (!(await readPassword())) {
    throw new Error('Please enter correct password.');
  }
  await prepareForInstallation();

  // Managers
  logger.info('\nManagers');
  await installRye();
  await installStow();
  await installVolta();

  // Commands
  logger.info('\nCommands');
  await installAws();
  await installBat();
  await installCdk();
  await installDelta();
  await installEza();
  await installFfmpeg();
  await installFirebase();
  await installFzf();
  await installInshellisense();
  await installNi();
  await installTerraform();
  await installTree();
  await installXsel();

  // GUIs / TUIs
  logger.info('\nGUIs / TUIs');
  await installCode();
  await installDocker();
  await installFigmaLinux();
  await installGnomeShellExtensionManager();
  await installGoogleChrome();
  await installInkscape();
  await installLazygit();
  await installMkusb();
  await installSlack();
  await installThorium();
  await installTmux();
  await installUsbCreatorGtk();
  await installVlc();
  await installWezterm();

  // Fonts
  logger.info('\nFonts');
  await installHackGenFont();
  await installIntelOneMonoFont();

  // Symbolic link
  logger.info('\nSymbolic links');
  await createSymbolicLinks();

  renderEnding();
  process.exit(0);
};

main().catch((err) => {
  logger.error('Aborting installation...');
  if (err instanceof Error) {
    logger.error(err);
  } else {
    logger.error('An unknown error has occurred.');
  }
  process.exit(1);
});
