
export type UserRole = 'user' | 'manager' | 'admin' | 'super_admin';
export type UserStatus = 'active' | 'blocked';
export type LeaveStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type LeaveType = 'annual' | 'sick' | 'unpaid' | 'maternity' | 'paternity' | 'other';

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  status: UserStatus;
  manager_id: string | null;
  organization_id: string;
  created_at: string;
}

export interface LeaveBalance {
  id: string;
  user_id: string;
  leave_type: LeaveType;
  total_days: number;
  used_days: number;
  remaining_days: number;
  year: number;
}

export interface LeaveApplication {
  id: string;
  user_id: string;
  from_date: string;
  to_date: string;
  leave_type: LeaveType;
  reason: string;
  status: LeaveStatus;
  created_at: string;
  user?: Profile; // Joined data
}

export interface LeaveApproval {
  id: string;
  application_id: string;
  approver_id: string;
  status: LeaveStatus;
  remarks: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}
