import { Member } from "@/app/data/members";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="card-hover bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
      <img
        src={member.avatar}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-indigo-600 font-medium">{member.role}</p>
    </div>
  );
}