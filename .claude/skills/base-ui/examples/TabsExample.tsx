'use client';

import { Tabs } from '@base-ui/react/tabs';
import './base-ui-patterns.css';

export function TabsExample() {
  return (
    <Tabs.Root defaultValue="overview" className="tabs">
      <Tabs.List className="tab-list" aria-label="Project sections">
        <Tabs.Tab className="tab" value="overview">Overview</Tabs.Tab>
        <Tabs.Tab className="tab" value="activity">Activity</Tabs.Tab>
        <Tabs.Tab className="tab" value="settings">Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel className="tab-panel" value="overview">Project summary.</Tabs.Panel>
      <Tabs.Panel className="tab-panel" value="activity">Recent activity.</Tabs.Panel>
      <Tabs.Panel className="tab-panel" value="settings">Project settings.</Tabs.Panel>
    </Tabs.Root>
  );
}
