import { Keybind } from ".";

// windows default keybindings with some things disabled by comments

export default [
    {
        "disabled": true,
        "key": "shift+tab",
        "command": "acceptAlternativeSelectedSuggestion",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "disabled": true,
        "key": "shift+enter",
        "command": "acceptAlternativeSelectedSuggestion",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "enter",
        "command": "acceptRenameInput",
        "when": "editorFocus && renameInputVisible && !isComposing"
    },
    {
        "key": "^+enter",
        "command": "acceptRenameInputWithPreview",
        "when": "config.editor.rename.enablePreview && editorFocus && renameInputVisible && !isComposing"
    },
    {
        "key": "^+.",
        "command": "acceptSelectedCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "enter",
        "command": "acceptSelectedCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "tab",
        "command": "acceptSelectedSuggestion",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "enter",
        "command": "acceptSelectedSuggestion",
        "when": "acceptSuggestionOnEnter && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus"
    },
    {
        "key": "^+f",
        "command": "actions.find",
        "when": "editorFocus || editorIsOpen"
    },
    {
        "key": "^+shift+l",
        "command": "addCursorsAtSearchResults",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "^+shift+;",
        "command": "breadcrumbs.focus",
        "when": "breadcrumbsPossible && breadcrumbsVisible"
    },
    {
        "key": "^+shift+.",
        "command": "breadcrumbs.focusAndSelect",
        "when": "breadcrumbsPossible && breadcrumbsVisible"
    },
    {
        "key": "^+right",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "right",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "^+right",
        "command": "breadcrumbs.focusNextWithPicker",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+left",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "left",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "^+left",
        "command": "breadcrumbs.focusPreviousWithPicker",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+enter",
        "command": "breadcrumbs.revealFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "space",
        "command": "breadcrumbs.revealFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "^+enter",
        "command": "breadcrumbs.revealFocusedFromTreeAside",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "escape",
        "command": "breadcrumbs.selectEditor",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "down",
        "command": "breadcrumbs.selectFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "enter",
        "command": "breadcrumbs.selectFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "^+shift+.",
        "command": "breadcrumbs.toggleToOn",
        "when": "!config.breadcrumbs.enabled"
    },
    {
        "key": "enter",
        "command": "breakpointWidget.action.acceptInput",
        "when": "breakpointWidgetVisible && inBreakpointWidget"
    },
    {
        "key": "shift+escape",
        "command": "cancelLinkedEditingInput",
        "when": "LinkedEditingInputVisible && editorTextFocus"
    },
    {
        "key": "escape",
        "command": "cancelLinkedEditingInput",
        "when": "LinkedEditingInputVisible && editorTextFocus"
    },
    {
        "key": "shift+escape",
        "command": "cancelRenameInput",
        "when": "editorFocus && renameInputVisible"
    },
    {
        "key": "escape",
        "command": "cancelRenameInput",
        "when": "editorFocus && renameInputVisible"
    },
    {
        "key": "shift+escape",
        "command": "cancelSelection",
        "when": "editorHasSelection && textInputFocus"
    },
    {
        "key": "escape",
        "command": "cancelSelection",
        "when": "editorHasSelection && textInputFocus"
    },
    {
        "key": "^+up",
        "command": "chat.action.focus",
        "when": "chatCursorAtTop && inChatInput && chatLocation == 'panel'"
    },
    {
        "key": "^+up",
        "command": "chat.action.focus",
        "when": "inChatInput && isLinux && chatLocation == 'panel' || inChatInput && isWindows && chatLocation == 'panel'"
    },
    {
        "key": "shift+escape",
        "command": "closeBreakpointWidget",
        "when": "breakpointWidgetVisible && textInputFocus"
    },
    {
        "key": "escape",
        "command": "closeBreakpointWidget",
        "when": "breakpointWidgetVisible && textInputFocus"
    },
    {
        "key": "shift+escape",
        "command": "closeDirtyDiff",
        "when": "dirtyDiffVisible"
    },
    {
        "key": "escape",
        "command": "closeDirtyDiff",
        "when": "dirtyDiffVisible"
    },
    {
        "key": "shift+escape",
        "command": "closeFindWidget",
        "when": "editorFocus && findWidgetVisible && !isComposing"
    },
    {
        "key": "escape",
        "command": "closeFindWidget",
        "when": "editorFocus && findWidgetVisible && !isComposing"
    },
    {
        "key": "shift+escape",
        "command": "closeMarkersNavigation",
        "when": "editorFocus && markersNavigationVisible"
    },
    {
        "key": "escape",
        "command": "closeMarkersNavigation",
        "when": "editorFocus && markersNavigationVisible"
    },
    {
        "key": "shift+escape",
        "command": "closeParameterHints",
        "when": "editorFocus && parameterHintsVisible"
    },
    {
        "key": "escape",
        "command": "closeParameterHints",
        "when": "editorFocus && parameterHintsVisible"
    },
    {
        "key": "shift+escape",
        "command": "closeReferenceSearch",
        "when": "inReferenceSearchEditor && !config.editor.stablePeek"
    },
    {
        "key": "escape",
        "command": "closeReferenceSearch",
        "when": "inReferenceSearchEditor && !config.editor.stablePeek"
    },
    {
        "key": "shift+escape",
        "command": "closeReferenceSearch",
        "when": "editorTextFocus && referenceSearchVisible && !config.editor.stablePeek || referenceSearchVisible && !config.editor.stablePeek && !inputFocus"
    },
    {
        "key": "escape",
        "command": "closeReferenceSearch",
        "when": "editorTextFocus && referenceSearchVisible && !config.editor.stablePeek || referenceSearchVisible && !config.editor.stablePeek && !inputFocus"
    },
    {
        "key": "escape",
        "command": "closeReplaceInFilesWidget",
        "when": "replaceInputBoxFocus && searchViewletVisible"
    },
    {
        "key": "escape",
        "command": "commentsClearFilterText",
        "when": "commentsFilterFocus"
    },
    {
        "key": "^+f",
        "command": "commentsFocusFilter",
        "when": "focusedView == 'workbench.panel.comments'"
    },
    {
        "key": "^+down",
        "command": "commentsFocusViewFromFilter",
        "when": "commentsFilterFocus"
    },
    {
        "key": "shift+alt+c",
        "command": "copyFilePath",
        "when": "!editorFocus"
    },
    {
        "key": "shift+alt+c",
        "command": "copyFilePath",
        "when": "editorFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+c",
        "command": "copyRelativeFilePath",
        "when": "!editorFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+c",
        "command": "copyRelativeFilePath",
        "when": "editorFocus"
    },
    {
        "key": "^+end",
        "command": "cursorBottom",
        "when": "textInputFocus"
    },
    {
        "key": "^+shift+end",
        "command": "cursorBottomSelect",
        "when": "textInputFocus"
    },
    {
        "key": "^+shift+alt+down",
        "command": "cursorColumnSelectDown",
        "when": "textInputFocus"
    },
    {
        "key": "shift+down",
        "command": "cursorColumnSelectDown",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "^+shift+alt+left",
        "command": "cursorColumnSelectLeft",
        "when": "textInputFocus"
    },
    {
        "key": "shift+left",
        "command": "cursorColumnSelectLeft",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "^+shift+alt+pagedown",
        "command": "cursorColumnSelectPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "shift+pagedown",
        "command": "cursorColumnSelectPageDown",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "^+shift+alt+pageup",
        "command": "cursorColumnSelectPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "shift+pageup",
        "command": "cursorColumnSelectPageUp",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "^+shift+alt+right",
        "command": "cursorColumnSelectRight",
        "when": "textInputFocus"
    },
    {
        "key": "shift+right",
        "command": "cursorColumnSelectRight",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "^+shift+alt+up",
        "command": "cursorColumnSelectUp",
        "when": "textInputFocus"
    },
    {
        "key": "shift+up",
        "command": "cursorColumnSelectUp",
        "when": "editorColumnSelection && textInputFocus"
    },
    {
        "key": "down",
        "command": "cursorDown",
        "when": "textInputFocus"
    },
    {
        "key": "^+shift+down",
        "command": "cursorDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "shift+down",
        "command": "cursorDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "end",
        "command": "cursorEnd",
        "when": "textInputFocus",
        "args": {
            "sticky": false
        }
    },
    {
        "key": "shift+end",
        "command": "cursorEndSelect",
        "when": "textInputFocus",
        "args": {
            "sticky": false
        }
    },
    {
        "key": "home",
        "command": "cursorHome",
        "when": "textInputFocus"
    },
    {
        "key": "shift+home",
        "command": "cursorHomeSelect",
        "when": "textInputFocus"
    },
    {
        "key": "left",
        "command": "cursorLeft",
        "when": "textInputFocus"
    },
    {
        "key": "shift+left",
        "command": "cursorLeftSelect",
        "when": "textInputFocus"
    },
    {
        "key": "pagedown",
        "command": "cursorPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "shift+pagedown",
        "command": "cursorPageDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "pageup",
        "command": "cursorPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "shift+pageup",
        "command": "cursorPageUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "right",
        "command": "cursorRight",
        "when": "textInputFocus"
    },
    {
        "key": "shift+right",
        "command": "cursorRightSelect",
        "when": "textInputFocus"
    },
    {
        "key": "^+home",
        "command": "cursorTop",
        "when": "textInputFocus"
    },
    {
        "key": "^+shift+home",
        "command": "cursorTopSelect",
        "when": "textInputFocus"
    },
    {
        "key": "^+u",
        "command": "cursorUndo",
        "when": "textInputFocus"
    },
    {
        "key": "up",
        "command": "cursorUp",
        "when": "textInputFocus"
    },
    {
        "key": "^+shift+up",
        "command": "cursorUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "shift+up",
        "command": "cursorUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "^+right",
        "command": "cursorWordEndRight",
        "when": "textInputFocus && !accessibilityModeEnabled"
    },
    {
        "key": "^+shift+right",
        "command": "cursorWordEndRightSelect",
        "when": "textInputFocus && !accessibilityModeEnabled"
    },
    {
        "key": "^+left",
        "command": "cursorWordLeft",
        "when": "textInputFocus && !accessibilityModeEnabled"
    },
    {
        "key": "^+shift+left",
        "command": "cursorWordLeftSelect",
        "when": "textInputFocus && !accessibilityModeEnabled"
    },
    {
        "key": "alt+enter",
        "command": "debug.openBreakpointToSide",
        "when": "breakpointsFocused"
    },
    {
        "key": "^+enter",
        "command": "debug.openBreakpointToSide",
        "when": "breakpointsFocused"
    },
    {
        "key": "^+f5",
        "command": "debug.openView",
        "when": "!debuggersAvailable"
    },
    {
        "key": "f5",
        "command": "debug.openView",
        "when": "!debuggersAvailable"
    },
    {
        "key": "delete",
        "command": "debug.removeBreakpoint",
        "when": "breakpointsFocused && !breakpointInputFocused"
    },
    {
        "key": "delete",
        "command": "debug.removeWatchExpression",
        "when": "watchExpressionsFocused && !expressionSelected"
    },
    {
        "key": "f2",
        "command": "debug.renameWatchExpression",
        "when": "watchExpressionsFocused"
    },
    {
        "key": "f2",
        "command": "debug.setVariable",
        "when": "variablesFocused"
    },
    {
        "key": "space",
        "command": "debug.toggleBreakpoint",
        "when": "breakpointsFocused && !inputFocus"
    },
    {
        "key": "alt+-",
        "command": "decreaseSearchEditorContextLines",
        "when": "inSearchEditor"
    },
    {
        "key": "shift+delete",
        "command": "deleteFile",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "delete",
        "command": "deleteFile",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceMoveableToTrash && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "shift+backspace",
        "command": "deleteLeft",
        "when": "textInputFocus"
    },
    {
        "key": "backspace",
        "command": "deleteLeft",
        "when": "textInputFocus"
    },
    {
        "key": "delete",
        "command": "deleteRight",
        "when": "textInputFocus"
    },
    {
        "key": "^+backspace",
        "command": "deleteWordLeft",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "^+delete",
        "command": "deleteWordRight",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "escape",
        "command": "diffEditor.exitCompareMove",
        "when": "comparingMovedCode"
    },
    {
        "key": "alt+f1",
        "command": "editor.action.accessibilityHelp",
        "when": "!accessibilityHelpIsShown"
    },
    {
        "key": "alt+k",
        "command": "editor.action.accessibilityHelpConfigureKeybindings",
        "when": "accessibilityHelpIsShown"
    },
    {
        "key": "alt+h",
        "command": "editor.action.accessibilityHelpOpenHelpLink",
        "when": "accessibilityHelpIsShown"
    },
    {
        "key": "f7",
        "command": "editor.action.accessibleDiffViewer.next",
        "when": "isInDiffEditor"
    },
    {
        "key": "shift+f7",
        "command": "editor.action.accessibleDiffViewer.prev",
        "when": "isInDiffEditor"
    },
    {
        "key": "alt+f2",
        "command": "editor.action.accessibleView"
    },
    {
        "key": "^+/",
        "command": "editor.action.accessibleViewAcceptInlineCompletion",
        "when": "accessibleViewIsShown && accessibleViewCurrentProviderId == 'inlineCompletions'"
    },
    {
        "key": "alt+f6",
        "command": "editor.action.accessibleViewDisableHint",
        "when": "accessibilityHelpIsShown && accessibleViewVerbosityEnabled || accessibleViewIsShown && accessibleViewVerbosityEnabled"
    },
    {
        "key": "^+shift+.",
        "command": "editor.action.accessibleViewGoToSymbol",
        "when": "accessibilityHelpIsShown && accessibleViewGoToSymbolSupported || accessibleViewGoToSymbolSupported && accessibleViewIsShown"
    },
    {
        "key": "^+shift+o",
        "command": "editor.action.accessibleViewGoToSymbol",
        "when": "accessibilityHelpIsShown && accessibleViewGoToSymbolSupported || accessibleViewGoToSymbolSupported && accessibleViewIsShown"
    },
    {
        "key": "alt+]",
        "command": "editor.action.accessibleViewNext",
        "when": "accessibleViewIsShown && accessibleViewSupportsNavigation"
    },
    {
        "key": "^+alt+pagedown",
        "command": "editor.action.accessibleViewNextCodeBlock",
        "when": "accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'panelChat'"
    },
    {
        "key": "alt+[",
        "command": "editor.action.accessibleViewPrevious",
        "when": "accessibleViewIsShown && accessibleViewSupportsNavigation"
    },
    {
        "key": "^+alt+pageup",
        "command": "editor.action.accessibleViewPreviousCodeBlock",
        "when": "accessibleViewContainsCodeBlocks && accessibleViewCurrentProviderId == 'panelChat'"
    },
    {
        "disabled": true,
        "key": "^+k ^+c",
        "command": "editor.action.addCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+d",
        "command": "editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "shift+alt+.",
        "command": "editor.action.autoFix",
        "when": "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)quickfix\\b/"
    },
    {
        "key": "shift+alt+a",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "escape",
        "command": "editor.action.cancelSelectionAnchor",
        "when": "editorTextFocus && selectionAnchorSet"
    },
    {
        "key": "^+f2",
        "command": "editor.action.changeAll",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+insert",
        "command": "editor.action.clipboardCopyAction"
    },
    {
        "key": "^+c",
        "command": "editor.action.clipboardCopyAction"
    },
    {
        "key": "shift+delete",
        "command": "editor.action.clipboardCutAction"
    },
    {
        "key": "^+x",
        "command": "editor.action.clipboardCutAction"
    },
    {
        "key": "shift+insert",
        "command": "editor.action.clipboardPasteAction"
    },
    {
        "key": "^+v",
        "command": "editor.action.clipboardPasteAction"
    },
    {
        "key": "^+/",
        "command": "editor.action.commentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+up",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "disabled": true,
        "key": "^+k ^+k",
        "command": "editor.action.defineKeybinding",
        "when": "resource == 'vscode-userdata:/d%3A/a/vs-code-default-keybindings/vs-code-default-keybindings/scripts/get_default_keybindings/empty2/User/keybindings.json'"
    },
    {
        "key": "^+shift+k",
        "command": "editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "alt+f3",
        "command": "editor.action.dirtydiff.next",
        "when": "editorTextFocus && !textCompareEditorActive"
    },
    {
        "key": "shift+alt+f3",
        "command": "editor.action.dirtydiff.previous",
        "when": "editorTextFocus && !textCompareEditorActive"
    },
    {
        "key": "enter",
        "command": "editor.action.extensioneditor.findNext",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.extensioneditor.findPrevious",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        "key": "^+f",
        "command": "editor.action.extensioneditor.showfind",
        "when": "!editorFocus && activeEditor == 'workbench.editor.extension'"
    },
    {
        "key": "shift+alt+f",
        "command": "editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "shift+alt+f",
        "command": "editor.action.formatDocument.none",
        "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
        "disabled": true,
        "key": "^+k ^+f",
        "command": "editor.action.formatSelection",
        "when": "editorHasDocumentSelectionFormattingProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+down",
        "command": "editor.action.goToBottomHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "end",
        "command": "editor.action.goToBottomHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "enter",
        "command": "editor.action.goToFocusedStickyScrollLine",
        "when": "stickyScrollFocused"
    },
    {
        "key": "^+f12",
        "command": "editor.action.goToImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus"
    },
    {
        "key": "shift+f12",
        "command": "editor.action.goToReferences",
        "when": "editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "^+up",
        "command": "editor.action.goToTopHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "home",
        "command": "editor.action.goToTopHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "escape",
        "command": "editor.action.hideColorPicker",
        "when": "standaloneColorPickerVisible"
    },
    {
        "key": "^+shift+.",
        "command": "editor.action.inPlaceReplace.down",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+shift+,",
        "command": "editor.action.inPlaceReplace.up",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+]",
        "command": "editor.action.indentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "tab",
        "command": "editor.action.inlineEdit.accept",
        "when": "cursorAtInlineEdit && inlineEditVisible && !editorReadonly"
    },
    {
        "key": "^+alt+=",
        "command": "editor.action.inlineEdit.jumpBack",
        "when": "cursorAtInlineEdit && !editorReadonly"
    },
    {
        "key": "^+alt+=",
        "command": "editor.action.inlineEdit.jumpTo",
        "when": "inlineEditVisible && !cursorAtInlineEdit && !editorReadonly"
    },
    {
        "key": "escape",
        "command": "editor.action.inlineEdit.reject",
        "when": "inlineEditVisible && !editorReadonly"
    },
    {
        "key": "^+alt+=",
        "command": "editor.action.inlineEdit.trigger",
        "when": "!editorReadonly && !inlineEditVisible"
    },
    {
        "key": "^+right",
        "command": "editor.action.inlineSuggest.acceptNextWord",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "tab",
        "command": "editor.action.inlineSuggest.commit",
        "when": "inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible"
    },
    {
        "key": "escape",
        "command": "editor.action.inlineSuggest.hide",
        "when": "inlineSuggestionVisible"
    },
    {
        "key": "alt+]",
        "command": "editor.action.inlineSuggest.showNext",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "alt+[",
        "command": "editor.action.inlineSuggest.showPrevious",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "enter",
        "command": "editor.action.insertColorWithStandaloneColorPicker",
        "when": "standaloneColorPickerFocused"
    },
    {
        "key": "^+alt+up",
        "command": "editor.action.insertCursorAbove",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+i",
        "command": "editor.action.insertCursorAtEndOfEachLineSelected",
        "when": "editorTextFocus"
    },
    {
        "key": "^+alt+down",
        "command": "editor.action.insertCursorBelow",
        "when": "editorTextFocus"
    },
    {
        "key": "^+enter",
        "command": "editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+shift+enter",
        "command": "editor.action.insertLineBefore",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+shift+\\",
        "command": "editor.action.jumpToBracket",
        "when": "editorTextFocus"
    },
    {
        "key": "^+shift+f2",
        "command": "editor.action.linkedEditing",
        "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+f8",
        "command": "editor.action.marker.next",
        "when": "editorFocus"
    },
    {
        "key": "f8",
        "command": "editor.action.marker.nextInFiles",
        "when": "editorFocus"
    },
    {
        "key": "shift+alt+f8",
        "command": "editor.action.marker.prev",
        "when": "editorFocus"
    },
    {
        "key": "shift+f8",
        "command": "editor.action.marker.prevInFiles",
        "when": "editorFocus"
    },
    {
        "key": "alt+down",
        "command": "editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+up",
        "command": "editor.action.moveLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "disabled": true,
        "key": "^+k ^+d",
        "command": "editor.action.moveSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "alt+f9",
        "command": "editor.action.nextCommentThreadAction"
    },
    {
        "disabled": true,
        "key": "^+k ^+alt+down",
        "command": "editor.action.nextCommentingRange",
        "when": "accessibilityModeEnabled && commentFocused || accessibilityModeEnabled && editorFocus || accessibilityHelpIsShown && accessibilityModeEnabled && accessibleViewCurrentProviderId == 'comments'"
    },
    {
        "key": "f3",
        "command": "editor.action.nextMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "enter",
        "command": "editor.action.nextMatchFindAction",
        "when": "editorFocus && findInputFocussed"
    },
    {
        "key": "^+f3",
        "command": "editor.action.nextSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "shift+alt+o",
        "command": "editor.action.organizeImports",
        "when": "textInputFocus && !editorReadonly && supportedCodeAction =~ /(\\s|^)source\\.organizeImports\\b/"
    },
    {
        "key": "^+[",
        "command": "editor.action.outdentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+down",
        "command": "editor.action.pageDownHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "pagedown",
        "command": "editor.action.pageDownHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "alt+up",
        "command": "editor.action.pageUpHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "pageup",
        "command": "editor.action.pageUpHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "alt+f12",
        "command": "editor.action.peekDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "^+shift+f12",
        "command": "editor.action.peekImplementation",
        "when": "editorHasImplementationProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor"
    },
    {
        "key": "shift+alt+f9",
        "command": "editor.action.previousCommentThreadAction"
    },
    {
        "disabled": true,
        "key": "^+k ^+alt+up",
        "command": "editor.action.previousCommentingRange",
        "when": "accessibilityModeEnabled && commentFocused || accessibilityModeEnabled && editorFocus || accessibilityHelpIsShown && accessibilityModeEnabled && accessibleViewCurrentProviderId == 'comments'"
    },
    {
        "key": "shift+f3",
        "command": "editor.action.previousMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.previousMatchFindAction",
        "when": "editorFocus && findInputFocussed"
    },
    {
        "key": "^+shift+f3",
        "command": "editor.action.previousSelectionMatchFindAction",
        "when": "editorFocus"
    },
    {
        "key": "^+.",
        "command": "editor.action.quickFix",
        "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "^+shift+r",
        "command": "editor.action.refactor",
        "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "^+alt+backspace",
        "command": "editor.action.removeBrackets",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+u",
        "command": "editor.action.removeCommentLine",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "f2",
        "command": "editor.action.rename",
        "when": "editorHasRenameProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "^+alt+enter",
        "command": "editor.action.replaceAll",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "^+shift+1",
        "command": "editor.action.replaceOne",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "enter",
        "command": "editor.action.replaceOne",
        "when": "editorFocus && findWidgetVisible && replaceInputFocussed"
    },
    {
        "key": "f12",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus"
    },
    {
        "key": "^+f12",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && isWeb"
    },
    {
        "disabled": true,
        "key": "^+k f12",
        "command": "editor.action.revealDefinitionAside",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "disabled": true,
        "key": "^+k ^+f12",
        "command": "editor.action.revealDefinitionAside",
        "when": "editorHasDefinitionProvider && editorTextFocus && isWeb && !isInEmbeddedEditor"
    },
    {
        "key": "down",
        "command": "editor.action.scrollDownHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "left",
        "command": "editor.action.scrollLeftHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "right",
        "command": "editor.action.scrollRightHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "up",
        "command": "editor.action.scrollUpHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "^+a",
        "command": "editor.action.selectAll"
    },
    {
        "key": "alt+enter",
        "command": "editor.action.selectAllMatches",
        "when": "editorFocus && findWidgetVisible"
    },
    {
        "key": "escape",
        "command": "editor.action.selectEditor",
        "when": "stickyScrollFocused"
    },
    {
        "disabled": true,
        "key": "^+k ^+k",
        "command": "editor.action.selectFromAnchorToCursor",
        "when": "editorTextFocus && selectionAnchorSet"
    },
    {
        "key": "^+shift+l",
        "command": "editor.action.selectHighlights",
        "when": "editorFocus"
    },
    {
        "key": "down",
        "command": "editor.action.selectNextStickyScrollLine",
        "when": "stickyScrollFocused"
    },
    {
        "key": "up",
        "command": "editor.action.selectPreviousStickyScrollLine",
        "when": "stickyScrollFocused"
    },
    {
        "disabled": true,
        "key": "^+k ^+b",
        "command": "editor.action.setSelectionAnchor",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+f10",
        "command": "editor.action.showContextMenu",
        "when": "textInputFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+i",
        "command": "editor.action.showHover",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+right",
        "command": "editor.action.smartSelect.expand",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+left",
        "command": "editor.action.smartSelect.shrink",
        "when": "editorTextFocus"
    },
    {
        "key": "^+h",
        "command": "editor.action.startFindReplaceAction",
        "when": "editorFocus || editorIsOpen"
    },
    {
        "key": "^+enter",
        "command": "editor.action.submitComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "^+e",
        "command": "editor.action.toggleScreenReaderAccessibilityMode",
        "when": "accessibilityHelpIsShown"
    },
    {
        "key": "shift+alt+f1",
        "command": "editor.action.toggleScreenReaderAccessibilityMode"
    },
    {
        "key": "^+m",
        "command": "editor.action.toggleTabFocusMode"
    },
    {
        "key": "alt+z",
        "command": "editor.action.toggleWordWrap"
    },
    {
        "key": "^+shift+space",
        "command": "editor.action.triggerParameterHints",
        "when": "editorHasSignatureHelpProvider && editorTextFocus"
    },
    {
        "key": "^+i",
        "command": "editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
    },
    {
        "key": "^+space",
        "command": "editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+x",
        "command": "editor.action.trimTrailingWhitespace",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "enter",
        "command": "editor.action.webvieweditor.findNext",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.webvieweditor.findPrevious",
        "when": "webviewFindWidgetFocused && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "escape",
        "command": "editor.action.webvieweditor.hideFind",
        "when": "webviewFindWidgetVisible && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "^+f",
        "command": "editor.action.webvieweditor.showFind",
        "when": "webviewFindWidgetEnabled && !editorFocus && activeEditor == 'WebviewEditor'"
    },
    {
        "key": "f7",
        "command": "editor.action.wordHighlight.next",
        "when": "editorTextFocus && hasWordHighlights"
    },
    {
        "key": "shift+f7",
        "command": "editor.action.wordHighlight.prev",
        "when": "editorTextFocus && hasWordHighlights"
    },
    {
        "key": "escape",
        "command": "editor.cancelOperation",
        "when": "cancellableOperation"
    },
    {
        "key": "^+.",
        "command": "editor.changeDropType",
        "when": "dropWidgetVisible"
    },
    {
        "key": "^+.",
        "command": "editor.changePasteType",
        "when": "pasteWidgetVisible"
    },
    {
        "key": "escape",
        "command": "editor.closeCallHierarchy",
        "when": "callHierarchyVisible && !config.editor.stablePeek"
    },
    {
        "key": "escape",
        "command": "editor.closeTestPeek",
        "when": "testing.isInPeek && !config.editor.stablePeek || testing.isPeekVisible && !config.editor.stablePeek"
    },
    {
        "key": "escape",
        "command": "editor.closeTypeHierarchy",
        "when": "typeHierarchyVisible && !config.editor.stablePeek"
    },
    {
        "disabled": true,
        "key": "^+k ^+,",
        "command": "editor.createFoldingRangeFromSelection",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "escape",
        "command": "editor.debug.action.closeExceptionWidget",
        "when": "exceptionWidgetVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+i",
        "command": "editor.debug.action.showDebugHover",
        "when": "editorTextFocus && inDebugMode"
    },
    {
        "key": "f9",
        "command": "editor.debug.action.toggleBreakpoint",
        "when": "debuggersAvailable && disassemblyViewFocus || debuggersAvailable && editorTextFocus"
    },
    {
        "key": "shift+f9",
        "command": "editor.debug.action.toggleInlineBreakpoint",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+d",
        "command": "editor.detectLanguage",
        "when": "editorTextFocus && !notebookEditable"
    },
    {
        "key": "tab",
        "command": "editor.emmet.action.expandAbbreviation",
        "when": "config.emmet.triggerExpansionOnTab && editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        "key": "^+shift+[",
        "command": "editor.fold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+0",
        "command": "editor.foldAll",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+/",
        "command": "editor.foldAllBlockComments",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+-",
        "command": "editor.foldAllExcept",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+8",
        "command": "editor.foldAllMarkerRegions",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+1",
        "command": "editor.foldLevel1",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+2",
        "command": "editor.foldLevel2",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+3",
        "command": "editor.foldLevel3",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+4",
        "command": "editor.foldLevel4",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+5",
        "command": "editor.foldLevel5",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+6",
        "command": "editor.foldLevel6",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+7",
        "command": "editor.foldLevel7",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+[",
        "command": "editor.foldRecursively",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "f12",
        "command": "editor.gotoNextSymbolFromResult",
        "when": "hasSymbols"
    },
    {
        "key": "escape",
        "command": "editor.gotoNextSymbolFromResult.cancel",
        "when": "hasSymbols"
    },
    {
        "key": "escape",
        "command": "editor.hideDropWidget",
        "when": "dropWidgetVisible"
    },
    {
        "key": "escape",
        "command": "editor.hidePasteWidget",
        "when": "pasteWidgetVisible"
    },
    {
        "key": "shift+enter",
        "command": "editor.refocusCallHierarchy",
        "when": "callHierarchyVisible"
    },
    {
        "key": "shift+enter",
        "command": "editor.refocusTypeHierarchy",
        "when": "typeHierarchyVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+.",
        "command": "editor.removeManualFoldingRanges",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showCallHierarchy",
        "when": "editorHasCallHierarchyProvider && editorTextFocus && !inReferenceSearchEditor"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showIncomingCalls",
        "when": "callHierarchyVisible && callHierarchyDirection == 'outgoingCalls'"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showOutgoingCalls",
        "when": "callHierarchyVisible && callHierarchyDirection == 'incomingCalls'"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showSubtypes",
        "when": "typeHierarchyVisible && typeHierarchyDirection == 'supertypes'"
    },
    {
        "key": "shift+alt+h",
        "command": "editor.showSupertypes",
        "when": "typeHierarchyVisible && typeHierarchyDirection == 'subtypes'"
    },
    {
        "disabled": true,
        "key": "^+k ^+l",
        "command": "editor.toggleFold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "^+shift+]",
        "command": "editor.unfold",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+j",
        "command": "editor.unfoldAll",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+=",
        "command": "editor.unfoldAllExcept",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+9",
        "command": "editor.unfoldAllMarkerRegions",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "disabled": true,
        "key": "^+k ^+]",
        "command": "editor.unfoldRecursively",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "^+l",
        "command": "expandLineSelection",
        "when": "textInputFocus"
    },
    {
        "key": "enter",
        "command": "explorer.openAndPassFocus",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsFolder && !inputFocus"
    },
    {
        "key": "^+enter",
        "command": "explorer.openToSide",
        "when": "explorerViewletFocus && foldersViewVisible && !inputFocus"
    },
    {
        "key": "f10",
        "command": "extension.node-debug.startWithStopOnEntry",
        "when": "!inDebugMode && debugConfigurationType == 'node' || !inDebugMode && debugConfigurationType == 'pwa-extensionHost' || !inDebugMode && debugConfigurationType == 'pwa-node'"
    },
    {
        "key": "f11",
        "command": "extension.node-debug.startWithStopOnEntry",
        "when": "!inDebugMode && activeViewlet == 'workbench.view.debug' && debugConfigurationType == 'node' || !inDebugMode && activeViewlet == 'workbench.view.debug' && debugConfigurationType == 'pwa-extensionHost' || !inDebugMode && activeViewlet == 'workbench.view.debug' && debugConfigurationType == 'pwa-node'"
    },
    {
        "key": "escape",
        "command": "filesExplorer.cancelCut",
        "when": "explorerResourceCut && filesExplorerFocus && foldersViewVisible && !inputFocus"
    },
    {
        "key": "^+c",
        "command": "filesExplorer.copy",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !inputFocus"
    },
    {
        "key": "^+x",
        "command": "filesExplorer.cut",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "shift+alt+f",
        "command": "filesExplorer.findInFolder",
        "when": "explorerResourceIsFolder && filesExplorerFocus && foldersViewVisible && !inputFocus"
    },
    {
        "key": "space",
        "command": "filesExplorer.openFilePreserveFocus",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsFolder && !inputFocus"
    },
    {
        "key": "^+v",
        "command": "filesExplorer.paste",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "home",
        "command": "firstCompressedFolder",
        "when": "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedFirstFocus && !inputFocus"
    },
    {
        "key": "down",
        "command": "focusNextRenameSuggestion",
        "when": "renameInputVisible"
    },
    {
        "key": "up",
        "command": "focusPreviousRenameSuggestion",
        "when": "renameInputVisible"
    },
    {
        "key": "^+i",
        "command": "focusSuggestion",
        "when": "suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "^+space",
        "command": "focusSuggestion",
        "when": "suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "disabled": true,
        "key": "^+k ^+r",
        "command": "git.revertSelectedRanges",
        "when": "isInDiffEditor && !operationInProgress"
    },
    {
        "disabled": true,
        "key": "^+k ^+alt+s",
        "command": "git.stageSelectedRanges",
        "when": "isInDiffEditor && !operationInProgress"
    },
    {
        "disabled": true,
        "key": "^+k ^+n",
        "command": "git.unstageSelectedRanges",
        "when": "isInDiffEditor && !operationInProgress"
    },
    {
        "key": "f12",
        "command": "goToNextReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "f4",
        "command": "goToNextReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "shift+f12",
        "command": "goToPreviousReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "shift+f4",
        "command": "goToPreviousReference",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "shift+escape",
        "command": "hideCodeActionWidget",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "escape",
        "command": "hideCodeActionWidget",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "shift+escape",
        "command": "hideSuggestWidget",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "escape",
        "command": "hideSuggestWidget",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "alt+down",
        "command": "history.showNext",
        "when": "historyNavigationForwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        "key": "down",
        "command": "history.showNext",
        "when": "historyNavigationForwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        "key": "alt+up",
        "command": "history.showPrevious",
        "when": "historyNavigationBackwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        "key": "up",
        "command": "history.showPrevious",
        "when": "historyNavigationBackwardsEnabled && historyNavigationWidgetFocus && !isComposing && !suggestWidgetVisible"
    },
    {
        "key": "down",
        "command": "iconSelectBox.focusDown",
        "when": "iconSelectBoxFocus"
    },
    {
        "key": "right",
        "command": "iconSelectBox.focusNext",
        "when": "iconSelectBoxFocus && iconSelectBoxInputEmpty || iconSelectBoxFocus && !iconSelectBoxInputFocus"
    },
    {
        "key": "left",
        "command": "iconSelectBox.focusPrevious",
        "when": "iconSelectBoxFocus && iconSelectBoxInputEmpty || iconSelectBoxFocus && !iconSelectBoxInputFocus"
    },
    {
        "key": "up",
        "command": "iconSelectBox.focusUp",
        "when": "iconSelectBoxFocus"
    },
    {
        "key": "enter",
        "command": "iconSelectBox.selectFocused",
        "when": "iconSelectBoxFocus"
    },
    {
        "key": "alt+=",
        "command": "increaseSearchEditorContextLines",
        "when": "inSearchEditor"
    },
    {
        "key": "escape",
        "command": "inlayHints.stopReadingLineWithHint",
        "when": "isReadingLineWithInlayHints"
    },
    {
        "key": "^+enter",
        "command": "inlineChat.acceptChanges",
        "when": "inlineChatHasProvider && inlineChatVisible && !inlineChatDocumentChanged || inlineChatHasProvider && inlineChatVisible && config.inlineChat.mode != 'preview'"
    },
    {
        "key": "^+down",
        "command": "inlineChat.arrowOutDown",
        "when": "inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorLast && !accessibilityModeEnabled && !isEmbeddedDiffEditor"
    },
    {
        "key": "^+up",
        "command": "inlineChat.arrowOutUp",
        "when": "inlineChatFocused && inlineChatHasProvider && inlineChatInnerCursorFirst && !accessibilityModeEnabled && !isEmbeddedDiffEditor"
    },
    {
        "key": "escape",
        "command": "inlineChat.cancel",
        "when": "inlineChatHasProvider && inlineChatVisible && config.inlineChat.mode == 'preview'"
    },
    {
        "key": "escape",
        "command": "inlineChat.close",
        "when": "inlineChatHasProvider && inlineChatVisible && !inlineChatUserDidEdit"
    },
    {
        "key": "escape",
        "command": "inlineChat.discard",
        "when": "inlineChatHasProvider && inlineChatVisible && !inlineChatUserDidEdit"
    },
    {
        "key": "^+down",
        "command": "inlineChat.focus",
        "when": "editorTextFocus && inlineChatVisible && !accessibilityModeEnabled && !inlineChatFocused && !isEmbeddedDiffEditor && inlineChatOuterCursorPosition == 'above'"
    },
    {
        "key": "^+up",
        "command": "inlineChat.focus",
        "when": "editorTextFocus && inlineChatVisible && !accessibilityModeEnabled && !inlineChatFocused && !isEmbeddedDiffEditor && inlineChatOuterCursorPosition == 'below'"
    },
    {
        "key": "^+i",
        "command": "inlineChat.holdForSpeech",
        "when": "hasSpeechProvider && inlineChatHasProvider && inlineChatVisible && textInputFocus"
    },
    {
        "key": "f7",
        "command": "inlineChat.moveToNextHunk",
        "when": "inlineChatHasProvider && inlineChatVisible"
    },
    {
        "key": "shift+f7",
        "command": "inlineChat.moveToPreviousHunk",
        "when": "inlineChatHasProvider && inlineChatVisible"
    },
    {
        "disabled": true,
        "key": "^+k i",
        "command": "inlineChat.start",
        "when": "editorFocus && inlineChatHasProvider && !editorReadonly"
    },
    {
        "key": "^+i",
        "command": "inlineChat.start",
        "when": "editorFocus && inlineChatHasProvider && !editorReadonly"
    },
    {
        "key": "^+z",
        "command": "inlineChat.unstash",
        "when": "inlineChatHasStashedSession && !editorReadonly"
    },
    {
        "key": "tab",
        "command": "insertBestCompletion",
        "when": "atEndOfWord && textInputFocus && !hasOtherSuggestions && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "tab",
        "command": "insertNextSuggestion",
        "when": "hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "shift+tab",
        "command": "insertPrevSuggestion",
        "when": "hasOtherSuggestions && textInputFocus && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on'"
    },
    {
        "key": "tab",
        "command": "insertSnippet",
        "when": "editorTextFocus && hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode"
    },
    {
        "key": "shift+enter",
        "command": "interactive.execute",
        "when": "config.interactiveWindow.executeWithShiftEnter && activeEditor == 'workbench.editor.interactive'"
    },
    {
        "key": "enter",
        "command": "interactive.execute",
        "when": "!config.interactiveWindow.executeWithShiftEnter && activeEditor == 'workbench.editor.interactive'"
    },
    {
        "key": "^+enter",
        "command": "interactive.execute",
        "when": "activeEditor == 'workbench.editor.interactive'"
    },
    {
        "key": "down",
        "command": "interactive.history.next",
        "when": "!suggestWidgetVisible && activeEditor == 'workbench.editor.interactive' && interactiveInputCursorAtBoundary != 'none' && interactiveInputCursorAtBoundary != 'top'"
    },
    {
        "key": "up",
        "command": "interactive.history.previous",
        "when": "!suggestWidgetVisible && activeEditor == 'workbench.editor.interactive' && interactiveInputCursorAtBoundary != 'bottom' && interactiveInputCursorAtBoundary != 'none'"
    },
    {
        "key": "^+end",
        "command": "interactive.scrollToBottom",
        "when": "activeEditor == 'workbench.editor.interactive'"
    },
    {
        "key": "^+home",
        "command": "interactive.scrollToTop",
        "when": "activeEditor == 'workbench.editor.interactive'"
    },
    {
        "key": "tab",
        "command": "jumpToNextSnippetPlaceholder",
        "when": "hasNextTabstop && inSnippetMode && textInputFocus"
    },
    {
        "key": "shift+tab",
        "command": "jumpToPrevSnippetPlaceholder",
        "when": "hasPrevTabstop && inSnippetMode && textInputFocus"
    },
    {
        "key": "enter",
        "command": "keybindings.editor.acceptWhenExpression",
        "when": "inKeybindings && whenFocus && !suggestWidgetVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+a",
        "command": "keybindings.editor.addKeybinding",
        "when": "inKeybindings && keybindingFocus"
    },
    {
        "key": "escape",
        "command": "keybindings.editor.clearSearchResults",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "^+c",
        "command": "keybindings.editor.copyKeybindingEntry",
        "when": "inKeybindings && keybindingFocus && !whenFocus"
    },
    {
        "key": "enter",
        "command": "keybindings.editor.defineKeybinding",
        "when": "inKeybindings && keybindingFocus && !whenFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+e",
        "command": "keybindings.editor.defineWhenExpression",
        "when": "inKeybindings && keybindingFocus"
    },
    {
        "key": "^+down",
        "command": "keybindings.editor.focusKeybindings",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "alt+k",
        "command": "keybindings.editor.recordSearchKeys",
        "when": "inKeybindings && inKeybindingsSearch"
    },
    {
        "key": "escape",
        "command": "keybindings.editor.rejectWhenExpression",
        "when": "inKeybindings && whenFocus && !suggestWidgetVisible"
    },
    {
        "key": "delete",
        "command": "keybindings.editor.removeKeybinding",
        "when": "inKeybindings && keybindingFocus && !inputFocus"
    },
    {
        "key": "^+f",
        "command": "keybindings.editor.searchKeybindings",
        "when": "inKeybindings"
    },
    {
        "key": "alt+p",
        "command": "keybindings.editor.toggleSortByPrecedence",
        "when": "inKeybindings"
    },
    {
        "key": "end",
        "command": "lastCompressedFolder",
        "when": "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedLastFocus && !inputFocus"
    },
    {
        "key": "escape",
        "command": "leaveEditorMessage",
        "when": "messageVisible"
    },
    {
        "key": "shift+escape",
        "command": "leaveSnippet",
        "when": "inSnippetMode && textInputFocus"
    },
    {
        "key": "escape",
        "command": "leaveSnippet",
        "when": "inSnippetMode && textInputFocus"
    },
    {
        "key": "escape",
        "command": "list.clear",
        "when": "listFocus && listHasSelectionOrFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "escape",
        "command": "list.closeFind",
        "when": "listFocus && treeFindOpen"
    },
    {
        "key": "left",
        "command": "list.collapse",
        "when": "listFocus && treeElementCanCollapse && !inputFocus && !treestickyScrollFocused || listFocus && treeElementHasParent && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+left",
        "command": "list.collapseAll",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "right",
        "command": "list.expand",
        "when": "listFocus && treeElementCanExpand && !inputFocus && !treestickyScrollFocused || listFocus && treeElementHasChild && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "shift+down",
        "command": "list.expandSelectionDown",
        "when": "listFocus && listSupportsMultiselect && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "shift+up",
        "command": "list.expandSelectionUp",
        "when": "listFocus && listSupportsMultiselect && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "f3",
        "command": "list.find",
        "when": "listFocus && listSupportsFind"
    },
    {
        "key": "^+alt+f",
        "command": "list.find",
        "when": "listFocus && listSupportsFind"
    },
    {
        "key": "alt+down",
        "command": "list.focusAnyDown",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "alt+home",
        "command": "list.focusAnyFirst",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "alt+end",
        "command": "list.focusAnyLast",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "alt+up",
        "command": "list.focusAnyUp",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "down",
        "command": "list.focusDown",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "home",
        "command": "list.focusFirst",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "end",
        "command": "list.focusLast",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "pagedown",
        "command": "list.focusPageDown",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "pageup",
        "command": "list.focusPageUp",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "up",
        "command": "list.focusUp",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+down",
        "command": "list.scrollDown",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused && listScrollAtBoundary != 'both' && listScrollAtBoundary != 'bottom'"
    },
    {
        "key": "^+up",
        "command": "list.scrollUp",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused && listScrollAtBoundary != 'both' && listScrollAtBoundary != 'top'"
    },
    {
        "key": "enter",
        "command": "list.select",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+a",
        "command": "list.selectAll",
        "when": "listFocus && listSupportsMultiselect && !inputFocus && !treestickyScrollFocused"
    },
    {
        "disabled": true,
        "key": "^+k ^+i",
        "command": "list.showHover",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "left",
        "command": "list.stickyScroll.collapse",
        "when": "treestickyScrollFocused"
    },
    {
        "key": "enter",
        "command": "list.stickyScrollselect",
        "when": "treestickyScrollFocused"
    },
    {
        "key": "space",
        "command": "list.stickyScrolltoggleExpand",
        "when": "treestickyScrollFocused"
    },
    {
        "key": "space",
        "command": "list.toggleExpand",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+shift+enter",
        "command": "list.toggleSelection",
        "when": "listFocus && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "^+shift+v",
        "command": "markdown.showPreview",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "^+k v",
        "command": "markdown.showPreviewToSide",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "delete",
        "command": "moveFileToTrash",
        "when": "explorerResourceMoveableToTrash && filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "right",
        "command": "nextCompressedFolder",
        "when": "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedLastFocus && !inputFocus"
    },
    {
        "disabled": true,
        "key": "y",
        "command": "notebook.cell.changeToCode",
        "when": "notebookEditorFocused && !inputFocus && !notebookOutputFocused && activeEditor == 'workbench.editor.notebook' && notebookCellType == 'markup'"
    },
    {
        "disabled": true,
        "key": "m",
        "command": "notebook.cell.changeToMarkdown",
        "when": "notebookEditorFocused && !inputFocus && !notebookOutputFocused && activeEditor == 'workbench.editor.notebook' && notebookCellType == 'code'"
    },
    {
        "disabled": true,
        "key": "enter",
        "command": "notebook.cell.chat.accept",
        "when": "inlineChatFocused && notebookCellChatFocused && !notebookCellEditorFocused"
    },
    {
        "disabled": true,
        "key": "escape",
        "command": "notebook.cell.chat.acceptChanges",
        "when": "inlineChatFocused && notebookCellChatFocused && notebookChatUserDidEdit && !notebookCellEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+enter",
        "command": "notebook.cell.chat.acceptChanges",
        "when": "inlineChatFocused && notebookCellChatFocused && !notebookCellEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+enter",
        "command": "notebook.cell.chat.acceptChanges",
        "when": "notebookEditorFocused && !inputFocus && !notebookCellEditorFocused && notebookChatOuterFocusPosition == 'below'"
    },
    {
        "disabled": true,
        "key": "^+down",
        "command": "notebook.cell.chat.arrowOutDown",
        "when": "inlineChatFocused && inlineChatInnerCursorLast && notebookCellChatFocused && !accessibilityModeEnabled && !notebookCellEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+up",
        "command": "notebook.cell.chat.arrowOutUp",
        "when": "inlineChatFocused && inlineChatInnerCursorFirst && notebookCellChatFocused && !accessibilityModeEnabled && !notebookCellEditorFocused"
    },
    {
        "disabled": true,
        "key": "escape",
        "command": "notebook.cell.chat.discard",
        "when": "inlineChatFocused && notebookCellChatFocused && !notebookCellEditorFocused && !notebookChatUserDidEdit"
    },
    {
        "disabled": true,
        "key": "^+down",
        "command": "notebook.cell.chat.focus",
        "when": "notebookEditorFocused && !inputFocus && notebookChatOuterFocusPosition == 'above'"
    },
    {
        "disabled": true,
        "key": "^+up",
        "command": "notebook.cell.chat.focus",
        "when": "notebookEditorFocused && !inputFocus && notebookChatOuterFocusPosition == 'below'"
    },
    {
        "disabled": true,
        "key": "^+down",
        "command": "notebook.cell.chat.focusNextCell",
        "when": "inlineChatFocused && notebookCellChatFocused"
    },
    {
        "disabled": true,
        "key": "^+up",
        "command": "notebook.cell.chat.focusPreviousCell",
        "when": "inlineChatFocused && notebookCellChatFocused"
    },
    {
        "disabled": true,
        "key": "down",
        "command": "notebook.cell.chat.nextFromHistory",
        "when": "inlineChatFocused && notebookCellChatFocused"
    },
    {
        "disabled": true,
        "key": "up",
        "command": "notebook.cell.chat.previousFromHistory",
        "when": "inlineChatFocused && notebookCellChatFocused"
    },
    {
        "disabled": true,
        "key": "^+k i",
        "command": "notebook.cell.chat.start",
        "when": "config.notebook.experimental.cellChat && inlineChatHasProvider && notebookEditable && notebookEditorFocused && !inputFocus || config.notebook.experimental.generate && inlineChatHasProvider && notebookEditable && notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "^+i",
        "command": "notebook.cell.chat.start",
        "when": "config.notebook.experimental.cellChat && inlineChatHasProvider && notebookEditable && notebookEditorFocused && !inputFocus || config.notebook.experimental.generate && inlineChatHasProvider && notebookEditable && notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "alt+delete",
        "command": "notebook.cell.clearOutputs",
        "when": "notebookCellEditable && notebookCellHasOutputs && notebookEditable && notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+c",
        "command": "notebook.cell.collapseCellInput",
        "when": "notebookCellListFocused && !inputFocus && !notebookCellInputIsCollapsed"
    },
    {
        "disabled": true,
        "key": "^+k t",
        "command": "notebook.cell.collapseCellOutput",
        "when": "notebookCellHasOutputs && notebookCellListFocused && !inputFocus && !notebookCellOutputIsCollapsed"
    },
    {
        "disabled": true,
        "key": "shift+alt+down",
        "command": "notebook.cell.copyDown",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "shift+alt+up",
        "command": "notebook.cell.copyUp",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "pagedown",
        "command": "notebook.cell.cursorPageDown",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "shift+pagedown",
        "command": "notebook.cell.cursorPageDownSelect",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused && !notebookOutputFocused"
    },
    {
        "disabled": true,
        "key": "pageup",
        "command": "notebook.cell.cursorPageUp",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "shift+pageup",
        "command": "notebook.cell.cursorPageUpSelect",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused && !notebookOutputFocused"
    },
    {
        "disabled": true,
        "key": "delete",
        "command": "notebook.cell.delete",
        "when": "notebookEditorFocused && !inputFocus && !notebookOutputInputFocused"
    },
    {
        "disabled": true,
        "key": "shift+alt+d",
        "command": "notebook.cell.detectLanguage",
        "when": "notebookCellEditable && notebookEditable"
    },
    {
        "disabled": true,
        "key": "enter",
        "command": "notebook.cell.edit",
        "when": "notebookCellListFocused && notebookEditable && !editorHoverFocused && !inputFocus && !notebookOutputInputFocused"
    },
    {
        "disabled": true,
        "key": "^+alt+enter",
        "command": "notebook.cell.execute",
        "when": "notebookCellListFocused && notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || !notebookCellExecuting && notebookCellType == 'code' && notebookCellListFocused || inlineChatFocused && notebookCellChatFocused && notebookKernelCount > 0 || !notebookCellExecuting && notebookCellType == 'code' && notebookCellListFocused || inlineChatFocused && notebookCellChatFocused && notebookKernelSourceCount > 0 || inlineChatFocused && notebookCellChatFocused && notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code'"
    },
    {
        "disabled": true,
        "key": "alt+enter",
        "command": "notebook.cell.executeAndInsertBelow",
        "when": "notebookCellListFocused && notebookCellType == 'markup' || notebookCellListFocused && notebookMissingKernelExtension && !notebookCellExecuting && notebookCellType == 'code' || notebookCellListFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellListFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0"
    },
    {
        "disabled": true,
        "key": "shift+enter",
        "command": "notebook.cell.executeAndSelectBelow",
        "when": "notebookCellListFocused && !inlineChatFocused && notebookCellType == 'markup' || notebookCellListFocused && notebookMissingKernelExtension && !inlineChatFocused && !notebookCellExecuting && notebookCellType == 'code' || notebookCellListFocused && !inlineChatFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelCount > 0 || notebookCellListFocused && !inlineChatFocused && !notebookCellExecuting && notebookCellType == 'code' && notebookKernelSourceCount > 0"
    },
    {
        "disabled": true,
        "key": "^+k ^+c",
        "command": "notebook.cell.expandCellInput",
        "when": "notebookCellInputIsCollapsed && notebookCellListFocused"
    },
    {
        "disabled": true,
        "key": "^+k t",
        "command": "notebook.cell.expandCellOutput",
        "when": "notebookCellListFocused && notebookCellOutputIsCollapsed"
    },
    {
        "disabled": true,
        "key": "^+up",
        "command": "notebook.cell.focusChatWidget",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'bottom' && notebookEditorCursorAtBoundary != 'none'"
    },
    {
        "disabled": true,
        "key": "^+down",
        "command": "notebook.cell.focusInOutput",
        "when": "notebookCellHasOutputs && notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+down",
        "command": "notebook.cell.focusNextChatWidget",
        "when": "editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top'"
    },
    {
        "disabled": true,
        "key": "^+up",
        "command": "notebook.cell.focusOutOutput",
        "when": "notebookEditorFocused && notebookOutputFocused"
    },
    {
        "disabled": true,
        "key": "^+shift+enter",
        "command": "notebook.cell.insertCodeCellAbove",
        "when": "notebookCellListFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "^+enter",
        "command": "notebook.cell.insertCodeCellBelow",
        "when": "notebookCellListFocused && !inputFocus && notebookChatOuterFocusPosition == ''"
    },
    {
        "disabled": true,
        "key": "shift+alt+win+j",
        "command": "notebook.cell.joinAbove",
        "when": "notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "alt+win+j",
        "command": "notebook.cell.joinBelow",
        "when": "notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "alt+down",
        "command": "notebook.cell.moveDown",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "alt+up",
        "command": "notebook.cell.moveUp",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "down",
        "command": "notebook.cell.nullAction",
        "when": "notebookOutputInputFocused"
    },
    {
        "disabled": true,
        "key": "up",
        "command": "notebook.cell.nullAction",
        "when": "notebookOutputInputFocused"
    },
    {
        "disabled": true,
        "key": "^+.",
        "command": "notebook.cell.openFailureActions",
        "when": "notebookCellFocused && notebookCellHasErrorDiagnostics && !notebookCellEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+a",
        "command": "notebook.cell.output.selectAll",
        "when": "notebookEditorFocused && notebookOutputFocused"
    },
    {
        "disabled": true,
        "key": "^+shift+v",
        "command": "notebook.cell.pasteAbove",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "escape",
        "command": "notebook.cell.quitEdit",
        "when": "inputFocus && notebookEditorFocused && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible && !inlineChatFocused"
    },
    {
        "disabled": true,
        "key": "^+alt+enter",
        "command": "notebook.cell.quitEdit",
        "when": "inputFocus && notebookEditorFocused && !inlineChatFocused && notebookCellType == 'markup'"
    },
    {
        "disabled": true,
        "key": "escape",
        "command": "notebook.cell.quitEdit",
        "when": "notebookEditorFocused && notebookOutputFocused"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+\\",
        "command": "notebook.cell.split",
        "when": "editorTextFocus && notebookCellEditable && notebookEditable && notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+k y",
        "command": "notebook.cell.toggleOutputScrolling",
        "when": "notebookCellHasOutputs && notebookCellListFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "^+l",
        "command": "notebook.centerActiveCell",
        "when": "notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "alt+f3",
        "command": "notebook.diff.action.next",
        "when": "activeEditor == 'workbench.editor.notebookTextDiffEditor'"
    },
    {
        "disabled": true,
        "key": "shift+alt+f3",
        "command": "notebook.diff.action.previous",
        "when": "activeEditor == 'workbench.editor.notebookTextDiffEditor'"
    },
    {
        "disabled": true,
        "key": "^+f",
        "command": "notebook.find",
        "when": "notebookEditorFocused && !editorFocus && activeEditor == 'workbench.editor.interactive' || notebookEditorFocused && !editorFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "disabled": true,
        "key": "^+end",
        "command": "notebook.focusBottom",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "down",
        "command": "notebook.focusNextEditor",
        "when": "config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'none' && notebookEditorCursorAtBoundary != 'top'"
    },
    {
        "disabled": true,
        "key": "down",
        "command": "notebook.focusNextEditor",
        "when": "config.notebook.navigation.allowNavigateToSurroundingCells && notebookCursorNavigationMode && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && !notebookCellMarkdownEditMode && notebookCellType == 'markup'"
    },
    {
        "disabled": true,
        "key": "^+down",
        "command": "notebook.focusNextEditor",
        "when": "notebookEditorFocused && notebookOutputFocused"
    },
    {
        "disabled": true,
        "key": "^+alt+pagedown",
        "command": "notebook.focusNextEditor",
        "when": "notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "up",
        "command": "notebook.focusPreviousEditor",
        "when": "config.notebook.navigation.allowNavigateToSurroundingCells && editorTextFocus && inputFocus && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && notebookEditorCursorAtBoundary != 'bottom' && notebookEditorCursorAtBoundary != 'none'"
    },
    {
        "disabled": true,
        "key": "up",
        "command": "notebook.focusPreviousEditor",
        "when": "config.notebook.navigation.allowNavigateToSurroundingCells && notebookCursorNavigationMode && notebookEditorFocused && !accessibilityModeEnabled && !isEmbeddedDiffEditor && !notebookCellMarkdownEditMode && notebookCellType == 'markup'"
    },
    {
        "disabled": true,
        "key": "^+alt+pageup",
        "command": "notebook.focusPreviousEditor",
        "when": "notebookEditorFocused"
    },
    {
        "disabled": true,
        "key": "^+home",
        "command": "notebook.focusTop",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "disabled": true,
        "key": "left",
        "command": "notebook.fold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "disabled": true,
        "key": "^+shift+[",
        "command": "notebook.fold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "disabled": true,
        "key": "shift+alt+f",
        "command": "notebook.format",
        "when": "notebookEditable && !editorTextFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "disabled": true,
        "key": "shift+alt+f",
        "command": "notebook.formatCell",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && inCompositeEditor && notebookEditable && !editorReadonly && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "disabled": true,
        "key": "escape",
        "command": "notebook.hideFind",
        "when": "notebookEditorFocused && notebookFindWidgetFocused"
    },
    {
        "disabled": true,
        "key": "right",
        "command": "notebook.unfold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "disabled": true,
        "key": "^+shift+]",
        "command": "notebook.unfold",
        "when": "notebookEditorFocused && !inputFocus && activeEditor == 'workbench.editor.notebook'"
    },
    {
        "key": "^+shift+a",
        "command": "notification.acceptPrimaryAction",
        "when": "notificationFocus || notificationToastsVisible"
    },
    {
        "key": "delete",
        "command": "notification.clear",
        "when": "notificationFocus"
    },
    {
        "key": "left",
        "command": "notification.collapse",
        "when": "notificationFocus"
    },
    {
        "key": "right",
        "command": "notification.expand",
        "when": "notificationFocus"
    },
    {
        "key": "enter",
        "command": "notification.toggle",
        "when": "notificationFocus"
    },
    {
        "key": "space",
        "command": "notification.toggle",
        "when": "notificationFocus"
    },
    {
        "key": "home",
        "command": "notifications.focusFirstToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "pageup",
        "command": "notifications.focusFirstToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "end",
        "command": "notifications.focusLastToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "pagedown",
        "command": "notifications.focusLastToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "down",
        "command": "notifications.focusNextToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "up",
        "command": "notifications.focusPreviousToast",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "key": "escape",
        "command": "notifications.hideList",
        "when": "notificationCenterVisible"
    },
    {
        "key": "escape",
        "command": "notifications.hideToasts",
        "when": "notificationToastsVisible"
    },
    {
        "key": "escape",
        "command": "notifications.hideToasts",
        "when": "notificationFocus && notificationToastsVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+n",
        "command": "notifications.showList"
    },
    {
        "key": "^+enter",
        "command": "openReferenceToSide",
        "when": "listFocus && referenceSearchVisible && !inputFocus && !treeElementCanCollapse && !treeElementCanExpand && !treestickyScrollFocused"
    },
    {
        "key": "shift+tab",
        "command": "outdent",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        "key": "^+enter",
        "command": "previewSelectedCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "left",
        "command": "previousCompressedFolder",
        "when": "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedFirstFocus && !inputFocus"
    },
    {
        "key": "escape",
        "command": "problems.action.clearFilterText",
        "when": "problemsFilterFocus"
    },
    {
        "key": "^+c",
        "command": "problems.action.copy",
        "when": "problemsVisibility && !relatedInformationFocus && focusedView == 'workbench.panel.markers.view'"
    },
    {
        "key": "^+f",
        "command": "problems.action.focusFilter",
        "when": "focusedView == 'workbench.panel.markers.view'"
    },
    {
        "key": "^+down",
        "command": "problems.action.focusProblemsFromFilter",
        "when": "problemsFilterFocus"
    },
    {
        "key": "enter",
        "command": "problems.action.open",
        "when": "problemFocus"
    },
    {
        "key": "^+enter",
        "command": "problems.action.openToSide",
        "when": "problemFocus"
    },
    {
        "key": "^+.",
        "command": "problems.action.showQuickFixes",
        "when": "problemFocus"
    },
    {
        "key": "^+alt+right",
        "command": "quickInput.acceptInBackground",
        "when": "cursorAtEndOfQuickInputBox && inQuickInput && quickInputType == 'quickPick' || inQuickInput && !inputFocus && quickInputType == 'quickPick'"
    },
    {
        "key": "^+right",
        "command": "quickInput.acceptInBackground",
        "when": "cursorAtEndOfQuickInputBox && inQuickInput && quickInputType == 'quickPick' || inQuickInput && !inputFocus && quickInputType == 'quickPick'"
    },
    {
        "key": "alt+right",
        "command": "quickInput.acceptInBackground",
        "when": "cursorAtEndOfQuickInputBox && inQuickInput && quickInputType == 'quickPick' || inQuickInput && !inputFocus && quickInputType == 'quickPick'"
    },
    {
        "key": "right",
        "command": "quickInput.acceptInBackground",
        "when": "cursorAtEndOfQuickInputBox && inQuickInput && quickInputType == 'quickPick' || inQuickInput && !inputFocus && quickInputType == 'quickPick'"
    },
    {
        "key": "^+alt+home",
        "command": "quickInput.first",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+home",
        "command": "quickInput.first",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+alt+end",
        "command": "quickInput.last",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+end",
        "command": "quickInput.last",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+down",
        "command": "quickInput.next",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "down",
        "command": "quickInput.next",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+alt+down",
        "command": "quickInput.nextSeparator",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "alt+down",
        "command": "quickInput.nextSeparatorWithQuickAccessFallback",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+alt+pagedown",
        "command": "quickInput.pageNext",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+pagedown",
        "command": "quickInput.pageNext",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "alt+pagedown",
        "command": "quickInput.pageNext",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "pagedown",
        "command": "quickInput.pageNext",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+alt+pageup",
        "command": "quickInput.pagePrevious",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+pageup",
        "command": "quickInput.pagePrevious",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "alt+pageup",
        "command": "quickInput.pagePrevious",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "pageup",
        "command": "quickInput.pagePrevious",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+up",
        "command": "quickInput.previous",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "up",
        "command": "quickInput.previous",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+alt+up",
        "command": "quickInput.previousSeparator",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "alt+up",
        "command": "quickInput.previousSeparatorWithQuickAccessFallback",
        "when": "inQuickInput && quickInputType == 'quickPick'"
    },
    {
        "key": "^+shift+z",
        "command": "redo"
    },
    {
        "key": "^+y",
        "command": "redo"
    },
    {
        "key": "^+enter",
        "command": "refactorPreview.apply",
        "when": "refactorPreview.enabled && refactorPreview.hasCheckedChanges && focusedView == 'refactorPreview'"
    },
    {
        "key": "space",
        "command": "refactorPreview.toggleCheckedState",
        "when": "listFocus && refactorPreview.enabled && !inputFocus && !treestickyScrollFocused"
    },
    {
        "key": "shift+alt+f12",
        "command": "references-view.findReferences",
        "when": "editorHasReferenceProvider"
    },
    {
        "key": "f4",
        "command": "references-view.next",
        "when": "reference-list.hasResult && references-view.canNavigate"
    },
    {
        "key": "shift+f4",
        "command": "references-view.prev",
        "when": "reference-list.hasResult && references-view.canNavigate"
    },
    {
        "key": "shift+alt+h",
        "command": "references-view.showCallHierarchy",
        "when": "editorHasCallHierarchyProvider"
    },
    {
        "key": "delete",
        "command": "remote.tunnel.closeInline",
        "when": "tunnelCloseable && tunnelViewFocus"
    },
    {
        "key": "^+c",
        "command": "remote.tunnel.copyAddressInline",
        "when": "tunnelViewFocus && tunnelType == 'Detected' && tunnelViewMultiSelection == 'undefined' || tunnelViewFocus && tunnelType == 'Forwarded' && tunnelViewMultiSelection == 'undefined'"
    },
    {
        "key": "f2",
        "command": "remote.tunnel.label",
        "when": "tunnelViewFocus && tunnelType == 'Forwarded' && tunnelViewMultiSelection == 'undefined'"
    },
    {
        "key": "shift+escape",
        "command": "removeSecondaryCursors",
        "when": "editorHasMultipleSelections && textInputFocus"
    },
    {
        "key": "escape",
        "command": "removeSecondaryCursors",
        "when": "editorHasMultipleSelections && textInputFocus"
    },
    {
        "key": "f2",
        "command": "renameFile",
        "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
    },
    {
        "key": "enter",
        "command": "repl.action.acceptInput",
        "when": "inDebugRepl && textInputFocus"
    },
    {
        "key": "^+f",
        "command": "repl.action.filter",
        "when": "inDebugRepl && textInputFocus"
    },
    {
        "key": "^+shift+r",
        "command": "rerunSearchEditorSearch",
        "when": "inSearchEditor"
    },
    {
        "key": "shift+alt+r",
        "command": "revealFileInOS",
        "when": "!editorFocus"
    },
    {
        "key": "enter",
        "command": "revealReference",
        "when": "listFocus && referenceSearchVisible && !inputFocus && !treeElementCanCollapse && !treeElementCanExpand && !treestickyScrollFocused"
    },
    {
        "disabled": true,
        "key": "^+k s",
        "command": "saveAll"
    },
    {
        "key": "^+enter",
        "command": "scm.acceptInput",
        "when": "scmRepository"
    },
    {
        "key": "alt+down",
        "command": "scm.forceViewNextCommit",
        "when": "scmRepository"
    },
    {
        "key": "alt+up",
        "command": "scm.forceViewPreviousCommit",
        "when": "scmRepository"
    },
    {
        "key": "down",
        "command": "scm.viewNextCommit",
        "when": "scmInputIsInLastPosition && scmRepository && !suggestWidgetVisible"
    },
    {
        "key": "up",
        "command": "scm.viewPreviousCommit",
        "when": "scmInputIsInFirstPosition && scmRepository && !suggestWidgetVisible"
    },
    {
        "key": "^+down",
        "command": "scrollLineDown",
        "when": "textInputFocus"
    },
    {
        "key": "^+up",
        "command": "scrollLineUp",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pagedown",
        "command": "scrollPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "alt+pageup",
        "command": "scrollPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "escape",
        "command": "search.action.cancel",
        "when": "listFocus && searchViewletVisible && !inputFocus && !treestickyScrollFocused && searchState != '0'"
    },
    {
        "key": "^+c",
        "command": "search.action.copyMatch",
        "when": "fileMatchOrMatchFocus"
    },
    {
        "key": "shift+alt+c",
        "command": "search.action.copyPath",
        "when": "fileMatchOrFolderMatchWithResourceFocus"
    },
    {
        "key": "f4",
        "command": "search.action.focusNextSearchResult",
        "when": "hasSearchResult || inSearchEditor"
    },
    {
        "key": "shift+f4",
        "command": "search.action.focusPreviousSearchResult",
        "when": "hasSearchResult || inSearchEditor"
    },
    {
        "key": "escape",
        "command": "search.action.focusQueryEditorWidget",
        "when": "inSearchEditor"
    },
    {
        "key": "^+up",
        "command": "search.action.focusSearchFromResults",
        "when": "accessibilityModeEnabled && searchViewletVisible || firstMatchFocus && searchViewletVisible"
    },
    {
        "key": "alt+enter",
        "command": "search.action.openInEditor",
        "when": "hasSearchResult && searchViewletFocus"
    },
    {
        "key": "enter",
        "command": "search.action.openResult",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "^+enter",
        "command": "search.action.openResultToSide",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "delete",
        "command": "search.action.remove",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "^+shift+1",
        "command": "search.action.replace",
        "when": "isEditableItem && matchFocus && replaceActive && searchViewletVisible"
    },
    {
        "key": "^+alt+enter",
        "command": "search.action.replaceAll",
        "when": "replaceActive && searchViewletVisible && !findWidgetVisible"
    },
    {
        "key": "^+shift+enter",
        "command": "search.action.replaceAllInFile",
        "when": "fileMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        "key": "^+shift+1",
        "command": "search.action.replaceAllInFile",
        "when": "fileMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        "key": "^+shift+enter",
        "command": "search.action.replaceAllInFolder",
        "when": "folderMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        "key": "^+shift+1",
        "command": "search.action.replaceAllInFolder",
        "when": "folderMatchFocus && isEditableItem && replaceActive && searchViewletVisible"
    },
    {
        "key": "shift+alt+f",
        "command": "search.action.restrictSearchToFolder",
        "when": "folderMatchWithResourceFocus && searchViewletVisible"
    },
    {
        "key": "^+down",
        "command": "search.focus.nextInputBox",
        "when": "inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible"
    },
    {
        "key": "^+up",
        "command": "search.focus.previousInputBox",
        "when": "inSearchEditor && inputBoxFocus || inputBoxFocus && searchViewletVisible && !searchInputBoxFocus"
    },
    {
        "key": "^+shift+backspace",
        "command": "search.searchEditor.action.deleteFileResults",
        "when": "inSearchEditor"
    },
    {
        "key": "^+shift+l",
        "command": "selectAllSearchEditorMatches",
        "when": "inSearchEditor"
    },
    {
        "key": "^+down",
        "command": "selectNextCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "down",
        "command": "selectNextCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "^+pagedown",
        "command": "selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "pagedown",
        "command": "selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "^+down",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "down",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "^+up",
        "command": "selectPrevCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "up",
        "command": "selectPrevCodeAction",
        "when": "codeActionMenuVisible"
    },
    {
        "key": "^+pageup",
        "command": "selectPrevPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "pageup",
        "command": "selectPrevPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "^+up",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "up",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "escape",
        "command": "settings.action.clearSearchResults",
        "when": "inSettingsEditor && inSettingsSearch"
    },
    {
        "key": "escape",
        "command": "settings.action.focusLevelUp",
        "when": "inSettingsEditor && !inSettingsJSONEditor && !inSettingsSearch"
    },
    {
        "key": "enter",
        "command": "settings.action.focusSettingControl",
        "when": "inSettingsEditor && settingRowFocus"
    },
    {
        "key": "down",
        "command": "settings.action.focusSettingsFile",
        "when": "inSettingsSearch && !suggestWidgetVisible"
    },
    {
        "key": "down",
        "command": "settings.action.focusSettingsFromSearch",
        "when": "inSettingsSearch && !suggestWidgetVisible"
    },
    {
        "key": "enter",
        "command": "settings.action.focusSettingsList",
        "when": "inSettingsEditor && settingsTocRowFocus"
    },
    {
        "key": "left",
        "command": "settings.action.focusTOC",
        "when": "inSettingsEditor && settingRowFocus"
    },
    {
        "key": "^+f",
        "command": "settings.action.search",
        "when": "inSettingsEditor"
    },
    {
        "key": "shift+f9",
        "command": "settings.action.showContextMenu",
        "when": "inSettingsEditor"
    },
    {
        "key": "alt+down",
        "command": "showNextParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "down",
        "command": "showNextParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "alt+up",
        "command": "showPrevParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "up",
        "command": "showPrevParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "disabled": true,
        "key": "tab",
        "command": "tab",
        "when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
    },
    {
        "disabled": true,
        "key": "^+; ^+x",
        "command": "testing.cancelRun"
    },
    {
        "disabled": true,
        "key": "^+; ^+shift+a",
        "command": "testing.coverageAll"
    },
    {
        "disabled": true,
        "key": "^+; ^+shift+c",
        "command": "testing.coverageAtCursor",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+; ^+shift+f",
        "command": "testing.coverageCurrentFile",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+; ^+shift+l",
        "command": "testing.coverageLastRun"
    },
    {
        "disabled": true,
        "key": "^+; ^+a",
        "command": "testing.debugAll"
    },
    {
        "disabled": true,
        "key": "^+; ^+c",
        "command": "testing.debugAtCursor",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+; ^+f",
        "command": "testing.debugCurrentFile",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+; ^+e",
        "command": "testing.debugFailTests"
    },
    {
        "disabled": true,
        "key": "^+; ^+l",
        "command": "testing.debugLastRun"
    },
    {
        "key": "alt+enter",
        "command": "testing.editFocusedTest",
        "when": "focusedView == 'workbench.view.testing'"
    },
    {
        "key": "alt+f8",
        "command": "testing.goToNextMessage",
        "when": "editorFocus && testing.isPeekVisible"
    },
    {
        "key": "shift+alt+f8",
        "command": "testing.goToPreviousMessage",
        "when": "editorFocus && testing.isPeekVisible"
    },
    {
        "disabled": true,
        "key": "^+; ^+m",
        "command": "testing.openOutputPeek"
    },
    {
        "disabled": true,
        "key": "^+; e",
        "command": "testing.reRunFailTests"
    },
    {
        "disabled": true,
        "key": "^+; l",
        "command": "testing.reRunLastRun"
    },
    {
        "disabled": true,
        "key": "^+; ^+r",
        "command": "testing.refreshTests",
        "when": "testing.canRefresh"
    },
    {
        "disabled": true,
        "key": "^+; a",
        "command": "testing.runAll"
    },
    {
        "disabled": true,
        "key": "^+; c",
        "command": "testing.runAtCursor",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+; f",
        "command": "testing.runCurrentFile",
        "when": "editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+; ^+o",
        "command": "testing.showMostRecentOutput",
        "when": "testing.hasAnyResults"
    },
    {
        "disabled": true,
        "key": "^+; ^+shift+i",
        "command": "testing.toggleInlineCoverage"
    },
    {
        "disabled": true,
        "key": "^+; ^+i",
        "command": "testing.toggleInlineTestOutput"
    },
    {
        "key": "alt+h",
        "command": "testing.toggleTestingPeekHistory",
        "when": "testing.isPeekVisible"
    },
    {
        "key": "^+/",
        "command": "toggleExplainMode",
        "when": "suggestWidgetVisible"
    },
    {
        "key": "alt+c",
        "command": "toggleFindCaseSensitive",
        "when": "editorFocus"
    },
    {
        "key": "alt+l",
        "command": "toggleFindInSelection",
        "when": "editorFocus"
    },
    {
        "key": "alt+r",
        "command": "toggleFindRegex",
        "when": "editorFocus"
    },
    {
        "key": "alt+w",
        "command": "toggleFindWholeWord",
        "when": "editorFocus"
    },
    {
        "disabled": true,
        "key": "^+k f2",
        "command": "togglePeekWidgetFocus",
        "when": "inReferenceSearchEditor || referenceSearchVisible"
    },
    {
        "key": "alt+p",
        "command": "togglePreserveCase",
        "when": "editorFocus"
    },
    {
        "key": "alt+c",
        "command": "toggleSearchCaseSensitive",
        "when": "searchViewletFocus"
    },
    {
        "key": "alt+c",
        "command": "toggleSearchEditorCaseSensitive",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+l",
        "command": "toggleSearchEditorContextLines",
        "when": "inSearchEditor"
    },
    {
        "key": "alt+r",
        "command": "toggleSearchEditorRegex",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+w",
        "command": "toggleSearchEditorWholeWord",
        "when": "inSearchEditor && searchInputBoxFocus"
    },
    {
        "key": "alt+p",
        "command": "toggleSearchPreserveCase",
        "when": "searchViewletFocus"
    },
    {
        "key": "alt+r",
        "command": "toggleSearchRegex",
        "when": "searchViewletFocus"
    },
    {
        "key": "alt+w",
        "command": "toggleSearchWholeWord",
        "when": "searchViewletFocus"
    },
    {
        "key": "^+i",
        "command": "toggleSuggestionDetails",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "^+space",
        "command": "toggleSuggestionDetails",
        "when": "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "^+alt+space",
        "command": "toggleSuggestionFocus",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "^+z",
        "command": "undo"
    },
    {
        "disabled": true,
        "key": "^+k down",
        "command": "views.moveViewDown",
        "when": "focusedView != ''"
    },
    {
        "disabled": true,
        "key": "^+k left",
        "command": "views.moveViewLeft",
        "when": "focusedView != ''"
    },
    {
        "disabled": true,
        "key": "^+k right",
        "command": "views.moveViewRight",
        "when": "focusedView != ''"
    },
    {
        "disabled": true,
        "key": "^+k up",
        "command": "views.moveViewUp",
        "when": "focusedView != ''"
    },
    {
        "key": "escape",
        "command": "welcome.goBack",
        "when": "inWelcome && activeEditor == 'gettingStartedPage'"
    },
    {
        "key": "^+alt+win+n",
        "command": "welcome.showNewFileEntries"
    },
    {
        "key": "^+down",
        "command": "widgetNavigation.focusNext",
        "when": "inputFocus && navigableContainerFocused || navigableContainerFocused && treestickyScrollFocused || navigableContainerFocused && !listFocus || navigableContainerFocused && listScrollAtBoundary == 'both' || navigableContainerFocused && listScrollAtBoundary == 'bottom'"
    },
    {
        "key": "^+up",
        "command": "widgetNavigation.focusPrevious",
        "when": "inputFocus && navigableContainerFocused || navigableContainerFocused && treestickyScrollFocused || navigableContainerFocused && !listFocus || navigableContainerFocused && listScrollAtBoundary == 'both' || navigableContainerFocused && listScrollAtBoundary == 'top'"
    },
    {
        "disabled": true,
        "key": "^+k ^+alt+c",
        "command": "workbench.action.addComment"
    },
    {
        "key": "^+/",
        "command": "workbench.action.chat.attachContext",
        "when": "inChatInput"
    },
    {
        "key": "^+escape",
        "command": "workbench.action.chat.cancel"
    },
    {
        "key": "^+down",
        "command": "workbench.action.chat.focusInput",
        "when": "inChat && !inChatInput"
    },
    {
        "key": "^+i",
        "command": "workbench.action.chat.holdToVoiceChatInChatView",
        "when": "chatIsEnabled && hasSpeechProvider && !chatSessionRequestInProgress && !editorFocus && !inChatInput && !inlineChatFocused && !notebookEditorFocused"
    },
    {
        "key": "^+enter",
        "command": "workbench.action.chat.insertCodeBlock",
        "when": "accessibleViewInCodeBlock && chatIsEnabled || chatIsEnabled && inChat && !inChatInput"
    },
    {
        "key": "^+l",
        "command": "workbench.action.chat.newChat",
        "when": "chatIsEnabled && inChat"
    },
    {
        "key": "^+alt+pagedown",
        "command": "workbench.action.chat.nextCodeBlock",
        "when": "chatIsEnabled && inChat"
    },
    {
        "key": "^+f9",
        "command": "workbench.action.chat.nextFileTree",
        "when": "chatIsEnabled && inChat"
    },
    {
        "key": "^+alt+i",
        "command": "workbench.action.chat.open"
    },
    {
        "key": "^+alt+pageup",
        "command": "workbench.action.chat.previousCodeBlock",
        "when": "chatIsEnabled && inChat"
    },
    {
        "key": "^+shift+f9",
        "command": "workbench.action.chat.previousFileTree",
        "when": "chatIsEnabled && inChat"
    },
    {
        "key": "delete",
        "command": "workbench.action.chat.remove",
        "when": "inChat && !inChatInput"
    },
    {
        "key": "^+alt+enter",
        "command": "workbench.action.chat.runInTerminal",
        "when": "accessibleViewInCodeBlock && chatIsEnabled || chatIsEnabled && inChat"
    },
    {
        "key": "^+shift+enter",
        "command": "workbench.action.chat.sendToNewChat",
        "when": "chatInputHasText && inChatInput && !chatSessionRequestInProgress"
    },
    {
        "key": "^+i",
        "command": "workbench.action.chat.startVoiceChat",
        "when": "chatIsEnabled && hasSpeechProvider && inChatInput && !chatSessionRequestInProgress && !editorFocus && !notebookEditorFocused && !scopedVoiceChatGettingReady && !speechToTextInProgress && !terminalChatActiveRequest || chatIsEnabled && hasSpeechProvider && inlineChatFocused && !chatSessionRequestInProgress && !editorFocus && !notebookEditorFocused && !scopedVoiceChatGettingReady && !speechToTextInProgress && !terminalChatActiveRequest"
    },
    {
        "key": "escape",
        "command": "workbench.action.chat.stopListening",
        "when": "voiceChatInProgress && scopedVoiceChatInProgress == 'editor' || voiceChatInProgress && scopedVoiceChatInProgress == 'inline' || voiceChatInProgress && scopedVoiceChatInProgress == 'quick' || voiceChatInProgress && scopedVoiceChatInProgress == 'terminal' || voiceChatInProgress && scopedVoiceChatInProgress == 'view'"
    },
    {
        "key": "^+i",
        "command": "workbench.action.chat.stopListeningAndSubmit",
        "when": "inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'editor' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'inline' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'quick' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'terminal' || inChatInput && voiceChatInProgress && scopedVoiceChatInProgress == 'view' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'editor' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'inline' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'quick' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'terminal' || inlineChatFocused && voiceChatInProgress && scopedVoiceChatInProgress == 'view'"
    },
    {
        "key": "escape",
        "command": "workbench.action.chat.stopReadChatItemAloud",
        "when": "scopedChatSynthesisInProgress"
    },
    {
        "key": "enter",
        "command": "workbench.action.chat.submit",
        "when": "chatInputHasText && inChatInput && !chatSessionRequestInProgress"
    },
    {
        "key": "^+enter",
        "command": "workbench.action.chat.submitSecondaryAgent",
        "when": "chatInputHasText && inChatInput && !chatInputHasAgent && !chatSessionRequestInProgress"
    },
    {
        "key": "^+w",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "^+f4",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "disabled": true,
        "key": "^+k ^+w",
        "command": "workbench.action.closeAllEditors"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+w",
        "command": "workbench.action.closeAllGroups"
    },
    {
        "disabled": true,
        "key": "^+k w",
        "command": "workbench.action.closeEditorsInGroup"
    },
    {
        "disabled": true,
        "key": "^+k f",
        "command": "workbench.action.closeFolder",
        "when": "emptyWorkspaceSupport && workbenchState != 'empty'"
    },
    {
        "key": "^+w",
        "command": "workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "^+f4",
        "command": "workbench.action.closeGroup",
        "when": "activeEditorGroupEmpty && multipleEditorGroups"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.closeQuickOpen",
        "when": "inQuickOpen"
    },
    {
        "key": "escape",
        "command": "workbench.action.closeQuickOpen",
        "when": "inQuickOpen"
    },
    {
        "disabled": true,
        "key": "^+k u",
        "command": "workbench.action.closeUnmodifiedEditors"
    },
    {
        "key": "^+shift+w",
        "command": "workbench.action.closeWindow"
    },
    {
        "key": "alt+f4",
        "command": "workbench.action.closeWindow"
    },
    {
        "key": "alt+f5",
        "command": "workbench.action.compareEditor.nextChange",
        "when": "textCompareEditorVisible"
    },
    {
        "disabled": true,
        "key": "^+k shift+o",
        "command": "workbench.action.compareEditor.openSide",
        "when": "inDiffEditor"
    },
    {
        "key": "shift+alt+f5",
        "command": "workbench.action.compareEditor.previousChange",
        "when": "textCompareEditorVisible"
    },
    {
        "disabled": true,
        "key": "^+k o",
        "command": "workbench.action.copyEditorToNewWindow",
        "when": "activeEditor"
    },
    {
        "key": "f5",
        "command": "workbench.action.debug.continue",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "shift+f5",
        "command": "workbench.action.debug.disconnect",
        "when": "focusedSessionIsAttach && inDebugMode"
    },
    {
        "key": "^+pagedown",
        "command": "workbench.action.debug.nextConsole",
        "when": "inDebugRepl"
    },
    {
        "key": "f6",
        "command": "workbench.action.debug.pause",
        "when": "debugState == 'running'"
    },
    {
        "key": "^+pageup",
        "command": "workbench.action.debug.prevConsole",
        "when": "inDebugRepl"
    },
    {
        "key": "^+shift+f5",
        "command": "workbench.action.debug.restart",
        "when": "inDebugMode"
    },
    {
        "key": "^+f5",
        "command": "workbench.action.debug.run",
        "when": "debuggersAvailable && debugState != 'initializing'"
    },
    {
        "key": "f5",
        "command": "workbench.action.debug.start",
        "when": "debuggersAvailable && debugState == 'inactive'"
    },
    {
        "key": "f11",
        "command": "workbench.action.debug.stepInto",
        "when": "debugState != 'inactive'"
    },
    {
        "key": "^+f11",
        "command": "workbench.action.debug.stepIntoTarget",
        "when": "inDebugMode && stepIntoTargetsSupported && debugState == 'stopped'"
    },
    {
        "key": "shift+f11",
        "command": "workbench.action.debug.stepOut",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "f10",
        "command": "workbench.action.debug.stepOver",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "shift+f5",
        "command": "workbench.action.debug.stop",
        "when": "inDebugMode && !focusedSessionIsAttach"
    },
    {
        "disabled": true,
        "key": "^+k m",
        "command": "workbench.action.editor.changeLanguageMode",
        "when": "!notebookEditorFocused"
    },
    {
        "key": "alt+f5",
        "command": "workbench.action.editor.nextChange",
        "when": "editorTextFocus && !textCompareEditorActive"
    },
    {
        "key": "shift+alt+f5",
        "command": "workbench.action.editor.previousChange",
        "when": "editorTextFocus && !textCompareEditorActive"
    },
    {
        "key": "alt+`",
        "command": "workbench.action.editorDictation.start",
        "when": "hasSpeechProvider && !editorReadonly && !speechToTextInProgress"
    },
    {
        "key": "^+alt+v",
        "command": "workbench.action.editorDictation.start",
        "when": "hasSpeechProvider && !editorReadonly && !speechToTextInProgress"
    },
    {
        "key": "escape",
        "command": "workbench.action.editorDictation.stop",
        "when": "editorDictation.inProgress"
    },
    {
        "disabled": true,
        "key": "escape escape",
        "command": "workbench.action.exitZenMode",
        "when": "inZenMode"
    },
    {
        "disabled": true,
        "key": "^+k p",
        "command": "workbench.action.files.copyPathOfActiveFile"
    },
    {
        "key": "^+n",
        "command": "workbench.action.files.newUntitledFile"
    },
    {
        "key": "^+o",
        "command": "workbench.action.files.openFile",
        "when": "true"
    },
    {
        "key": "^+o",
        "command": "workbench.action.files.openFileFolder",
        "when": "isMacNative && openFolderWorkspaceSupport"
    },
    {
        "disabled": true,
        "key": "^+k ^+o",
        "command": "workbench.action.files.openFolder",
        "when": "openFolderWorkspaceSupport"
    },
    {
        "key": "^+o",
        "command": "workbench.action.files.openFolderViaWorkspace",
        "when": "!openFolderWorkspaceSupport && workbenchState == 'workspace'"
    },
    {
        "key": "^+o",
        "command": "workbench.action.files.openLocalFile",
        "when": "remoteFileDialogVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+o",
        "command": "workbench.action.files.openLocalFolder",
        "when": "remoteFileDialogVisible"
    },
    {
        "disabled": true,
        "key": "^+k r",
        "command": "workbench.action.files.revealActiveFileInWindows"
    },
    {
        "key": "^+s",
        "command": "workbench.action.files.save"
    },
    {
        "key": "^+shift+s",
        "command": "workbench.action.files.saveAs"
    },
    {
        "key": "^+shift+s",
        "command": "workbench.action.files.saveLocalFile",
        "when": "remoteFileDialogVisible"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+s",
        "command": "workbench.action.files.saveWithoutFormatting"
    },
    {
        "key": "^+shift+f",
        "command": "workbench.action.findInFiles"
    },
    {
        "disabled": true,
        "key": "^+k ^+up",
        "command": "workbench.action.focusAboveGroup"
    },
    {
        "disabled": true,
        "key": "^+k ^+down",
        "command": "workbench.action.focusBelowGroup"
    },
    {
        "key": "^+8",
        "command": "workbench.action.focusEighthEditorGroup"
    },
    {
        "key": "^+5",
        "command": "workbench.action.focusFifthEditorGroup"
    },
    {
        "key": "^+1",
        "command": "workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "^+4",
        "command": "workbench.action.focusFourthEditorGroup"
    },
    {
        "disabled": true,
        "key": "^+k ^+left",
        "command": "workbench.action.focusLeftGroup"
    },
    {
        "key": "f6",
        "command": "workbench.action.focusNextPart"
    },
    {
        "key": "shift+f6",
        "command": "workbench.action.focusPreviousPart"
    },
    {
        "disabled": true,
        "key": "^+k ^+right",
        "command": "workbench.action.focusRightGroup"
    },
    {
        "key": "^+2",
        "command": "workbench.action.focusSecondEditorGroup"
    },
    {
        "key": "^+7",
        "command": "workbench.action.focusSeventhEditorGroup"
    },
    {
        "key": "^+0",
        "command": "workbench.action.focusSideBar"
    },
    {
        "key": "^+6",
        "command": "workbench.action.focusSixthEditorGroup"
    },
    {
        "key": "^+3",
        "command": "workbench.action.focusThirdEditorGroup"
    },
    {
        "key": "^+g",
        "command": "workbench.action.gotoLine"
    },
    {
        "key": "^+shift+o",
        "command": "workbench.action.gotoSymbol",
        "when": "!accessibilityHelpIsShown && !accessibleViewIsShown"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.hideComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "escape",
        "command": "workbench.action.hideComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "down",
        "command": "workbench.action.interactivePlayground.arrowDown",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "up",
        "command": "workbench.action.interactivePlayground.arrowUp",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "pagedown",
        "command": "workbench.action.interactivePlayground.pageDown",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "key": "pageup",
        "command": "workbench.action.interactivePlayground.pageUp",
        "when": "interactivePlaygroundFocus && !editorTextFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+\\",
        "command": "workbench.action.joinEditorInGroup",
        "when": "sideBySideEditorActive"
    },
    {
        "disabled": true,
        "key": "^+k enter",
        "command": "workbench.action.keepEditor"
    },
    {
        "disabled": true,
        "key": "^+k ^+r",
        "command": "workbench.action.keybindingsReference"
    },
    {
        "key": "^+9",
        "command": "workbench.action.lastEditorInGroup"
    },
    {
        "key": "alt+0",
        "command": "workbench.action.lastEditorInGroup"
    },
    {
        "disabled": true,
        "key": "^+k down",
        "command": "workbench.action.moveActiveEditorGroupDown"
    },
    {
        "disabled": true,
        "key": "^+k left",
        "command": "workbench.action.moveActiveEditorGroupLeft"
    },
    {
        "disabled": true,
        "key": "^+k right",
        "command": "workbench.action.moveActiveEditorGroupRight"
    },
    {
        "disabled": true,
        "key": "^+k up",
        "command": "workbench.action.moveActiveEditorGroupUp"
    },
    {
        "key": "^+shift+pageup",
        "command": "workbench.action.moveEditorLeftInGroup"
    },
    {
        "key": "^+shift+pagedown",
        "command": "workbench.action.moveEditorRightInGroup"
    },
    {
        "key": "shift+alt+1",
        "command": "workbench.action.moveEditorToFirstGroup"
    },
    {
        "key": "shift+alt+9",
        "command": "workbench.action.moveEditorToLastGroup"
    },
    {
        "key": "^+alt+right",
        "command": "workbench.action.moveEditorToNextGroup"
    },
    {
        "key": "^+alt+left",
        "command": "workbench.action.moveEditorToPreviousGroup"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.navigateBack",
        "when": "canNavigateBack"
    },
    {
        "key": "alt+right",
        "command": "workbench.action.navigateForward",
        "when": "canNavigateForward"
    },
    {
        "disabled": true,
        "key": "^+k ^+q",
        "command": "workbench.action.navigateToLastEditLocation"
    },
    {
        "key": "^+shift+n",
        "command": "workbench.action.newWindow"
    },
    {
        "key": "^+pagedown",
        "command": "workbench.action.nextEditor"
    },
    {
        "disabled": true,
        "key": "^+k ^+pagedown",
        "command": "workbench.action.nextEditorInGroup"
    },
    {
        "key": "alt+1",
        "command": "workbench.action.openEditorAtIndex1"
    },
    {
        "key": "alt+2",
        "command": "workbench.action.openEditorAtIndex2"
    },
    {
        "key": "alt+3",
        "command": "workbench.action.openEditorAtIndex3"
    },
    {
        "key": "alt+4",
        "command": "workbench.action.openEditorAtIndex4"
    },
    {
        "key": "alt+5",
        "command": "workbench.action.openEditorAtIndex5"
    },
    {
        "key": "alt+6",
        "command": "workbench.action.openEditorAtIndex6"
    },
    {
        "key": "alt+7",
        "command": "workbench.action.openEditorAtIndex7"
    },
    {
        "key": "alt+8",
        "command": "workbench.action.openEditorAtIndex8"
    },
    {
        "key": "alt+9",
        "command": "workbench.action.openEditorAtIndex9"
    },
    {
        "disabled": true,
        "key": "^+k ^+s",
        "command": "workbench.action.openGlobalKeybindings"
    },
    {
        "key": "^+r",
        "command": "workbench.action.openRecent"
    },
    {
        "key": "^+,",
        "command": "workbench.action.openSettings"
    },
    {
        "key": "^+shift+u",
        "command": "workbench.action.output.toggleOutput",
        "when": "workbench.panel.output.active"
    },
    {
        "disabled": true,
        "key": "^+k shift+enter",
        "command": "workbench.action.pinEditor",
        "when": "!activeEditorIsPinned"
    },
    {
        "key": "^+pageup",
        "command": "workbench.action.previousEditor"
    },
    {
        "disabled": true,
        "key": "^+k ^+pageup",
        "command": "workbench.action.previousEditorInGroup"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.quickInputBack",
        "when": "inQuickOpen"
    },
    {
        "key": "^+e",
        "command": "workbench.action.quickOpen"
    },
    {
        "key": "^+p",
        "command": "workbench.action.quickOpen"
    },
    {
        "key": "^+shift+tab",
        "command": "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
        "when": "!activeEditorGroupEmpty"
    },
    {
        "key": "^+tab",
        "command": "workbench.action.quickOpenNavigateNextInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "^+e",
        "command": "workbench.action.quickOpenNavigateNextInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "^+p",
        "command": "workbench.action.quickOpenNavigateNextInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "^+r",
        "command": "workbench.action.quickOpenNavigateNextInRecentFilesPicker",
        "when": "inQuickOpen && inRecentFilesPicker"
    },
    {
        "key": "^+q",
        "command": "workbench.action.quickOpenNavigateNextInViewPicker",
        "when": "inQuickOpen && inViewsPicker"
    },
    {
        "key": "^+shift+tab",
        "command": "workbench.action.quickOpenNavigatePreviousInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "^+shift+e",
        "command": "workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "^+shift+p",
        "command": "workbench.action.quickOpenNavigatePreviousInFilePicker",
        "when": "inFilesPicker && inQuickOpen"
    },
    {
        "key": "^+shift+r",
        "command": "workbench.action.quickOpenNavigatePreviousInRecentFilesPicker",
        "when": "inQuickOpen && inRecentFilesPicker"
    },
    {
        "key": "^+shift+q",
        "command": "workbench.action.quickOpenNavigatePreviousInViewPicker",
        "when": "inQuickOpen && inViewsPicker"
    },
    {
        "key": "^+tab",
        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
        "when": "!activeEditorGroupEmpty"
    },
    {
        "key": "^+q",
        "command": "workbench.action.quickOpenView"
    },
    {
        "key": "^+shift+i",
        "command": "workbench.action.quickchat.toggle",
        "when": "chatIsEnabled"
    },
    {
        "key": "^+r",
        "command": "workbench.action.reloadWindow",
        "when": "isDevelopment"
    },
    {
        "key": "^+alt+o",
        "command": "workbench.action.remote.showMenu"
    },
    {
        "key": "^+shift+t",
        "command": "workbench.action.reopenClosedEditor"
    },
    {
        "key": "^+shift+h",
        "command": "workbench.action.replaceInFiles"
    },
    {
        "key": "^+shift+j",
        "command": "workbench.action.search.toggleQueryDetails",
        "when": "inSearchEditor || searchViewletFocus"
    },
    {
        "disabled": true,
        "key": "^+k ^+t",
        "command": "workbench.action.selectTheme"
    },
    {
        "disabled": true,
        "key": "^+k ^+p",
        "command": "workbench.action.showAllEditors"
    },
    {
        "key": "^+t",
        "command": "workbench.action.showAllSymbols"
    },
    {
        "key": "f1",
        "command": "workbench.action.showCommands"
    },
    {
        "key": "^+shift+p",
        "command": "workbench.action.showCommands"
    },
    {
        "key": "escape",
        "command": "workbench.action.speech.stopReadAloud",
        "when": "scopedChatSynthesisInProgress && textToSpeechInProgress"
    },
    {
        "key": "^+\\",
        "command": "workbench.action.splitEditor"
    },
    {
        "disabled": true,
        "key": "^+k ^+\\",
        "command": "workbench.action.splitEditorDown"
    },
    {
        "disabled": true,
        "key": "^+k ^+shift+\\",
        "command": "workbench.action.splitEditorInGroup",
        "when": "activeEditorCanSplitInGroup"
    },
    {
        "disabled": true,
        "key": "^+k ^+\\",
        "command": "workbench.action.splitEditorLeft"
    },
    {
        "disabled": true,
        "key": "^+k ^+\\",
        "command": "workbench.action.splitEditorOrthogonal"
    },
    {
        "disabled": true,
        "key": "^+k ^+\\",
        "command": "workbench.action.splitEditorRight"
    },
    {
        "disabled": true,
        "key": "^+k ^+\\",
        "command": "workbench.action.splitEditorUp"
    },
    {
        "key": "^+shift+b",
        "command": "workbench.action.tasks.build",
        "when": "taskCommandsRegistered"
    },
    {
        "key": "tab",
        "command": "workbench.action.terminal.acceptSelectedSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "enter",
        "command": "workbench.action.terminal.acceptSelectedSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "alt+down",
        "command": "workbench.action.terminal.accessibleBufferGoToNextCommand",
        "when": "accessibleViewIsShown && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "alt+up",
        "command": "workbench.action.terminal.accessibleBufferGoToPreviousCommand",
        "when": "accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.terminal.chat.close",
        "when": "terminalChatFocus && terminalChatVisible"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.chat.close",
        "when": "terminalChatFocus && terminalChatVisible"
    },
    {
        "key": "^+i",
        "command": "workbench.action.terminal.chat.focusInput",
        "when": "terminalChatFocus && !inlineChatFocused"
    },
    {
        "key": "^+up",
        "command": "workbench.action.terminal.chat.focusInput",
        "when": "terminalChatFocus && !inlineChatFocused"
    },
    {
        "key": "^+down",
        "command": "workbench.action.terminal.chat.focusResponse",
        "when": "terminalChatFocus"
    },
    {
        "key": "^+alt+enter",
        "command": "workbench.action.terminal.chat.insertCommand",
        "when": "terminalChatAgentRegistered && terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || terminalChatAgentRegistered && terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks"
    },
    {
        "key": "alt+enter",
        "command": "workbench.action.terminal.chat.insertCommand",
        "when": "terminalChatAgentRegistered && terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || terminalChatAgentRegistered && terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks"
    },
    {
        "key": "^+alt+enter",
        "command": "workbench.action.terminal.chat.insertFirstCommand",
        "when": "terminalChatAgentRegistered && terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || terminalChatAgentRegistered && terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest"
    },
    {
        "key": "alt+enter",
        "command": "workbench.action.terminal.chat.insertFirstCommand",
        "when": "terminalChatAgentRegistered && terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || terminalChatAgentRegistered && terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest"
    },
    {
        "key": "enter",
        "command": "workbench.action.terminal.chat.makeRequest",
        "when": "inlineChatFocused && terminalChatAgentRegistered && terminalHasBeenCreated && !inlineChatEmpty && !terminalChatActiveRequest || inlineChatFocused && terminalChatAgentRegistered && terminalProcessSupported && !inlineChatEmpty && !terminalChatActiveRequest"
    },
    {
        "key": "^+enter",
        "command": "workbench.action.terminal.chat.runCommand",
        "when": "terminalChatAgentRegistered && terminalChatResponseContainsCodeBlock && terminalHasBeenCreated && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks || terminalChatAgentRegistered && terminalChatResponseContainsCodeBlock && terminalProcessSupported && !terminalChatActiveRequest && !terminalChatResponseContainsMultipleCodeBlocks"
    },
    {
        "key": "^+enter",
        "command": "workbench.action.terminal.chat.runFirstCommand",
        "when": "terminalChatAgentRegistered && terminalChatResponseContainsMultipleCodeBlocks && terminalHasBeenCreated && !terminalChatActiveRequest || terminalChatAgentRegistered && terminalChatResponseContainsMultipleCodeBlocks && terminalProcessSupported && !terminalChatActiveRequest"
    },
    {
        "key": "^+i",
        "command": "workbench.action.terminal.chat.start",
        "when": "inlineChatHasProvider && terminalFocusInAny && terminalHasBeenCreated || inlineChatHasProvider && terminalFocusInAny && terminalProcessSupported"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.clearSelection",
        "when": "terminalFocusInAny && terminalHasBeenCreated && terminalTextSelected && !terminalFindVisible || terminalFocusInAny && terminalProcessSupported && terminalTextSelected && !terminalFindVisible"
    },
    {
        "key": "^+c",
        "command": "workbench.action.terminal.copyAndClearSelection",
        "when": "terminalTextSelectedInFocused || terminalFocus && terminalHasBeenCreated && terminalTextSelected || terminalFocus && terminalProcessSupported && terminalTextSelected || terminalFocus && terminalTextSelected && terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected && terminalTextSelectedInFocused || terminalProcessSupported && terminalTextSelected && terminalTextSelectedInFocused"
    },
    {
        "key": "^+shift+c",
        "command": "workbench.action.terminal.copySelection",
        "when": "terminalTextSelectedInFocused || terminalFocus && terminalHasBeenCreated && terminalTextSelected || terminalFocus && terminalProcessSupported && terminalTextSelected || terminalFocus && terminalTextSelected && terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected && terminalTextSelectedInFocused || terminalProcessSupported && terminalTextSelected && terminalTextSelectedInFocused"
    },
    {
        "key": "f3",
        "command": "workbench.action.terminal.findNext",
        "when": "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocusInAny && terminalHasBeenCreated || terminalFocusInAny && terminalProcessSupported"
    },
    {
        "key": "shift+enter",
        "command": "workbench.action.terminal.findNext",
        "when": "terminalFindInputFocused && terminalHasBeenCreated || terminalFindInputFocused && terminalProcessSupported"
    },
    {
        "key": "shift+f3",
        "command": "workbench.action.terminal.findPrevious",
        "when": "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocusInAny && terminalHasBeenCreated || terminalFocusInAny && terminalProcessSupported"
    },
    {
        "key": "enter",
        "command": "workbench.action.terminal.findPrevious",
        "when": "terminalFindInputFocused && terminalHasBeenCreated || terminalFindInputFocused && terminalProcessSupported"
    },
    {
        "key": "^+down",
        "command": "workbench.action.terminal.focus",
        "when": "accessibilityModeEnabled && accessibleViewOnLastLine && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibilityModeEnabled && accessibleViewOnLastLine && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "^+up",
        "command": "workbench.action.terminal.focusAccessibleBuffer",
        "when": "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+f2",
        "command": "workbench.action.terminal.focusAccessibleBuffer",
        "when": "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+f",
        "command": "workbench.action.terminal.focusFind",
        "when": "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocusInAny && terminalHasBeenCreated || terminalFocusInAny && terminalProcessSupported"
    },
    {
        "disabled": true,
        "key": "^+k ^+i",
        "command": "workbench.action.terminal.focusHover",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalIsOpen || terminalFocus && terminalProcessSupported || terminalHasBeenCreated && terminalTabsFocus || terminalIsOpen && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        "key": "^+pagedown",
        "command": "workbench.action.terminal.focusNext",
        "when": "terminalFocus && terminalHasBeenCreated && !terminalEditorFocus || terminalFocus && terminalProcessSupported && !terminalEditorFocus"
    },
    {
        "key": "alt+down",
        "command": "workbench.action.terminal.focusNextPane",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+right",
        "command": "workbench.action.terminal.focusNextPane",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+pageup",
        "command": "workbench.action.terminal.focusPrevious",
        "when": "terminalFocus && terminalHasBeenCreated && !terminalEditorFocus || terminalFocus && terminalProcessSupported && !terminalEditorFocus"
    },
    {
        "key": "alt+up",
        "command": "workbench.action.terminal.focusPreviousPane",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "alt+left",
        "command": "workbench.action.terminal.focusPreviousPane",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+shift+\\",
        "command": "workbench.action.terminal.focusTabs",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported || terminalHasBeenCreated && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        "key": "^+g",
        "command": "workbench.action.terminal.goToRecentDirectory",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "shift+escape",
        "command": "workbench.action.terminal.hideFind",
        "when": "terminalFindVisible && terminalFocusInAny && terminalHasBeenCreated || terminalFindVisible && terminalFocusInAny && terminalProcessSupported"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.hideFind",
        "when": "terminalFindVisible && terminalFocusInAny && terminalHasBeenCreated || terminalFindVisible && terminalFocusInAny && terminalProcessSupported"
    },
    {
        "key": "escape",
        "command": "workbench.action.terminal.hideSuggestWidget",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "delete",
        "command": "workbench.action.terminal.killActiveTab",
        "when": "terminalHasBeenCreated && terminalTabsFocus || terminalIsOpen && terminalTabsFocus || terminalProcessSupported && terminalTabsFocus"
    },
    {
        "key": "^+w",
        "command": "workbench.action.terminal.killEditor",
        "when": "terminalEditorFocus && terminalFocus && terminalHasBeenCreated || terminalEditorFocus && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+f4",
        "command": "workbench.action.terminal.killEditor",
        "when": "terminalEditorFocus && terminalFocus && terminalHasBeenCreated || terminalEditorFocus && terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+shift+`",
        "command": "workbench.action.terminal.new",
        "when": "terminalProcessSupported || terminalWebExtensionContributedProfile"
    },
    {
        "key": "^+shift+o",
        "command": "workbench.action.terminal.openDetectedLink",
        "when": "terminalFocus && terminalHasBeenCreated"
    },
    {
        "key": "^+shift+g",
        "command": "workbench.action.terminal.openDetectedLink",
        "when": "accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "^+shift+c",
        "command": "workbench.action.terminal.openNativeConsole",
        "when": "!terminalFocus"
    },
    {
        "key": "^+shift+v",
        "command": "workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+v",
        "command": "workbench.action.terminal.paste",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "f2",
        "command": "workbench.action.terminal.renameActiveTab",
        "when": "terminalHasBeenCreated && terminalTabsFocus && terminalTabsSingularSelection || terminalProcessSupported && terminalTabsFocus && terminalTabsSingularSelection"
    },
    {
        "key": "^+r",
        "command": "workbench.action.terminal.runRecentCommand",
        "when": "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported || accessibilityModeEnabled && accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibilityModeEnabled && accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "^+alt+r",
        "command": "workbench.action.terminal.runRecentCommand",
        "when": "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        "key": "^+alt+pagedown",
        "command": "workbench.action.terminal.scrollDown",
        "when": "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        "key": "shift+pagedown",
        "command": "workbench.action.terminal.scrollDownPage",
        "when": "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        "key": "^+end",
        "command": "workbench.action.terminal.scrollToBottom",
        "when": "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        "key": "^+end",
        "command": "workbench.action.terminal.scrollToBottomAccessibleView",
        "when": "accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "^+down",
        "command": "workbench.action.terminal.scrollToNextCommand",
        "when": "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        "key": "^+up",
        "command": "workbench.action.terminal.scrollToPreviousCommand",
        "when": "terminalFocus && terminalHasBeenCreated && !accessibilityModeEnabled || terminalFocus && terminalProcessSupported && !accessibilityModeEnabled"
    },
    {
        "key": "^+home",
        "command": "workbench.action.terminal.scrollToTop",
        "when": "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        "key": "^+home",
        "command": "workbench.action.terminal.scrollToTopAccessibleView",
        "when": "accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'"
    },
    {
        "key": "^+alt+pageup",
        "command": "workbench.action.terminal.scrollUp",
        "when": "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        "key": "shift+pageup",
        "command": "workbench.action.terminal.scrollUpPage",
        "when": "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive"
    },
    {
        "key": "^+shift+f",
        "command": "workbench.action.terminal.searchWorkspace",
        "when": "terminalFocus && terminalProcessSupported && terminalTextSelected"
    },
    {
        "key": "pagedown",
        "command": "workbench.action.terminal.selectNextPageSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "down",
        "command": "workbench.action.terminal.selectNextSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "pageup",
        "command": "workbench.action.terminal.selectPrevPageSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "up",
        "command": "workbench.action.terminal.selectPrevSuggestion",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen && terminalSuggestWidgetVisible || terminalFocus && terminalIsOpen && terminalProcessSupported && terminalSuggestWidgetVisible"
    },
    {
        "key": "^+shift+down",
        "command": "workbench.action.terminal.selectToNextCommand",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+shift+up",
        "command": "workbench.action.terminal.selectToPreviousCommand",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "^+v",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": {
            "text": "\u0016"
        }
    },
    {
        "key": "^+space",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": {
            "text": "\u001b[24~a"
        }
    },
    {
        "key": "alt+space",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": {
            "text": "\u001b[24~b"
        }
    },
    {
        "key": "shift+enter",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": {
            "text": "\u001b[24~c"
        }
    },
    {
        "key": "^+space",
        "command": "workbench.action.terminal.sendSequence",
        "when": "config.terminal.integrated.shellIntegration.suggestEnabled && terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh' || config.terminal.integrated.suggest.enabled && terminalFocus && terminalShellIntegrationEnabled && !accessibilityModeEnabled && terminalShellType == 'pwsh'",
        "args": {
            "text": "\u001b[24~e"
        }
    },
    {
        "key": "^+alt+r",
        "command": "workbench.action.terminal.sendSequence",
        "when": "accessibilityModeEnabled && terminalFocus",
        "args": {
            "text": "\u0012"
        }
    },
    {
        "key": "^+alt+g",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": {
            "text": "\u0007"
        }
    },
    {
        "key": "^+backspace",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": {
            "text": "\u0017"
        }
    },
    {
        "key": "^+backspace",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus && terminalShellType == 'cmd'",
        "args": {
            "text": "\b"
        }
    },
    {
        "key": "^+delete",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": {
            "text": "\u001bd"
        }
    },
    {
        "key": "^+shift+2",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": {
            "text": "\u0000"
        }
    },
    {
        "key": "^+shift+6",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": {
            "text": "\u001e"
        }
    },
    {
        "key": "^+/",
        "command": "workbench.action.terminal.sendSequence",
        "when": "terminalFocus",
        "args": {
            "text": "\u001f"
        }
    },
    {
        "key": "^+.",
        "command": "workbench.action.terminal.showQuickFixes",
        "when": "terminalFocus"
    },
    {
        "key": "alt+z",
        "command": "workbench.action.terminal.sizeToContentWidth",
        "when": "terminalFocus && terminalHasBeenCreated && terminalIsOpen || terminalFocus && terminalIsOpen && terminalProcessSupported"
    },
    {
        "key": "^+shift+5",
        "command": "workbench.action.terminal.split",
        "when": "terminalFocus && terminalProcessSupported || terminalFocus && terminalWebExtensionContributedProfile"
    },
    {
        "key": "^+shift+5",
        "command": "workbench.action.terminal.splitActiveTab",
        "when": "terminalProcessSupported && terminalTabsFocus"
    },
    {
        "key": "alt+c",
        "command": "workbench.action.terminal.toggleFindCaseSensitive",
        "when": "terminalFindVisible && terminalHasBeenCreated || terminalFindVisible && terminalProcessSupported"
    },
    {
        "key": "alt+r",
        "command": "workbench.action.terminal.toggleFindRegex",
        "when": "terminalFindVisible && terminalHasBeenCreated || terminalFindVisible && terminalProcessSupported"
    },
    {
        "key": "alt+w",
        "command": "workbench.action.terminal.toggleFindWholeWord",
        "when": "terminalFindVisible && terminalHasBeenCreated || terminalFindVisible && terminalProcessSupported"
    },
    {
        "key": "^+`",
        "command": "workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    },
    {
        "key": "^+alt+b",
        "command": "workbench.action.toggleAuxiliaryBar"
    },
    {
        "key": "^+shift+i",
        "command": "workbench.action.toggleDevTools",
        "when": "isDevelopment"
    },
    {
        "key": "shift+alt+0",
        "command": "workbench.action.toggleEditorGroupLayout"
    },
    {
        "key": "f11",
        "command": "workbench.action.toggleFullScreen",
        "when": "!isIOS"
    },
    {
        "disabled": true,
        "key": "^+k ^+m",
        "command": "workbench.action.toggleMaximizeEditorGroup",
        "when": "editorPartMaximizedEditorGroup || editorPartMultipleEditorGroups"
    },
    {
        "disabled": true,
        "key": "^+j",
        "command": "workbench.action.togglePanel"
    },
    {
        "disabled": true,
        "key": "^+b",
        "command": "workbench.action.toggleSidebarVisibility"
    },
    {
        "disabled": true,
        "key": "^+k z",
        "command": "workbench.action.toggleZenMode",
        "when": "!isAuxiliaryWindowFocusedContext"
    },
    {
        "disabled": true,
        "key": "^+k shift+enter",
        "command": "workbench.action.unpinEditor",
        "when": "activeEditorIsPinned"
    },
    {
        "key": "^+numpad_add",
        "command": "workbench.action.zoomIn"
    },
    {
        "key": "^+shift+=",
        "command": "workbench.action.zoomIn"
    },
    {
        "key": "^+=",
        "command": "workbench.action.zoomIn"
    },
    {
        "key": "^+numpad_subtract",
        "command": "workbench.action.zoomOut"
    },
    {
        "key": "^+shift+-",
        "command": "workbench.action.zoomOut"
    },
    {
        "key": "^+-",
        "command": "workbench.action.zoomOut"
    },
    {
        "key": "^+numpad0",
        "command": "workbench.action.zoomReset"
    },
    {
        "key": "^+shift+m",
        "command": "workbench.actions.view.problems",
        "when": "workbench.panel.markers.view.active"
    },
    {
        "key": "escape",
        "command": "workbench.banner.focusBanner",
        "when": "bannerFocused"
    },
    {
        "key": "down",
        "command": "workbench.banner.focusNextAction",
        "when": "bannerFocused"
    },
    {
        "key": "right",
        "command": "workbench.banner.focusNextAction",
        "when": "bannerFocused"
    },
    {
        "key": "up",
        "command": "workbench.banner.focusPreviousAction",
        "when": "bannerFocused"
    },
    {
        "key": "left",
        "command": "workbench.banner.focusPreviousAction",
        "when": "bannerFocused"
    },
    {
        "key": "^+shift+y",
        "command": "workbench.debug.action.toggleRepl",
        "when": "workbench.panel.repl.view.active"
    },
    {
        "disabled": true,
        "key": "^+k c",
        "command": "workbench.files.action.compareWithClipboard"
    },
    {
        "disabled": true,
        "key": "^+k d",
        "command": "workbench.files.action.compareWithSaved"
    },
    {
        "disabled": true,
        "key": "^+k e",
        "command": "workbench.files.action.focusOpenEditorsView",
        "when": "workbench.explorer.openEditorsView.active"
    },
    {
        "key": "escape",
        "command": "workbench.statusBar.clearFocus",
        "when": "statusBarFocused"
    },
    {
        "key": "home",
        "command": "workbench.statusBar.focusFirst",
        "when": "statusBarFocused"
    },
    {
        "key": "end",
        "command": "workbench.statusBar.focusLast",
        "when": "statusBarFocused"
    },
    {
        "key": "down",
        "command": "workbench.statusBar.focusNext",
        "when": "statusBarFocused"
    },
    {
        "key": "right",
        "command": "workbench.statusBar.focusNext",
        "when": "statusBarFocused"
    },
    {
        "key": "up",
        "command": "workbench.statusBar.focusPrevious",
        "when": "statusBarFocused"
    },
    {
        "key": "left",
        "command": "workbench.statusBar.focusPrevious",
        "when": "statusBarFocused"
    },
    {
        "key": "^+shift+d",
        "command": "workbench.view.debug",
        "when": "viewContainer.workbench.view.debug.enabled"
    },
    {
        "disabled": true,
        "key": "^+shift+e",
        "command": "workbench.view.explorer",
        "when": "viewContainer.workbench.view.explorer.enabled"
    },
    {
        "key": "^+shift+x",
        "command": "workbench.view.extensions",
        "when": "viewContainer.workbench.view.extensions.enabled"
    },
    {
        "disabled": true,
        "key": "^+shift+g",
        "command": "workbench.view.scm",
        "when": "workbench.scm.active"
    },
    {
        "key": "^+shift+f",
        "command": "workbench.view.search",
        "when": "workbench.view.search.active && neverMatch =~ /doesNotMatch/"
    }
] as Keybind[]
