#!/usr/bin/env node
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const { join } = require('path');
const shell = require('../utils/shelljs');
const log = require('../utils/log');

const defaultDirs = ['lib', '*coverage', '.nyc_output'];
const defaultFiles = ['*xunit.xml', '*checkstyle.xml', 'yarn-error.log'];

const packageRoot = require('../utils/package-path');

const cleanAll = process.argv[2] === 'all';

// Add defaults for clean all
if (cleanAll) {
  defaultDirs.push('node_modules');
}

log(`cleaning default directories: ${defaultDirs.join()}`);
defaultDirs.forEach((dir) => {
  shell.rm('-rf', join(packageRoot, dir));
});
log(`cleaning default files: ${defaultFiles.join()}`);
defaultFiles.forEach((file) => {
  shell.rm('-f', join(packageRoot, file));
});
