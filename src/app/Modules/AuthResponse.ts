export interface AuthResponse {
  isAuthenticated: boolean;
  username: string;
  email: string;
  roles: string[];
  token: string;
  expiresOn: string;
  passward: string; // مكتوبة كدا في API بتاعك
}
