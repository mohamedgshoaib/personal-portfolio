'use client';

import { Menu } from '@base-ui/react/menu';
import './base-ui-patterns.css';

export function MenuExample() {
  return (
    <Menu.Root>
      <Menu.Trigger className="button">Actions</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner sideOffset={8}>
          <Menu.Popup className="popup">
            <Menu.Item className="item" onClick={() => console.log('rename')}>Rename</Menu.Item>
            <Menu.Item className="item" onClick={() => console.log('duplicate')}>Duplicate</Menu.Item>
            <Menu.Separator className="separator" />
            <Menu.Item className="item danger-text" onClick={() => console.log('delete')}>Delete</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
