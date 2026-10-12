"use client";

import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ArchitectureTabs({
  classes,
  sequence,
  deployment,
}: {
  classes: ReactNode;
  sequence: ReactNode;
  deployment: ReactNode;
}) {
  return (
    <Tabs
      defaultValue="clases"
      className="drawing"
      aria-label="Tres miradas a la arquitectura de AC Maintainer"
    >
      <TabsList
        className="diagram-tabs"
        aria-label="Tipo de diagrama UML"
        activateOnFocus
      >
        <TabsTrigger value="clases">Clases</TabsTrigger>
        <TabsTrigger value="secuencia">Secuencia</TabsTrigger>
        <TabsTrigger value="despliegue">Despliegue</TabsTrigger>
      </TabsList>
      <TabsContent value="clases" className="diagram-panel">
        {classes}
      </TabsContent>
      <TabsContent value="secuencia" className="diagram-panel">
        {sequence}
      </TabsContent>
      <TabsContent value="despliegue" className="diagram-panel">
        {deployment}
      </TabsContent>
      <div className="drawing-footer">
        <span>AC Maintainer</span>
        <span>UML · vista simplificada</span>
      </div>
    </Tabs>
  );
}
