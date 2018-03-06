import { commands, executeCommand } from 'src/lib'

browser.commands.onCommand.addListener(function(command) {
  if (Object.values(commands).includes(command)) {
    executeCommand({ from: 'command', subject: command })
  }
})
