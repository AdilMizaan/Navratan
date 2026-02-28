// src/app/components/AwardeesFilter.js
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// Demo data - baad mein real list daal dena
const demoAwardees = [
  {
    name: "Aarav Sharma",
    year: 2025,
    category: "Social Impact Award",
    description: "For outstanding work in child education and rural development.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    organization: "Shiksha Foundation",
    awardDate: "2025-11-20",
  },
   {
    name: "Aarav Sharma",
    year: 2024,
    category: "Social Impact Award",
    description: "For outstanding work in child education and rural development.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    organization: "Shiksha Foundation",
    awardDate: "2025-11-20",
  },
   {
    name: "Aarav Sharma",
    year: 2024,
    category: "Social Impact Award",
    description: "For outstanding work in child education and rural development.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    organization: "Shiksha Foundation",
    awardDate: "2025-11-20",
  },
   {
    name: "Aarav Sharma",
    year: 2023,
    category: "Social Impact Award",
    description: "For outstanding work in child education and rural development.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    organization: "Shiksha Foundation",
    awardDate: "2025-11-20",
  },
   {
    name: "Aarav Sharma",
    year: 2023,
    category: "Social Impact Award",
    description: "For outstanding work in child education and rural development.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    organization: "Shiksha Foundation",
    awardDate: "2025-11-20",
  },
  // ... baaki demo entries same rakh sakte ho ya add kar sakte ho
  // real list ke liye yeh array replace kar dena
];

export default function AwardeesFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedYear, setSelectedYear] = useState('all');

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 22;
  const years = [];
  for (let y = currentYear; y >= startYear; y--) {
    years.push(y);
  }

  useEffect(() => {
    const yearFromUrl = searchParams.get('year');
    if (yearFromUrl && years.includes(Number(yearFromUrl))) {
      setSelectedYear(yearFromUrl);
    } else {
      setSelectedYear('all');
    }
  }, [searchParams, years]);

  const filtered = selectedYear === 'all'
    ? demoAwardees
    : demoAwardees.filter(item => item.year === Number(selectedYear));

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedYear(value);

    const params = new URLSearchParams(searchParams);
    if (value === 'all') params.delete('year');
    else params.set('year', value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <style>{`
        .filter-section {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }
        .year-select {
          width: 280px;
          padding: 14px 20px;
          font-size: 1.1rem;
          border: 2px solid #cbd5e0;
          border-radius: 12px;
          background: white;
          color: #2d3748;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.2s;
        }
        .year-select:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49,130,206,0.2);
        }

        .awardees-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }
        .awardee-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .awardee-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        .card-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }
        .card-content {
          padding: 24px;
        }
        .card-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 8px;
        }
        .card-meta {
          font-size: 1rem;
          color: #3182ce;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .card-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 16px;
        }
        .card-org, .card-date {
          font-size: 0.95rem;
          color: #718096;
          margin-bottom: 8px;
        }

        @media (max-width: 640px) {
          .awardees-grid { gap: 24px; }
          .card-img { height: 220px; }
        }
      `}</style>

      <div className="filter-section">
        <select
          value={selectedYear}
          onChange={handleChange}
          className="year-select"
        >
          <option value="all">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p style={{
          textAlign: 'center',
          fontSize: '1.3rem',
          color: '#718096',
          padding: '60px 0'
        }}>
          No awardees found for the selected year.
        </p>
      ) : (
        <div className="awardees-grid">
          {filtered.map((person, index) => (
            <div key={index} className="awardee-card">
              <img
                src={person.photo}
                alt={person.name}
                className="card-img"
              />
              <div className="card-content">
                <h3 className="card-name">{person.name}</h3>
                <div className="card-meta">
                  {person.year} • {person.category}
                </div>
                <p className="card-desc">{person.description}</p>
                {person.organization && (
                  <p className="card-org"><strong>Organization:</strong> {person.organization}</p>
                )}
                {person.awardDate && (
                  <p className="card-date"><strong>Award Date:</strong> {person.awardDate}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}