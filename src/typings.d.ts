declare module 'vscode' {
  export interface OpenDialogOptions {
    canSelectFiles?: boolean;
    canSelectFolders?: boolean;
    canSelectMany?: boolean;
    defaultResource?: Uri;
    openLabel?: string;
    openFiles?: boolean;
    openFolders?: boolean;
    openMany?: boolean;
  }

  export namespace window {
      export function showOpenDialog(options: OpenDialogOptions): Thenable<Uri[]>;
  }
}