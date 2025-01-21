import type { StatusSettings } from '../Config/StatusSettings';
import { i18n } from '../i18n/i18n';
import type { StatusRegistry } from './StatusRegistry';
import { tabulateStatusSettings } from './StatusSettingsReport';

export function createStatusRegistryReport(
    statusSettings: StatusSettings,
    statusRegistry: StatusRegistry,
    buttonName: string,
    versionString: string,
) {
    // Ideas for further improvement
    // - Actually make it an informative report, that shows any issues in settings with duplicate symbols.
    // - Show any 'next status symbols' that are not known to the plugin.
    // - Show any status transitions that won't work with recurring tasks currently, as DONE not followed by TODO.

    const detailed = true;
    const settingsTable = tabulateStatusSettings(statusSettings);
    const mermaidText = statusRegistry.mermaidDiagram(detailed);
    return `# ${buttonName}

## ${i18n.t('reports.statusRegistry.about.title')}

${i18n.t('reports.statusRegistry.about.createdBy', { version: versionString })}

${i18n.t('reports.statusRegistry.about.updateReport.line1')}

- ${i18n.t('reports.statusRegistry.about.updateReport.line2')}
- ${i18n.t('reports.statusRegistry.about.updateReport.line3')}

${i18n.t('reports.statusRegistry.about.deleteFileAnyTime')}

## Status Settings

<!--
Switch to Live Preview or Reading Mode to see the table.
If there are any Markdown formatting characters in status names, such as '*' or '_',
Obsidian may only render the table correctly in Reading Mode.
-->

These are the status values in the Core and Custom statuses sections.

${settingsTable}
## Loaded Settings

<!-- Switch to Live Preview or Reading Mode to see the diagram. -->

These are the settings actually used by Tasks.
${mermaidText}`;
}
