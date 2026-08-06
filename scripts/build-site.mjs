import { spawnSync } from 'node:child_process';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const docusaurusCommand = process.platform === 'win32' ? 'docusaurus.cmd' : 'docusaurus';

const run = (command, args) => {
    const result = spawnSync(command, args, {
        cwd: projectRoot,
        stdio: 'inherit',
        shell: false,
    });
    if (result.error) throw result.error;
    if (result.status !== 0) process.exit(result.status ?? 1);
};

run(docusaurusCommand, ['build']);
run(process.execPath, [path.join(projectRoot, 'scripts', 'generate-public-assets.mjs')]);
run(process.execPath, [path.join(projectRoot, 'scripts', 'check-public-copy.mjs')]);
run(process.execPath, [path.join(projectRoot, 'scripts', 'check-build.mjs')]);
