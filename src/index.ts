import * as fs from "fs";
import custom from "./custom";
import defaults from "./defaults";
import removals from "./removals";

type OS = "linux" | "macos" | "windows";

const os: OS = process.platform === "darwin" ? "macos" : "linux";

type Group = { comment: string };

function isGroup(value: Keybind | Group): value is Group {
  return (value as Group).comment !== undefined;
}

export type Keybind = {
  key: string;
  command: string;
  when?: string;
  args?: { [key: string]: any } | string;

  disabled?: boolean;
};

function Generate(outputFile: string) {
  let keybinds: (Keybind | Group)[] = [];

  keybinds.push({ comment: "Remove default os keybinds" });
  keybinds.push(...loadConfig("defaultKeybinds/" + os + ".negative.keybindings.json"));

  keybinds.push({ comment: "Remove Keybinds" });
  keybinds.push(...removals);

  keybinds.push({ comment: "Default Keybinds" });
  keybinds.push(...defaults.map(replaceKey).filter((x) => !x.disabled));

  keybinds.push({ comment: "Custom Keybinds" });
  keybinds.push(...custom.map(replaceKey));

  writeShortcuts(outputFile, keybinds);
}

function replaceKey(k: Keybind) {
  if (os === "macos") {
    k.key = k.key.replace("^+", "cmd+").replace("^+", "cmd+");
  } else {
    k.key = k.key.replace("^+", "ctrl+").replace("^+", "ctrl+");
  }

  return k;
}

function writeShortcuts(path: string, keybinds: (Keybind | Group)[]) {
  var logger = fs.createWriteStream(path, {});

  logger.write("[\n");
  for (let i = 0; i < keybinds.length; i++) {
    const keybind = keybinds[i];

    if (isGroup(keybind)) {
      logger.write(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);
      logger.write(`\t//\t\t\t${keybind.comment}\n`);
      logger.write(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`);
      continue;
    }

    let key = `"key": ${JSON.stringify(keybind.key)},`.padEnd(38);
    let command = `"command": ${JSON.stringify(keybind.command)}`;
    let when = `"when": ${JSON.stringify(keybind.when)}`;

    logger.write("\t{\n");
    logger.write(`\t\t${key} ${command}`);

    if (!keybind.when && keybind.command[0] !== "-") {
      console.error(keybind);
    }

    if (keybind.args) {
      logger.write(",\n");
      if (typeof keybind.args === "string") {
        logger.write(`\t\t"args": ${JSON.stringify(keybind.args)}`);
      } else {
        logger.write(`\t\t"args": {\n`);
        const args = Object.entries(keybind.args);
        for (let i = 0; i < args.length; i++) {
          const [key, value] = args[i];

          let val = JSON.stringify(value, null, 4);
          val = val.replace(/\n/gi, "\n\t\t\t");

          logger.write(`\t\t\t"${key}": ${val}`);
          if (i < args.length - 1) {
            logger.write(`,`);
          }
          logger.write(`\n`);
        }
        logger.write(`\t\t}`);
      }
    }

    if (keybind.when) {
      logger.write(",\n");
      logger.write(`\t\t${when}\n`);
    }
    logger.write("\t}" + (i < keybinds.length - 1 ? "," : "") + "\n");
  }
  logger.write("]\n");
}

function loadConfig(path: string): Keybind[] {
  return JSON.parse(fs.readFileSync(path).toString());
}

// Generate("./gen.json");

if (os == "macos") {
  Generate("/Users/econneely/Library/Application Support/Code/User/keybindings.json");
} else {
  Generate("/home/econn/.config/Code/User/keybindings.json");
}
