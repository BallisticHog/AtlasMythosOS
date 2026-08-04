# Data Model

This is the starting model. It should guide implementation, not freeze it.

## Core Entities

### User

Represents a person using the app.

Fields:

- id
- displayName
- email
- createdAt

### Campaign

Represents one campaign world.

Fields:

- id
- name
- description
- systemLabel
- createdByUserId
- createdAt
- updatedAt

### CampaignMember

Connects users to campaigns.

Fields:

- id
- campaignId
- userId
- role: owner, dm, player, viewer
- createdAt

### WorldObject

Represents a campaign thing.

Types:

- region
- settlement
- location
- npc
- faction
- event
- quest
- item
- artifact
- rumor
- note

Fields:

- id
- campaignId
- type
- name
- summary
- description
- visibility: public, private, hidden
- status: draft, canon, suggestion, archived
- createdByUserId
- sourceSuggestionId
- createdAt
- updatedAt

### WorldRelationship

Connects world objects.

Examples:

- NPC belongs to faction
- faction controls settlement
- event happened in region
- quest involves artifact

Fields:

- id
- campaignId
- fromObjectId
- toObjectId
- relationshipType
- description
- visibility
- status
- createdAt

### Map

Represents a visual map surface.

Fields:

- id
- campaignId
- name
- mapType: region, settlement, stronghold, dungeon, custom
- baseAssetId
- createdAt
- updatedAt

### MapElement

Represents a shape, pin, boundary, label, or generated decoration on a map.

Fields:

- id
- campaignId
- mapId
- linkedWorldObjectId
- elementType: pin, regionBoundary, path, label, decoration
- geometry
- style
- visibility
- status
- createdAt
- updatedAt

Notes:

- geometry should be structured JSON.
- decorative generated elements can exist without being canon.

### Session

Represents one play session.

Fields:

- id
- campaignId
- title
- sessionNumber
- playedAt
- rawNotes
- summary
- createdAt
- updatedAt

### AISuggestion

Represents an AI proposal awaiting human review.

Fields:

- id
- campaignId
- sourceType: session, map, object, asset, manualPrompt
- sourceId
- suggestionType
- title
- proposedPayload
- rationale
- status: pending, accepted, edited, rejected
- reviewedByUserId
- createdAt
- reviewedAt

### Asset

Represents uploaded or generated files.

Types:

- uploadedMap
- inspirationImage
- generatedImage
- icon
- document
- audio
- transcript

Fields:

- id
- campaignId
- assetType
- name
- pathOrUrl
- mimeType
- width
- height
- source
- metadata
- createdAt

## Key Modeling Rules

### Canon Is Explicit

Nothing becomes accepted campaign truth unless status is `canon` or an accepted suggestion
creates or updates canon.

### Visibility Is Separate From Status

Something can be canon but private to the DM.

Something can be public but still marked as rumor.

### Decoration Is Separate From Lore

Generated map trees, roads, ruins, or atmospheric elements can help the world feel alive
without becoming facts the players can rely on.

### Source Links Matter

When AI creates a suggestion from session notes or a prompt, keep the source link. This
allows the DM to ask, "why did the app think this?"

