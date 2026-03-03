// src/app/components/AwardeesFilter.js
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// ==================== REAL AWARDEES DATA (2003 to 2011) ====================
const demoAwardees = [
  // ====================== 2003 ======================
  { year: 2003, name: "Ms. Ajna Raj Gopalan", category: "Shri F.B. Nigam Memorial Award", description: "Social worker honored by Navratna", organization: "Sai Kripa", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mrs. Nilima Mishra", category: "Shri F.B. Nigam Memorial Award", description: "Social worker honored by Navratna", organization: "Shanti Niketan Old Age Home", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mrs. Asha Bishnoi", category: "Shri F.B. Nigam Memorial Award", description: "Working for disabled children", organization: "", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mr. Bhumesh Sharma", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "Dadri", awardDate: "March 9, 2003" },
  { year: 2003, name: "Rotarian Bhag Singh", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "Tughlaqpur", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mr. Haji Ishtiaq", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "Noida", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mrs. Rajni Kaul", category: "Shri F.B. Nigam Memorial Award", description: "Educationist", organization: "", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mr. Harinand Singh", category: "Shri F.B. Nigam Memorial Award", description: "Founder of Dr. Vidyalaya", organization: "Sector 8, Noida", awardDate: "March 9, 2003" },
  { year: 2003, name: "Rotarian S.S. Goyal", category: "Shri F.B. Nigam Memorial Award", description: "Prominent social worker", organization: "", awardDate: "March 9, 2003" },

  // ====================== 2004 ======================
  { year: 2004, name: "Shree Mahendr Saraayan", category: "Shri F.B. Nigam Smriti Puraskar", description: "", organization: "Sector-35, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "Shree Muft Khaleel Ahamad Kaasamee", category: "Shri F.B. Nigam Smriti Puraskar", description: "", organization: "Jaama Masjid, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "Yuva Shakti Sangathan", category: "Shri F.B. Nigam Smriti Puraskar", description: "", organization: "Dadri", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mahaaveer Intaraneshanal", category: "Navratna Award", description: "", organization: "Sector-14, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "Shree Baaba Kaanadee", category: "Navratna Award", description: "Saahity (Literature)", organization: "Sadarapur, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "Ku. Trpti Paal", category: "Navratna Award", description: "Taaraakee Krda (Table Tennis)", organization: "D.P.S. Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mr. Rajmani Tiwari", category: "Navratna Special Award", description: "Exemplary contribution in literary, social, cultural and religious fields", organization: "", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mr. Sushil Rajput", category: "Navratna Special Award", description: "For establishing Noida as a national leader in sports", organization: "", awardDate: "March 13, 2004" },
  { year: 2004, name: "Padma Shri Dr. S.C. Manchanda", category: "National Navratna Award", description: "Cardiologist", organization: "Metro Hospital", awardDate: "March 13, 2004" },
  { year: 2004, name: "National Balshree Ms. Charu Joshi", category: "National Navratna Award", description: "Kathak Dancer", organization: "Army Public School, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "National Balshree Master Sameer Rijutal", category: "National Navratna Award", description: "Science", organization: "Modern School, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "Singh Yadav", category: "National Navratna Award", description: "President's Medal recipient", organization: "Customs and Excise", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mr. R.P. Gupta", category: "National Navratna Award", description: "President's Distinguished Service Medal recipient", organization: "Personnel Officer, Noida", awardDate: "March 13, 2004" },

  // ====================== 2005 ======================
  { year: 2005, name: "Mr. Radha Singh", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "Sec. 37, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Mrs. Usha Bakshi", category: "Navratna Award", description: "", organization: "Sec. 21, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Mr. Krishna Kumar", category: "Navratna Award", description: "Public Relations", organization: "Sec. 19, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Sri Sathya Sai Seva Samiti", category: "Navratna Award", description: "", organization: "Sec. 21, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "I Help You Counter", category: "Navratna Award", description: "Government Hospital", organization: "Sec. 30, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Ms. Vaishya Sinha", category: "Navratna Sports Award", description: "Golf", organization: "Sector 14A, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Ms. Bijendri Yadav", category: "Navratna Sports Award", description: "Half Marathon", organization: "Bhagatpur", awardDate: "March 12, 2005" },
  { year: 2005, name: "Noida Citizen Forum", category: "Navratna Special Award", description: "", organization: "Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Dr. Kartal Haider", category: "National Padma Bhushan", description: "Recognized authority on Urdu", organization: "", awardDate: "2005" },
  { year: 2005, name: "Mr. B.P. Agarwal", category: "International Quality Award", description: "Chairman", organization: "Surya Farms & Agro Products Ltd.", awardDate: "2005" },
  { year: 2005, name: "Mr. N. K.", category: "President's Medal 2005", description: "Secretary, Supervisor Special Department, Uttar Pradesh Police", organization: "", awardDate: "2005" },
  { year: 2005, name: "Mr. Santosh Kumar Singh", category: "President's Medal 2005", description: "Chief Executive Officer, Customs and Excise Tax", organization: "", awardDate: "2005" },

  // ====================== 2006 ======================
  { year: 2006, name: "Mrs. Usha Thakur", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "Sector 31", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mrs. Sonia Kohli", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "Sector 44, Noida", awardDate: "March 10, 2006" },
  { year: 2006, name: "Rotarian Mr. A.C. Peter", category: "Navratna Award", description: "", organization: "", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. Ramakant Singh", category: "Navratna Award", description: "Handicapped Gyan Mandir", organization: "Sector 8", awardDate: "March 10, 2006" },
  { year: 2006, name: "Anjuman Muslimeen Gholia Committee", category: "Navratna Award", description: "", organization: "Sector 8", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mrs. Priyatama", category: "Navratna Special Award", description: "Renowned social worker", organization: "Sector 26", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. Abhiram Puranik", category: "Navratna Bravery Award", description: "", organization: "Nithari", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. Yasir Tanveer", category: "Navratna Sports Award", description: "Skate Rifle Shooting", organization: "Sector 40", awardDate: "March 10, 2006" },
  { year: 2006, name: "Kumari Vaishya Sinha", category: "Navratna Sports Award", description: "International Golfer", organization: "Sector 14A, Noida", awardDate: "March 10, 2006" },
  { year: 2006, name: "Kumari Savita Hanspal", category: "Navratna Education Award", description: "Highest marks in Indraprastha University B.Ed. exam", organization: "Sector 25", awardDate: "March 10, 2006" },
  { year: 2006, name: "Divya V.N. Khare", category: "Navratna Award", description: "Padma Vibhushan (Former Chief Justice)", organization: "Sector 27", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. P.P. Rao", category: "Navratna Award", description: "Padma Bhushan", organization: "Sector 15A", awardDate: "March 10, 2006" },
  { year: 2006, name: "Kumari Sonal Chauhan", category: "Navratna Award", description: "International Beauty Pageant Winner", organization: "Sector 14", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. G.K. Basu", category: "President’s Medal", description: "Excise and Customs Department", organization: "Sector 1", awardDate: "March 10, 2006" },

  // ====================== 2007 ======================
  { year: 2007, name: "Mr. Mahesh Saxe", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "Epic Lok Manch", awardDate: "2007" },
  { year: 2007, name: "Shri Math Maker", category: "Navratna Shyam Sunder Goyal Memorial Award", description: "General Secretary", organization: "Indian Festival Organizing Committee", awardDate: "2007" },
  { year: 2007, name: "Mrs. Nadira Razzaq", category: "Navratna Award", description: "Founder", organization: "Saksham School, Nithari", awardDate: "2007" },
  { year: 2007, name: "Dr. C.B. Jha", category: "Navratna Award", description: "President", organization: "Flour Market Association", awardDate: "2007" },
  { year: 2007, name: "Mr. Subhash Chandel Chacha Hindustani", category: "Navratna Award", description: "Social Worker & Renowned Cricket Spectator", organization: "Greater Noida", awardDate: "2007" },
  { year: 2007, name: "Mr. Ashok Randhawa", category: "Navratna Special Award", description: "President", organization: "Mini Market Association, Sarojini Nagar, Delhi", awardDate: "2007" },
  { year: 2007, name: "Mr. Pankaj Jindal", category: "Navratna Special Award", description: "President", organization: "National Club Central", awardDate: "2007" },
  { year: 2007, name: "Mr. M.I. Khan", category: "Navratna Award", description: "IPS, Deputy Inspector General", organization: "Border Security Force", awardDate: "2007" },
  { year: 2007, name: "Diwakar Sharma", category: "Little Tansen Award", description: "", organization: "", awardDate: "2007" },

  // ====================== 2008 ======================
  { year: 2008, name: "Sidhya Ashramalaya, ACC Convent School", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Shri Parveen Sharma", category: "Navratna Shyam Sundar Goyal Memorial Award", description: "National President", organization: "Divya Prem Seva Mission", awardDate: "April 5, 2008" },
  { year: 2008, name: "Tuffail Chaudhary", category: "Navratna Award", description: "Editor", organization: "Laffz Magazine", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Amit Khemka", category: "Navratna Award", description: "Senior Sportsperson", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Sheeshpal", category: "Navratna Award", description: "Senior Journalist", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Diabetic Forum, Bharat Vikas Parishad", category: "Navratna Special Award", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Chhotelal Chauhan", category: "Navratna Award", description: "National Teacher Award Winner", organization: "Government Primary School, Glasspur", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mrs. Mohina Dhar", category: "Navratna Award", description: "National Teacher Award Winner", organization: "Polisi Amity School", awardDate: "April 5, 2008" },
  { year: 2008, name: "Meher Legha", category: "National Child Bravery Award", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Jagmal Singh", category: "President's Medal", description: "", organization: "", awardDate: "April 5, 2008" },

  // ====================== 2009 ======================
  { year: 2009, name: "Ritu Sinha", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Mr. Veerpal Singh", category: "Navratna Shri Shyam Sunder Goyal Memorial Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Mr. Jitendra Singhti", category: "Navratna Sardar Bhag Singh Memorial Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Art of Living Foundation", category: "Navratna Special Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Mr. T.N. Govil", category: "Navratna Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Mr. Ashok Tiwari", category: "Navratna Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Mukesheshwari", category: "Navratna Award", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Dr. Purushottam Lal", category: "Navratna Special Honor", description: "Chairman", organization: "Metro Hospital", awardDate: "May 10, 2009" },
  { year: 2009, name: "Mr. A.K. Gurha", category: "Navratna Honors", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Ashok Trimurti", category: "Navratna Honors", description: "", organization: "", awardDate: "May 10, 2009" },
  { year: 2009, name: "Ms. Tanya Pal", category: "Navratna Honors", description: "", organization: "", awardDate: "May 10, 2009" },

  // ====================== 2010 ======================
  { year: 2010, name: "Shri V. Sam Singh", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "Grandfather and Grandmother College, Anupshahr", awardDate: "2010" },
  { year: 2010, name: "Shri Natthi Ram Sharma", category: "Navratna Shyamsunder Goyal Memorial Award", description: "", organization: "Bagalpur Jewar", awardDate: "2010" },
  { year: 2010, name: "Commodore Lokesh Batra", category: "Navratna Sardar Bhag Singh Memorial Award", description: "Information and Empowerment Activist", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mrs. Meena Oon", category: "Navratna Shri Ram Anugrah Narayan Memorial Women's Empowerment Award", description: "", organization: "Pranan Fon", awardDate: "2010" },
  { year: 2010, name: "Mrs. Meena Om", category: "Navratna Shri Ram Grace Narayan Smriti Women's Empowerment Award", description: "", organization: "Pranam Foundation", awardDate: "2010" },
  { year: 2010, name: "Dr. Narendravriva", category: "Navratna Award", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mr. Krishna Chandra Pant", category: "Navratna Award", description: "", organization: "Keshav Sankirtan Mandal", awardDate: "2010" },
  { year: 2010, name: "Citizen Environment Improvement Society", category: "Navratna Award", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mrs. and Mr. S.L. Sharma", category: "Navratna Bravery Award", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Tata Tea Limited Institute", category: "Navratna Special Award", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Idea Cellular Limited Institute", category: "Navratna Special Award", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mr. Musafir Raja", category: "Navratna Samman", description: "", organization: "Rani", awardDate: "2010" },
  { year: 2010, name: "Mrs. Amita Sachdev", category: "Navratna Samman", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Ms. Pala Garg", category: "Chitransh Om Prakash Kamthan Education Award", description: "", organization: "Vidhammar Florida Ramamurthy Inter Laboratory, Dammakor", awardDate: "2010" },

  // ====================== 2011 ======================
  { year: 2011, name: "Mr. Ashok Thakur", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "Binno Delhi", awardDate: "2011" },
  { year: 2011, name: "Father John Pilathil", category: "Navratna Shyamsunder Goyal Memorial Award", description: "", organization: "Bose Home, Boda", awardDate: "2011" },
  { year: 2011, name: "Mr. Sudheer Kumar Swarup", category: "Navratna Sardar Bhag Singh Memorial Award", description: "Chief Editor", organization: "Archie Design", awardDate: "2011" },
  { year: 2011, name: "Mrs. Ritu Mehrab", category: "Navratna Shri Ram Grace Narayan Memorial Women's Empowerment Award", description: "Builder", organization: "Delhi", awardDate: "2011" },
  { year: 2011, name: "Dr. Meena Mishra", category: "Navratna Award", description: "Chief Medical Officer", organization: "", awardDate: "2011" },
  { year: 2011, name: "Mrs. Padmini Kumar", category: "Navratna Award", description: "", organization: "", awardDate: "2011" },
  { year: 2011, name: "Mr. Gulshan Darshan", category: "Navratna Award", description: "", organization: "", awardDate: "2011" },
  { year: 2011, name: "Mr. R.V. Tyagan", category: "Navratna Award", description: "", organization: "", awardDate: "2011" },
  { year: 2011, name: "Mrs. Hema", category: "Navratna Bravery Award", description: "", organization: "Dadri", awardDate: "2011" },
  { year: 2011, name: "Mr. Anil Tyagi", category: "Navratna Bravery Award", description: "", organization: "S-39, Bofla", awardDate: "2011" },
  { year: 2011, name: "Mr. Karan Awana", category: "Navratna Bravery Award", description: "", organization: "Harola, Boeda", awardDate: "2011" },
  { year: 2011, name: "Mrs. Madhu Chandra", category: "Navratna Samman", description: "", organization: "Lotus Valley International School", awardDate: "2011" },
  { year: 2011, name: "Mrs. Renu Singh", category: "Navratna Samman", description: "", organization: "Amity International School", awardDate: "2011" },
  { year: 2011, name: "Dr. Ashok Pandey", category: "Navratna Samman", description: "", organization: "Colonial School", awardDate: "2011" },
  { year: 2011, name: "Mr. Alok Srivastava", category: "Navratna Samman", description: "", organization: "Boda", awardDate: "2011" },
  { year: 2011, name: "Mr. P. Peeraviv ‘Rind’", category: "Navratna Samman", description: "", organization: "", awardDate: "2011" }
];

export default function AwardeesFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedYear, setSelectedYear] = useState('all');

  // Dropdown: 2003 to 2025
  const startYear = 2003;
  const endYear = new Date().getFullYear() - 1; // 2025
  const years = [];
  for (let y = endYear; y >= startYear; y--) {
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
        .awardees-filter-wrapper { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; }
        .filter-section { text-align: center; margin: 0 0 40px; }
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
        .awardees-list { max-width: 1000px; margin: 0 auto; }
        .awardee-item {
          padding: 22px 0;
          border-bottom: 1px solid #eee;
        }
        .awardee-item:last-child { border-bottom: none; }
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
        .awardee-extra { font-size: 0.95rem; color: #555; }
        .awardee-extra strong { color: #333; }
        .no-results {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          padding: 80px 20px;
        }
        @media (max-width: 600px) { .year-select { width: 100%; } }
      `}</style>

      <div className="awardees-filter-wrapper">
        <div className="filter-section">
          <select value={selectedYear} onChange={handleChange} className="year-select">
            <option value="all">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">No awardees found for the selected year.</div>
        ) : (
          <div className="awardees-list">
            {filtered.map((person, index) => (
              <div key={index} className="awardee-item">
                <h3 className="awardee-name">{person.name}</h3>
                <div className="awardee-meta">
                  {person.year} • {person.category}
                </div>
                {person.description && <p className="awardee-desc">{person.description}</p>}
                <div className="awardee-extra">
                  {person.organization && <div><strong>Organization / Place:</strong> {person.organization}</div>}
                  {person.awardDate && <div><strong>Award Date:</strong> {person.awardDate}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}