// src/app/components/AwardeesFilter.js
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// Demo data - baad mein real awardees list yahan daal dena
const demoAwardees = [
  {
    name: "Aarav Sharma",
    year: 2025,
    category: "Social Impact Award",
    description: "For outstanding work in child education and rural development.",
    organization: "Shiksha Foundation",
    awardDate: "2025-11-20",
  },
  {
    name: "Priya Patel",
    year: 2025,
    category: "Women Empowerment Award",
    description: "Empowering women through skill development and entrepreneurship programs.",
    organization: "Mahila Utkarsh Sansthan",
    awardDate: "2025-12-10",
  },
  {
    name: "Rahul Verma",
    year: 2024,
    category: "Youth Innovation Award",
    description: "Developed low-cost health monitoring device for rural communities.",
    organization: "Tech for Good Initiative",
  },
  {
    name: "Sneha Gupta",
    year: 2024,
    category: "Environmental Conservation",
    description: "Led large-scale tree plantation and water conservation drives.",
    organization: "Green Earth Society",
  },
  {
    name: "Vikram Singh",
    year: 2023,
    category: "Healthcare Excellence",
    description: "Organized free medical camps in remote areas for over a decade.",
    organization: "Seva Health Foundation",
  },
  // ... apni real list yahan add kar dena
];

export default function AwardeesFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedYear, setSelectedYear] = useState('all');

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 22; // 23 saal assuming
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
        .awardees-filter-wrapper {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        .filter-section {
          text-align: center;
          margin: 0 0 40px;
        }
        .year-select {
          padding: 12px 20px;
          font-size: 1.1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          min-width: 220px;
          background: #fff;
          cursor: pointer;
        }
        .year-select:focus {
          outline: none;
          border-color: #0066cc;
          box-shadow: 0 0 0 3px rgba(0,102,204,0.15);
        }

        .awardees-list {
          max-width: 1000px;
          margin: 0 auto;
        }
        .awardee-item {
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }
        .awardee-item:last-child {
          border-bottom: none;
        }
        .awardee-name {
          font-size: 1.35rem;
          font-weight: 600;
          color: #004080;
          margin: 0 0 6px;
        }
        .awardee-meta {
          font-size: 1rem;
          color: #0066cc;
          margin: 0 0 8px;
          font-weight: 500;
        }
        .awardee-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
          margin: 0 0 10px;
        }
        .awardee-extra {
          font-size: 0.95rem;
          color: #555;
        }
        .awardee-extra strong {
          color: #333;
        }
        .no-results {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          padding: 80px 20px;
        }

        @media (max-width: 600px) {
          .year-select { width: 100%; }
        }
      `}</style>

      <div className="awardees-filter-wrapper">
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
          <div className="no-results">
            No awardees found for the selected year.
          </div>
        ) : (
          <div className="awardees-list">
            {filtered.map((person, index) => (
              <div key={index} className="awardee-item">
                <h3 className="awardee-name">{person.name}</h3>
                <div className="awardee-meta">
                  {person.year} • {person.category}
                </div>
                <p className="awardee-desc">{person.description}</p>
                <div className="awardee-extra">
                  {person.organization && (
                    <div><strong>Organization:</strong> {person.organization}</div>
                  )}
                  {person.awardDate && (
                    <div><strong>Award Date:</strong> {person.awardDate}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}