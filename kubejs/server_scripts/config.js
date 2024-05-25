//priority: 500

const CONFIG_DIRECTORY = 'config'
const CONFIG_FILE_NAME = 'meatsalad.json'
const CONFIG_FILE = `${CONFIG_DIRECTORY}/${CONFIG_FILE_NAME}`
const DEFAULT_CONFIG = {
  defaultRandomWeight: 30,
  defaultRandomQuality: 1.0,
  redHeartWeight: 20,
  redHeartQuality: 0.5,
  darkMatterWeight: 10,
  darkMatterQuality: 0.5,
  bossAncientWeight: 10,
  bossAncientQuality: 0.5,
  gateWeight: 10,
  gateQuality: 0.5,
}

let setConfig = (key, value) => {
  global.config[key] = value
  JsonIO.write(CONFIG_FILE, global.config)
}

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  event.register(
    Commands.literal('msconfig')
      .requires(src => src.hasPermission(2))
      .then(Commands.argument('key', Arguments.STRING.create(event))
        .then(Commands.argument('value', Arguments.STRING.create(event))
          .executes((ctx) => {
            const key = Arguments.STRING.getResult(ctx, 'key')
            const value = Arguments.STRING.getResult(ctx, 'value')
            setConfig(key, JSON.parse(value))
            ctx.source.sendSuccess(`${key} has new value of: ${global.config[key]}`, true)
            return 1
          })
        )
        .executes((ctx) => {
          const key = Arguments.STRING.getResult(ctx, 'key')
          ctx.source.sendSuccess(`${key} has value: ${global.config[key]}`, false)
          return 1
        })
      )
  )
})


let isConfigDirty = false
let config = JsonIO.read(CONFIG_FILE)

if (!config) {
  isConfigDirty = true
  config = DEFAULT_CONFIG
}

for (const key in DEFAULT_CONFIG) {
  if (!config.hasOwnProperty(key)) {
    config[key] = DEFAULT_CONFIG[key]
    isConfigDirty = true
  }
}

if (isConfigDirty) {
  JsonIO.write(CONFIG_FILE, config)
  isConfigDirty = false
}

global.config = config
