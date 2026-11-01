import type { BackendProvider, BackendResult, RegistrationPayload, ContactMessagePayload } from '../types';
import { noneProvider } from './none';

export const mysqlProvider: BackendProvider = {
  name: 'mysql',

  async submitRegistration(payload: RegistrationPayload): Promise<BackendResult> {
    const apiEndpoint = ((import.meta.env && import.meta.env.PUBLIC_MYSQL_API_ENDPOINT) || '') as string;

    // Local safety copy
    await noneProvider.submitRegistration(payload);

    if (!apiEndpoint) {
      console.warn('[MySQL Provider] PUBLIC_MYSQL_API_ENDPOINT belum diatur. Menggunakan penyimpanan lokal.');
      return {
        success: true,
        message: 'Data pendaftaran tersimpan secara lokal (endpoint MySQL API belum diatur di .env).',
        data: payload
      };
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          action: 'register_ppdb',
          table: 'registrations',
          data: payload
        })
      });

      if (!response.ok) {
        throw new Error(`MySQL API Endpoint merespons ${response.status}: ${response.statusText}`);
      }

      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message: 'Pendaftaran berhasil diteruskan ke database MySQL.',
        data: resData
      };
    } catch (err: any) {
      console.error('[MySQL Provider] Gagal mengirim ke MySQL API:', err);
      return {
        success: false,
        message: 'Gagal mengirim ke endpoint database MySQL, data diamankan di penyimpanan lokal.',
        error: err?.message || String(err)
      };
    }
  },

  async submitContactMessage(payload: ContactMessagePayload): Promise<BackendResult> {
    const apiEndpoint = ((import.meta.env && import.meta.env.PUBLIC_MYSQL_API_ENDPOINT) || '') as string;

    // Local safety copy
    await noneProvider.submitContactMessage(payload);

    if (!apiEndpoint) {
      console.warn('[MySQL Provider] PUBLIC_MYSQL_API_ENDPOINT belum diatur. Menggunakan penyimpanan lokal.');
      return {
        success: true,
        message: 'Pesan tersimpan secara lokal di kontak admin (endpoint MySQL API belum diatur di .env).',
        data: payload
      };
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          action: 'contact_message',
          table: 'contact_messages',
          data: payload
        })
      });

      if (!response.ok) {
        throw new Error(`MySQL API Endpoint merespons ${response.status}: ${response.statusText}`);
      }

      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message: 'Pesan berhasil diteruskan ke database MySQL.',
        data: resData
      };
    } catch (err: any) {
      console.error('[MySQL Provider] Gagal mengirim ke MySQL API:', err);
      return {
        success: false,
        message: 'Gagal mengirim ke endpoint MySQL, pesan diamankan di penyimpanan lokal.',
        error: err?.message || String(err)
      };
    }
  }
};
