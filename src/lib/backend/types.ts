export interface RegistrationPayload {
  registration_no: string;
  full_name: string;
  gender: string;
  nisn: string;
  birth_place?: string;
  birth_date?: string;
  parent_name: string;
  phone: string;
  email?: string;
  address?: string;
  previous_school?: string;
  notes?: string;
  created_at?: string;
  status?: string;
  [key: string]: any;
}

export interface ContactMessagePayload {
  id?: string;
  name: string;
  email?: string;
  phone?: string;
  contact?: string;
  isWhatsApp?: boolean;
  subject: string;
  message: string;
  date?: string;
  created_at?: string;
  status?: string;
  [key: string]: any;
}

export interface BackendResult<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface BackendProvider {
  readonly name: string;
  submitRegistration(payload: RegistrationPayload): Promise<BackendResult>;
  submitContactMessage(payload: ContactMessagePayload): Promise<BackendResult>;
}
