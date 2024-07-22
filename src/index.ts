import * as YAML from "yaml";
import * as fs from "fs";

type OS = "linux" | "macos" | "windows";

let useWindowsAsBase = true;
let useCustomKeybinds = true;
let useExtenstionNegativeKeybinds = true;

function Generate(negative: string, os: OS) {
  let negativeKeybinds: Keybind[] = JSON.parse(
    fs.readFileSync(negative).toString()
  );

  const keybinds = [...negativeKeybinds];

  if (useWindowsAsBase) {
    keybinds.push(...loadConfig("defaultKeybinds/windows.keybindings.json"));
  }

  if (useCustomKeybinds) {
    const customKeybinds = loadConfig("custom.json").map((v) => {
      return {
        key: convertKey(v.key, os),
        when: v.when,
        command: v.command,
        args: v.args,
      };
    });

    keybinds.push(...customKeybinds);
  }

  if (useExtenstionNegativeKeybinds) {
    keybinds.push(
      ...loadConfig("defaultKeybinds/extensions.negative.keybinds.json")
    );
  }

  if (os === "linux") {
    fs.writeFileSync(
      "/home/econn/.config/Code/User/keybindings.json",
      JSON.stringify(keybinds, null, 4)
    );
  }

  fs.writeFileSync(os + ".keyboard.json", JSON.stringify(keybinds, null, 4));
}

function convertKey(key: string, platform: OS) {
  if (platform === "macos") {
    return key.replace("ctrl+", "cmd+");
  }
  return key;
}

function loadConfig(path: string): Keybind[] {
  return JSON.parse(fs.readFileSync(path).toString());
}

Generate("defaultKeybinds/linux.negative.keybindings.json", "linux");
Generate("defaultKeybinds/macos.negative.keybindings.json", "macos");
Generate("defaultKeybinds/windows.negative.keybindings.json", "windows");

type Keybind = {
  key: string;
  command: string;
  when: string;
  args: { [key: string]: any } | string;
};
