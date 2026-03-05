// src/app/components/AwardeesFilter.js
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// ==================== REAL AWARDEES DATA (2003 to 2025, excluding 2020-2021 due to COVID) ====================
const demoAwardees = [
  // ====================== 2025 ======================
  { year: 2025, name: "Mr. Vicky Yadav", category: "Sh. F.B. Nigam Memorial Award", description: "Social Workers/Social Organizations", organization: "Divyatarang Foundation, Sector-10, Noida", awardDate: "2025" },
  { year: 2025, name: "Das Charitable Foundation", category: "Sh. J.B. Jairath Memorial Award", description: "Social Workers/Social Organizations", organization: "Kalkaji, New Delhi", awardDate: "2025" },
  { year: 2025, name: "Mr. Chandan Kumar Dubey", category: "Sh. Akash Saxena Memorial Young Achievers Award", description: "Social Workers/Social Organizations", organization: "Saran, Bihar", awardDate: "2025" },
  { year: 2025, name: "Ms. Ananya Paul Dodamani", category: "DayaRani Nari Sasktikaran Purskar", description: "Social Workers/Social Organizations", organization: "Tribal Connect, Dharwad, Karnataka", awardDate: "2025" },
  { year: 2025, name: "Martyr Fl. Lt. Maheesh Trikha Foundation", category: "Kunwar Swaroop Bhatnagar Smriti Shiksha Purskar", description: "Social Workers/Social Organizations", organization: "New Delhi", awardDate: "2025" },
  { year: 2025, name: "Brig. Harcharan Singh VSM", category: "Smt. Sonia Kohli Samajik “Sahyog” Vishesh Purskar", description: "Social Workers/Social Organizations", organization: "Jammu Jaruhar, Noida", awardDate: "2025" },
  { year: 2025, name: "Mrs. Veena", category: "Sh. Harish Bhalwar Memorial Award", description: "Social Workers/Social Organizations", organization: "", awardDate: "2025" },
  { year: 2025, name: "Miss Tanvi Nagar", category: "Chitransh Om Prakash Kamthan Shiksha Purskar", description: "Social Workers/Social Organizations", organization: "Yash Memorial School, Noida", awardDate: "2025" },
  { year: 2025, name: "Mr. Devansh Chandra", category: "Sh. S.N. Sud Surrender Not Award", description: "Social Workers/Social Organizations", organization: "New Delhi", awardDate: "2025" },
  { year: 2025, name: "Mr. Umesh Kumar", category: "Smt. Kunta Verma-Madan Prasad Srivastava Memorial Award", description: "", organization: "Noida", awardDate: "2025" },
  { year: 2025, name: "Mrs. Anita Jain", category: "Navratan Special Award", description: "Social Workers/Social Organizations", organization: "Noida", awardDate: "2025" },
  { year: 2025, name: "Divine India Youth Association", category: "Navratan Special Award", description: "", organization: "New Delhi", awardDate: "2025" },
  { year: 2025, name: "Miss Aliya Gupta", category: "Navratan Ke Ratna Award", description: "Saxophonist", organization: "Noida", awardDate: "2025" },
  { year: 2025, name: "Miss Benzy", category: "Navratan Ke Ratna Award", description: "", organization: "Dhoon Foundation, New Delhi", awardDate: "2025" },
  { year: 2025, name: "Smt Sapna Bhatnagar", category: "Navratan Ke Ratna Award", description: "Famous Singer", organization: "New Delhi", awardDate: "2025" },

  // ====================== 2024 ======================
  { year: 2024, name: "Chhanv Foundation", category: "Sh. F.B. Nigam Memorial Award", description: "", organization: "Lucknow", awardDate: "2024" },
  { year: 2024, name: "Ma Vaishno Devi Sewa Samiti", category: "Ratan-e-Hind", description: "", organization: "Patna", awardDate: "2024" },
  { year: 2024, name: "Gaurav Jan Kalyan Sansthan", category: "Sh. J.B. Jairath Memorial Award", description: "", organization: "Hardoi", awardDate: "2024" },
  { year: 2024, name: "Mr. Raghvender Singh", category: "Sh. Akash Saxena Memorial Young Achievers Award", description: "Helmet Man Of India", organization: "", awardDate: "2024" },
  { year: 2024, name: "Mrs. Madhu Mittal", category: "DayaRani Nari Sasktikaran Purskar", description: "", organization: "Jan Jagran Sansthan, Noida", awardDate: "2024" },
  { year: 2024, name: "Challengers Group", category: "Kunwar Swaroop Bhatnagar Smriti Shiksha Purskar", description: "", organization: "Noida", awardDate: "2024" },
  { year: 2024, name: "Mr. Somnath Raut", category: "Srimati Sonia Kohli Samajik \"Sahyog\" Vishesh Purskar", description: "", organization: "Thane", awardDate: "2024" },
  { year: 2024, name: "Master Tanish Bhadana", category: "Chitransh Om Prakash Kamthan Shiksha Purskar", description: "", organization: "SDS Inter College, Village Nawada, Dankaur", awardDate: "2024" },
  { year: 2024, name: "Mr. Gaurav Shukla", category: "Shri S.N. Sud SURRENDER NOT Award", description: "", organization: "Support Of Our Heroes", awardDate: "2024" },
  { year: 2024, name: "Master Vinayak Bahadur", category: "Shri S.N. Sud SURRENDER NOT Award", description: "", organization: "Meerut", awardDate: "2024" },
  { year: 2024, name: "Panch Aas Sewarth Samiti", category: "Navratan Special Award", description: "", organization: "Ghaziabad", awardDate: "2024" },
  { year: 2024, name: "Dr. Archna Srivastava", category: "Navratan Special Award", description: "", organization: "Indore", awardDate: "2024" },
  { year: 2024, name: "Mr. Santosh Singh", category: "Navratan Special Award", description: "", organization: "Lucknow", awardDate: "2024" },
  { year: 2024, name: "Miss Zakia Hyat", category: "Navratan Ke Ratna Award", description: "", organization: "Meerut", awardDate: "2024" },
  { year: 2024, name: "Master Gandhrav Rajouna", category: "Navratan Ke Ratna Award", description: "", organization: "Delhi", awardDate: "2024" },

  // ====================== 2023 ======================
  { year: 2023, name: "Mrs. Neha Singh", category: "Sh. F. B. NIGAM MEMORIAL AWARD", description: "", organization: "Hounsla Foundation, Lucknow", awardDate: "2023" },
  { year: 2023, name: "Laxmi Narayan Mandir Trust", category: "Sh. J.B. JAIRATH MEMORIAL AWARD", description: "", organization: "Noida", awardDate: "2023" },
  { year: 2023, name: "Ms. Rozina", category: "Sh. Akash Saxena Memorial Young Achievers Award", description: "", organization: "Powher", awardDate: "2023" },
  { year: 2023, name: "Mrs. Ila Pachauri", category: "Daya Rani Nari Sashktikaran Purskar", description: "", organization: "Motherhood Club", awardDate: "2023" },
  { year: 2023, name: "Niveda Foundation", category: "Kunwar Swaroop Bhatnagar Smriti Shiksha Purskar", description: "", organization: "Sector-31, Noida", awardDate: "2023" },
  { year: 2023, name: "Mr. Tejinder Singh Bedi", category: "Srimti Sonia Kohli Samajik” Sahyog” Vishesh Purskar", description: "", organization: "Sector-137", awardDate: "2023" },
  { year: 2023, name: "Ms. Dolly & Dr. Atul Chaudhary", category: "Rajkumari Cahndra Rikh Memorial Raj Sevak Award", description: "", organization: "Sector-82, Noida", awardDate: "2023" },
  { year: 2023, name: "Mr. Pankaj Sharma", category: "Navratan Award", description: "", organization: "Dadda Foundation, Sector-66, Noida", awardDate: "2023" },
  { year: 2023, name: "Kalyan NGO", category: "Navratan Award", description: "", organization: "New Delhi", awardDate: "2023" },
  { year: 2023, name: "Mrs. Deepa Devi", category: "Navratan Award", description: "", organization: "Hindrise Social Welfare Foundation, Sector-12, Noida", awardDate: "2023" },
  { year: 2023, name: "Mr. Pradeep Vohra", category: "Navratn Super Corona Award", description: "", organization: "Sector-22, Noida", awardDate: "2023" },
  { year: 2023, name: "Mrs. Poonam Deewan", category: "Navratan Special Social Welfare Award", description: "", organization: "", awardDate: "2023" },
  { year: 2023, name: "Miss Ikra Saifi", category: "Chitransh Om Prakash Kamthan Shiksha Award", description: "", organization: "B.R. Public Inter College, Parthla, Noida", awardDate: "2023" },

  // ====================== 2022 ======================
  { year: 2022, name: "Mrs. Akta Sehgal", category: "SH. F.B. NIGAM MEMORIAL AWARD", description: "", organization: "Motherhood Club, Noida", awardDate: "2022" },
  { year: 2022, name: "Mr. Ramakant Agrawal", category: "SHJB JAIRATH MEMORIAL AWARD", description: "", organization: "Helping Hands Mumbai", awardDate: "2022" },
  { year: 2022, name: "Mr. Dinesh Pandey", category: "Sh. Akash Saxena Memorial Young Achievers Award", description: "", organization: "Hamara Kata Noida", awardDate: "2022" },
  { year: 2022, name: "Mrs. Shail Mathur", category: "Daya Rani Nari Sashktikaran Purskar", description: "", organization: "TREE", awardDate: "2022" },
  { year: 2022, name: "Aayom Welfare Society", category: "Kunwar Swaroop Bhatnagar Smriti Shiksha Purskar", description: "", organization: "Fatehpur", awardDate: "2022" },
  { year: 2022, name: "Mr. Ratnesh Kumar", category: "SRIMATI SONIA KOHLI SAMAJIK SAHYOG VISHESH PURASKAR", description: "", organization: "Barabar", awardDate: "2022" },
  { year: 2022, name: "Mrs. Kavita Kumar", category: "Navratan Award", description: "", organization: "Dhoon Foundation Delhi", awardDate: "2022" },
  { year: 2022, name: "Search My Child Foundation", category: "Navratan Award", description: "", organization: "Vaishali", awardDate: "2022" },
  { year: 2022, name: "Mrs. Sucheta and Hambir Singh", category: "Navratan Award", description: "", organization: "Guna MP", awardDate: "2022" },
  { year: 2022, name: "Udaan Welfare Trust", category: "Navratan Award", description: "", organization: "Faridabad", awardDate: "2022" },
  { year: 2022, name: "Col. Amitabh Amit", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "NEA", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Challengers Group", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Noida Lok Manch", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Mahila Shakti Samajik Samiti", category: "CORONA SUPER HEROES", description: "", organization: "Greater Noida", awardDate: "2022" },
  { year: 2022, name: "Sadhbhawana Sewa Sansthan", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Jan Jagriti Foundation", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Shaheed Bhagat Singh Sena", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Marwari Yuva Manch", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "MSME", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Helping Hands-Noida", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Rama Foundation", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Niveda Foundation", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "NOVRA", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "Setu Foundation", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "NOFAA", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },
  { year: 2022, name: "SEFI", category: "CORONA SUPER HEROES", description: "", organization: "", awardDate: "2022" },

  // ====================== 2019 ======================
  { year: 2019, name: "Resident of Village Majalpur", category: "Shri F. B. Nigam Memorial Award", description: "", organization: "Hapur", awardDate: "2019" },
  { year: 2019, name: "Shri Updesh Srivastava", category: "Navratan Shri Shyam Sunder Goel Memorial Award", description: "", organization: "Noida", awardDate: "2019" },
  { year: 2019, name: "Shri Prashant Pal", category: "Navratan Sardar Bhag Singh Memorial Award", description: "", organization: "Pure India Trust, Jaipur", awardDate: "2019" },
  { year: 2019, name: "Mrs. Shweta Bharti", category: "Navratan Shri Ram Anugrah Narayan Memorial Women Empowerment Award", description: "", organization: "Noida", awardDate: "2019" },
  { year: 2019, name: "Shri Rajan Tomar", category: "Shri Akash Saxena Memorial Young Achiever Award", description: "", organization: "Village Rohillapur, Noida", awardDate: "2019" },
  { year: 2019, name: "Shri Alok Mishra", category: "Smt. Saroj Bhatia Memorial Award", description: "", organization: "Sai Aas Trust, Delhi", awardDate: "2019" },
  { year: 2019, name: "Shri Annu Khan", category: "Shri J. B. Jairav Memorial Award", description: "", organization: "NEFOMA, Greater Noida", awardDate: "2019" },
  { year: 2019, name: "Shri Amit Sharma", category: "Shri Kunwar Swaroop Bhatnagar Memorial Education Award", description: "", organization: "Muzaffarnagar", awardDate: "2019" },
  { year: 2019, name: "Friends Forever Group", category: "Smt. Sonia Kohli Memorial Social Cooperation Special Award", description: "", organization: "Lakhimpur Kheri: Shri Rishabh Tyagi, Shri Rajpal Singh, Shri Neeraj Mishra", awardDate: "2019" },
  { year: 2019, name: "Chitransh Om Prakash Kamthan Education Award Recipient", category: "Chitransh Om Prakash Kamthan Education Award", description: "", organization: "", awardDate: "2019" },

  // ====================== 2018 ======================
  { year: 2018, name: "Shri Romeo James", category: "Navratan Legend Award", description: "Indian Hockey Coach and Olympian", organization: "", awardDate: "2018" },
  { year: 2018, name: "Ms. Sudha Kumari", category: "Shri F. B. Nigam Memorial Award", description: "", organization: "West Roots, Noida", awardDate: "2018" },
  { year: 2018, name: "Mrs. Kalyani V.", category: "Navratan Shri Shyam Sunder Goel Memorial Award", description: "", organization: "Dwarka, New Delhi", awardDate: "2018" },
  { year: 2018, name: "Mrs. Archana and Wing Commander Ashish Saxena", category: "Navratan Sardar Bhag Singh Memorial Award", description: "", organization: "Akash Memorial Charitable Trust, Noida", awardDate: "2018" },
  { year: 2018, name: "Mrs. Aarti Srivastava", category: "Navratan Shri Ram Anugrah Narayan Memorial Women Empowerment Award", description: "", organization: "Lakhimpur Kheri", awardDate: "2018" },
  { year: 2018, name: "Shri Sonu Shukla", category: "Navratan Smt. Chandra Devi Memorial Award", description: "", organization: "Lakhimpur Kheri, Uttar Pradesh", awardDate: "2018" },
  { year: 2018, name: "Dr. Vivek Dixit", category: "Smt. Saroj Bhatia Memorial Award", description: "", organization: "Department of Orthopedics, All India Institute of Medical Sciences", awardDate: "2018" },
  { year: 2018, name: "Dr. Yatendra Kulshreshtha", category: "Shri J. B. Jairath Memorial Award", description: "", organization: "Kulshreshtha Cancer Care Charitable Trust, Noida", awardDate: "2018" },
  { year: 2018, name: "Shri Gautam Pal", category: "Shri Kunwar Swaroop Bhatnagar Memorial Education Award", description: "", organization: "Harsh Specially Abled Care Foundation, Meerut", awardDate: "2018" },
  { year: 2018, name: "Dr. D. D. Arora", category: "Navratan Award", description: "", organization: "A-276, Sector-46, Noida", awardDate: "2018" },
  { year: 2018, name: "Smt. Sonia Kohli Memorial Social Cooperation Special Award Recipient", category: "Smt. Sonia Kohli Memorial Social Cooperation Special Award", description: "", organization: "", awardDate: "2018" },

  // ====================== 2017 ======================
  { year: 2017, name: "Federation of Noida Resident Welfare Associations", category: "Navratan Legend Award", description: "", organization: "", awardDate: "2017" },
  { year: 2017, name: "Shri Ravi Prakash", category: "Shri F. B. Nigam Memorial Award", description: "President", organization: "Samarpan Foundation Trust, Shanti Samiti Kushth Ashram, Tahirpur, Delhi – 110095", awardDate: "2017" },
  { year: 2017, name: "Mrs. Neelu Khanna", category: "Navratan Shri Shyam Sunder Goel Memorial Award", description: "", organization: "Inner Wheel Club, Sector-50, Noida", awardDate: "2017" },
  { year: 2017, name: "Dr. Naresh Kumar", category: "Navratan Sardar Bhag Singh Memorial Award", description: "Director", organization: "M.S.S. Hospital, Pitampura, New Delhi", awardDate: "2017" },
  { year: 2017, name: "Mrs. Darshana Mishra", category: "Navratan Shri Ram Anugrah Narayan Memorial Women Empowerment Award", description: "", organization: "Sector-66, Noida", awardDate: "2016" }, // Note: PDF says 2016, but in 2017 ceremony
  { year: 2017, name: "Shri Mrigank Shekhar Upadhyay", category: "Navratan Smt. Chanda Devi Memorial Award", description: "Founder", organization: "Yes for Social Change, Lakhimpur Kheri, Uttar Pradesh", awardDate: "2017" },
  { year: 2017, name: "Shri Jaspal Singh Kalra", category: "Smt. Prakash Devi Memorial Award", description: "", organization: "Shaheed Bhagat Singh Nishswarth Seva Samiti, Lakhimpur Kheri", awardDate: "2017" },
  { year: 2017, name: "Ms. Salma Francis", category: "Smt. Saroj Bhaticha Memorial Award", description: "", organization: "A-109, Madhu Vihar, New Delhi", awardDate: "2017" },
  { year: 2017, name: "Dr. Naresh Bhatia", category: "Shri J. B. Jairath Memorial Award", description: "", organization: "Sector-23, Noida", awardDate: "2017" },
  { year: 2017, name: "Shri Ved Prakash Rastogi", category: "Shri Kunwar Swaroop Bhatnagar Memorial Education Award", description: "", organization: "Bal Sanskar Kendra, Vasundhara, Ghaziabad", awardDate: "2017" },
  { year: 2017, name: "Shri Parvez Ali", category: "Navratan Award", description: "", organization: "Khajuri, Meerut", awardDate: "2017" },

  // ====================== 2016 ======================
  { year: 2016, name: "Noida Entrepreneurs Association (NEA)", category: "Navratan Legend Award", description: "", organization: "", awardDate: "2016" },
  { year: 2016, name: "Shri Anil Singh", category: "Shri F. B. Neelam Memorial Award", description: "", organization: "Sadbhavana Seva Sansthan", awardDate: "2016" },
  { year: 2016, name: "Shri R. M. Sanjeevi", category: "Navratan Shyam Sunder Goel Memorial Award", description: "", organization: "Center for Empowerment and Initiative", awardDate: "2016" },
  { year: 2016, name: "Mrs. (Dr.) Jyotsna Chatterjee", category: "Navratan Sardar Bhan Singh Memorial Award", description: "", organization: "Joint Women Programme", awardDate: "2016" },
  { year: 2016, name: "Mrs. Rekha Sharma", category: "Navratan Shri Ram Anugrah Narayan Memorial Women Empowerment Award", description: "", organization: "Sankalp India Foundation", awardDate: "2016" },
  { year: 2016, name: "Mrs. Kusum Singh", category: "Navratan Smt. Chandra Devi Memorial Award", description: "Social Worker", organization: "", awardDate: "2016" },
  { year: 2016, name: "Mrs. Chandni Bedi Taneja", category: "Smt. Prakash Devi Memorial Award", description: "", organization: "Navjyoti India Foundation", awardDate: "2016" },
  { year: 2016, name: "Dr. T. N. Dudha", category: "Navratan Award", description: "Renowned Physician", organization: "", awardDate: "2016" },
  { year: 2016, name: "Mrs. Harkirat Chaudhary", category: "Navratan Award", description: "", organization: "Inner Wheel Club", awardDate: "2016" },
  { year: 2016, name: "Mrs. Aarti Sharma", category: "Navratan Award", description: "", organization: "Rashtriya Lokadhikar Sangathan", awardDate: "2016" },
  { year: 2016, name: "Mrs. Maya Devi", category: "Navratan Award", description: "Social Worker", organization: "", awardDate: "2016" },
  { year: 2016, name: "Shri Anoop Khanna", category: "Smt. Sonia Kohli Memorial Special Award for Social Cooperation", description: "", organization: "Dadi Ki Rasoi", awardDate: "2016" },
  { year: 2016, name: "Shri Deepak Gaur", category: "Smt. Sonia Kohli Memorial Special Award for Social Cooperation", description: "Vriksh Purush – “Tree Man”", organization: "", awardDate: "2016" },
  { year: 2016, name: "Master Chandan Kumar", category: "Chitransh Om Prakash Kamthan Education Award", description: "For securing the highest marks in the Uttar Pradesh Board Class 10 Examination (2015)", organization: "Sangat Green Public Inter College, District Gautam Buddh Nagar", awardDate: "2016" },

  // ====================== 2015 ======================
  { year: 2015, name: "Shri Sant Ram Singh Rathi", category: "Shri F. B. Nigam Memorial Award", description: "Educationist", organization: "Village Ranoli Latifpur, Dadri", awardDate: "2015" },
  { year: 2015, name: "Agewell Foundation", category: "Navratan Shyam Sunder Goel Memorial Award", description: "Dedicated to senior citizens", organization: "Delhi", awardDate: "2015" },
  { year: 2015, name: "Shri Himanshu Rath", category: "Navratan Shyam Sunder Goel Memorial Award", description: "", organization: "", awardDate: "2015" },
  { year: 2015, name: "Smt. Asha Gupta and Dr. I. S. Gupta", category: "Navratan Sardar Bhag Singh Memorial Award", description: "Educationists", organization: "Lakshmi Narayan Temple", awardDate: "2015" },
  { year: 2015, name: "Ms. Devika", category: "Navratan Shri Ram Anugrah Narayan Memorial Women Empowerment Award", description: "Young activist against child and women sexual abuse", organization: "Jaipur", awardDate: "2015" },
  { year: 2015, name: "Dr. Om Prakash Bhatnagar", category: "Navratan Smt. Chandra Devi Memorial Award", description: "For his unparalleled services in the field of health", organization: "Udaipur", awardDate: "2015" },
  { year: 2015, name: "Dr. P. S. Chauhan", category: "Shri Dwarkadas Agarwal Memorial Award", description: "President, Prani Sanstha, Noida – For safeguarding eyesight", organization: "Noida", awardDate: "2015" },
  { year: 2015, name: "Shri Om Prakash Aneja", category: "Navratan Award", description: "Educationist", organization: "Noida", awardDate: "2015" },
  { year: 2015, name: "Dr. Yashpal Bhanot", category: "Navratan Award", description: "For promoting health awareness", organization: "Noida", awardDate: "2015" },
  { year: 2015, name: "Shri Francis Masih", category: "Smt. Sonia Kohli Memorial Special Social Cooperation Award", description: "Social Worker", organization: "Greater Noida", awardDate: "2015" },
  { year: 2015, name: "Master Shikhar Mishra", category: "Chitransh Om Prakash Kamthan Education Award", description: "For securing the highest marks in the Uttar Pradesh Board Class 10 Examination in 2014; awarded with a cash prize of ₹5100 and a ceremonial stole", organization: "Shivraj Inter College, Bilaspur, District Gautam Budh Nagar", awardDate: "2015" },
  { year: 2015, name: "Ms. Shreya Basu", category: "Navratan Ke Ratna Award", description: "For remarkable performance at the national level in singing", organization: "", awardDate: "2015" },
  { year: 2015, name: "Master Moksh Gulati", category: "Navratan Ke Ratna Award", description: "For establishing his identity in Sufi singing at the national level", organization: "", awardDate: "2015" },
  { year: 2015, name: "Shri Mamur Chandra", category: "Navratan Ke Ratna Award", description: "For establishing his identity in freestyle dance", organization: "", awardDate: "2015" },
  { year: 2015, name: "Shri Sunil Malik", category: "Navratan Ke Ratna Award", description: "For making his mark in film singing despite his age", organization: "", awardDate: "2015" },
  { year: 2015, name: "Shri Sunil Yadav", category: "Navratan Ke Ratna Award", description: "For gaining national recognition in the field of music", organization: "Lakhimpur Kheri", awardDate: "2015" },

  // ====================== 2014 ======================
  // Note: PDF seems unrelated to awardees (Verma Committee report), so no entries added for 2014
  // ====================== 2014 ======================
{ year: 2014, name: "Shri Sukhbir Singh Yadav (Sukhbir Pehalwan)", category: "Shri F. B. Nigam Memorial Award", description: "After retiring from the army, opened a traditional wrestling arena (Akhada) in village Sarfabad to promote physical and mental health among youth. Led campaign against gutkha and tobacco with village panchayats, resulting in state ban in October. Also promoted dowry-free marriages. Trained wrestlers who won international and national medals.", organization: "Village Sarfabad", awardDate: "2014" },
{ year: 2014, name: "Shri Saleemuddin Solanki", category: "Navratan Shyam Sundar Goyal Memorial Award", description: "46-year-old resident of village Achheja, Dankaur; National General Secretary of Human Rights Revolution. Fought for common people's rights, recovered bribe money, filed RTIs, and got officials punished for corruption.", organization: "Village Achheja, Dankaur", awardDate: "2014" },
{ year: 2014, name: "Mrs. N. Sujata", category: "Navratan Sardar Bhag Singh Memorial Award", description: "Director of Shankara Special School, Noida; specialist in hearing and speech impairment. Trained hundreds of disabled individuals for independent living. Organized 100+ programs for special children and vocational training for women.", organization: "Shankara Special School, Noida", awardDate: "2014" },
{ year: 2014, name: "Mrs. Vimlesh Sharma", category: "Shri Ram Anugrah Narayan Memorial Navratan Women Empowerment Award", description: "First woman Gram Pradhan of Nithari village, Sector-31, Noida. Transformed the village through pensions for disabled, school admissions for poor children, employment workshops for youth/women, and bank loans for small businesses. Campaigned against plastic waste and antisocial elements.", organization: "Nithari Village, Sector-31, Noida", awardDate: "2014" },
{ year: 2014, name: "Shri Vikrant Tongad", category: "Shrimati Kshama Gaud Memorial Navratan Award", description: "24-year-old founder of Social Action for Forest and Environment, village Manauta, Greater Noida. Postgraduate in Sociology; fought groundwater wastage via PILs, leading to NGT restrictions on builders. Relocated polluting industries and promoted water harvesting.", organization: "Social Action for Forest and Environment, Village Manauta, Greater Noida", awardDate: "2014" },
{ year: 2014, name: "Mrs. Harpreet Ahluwalia", category: "Shrimati Chandra Devi Memorial Navratan Award", description: "MBA holder from Sector-38, Noida; empowered 40+ potter families by designing decorative clay products for sales. Educated girls from these families by funding school fees. Connected 42 families from 8 states (UP, WB, Bihar, Odisha, TN, Haryana, Kerala, Karnataka).", organization: "Sector-38, Noida", awardDate: "2014" },
{ year: 2014, name: "Mrs. Radha Sharma", category: "Shri Dwarka Das Agrawal Memorial Award", description: "54-year-old founder of Shri Radhe Seva Samiti; former school teacher for 26 years. Visited 300+ families to spread national/religious values. Organized Sunderkand recitations and bhajan sandhyas; funds support education for fatherless girls (e.g., one completed B.Ed. with 75% marks).", organization: "Shri Radhe Seva Samiti, Noida", awardDate: "2014" },
{ year: 2014, name: "Shri Nipun Malhotra", category: "Navratan Award", description: "Suffers from Osteogenesis Imperfecta; topped APJ School, Noida; St. Stephen’s College (Anil Wilson Scholarship); graduated/post-graduated in Economics from Delhi School of Economics. Director at Nipman Fasteners; founded Nipman Foundation with mother for disabled welfare (health camps, tricycles, livelihood aids). Motivational speaker and writer.", organization: "Nipman Foundation, Noida", awardDate: "2014" },
{ year: 2014, name: "Dr. Prakash Chandra Bhardwaj (Dr. P. C. Bhardwaj)", category: "Navratan Award", description: "75-year-old ophthalmologist; post-retirement, serves at charitable clinics (Sai Temple Sector-40 Noida, Gurudwara Rakab Ganj Delhi, Swaminarayan Temple Akshardham Delhi, Noida Diabetic Forum). Organizes lectures/medical camps; treats economically weak patients free or low-cost.", organization: "Noida", awardDate: "2014" },
{ year: 2014, name: "Shri Shyam Kumar", category: "Navratan Award", description: "Director of Natsamrat Theatre Group, New Delhi; 17 years in theatre with 1,700+ performances. Provided platforms to hidden talents in theatre/music; many became national/Bollywood stars due to his nurturing.", organization: "Natsamrat Theatre Group, New Delhi", awardDate: "2014" },
{ year: 2014, name: "Shri Mahesh Sharma", category: "Mrs. Sonia Kohli Social “Sahayog” Navratan Special Award", description: "Regional Transport Inspector (RTO), Noida; known for soft-spoken, friendly approach. Assists all (elderly, women, youth, poor, wealthy) equally and efficiently, turning official duties into social service.", organization: "RTO, Noida", awardDate: "2014" },
{ year: 2014, name: "Ms. Nikita", category: "Chitransh Omprakash Kamthan Education Award", description: "Secured highest marks in Gautam Buddh Nagar district in Uttar Pradesh Board Class 10 exam 2013.", organization: "M.C. Gopichand Inter College, Village Khedi, Greater Noida", awardDate: "2014" },
{ year: 2014, name: "Dr. Mukesh Daksh", category: "Navratan ke Ratna (Gems of Navratan)", description: "Remarkable performance in the field of poetry recitation.", organization: "Dadri", awardDate: "2014" },
{ year: 2014, name: "Shri Dhorendra Pratap Singh", category: "Navratan ke Ratna (Gems of Navratan)", description: "Roll Ball sports player, for outstanding performance at the international level.", organization: "", awardDate: "2014" },
{ year: 2014, name: "Ms. Shreya Mangal", category: "Navratan ke Ratna (Gems of Navratan)", description: "Skating and skating dance player, for remarkable performance at the national level.", organization: "Dadri", awardDate: "2014" },
{ year: 2014, name: "Ms. Medhavi Mangal", category: "Navratan ke Ratna (Gems of Navratan)", description: "Skating and skating dance player, for remarkable performance at the national level.", organization: "Dadri", awardDate: "2014" },
{ year: 2014, name: "Shri Akar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 87.2% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Nitin Kumar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 85.2% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Akit Yadav", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 83.4% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ramesh Kumar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 82.4% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Shamshad Balam", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 81% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Tejveer Singh", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 80.0% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Jitender Kumar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 80.4% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Kasmendra Kumar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 80.2% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ravikant Kumar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 79.6% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Satish Sharma", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 79.4% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ms. Rashi Kumari", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 79.4% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Anit Patroli", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 79% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ritesh Kumar Dubey", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 78.8% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ms. Madhu", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 78.4% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Shakti Kumar Rai", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 77.8% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ms. Preeti Kanojia", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 77.2% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Isai Lal Tandon", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 77.2% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ashish", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 76.6% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Anil Kumar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 76.6% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Vipin Pandey", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 76.6% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Rishabh Saxena", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 75.8% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Shubham", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 75.8% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ms. Kiran", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 75.0% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },
{ year: 2014, name: "Ms. Sarita Nagar", category: "Shri Ram Anugrah Narayan Special Education Award", description: "Secured 75.2% in Uttar Pradesh Board Class 12 exam 2013 (75%+ threshold).", organization: "Government Inter College, Noida", awardDate: "2014" },


  // ====================== 2013 ======================
  { year: 2013, name: "Father Josan Tharakan John", category: "Shri F. B. Nigam Memorial Award", description: "Chief Trustee", organization: "Board for Research and Development", awardDate: "2013" },
  { year: 2013, name: "Thakur Bhupinder Singh Bhati", category: "Navratna Shyam Sunder Goel Memorial Award", description: "Founder", organization: "Dharmarth Jan Seva Samiti, Dankaur", awardDate: "2013" },
  { year: 2013, name: "Colonel Virendra Sahay Verma", category: "Navratna Sardar Bhag Singh Memorial Award", description: "Vice President", organization: "India–Pakistan Soldiers Initiative for Peace", awardDate: "2013" },
  { year: 2013, name: "Ms. Rashi Anand", category: "Shri Ram Anugrah Narayan Memorial Women Empowerment Navratna Award", description: "Founder", organization: "Lakshyam", awardDate: "2013" },
  { year: 2013, name: "Shri O. P. Goel", category: "Mrs. Kshama Gaur Memorial Navratna Award", description: "Educationist and Prominent Social Worker", organization: "Noida", awardDate: "2013" },
  { year: 2013, name: "Shri Dinesh Bhati", category: "Mrs. Chandra Devi Memorial Navratna Award", description: "Life Saver", organization: "Patla Kheda, Gautam Buddha Nagar", awardDate: "2013" },
  { year: 2013, name: "Siddharth Memorial Charitable Trust", category: "Navratna Special Award", description: "", organization: "Sector-30, Noida", awardDate: "2013" },
  { year: 2013, name: "Rotarian Inder Mohan Kumar", category: "Navratna Award", description: "", organization: "Noida", awardDate: "2013" },
  { year: 2013, name: "Mrs. Sharmila Thakur", category: "Navratna Award", description: "", organization: "Dilshad Colony, Delhi", awardDate: "2013" },
  { year: 2013, name: "Master Mohit Singh", category: "Chitransh Om Prakash Kamthan Shiksha Award", description: "For securing high marks in the Class 10 Uttar Pradesh Board Examination in the year 2012. Along with the Education Award, a cash prize of ₹3100/- and an angvastram (ceremonial stole) was presented", organization: "Sangat Green Inter College, Dairy Machha, Dadri, District Gautam Buddha Nagar", awardDate: "2013" },
  { year: 2013, name: "Navratan Ke Ratna Recipient", category: "Navratan Ke Ratna", description: "", organization: "", awardDate: "2013" },

  // ====================== 2012 ======================
  { year: 2012, name: "Mr. Sharanjiv", category: "Navratna Legend Award", description: "Managing Director", organization: "Real Group, Mumbai", awardDate: "2012" },
  { year: 2012, name: "Rotarian Cathedral Cathedral", category: "Mr. F.B. Nigam Memorial Award", description: "Chief Trustee", organization: "Khoala Bhola Blood Bank", awardDate: "2012" },
  { year: 2012, name: "Marwari Yuva Manch", category: "Navratna Shyamsunder Goyal Memorial Award", description: "", organization: "Noida", awardDate: "2012" },
  { year: 2012, name: "JCC Air Pressure Team", category: "Navratna Sardar Bhag Singh Memorial Award", description: "", organization: "Sector 21, Noida", awardDate: "2012" },
  { year: 2012, name: "Mrs. Mamta Tiwari", category: "Navratna Shri Ram Anugrah Narayan Memorial Women’s Empowerment Award", description: "President", organization: "Brahmani Mahila Seva Samiti, Noida", awardDate: "2019" }, // Note: PDF says 2019, but in 2012 ceremony
  { year: 2012, name: "Mr. Irshad Mirza", category: "Navratna Award", description: "", organization: "Mirza Foundation, Kanpur", awardDate: "2012" },
  { year: 2012, name: "Mr. B.B. Pant", category: "Navratna Award", description: "", organization: "Sector 25, Vihar", awardDate: "2012" },
  { year: 2012, name: "Mr. Ajit Singh Tomar", category: "Navratna Award", description: "", organization: "Village Rohilla Pur", awardDate: "2012" },
  { year: 2012, name: "Mrs. Shobhana Radhakrishnan", category: "Navratna Award", description: "", organization: "Janakpuri, New Delhi", awardDate: "2012" },
  { year: 2012, name: "Guru Jiteshwar Jeet Ji", category: "Navratna Award", description: "", organization: "Mayur Vihar–1, New Delhi", awardDate: "2012" },
  { year: 2012, name: "Noida–Greater Noida Ka Gaurav (Facebook)", category: "Navratna Award", description: "", organization: "Mr. Ranpal Awana, Director", awardDate: "2012" },
  { year: 2012, name: "Master Bhogendra Sharma", category: "Chitransh Om Prakash Kamthan Shiksha Award", description: "On securing the highest marks in Class 10, Uttar Pradesh Board Examination, District Gautam Buddha Nagar, in the year 2011. Along with the Education Award, a cash prize of ₹3100/- and an angvastram (ceremonial stole) was presented", organization: "Shri Ram Inter College, Village Kaimrela", awardDate: "2012" },
  { year: 2012, name: "Divakar Sharma", category: "‘Navratan Ke Ratna’", description: "Music", organization: "", awardDate: "2012" },

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
  { year: 2011, name: "Mrs. Madhu Chandra", category: "‘Navratna Samman’", description: "", organization: "Lotus Valley International School", awardDate: "2011" },
  { year: 2011, name: "Mrs. Renu Singh", category: "‘Navratna Samman’", description: "", organization: "Amity International School", awardDate: "2011" },
  { year: 2011, name: "Dr. Ashok Pandey", category: "‘Navratna Samman’", description: "", organization: "Colonial School", awardDate: "2011" },
  { year: 2011, name: "Mr. Alok Srivastava", category: "‘Navratna Samman’", description: "", organization: "Boda", awardDate: "2011" },
  { year: 2011, name: "Mr. P. Peeraviv ‘Rind’", category: "‘Navratna Samman’", description: "", organization: "", awardDate: "2011" },
  { year: 2011, name: "Master Lavkush Sharma", category: "Chitransh Om Prakash Kamthan Education Award", description: "Credit card Rs. 3100 and balance to receive the Education Award at the Secretariat Board 2010 (30 PRs) in Gautam Buddha Nagar district", organization: "Vikramabar Association Inter Bonds, CORE", awardDate: "2011" },

  // ====================== 2010 ======================
  { year: 2010, name: "Shri V. Sam Singh", category: "Shri F.B. Nigam Memorial Award", description: "", organization: "Grandfather and Grandmother College, Anupshahr", awardDate: "2010" },
  { year: 2010, name: "Shri Natthi Ram Sharma", category: "Navratna Shyamsunder Goyal Memorial Award", description: "", organization: "Bagalpur Jewar", awardDate: "2010" },
  { year: 2010, name: "Commodore Lokesh Batra", category: "Navratna Sardar Bhag Singh Memorial Award", description: "Information and Empowerment Activist", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mrs. Meena Oon", category: "Navratna Shri Ram Anugrah Narayan Memorial Women's Empowerment Award", description: "", organization: "Pranan Fon", awardDate: "2010" },
  { year: 2010, name: "Mrs. Meena Om", category: "Navratna Shri Ram Grace Narayan Smriti Women's Empowerment Award", description: "", organization: "Pranam Foundation", awardDate: "2010" },
  { year: 2010, name: "Dr. Narendravriva", category: "'Navratna Award'", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mr. Krishna Chandra Pant", category: "'Navratna Award'", description: "", organization: "Keshav Sankirtan Mandal", awardDate: "2010" },
  { year: 2010, name: "Citizen Environment Improvement Society", category: "'Navratna Award'", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mrs. and Mr. S.L. Sharma", category: "'Navratna Bravery Award'", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Tata Tea Limited Institute", category: "'Navratna Special Award'", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Idea Cellular Limited Institute", category: "'Navratna Special Award'", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Mr. Musafir Raja", category: "Navratna Samman", description: "", organization: "I AS", awardDate: "2010" },
  { year: 2010, name: "Mrs. Amita Sachdev", category: "Navratna Samman", description: "", organization: "", awardDate: "2010" },
  { year: 2010, name: "Ms. Palak Garg", category: "Chitransh Om Prakash Kamthan Education Award", description: "Education Award and cash prize of Rs. 3100 in Booth Board 2009 (30 PR) in Gautamvad Nagar district", organization: "Vidhammar Florida Ramamurthy Inter Laboratory, Dammakor", awardDate: "2010" },

  // ====================== 2009 ======================
  { year: 2009, name: "Ritu Sinha", category: "Mr. F.B. Nigam Memorial Award", description: "Wife", organization: "", awardDate: "May 10, 2009" },
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
  { year: 2009, name: "Best achiever in Hindi and Sanskrit language board exams among 2500", category: "Chitransh Om Prakash Kamthan Education Award", description: "", organization: "", awardDate: "May 10, 2009" },

  // ====================== 2008 ======================
  { year: 2008, name: "Sidhya Ashramalaya, ACC Convent School", category: "Shri F.V. Mag Memorial Award", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Shri Parveen Sharma", category: "Navratna Shyam Sundar Goyal Memorial Award", description: "National President", organization: "Divya Prem Seva Mission", awardDate: "April 5, 2008" },
  { year: 2008, name: "Tuffail Chaudhary", category: "Navratna Award", description: "Editor", organization: "Laffz Magazine", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Amit Khemka", category: "Navratna Award", description: "Senior Sportsperson", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Sheeshpal", category: "Navratna Award", description: "Senior Journalist", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Diabetic Forum, Bharat Vikas Parishad, Unit", category: "Navratna Special Award", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Chhotelal Chauhan", category: "Navratna Award", description: "National Teacher Award Winner", organization: "Polisi Government Primary School, Glasspur", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mrs. Mohina Dhar", category: "Navratna Award", description: "National Teacher Award Winner", organization: "Polisi Amity School", awardDate: "April 5, 2008" },
  { year: 2008, name: "Meher Legha", category: "National Child Bravery Award Winner", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Mr. Jagmal Singh", category: "President's Medal Winner", description: "", organization: "", awardDate: "April 5, 2008" },
  { year: 2008, name: "Students who passed the Hindi and Sanskrit board exams", category: "Chitransh Om Prakash Kamthan Education Award", description: "Awarded a prize of ₹2,500", organization: "", awardDate: "April 5, 2008" },

  // ====================== 2007 ======================
  { year: 2007, name: "Mr. Mahesh Saxe", category: "Shri F.B.Nigam Memorial Award", description: "", organization: "Epic Lok Manch", awardDate: "2007" },
  { year: 2007, name: "Shri Math Maker", category: "Navratna Shyam Sunder Goyal Memorial Award", description: "General Secretary", organization: "Indian Festival Organizing Committee", awardDate: "2007" },
  { year: 2007, name: "Mrs. Nadira Razzaq", category: "Navratna Award", description: "Founder", organization: "Saksham School, Nithari", awardDate: "2007" },
  { year: 2007, name: "Dr. C.B. Jha", category: "Navratna Award", description: "President", organization: "Flour Market Association", awardDate: "2007" },
  { year: 2007, name: "Mr. Subhash Chandel Chacha Hindustani", category: "Navratna Award", description: "Social Worker and Renowned Cricket Spectator", organization: "Greater Noida", awardDate: "2007" },
  { year: 2007, name: "Mr. Ashok Randhawa", category: "Navratna Special Award", description: "President", organization: "Mini Market Association, Sarojini Nagar, Delhi", awardDate: "2007" },
  { year: 2007, name: "Mr. Pankaj Jindal", category: "Navratna Special Award", description: "President", organization: "National Club Central", awardDate: "2007" },
  { year: 2007, name: "Mr. M.I. Khan", category: "Navratna Award", description: "IPS, Deputy Inspector General", organization: "Border Security Force", awardDate: "2007" },
  { year: 2007, name: "President’s Medal Winner", category: "President’s Medal Winner", description: "", organization: "", awardDate: "2007" },
  { year: 2007, name: "Student scoring high marks in Hindi and Sanskrit in the 10th board examination", category: "Chitransh Om Prakash Kamthan Education Award", description: "Reaction Award: Rs. 2500", organization: "", awardDate: "2007" },
  { year: 2007, name: "Diwakar Sharma", category: "Little Tansen Award", description: "", organization: "", awardDate: "2007" },

  // ====================== 2006 ======================
  { year: 2006, name: "Mr. Mrs. Usha Thakur", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "Sector 31", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mrs. Sonia Kohli", category: "Mr. F.B. Nigam Memorial Award", description: "", organization: "Sector 44 Noida", awardDate: "March 10, 2006" },
  { year: 2006, name: "Rotarian Mr. A.C. Peter", category: "Navratna Award", description: "", organization: "", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. Ramakant Singh", category: "Navratna Award", description: "Handicapped Gyan Mandir", organization: "Sector 8", awardDate: "March 10, 2006" },
  { year: 2006, name: "Anjuman Muslimeen Gholia Committee", category: "Navratna Award", description: "", organization: "Sector 8", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mrs. Priyatama", category: "Navratna Special Award", description: "Renowned social worker", organization: "Sector 26", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. Abhiram Puranik", category: "Navratna Bravery Award", description: "", organization: "Nithari", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. Yasir Tanveer", category: "Navratna Sports Award", description: "Skate Rifle Shooting", organization: "Sector 40", awardDate: "March 10, 2006" },
  { year: 2006, name: "Kumari Vaishya Sinha", category: "Navratna Sports Award", description: "International Golfer", organization: "Sector 14A Noida", awardDate: "March 10, 2006" },
  { year: 2006, name: "Kumari Savita Hanspal", category: "Navratna Education Award", description: "Set a record by scoring the highest marks in the Indraprastha University B.Ed. exam", organization: "Sector 25", awardDate: "March 10, 2006" },
  { year: 2006, name: "Divya V.N. Khare", category: "Navratna Award", description: "Padma Vibhushan, Former Chief Justice", organization: "Sector 27", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. P.P. Rao", category: "Navratna Award", description: "Padma Bhushan", organization: "Sector 15A", awardDate: "March 10, 2006" },
  { year: 2006, name: "Kumari Sonal Chauhan", category: "Navratna Award", description: "International Beauty Pageant Winner", organization: "Sector 14", awardDate: "March 10, 2006" },
  { year: 2006, name: "Mr. G.K. Basu", category: "President’s Medal", description: "Excise and Customs Department", organization: "Sector 1", awardDate: "March 10, 2006" },

  // ====================== 2005 ======================
  { year: 2005, name: "Mr. Radha Singh", category: "Mr. F.B. Nigam Memorial Award Recipient", description: "", organization: "Sec. 37, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Mrs. Usha Bakshi", category: "Navratna Award Recipient", description: "", organization: "Sec. 21, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Mr. Krishna Kumar", category: "Navratna Award Recipient", description: "Public Relations", organization: "Sec. 19, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Sri Sathya Sai Seva Samiti", category: "Navratna Award Recipient", description: "", organization: "Sec. 21, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "I Help You Counter", category: "Navratna Award Recipient", description: "Government Hospital", organization: "Sec. 30, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Ms. Vaishya Sinha", category: "\"Navratna Sports Award\"", description: "Golf", organization: "Sector 14A, Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Ms. Bijendri Yadav", category: "\"Navratna Sports Award\"", description: "Half Marathon", organization: "Bhagatpur", awardDate: "March 12, 2005" },
  { year: 2005, name: "Noida Citizen Forum", category: "\"Navratna Special Award\"", description: "", organization: "Noida", awardDate: "March 12, 2005" },
  { year: 2005, name: "Dr. Kartal Haider", category: "National Padma Bhushan", description: "A recognized authority on Urdu", organization: "", awardDate: "2005" },
  { year: 2005, name: "Mr. B.P. Agarwal", category: "International Quality Award recipient", description: "Chairman", organization: "Surya Farms & Agro Products Ltd.", awardDate: "2005" },
  { year: 2005, name: "Mr. Rajesh Hasija", category: "National Teachers Award Recipient", description: "", organization: "Police A.P.J. School, 2004", awardDate: "2005" },
  { year: 2005, name: "Mr. N. K.", category: "President's Medal 2005 recipient", description: "Secretary, Supervisor Special Department, Uttar Pradesh Police", organization: "", awardDate: "2005" },
  { year: 2005, name: "Mr. Santosh Kumar Singh", category: "President's Medal 2005 recipient", description: "Chief Executive Officer, Customs and Excise Tax", organization: "", awardDate: "2005" },

  // ====================== 2004 ======================
  { year: 2004, name: "Shree Mahendr Saraayan", category: "Shree Eph. Bee. Nigam Smrti Puraskaar Praaptakarta", description: "", organization: "Saiktar-35, Noeda", awardDate: "March 13, 2004" },
  { year: 2004, name: "Shree Muft Khaleel Ahamad Kaasamee", category: "Shree Eph. Bee. Nigam Smrti Puraskaar Praaptakarta", description: "", organization: "Jaama Masjid, Noeda", awardDate: "March 13, 2004" },
  { year: 2004, name: "Yuva Shakti Sangathan", category: "Shree Eph. Bee. Nigam Smrti Puraskaar Praaptakarta", description: "", organization: "Daadaree", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mahaaveer Intaraneshanal", category: "Navaratn Praaptakarta", description: "", organization: "Saiktar-14, Noeda", awardDate: "March 13, 2004" },
  { year: 2004, name: "Shree Baaba Kaanadee", category: "Navaratn Praaptakarta", description: "Saahity", organization: "Sadarapur, Noeda", awardDate: "March 13, 2004" },
  { year: 2004, name: "Ku0 Trpti Paal", category: "Navaratn Praaptakarta", description: "Taaraakee Krda", organization: "Dee.Pee.Es. Noeda", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mr. Rajmani Tiwari", category: "Navratna Special Award", description: "For his exemplary contribution to the overall development of Noida in literary, social, cultural, and religious fields", organization: "", awardDate: "March 13, 2004" },
  { year: 2004, name: "Mr. Sushil Rajput", category: "Navratna Special Award", description: "For establishing Noida as a national leader in sports", organization: "", awardDate: "March 13, 2004" },
  { year: 2004, name: "Padma Shri Dr. S.C. Manchanda", category: "Government of India Navratna Award", description: "Cardiologist", organization: "Metro Hospital", awardDate: "March 13, 2004" },
  { year: 2004, name: "National Balshree Ms. Charu Joshi", category: "Government of India Navratna Award", description: "Kathak Dancer", organization: "Army Public School, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "National Balshree Master Sameer Rijutal", category: "Government of India Navratna Award", description: "Science", organization: "Modern School, Noida", awardDate: "March 13, 2004" },
  { year: 2004, name: "President's Medal recipient Singh Yadav", category: "Government of India Navratna Award", description: "", organization: "Customs and Excise", awardDate: "March 13, 2004" },
  { year: 2004, name: "President's Distinguished Service Medal recipient Mr. R.P. Gupta", category: "Government of India Navratna Award", description: "Personnel Officer", organization: "Noida", awardDate: "March 13, 2004" },

  // ====================== 2003 ======================
  { year: 2003, name: "Ms. Ajna Raj Gopalan", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Social workers honored by Navratna", organization: "Sai Kripa", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mrs. Nilima Mishra", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Social workers honored by Navratna", organization: "Shanti Niketan Old Age Home", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mrs. Asha Bishnoi", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Working for disabled children", organization: "", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mr. Bhumesh Sharma", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Social workers honored by Navratna", organization: "Dadri", awardDate: "March 9, 2003" },
  { year: 2003, name: "Rotarian Bhag Singh", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Social workers honored by Navratna", organization: "Tughlaqpur", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mr. Haji Ishtiaq", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Social workers honored by Navratna", organization: "Noida", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mrs. Rajni Kaul", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Educationist", organization: "", awardDate: "March 9, 2003" },
  { year: 2003, name: "Mr. Harinand Singh", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Founder of Dr. Vidyalaya", organization: "Sector 8, Noida", awardDate: "March 9, 2003" },
  { year: 2003, name: "Rotarian S.S. Goyal", category: "Shri F.B. Nigam Memorial Awards Ceremony", description: "Prominent social worker", organization: "", awardDate: "March 9, 2003" }
];

export default function AwardeesFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedYear, setSelectedYear] = useState('all');

  // Dropdown: 2025 to 2003 (descending order)
  const startYear = 2003;
  const endYear = 2025;
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

  const isCovidYear = selectedYear === '2020' || selectedYear === '2021';
  const filtered = isCovidYear
    ? []
    : (selectedYear === 'all'
        ? demoAwardees
        : demoAwardees.filter(item => item.year === Number(selectedYear)));

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
        .no-results, .covid-message {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          padding: 80px 20px;
          background: #f8f9fa;
          border-radius: 8px;
          margin: 20px auto;
          max-width: 600px;
        }
        .covid-message {
          color: #d32f2f;
          font-weight: 500;
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

        {isCovidYear ? (
          <div className="covid-message">
            No awardees for {selectedYear} due to the COVID-19 pandemic.
          </div>
        ) : filtered.length === 0 ? (
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