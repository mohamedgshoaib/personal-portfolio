'use client';

import * as React from 'react';
import { Dialog } from '@base-ui/react/dialog';
import './base-ui-patterns.css';

export function DialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="button">Open dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="dialog-backdrop" />
        <Dialog.Popup className="dialog-popup">
          <Dialog.Title className="dialog-title">Edit profile</Dialog.Title>
          <Dialog.Description className="dialog-description">
            Update your public profile details.
          </Dialog.Description>

          <div className="stack">
            <label className="field-label" htmlFor="display-name">Display name</label>
            <input id="display-name" className="input" defaultValue="Jimmy" />
          </div>

          <div className="row end">
            <Dialog.Close className="button subtle">Cancel</Dialog.Close>
            <Dialog.Close className="button">Save</Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
