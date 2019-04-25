declare module 'download-git-repo' {
  const download: (repo: string, dest: string, opts: any, fn: (err: any) => void) => void
  export = download
}