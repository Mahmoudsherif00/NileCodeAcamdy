/**
 * Teens Track — structural data.
 * Display text lives in src/i18n/translations.js; this file only maps
 * icons to the ordered content lists so items can be re-ordered or
 * extended without touching components.
 */
import { Lightbulb, Rocket, Palette, Compass } from 'lucide-react'
import {
  BookOpen, MessageSquareText, Sparkles, Image as ImageIcon, Workflow,
} from 'lucide-react'

export const TEENS_OUTCOME_ICONS = [Lightbulb, Rocket, Palette, Compass]

/** Roadmap milestone icons (5 stops). */
export const TEENS_ROADMAP_ICONS = [BookOpen, MessageSquareText, Sparkles, ImageIcon, Workflow]

export const TEENS_CURRICULUM_ICONS = [
  'book', 'prompt', 'prompt', 'media', 'puzzle',
  'workflow', 'workflow', 'chat',
]
