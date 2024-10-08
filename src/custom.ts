import { Keybind } from ".";

export default [
  { command: "saveAll", key: "^+shift+s" },
  {
    command: "editor.action.smartSelect.grow",
    key: "^+a",
    when: "editorTextFocus",
  },
  {
    command: "editor.action.selectAll",
    key: "^+a",
    when: "inputFocus&&!editorTextFocus",
  },
  {
    command: "editor.action.selectAll",
    key: "^+shift+a",
    when: "editorTextFocus",
  },
  {
    command: "workbench.action.quickOpen",
    key: "^+r",
    args: "task ",
    when: "editorTextFocus&&!isDevelopment",
  },
  {
    command: "workbench.action.quickOpen",
    key: "^+g",
    args: "@: ",
    when: "editorTextFocus",
  },
  {
    command: "workbench.action.quickOpen",
    key: "^+;",
    args: ": ",
    when: "editorTextFocus",
  },
  { command: "editor.action.insertSnippet", key: "^+i" },
  {
    command: "editor.action.selectHighlights",
    key: "^+shift+d",
    when: "editorFocus",
  },
  {
    command: "workbench.view.explorer",
    key: "^+1",
    when: "viewContainer.workbench.view.explorer.enabled",
  },
  { command: "workbench.view.debug", key: "^+3" },
  {
    command: "workbench.action.debug.restart",
    key: "f5",
    when: "inDebugMode && debugState == 'running'",
  },
  { command: "workbench.action.previousEditorInGroup", key: "alt+left" },
  { command: "workbench.action.nextEditorInGroup", key: "alt+right" },
  {
    command: "editor.action.jumpToBracket",
    key: "^+b",
    when: "editorTextFocus && editorLangId!=markdown",
  },
  { command: "workbench.action.toggleSidebarVisibility", key: "^+oem_8" },
  {
    command: "editor.action.organizeImports",
    key: "^+o",
    when: "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/",
  },
  { command: "workbench.action.files.saveWithoutFormatting", key: "alt+s" },
  { command: "workbench.action.toggleZenMode", key: "f11" },
  { command: "workbench.action.openSettingsJson", key: "^+shift+e" },
  { command: "notebook.execute", key: "f5", when: "notebookEditorFocused" },
  { command: "workbench.action.closeOtherEditors", key: "^+shift+w" },
  {
    command: "workbench.action.quickOpenNavigateNextInViewPicker",
    key: "^+tab",
    when: "inQuickOpen && inViewsPicker",
  },
  {
    command: "workbench.action.quickOpenView",
    key: "^+tab",
    when: "!inQuickOpen",
  },
  { command: "workbench.action.focusActiveEditorGroup", key: "^+e" },
  {
    command: "workbench.action.quickOpenNavigatePreviousInViewPicker",
    key: "^+shift+tab",
    when: "inQuickOpen && inViewsPicker",
  },
  {
    command: "editor.action.marker.nextInFiles",
    key: "^+e",
    when: "editorFocus",
  },
  {
    command: "editor.action.marker.prevInFiles",
    key: "^+shift+e",
    when: "editorFocus",
  },
  {
    command: "editor.action.goToImplementation",
    key: "alt+enter",
    when: "editorHasImplementationProvider && editorTextFocus && !isInEmbeddedEditor",
  },
  {
    command: "editor.action.autoFix",
    key: "^+shift+oem_period",
    when: "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/",
  },
  {
    command: "editor.action.clipboardPasteAction",
    key: "^+v",
    when: "!terminalFocus",
  },
  { command: "references-view.findReferences", key: "f4" },
  { command: "references-view.findImplementations", key: "f3" },
  { command: "editor.action.fixAll", key: "^+q" },
  {
    command: "workbench.action.terminal.killEditor",
    key: "^+w",
    when: "terminalFocus",
  },
  {
    command: "editor.action.showHover",
    key: "shift+space",
    when: "editorTextFocus",
  },
  { command: "workbench.action.terminal.toggleTerminal", key: "^+oem_5" },
  { command: "workbench.action.terminal.clear", key: "^+k" },
  {
    command: "editor.action.insertCursorAbove",
    key: "shift+alt+up",
    when: "editorTextFocus",
  },
  {
    command: "editor.action.insertCursorBelow",
    key: "shift+alt+down",
    when: "editorTextFocus",
  },
  { command: "workbench.action.createTerminalEditor", key: "^+t" },
  {
    command: "workbench.action.terminal.paste",
    key: "^+v",
    when: "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported",
  },
  { command: "editor.action.goToTypeDefinition", key: "f1" },
  {
    command: "toggle",
    key: "^+shift+i",
    when: "editorTextFocus",
    args: {
      id: "minimap",
      value: [
        {
          "editor.inlayHints.enabled": "onUnlessPressed",
        },
        {
          "editor.inlayHints.enabled": "offUnlessPressed",
        },
      ],
    },
  },
  {
    command: "toggle",
    key: "^+shift+l",
    when: "editorTextFocus",
    args: {
      id: "minimap",
      value: [
        {
          "editor.lineNumbers": "off",
        },
        {
          "editor.lineNumbers": "on",
        },
      ],
    },
  },
  {
    when: "terminalFocus",
    key: "^+left",
    command: "workbench.action.terminal.sendSequence",
    args: { text: "\u001b[1;5D" },
  },
  {
    when: "terminalFocus",
    key: "^+right",
    command: "workbench.action.terminal.sendSequence",
    args: { text: "\u001b[1;5C" },
  },
  {
    when: "!terminalTextSelectedInFocused && terminalFocus",
    key: "^+c",
    command: "workbench.action.terminal.sendSequence",
    args: { text: "\u0003" },
  },
  {
    when: "terminalFocus",
    key: "^+alt+left",
    command: "workbench.action.terminal.sendSequence",
    args: { text: "\u001b[1;5D" },
  },
  {
    when: "terminalFocus",
    key: "^+r",
    command: "workbench.action.terminal.sendSequence",
    args: { text: "\u0012" },
  },
  {
    key: "^+q",
    command: "git.openChange",
    when: "editorFocus && !isInDiffEditor",
  },
  {
    key: "^+q",
    command: "runCommands",
    args: {
      commands: ["workbench.action.closeActiveEditor", "git.openFile"],
    },
    when: "editorFocus && isInDiffEditor",
  },
] as Keybind[];
