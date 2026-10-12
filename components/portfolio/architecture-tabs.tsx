"use client";

import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ArchitectureTabs({
  label,
  footer,
  tabs,
}: {
  label: string;
  footer: string;
  tabs: { value: string; label: string; content: ReactNode }[];
}) {
  return (
    <Tabs defaultValue={tabs[0].value} className="drawing" aria-label={label}>
      <TabsList className="diagram-tabs" aria-label="Vistas" activateOnFocus>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="diagram-panel"
        >
          {tab.content}
        </TabsContent>
      ))}
      <div className="drawing-footer">
        <span>{footer}</span>
      </div>
    </Tabs>
  );
}
