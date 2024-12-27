/**
 * @File:      脚手架logo
 * @Author:    biao_liu(biao_liu@foxitsoftware.com)
 * @Version:   V1.0.0
 * @Date:      2023-07-25 16:10:07
 */
const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');
function LOGO(contex) {
    const generatorName = contex.rootGeneratorName();
    contex.ROOT = contex.templatePath().split(path.sep).join('/').split(generatorName)[0] + generatorName;
    // 获取模板路径
    contex.templSrc = contex.templatePath();
    contex.lang = require(`${path.join(contex.ROOT, '/lang/config.json')}`).lang || 'zh-CN';
    contex.langJSON = require(`${path.join(contex.ROOT, `/lang/i18n/${contex.lang}.json`)}`);
    contex.logoJSON = contex.langJSON.logo;
    let logo = 'plugin';
    const fontOptionsValue = {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    };
    const logoValue = figlet.textSync(logo, fontOptionsValue);
    logo = chalk.keyword('cyan').bold(logoValue);
    logo += `\n\n${contex.logoJSON.needHelp}` + chalk.magenta('  ===>  ') + chalk.green('yo plugin:h');
    if (contex) {
        logo += '\nCMD: '+ chalk.green(contex.rootGeneratorName());
    }
    return logo;
}
exports.LOGO = LOGO;
