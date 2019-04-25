import ora = require("ora")
import FetchGit from '../fetch'
import inquirer = require("inquirer");
class Pullor {

  private spinner: ora.Ora

  constructor() {
    this.spinner = ora({ text: '初始化' })
  }

  public async install() {

    this.spinner.start()
    const fetch = new FetchGit('wonderfulMan', 'hao-template')
    const answer = await this.chooseProjectVersion(await fetch.fetchRepoTagList() as Array<any>)
    const prompts = await fetch.downloadGitRepo(['hao-template', answer.version].join('@'))
  }

  private async chooseProjectVersion(tags: Array<any>): Promise<any> {

    this.spinner.stop()
    if (tags.length === 0) {
      console.error('当前项目没有版本信息')
      return false
    }
    return await inquirer.prompt([
      {
        type: 'list',
        name: 'version',
        message: '选择你的项目版本11',
        choices: tags.map(x => x.name)
      }
    ])
  }



}

export default Pullor