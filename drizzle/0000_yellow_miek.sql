CREATE TABLE `campaigns` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`system_label` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `world_objects` (
	`id` text PRIMARY KEY NOT NULL,
	`campaign_id` text NOT NULL,
	`type` text NOT NULL,
	`name` text NOT NULL,
	`summary` text,
	`description` text,
	`visibility` text NOT NULL,
	`status` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`campaign_id`) REFERENCES `campaigns`(`id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "world_objects_visibility_check" CHECK("world_objects"."visibility" in ('public', 'private', 'hidden')),
	CONSTRAINT "world_objects_status_check" CHECK("world_objects"."status" in ('draft', 'canon', 'suggestion', 'archived'))
);
--> statement-breakpoint
CREATE INDEX `world_objects_campaign_id_idx` ON `world_objects` (`campaign_id`);