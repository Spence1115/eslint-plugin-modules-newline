"use strict";
const exportDeclarationNewline = require('./rules/export-declaration-newline');
const importDeclarationNewline = require('./rules/import-declaration-newline');

module.exports = {
  rules: {
    'export-declaration-newline': exportDeclarationNewline,
    'import-declaration-newline': importDeclarationNewline,
  },
  configs: {
    recommended: {
      rules: {
        '@spence1115/modules-newlines/import-declaration-newline': 'warn',
        '@spence1115/modules-newlines/import-declaration-newline': 'warn',
      },
    },
  },
};
