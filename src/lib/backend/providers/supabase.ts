import type { BackendProvider, BackendResult, RegistrationPayload, ContactMessagePayload } from '../types';
import { noneProvider } from './none';

export const supabaseProvider: BackendProvider = {
  name: 'supabase',

  async submitRegistration(payload: RegistrationPayload): Promise<BackendResult> {
    const supabaseUrl = (import.meta.env?.PUBLIC_SUPABASE_URL || '').replace(/\/$/, '');
    const supabaseAnonKey = import.meta.env?.PUBLIC_SUPABASE_ANON_KEY || '';

    // Local safety copy
    await noneProvider.submitRegistration(payload);

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('[Supabase Provider] PUBLIC_SUPABASE_URL atau PUBLIC_SUPABASE_ANON_KEY belum diatur. Menggunakan penyimpanan lokal.');
      return {
        success: true,
        message: 'Data pendaftaran tersimpan secara lokal (kredensial Supabase belum diatur di .env).',
        data: payload
      };
    }

    try {
      const endpoint = `${supabaseUrl}/rest/v1/registrations`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          registration_no: payload.registration_no,
          full_name: payload.full_name,
          gender: payload.gender,
          nisn: payload.nisn,
          birth_place: payload.birth_place || null,
          birth_date: payload.birth_date || null,
          parent_name: payload.parent_name,
          phone: payload.phone,
          email: payload.email || null,
          address: payload.address || null,
          previous_school: payload.previous_school || null,
          status: 'pending'
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Supabase API merespons ${response.status}: ${errorText}`);
      }

      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message: 'Pendaftaran berhasil dikirim dan tersimpan di database Supabase.',
        data: resData
      };
    } catch (err: any) {
      console.error('[Supabase Provider] Gagal menyimpan ke Supabase:', err);
      return {
        success: false,
        message: 'Gagal menghubungi database Supabase, namun data telah diamankan di penyimpanan lokal perangkat.',
        error: err?.message || String(err)
      };
    }
  },

  async submitContactMessage(payload: ContactMessagePayload): Promise<BackendResult> {
    const supabaseUrl = (import.meta.env?.PUBLIC_SUPABASE_URL || '').replace(/\/$/, '');
    const supabaseAnonKey = import.meta.env?.PUBLIC_SUPABASE_ANON_KEY || '';

    // Local safety copy
    await noneProvider.submitContactMessage(payload);

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('[Supabase Provider] PUBLIC_SUPABASE_URL atau PUBLIC_SUPABASE_ANON_KEY belum diatur. Menggunakan penyimpanan lokal.');
      return {
        success: true,
        message: 'Pesan tersimpan secara lokal di kontak admin (kredensial Supabase belum diatur di .env).',
        data: payload
      };
    }

    try {
      const endpoint = `${supabaseUrl}/rest/v1/contact_messages`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email || null,
          phone: payload.phone || payload.contact || null,
          subject: payload.subject,
          message: payload.message,
          status: 'unread'
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Supabase API merespons ${response.status}: ${errorText}`);
      }

      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message: 'Pesan berhasil tersimpan di database Supabase.',
        data: resData
      };
    } catch (err: any) {
      console.error('[Supabase Provider] Gagal mengirim ke Supabase:', err);
      return {
        success: false,
        message: 'Gagal menyimpan ke database Supabase, namun pesan telah diamankan di penyimpanan lokal perangkat.',
        error: err?.message || String(err)
      };
    }
  }
};
