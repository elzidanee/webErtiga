export interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string; // URL or initials fallback
}

export const members: Member[] = [
  { id: 1, name: "Alice Johnson", role: "Instructor", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob Smith", role: "Teaching Assistant", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Carol White", role: "Student", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Dave Brown", role: "Student", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eve Davis", role: "Student", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Frank Wilson", role: "Student", avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Grace Lee", role: "Student", avatar: "https://i.pravatar.cc/150?img=7" },
  { id: 8, name: "Henry Adams", role: "Student", avatar: "https://i.pravatar.cc/150?img=8" },
];