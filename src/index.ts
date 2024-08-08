import * as fs from 'fs'
import custom from '../custom'

type OS = 'linux' | 'macos' | 'windows'

let useWindowsAsBase = true
let useCustomKeybinds = true
let useExtenstionNegativeKeybinds = true
let useNegativeKeybinds = true

function Generate(negative: string, os: OS) {
    let keybinds: Keybind[] = []

    if (useWindowsAsBase) {
        keybinds.push(...loadConfig('defaultKeybinds/windows.keybindings.json'))
    }

    if (useCustomKeybinds) {
        const customMappings = custom.map((k) => {
            k.key = k.key.replace('^+', 'ctrl+').replace('^+', 'ctrl+')
            return k
        })
        keybinds.push(...customMappings)
    }

    if (useExtenstionNegativeKeybinds) {
        keybinds.push(...loadConfig('defaultKeybinds/extensions.negative.keybinds.json'))
    }

    keybinds = keybinds.map((v) => {
        return {
            key: convertKey(v.key, os),
            when: v.when,
            command: v.command,
            args: v.args,
        }
    })

    if (useNegativeKeybinds) {
        keybinds.push(...loadConfig('defaultKeybinds/' + negative))
    }

    if (process.platform === 'linux' && os === 'linux') {
        fs.writeFileSync('/home/econn/.config/Code/User/keybindings.json', JSON.stringify(keybinds, null, 4))
    }

    if (process.platform === 'darwin' && os === 'macos') {
        fs.writeFileSync('/Users/econneely/Library/Application Support/Code/User/keybindings.json', JSON.stringify(keybinds, null, 4))
    }

    fs.writeFileSync(os + '.keyboard.json', JSON.stringify(keybinds, null, 4))
}

function convertKey(key: string, platform: OS) {
    if (platform === 'macos') {
        return key.replace('ctrl+', 'cmd+').replace('ctrl+', 'cmd+')
    }
    return key
}

function loadConfig(path: string): Keybind[] {
    return JSON.parse(fs.readFileSync(path).toString())
}

Generate('linux.negative.keybindings.json', 'linux')
Generate('macos.negative.keybindings.json', 'macos')
Generate('windows.negative.keybindings.json', 'windows')

export type Keybind = {
    key: string
    command: string
    when?: string
    args?: { [key: string]: any } | string
}
