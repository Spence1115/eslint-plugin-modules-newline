"use strict";
const exportDeclarationNewline = require('./rules/export-declaration-newline');
const importDeclarationNewline = require('./rules/import-declaration-newline');

module.exports = {
  rules: {
    'spence1115/export-declaration-newline': exportDeclarationNewline,
    'spence1115/import-declaration-newline': importDeclarationNewline,
  },
  configs: {
    recommended: {
      rules: {
        'spence1115/eslint-plugin-modules-newline/export-declaration-newline': 'warn',
        'spence1115/eslint-plugin-modules-newline/import-declaration-newline': 'warn',
      },
    },
  },
};
