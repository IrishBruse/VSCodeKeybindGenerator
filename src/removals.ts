import { Keybind } from ".";

export default [
  {
    key: "ctrl+space",
    command: "-workbench.action.terminal.sendSequence",
    when: "config.terminal.integrated.suggest.enabled && terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
  },
  {
    key: "ctrl+shift+v",
    command: "-markdown.extension.closePreview",
    when: "activeWebviewPanelId == 'markdown.preview'",
  },
  {
    key: "ctrl+k v",
    command: "-markdown.extension.closePreview",
    when: "activeWebviewPanelId == 'markdown.preview'",
  },
  {
    key: "ctrl+v",
    command: "-markdown.extension.editing.paste",
    when: "editorHasSelection && editorTextFocus && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+shift+[",
    command: "-markdown.extension.editing.toggleHeadingDown",
    when: "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+shift+]",
    command: "-markdown.extension.editing.toggleHeadingUp",
    when: "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "backspace",
    command: "-markdown.extension.onBackspaceKey",
    when: "editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && vim.mode != 'CommandlineInProgress' && vim.mode != 'EasyMotionInputMode' && vim.mode != 'EasyMotionMode' && vim.mode != 'Normal' && vim.mode != 'Replace' && vim.mode != 'SearchInProgressMode' && vim.mode != 'SurroundInputMode' && vim.mode != 'Visual' && vim.mode != 'VisualBlock' && vim.mode != 'VisualLine' && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+shift+alt+down",
    command: "-markdown.extension.onCopyLineDown",
    when: "editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+shift+alt+up",
    command: "-markdown.extension.onCopyLineUp",
    when: "editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+enter",
    command: "-markdown.extension.onCtrlEnterKey",
    when: "editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/ || editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && config.editor.acceptSuggestionOnEnter == 'off' && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "enter",
    command: "-markdown.extension.onEnterKey",
    when: "editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && vim.mode != 'CommandlineInProgress' && vim.mode != 'EasyMotionInputMode' && vim.mode != 'EasyMotionMode' && vim.mode != 'Normal' && vim.mode != 'Replace' && vim.mode != 'SearchInProgressMode' && vim.mode != 'SurroundInputMode' && vim.mode != 'Visual' && vim.mode != 'VisualBlock' && vim.mode != 'VisualLine' && editorLangId =~ /^markdown$|^rmd$|^quarto$/ || editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && config.editor.acceptSuggestionOnEnter == 'off' && vim.mode != 'CommandlineInProgress' && vim.mode != 'EasyMotionInputMode' && vim.mode != 'EasyMotionMode' && vim.mode != 'Normal' && vim.mode != 'Replace' && vim.mode != 'SearchInProgressMode' && vim.mode != 'SurroundInputMode' && vim.mode != 'Visual' && vim.mode != 'VisualBlock' && vim.mode != 'VisualLine' && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+]",
    command: "-markdown.extension.onIndentLines",
    when: "editorTextFocus && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "alt+down",
    command: "-markdown.extension.onMoveLineDown",
    when: "editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "alt+up",
    command: "-markdown.extension.onMoveLineUp",
    when: "editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+[",
    command: "-markdown.extension.onOutdentLines",
    when: "editorTextFocus && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "shift+enter",
    command: "-markdown.extension.onShiftEnterKey",
    when: "editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/ || editorTextFocus && !editorHasMultipleSelections && !editorReadonly && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && config.editor.acceptSuggestionOnEnter == 'off' && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "shift+tab",
    command: "-markdown.extension.onShiftTabKey",
    when: "editorTextFocus && markdown.extension.editor.cursor.inList && !editorHasMultipleSelections && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "tab",
    command: "-markdown.extension.onTabKey",
    when: "editorTextFocus && markdown.extension.editor.cursor.inList && !editorHasMultipleSelections && !editorReadonly && !editorTabMovesFocus && !hasOtherSuggestions && !hasSnippetCompletions && !inSnippetMode && !inlineSuggestionVisible && !markdown.extension.editor.cursor.inFencedCodeBlock && !markdown.extension.editor.cursor.inMathEnv && !suggestWidgetVisible && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+k i",
    command: "-notebook.cell.chat.start",
    when: "config.notebook.experimental.cellChat && notebookChatAgentRegistered && notebookEditable && notebookEditorFocused && !inputFocus || config.notebook.experimental.generate && notebookChatAgentRegistered && notebookEditable && notebookEditorFocused && !inputFocus",
  },
  {
    key: "ctrl+i",
    command: "-notebook.cell.chat.start",
    when: "config.notebook.experimental.cellChat && notebookChatAgentRegistered && notebookEditable && notebookEditorFocused && !inputFocus || config.notebook.experimental.generate && notebookChatAgentRegistered && notebookEditable && notebookEditorFocused && !inputFocus",
  },
  {
    key: "ctrl+shift+f9",
    command: "-o.showOutput",
  },
  {
    key: "escape",
    command: "-scm.clearInput",
    when: "scmRepository && !suggestWidgetVisible",
  },
  {
    key: "ctrl+space",
    command: "-editor.action.inlineEdits.accept",
    when: "inlineEditsVisible",
  },
  {
    key: "alt+a",
    command: "-yo1dog.cursor-align.alignCursors",
    when: "editorTextFocus",
  },
  {
    key: "alt+d",
    command: "-cody.command.document-code",
    when: "cody.activated && !editorReadonly",
  },
  {
    key: "alt+k",
    command: "-cody.command.edit-code",
    when: "cody.activated && !editorReadonly",
  },
  {
    key: "alt+c",
    command: "-cody.menu.commands",
    when: "cody.activated",
  },
  {
    key: "shift+alt+c",
    command: "-cody.menu.custom-commands",
    when: "cody.activated && workspaceFolderCount > 0",
  },
  {
    key: "alt+/",
    command: "-cody.mention.selection",
    when: "cody.activated && cody.hasChatPanelsOpened && editorHasSelection && editorTextFocus",
  },
  {
    key: "alt+l",
    command: "-cody.mention.selection",
    when: "cody.activated && cody.hasChatPanelsOpened && editorHasSelection && editorTextFocus",
  },
  {
    key: "alt+m",
    command: "-cody.multi-model-autocomplete.manual-trigger",
    when: "cody.activated && config.cody.autocomplete.enabled && config.cody.autocomplete.experimental.multiModelCompletions && editorTextFocus && !editorHasSelection && !editorReadonly && !inlineSuggestionsVisible",
  },
  {
    key: "alt+/",
    command: "-cody.chat.panel.new",
    when: "cody.activated",
  },
  {
    key: "alt+l",
    command: "-cody.chat.panel.new",
    when: "cody.activated",
  },
  {
    key: "alt+/",
    command: "-cody.chat.focus",
    when: "!cody.activated",
  },
  {
    key: "alt+l",
    command: "-cody.chat.focus",
    when: "!cody.activated",
  },
  {
    key: "alt+\\",
    command: "-cody.autocomplete.manual-trigger",
    when: "cody.activated && config.cody.autocomplete.enabled && editorTextFocus && !editorHasSelection && !editorReadonly && !inlineSuggestionsVisible",
  },
  {
    key: "ctrl+s",
    command: "-issue.createIssueFromFile",
    when: "!issues.creatingFromFile && resourceScheme == 'newIssue' && config.files.autoSave != 'off'",
  },
  {
    key: "ctrl+enter",
    command: "-issue.createIssueFromFile",
    when: "!issues.creatingFromFile && resourceScheme == 'newIssue'",
  },
  {
    key: "ctrl+k ctrl+k",
    command: "-editor.action.defineKeybinding",
    when: "resource == 'vscode-userdata:/home/econn/.config/Code/User/keybindings.json'",
  },
  {
    key: "ctrl+k ctrl+shift+s",
    command: "-easySnippet.run",
  },
  {
    key: "ctrl+shift+space",
    command: "-issue.suggestRefresh",
    when: "suggestWidgetVisible",
  },
  {
    key: "ctrl+k m",
    command: "-pr.makeSuggestion",
    when: "commentEditorFocused",
  },
  {
    key: "ctrl+g",
    command: "-hexEditor.goToOffset",
    when: "activeCustomEditorId == 'hexEditor.hexedit'",
  },
  {
    key: "insert",
    command: "-hexEditor.switchEditMode",
    when: "hexEditor:isActive",
  },
  {
    key: "escape",
    command: "-editor.action.inlineEdits.hide",
    when: "inlineEditsVisible",
  },
  {
    key: "ctrl+i",
    command: "-workbench.action.terminal.chat.start",
    when: "terminalChatAgentRegistered && terminalFocusInAny && terminalHasBeenCreated || terminalChatAgentRegistered && terminalFocusInAny && terminalProcessSupported",
  },
  {
    key: "ctrl+alt+t",
    command: "-io.orta.jest.editor.run-all-tests",
    when: "editorLangId =~ /(javascript|javascriptreact|typescript|typescriptreact|vue)/",
  },
  {
    key: "ctrl+b",
    command: "-markdown.extension.editing.toggleBold",
    when: "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+i",
    command: "-markdown.extension.editing.toggleItalic",
    when: "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+m",
    command: "-markdown.extension.editing.toggleMath",
    when: "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "alt+s",
    command: "-markdown.extension.editing.toggleStrikethrough",
    when: "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "alt+c",
    command: "-markdown.extension.checkTaskList",
    when: "editorTextFocus && editorLangId =~ /^markdown$|^rmd$|^quarto$/",
  },
  {
    key: "ctrl+pageup",
    command: "-notebook.focusPreviousEditor",
    when: "accessibilityModeEnabled && notebookCellEditorFocused",
  },
  {
    key: "shift+alt+p",
    command: "-openapi.preview",
    when: "editorTextFocus && !openapiErrors",
  },
  {
    key: "ctrl+pagedown",
    command: "-notebook.focusNextEditor",
    when: "accessibilityModeEnabled && notebookCellEditorFocused",
  },
  {
    key: "alt+]",
    command: "-editor.action.inlineEdits.showNext",
    when: "inlineEditsVisible && !editorReadonly",
  },
  {
    key: "alt+[",
    command: "-editor.action.inlineEdits.showPrevious",
    when: "inlineEditsVisible && !editorReadonly",
  },
  {
    key: ";",
    command: "-smartersemicolon.insert",
  },
  {
    key: "ctrl+;",
    command: "-smartersemicolon.toggle",
  },
  {
    key: "ctrl+alt+p",
    command: "-svgPreview.showPreviewToSide",
    when: "resourceLangId == 'svg' || resourceLangId == 'xml'",
  },
  {
    key: "ctrl+alt+enter",
    command: "-workbench.action.terminal.chat.insertCommand",
    when: "terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks",
  },
  {
    key: "alt+enter",
    command: "-workbench.action.terminal.chat.insertCommand",
    when: "terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks",
  },
  {
    key: "ctrl+alt+enter",
    command: "-workbench.action.terminal.chat.insertFirstCommand",
    when: "terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest",
  },
  {
    key: "alt+enter",
    command: "-workbench.action.terminal.chat.insertFirstCommand",
    when: "terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest",
  },
  {
    key: "enter",
    command: "-workbench.action.terminal.chat.makeRequest",
    when: "terminalChatFocus && terminalHasBeenCreated && !inlineChatEmpty && !terminalChatActiveRequest || terminalChatFocus && terminalProcessSupported && !inlineChatEmpty && !terminalChatActiveRequest",
  },
  {
    key: "down",
    command: "-workbench.action.terminal.chat.nextFromHistory",
    when: "terminalChatFocus",
  },
  {
    key: "up",
    command: "-workbench.action.terminal.chat.previousFromHistory",
    when: "terminalChatFocus",
  },
  {
    key: "ctrl+enter",
    command: "-workbench.action.terminal.chat.runCommand",
    when: "terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks",
  },
  {
    key: "ctrl+enter",
    command: "-workbench.action.terminal.chat.runFirstCommand",
    when: "terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest",
  },
  {
    key: "ctrl+e",
    command: "-thunder-client.change-env",
    when: "activeWebviewPanelId == 'tc.env-view' || activeWebviewPanelId == 'tc.request-view' || activeWebviewPanelId == 'tc.runcol-view'",
  },
  {
    key: "ctrl+u",
    command: "-thunder-client.import-curl",
    when: "activeWebviewPanelId == 'tc.env-view' || activeWebviewPanelId == 'tc.request-view'",
  },
  {
    key: "ctrl+k ctrl+shift+l",
    command: "-editor.toggleFoldRecursively",
    when: "editorTextFocus && foldingEnabled",
  },
  {
    key: "ctrl+shift+r",
    command: "-workbench.view.extension.thunder-client",
  },
  {
    key: "alt+a",
    command: "-cody.fixup.acceptNearest",
    when: "cody.activated && cody.hasActionableEdit && !editorReadonly",
  },
  {
    key: "alt+z",
    command: "-cody.fixup.cancelNearest",
    when: "cody.activated && cody.hasActionableEdit && !editorReadonly",
  },
  {
    key: "alt+r",
    command: "-cody.fixup.retryNearest",
    when: "cody.activated && cody.hasActionableEdit && !editorReadonly",
  },
  {
    key: "alt+x",
    command: "-cody.fixup.undoNearest",
    when: "cody.activated && cody.hasActionableEdit && !editorReadonly",
  },
  {
    key: "ctrl+shift+down",
    command: "-cody.supercompletion.jumpTo",
    when: "cody.activated && cody.hasActionableSupercompletion && !editorReadonly",
  },
  {
    key: "ctrl+shift+up",
    command: "-cody.supercompletion.jumpTo",
    when: "cody.activated && cody.hasActionableSupercompletion && !editorReadonly",
  },
  {
    key: "alt+l",
    command: "-cody.tutorial.chat",
    when: "cody.activated && cody.tutorialActive",
  },
  {
    key: "alt+k",
    command: "-cody.tutorial.edit",
    when: "cody.activated && cody.tutorialActive && !editorReadonly",
  },
  {
    key: "escape",
    command: "-inlineChat.close",
    when: "inlineChatHasProvider && inlineChatVisible",
  },
  {
    key: "escape",
    command: "-inlineChat.discardHunkChange",
    when: "inlineChatHasProvider && inlineChatVisible && inlineChatResponseType == 'messagesAndEdits'",
  },
  {
    key: "ctrl+r",
    command: "-inlineChat.regenerate",
    when: "inlineChatHasProvider && inlineChatVisible",
  },
  {
    key: "ctrl+down",
    command: "-inlineChat.viewInChat",
    when: "inlineChatHasProvider && inlineChatVisible",
  },
  {
    key: "ctrl+enter",
    command: "-interactive.execute",
    when: "activeEditor == 'workbench.editor.interactive'",
  },
  {
    key: "down",
    command: "-interactive.history.next",
    when: "!suggestWidgetVisible && activeEditor == 'workbench.editor.repl' && interactiveInputCursorAtBoundary != 'none' && interactiveInputCursorAtBoundary != 'top'",
  },
  {
    key: "up",
    command: "-interactive.history.previous",
    when: "!suggestWidgetVisible && activeEditor == 'workbench.editor.repl' && interactiveInputCursorAtBoundary != 'bottom' && interactiveInputCursorAtBoundary != 'none'",
  },
  {
    key: "shift+cmd+v",
    command: "-aws.previewStateMachine",
    when: "editorTextFocus && isCloud9 && editorLangId == 'asl' || editorTextFocus && isCloud9 && editorLangId == 'asl-yaml' || editorTextFocus && !aws.isWebExtHost && editorLangId == 'asl' || editorTextFocus && !aws.isWebExtHost && editorLangId == 'asl-yaml'",
  },
  {
    key: "cmd+i",
    command: "-supermaven.editWithSupermaven",
  },
] as Keybind[];
