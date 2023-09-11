'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab2')

  return (
    <div>
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
          <TabItem
            value="tab1"
            title="My details"
            isSelected={currentTab === 'tab1'}
          />
          <TabItem
            value="tab2"
            title="Profile"
            isSelected={currentTab === 'tab2'}
          />
          <TabItem
            value="tab3"
            title="Password"
            isSelected={currentTab === 'tab3'}
          />
          <TabItem
            value="tab4"
            title="Team"
            isSelected={currentTab === 'tab4'}
          />
          <TabItem
            value="tab5"
            title="Plan"
            isSelected={currentTab === 'tab5'}
          />
          <TabItem
            value="tab6"
            title="Billing"
            isSelected={currentTab === 'tab6'}
          />
          <TabItem
            value="tab7"
            title="Email"
            isSelected={currentTab === 'tab7'}
          />
          <TabItem
            value="tab8"
            title="Notifications"
            isSelected={currentTab === 'tab8'}
          />
          <TabItem
            value="tab9"
            title="Integrations"
            isSelected={currentTab === 'tab9'}
          />
          <TabItem
            value="tab0"
            title="API"
            isSelected={currentTab === 'tab0'}
          />
          {/* Valor único para a guia API */}
        </Tabs.List>
      </Tabs.Root>
    </div>
  )
}
