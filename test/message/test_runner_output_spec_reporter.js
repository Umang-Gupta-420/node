// Flags: --no-warnings
'use strict';
require('../common');
const spawn = require('node:child_process').spawn;
const child = spawn(process.execPath,
                    ['--no-warnings', '--test-reporter', 'spec', 'test/message/test_runner_output.js'],
                    { stdio: 'pipe' });
// eslint-disable-next-line no-control-regex
child.stdout.on('data', (d) => process.stdout.write(d.toString().replace(/[^\x00-\x7F]/g, '').replace(/\u001b\[\d+m/g, '')));
child.stderr.pipe(process.stderr);