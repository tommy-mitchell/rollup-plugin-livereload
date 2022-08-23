import { Plugin } from 'rollup'
import { CreateServerConfig } from 'livereload'

export interface RollupLivereloadOptions extends CreateServerConfig {
  /**
   * A directory or a set of directories to watch for changes.
   * @default the current directory
   */
  watch?: string | string[]

  /**
   * Whether or not to inject the livereload snippet into the bundle which will
   * enable livereload in your web app. If `options.inject` is a function, the
   * snippet will not be injected into the bundle and will instead be provided
   * as an argument to the specified callback function.
   * @default true 
   */
  inject?: boolean | ((snippet: string) => void)

  /**
   * Log a message to console when livereload is ready
   * @default true 
   */
  verbose?: boolean

  ///
  /// Find all livereload options here:
  /// https://www.npmjs.com/package/livereload#user-content-server-api
  ///
}

/**
 * 🔄 A Rollup plugin for including livereload in your web app.
 */
export default function livereload(
  options?: RollupLivereloadOptions | string
): Plugin
