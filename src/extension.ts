import * as vscode from "vscode";

import { BpmnEditor } from "./bpmn-editor";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(BpmnEditor.register(context));
}
