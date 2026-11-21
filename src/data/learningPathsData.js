import capIllustration from '../assets/images/cap-3d.svg'
import laptopIllustration from '../assets/images/laptop-3d.svg'

/**
 * The two learning paths shown on the home page.
 * Text is resolved from i18n at render time via `textKey`.
 */
export const LEARNING_PATHS = [
  {
    id: 'teens',
    to: '/teens',
    textKey: 'teens',
    illustration: capIllustration,
    iconKey: 'cap',
  },
  {
    id: 'adults',
    to: '/adults',
    textKey: 'adults',
    illustration: laptopIllustration,
    iconKey: 'laptop',
  },
]
