# Screenshot Slots

Use product screenshots only when they are safe to publish. Remove private customer names, emails, phone numbers, revenue, internal IDs, access tokens, API keys, and operationally sensitive data.

## Expected Files

Each project directory supports these files:

```text
public/projects/<project-slug>/cover.svg
public/projects/<project-slug>/dashboard.svg
public/projects/<project-slug>/feature.svg
public/projects/<project-slug>/architecture.svg
public/projects/<project-slug>/mobile.svg
```

You can replace `.svg` placeholders with `.png`, `.jpg`, or `.webp`, but update `src/content/projects.ts` if the cover filename changes.

## Project Directories

```text
public/projects/crm-by-fatek/
public/projects/revello/
public/projects/imob-agents/
public/projects/strong-body-rewards/
```

## Recommended Dimensions

- Cover: `1600 x 1000`
- Dashboard: `1440 x 900`
- Feature: `1440 x 900`
- Mobile: `800 x 1600`
- Open Graph: `1200 x 630`

## Sanitization Checklist

- Replace real people and company names with neutral sample data.
- Hide phone numbers, emails, addresses and document numbers.
- Remove revenue, conversion, retention and user count data unless explicitly approved.
- Remove API keys, webhook URLs, internal IDs and error traces.
- Avoid exposing admin-only workflows that should remain private.
- Re-capture screenshots after sanitization instead of blurring large areas when possible.
