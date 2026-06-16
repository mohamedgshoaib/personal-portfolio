'use client';

import { AlertDialog } from '@base-ui/react/alert-dialog';
import './base-ui-patterns.css';

export function AlertDialogExample({ onDelete }: { onDelete: () => void }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="button danger">Delete project</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="dialog-backdrop" />
        <AlertDialog.Popup className="dialog-popup">
          <AlertDialog.Title className="dialog-title">Delete project?</AlertDialog.Title>
          <AlertDialog.Description className="dialog-description">
            This action cannot be undone.
          </AlertDialog.Description>
          <div className="row end">
            <AlertDialog.Close className="button subtle">Cancel</AlertDialog.Close>
            <AlertDialog.Close className="button danger" onClick={onDelete}>
              Delete
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
