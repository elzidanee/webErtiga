"use client"; // for interactivity

import { useState } from "react";
import { members } from "./data/member";
import MemberCard from "./components/MemberCard";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Hero / Header */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to <span className="text-indigo-600">Class 2026</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our class structure and meet the amazing people behind the code.
        </p>
      </section>

      {/* Class Structure Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          📚 Class Structure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="text-xl font-semibold">Course Syllabus</h3>
            <ul className="mt-3 text-gray-600 space-y-1 text-sm">
              <li>Week 1: Introduction</li>
              <li>Week 2: JavaScript Fundamentals</li>
              <li>Week 3: React & Next.js</li>
              <li>Week 4: State Management</li>
              <li>Week 5: APIs & Data Fetching</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="text-xl font-semibold">Schedule</h3>
            <ul className="mt-3 text-gray-600 space-y-1 text-sm">
              <li>Mon 9:00 – 10:30</li>
              <li>Wed 11:00 – 12:30</li>
              <li>Fri 14:00 – 15:30</li>
              <li className="text-indigo-500 text-xs mt-2">* Office hours by appointment</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-xl font-semibold">Topics Covered</h3>
            <ul className="mt-3 text-gray-600 space-y-1 text-sm">
              <li>HTML & CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React Hooks</li>
              <li>Next.js App Router</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">👥 Class Members</h2>
          <div className="mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm w-full sm:w-64"
            />
          </div>
        </div>

        {filteredMembers.length === 0 ? (
          <p className="text-center text-gray-500">No members found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-200 bg-white/50 mt-8">
        &copy; {new Date().getFullYear()} Class 2026 — built with ❤️ using Next.js
      </footer>
    </main>
  );
}