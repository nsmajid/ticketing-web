import {
  Archive,
  File,
  FileArchive,
  FileAudio,
  FileCode2,
  FileImage,
  FileSpreadsheet,
  FileText,
  FileVideo,
  FileWarning,
  FileX,
  FolderOpen,
  Image,
  Link,
  Paperclip,
} from '@lucide/vue'

import type { IconRegistry } from '../types'

/**
 * File & Attachment icon registry.
 */
export const fileIcons: IconRegistry = {
  /**
   * Generic Attachment
   */
  attachment: Paperclip,

  /**
   * Generic File
   */
  file: File,

  /**
   * Folder
   */
  folder: FolderOpen,

  /**
   * Image
   */
  image: Image,
  imageFile: FileImage,

  /**
   * Document
   */
  text: FileText,

  /**
   * Spreadsheet
   */
  spreadsheet: FileSpreadsheet,

  /**
   * Source Code
   */
  code: FileCode2,

  /**
   * Archive
   */
  archive: Archive,
  zip: FileArchive,
  compressed: FileArchive,

  /**
   * Media
   */
  audio: FileAudio,
  video: FileVideo,

  /**
   * Link
   */
  link: Link,

  /**
   * Error
   */
  unsupported: FileWarning,
  unknown: FileX,
}
