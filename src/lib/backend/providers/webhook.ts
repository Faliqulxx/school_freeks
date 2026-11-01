import type { BackendProvider, BackendResult, RegistrationPayload, ContactMessagePayload } from '../types';
import { noneProvider } from './none';

export const webhookProvider: BackendProvider = {
  name: 'webhook',

  async submitRegistration(payload: RegistrationPayload): Promise<BackendResult> {
    const webhookUrl = (import.meta.env?.PUBLIC_WEBHOOK_PPDB_URL || import.meta.env?.PUBLIC_WEBHOOK_URL || '') as string;

    // Always keep a local copy as safety fallback
    await noneProvider.submitRegistration(payload);

    if (!webhookUrl) {
      console.warn('[Webhook Provider] Variabel PUBLIC_WEBHOOK_PPDB_URL atau PUBLIC_WEBHOOK_URL belum dikonfigurasi. Menggunakan penyimpanan lokal.');
      return {
        success: true,
        message: 'Data pendaftaran tersimpan secara lokal (URL webhook belum diatur di .env).',
        data: payload
      };
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          type: 'ppdb_registration',
          timestamp: new Date().toISOString(),
          payload
        })
      });

      if (!response.ok) {
        throw new Error(`Webhook merespons dengan status ${response.status}: ${response.statusText}`);
      }

      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message: 'Pendaftaran berhasil dikirim ke server webhook.',
        data: resData
      };
    } catch (err: any) {
      console.error('[Webhook Provider] Gagal mengirim ke webhook:', err);
      return {
        success: false,
        message: 'Gagal mengirim ke server webhook, namun data telah diamankan di penyimpanan lokal perangkat.',
        error: err?.message || String(err)
      };
    }
  },

  async submitContactMessage(payload: ContactMessagePayload): Promise<BackendResult> {
    const webhookUrl = (import.meta.env?.PUBLIC_WEBHOOK_CONTACT_URL || import.meta.env?.PUBLIC_WEBHOOK_URL || '') as string;

    // Always keep a local copy as safety fallback
    await noneProvider.submitContactMessage(payload);

    if (!webhookUrl) {
      console.warn('[Webhook Provider] Variabel PUBLIC_WEBHOOK_CONTACT_URL atau PUBLIC_WEBHOOK_URL belum dikonfigurasi. Menggunakan penyimpanan lokal.');
      return {
        success: true,
        message: 'Pesan tersimpan secara lokal di kotak masuk admin (URL webhook belum diatur di .env).',
        data: payload
      };
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          type: 'contact_message',
          timestamp: new Date().toISOString(),
          payload
        })
      });

      if (!response.ok) {
        throw new Error(`Webhook merespons dengan status ${response.status}: ${response.statusText}`);
      }

      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message: 'Pesan berhasil terkirim via webhook.',
        data: resData
      };
    } catch (err: any) {
      console.error('[Webhook Provider] Gagal mengirim ke webhook:', err);
      return {
        success: false,
        message: 'Gagal mengirim ke webhook, namun pesan telah diamankan di penyimpanan lokal perangkat.',
        error: err?.message || String(err)
      };
    }
  }
};
