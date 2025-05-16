import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MapPin, Clock, Wrench } from "lucide-react";

function Component() {
  return (
    <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2 h-full">
      <TabsList className="flex flex-col gap-1 h-fit">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-1" className="aspect-square w-10 p-0 flex items-center justify-center">
                  <MapPin size={16} strokeWidth={2} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent side="right" className="px-2 py-1 text-xs">
              Deutschlandweit
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-2" className="aspect-square w-10 p-0 flex items-center justify-center">
                  <Clock size={16} strokeWidth={2} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent side="right" className="px-2 py-1 text-xs">
              24/7 Verfügbarkeit
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <TabsTrigger value="tab-3" className="aspect-square w-10 p-0 flex items-center justify-center">
                  <Wrench size={16} strokeWidth={2} aria-hidden="true" />
                </TabsTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent side="right" className="px-2 py-1 text-xs">
              Mobile Werkstatt
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TabsList>
      <div className="grow rounded-lg border border-border text-start">
        <TabsContent value="tab-1">
          <div className="flex items-center px-6 py-4">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">Deutschlandweit</h4>
              <p className="text-gray-600">
                Wir sind in ganz Deutschland für Sie im Einsatz. Unser Servicenetz erstreckt sich über das gesamte Bundesgebiet.
              </p>
            </div>
            <div className="ml-6 w-32">
              <img
                src="/images/Deutschlandkarte.svg"
                alt="Deutschlandkarte"
                className="w-full h-auto"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab-2">
          <div className="px-6 py-4">
            <h4 className="font-semibold text-lg mb-2">24/7 Verfügbarkeit</h4>
            <p className="text-gray-600">
              Rund um die Uhr für Notfälle erreichbar. Unser Team steht Ihnen jederzeit zur Verfügung.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab-3">
          <div className="px-6 py-4">
            <h4 className="font-semibold text-lg mb-2">Mobile Werkstatt</h4>
            <p className="text-gray-600">
              Vollausgestattete mobile Werkstätten für Vor-Ort-Service. Wir bringen alle notwendigen Werkzeuge und Ersatzteile mit.
            </p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}

export { Component };