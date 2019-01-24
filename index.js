const config = require('config')
const { spawn } = require('child_process')
const byline = require('byline')

const host = config.get('host')
const user = config.get('user')
const wtpsThreshold = config.get('wtpsThreshold')

byline(spawn('ssh', [
  '-l', user, 
  host, 'sar -b 3'
], { stdio: ['inherit', 'pipe', 'pipe'] }).stdout)
.on('data', line => {
  const wtps = 
    line.toString().split(/\s+/).map(v => Number(v))[4]
  if (Number.isNaN(wtps)) return
  console.log(`${wtps} ${(wtps > wtpsThreshold) ? 'busy' : 'idle'}`)
})

