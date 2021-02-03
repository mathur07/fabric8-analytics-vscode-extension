import { getTelemetryService, TelemetryEvent, TelemetryService } from "@redhat-developer/vscode-redhat-telemetry";

enum ActionType {
  Identify = 'identify',
  Track = 'track',
  Page = 'page',
  Group = 'group',
}

export async function record(eventName: string, properties?: object) {
  const telemetryService: TelemetryService = await getTelemetryService("redhat.fabric8-analytics")
  let event:TelemetryEvent={
    type: ActionType.Track,
    name: eventName,
    properties: properties
  }
  await telemetryService.send(event);
}

export async function startUp() {
  const telemetryService: TelemetryService = await getTelemetryService("redhat.fabric8-analytics")
  await telemetryService.sendStartupEvent();
}

export async function shutDown() {
  const telemetryService: TelemetryService = await getTelemetryService("redhat.fabric8-analytics")
  await telemetryService.sendShutdownEvent();
}
