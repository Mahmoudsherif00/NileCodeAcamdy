import {
  BookOpen, MessageSquareText, Image, Puzzle, Workflow, Bot,
  MessageCircle, Plug, BarChart3, FileSpreadsheet,
} from 'lucide-react'

const ICONS = {
  book: BookOpen,
  prompt: MessageSquareText,
  media: Image,
  puzzle: Puzzle,
  workflow: Workflow,
  chat: Bot,
  bot: Bot,
  plug: Plug,
  chart: BarChart3,
  sheet: FileSpreadsheet,
}

/**
 * One numbered curriculum row with a blue circular indicator.
 */
export default function CurriculumItem({ index, topic, iconKey = 'book' }) {
  const Icon = ICONS[iconKey] || BookOpen
  return (
    <div className="curriculum-item glass-card glass-card--hover">
      <span className="curriculum-item__num">{String(index).padStart(2, '0')}</span>
      <span className="curriculum-item__icon icon-bubble icon-bubble--sm">
        <Icon size={17} />
      </span>
      <h3 className="curriculum-item__topic">{topic}</h3>
    </div>
  )
}
