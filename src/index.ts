import * as YAML from "yaml";
import * as fs from "fs";

function Generate(negative: string, output: string) {
  let negativeKeybinds: Keybind[] = JSON.parse(
    fs.readFileSync(negative).toString()
  );

  let windowsKeybinds: Keybind[] = JSON.parse(
    fs.readFileSync("defaultKeybinds/windows.keybindings.json").toString()
  );

  let customKeybinds = YAML.parse(fs.readFileSync("keybinds.yaml").toString());

  const keybinds = [...negativeKeybinds, ...windowsKeybinds, ...customKeybinds];

  fs.writeFileSync(output, JSON.stringify(keybinds, null, 4));
}

Generate(
  "defaultKeybinds/linux.negative.keybindings.json",
  "linux.keyboard.json"
);
Generate(
  "defaultKeybinds/macos.negative.keybindings.json",
  "macos.keyboard.json"
);

type Keybind = {
  key: string;
  command: string;
  when: string;
  args: { [key: string]: any } | string;
};
