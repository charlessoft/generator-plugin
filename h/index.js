/**
 * @File:      脚手架help
 * @Author:    biao_liu(biao_liu@foxitsoftware.com)
 * @Version:   V1.0.0
 * @Date:      2023-07-25 16:19:45
 */
const os = require('os');
const path = require('path');
const fs = require('fs');
const process = require('process');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const logo = require('../h/logo').LOGO;
module.exports = class extends Generator {
    constructor(params, opts) {
        super(params, opts);
        const generatorName = this.rootGeneratorName();
        this.ROOT = this.templatePath().split(path.sep).join('/').split(generatorName)[0] + generatorName;
        this.lang = require(`${path.join(this.ROOT, '/lang/config.json')}`).lang || 'zh-CN';
        this.langJSON = require(`${path.join(this.ROOT, `/lang/i18n/${this.lang}.json`)}`);
        this.h = this.langJSON.h;
    }
    echoHelp() {
        this.pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
        this.log(logo(this));
        const txt = [
            '',
            'plugin@v' + chalk.green(this.pkg.version),
            'node@v' + chalk.yellow(process.version.substring(1)),
            'os@' + chalk.cyan(os.type() + ' ' + os.release()),
            '',
            `${this.h.yo.title}`,
            chalk.green(`${this.h.yo.implement}`),
            chalk.magenta(`${this.h.yo.help}`),
            chalk.cyan(`${this.h.yo.lang}`),
            chalk.yellow(`${this.h.yo.tc}`),
            chalk.gray(`${this.h.yo.sc}`),
            '',
            `${this.h.root.doc} ${chalk.underline('https://gitlab.foxitsoftware.com/foxit/phantom/pluginsdk/generator-plugin')}`,
            `${this.h.root.author}`
        ].join('\n');
        this.log(txt);
    }
};
