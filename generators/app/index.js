'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the funkadelic ' + chalk.red('mocha vscode testrunner') + ' generator!'
    ));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_tasks.json'),
        this.destinationPath('.settings/tasks.json')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
