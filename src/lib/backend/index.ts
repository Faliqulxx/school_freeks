import type { BackendProvider } from './types';
import { noneProvider } from './providers/none';
import { webhookProvider } from './providers/webhook';
import { supabaseProvider } from './providers/supabase';
import { mysqlProvider } from './providers/mysql';

const providers: Record<string, BackendProvider> = {
  none: noneProvider,
  webhook: webhookProvider,
  supabase: supabaseProvider,
  mysql: mysqlProvider
};

/**
 * Returns the configured backend provider based on PUBLIC_BACKEND_PROVIDER env variable.
 * Defaults to 'none' for 100% zero-config static operation out of the box.
 */
export function getBackendProvider(): BackendProvider {
  const providerKey = (
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.PUBLIC_BACKEND_PROVIDER
  )
    ? String(import.meta.env.PUBLIC_BACKEND_PROVIDER).trim().toLowerCase()
    : 'none';

  return providers[providerKey] || noneProvider;
}

export * from './types';
export { noneProvider } from './providers/none';
export { webhookProvider } from './providers/webhook';
export { supabaseProvider } from './providers/supabase';
export { mysqlProvider } from './providers/mysql';
