import type { BackendProvider, BackendResult, RegistrationPayload, ContactMessagePayload } from '../types';

export const noneProvider: BackendProvider = {
  name: 'none',

  async submitRegistration(payload: RegistrationPayload): Promise<BackendResult> {
    try {
      const key = 'mts_ppdb_registrations';
      const existing = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      let list = [];
      if (existing) {
        try {
          list = JSON.parse(existing);
          if (!Array.isArray(list)) list = [];
        } catch {
          list = [];
        }
      }

      const item = {
        ...payload,
        created_at: payload.created_at || new Date().toISOString(),
        status: payload.status || 'pending'
      };

      list.unshift(item);

      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(list));
      }

      return {
        success: true,
        message: 'Pendaftaran berhasil disimpan ke penyimpanan lokal perangkat (mode none).',
        data: item
      };
    } catch (err: any) {
      return {
        success: false,
        message: 'Gagal menyimpan data pendaftaran ke penyimpanan lokal browser.',
        error: err?.message || String(err)
      };
    }
  },

  async submitContactMessage(payload: ContactMessagePayload): Promise<BackendResult> {
    try {
      const key = 'mts_cms_kontak_messages';
      const existing = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      let list = [];
      if (existing) {
        try {
          list = JSON.parse(existing);
          if (!Array.isArray(list)) list = [];
        } catch {
          list = [];
        }
      }

      const item = {
        id: payload.id || `MSG-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
        name: payload.name,
        contact: payload.contact || payload.phone || payload.email || '',
        isWhatsApp: payload.isWhatsApp ?? Boolean(payload.phone?.startsWith('08') || payload.phone?.startsWith('+62')),
        subject: payload.subject,
        message: payload.message,
        date: payload.date || new Date().toLocaleString('id-ID'),
        status: payload.status || 'Belum Dibaca',
        created_at: payload.created_at || new Date().toISOString()
      };

      list.unshift(item);

      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(list));
      }

      return {
        success: true,
        message: 'Pesan berhasil dikirim dan tersimpan di kotak masuk admin (mode none).',
        data: item
      };
    } catch (err: any) {
      return {
        success: false,
        message: 'Gagal menyimpan pesan kontak ke penyimpanan lokal browser.',
        error: err?.message || String(err)
      };
    }
  }
};
