export const MIME = {
  IMAGE: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],

  PDF: ['application/pdf'],

  WORD: [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],

  EXCEL: [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],

  POWERPOINT: [
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  ],

  TEXT: ['text/plain', 'text/csv'],

  ARCHIVE: [
    'application/zip',
    'application/x-rar-compressed',
    'application/x-7z-compressed',
    'application/gzip',
  ],

  AUDIO: ['audio/mpeg', 'audio/wav', 'audio/ogg'],

  VIDEO: ['video/mp4', 'video/webm', 'video/quicktime'],
} as const
