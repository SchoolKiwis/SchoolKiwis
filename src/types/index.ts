export interface WikiDocument {
  id: string;              // Document ID
  title: string;           // Document title (e.g., "총학생회", "급식실")
  content: string;         // Content (Markdown string)
  category: string;        // Category (e.g., "시설", "동아리")
  lastUpdated: Date;       // Last updated date
  updatedBy: string;       // Last updated by (User ID or nickname)
}

export interface UserProfile {
  uid: string; // User ID
  email: string; // User email
  displayName: string; // Display name
  role: 'student' | 'teacher' | 'admin'; // User role
}