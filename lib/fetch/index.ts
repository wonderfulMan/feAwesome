import download = require('download-git-repo')
import axios, { AxiosRequestConfig } from 'axios'
class FetchGit {

  private type: string
  private registry: string

  constructor(type: string, registry: string) {
    this.type = type
    this.registry = registry
  }

  request(url: string, config: AxiosRequestConfig | undefined): Promise<any> {
    return new Promise((resolve, reject) => {
      return axios.get(url, config)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
  }

  /**
   * 获取仓库所有的版本
   * @param  {[string]} repo [仓库名称]
   * @return {[type]}      [description]
   */
  public async fetchRepoTagList(): Promise<any> {
    return await this.request(`http://api.github.com/repos/${this.type}/${this.registry}/tags`, {})
  }
  /**
   * 获取仓库详细信息
   * @param  {[string]} repoInfo [仓库名称]
   * @return {[type]}      [description]
   */
  public fetchGitInfo(repoInfo: string): ({ url: string, scaffold: string }) {
    const [scaffold, version] = repoInfo.split('@')
    return {
      url: `${this.type}/${this.registry}#${version}`,
      scaffold
    }
  }

  /**
   * 下载git仓库代码到指定文件夹
   * @param  {[string]} repoInfo [仓库名称]
   * @return {[type]}      [description]
   */
  public async downloadGitRepo(repoInfo: string) {
    const { url, scaffold } = this.fetchGitInfo(repoInfo)

    return await download(url, './test', false, err => {
      console.log(err)
    })
  }

}

export default FetchGit