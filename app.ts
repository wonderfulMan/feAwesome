#! /usr/bin/env node
import chalk from 'chalk'
import clear = require('clear')
import program = require('commander')
import inquirer = require('inquirer')
import figlet = require('figlet')
import Pullor from './lib/pull'
import { getPackageField } from './utils'

clear()
console.log(
  chalk.green(
    figlet.textSync('fe\ Awesome', { horizontalLayout: 'full' }),
  )
)

const initFeAwesome = async () => {

  const packageChunk = await getPackageField()

  program
    .version(packageChunk.version)
    .command('init')
    .action(() => {
      new Pullor()
        .install()
    })

  program
    .parse(process.argv)

}

initFeAwesome()


