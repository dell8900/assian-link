const axios = require("axios");

const data = [
 {
  collegename:
   "GITAM Institute of Medical Sciences and Research, Visakhapatnam",
  established: "2015",
  collegetype: "Private",
  location: "Visakhapatnam, Andhra Pradesh",
  address:
   "Q9MF+JC5, GITAM Medical College Rd, Gandhi Nagar, Rushikonda, Visakhapatnam, Andhra Pradesh 530045",
  approval: ["UGC", "NAAC A++", "MCI", "WHO"],
  state: "Andhra Pradesh",
  city: "Visakhapatnam",
  affiliatedby: "GITAM (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "GITAM Institute of Medical Sciences and Research (GIMSR), established in 2015, is a constituent college of GITAM (Deemed to be) University. It is accredited with NAAC 'A++' grade and approved by UGC-MHRD, MCI, and WHO. GIMSR offers a range of undergraduate, postgraduate, and doctoral courses in medical sciences through nine departments. The institute is known for its academic excellence, scholarship support for underprivileged students, and 100% internship placement. It is located in Visakhapatnam, Andhra Pradesh and follows an English medium of instruction.",
  highlights: [
   "Established in 2015",
   "Globally recognized and approved by MCI and WHO",
   "NAAC A++ accredited",
   "Direct MBBS admission through NEET",
   "60% marks required in PCB",
   "English medium of instruction",
  ],
  image1: `https://lh3.googleusercontent.com/gps-cs-s/AB5caB9Gd
    0IK7mJ2lVXX1oOfCbrYvCAA_a0Z_6uRS3-cLlGZi6cdL
    RBqMuPs_dy4n04mMVQcltsvTEmNbvYMwq62teT9dT_
    uvOpxBADhE1nSSOFCm7EUKhPSltKvMyMeDnAYd3t
    PyWNT=s1360-w1360-h1020-rw
    `,
  image2: "https://gimsr.gitam.edu/Images/gimsr-image-ivory.svg",
  website: "https://gitam.edu",
  mail: "info@gitam.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹25,37,000 per year",
     nri: "$45,000 per year",
     hostel: "₹2,70,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: true,
  placements: {
   averagePackage: "5.6 LPA",
   highestPackage: "12.4 LPA",
   companiesVisited: 100,
  },
  ranking: "Top Medical College in Andhra Pradesh",
  faq: [
   {
    question: "Is GIMSR a private or public institution?",
    answer:
     "GIMSR is a private institution affiliated to GITAM (Deemed to be) University.",
   },
   {
    question: "What is the dress code for GITAM medical college?",
    answer:
     "Students are expected to follow formal attire and white coat while attending classes and practicals.",
   },
   {
    question: "Is GITAM good for MBBS?",
    answer:
     "Yes, GITAM Institute of Medical Sciences and Research is a reputed institution offering quality MBBS education with modern infrastructure, NAAC A++ accreditation, and strong placement support.",
   },
  ],
 },
 {
  collegename: "Hamdard Institute of Medical Sciences & Research, New Delhi",
  established: "2012",
  collegetype: "Private",
  location: "New Delhi, Delhi",
  address:
   "G772+M2X, Block D, Hamdard Nagar, Guru Ravidas Marg, Hamdard Nagar, New Delhi, Delhi 110062",
  approval: ["MCI", "WHO"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Jamia Hamdard (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Hamdard Institute of Medical Sciences & Research (HIMSR), established in 2012 in New Delhi, is affiliated with Jamia Hamdard and is approved by MCI and WHO. It provides both undergraduate and postgraduate education in medical sciences with high national rankings, including NIRF rank 22 in 2020. HIMSR is supported by HAHC Hospital, a tertiary care facility with over 740 beds. The institute is committed to the philosophy of 'Compassion, Concern, Care, and Sharing in Pain,' inspired by the vision of its founder, Hakeem Abdul Hameed.",
  highlights: [
   "Established in 2012",
   "Approved by MCI and WHO",
   "740+ bed hospital attached for clinical training",
   "Ranked 22nd in NIRF Medical Category (2020)",
   "English medium teaching",
   "Direct MBBS admission via NEET",
  ],
  image1: `https://lh3.googleusercontent.com/gps-cs-s/AB5caB8Bw5D-0jJ4EuONO8x66GICGmsoL56mhWbLOqL_4PUSwQiC8WX6OgwgxrQE2ruQcrYB_l4mx3bLxzq5hB5fLq40n-daAhbgxB3k2RT45P1ngHw3ogGIl2Db6f0WqmM0bbbzITpf=s1360-w1360-h1020-rw`,
  image2: `https://www.himsr.co.in/wp-content/uploads/2022/10/JH-logo-removebg-preview.png`,
  website: "https://www.jamiahamdard.edu/",
  mail: "info@jamiahamdard.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹16,00,000 per year",
     nri: "$45,000 per year",
     hostel: "₹1,76,510 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "22nd rank in NIRF 2020 (Medical Category)",
  faq: [
   {
    question:
     "What is the eligibility for admission in HIMSR for MBBS/PG courses?",
    answer:
     "For MBBS, candidates must have 60% marks in PCB in 10+2 and must qualify NEET. For PG, a valid NEET-PG score is required.",
   },
   {
    question: "Does HIMSR take direct admission in MBBS/PG courses?",
    answer:
     "Admissions are based on NEET and NEET-PG scores. There are no direct admissions without qualifying exams.",
   },
   {
    question:
     "Is there any Management Quota in HIMSR in MBBS/PG courses admission?",
    answer:
     "Yes, HIMSR does have a management quota for admission, but NEET qualification is mandatory.",
   },
  ],
 },
 {
  collegename:
   "SBKS Medical Institute & Research Centre (Sumandeep Vidyapeeth University), Vadodara",
  established: "2002",
  collegetype: "Private",
  location: "Vadodara, Gujarat",
  address: "Sumandeep Vidhyapeeth, Vadodara, Gujarat 391760",
  approval: ["MCI", "WHO"],
  state: "Gujarat",
  city: "Vadodara",
  affiliatedby: "Sumandeep Vidyapeeth (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Smt. B.K. Shah Medical Institute & Research Centre is a constituent of Sumandeep Vidyapeeth, a Deemed University under UGC Act 1956. It was established in 2002 and received MCI and Government of India permission in 2003. With a 65-acre rural campus in Vadodara, Gujarat, the college has expanded to offer 150 MBBS seats, 136 PG degree seats across 20 subjects, 24 diploma-converted degree seats, and super speciality courses (DM/MCh) in five disciplines. The institute offers high-standard medical education at UG, PG, and super-speciality levels and is supported by modern infrastructure.",
  highlights: [
   "Established in 2002",
   "Affiliated with Sumandeep Vidyapeeth (Deemed University)",
   "Approved by MCI and WHO",
   "136 PG degree seats and 5 super speciality courses available",
   "Modern infrastructure on a 65-acre campus",
   "Direct MBBS admission through NEET",
  ],
  image1:
   "https://sumandeepvidyapeethdu.edu.in/medical/wp-content/uploads/2020/01/slide1.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ84tI_AMXdMz95ZekzcxZeBrQXCHWa0Wm1w&s",
  website: "https://www.sumandeepvidyapeethdu.edu.in/",
  mail: "info@sumandeepvidyapeethdu.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹18,75,000 per year",
     nri: "$35,000 per year",
     hostel: "80,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Anaesthesiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹2,50,000",
      nriFee: "",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹35,00,000",
      nriFee: "$82,000",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,00,000",
      nriFee: "$75,500",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹28,50,000",
      nriFee: "$67,000",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,00,000",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹20,00,000",
      nriFee: "$55,440",
     },
     {
      name: "Radio Diagnosis",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹35,00,000",
      nriFee: "$85,000",
     },
     {
      name: "Respiratory Diseases",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹27,00,000",
      nriFee: "$65,000",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹26,50,000",
      nriFee: "$67,000",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "$75,500",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,00,000",
      nriFee: "$75,500",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹33,00,000",
      nriFee: "$81,000",
     },
     {
      name: "ENT",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹22,00,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "DM / M.Ch. (Super Speciality Courses)",
    duration: "3 years",
    eligibility: "MD / MS in relevant specialty",
    fees: "As per university norms",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized as a prominent private medical institution in Gujarat",
  faq: [
   {
    question: "What is the controversy of Sumandeep Vidyapeeth?",
    answer:
     "There were past administrative controversies, but the institution continues to function with MCI and UGC recognition.",
   },
   {
    question: "How many acres is SBKS Medical College campus area?",
    answer: "The SBKS Medical College campus spans approximately 65 acres.",
   },
   {
    question: "Is Sumandeep Vidyapeeth a good college?",
    answer:
     "Yes, it is a recognized deemed university offering UG, PG, and super-speciality courses in medicine with solid infrastructure.",
   },
  ],
 },
 {
  collegename: "MM Institute of Medical Sciences & Research, Mullana, Ambala",
  established: "1993",
  collegetype: "Private",
  location: "Mullana, Ambala, Haryana",
  address: "62XW+HR7, MM Education Complex, New, Mullana, Haryana 133207",
  approval: ["MCI", "WHO"],
  state: "Haryana",
  city: "Ambala",
  affiliatedby: "Maharishi Markandeshwar (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "MM Institute of Medical Sciences & Research, established in 1993, is affiliated with Maharishi Markandeshwar (Deemed to be University). It is recognized by the Medical Council of India (MCI) since 2007 for MBBS degrees. Earlier batches (2003–2006) were awarded degrees by Kurukshetra University. The institute is known for its modern infrastructure, offering 940 teaching hospital beds and delivering specialized services. It offers undergraduate (MBBS) and postgraduate (MD/MS/PG Diploma) courses, and is popular among both national and international students.",
  highlights: [
   "Established in 1993",
   "Affiliated to Maharishi Markandeshwar (Deemed University)",
   "Recognized by MCI and WHO",
   "940 teaching beds",
   "Offers UG and PG medical programs",
   "English medium instruction",
  ],
  image1:
   "https://i0.wp.com/www.mmumullana.org/wp-content/uploads/2020/09/Campus-Pics-for-Website-MMU-Solan.jpg?fit=966%2C515&ssl=1",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZYXeGOCkPVkK2mXe3vNthpactVf8XzhzIQ&s",
  website: "https://www.mmumullana.org",
  mail: "info@mmumullana.org",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹18,00,000 per year",
     nri: "$35,556 per year",
     hostel: "2,20,000 per year",
    },
   },
   {
    name: "MD / MS / PG Diploma (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹1,00,000",
      nriFee: "",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹1,00,000",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹1,00,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹1,00,000",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹1,00,000",
      nriFee: "",
     },
     {
      name: "Forensic Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,30,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,30,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,95,000",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹29,95,000",
      nriFee: "₹70,00,000",
     },
     {
      name: "Respiratory Medicine (TB & Chest)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,95,000",
      nriFee: "",
     },
     {
      name: "Dermatology, Venereology and Leprosy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹37,95,000",
      nriFee: "₹75,00,000",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹29,95,000",
      nriFee: "₹70,00,000",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹16,95,000",
      nriFee: "",
     },
     {
      name: "Radiodiagnosis",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹40,95,000",
      nriFee: "₹75,00,000",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,95,000",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,95,000",
      nriFee: "",
     },
     {
      name: "Geriatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,95,000",
      nriFee: "",
     },
     {
      name: "Immuno-Haematology and Blood Transfusion",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,00,000",
      nriFee: "",
     },
     {
      name: "Family Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,00,000",
      nriFee: "",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,95,000",
      nriFee: "₹70,00,000",
     },
     {
      name: "Orthopedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹29,95,000",
      nriFee: "₹70,00,000",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹29,95,000",
      nriFee: "₹70,00,000",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹29,95,000",
      nriFee: "₹70,00,000",
     },
     {
      name: "Otorhinolaryngology (ENT)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,00,000",
      nriFee: "",
     },
     {
      name: "Traumatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,00,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹2,25,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized among top private medical colleges in North India",
  faq: [
   {
    question: "Is MMU a deemed university?",
    answer:
     "Yes, MMU (Maharishi Markandeshwar University) is a Deemed to be University recognized by UGC.",
   },
   {
    question: "Is Mullana Medical College private or government?",
    answer:
     "MM Institute of Medical Sciences & Research is a private medical college.",
   },
   {
    question: "Who is the owner of MM hospital Mullana?",
    answer:
     "MM hospital Mullana is managed by Maharishi Markandeshwar (Deemed to be University).",
   },
  ],
 },
 {
  collegename: "Amrita School of Medicine, Faridabad",
  established: "2002",
  collegetype: "Private",
  location: "Faridabad, Haryana",
  address:
   "C9G4+GVX Amrita Hospital, RPS City, Sector 88, Faridabad, Haryana 121002",
  approval: ["MCI", "WHO"],
  state: "Haryana",
  city: "Faridabad",
  affiliatedby: "Amrita Vishwa Vidyapeetham (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Amrita School of Medicine, Faridabad is the 8th campus under Amrita Vishwa Vidyapeetham and is affiliated with Amrita Hospital — India’s largest multispecialty private hospital. Established in 2002, the institute offers global-standard medical education with a focus on innovation, inclusivity, and compassionate healthcare. The campus hosts renowned faculty and provides world-class facilities that foster excellence in academics and medical research.",
  highlights: [
   "Established in 2002",
   "Affiliated with Amrita Vishwa Vidyapeetham",
   "India's largest private multispecialty hospital on campus",
   "Global standard facilities and infrastructure",
   "Approved by MCI and WHO",
   "Direct MBBS admission via NEET",
  ],
  image1:
   "https://webfiles.amrita.edu/2022/10/hhypmj64-amrita-faridabad-campus-banner-2022.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG4e4F1qavMsc4aJ7aQIQGJxpJF4ALPjpkw&s",
  website: "https://www.amrita.edu/campus/faridabad",
  mail: "info@amrita.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹27,55,800 per year",
     nri: "$52,000 per year",
     hostel: "₹76,000 per year",
    },
   },
   {
    name: "Postgraduate Medical Courses (MD/MS)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Emerging medical college under Amrita University with top-tier infrastructure",
  faq: [
   {
    question:
     "What programs are offered at Amrita School of Medicine, Faridabad?",
    answer:
     "The institute offers undergraduate (MBBS) and postgraduate (MD/MS) medical programs.",
   },
   {
    question: "How many MBBS seats are available?",
    answer:
     "The number of MBBS seats is determined by NMC approval and may vary yearly. Please refer to the official website for updated seat matrix.",
   },
   {
    question: "What is the eligibility criteria for MBBS admission?",
    answer:
     "Candidates must have 60% marks in Physics, Chemistry, and Biology in 10+2 and must qualify NEET.",
   },
  ],
 },
 {
  collegename: "Manipal Tata Medical College, Jamshedpur",
  established: "2020",
  collegetype: "Private",
  location: "Jamshedpur, Jharkhand",
  address:
   "Freedom Infocom Pvt. Ltd, Medical Corridor, Tin Plate Basti, Jamshedpur, Jharkhand 831017",
  approval: ["MCI", "WHO"],
  state: "Jharkhand",
  city: "Jamshedpur",
  affiliatedby: "Manipal Academy of Higher Education (MAHE)",
  collegecategory: "Medical",
  universityDescription:
   "Manipal Tata Medical College (MTMC), Jamshedpur, established in 2020, is a joint initiative between Tata Steel and MAHE Manipal. It is the first private-private partnership medical college in India under the 2019 MCI Gazette Notification. Affiliated with MAHE Manipal, an Institution of Eminence, MTMC operates from the Ardeshir Dalal Memorial Hospital (ADMH) campus and is associated with Tata Main Hospital (TMH) as its teaching hospital. With state-of-the-art infrastructure on a 20-acre campus, it aims to bridge the gap in medical education and healthcare services in Jharkhand.",
  highlights: [
   "Established in 2020",
   "First private-private partnership medical college in India",
   "Affiliated to MAHE Manipal, an Institution of Eminence",
   "150 MBBS seats annually",
   "Attached to Tata Main Hospital (TMH), Jamshedpur",
   "Approved by MCI and WHO",
  ],
  image1:
   "https://www.manipal.edu/content/dam/manipal/mu/mtmc-jamshedpur/images/college-infrastructure/Old%20Academic%202.jpg",
  image2:
   "https://images.shiksha.com/mediadata/images/1623241746phpj1WuO7.jpeg",
  website: "https://manipal.edu",
  mail: "info@manipal.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹16,19,000 per year",
     nri: "$37,100 per year",
     hostel: "₹1,80,500 per year",
    },
   },
   {
    name: "Postgraduate Medical Programs (Planned)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "To be announced",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "One of Jharkhand’s premier new-age medical institutions under a unique PPP model",
  faq: [
   {
    question: "What is the ranking of Tata Manipal Medical College?",
    answer:
     "As a newly established institution, MTMC is rapidly gaining reputation and is expected to feature in upcoming rankings.",
   },
   {
    question: "Is Manipal Tata Medical College private or government?",
    answer:
     "It is a private medical college operated under a consortium of Tata Steel and MAHE Manipal.",
   },
   {
    question: "What is Manipal Hospital famous for?",
    answer:
     "Manipal Hospitals are known for world-class multispecialty medical care, cutting-edge infrastructure, and research-based healthcare delivery.",
   },
  ],
 },

 {
  collegename: "BLDE University, Bijapur",
  established: "2008",
  collegetype: "Private",
  location: "Bijapur (Vijayapura), Karnataka",
  address: "Bangaramma Sajjan Campus, Vijayapura, Karnataka 586103",
  approval: ["MCI", "WHO"],
  state: "Karnataka",
  city: "Vijayapura",
  affiliatedby: "BLDE (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "BLDE (Deemed to be University), located in Vijayapura (formerly Bijapur), Karnataka, was established under the UGC Act 1956 and is approved by the Ministry of Human Resource Development. It is run by the reputed BLDE Association and offers a wide range of medical programs. The university’s constituent college, Shri B. M. Patil Medical College Hospital & Research Centre, was founded in 1986 and offers MBBS, PG programs in 21 disciplines, super-speciality courses (M.Ch.), PhD programs, and certificate/fellowship courses in Medical & Allied Sciences.",
  highlights: [
   "Established in 2008",
   "Affiliated with BLDE (Deemed University)",
   "MCI and WHO approved",
   "200 MBBS seats",
   "Offers PG, Super Specialty, PhD, and fellowship programs",
   "Modern infrastructure in a spacious campus",
  ],
  image1:
   "https://upload.wikimedia.org/wikipedia/commons/9/96/BLDEA%27s_Dr.P.G.Halakatti_College_of_Engineering_and_Technology._Bijapur_-_586101%2C_Karnataka_%2C_India..jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Z-NGD56MMljpPq6__bNgcaWgMhrE3zHFfQ&s",
  website: "https://bldedu.ac.in",
  mail: "info@bldedu.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹19,20,000 per year",
     nri: "$45,500 per year",
     hostel: "1,44,000 per year",
    },
   },
   {
    name: "MD / MS (21 Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "Varies by specialization",
    specializations: [
     { name: "Human Anatomy", allIndiaFee: "₹10,000" },
     { name: "Human Physiology", allIndiaFee: "₹10,000", nriFee: "₹12,50,000" },
     { name: "Biochemistry", allIndiaFee: "₹10,000" },
     { name: "Pathology", allIndiaFee: "₹8,00,000", nriFee: "₹25,00,000" },
     { name: "Microbiology", allIndiaFee: "₹10,000" },
     { name: "Pharmacology", allIndiaFee: "₹10,000", nriFee: "₹25,00,000" },
     { name: "Forensic Medicine", allIndiaFee: "₹10,000" },
     {
      name: "Community Medicine",
      allIndiaFee: "₹3,00,000",
      nriFee: "₹25,00,000",
     },
     {
      name: "General Medicine",
      allIndiaFee: "₹34,00,000",
      nriFee: "₹50,00,000",
     },
     { name: "Paediatrics", allIndiaFee: "₹34,00,000", nriFee: "₹50,00,000" },
     { name: "Dermatology", allIndiaFee: "₹34,00,000", nriFee: "₹50,00,000" },
     {
      name: "General Surgery",
      allIndiaFee: "₹34,00,000",
      nriFee: "₹50,00,000",
     },
     { name: "Orthopedics", allIndiaFee: "₹34,00,000", nriFee: "₹50,00,000" },
     { name: "Anaesthesiology", allIndiaFee: "₹20,00,000" },
     { name: "E.N.T.", allIndiaFee: "₹20,00,000" },
     { name: "Ophthalmology", allIndiaFee: "₹20,00,000" },
     {
      name: "Obst. & Gynecology",
      allIndiaFee: "₹34,00,000",
      nriFee: "₹50,00,000",
     },
     { name: "Radiology", allIndiaFee: "₹35,00,000", nriFee: "₹50,00,000" },
     { name: "Psychiatry", allIndiaFee: "₹20,00,000" },
     { name: "Respiratory Medicine (TB & Chest)", allIndiaFee: "₹20,00,000" },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "M.Ch. (Urology)",
    duration: "3 years",
    eligibility: "MS + NEET SS qualification",
    fees: "As per university norms",
   },
   {
    name: "PhD in Medical and Allied Sciences",
    duration: "As per program",
    eligibility: "Postgraduate in relevant field",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Among Karnataka’s reputed medical institutions with diversified programs",
  faq: [
   {
    question: "What is the intake for offered courses at BLDE University?",
    answer:
     "The MBBS intake is 200 students per year. PG, super-specialty, and PhD intake varies by program and discipline.",
   },
   {
    question: "What is the median salary of placements by the BLDE University?",
    answer:
     "The median salary varies by specialization; detailed placement statistics are not publicly disclosed.",
   },
   {
    question: "Is BLDE a deemed university?",
    answer:
     "Yes, BLDE is a Deemed to be University recognized under Section 3 of the UGC Act 1956.",
   },
  ],
 },
 {
  collegename: "Jawaharlal Nehru Medical College, Belgaum",
  established: "1963",
  collegetype: "Private",
  location: "Belagavi, Karnataka",
  address:
   "JNMC KLE University Campus, Nehru Nagar, Belagavi, Karnataka 590010",
  approval: ["MCI", "WHO"],
  state: "Karnataka",
  city: "Belagavi",
  affiliatedby:
   "KLE Academy of Higher Education and Research (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Jawaharlal Nehru Medical College (JNMC), Belgaum is a prestigious medical institution and a constituent unit of KLE Deemed University. Established in 1963, it has consistently ranked among the top medical colleges in India. The college was formerly affiliated with Rajiv Gandhi University of Health Sciences before becoming part of KLE Academy of Higher Education. JNMC offers a wide range of undergraduate, postgraduate, and super-specialty programs and is known for its academic excellence, advanced infrastructure, and emphasis on research and clinical training.",
  highlights: [
   "Established in 1963",
   "Affiliated with KLE Deemed University",
   "Approved by MCI and WHO",
   "Recognized for its academic and clinical excellence",
   "State-of-the-art labs and hospital infrastructure",
   "Offers UG, PG, and certificate programs",
  ],
  image1:
   "https://news.medicalneetug.com/wp-content/uploads/2021/05/JNMC-BELGAUM_MEDICALNEETUD_I3C.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-dvXTYhld_nPgngvi9osUDbKZyMeJMJuFQ&s",
  website: "https://www.jnmc.edu",
  mail: "info@jnmc.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹ 19,20,000 per year",
     nri: "$ 45,500 per year",
     hostel: "1,44,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "As per specialization",
   },
   {
    name: "Certificate Courses",
    duration: "Varies",
    eligibility: "As per course requirement",
    fees: "As per university norms",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Among top private medical colleges in Karnataka",
  faq: [
   {
    question:
     "What facility is provided for them to have a practical view of their course?",
    answer:
     "The college is equipped with advanced laboratories, simulation centers, and an attached teaching hospital for hands-on clinical training.",
   },
   {
    question: "What recreation facilities are available in the college?",
    answer:
     "JNMC offers sports grounds, gymnasium, common rooms, and recreational clubs to support student well-being.",
   },
   {
    question: "Are there any certificate courses?",
    answer:
     "Yes, JNMC offers various certificate and skill enhancement courses in medical and allied fields.",
   },
  ],
 },
 {
  collegename: "JSS Medical College, Mysore",
  established: "1984",
  collegetype: "Private",
  location: "Mysuru, Karnataka",
  address:
   "8MV3+GJV, Sri Shivarathreeshwara Nagara, Bannimantap, Mysuru, Karnataka 570004",
  approval: ["MCI", "WHO"],
  state: "Karnataka",
  city: "Mysuru",
  affiliatedby:
   "JSS Academy of Higher Education & Research (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "JSS Medical College, a constituent of JSS Academy of Higher Education & Research, was established in 1984 in Mysuru, Karnataka. The institution has consistently focused on quality education, healthcare, and research. With the guidance and blessings of its spiritual leadership, the college has produced numerous graduates, postgraduates, and researchers through its value-based curriculum and state-of-the-art infrastructure. It is recognized for its academic excellence and commitment to social contribution through medical education and healthcare services.",
  highlights: [
   "Established in 1984",
   "Affiliated to JSS Academy of Higher Education & Research",
   "Approved by MCI and WHO",
   "State-of-the-art medical facilities and research focus",
   "Offers UG, PG, and PhD programs",
   "Ranked among reputed private medical colleges in Karnataka",
  ],
  image1:
   "https://mbbscouncil.com/wp-content/uploads/2020/01/JSS-Medical-College-Mysore-Building-1280x720.jpg",
  image2:
   "https://api.bangalorestudy.com:3000/college_logo/logo1691488804111.png",
  website: "https://jssuni.edu.in",
  mail: "info@jssuni.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹19,86,650 per year",
     nri: "$46,000 per year",
     hostel: "₹1,93,500 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "As per specialization",
   },
   {
    name: "PhD / Fellowship Programs",
    duration: "Varies",
    eligibility: "Postgraduate in relevant field",
    fees: "As per course",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized as one of the top private medical colleges in Karnataka",
  faq: [
   {
    question:
     "Is there any age limit for admission to MBBS at JSS Medical College?",
    answer:
     "Yes, candidates must be at least 17 years old at the time of admission as per NEET UG eligibility guidelines.",
   },
   {
    question: "Does JSS Medical College conduct any entrance exams?",
    answer:
     "Admissions are strictly based on NEET UG and NEET PG scores; no separate entrance exam is conducted by the college.",
   },
   {
    question: "How can I get admission at JSS Medical College Mysore?",
    answer:
     "You must qualify NEET and participate in centralized counseling conducted by the relevant authority to secure admission.",
   },
  ],
 },
 {
  collegename: "JGMM Medical College, Hubballi",
  established: "2021",
  collegetype: "Private",
  location: "Hubballi, Karnataka",
  address: "84GR+3HX, Hubballi, Karnataka 580028",
  approval: ["MCI", "WHO"],
  state: "Karnataka",
  city: "Hubballi",
  affiliatedby:
   "KLE Academy of Higher Education & Research (Deemed-to-be-University)",
  collegecategory: "Medical",
  universityDescription:
   "Jagadguru Gangadhar Mahaswamigalu Moorsavirmath Medical College (JGMMMC), Hubballi, was established in 2021 as the second medical college under KLE Academy of Higher Education & Research. Located in Gabbur, it continues KLE Society’s legacy of quality education in Northern Karnataka, Southern Maharashtra, and Delhi. The college offers state-of-the-art infrastructure and a commitment to nurturing future medical professionals through a holistic and inclusive approach to education.",
  highlights: [
   "Established in 2021",
   "Second medical college under KLE Academy",
   "Located in Gabbur, Hubballi",
   "Approved by MCI and WHO",
   "English medium instruction",
   "Focus on inclusive and quality medical education",
  ],
  image1: "https://klejgmmmc.edu.in/images/banner_20.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlQt968Py02veN-8kj6vnkVkcK2C4zIN1twRDn6h0pKN2wg_9Aird_z0HCZNtwFq6-KU&usqp=CAU",
  website: "https://kledeemeduniversity.edu.in",
  mail: "info@kledeemeduniversity.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹17,60,000 per year",
     nri: "$40,000 per year",
     hostel: "₹1,58,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Emerging medical college under KLE Deemed University",
  faq: [
   {
    question: "What is the annual intake for the MBBS program at JGMMMC?",
    answer:
     "The annual intake capacity is determined by the National Medical Commission and is typically 150 seats, subject to change.",
   },
   {
    question:
     "Does JGMMMC provide separate hostel facilities for male and female students?",
    answer:
     "Yes, JGMMMC offers separate hostel facilities for male and female students with all essential amenities.",
   },
   {
    question:
     "What are the eligibility criteria for admission to the MBBS program?",
    answer:
     "Candidates must have 60% in Physics, Chemistry, and Biology in 10+2 and must qualify NEET.",
   },
  ],
 },
 {
  collegename: "Kasturba Medical College, Mangalore",
  established: "1955",
  collegetype: "Private",
  location: "Mangaluru, Karnataka",
  address: "203, Light House Hill Rd, Hampankatta, Mangaluru, Karnataka 575001",
  approval: ["MCI", "WHO"],
  state: "Karnataka",
  city: "Mangaluru",
  affiliatedby: "Manipal Academy of Higher Education (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Kasturba Medical College (KMC), Mangalore, is a renowned private medical college established in 1955 and is a constituent unit of Manipal Academy of Higher Education, an Institution of Eminence. Along with its sister campus in Manipal, KMC Mangalore has gained global recognition for its excellence in medical education, clinical training, and healthcare services. The college provides a wide range of undergraduate and postgraduate courses and is approved by MCI and WHO.",
  highlights: [
   "Established in 1955",
   "Part of the Manipal Academy of Higher Education",
   "Approved by MCI and WHO",
   "Known for international standards in medical education",
   "Offers MBBS, MD/MS, and other postgraduate courses",
   "Global recognition and NRI/Foreign student admissions",
  ],
  image2: "https://upload.wikimedia.org/wikipedia/en/e/e4/KMCMAHEMANIPAL.png",
  image1:
   "https://i2.wp.com/baslpcourse.com/wp-content/uploads/2021/10/kasturba-medical-college-kmc-mangalore.jpg?fit=640%2C450&ssl=1",
  website: "https://manipal.edu/kmc-mangalore.html",
  mail: "admissions@manipal.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹17,80,000 per year",
     nri: "$37,100 per year",
     hostel: "₹1,25,500 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Ranked among the top medical colleges in India",
  faq: [
   {
    question: "What are the courses offered at KMC Manipal?",
    answer:
     "KMC offers MBBS, MD/MS, super-specialty, and allied health science courses.",
   },
   {
    question: "What are the eligibility criteria for MBBS at KMC Manipal?",
    answer:
     "60% in PCB in 10+2 and a valid NEET score are required for MBBS admission.",
   },
   {
    question:
     "Are admissions offered for NRI / Foreign students at KMC Manipal?",
    answer:
     "Yes, KMC reserves a quota for NRI and foreign students in accordance with university and MCI norms.",
   },
  ],
 },
 {
  collegename: "K S Hegde Medical Academy, Mangalore",
  established: "1999",
  collegetype: "Private",
  location: "Mangaluru, Karnataka",
  address: "P.O. Nityanandanagar, Deralakatte, Mangaluru, Karnataka 575018",
  approval: ["MCI", "WHO", "Malaysian Medical Council"],
  state: "Karnataka",
  city: "Mangaluru",
  affiliatedby: "Nitte (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "K S Hegde Medical Academy (KSHEMA), established in 1999, is a constituent college of Nitte (Deemed to be University). It is approved by MCI and WHO and also recognized by the Malaysian Medical Council. KSHEMA is ranked 12th among private medical colleges in India by THE WEEK-Hansa Research Survey 2024 and 37th by India Today under Medicine & Health Sciences. The college offers UG and PG courses across the medical stream through seven departments and emphasizes research-oriented medical education and global exposure.",
  highlights: [
   "Established in 1999",
   "Ranked 12th among private medical colleges in India (THE WEEK 2024)",
   "Ranked 37th by India Today 2024 in Medicine category",
   "Approved by MCI, WHO, and Malaysian Medical Council",
   "Affiliated to Nitte (Deemed to be University)",
   "Courses offered in English medium",
  ],
  image1:
   "https://images.shiksha.com/mediadata/images/1525175760phpECzzfM.jpeg",
  image2:
   "https://cdn.prod.website-files.com/63a98d7ca37497b26e5ba22c/670e110696de6ca581ab3665_67003217ad774eeadeb3146d_668f5fa2f49145d584a2bd94_logo1691489109350%2520(1).png",
  website: "https://kshema.nitte.edu.in",
  mail: "admissions@nitte.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹17,78,000 per year",
     nri: "$28,28,000 per year",
     hostel: "₹1,45,000 per year",
    },
   },
   {
    name: "Postgraduate Courses (MD/MS)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Ranked among top private medical colleges by THE WEEK and India Today in 2024",
  faq: [
   {
    question:
     "Does KS Hegde Medical Academy provide hostel facilities to both boys and girls?",
    answer:
     "Yes, KS Hegde Medical Academy provides separate hostel facilities for boys and girls with essential amenities.",
   },
   {
    question: "Does KS Hegde Medical Academy provide scholarships?",
    answer:
     "Scholarships are currently not publicly disclosed; applicants are encouraged to check with the college's admission office.",
   },
   {
    question:
     "Can we get admission through NEET marks in KS Hegde Medical Academy?",
    answer:
     "Yes, admission to MBBS at KS Hegde Medical Academy requires qualifying NEET with the required cutoff marks.",
   },
  ],
 },
 {
  collegename: "Raja Rajeswari Medical College and Hospital, Bengaluru",
  established: "2005",
  collegetype: "Private",
  location: "Bengaluru, Karnataka",
  address:
   "202, Mysore Rd, Kengeri Satellite Town, Kambipura, Karnataka 560074",
  approval: ["MCI", "WHO", "NAAC A", "NABH", "ISO: 9001", "HLACT (UK)", "IOA"],
  state: "Karnataka",
  city: "Bengaluru",
  affiliatedby:
   "Dr. MGR Educational and Research Institute (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "RajaRajeswari Medical College and Hospital (RMCH), established in 2005 in Bengaluru, is a constituent college of Dr. MGR Educational and Research Institute. It is recognized by the Medical Council of India (MCI) and the Government of India. RMCH is accredited by NAAC with an 'A' grade and its hospital holds certifications from NABH, ISO:9001, and HLACT (UK). The institution offers undergraduate, postgraduate, super-specialty, diploma, and doctoral programs. With a 1300-bedded multi-specialty hospital and tertiary care center, the college provides comprehensive medical education, research, and clinical training.",
  highlights: [
   "Established in 2005",
   "Constituent of Dr. MGR Educational and Research Institute",
   "NAAC A accredited, NABH, ISO:9001, HLACT (UK) certified hospital",
   "1300-bed multi-specialty hospital for clinical training",
   "Courses offered: MBBS, MD, MS, DM, M.Ch., BSc, Diploma, PhD",
   "English medium instruction",
  ],
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdie8JoDFk0_xFGom2ILkGWpybAxrJLYj-7g&s",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnlVNkJ_KM1KGaO82IyVxYoz_DMF7FjLiyg&s",
  website: "https://www.rrmch.org",
  mail: "admissions@rrmch.org",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹23,50,000 per year",
     nri: "$44,000 per year",
     hostel: "₹1,75,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Human Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Human Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹12,00,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Forensic Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,00,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹42,00,000",
      nriFee: "₹79,500",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹42,00,000",
      nriFee: "₹79,500",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹60,00,000",
      nriFee: "₹1,10,000",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹40,00,000",
      nriFee: "",
     },
     {
      name: "Orthopedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,00,000",
      nriFee: "₹90,000",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹32,00,000",
      nriFee: "",
     },
     {
      name: "E.N.T.",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Obstetrics & Gynecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,00,000",
      nriFee: "₹1,00,000",
     },
     {
      name: "Radiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹60,00,000",
      nriFee: "₹1,10,000",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "Respiratory Medicine (TB & Chest)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹42,00,000",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Geriatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "DM / M.Ch. (Super Specialty)",
    duration: "3 years",
    eligibility: "MD / MS in relevant specialty",
    fees: "As per university norms",
   },
   {
    name: "PhD / Diploma / B.Sc. Programs",
    duration: "Varies",
    eligibility: "As per course",
    fees: "As per program",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Recognized medical institution in Karnataka with multi-specialty hospital infrastructure",
  faq: [
   {
    question: "What are the entrance exams?",
    answer:
     "RMCH admissions are conducted through NEET for MBBS, NEET PG for MD/MS, and NEET SS for DM/M.Ch. programs.",
   },
   {
    question: "Is there an anti-ragging cell in the college?",
    answer:
     "Yes, RajaRajeswari Medical College and Hospital has a strict anti-ragging policy with an active anti-ragging committee.",
   },
   {
    question: "When was RMCH established?",
    answer:
     "RajaRajeswari Medical College and Hospital was established in the year 2005.",
   },
  ],
 },

 {
  collegename: "SDU (Sri Devaraj URS Medical College), Kolar",
  established: "1986",
  collegetype: "Private",
  location: "Kolar, Karnataka",
  address: "45JF+WQ4, Tamaka, Kolar, Karnataka 563101",
  approval: ["MCI", "WHO", "NAAC", "ISO 9001:2000"],
  state: "Karnataka",
  city: "Kolar",
  affiliatedby:
   "Sri Devaraj Urs Academy of Higher Education and Research (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Sri Devaraj Urs Medical College (SDUMC), established in 1986, is a constituent unit of Sri Devaraj Urs Academy of Higher Education and Research under the Sri Devaraj Urs Educational Trust for Backward Classes, Kolar. It is recognized by the Medical Council of India and accredited by NAAC and ISO 9001:2000. The college is located on a 100-acre lush green campus in Tamaka, 75 km from Bengaluru. It offers undergraduate (MBBS), postgraduate (MD/MS), PG diploma, and is planning doctoral and fellowship programs. The institute is known for maintaining high academic standards and a robust teaching-learning environment.",
  highlights: [
   "Established in 1986",
   "100-acre green campus near Bengaluru",
   "Affiliated to Sri Devaraj Urs Academy of Higher Education and Research",
   "Approved by MCI, WHO, NAAC, ISO 9001:2000 certified",
   "UG, PG, Diploma, and upcoming PhD and fellowship programs",
   "English medium instruction",
  ],
  image1:
   "https://sdumc.ac.in/storage/1744276297.85121672661172.1126217.aXEo.n9Qk.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zEifz1V6fscaUEhnMrrZHzVbkwYD1_fkow&s",
  website: "https://www.sduu.ac.in",
  mail: "info@sduu.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹17,60,000 per year",
     nri: "$45,200 per year",
     hostel: "₹1,01,150 per year",
    },
   },
   {
    name: "MD / MS / PG Diploma",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Human Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,000",
      nriFee: "",
     },
     {
      name: "Human Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,000",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹15,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹8,80,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "",
     },
     {
      name: "Forensic Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹33,80,000",
      nriFee: "$102,000",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹33,80,000",
      nriFee: "$114,000",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹35,20,000",
      nriFee: "$96,000",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹32,00,000",
      nriFee: "",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹32,00,000",
      nriFee: "$96,000",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "ENT",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "Obstetrics & Gynecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹33,80,000",
      nriFee: "$102,000",
     },
     {
      name: "Radiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹33,80,000",
      nriFee: "$114,000",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "Respiratory Medicine (TB & Chest)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹35,20,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "Planned PhD / Fellowship Programs",
    duration: "Varies",
    eligibility: "Postgraduate in relevant field",
    fees: "To be announced",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized for academic excellence and accredited by NAAC and ISO",
  faq: [
   {
    question: "What is the annual intake for the MBBS program at SDUMC?",
    answer:
     "The annual MBBS intake is subject to approval by the Medical Council of India and usually updated on the official site.",
   },
   {
    question: "Is SDUMC recognized by international medical councils?",
    answer:
     "Yes, SDUMC is recognized by MCI and WHO and maintains ISO 9001:2000 certification.",
   },
   {
    question: "Is SDU Medical College Kolar good?",
    answer:
     "Yes, SDUMC is known for high teaching standards, a 100-acre modern campus, and quality medical education.",
   },
  ],
 },
 {
  collegename: "Sri Siddhartha Academy of Higher Education, Bangalore",
  established: "2008",
  collegetype: "Private",
  location: "Tumkur, Karnataka",
  address: "Agalakote, B.H. Road, Tumkur-572107, Karnataka",
  approval: ["MCI", "WHO"],
  state: "Karnataka",
  city: "Tumkur",
  affiliatedby:
   "Sri Siddhartha Academy of Higher Education (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Sri Siddhartha Academy of Higher Education (SSAHE), established in 2008, is a Deemed to be University located in Tumkur, Karnataka. It offers education in Engineering, Dental, and Medical sciences, focusing on producing industry-ready professionals. SSAHE is recognized by MCI and WHO. The university takes pride in a diverse alumni base that occupies leadership roles across the corporate world, research, and entrepreneurship. It fosters a holistic educational environment across its constituent institutions.",
  highlights: [
   "Established in 2008",
   "Approved by MCI and WHO",
   "Part of SSAHE Deemed University",
   "Focus on creating industry-ready professionals",
   "Alumni in global leadership roles",
   "English medium instruction",
  ],
  image1: "https://www.ssmctumkur.org/images/ssdc_gallery/02.jpg",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/3/30/Sri_Siddhartha_Academy_of_Higher_Education_University_SSAHE_SSU_Logo_Tumkur.jpg",
  website: "https://www.ssahe.in",
  mail: "info@ssahe.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: "₹17,75,000 per year",
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "Research Courses (PhD, Fellowship)",
    duration: "As per course",
    eligibility: "Postgraduate in relevant field",
    fees: "As per program",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Emerging multidisciplinary university with medical, dental, and engineering colleges",
  faq: [
   {
    question:
     "What are the documents required at the time of admission in Sri Siddhartha Academy of Higher Education?",
    answer:
     "Documents include Class X and XII mark sheets, NEET scorecard, Aadhaar card, photos, and caste/disability certificate if applicable.",
   },
   {
    question:
     "Does Sri Siddhartha Academy of Higher Education provide admission to foreign students too?",
    answer:
     "Yes, foreign students are eligible to apply, subject to regulatory norms and eligibility criteria.",
   },
   {
    question:
     "Does Sri Siddhartha Academy of Higher Education offer research courses?",
    answer:
     "Yes, SSAHE offers research-oriented doctoral and fellowship programs in select medical and allied fields.",
   },
  ],
 },
 {
  collegename: "Sri Siddhartha Medical College, Tumkur",
  established: "1988",
  collegetype: "Private",
  location: "Tumkur, Karnataka",
  address: "83W5+296 Ssmc, Tumakuru, Karnataka 572107",
  approval: ["MCI", "WHO", "NMC"],
  state: "Karnataka",
  city: "Tumkur",
  affiliatedby:
   "Sri Siddhartha Academy of Higher Education (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Sri Siddhartha Medical College, a constituent of Sri Siddhartha Academy of Higher Education (SSAHE), was established in 1988 in Tumkur, Karnataka. It offers a wide range of undergraduate, postgraduate, and super-speciality programs approved by the National Medical Commission (NMC). The institute runs 27 courses across disciplines such as MBBS, MD, MS, DM, and PG Diploma, with a total intake of 296 students. With state-of-the-art infrastructure and strong academic standards, the college is a key institution for medical education and research under SSAHE.",
  highlights: [
   "Established in 1988",
   "Constituent of Sri Siddhartha Academy of Higher Education",
   "Approved by MCI, WHO, and NMC",
   "27 courses across MBBS, MD, MS, DM, and PG Diploma",
   "Total intake of 296 students",
   "English medium instruction",
  ],
  image1: "https://example.com/image1.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv34ip__UQ8pUdLTt7Nj4Z-pd5EAoZFXr3jw&s",
  website: "https://www.ssmctumkur.org",
  mail: "admissions@ssmctumkur.org",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹18,46,000 per year",
     nri: "$50,000 per year",
     hostel: "₹1,25,000 per year",
    },
   },
   {
    name: "MD / MS (19 Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization (₹4,42,950–₹97,77,000)",
    specializations: [
     {
      name: "Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹10,00,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹2,50,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,50,000",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Anesthesia",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Radio-Diagnosis",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Respiratory Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹31,50,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹81,000 per year",
   },
   {
    name: "DM (Super Specialty)",
    duration: "3 years",
    eligibility: "MD in relevant specialty + NEET SS qualification",
    fees: "As per university norms",
   },
   {
    name: "PG Diploma",
    duration: "2 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Leading private medical college in Karnataka with multiple PG specializations",
  faq: [
   {
    question:
     "What are the documents required at the time of admission in Sri Siddhartha Academy of Higher Education?",
    answer:
     "Required documents include academic marksheets, NEET scorecard, ID proof, photographs, and caste/disability certificates if applicable.",
   },
   {
    question:
     "Does Sri Siddhartha Academy of Higher Education provide admission to foreign students too?",
    answer:
     "Yes, foreign nationals are eligible to apply under NRI/foreign quota, subject to eligibility norms.",
   },
   {
    question:
     "Does Sri Siddhartha Academy of Higher Education offer research courses?",
    answer:
     "Yes, SSAHE plans and offers research programs and super-specialty courses in medical and allied health sciences.",
   },
  ],
 },
 {
  collegename: "Yenepoya Medical College, Mangalore",
  established: "1999",
  collegetype: "Private",
  location: "Mangaluru, Karnataka",
  address:
   "University Road, Yenepoya University Campus, Deralakatte, Karnataka 575018",
  approval: ["MCI", "WHO", "NMC"],
  state: "Karnataka",
  city: "Mangaluru",
  affiliatedby: "Yenepoya (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Yenepoya Medical College, established in 1999, is a constituent unit of Yenepoya (Deemed to be University). Initially affiliated to Rajiv Gandhi University of Health Sciences, it became a deemed university college in 2009. The Medical Council of India permitted MBBS admissions from 1999 and PG courses from 2005. It currently offers MBBS, MD/MS in 23 departments, and DM/M.Ch. in 3 super-specialty departments. In 2023, the National Medical Commission approved a total intake of 250 MBBS students annually. The institute emphasizes holistic medical education and infrastructure-driven academic excellence.",
  highlights: [
   "Established in 1999",
   "Deemed university status under UGC Act 1956",
   "250 MBBS seats approved from 2023",
   "Offers 23 PG specializations and 3 super-specialty programs",
   "Approved by MCI, WHO, NMC",
   "English medium instruction",
  ],
  image1:
   "https://careermudhra.com/wp-content/uploads/yenepoya-medical-college-mangalore.jpg",
  image2: "https://www.yenepoya.edu.in/img/Yen%20New%20Logo.png",
  website: "https://www.yenepoya.edu.in",
  mail: "admissions@yenepoya.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹22,00,000 per year",
     nri: "$45,00,000 per year",
     hostel: "₹0 per year",
    },
   },
   {
    name: "MD / MS (23 Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "DM / M.Ch. (Super Speciality Courses)",
    duration: "3 years",
    eligibility: "MD/MS + NEET SS qualification",
    fees: "As per university norms",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: true,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Premier medical institution in coastal Karnataka with 250 MBBS intake",
  faq: [
   {
    question: "Can I apply to this college without the NEET exam?",
    answer:
     "No, NEET qualification is mandatory for MBBS and PG medical admissions at Yenepoya Medical College.",
   },
   {
    question: "What is the process for the application of scholarship?",
    answer:
     "Scholarships may be offered based on merit or financial need. Students are advised to check with the admissions office for specific criteria and application deadlines.",
   },
   {
    question: "What are the general details of the NEET exam?",
    answer:
     "NEET is the National Eligibility cum Entrance Test conducted by NTA. It is mandatory for admission to MBBS, BDS, and most medical programs in India.",
   },
  ],
 },
 {
  collegename: "Amrita School of Medicine, Kochi",
  established: "1998",
  collegetype: "Private",
  location: "Ernakulam, Kerala",
  address:
   "27JV+V7R, Unnamed Road, Amrita Nagar, Edappally, Ernakulam, Kerala 682041",
  approval: ["MCI", "WHO"],
  state: "Kerala",
  city: "Ernakulam",
  affiliatedby: "Amrita Vishwa Vidyapeetham (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Amrita School of Medicine, Kochi, established in 1998, is a premier constituent unit of Amrita Vishwa Vidyapeetham (Deemed University). The college is committed to nurturing compassionate healthcare professionals through innovative teaching, cutting-edge research, and world-class clinical exposure. With a focus on collaborative learning and human-centered care, the institution empowers students to become both skilled clinicians and leading researchers. Amrita School of Medicine is recognized by the MCI and WHO and is known for its excellence in education, technology, and healthcare services.",
  highlights: [
   "Established in 1998",
   "Affiliated to Amrita Vishwa Vidyapeetham",
   "Approved by MCI and WHO",
   "Research-driven medical education",
   "Collaborative learning culture",
   "World-class clinical and infrastructure facilities",
  ],
  image1:
   "https://webfiles.amrita.edu/2022/12/ilDI4G1S-kochi-campus-nursing.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6rLedIumr0V93U8XE51HqHsdPrDS2Q73XA&s",
  website: "https://www.amrita.edu/school/medicine/kochi",
  mail: "admissions@amrita.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹25,00,000 per year",
     nri: "$50,000 per year",
     hostel: "₹76,000 per year",
    },
   },
   {
    name: "MD / MS (PG Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Anatomy",
      allIndiaSeats: 2,
      nriSeats: 1,
      allIndiaFee: "₹6,00,000",
      nriFee: "",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,00,000",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Forensic Medicine",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹6,00,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "₹8,00,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹9,00,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 8,
      nriSeats: 0,
      allIndiaFee: "₹16,00,000",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "₹16,00,000",
      nriFee: "",
     },
     {
      name: "Physical Medicine & Rehabilitation",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹16,00,000",
      nriFee: "",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 16,
      nriSeats: 0,
      allIndiaFee: "₹25,00,000",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 4,
      nriSeats: 0,
      allIndiaFee: "₹19,00,000",
      nriFee: "",
     },
     {
      name: "Geriatrics",
      allIndiaSeats: 1,
      nriSeats: 0,
      allIndiaFee: "₹20,00,000",
      nriFee: "",
     },
     {
      name: "Radiation Oncology",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹20,00,000",
      nriFee: "",
     },
     {
      name: "Respiratory Medicine",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹20,00,000",
      nriFee: "",
     },
     {
      name: "Nuclear Medicine",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹21,00,000",
      nriFee: "",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 4,
      nriSeats: 2,
      allIndiaFee: "₹30,00,000",
      nriFee: "₹80,000",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 5,
      nriSeats: 3,
      allIndiaFee: "₹30,00,000",
      nriFee: "₹80,000",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 2,
      nriSeats: 1,
      allIndiaFee: "₹35,00,000",
      nriFee: "₹80,000",
     },
     {
      name: "Palliative Medicine",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹14,00,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "DM / M.Ch. (Super Specialty Courses)",
    duration: "3 years",
    eligibility: "MD/MS + NEET SS qualification",
    fees: "As per university norms",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required (Varies Yearly)",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Top private medical college in Kerala with research-focused education",
  faq: [
   {
    question: "What is the last rank in NEET in Amrita Medical College?",
    answer:
     "The cutoff rank varies each year based on NEET scores and seat availability. Please refer to MCC or college counseling portal for accurate year-wise data.",
   },
   {
    question: "Is hostel compulsory in Amrita Medical College?",
    answer:
     "Yes, for MBBS students, hostel accommodation is generally mandatory as per university guidelines to ensure discipline and campus engagement.",
   },
   {
    question: "What is the dress code for Amrita?",
    answer:
     "Students are expected to wear formal attire and white coats during academic and clinical hours. Uniform guidelines are strictly followed.",
   },
  ],
 },
 {
  collegename:
   "Bharati Vidyapeeth Deemed University Medical College & Hospital, Sangli",
  established: "2005",
  collegetype: "Private",
  location: "Sangli, Maharashtra",
  address:
   "RJR9+WV4, 26, Sangli - Miraj Rd, Wanalesawadi, Vijaynagar, Sangli, Miraj, Maharashtra 416410",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Sangli",
  affiliatedby: "Bharati Vidyapeeth (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Bharati Vidyapeeth (Deemed to be University) Medical College, Sangli, established in 2005, is a premier UG/PG teaching and tertiary care center catering to patients from Western Maharashtra and neighboring Karnataka. The college offers 150 MBBS seats annually and 98 PG seats across 18 departments. It is housed in a spacious 2.5 lakh sq. ft. facility with advanced labs and museums. With a focus on Competency-Based Medical Education (CBME), the institute emphasizes global medical training, ethical research, and patient care. The attached 780-bed hospital offers state-of-the-art ICU and super-specialty services at affordable costs.",
  highlights: [
   "Established in 2005",
   "150 MBBS seats and 98 PG seats",
   "Part of Bharati Vidyapeeth Deemed University",
   "780-bed hospital with advanced ICU and NICU",
   "CBME curriculum introduced in 2019",
   "Affiliated to MCI and WHO",
   "English medium instruction",
  ],
  image1:
   "https://mchsangli.bharatividyapeeth.edu/images/demo/slide_2024/Slide_2024_1.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRro4omMonM7P0XUCZN9CWQhlUNeKbFa4xL5w&s",
  website: "https://mchsangli.bharatividyapeeth.edu",
  mail: "admissions@bharatividyapeeth.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹24,31,000 per year (5% increment yearly)",
     nri: "$85,050 + ₹1,12,000 per year",
     hostel: "₹95,000 per year",
    },
   },
   {
    name: "MD / MS (18 Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Well-established medical college with competency-based education and advanced tertiary care",
  faq: [
   {
    question:
     "What is the annual intake for MBBS at Bharati Vidyapeeth Medical College, Sangli?",
    answer:
     "The college admits 150 MBBS students per year as per National Medical Commission guidelines.",
   },
   {
    question: "Does the college provide hostel facilities?",
    answer:
     "Yes, the college provides hostel facilities for both boys and girls with separate accommodations.",
   },
   {
    question: "Is Bharati Vidyapeeth a private or public institution?",
    answer:
     "Bharati Vidyapeeth is a Deemed-to-be University and operates as a private institution.",
   },
  ],
 },
 {
  collegename: "Bharati Vidyapeeth University Medical College, Pune",
  established: "1989",
  collegetype: "Private",
  location: "Pune, Maharashtra",
  address:
   "FV44+VFX, Medical College Road, Pune - Satara Rd, Dhankawadi, Pune, Maharashtra 411043",
  approval: ["MCI", "WHO", "NABH"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Bharati Vidyapeeth (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Bharati Vidyapeeth (Deemed to be University) Medical College, Pune, was established in 1989 and became a constituent unit of the deemed university in 1996. The college is known for its academic excellence and is equipped with state-of-the-art facilities and an NABH-accredited tertiary care hospital. Located in Dhankawadi, Pune, the campus is a blend of modern architecture and advanced medical training infrastructure. The college has a strong focus on both academic and clinical excellence, preparing students for leadership in healthcare.",
  highlights: [
   "Established in 1989",
   "Part of Bharati Vidyapeeth Deemed University",
   "NABH-accredited multi-specialty hospital",
   "Known for academic and clinical excellence",
   "Modern campus with state-of-the-art infrastructure",
   "English medium instruction",
  ],
  image1: "https://example.com/image1.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEdK8YlYgQckKJRazY5rJTzPSni9Q6rBs3JX59BINVwq0VTUzVLNVy9I_YEGt1Cm7nEs&usqp=CAU",
  website: "https://mcpune.bharatividyapeeth.edu",
  mail: "admissions@bharatividyapeeth.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹25,96,000 per year (5% increment yearly)",
     nri: "$85,050 + ₹1,12,000 per year",
     hostel: "₹2,22,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "One of the top private medical colleges in Maharashtra under Bharati Vidyapeeth",
  faq: [
   {
    question: "What types of courses are offered at BVMC Pune?",
    answer:
     "BVMC Pune offers undergraduate (MBBS) and postgraduate (MD/MS) courses in various medical specializations.",
   },
   {
    question:
     "What are the eligibility criteria for the MBBS program at BVMC Pune?",
    answer:
     "Candidates must pass 10+2 with 60% marks in PCB and qualify the NEET exam.",
   },
   {
    question: "Does BVMC Pune have an attached hospital?",
    answer:
     "Yes, the college has a NABH-accredited multi-specialty tertiary care hospital for clinical training and patient care.",
   },
  ],
 },
 {
  collegename: "Datta Meghe Institute of Medical Sciences, Nagpur",
  established: "2005",
  collegetype: "Private",
  location: "Nagpur, Maharashtra",
  address:
   "6a, Hingna Rd, Midc, Industrial Area, Nagpur, Wanadongri, Maharashtra 440016",
  approval: ["MCI", "WHO", "UGC Category-I", "NAAC A+", "12B UGC Act"],
  state: "Maharashtra",
  city: "Nagpur",
  affiliatedby:
   "Datta Meghe Institute of Medical Sciences (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Datta Meghe Institute of Medical Sciences (DMIMS), Nagpur, was granted Deemed-to-be-University status in 2005 and has since become a premier health sciences institution. It has been accredited with NAAC 'A+' Grade and placed in Category-I by UGC under the Graded Autonomy Regulations 2018. The institution houses advanced infrastructure, research facilities, and a strong academic ecosystem. With a focus on producing competent healthcare professionals, DMIMS offers undergraduate and postgraduate programs across medical and allied health sciences disciplines.",
  highlights: [
   "Established in 2005",
   "Deemed University with UGC Category-I status",
   "NAAC 'A+' Accredited Institution",
   "World-class research and healthcare infrastructure",
   "Recognized by MCI and WHO",
   "Offers both UG and PG programs in health sciences",
  ],
  image1: "https://dmmcnagpur.com/assets/images/campus/campus%20(1).jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXO87_umrhpxeWuddh8QPwv4QeFHMt5ddl6w&s",
  website: "https://dmimsu.edu.in",
  mail: "admissions@dmimsu.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹23,50,000 per year (7.5% yearly increment)",
     nri: "$32,500 per year",
     hostel: "₹1,80,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "Super-Speciality and Allied Health Programs",
    duration: "Varies",
    eligibility: "As per course",
    fees: "As per university norms",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "A+ NAAC-accredited Deemed University with UGC Category-I autonomy",
  faq: [
   {
    question: "What is the annual intake for the MBBS program at DMIMS?",
    answer:
     "The intake for the MBBS program is as per the guidelines set by the NMC and can vary yearly. Please refer to the official site for current data.",
   },
   {
    question: "Does DMIMS provide hostel facilities?",
    answer:
     "Yes, DMIMS offers separate, well-furnished hostel facilities for both boys and girls with modern amenities.",
   },
   {
    question:
     "What are the eligibility criteria for admission into the MBBS program?",
    answer:
     "Students must pass 10+2 with at least 60% in PCB and must qualify the NEET examination to be eligible for admission.",
   },
  ],
 },
 {
  collegename: "Dr. D Y Patil Medical College, Kolhapur",
  established: "1987",
  collegetype: "Private",
  location: "Kolhapur, Maharashtra",
  address:
   "P774+9FX, Laxminarayan Nagar, Kadamwadi, Kolhapur, Maharashtra 416005",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Kolhapur",
  affiliatedby:
   "Dr. D. Y. Patil Vidyapeeth (Deemed to be University), Kolhapur",
  collegecategory: "Medical",
  universityDescription:
   "Dr. D. Y. Patil Medical College, Kolhapur, established in 1987, is a prominent institution affiliated with Dr. D. Y. Patil Vidyapeeth (Deemed to be University). It is recognized by MCI and WHO. The college offers a nurturing environment for aspiring medical professionals with a focus on excellence in education, advanced healthcare services, and research. The campus promotes diversity, inclusion, and a strong sense of responsibility toward community healthcare. It houses a modern hospital and fosters both undergraduate and postgraduate academic excellence.",
  highlights: [
   "Established in 1987",
   "Affiliated to Dr. D. Y. Patil Vidyapeeth, Kolhapur",
   "Recognized by MCI and WHO",
   "Strong focus on academic and research excellence",
   "State-of-the-art hospital for clinical training",
   "English medium instruction",
  ],
  image1:
   "https://www.insighteducations.co.in/wp-content/uploads/2024/10/1552548667php9umcRA.jpeg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDAQuydsFMhy4aHv20VOpLXpkQakY8iaDsQ&s",
  website: "https://www.dypatilunikop.org",
  mail: "admissions@dypatilunikop.org",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹23,10,000 per year",
     nri: "$36,000 per year",
     hostel: "₹1,00,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Renowned private medical college in Maharashtra with high academic standards",
  faq: [
   {
    question: "Is Dr. D. Y. Patil Medical College a deemed university?",
    answer:
     "Yes, it is a constituent unit of Dr. D. Y. Patil Vidyapeeth (Deemed to be University), Kolhapur.",
   },
   {
    question: "What is the dress code for DYP Kolhapur?",
    answer:
     "Students are generally expected to wear formal attire and a white coat during clinical postings and academic sessions.",
   },
   {
    question: "Can I get Dr. D Y Patil Medical College with 300 marks?",
    answer:
     "Admission depends on NEET cutoff trends for the year and category. 300 marks may qualify under management quota, but it's best to verify with counseling data.",
   },
  ],
 },
 {
  collegename: "Jawaharlal Nehru Medical College, Sawangi (Meghe), Wardha",
  established: "1990",
  collegetype: "Private",
  location: "Wardha, Maharashtra",
  address: "Sawangi (Meghe), Wardha, Maharashtra 442005",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Wardha",
  affiliatedby:
   "Datta Meghe Institute of Medical Sciences (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Jawaharlal Nehru Medical College (JNMC), Wardha, affiliated with Datta Meghe Institute of Medical Sciences (DMIHER), is a top-tier institution committed to excellence in medical education. Since its inception in 1990 and achieving its Silver Jubilee in 2015, JNMC has developed into a leading center of academic excellence, innovation, and compassionate care. The college is known for its rigorous curriculum, state-of-the-art infrastructure, and focus on producing ethical and skilled healthcare professionals. It has become synonymous with quality and trust in the field of medical sciences.",
  highlights: [
   "Established in 1990",
   "Affiliated with DMIHER (Deemed to be University)",
   "More than 30 years of excellence in medical education",
   "Recognized by MCI and WHO",
   "Focus on clinical expertise and ethics-based learning",
   "English medium instruction",
  ],
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAh0HmTh8LfKlHBccY68biLN0T_WYrFjixng&s",
  image2:
   "https://media.licdn.com/dms/image/v2/C560BAQF_0vElekCpyA/company-logo_200_200/company-logo_200_200/0/1674111990199/jawaharlal_nehru_medical_college_wardha_logo?e=2147483647&v=beta&t=tOmkwtncpz6n0XyiS6pxd_myBnDEJh6sj_bjtc6lJ6k",
  website: "https://dmimsu.edu.in/jnmc",
  mail: "admissions@dmimsu.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹23,50,000 per year (7.5% increment yearly)",
     nri: "$32,500 per year",
     hostel: "₹1,80,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Top medical college under DMIHER with consistent academic excellence",
  faq: [
   {
    question:
     "Which major specializations are available at Jawaharlal Nehru Medical College, Sawangi?",
    answer:
     "The college offers MD/MS programs in major specializations including General Medicine, Pediatrics, Surgery, Orthopedics, and more.",
   },
   {
    question:
     "How can I get into Jawaharlal Nehru Medical College, Sawangi for UG/PG courses?",
    answer:
     "Admission is through NEET (UG) for MBBS and NEET PG for postgraduate programs. Eligible candidates must apply through counseling.",
   },
   {
    question:
     "Which courses does Jawaharlal Nehru Medical College, Sawangi offer to students?",
    answer:
     "The college offers MBBS, MD/MS, and allied health science programs under DMIHER (Deemed University).",
   },
  ],
 },
 {
  collegename: "Krishna Institute of Medical Sciences, Karad",
  established: "1982",
  collegetype: "Private",
  location: "Karad, Maharashtra",
  address:
   "NH4, Pune - Bangalore Highway, Agashivnagar, Malkapur, Maharashtra 415539",
  approval: ["MCI", "WHO", "UGC", "NAAC A", "NABL", "NABH"],
  state: "Maharashtra",
  city: "Karad",
  affiliatedby: "Krishna Institute of Medical Sciences Deemed University",
  collegecategory: "Medical",
  universityDescription:
   "Krishna Institute of Medical Sciences (KIMS), Karad was established in 1982 and has evolved into a leading health sciences university. Approved by MCI, WHO, and UGC, and accredited by NAAC with an 'A' grade, the institute offers a wide range of programs including MBBS, MD/MS, super-speciality, and PhD courses. It also offers post-doctoral fellowships and programs in Nursing, Physiotherapy, and Biotechnology. Located on a large green campus along the Pune-Bangalore Highway, the college emphasizes clinical excellence, research, and holistic development.",
  highlights: [
   "Established in 1982",
   "NAAC 'A' Grade accredited deemed university",
   "Approved by MCI, WHO, NABL, NABH, and UGC",
   "Offers UG, PG, Super Speciality, and PhD programs",
   "Post-doctoral fellowships in 11 fields",
   "Located on a spacious campus with modern hospital facilities",
  ],
  image1:
   "https://www.educationworldngo.com/wp-content/uploads/2024/03/KIMS_OBhu6h2.2e16d0ba.fill-1920x620-1.png",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/7/70/Krishna_Institute_of_Medical_Sciences_Logo.png",
  website: "https://kimsuniversity.in",
  mail: "admissions@kimsuniversity.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: "₹23,00,000 per year",
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "DM / M.Ch. (Super Speciality Courses)",
    duration: "3 years",
    eligibility: "MD/MS + NEET SS qualification",
    fees: "As per university norms",
   },
   {
    name: "PhD / Fellowship Programs",
    duration: "As per program",
    eligibility: "Postgraduate in relevant discipline",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Top-rated private medical university with super-specialty and research programs",
  faq: [
   {
    question: "How many acres is Krishna Hospital Karad?",
    answer:
     "The Krishna Institute and Hospital campus is spread across over 50 acres in Malkapur, Karad.",
   },
   {
    question: "What is the entrance exam for Krishna Medical College Karad?",
    answer:
     "Admission to MBBS is through NEET UG, and postgraduate/super-specialty programs require NEET PG and NEET SS respectively.",
   },
   {
    question: "How good is KIMS Karad?",
    answer:
     "KIMS Karad is highly regarded for its clinical exposure, infrastructure, experienced faculty, and research opportunities across health sciences.",
   },
  ],
 },
 {
  collegename:
   "Mahatma Gandhi Missions Medical College, Aurangabad (MGM Institute of Health Sciences)",
  established: "1982",
  collegetype: "Private",
  location: "Aurangabad, Maharashtra",
  address:
   "Gate No. 2, MGM Campus, N-6, Cidco, Chhatrapati Sambhaji Nagar, Maharashtra 431003",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Aurangabad",
  affiliatedby: "MGM Institute of Health Sciences (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Mahatma Gandhi Missions Medical College, Aurangabad, under the MGM Institute of Health Sciences (Deemed to be University), was established in 1982 with a vision to provide high-quality medical education and health services. Founded by Hon. Shri Kamalkishore Kadam, the institution is known for its innovative teaching methods and commitment to social responsibility. MGM Trust has expanded its reach to multiple cities, and the Aurangabad campus stands as a model of excellence in healthcare education, offering modern infrastructure, experienced faculty, and a broad spectrum of UG and PG programs.",
  highlights: [
   "Established in 1982",
   "Part of MGM Institute of Health Sciences (Deemed University)",
   "Recognized by MCI and WHO",
   "Highly qualified leadership and expert faculty",
   "State-of-the-art infrastructure and hospital facilities",
   "Active in research, innovation, and community outreach",
  ],
  image1:
   "https://mdmsenquiry.com/wp-content/uploads/2016/12/mahatma-gandhi-missions-medical-college-navi-mumbai-1040x555.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw9GbNLiXAk-nP9yLnco-PEaWKX2dEyV3Y4A&s",
  website: "https://mgmuhs.com",
  mail: "info@mgmuhs.com",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹21,00,000 per year",
     nri: "$45,00,000 per year",
     hostel: "₹1,60,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Reputed medical college in Maharashtra under MGM Trust with robust infrastructure",
  faq: [
   {
    question: "What is the intake capacity of MBBS?",
    answer:
     "The MBBS intake capacity is determined by NMC and is generally 150 seats, subject to updates each year.",
   },
   {
    question: "Is there any scholarship available?",
    answer:
     "Scholarship availability may vary and is subject to merit, category, or institutional policies. Contact the admission office for current schemes.",
   },
   {
    question: "How is mess food at MGM Institute of Health Sciences?",
    answer:
     "The college provides hygienic and nutritious food in its mess, catering to different dietary preferences including vegetarian and non-vegetarian meals.",
   },
  ],
 },
 {
  collegename:
   "Mahatma Gandhi Missions Medical College, Navi Mumbai (MGM Institute of Health Sciences)",
  established: "1982",
  collegetype: "Private",
  location: "Navi Mumbai, Maharashtra",
  address: "Sector 1, Kamothe, Kalamboli, Navi Mumbai, Maharashtra 410209",
  approval: ["MCI", "WHO", "NAAC A"],
  state: "Maharashtra",
  city: "Navi Mumbai",
  affiliatedby: "MGM Institute of Health Sciences (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Mahatma Gandhi Missions Medical College, Navi Mumbai, under the MGM Institute of Health Sciences (Deemed to be University), was established in 1982 by the Mahatma Gandhi Mission Trust. The institute is accredited with NAAC 'A' grade and is known for offering a variety of UG, PG, and doctoral courses in medical sciences. Located in the Kamothe area of Navi Mumbai, the campus provides modern medical education infrastructure, qualified faculty, and a strong research environment, making it a preferred choice for aspiring medical professionals.",
  highlights: [
   "Established in 1982",
   "Affiliated with MGM Institute of Health Sciences (Deemed University)",
   "NAAC 'A' grade accredited",
   "Recognized by MCI and WHO",
   "Offers UG, PG, doctoral and fellowship programs",
   "Located in Kamothe, Navi Mumbai with modern infrastructure",
  ],
  image1:
   "https://webweb.ams3.cdn.digitaloceanspaces.com/data/mgmuniversity.webweb.ai.in/1734076218_6aa19d9d5c36b9ca23a2.png",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/4/41/MGM_Institute_of_Health_Sciences_Logo.png",
  website: "https://mgmuhs.com",
  mail: "info@mgmuhs.com",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: "₹21,00,000 per year",
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "PhD / Fellowship Programs",
    duration: "Varies",
    eligibility: "Postgraduate in relevant field",
    fees: "As per university norms",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "One of Maharashtra’s reputed private medical colleges under MGM Trust",
  faq: [
   {
    question: "What is the intake capacity of MBBS?",
    answer:
     "The MBBS intake is typically 150 students per year as per NMC guidelines.",
   },
   {
    question: "Is there any research centre in Navi Mumbai campus?",
    answer:
     "Yes, MGM Institute of Health Sciences Navi Mumbai houses active research centers in medical and allied sciences.",
   },
   {
    question: "How is mess food at MGM Institute of Health Sciences?",
    answer:
     "The mess provides hygienic and balanced meals catering to student preferences including vegetarian options.",
   },
  ],
 },
 {
  collegename: "Mahatma Gandhi Mission Medical College, Vashi",
  established: "2023",
  collegetype: "Private",
  location: "Navi Mumbai, Maharashtra",
  address: "Sector 1, Kamothe, Kalamboli, Navi Mumbai, Maharashtra 410209",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Navi Mumbai",
  affiliatedby: "MGM Institute of Health Sciences (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Mahatma Gandhi Mission Medical College, Vashi, established in 2023, is one of the latest additions under the Mahatma Gandhi Mission Trust. Affiliated with MGM Institute of Health Sciences (Deemed University), the college continues the trust’s mission to deliver excellence in medical education and healthcare. With a futuristic campus in Navi Mumbai and backed by an experienced management team, the institution aims to become a center of academic excellence in healthcare by adopting innovative teaching techniques and ensuring access to state-of-the-art facilities.",
  highlights: [
   "Established in 2023",
   "Newest medical college under MGM Trust",
   "Affiliated to MGM Institute of Health Sciences",
   "Recognized by MCI and WHO",
   "Focus on advanced medical infrastructure and innovation",
   "Located in Navi Mumbai with access to modern amenities",
  ],
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/05/Mahatma-Gandhi-Mission-Medical-College-Vashi-1.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdPCzmK1rFOJ3tBa1R_HYrummYZy9HN0Ccw&s",
  website: "https://mgmuhs.com",
  mail: "info@mgmuhs.com",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹21,00,000 per year",
     nri: "$45,00,000 per year",
     hostel: "₹1,60,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required (cutoff yet to stabilize)",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not applicable (new institution)",
   highestPackage: "Not applicable",
   companiesVisited: 0,
  },
  ranking:
   "Emerging medical college under MGM Trust with modern medical education standards",
  faq: [
   {
    question: "What is the intake capacity of MBBS?",
    answer:
     "The MBBS intake is typically 150 students per year, as per NMC norms and approval.",
   },
   {
    question: "What is the expected cutoff for admission?",
    answer:
     "The expected NEET cutoff is based on qualifying marks and varies yearly depending on competition and seat availability.",
   },
   {
    question: "What are the amenities at MGM Medical College and Hospital?",
    answer:
     "Amenities include advanced labs, lecture halls, library, hostel, sports facilities, and a multi-specialty teaching hospital.",
   },
  ],
 },
 {
  collegename: "Padmashri Dr. D. Y. Patil Medical College, Pimpri, Pune",
  established: "1996",
  collegetype: "Private",
  location: "Pimpri, Pune, Maharashtra",
  address:
   "Sant Tukaram Nagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Dr. D. Y. Patil Vidyapeeth (Deemed to be University), Pune",
  collegecategory: "Medical",
  universityDescription:
   "Established in 1996, Padmashri Dr. D. Y. Patil Medical College, Hospital and Research Centre, Pimpri, Pune is one of India’s premier medical institutions. It is affiliated to Dr. D. Y. Patil Vidyapeeth (Deemed University) and recognized by the National Medical Commission. The institution offers a comprehensive suite of UG, PG, super-specialty, PhD, certificate, and fellowship programs in medicine and allied health sciences. With state-of-the-art infrastructure, strong research culture, and an extensive teaching hospital, the college is known for producing globally competent and ethically strong healthcare professionals.",
  highlights: [
   "Established in 1996",
   "Affiliated to Dr. D. Y. Patil Vidyapeeth, Pune",
   "Recognized by MCI and WHO",
   "250 MBBS seats, 220 MD/MS seats, and 30 M.Ch./DM seats",
   "Offers MPH, MSc, PhD, Certificate, Fellowship, and STTP programs",
   "NAAC A++ accredited deemed university",
  ],
  image1:
   "https://www.microtec.in/storage/7b920da0-a367-4fb8-a17b-91e2fe4209b0/7b920da0-a367-4fb8-a17b-91e2fe4209b0-1605853217.jpg",
  image2:
   "https://www.reviewadda.com/assets/uploads/college/logo/LOGO_70964.png",
  website: "https://medical.dpu.edu.in",
  mail: "info@dpu.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹27,00,000 per year (7% increment yearly)",
     nri: "$60,000 per year",
     hostel: "₹3,05,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "M.Ch. / D.M. (Super Speciality)",
    duration: "3 years",
    eligibility: "MD / MS + NEET SS qualification",
    fees: "As per department",
   },
   {
    name: "PhD / Fellowship / MPH / MSc / Certificate Courses",
    duration: "Varies",
    eligibility: "As per respective course requirements",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Renowned center of excellence for medical education under Dr. D. Y. Patil Vidyapeeth",
  faq: [
   {
    question:
     "Is Dr. D. Y. Patil Vidyapeeth recognized by UGC and Government of India?",
    answer:
     "Yes, the university is UGC-approved and recognized by the Government of India as a Deemed to be University.",
   },
   {
    question: "What are the courses on offer?",
    answer:
     "The college offers MBBS, MD/MS, DM/MCh, MPH, MSc, PhD, certificate, and fellowship programs.",
   },
   {
    question: "Is hostel facility available?",
    answer:
     "Yes, the institution provides separate hostel facilities for male and female students with all amenities.",
   },
  ],
 },
 {
  collegename: "Padmashri Dr. D. Y. Patil Medical College, Navi Mumbai",
  established: "1989",
  collegetype: "Private",
  location: "Navi Mumbai, Maharashtra",
  address: "Sector 7, Nerul, Navi Mumbai, Maharashtra 400706",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Navi Mumbai",
  affiliatedby: "D. Y. Patil University (Deemed to be University), Navi Mumbai",
  collegecategory: "Medical",
  universityDescription:
   "Dr. D. Y. Patil Medical College, Navi Mumbai, established in 1989, is part of the esteemed D. Y. Patil University, a pioneer in higher education since 1983. With state-of-the-art infrastructure, research-focused academic culture, and a strong alumni base of over 55,000 professionals globally, the institution fosters holistic medical education. Approved by MCI and WHO, it offers world-class medical programs and emphasizes student-centric learning enriched with practical clinical exposure.",
  highlights: [
   "Established in 1989",
   "Part of D. Y. Patil University, Navi Mumbai",
   "Recognized by MCI and WHO",
   "Excellent infrastructure and teaching hospital",
   "Focus on research and holistic development",
   "Over 55,000 alumni globally",
  ],
  image1:
   "https://mbbscouncil.com/wp-content/uploads/2021/08/Dy-Patil-Medical-College-Navi-Mumbai-Campus-1280x720.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmw1XUipso33z-hXs67B1wSkSFve2M_zKLjg&s",
  website: "https://dypatil.edu",
  mail: "admissions@dypatil.edu",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹27,00,000 per year (2.5% increment yearly)",
     nri: "$49,000 per year",
     hostel: "₹2,10,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized among top private medical colleges in Maharashtra",
  faq: [
   {
    question:
     "What is the total fee for the MBBS course at Dr. D.Y. Patil Medical College, Navi Mumbai?",
    answer:
     "The total tuition fee is approximately ₹1.22 crore, excluding hostel and other charges.",
   },
   {
    question: "Are there hostel facilities available?",
    answer:
     "Yes, hostel facilities are available with an annual fee of ₹2,10,000.",
   },
   {
    question: "How many seats are available for the MBBS program?",
    answer:
     "The seat intake is generally 250 per year, as per National Medical Commission norms.",
   },
  ],
 },
 {
  collegename:
   "Rural Medical College, Loni (Pravara Institute of Medical Sciences)",
  established: "1984",
  collegetype: "Private",
  location: "Loni, Maharashtra",
  address:
   "HFH3+QMF, Pravara Institute of Medical Sciences, Unnamed Road, Loni, Maharashtra 413736",
  approval: ["MCI", "WHO", "NMC", "DCI"],
  state: "Maharashtra",
  city: "Loni",
  affiliatedby:
   "Pravara Institute of Medical Sciences (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Rural Medical College, Loni, established in 1984, is a constituent college of the Pravara Institute of Medical Sciences (Deemed University). Located in rural Maharashtra, it is committed to serving community healthcare and training competent healthcare professionals. The institute offers undergraduate, postgraduate, doctoral, and super-specialty courses across a wide range of medical disciplines. It is recognized by NMC and DCI and follows a holistic approach in healthcare education with focus on rural and underserved communities.",
  highlights: [
   "Established in 1984",
   "Affiliated with Pravara Institute of Medical Sciences (Deemed University)",
   "Recognized by NMC and WHO",
   "Offers UG, PG, PhD, and diploma programs",
   "Focus on rural and community-based healthcare training",
   "One of the oldest private medical colleges in Maharashtra",
  ],
  image1: "https://www.pravara.com/data1/images/001.jpg",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/c/cc/Pravara_Institute_of_Medical_Sciences_Logo.png",
  website: "https://www.pravara.com",
  mail: "info@pravara.com",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹21,00,000 per year",
     nri: "$45,00,000 per year",
     hostel: "₹1,60,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,70,000",
      nriFee: "US$ 40,850",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,70,000",
      nriFee: "US$ 40,850",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,70,000",
      nriFee: "US$ 40,850",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,70,000",
      nriFee: "US$ 40,850",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,70,000",
      nriFee: "US$ 40,850",
     },
     {
      name: "Forensic Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹6,70,000",
      nriFee: "US$ 40,850",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹16,80,000",
      nriFee: "US$ 1,02,440",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Radio Diagnosis",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Radiation Oncology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "ENT (Otorhinolaryngology)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "US$ 1,82,920",
     },
     {
      name: "Anaesthesia",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹22,40,000",
      nriFee: "US$ 1,36,580",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "M.Sc / PhD / Diploma Programs",
    duration: "Varies",
    eligibility: "Relevant UG/PG qualifications",
    fees: "As per course",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "A reputed rural-focused medical institution under PIMS Deemed University",
  faq: [
   {
    question:
     "What are the courses offered at the Rural Medical College, Loni?",
    answer:
     "Courses offered include MBBS, MD/MS, M.Sc, PhD, Diploma and PG Diploma programs across 25 specializations.",
   },
   {
    question:
     "What is the admission process for the MBBS program at RMC, Loni?",
    answer:
     "Admission is through NEET UG followed by counseling and document verification by the university.",
   },
   {
    question: "What is the annual intake for the MBBS program at RMC, Loni?",
    answer:
     "The intake for MBBS at Rural Medical College, Loni is typically 150 students per year.",
   },
  ],
 },
 {
  collegename: "Symbiosis Medical College for Women, Pune",
  established: "2020",
  collegetype: "Private",
  location: "Lavale, Pune, Maharashtra",
  address: "Women, Mulshi Road, Lavale, Pune, Maharashtra 412115",
  approval: ["MCI", "WHO"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Symbiosis International (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Symbiosis Medical College for Women (SMCW), established in 2020, is an exclusive women’s medical institution founded under the Symbiosis International (Deemed University). Inspired by the story of Anandibai Joshi, India’s first female doctor, the institution aims to empower women through medical education. Located in the scenic Lavale campus, the college provides modern infrastructure, quality clinical training, and a mission to increase the participation of women in India's medical fraternity.",
  highlights: [
   "Established in 2020",
   "Exclusive medical college for women",
   "Affiliated to Symbiosis International (Deemed University)",
   "Recognized by MCI and WHO",
   "Focus on women empowerment in healthcare",
   "Modern campus with strong academic support",
  ],
  image1: "https://images.indianexpress.com/2020/03/Symbiosis-759.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvlrLSn1Xu_0TGLnoeCzzPuuGjig6PJaNKA&s",
  website: "https://smcw.edu.in",
  mail: "admissions@smcw.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹12,80,500 per year (10% increment yearly)",
     nri: "$44,865 per year",
     hostel: "₹1,92,900 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Exclusive women's medical college under Symbiosis University with a vision for female empowerment",
  faq: [
   {
    question: "Can an NRI Candidate directly apply to SMCW?",
    answer:
     "Yes, NRI candidates can apply under the NRI/Management quota by fulfilling NEET and eligibility requirements.",
   },
   {
    question:
     "How many seats are there for MBBS under Management Quota at SMCW?",
    answer:
     "The exact number may vary yearly, but management/NRI quota seats are available as per university and NMC guidelines.",
   },
   {
    question: "What are the marks required for Symbiosis Medical College Pune?",
    answer:
     "Candidates must secure at least the qualifying NEET cutoff and meet 60% marks criteria in PCB to be eligible.",
   },
  ],
 },
 {
  collegename: "Institute of Medical Sciences & SUM Hospital, Bhubaneswar",
  established: "2007",
  collegetype: "Private",
  location: "Bhubaneswar, Odisha",
  address: "Ground Floor, Sum Hospital Rd, Shampur, Bhubaneswar, Odisha 751003",
  approval: ["MCI", "WHO", "NMC", "DCI", "INC"],
  state: "Odisha",
  city: "Bhubaneswar",
  affiliatedby: "Siksha 'O' Anusandhan (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Institute of Medical Sciences & SUM Hospital is a premier medical college under Siksha 'O' Anusandhan (Deemed University), Bhubaneswar. Established in 2007, the institute offers a wide range of undergraduate, postgraduate, and super-specialty programs in medicine, dentistry, and allied health sciences. Recognized by MCI, WHO, and other regulatory bodies, IMS & SUM Hospital boasts modern infrastructure, a multi-specialty hospital, and academic excellence across disciplines with a focus on holistic medical education and research.",
  highlights: [
   "Established in 2007",
   "Affiliated with Siksha 'O' Anusandhan (Deemed University)",
   "Approved by MCI, WHO, NMC, DCI, and INC",
   "Multi-specialty teaching hospital with modern infrastructure",
   "Wide range of UG, PG, super-specialty, and nursing courses",
   "English medium of instruction",
  ],
  image1:
   "https://images.squarespace-cdn.com/content/v1/5c8a25cd7eb88c40a615e042/1552651953665-B5AYLCCU5GMDQI16XX00/IMS+%26+SH",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1P5yRrcMHxpFB0Ek18Kt8XhFitiT4MXDvQ&s",
  website: "https://www.soa.ac.in/ims-sum-hospital",
  mail: "admissions@soa.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹14,95,000 per year",
     nri: "$36,000 per year",
     hostel: "₹1,58,000 per year",
    },
   },
   {
    name: "MD / MS / DM / M.Ch. (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "B.Sc / M.Sc / BDS / MDS / PhD",
    duration: "Varies",
    eligibility: "As per course requirement",
    fees: "₹2.4 Lakhs – ₹2.03 Crores (approx. depending on program)",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "One of the top private medical colleges in Eastern India with wide-ranging health sciences programs",
  faq: [
   {
    question: "What are the eligibility criteria for the MBBS program?",
    answer:
     "60% marks in Physics, Chemistry, Biology in 10+2 and a valid NEET qualification.",
   },
   {
    question: "How can I apply for admission?",
    answer:
     "Admission is based on NEET counseling and submission of the required documents.",
   },
   {
    question: "Does the institute offer hostel facilities?",
    answer:
     "Yes, separate hostel facilities for boys and girls are available with modern amenities.",
   },
  ],
 },
 {
  collegename: "Kalinga Institute of Medical Sciences, Bhubaneswar",
  established: "2007",
  collegetype: "Private",
  location: "Bhubaneswar, Odisha",
  address:
   "Kusabhadra Campus, KIMS Rd, Chandaka Industrial Estate, K I I T University, Patia, Bhubaneswar, Odisha 751024",
  approval: ["MCI", "WHO", "NMC"],
  state: "Odisha",
  city: "Bhubaneswar",
  affiliatedby:
   "Kalinga Institute of Industrial Technology (KIIT Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Kalinga Institute of Medical Sciences (KIMS), part of KIIT Deemed to be University, was established in 2007 and offers undergraduate, postgraduate, super-speciality, and doctoral programs in medical and health sciences. The institute is approved by MCI, WHO, and NMC, and provides education through 30 specializations. With state-of-the-art facilities and a teaching hospital, KIMS is a reputed institution for aspiring doctors in Eastern India.",
  highlights: [
   "Established in 2007",
   "Affiliated with KIIT (Deemed to be University)",
   "Approved by MCI, WHO, and NMC",
   "Offers 36 courses across UG, PG, Super-specialty and Doctorate programs",
   "Advanced infrastructure and teaching hospital",
   "English medium instruction",
  ],
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioKiMXSiCV3ZFlRz1nPyboiqgK_yUVsMavg&s",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdKegCFrJ8m_BinDsWOlf4ef3k9b92rM5-w&s",
  website: "https://kims.kiit.ac.in",
  mail: "info@kiit.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET",
    fees: {
     inr: "₹18,50,000 per year",
     nri: "$50,000 per year",
     hostel: "₹1,40,000 per year",
    },
   },
   {
    name: "MD / MS / DM / M.Ch. / PG Diploma",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "As per specialization",
   },
   {
    name: "Ph.D / Fellowship / Advanced Masters",
    duration: "Varies",
    eligibility: "Postgraduate in relevant stream",
    fees: "₹10,000 – ₹83,25,000 (as per program)",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualified Marks Required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG", "NEET SS"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "₹17.37 LPA",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Top-tier medical college in Odisha under KIIT University",
  faq: [
   {
    question: "Is Kalinga Institute of Medical Sciences a private college?",
    answer:
     "Yes, it is a private institution under KIIT Deemed to be University.",
   },
   {
    question: "What are the entrance exams accepted by KIMS Bhubaneswar?",
    answer:
     "NEET for MBBS, NEET PG for MD/MS, and NEET SS for super-specialty courses.",
   },
   {
    question: "What are the fees for MBBS at KIMS Bhubaneswar?",
    answer:
     "The tuition fee for MBBS is ₹18.5 lakhs per annum, excluding hostel charges.",
   },
  ],
 },
 {
  collegename:
   "Aarupadai Veedu Medical College (Vinayaka Missions University), Pondicherry",
  established: "2000",
  collegetype: "Private",
  location: "Pondicherry",
  address:
   "Pondy Cuddalore Main road, Kirumam pakkam, Bahour Commune Panchayat, Pondicherry - 607402",
  approval: ["MCI", "WHO"],
  state: "Pondicherry",
  city: "Pondicherry",
  affiliatedby:
   "Vinayaka Missions Research Foundation (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Aarupadai Veedu Medical College and Hospital (AVMCH), established in 2000, is located on a 44-acre lush green campus along the Pondicherry–Cuddalore National Highway. It is affiliated to Vinayaka Missions Research Foundation Deemed University since 2004. AVMCH offers UG, PG, and PhD programs across medical and interdisciplinary fields, maintaining high standards in healthcare education and research.",
  highlights: [
   "Established in 2000",
   "Affiliated to Vinayaka Missions Research Foundation (Deemed University)",
   "Approved by MCI and WHO",
   "150 MBBS and 99 PG seats annually",
   "Spread over 44 acres",
   "Offers UG, PG, and PhD programs",
   "English medium instruction",
  ],
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cKIFV9WQSBe6Sj8bSQ7SENmLhuml0MoLIg&s",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OHUjtBt7XMnCMXKrQ9OPj9u2DEcgx7jrTw&s",
  website: "https://avmc.edu.in",
  mail: "info@avmc.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualified",
    fees: {
     inr: "₹21,00,000 per year",
     nri: "N/A",
     hostel: "₹1,60,000 per year",
    },
   },
   {
    name: "MD / MS (PG Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "RadioDiagnosis",
      allIndiaSeats: 2,
      nriSeats: 1,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Dermatology, Venereology & Leprosy",
      allIndiaSeats: 1,
      nriSeats: 2,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 2,
      nriSeats: 2,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 4,
      nriSeats: 2,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 3,
      nriSeats: 2,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Opthalmology",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 8,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Otorhinolaryngology (ENT)",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Respiratory Medicine",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 4,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
   {
    name: "Ph.D Programs",
    duration: "Varies",
    eligibility: "Postgraduate degree in relevant discipline",
    fees: "As per program",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "NEET qualified",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized institution under Vinayaka Missions Deemed University",
  faq: [
   {
    question:
     "If I resign after the counseling period, will I be eligible for a return on the fees?",
    answer:
     "The fee refund policy depends on the college’s rules and the timing of resignation. Check with admissions for clarity.",
   },
   {
    question: "Is the NEET counseling process online?",
    answer:
     "Yes, the NEET counseling process is conducted online for all India and state quotas.",
   },
   {
    question:
     "Can I change my details in the NEET PG application after submission?",
    answer:
     "Only specific fields can be edited during the correction window. Refer to NBE notifications for details.",
   },
  ],
 },

 //  {
 //   collegename:
 //    "Aarupadai Veedu Medical College (Vinayaka Missions University), Pondicherry",
 //   established: "2000",
 //   collegetype: "Private",
 //   location: "Pondicherry",
 //   address:
 //    "Pondy Cuddalore Main road, Kirumam pakkam, Bahour Commune Panchayat, Pondicherry - 607402",
 //   approval: ["MCI", "WHO"],
 //   state: "Pondicherry",
 //   city: "Pondicherry",
 //   affiliatedby:
 //    "Vinayaka Missions Research Foundation (Deemed to be University)",
 //   collegecategory: "Medical",
 //   universityDescription:
 //    "Aarupadai Veedu Medical College and Hospital (AVMCH), established in 2000, is located on a 44-acre lush green campus along the Pondicherry–Cuddalore National Highway. It is affiliated to Vinayaka Missions Research Foundation Deemed University since 2004. AVMCH offers UG, PG, and PhD programs across medical and interdisciplinary fields, maintaining high standards in healthcare education and research.",
 //   highlights: [
 //    "Established in 2000",
 //    "Affiliated to Vinayaka Missions Research Foundation (Deemed University)",
 //    "Approved by MCI and WHO",
 //    "150 MBBS and 99 PG seats annually",
 //    "Spread over 44 acres",
 //    "Offers UG, PG, and PhD programs",
 //    "English medium instruction",
 //   ],
 //   image1: "https://example.com/avmc_front.jpg",
 //   image2: "https://example.com/avmc_campus.jpg",
 //   website: "https://avmc.edu.in",
 //   mail: "info@avmc.edu.in",
 //   courses: [
 //    {
 //     name: "MBBS",
 //     duration: "4.5 years + 1 year internship",
 //     eligibility: "60% in Physics, Chemistry, Biology + NEET qualified",
 //     fees: "₹19,50,000 per year",
 //    },
 //    {
 //     name: "Postgraduate Courses (MD/MS)",
 //     duration: "3 years",
 //     eligibility: "MBBS + NEET PG",
 //     fees: "As per specialization",
 //    },
 //    {
 //     name: "Ph.D Programs",
 //     duration: "Varies",
 //     eligibility: "Postgraduate degree in relevant discipline",
 //     fees: "As per program",
 //    },
 //   ],
 //   cutoffdata: [
 //    {
 //     exam: "NEET",
 //     expectedCutoff: "NEET qualified",
 //    },
 //   ],
 //   admissionProcess: [
 //    "Class X Marksheet / Birth Certificate",
 //    "Class XII Marksheet",
 //    "NEET Scorecard and Rank Letter",
 //    "Aadhaar Card Photocopy",
 //    "Recent Passport-size Photographs",
 //    "Caste Certificate (if applicable)",
 //    "Physical Disability Certificate (if applicable)",
 //   ],
 //   entranceExams: ["NEET", "NEET PG"],
 //   hostelFacilities: true,
 //   scholarships: false,
 //   placements: {
 //    averagePackage: "Not disclosed",
 //    highestPackage: "Not disclosed",
 //    companiesVisited: 0,
 //   },
 //   ranking: "Recognized institution under Vinayaka Missions Deemed University",
 //   faq: [
 //    {
 //     question:
 //      "If I resign after the counseling period, will I be eligible for a return on the fees?",
 //     answer:
 //      "The fee refund policy depends on the college’s rules and the timing of resignation. Check with admissions for clarity.",
 //    },
 //    {
 //     question: "Is the NEET counseling process online?",
 //     answer:
 //      "Yes, the NEET counseling process is conducted online for all India and state quotas.",
 //    },
 //    {
 //     question:
 //      "Can I change my details in the NEET PG application after submission?",
 //     answer:
 //      "Only specific fields can be edited during the correction window. Refer to NBE notifications for details.",
 //    },
 //   ],
 //  },
 {
  collegename:
   "Mahatma Gandhi Medical College & Research Institute (Sri Balaji Vidyapeeth), Pondicherry",
  established: "2001",
  collegetype: "Private",
  location: "Pondicherry",
  address: "Pondicherry - Cuddalore Rd, ECR, Pillayarkuppam, Puducherry 607402",
  approval: ["MCI", "WHO"],
  state: "Pondicherry",
  city: "Pondicherry",
  affiliatedby: "Sri Balaji Vidyapeeth (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Mahatma Gandhi Medical College and Research Institute (MGMCRI), a constituent college of Sri Balaji Vidyapeeth Deemed University, is ranked among the top 50 medical institutions in India by NIRF 2023. Accredited with NAAC A++ Grade, MGMCRI is recognized for academic excellence, high-quality research, patient care, and a conducive learning environment for future medical professionals.",
  highlights: [
   "Established in 2001",
   "NAAC A++ accredited university",
   "Top 50 medical colleges in NIRF 2023",
   "Advanced infrastructure and faculty",
   "Part of Sri Balaji Vidyapeeth (Deemed University)",
   "Recognized by MCI and WHO",
  ],
  image1:
   "https://sbvu.ac.in/wp-content/uploads/elementor/thumbs/Arial-View-SBV-Campus-1-puw256hpz4uwbc6umrtw4koizwz9irdhnr3qg9kryg.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPltewobY3jJbayuuuVKZGmW9iKuvLwMSCKw&s",
  website: "https://sbvu.ac.in/mgmcri/",
  mail: "admissions@mgmcri.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹24,00,000 per year",
     nri: "$50,000 per year",
     hostel: "₹2,50,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Ranked among Top 50 Medical Institutions by NIRF 2023",
  faq: [
   {
    question: "What is the duration of the MBBS program?",
    answer:
     "The MBBS program is 4.5 years long followed by a 1-year compulsory internship.",
   },
   {
    question: "What are the eligibility criteria for the MBBS program?",
    answer: "Candidates must have 60% in PCB in 10+2 and must qualify NEET.",
   },
   {
    question: "What facilities are available on campus?",
    answer:
     "Facilities include modern classrooms, labs, hospital, hostel, library, and sports infrastructure.",
   },
  ],
 },
 {
  collegename:
   "Sri Lakshmi Narayana Institute of Medical Sciences (Bharat University), Pondicherry",
  established: "2006",
  collegetype: "Private",
  location: "Pondicherry",
  address:
   "Osudu Agaram Village, Villianur Commune, Kudapakkam Post, Villianur, Puducherry 605502",
  approval: ["MCI", "WHO"],
  state: "Pondicherry",
  city: "Pondicherry",
  affiliatedby: "Bharath Institute of Higher Education and Research, Chennai",
  collegecategory: "Medical",
  universityDescription:
   "Sri Lakshmi Narayana Institute of Medical Sciences, affiliated with Bharath University and established in 2006, provides both undergraduate and postgraduate medical education. With a strong mission to offer affordable advanced healthcare, the college admits 250 MBBS students annually and offers various MD/MS and Ph.D programs. It is recognized by MCI and aims to deliver medical care with compassion in a diverse and inclusive environment.",
  highlights: [
   "Established in 2006",
   "Affiliated to Bharath University",
   "Recognized by MCI and Ministry of Health & Family Welfare",
   "Offers UG, PG, and PhD programs",
   "250 MBBS seats per year",
   "Diverse student body with support programs",
  ],
  image1:
   "https://argroupofeducation.com/wp-content/uploads/2024/02/slnims-pondicherry.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmBbUPNUonSZYqFJxE0LjHspAX5PnHsAudg&s",
  website: "https://www.slims.ac.in/",
  mail: "admissions@slims.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹25,00,000 per year",
     nri: "N/A",
     hostel: "₹1,72,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Community Medicine",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Radio-Diagnosis",
      allIndiaSeats: 6,
      nriSeats: 0,
      allIndiaFee: "₹55,00,000",
      nriFee: "",
     },
     {
      name: "Dermatology (Venereology & Leprosy)",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹60,00,000",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "₹45,00,000",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹32,00,000",
      nriFee: "",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹45,00,000",
      nriFee: "",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹35,00,000",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹35,00,000",
      nriFee: "",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 6,
      nriSeats: 0,
      allIndiaFee: "₹35,00,000",
      nriFee: "",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "₹40,00,000",
      nriFee: "",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 6,
      nriSeats: 0,
      allIndiaFee: "₹55,00,000",
      nriFee: "",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 5,
      nriSeats: 0,
      allIndiaFee: "₹50,00,000",
      nriFee: "",
     },
     {
      name: "ENT (Otorhinolaryngology)",
      allIndiaSeats: 4,
      nriSeats: 0,
      allIndiaFee: "₹35,00,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized by MCI and Government of India",
  faq: [
   {
    question:
     "Is Sri Lakshmi Narayana Institute of Medical Science a known college/Institute?",
    answer:
     "Yes, it is a well-recognized institute affiliated with Bharath University and approved by MCI and WHO.",
   },
   {
    question: "What all specializations are provided by the courses offered?",
    answer:
     "The institute offers MBBS and various postgraduate specializations including General Medicine, Surgery, Pediatrics, Radiology, Orthopedics, and more.",
   },
   {
    question:
     "Which courses does Sri Lakshmi Narayana Institute of Medical Science offer?",
    answer:
     "It offers undergraduate (MBBS), postgraduate (MD/MS), and Ph.D. programs across various medical disciplines.",
   },
  ],
 },
 {
  collegename:
   "Vinayaka Missions Medical College (Vinayaka Missions University), Karaikal, Pondicherry",
  established: "1996",
  collegetype: "Private",
  location: "Pondicherry",
  address: "Keezhakasakudy Medu, Kottucherry Post, Puducherry 609609",
  approval: ["MCI", "WHO"],
  state: "Pondicherry",
  city: "Karaikal",
  affiliatedby:
   "Vinayaka Mission's Research Foundation - Deemed to be University",
  collegecategory: "Medical",
  universityDescription:
   "Vinayaka Missions Medical College was established in 1996 under the leadership of Dr. A. Shanmugasundaram. The college has received permanent recognition from the Medical Council of India and offers both undergraduate and postgraduate programs in medicine. It provides comprehensive training and modern infrastructure to medical students from across the country.",
  highlights: [
   "Established in 1996",
   "Affiliated with Vinayaka Mission's University",
   "Recognized by MCI and Ministry of Health",
   "Permanent MCI recognition since 2003",
   "Offers MBBS and postgraduate medical courses",
  ],
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2022/09/Vinayaka-Missions-Medical-College-Karaikal-1.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQso17OFwAB2AE1rfw1WHXOtZKLMb0i08OA&s",
  website: "https://www.vmmckkl.edu.in/",
  mail: "admissions@vmmckkl.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹19,50,000 per year",
     nri: "N/A",
     hostel: "₹1,35,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking: "Recognized by MCI and Government of India",
  faq: [
   {
    question: "What is the duration of the MBBS program?",
    answer:
     "The MBBS program is 4.5 years followed by a 1-year compulsory internship.",
   },
   {
    question: "What are the eligibility criteria for the MBBS program?",
    answer:
     "Candidates must have 60% in PCB subjects in 10+2 and should be NEET qualified.",
   },
   {
    question: "What facilities are available on campus?",
    answer:
     "The college offers modern medical facilities, hostel accommodations, libraries, labs, and a teaching hospital.",
   },
  ],
 },
 {
  collegename:
   "VMKV (Vinayaka Missions Kirupananda Variyar Medical) College and Hospital, Salem",
  established: "1995",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "H3P7+6HJ, Chinnasiragapadi, Salem, Tamil Nadu 636308",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Salem",
  affiliatedby: "Vinayaka Mission's Research Foundation",
  collegecategory: "Medical",
  universityDescription:
   "Vinayaka Mission’s Kirupananda Variyar Medical College, established in 1995 in Salem, Tamil Nadu, was originally affiliated with The Tamil Nadu Dr. MGR Medical University. It became a part of the Vinayaka Mission's Research Foundation in 2004. The college is spread across 51 acres and offers undergraduate and postgraduate courses in medicine through 23 MCI-recognized departments.",
  highlights: [
   "Established in 1995",
   "Constituent college of Vinayaka Mission's Research Foundation",
   "Recognized by MCI and WHO",
   "Located in a 51-acre rural campus",
   "Offers UG and PG courses in medicine",
  ],
  image1: "https://www.vmkvmc.edu.in/images/college.png",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZR6WinEPizdC2UsYolTX4A8Ay1ONFhn1fQ&s",
  website: "https://www.vmmckkl.edu.in/",
  mail: "info@vmkvmed.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹21,50,000 per year",
     nri: "N/A",
     hostel: "₹70,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: 0,
  },
  ranking:
   "Recognized by MCI and affiliated with Vinayaka Mission's Research Foundation",
  faq: [
   {
    question: "Who is the owner of Vinayaka Mission medical college Salem?",
    answer:
     "Vinayaka Mission’s Medical College was founded by Dr. A. Shanmugasundaram under the Vinayaka Mission's Trust.",
   },
   {
    question: "Is Vinayaka Mission university degree valid?",
    answer:
     "Yes, the degrees awarded by Vinayaka Mission's University are valid and recognized by statutory bodies like MCI and UGC.",
   },
   {
    question: "What is the status of Vinayaka Mission University?",
    answer:
     "It is a Deemed-to-be University under the UGC Act, offering recognized medical degrees.",
   },
  ],
 },
 {
  collegename:
   "ACS Medical College & Hospital (Dr. MGR Educational & Research Institute), Chennai",
  established: "2008",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "Poonamallee High Rd, Velappanchavadi, Chennai, Tamil Nadu 600077",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby: "Dr. M.G.R. Educational and Research Institute",
  collegecategory: "Medical",
  universityDescription:
   "ACS Medical College & Hospital, established in 2008 under Dr. MGR Educational and Research Institute (Deemed to be University), was founded with the objective of providing high-quality medical education and health services. The institution is dedicated to preparing a skilled and socially responsible medical community. The college is recognized by the Medical Council of India (MCI) and WHO, and offers a comprehensive MBBS program along with postgraduate courses.",
  highlights: [
   "Established in 2008",
   "Affiliated with Dr. M.G.R. Educational and Research Institute",
   "Recognized by MCI and WHO",
   "Comprehensive MBBS and PG medical programs",
   "Urban campus in Chennai",
  ],
  image1: "https://acsmch.ac.in/wp-content/uploads/2023/09/comtact.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTpBFg_sHnijfVXTpw3jmYOQlrPRIdN0eJ1w&s",
  website: "https://acsmch.ac.in/",
  mail: "info@acsmch.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹23,00,000 per year",
     nri: "$55,000 per year",
     hostel: "₹1,70,000 per year",
    },
   },
   {
    name: "MD / MS (PG Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET-PG qualification",
    fees: "Varies by specialization",
    specializations: [
     { name: "Human Anatomy", allIndiaFee: "₹5,00,000" },
     { name: "Human Physiology", allIndiaFee: "₹5,00,000" },
     { name: "Biochemistry", allIndiaFee: "₹5,00,000" },
     { name: "Pathology", allIndiaFee: "₹14,00,000" },
     { name: "Microbiology", allIndiaFee: "Not specified" },
     { name: "Pharmacology", allIndiaFee: "Not specified" },
     { name: "Forensic Medicine", allIndiaFee: "₹5,00,000" },
     { name: "Community Medicine", allIndiaFee: "Not specified" },
     { name: "General Medicine", allIndiaFee: "₹40,00,000", nriFee: "$78,500" },
     { name: "Paediatrics", allIndiaFee: "₹40,00,000", nriFee: "$78,500" },
     { name: "Dermatology", allIndiaFee: "₹50,00,000", nriFee: "$1,10,000" },
     { name: "General Surgery", allIndiaFee: "₹40,00,000" },
     { name: "Orthopedics", allIndiaFee: "₹45,00,000", nriFee: "$90,000" },
     { name: "Anaesthesiology", allIndiaFee: "₹30,00,000" },
     { name: "E.N.T.", allIndiaFee: "Not specified" },
     { name: "Ophthalmology", allIndiaFee: "Not specified" },
     {
      name: "Obst. & Gynecology",
      allIndiaFee: "₹45,00,000",
      nriFee: "$1,00,000",
     },
     { name: "Radiology", allIndiaFee: "₹50,00,000", nriFee: "$1,10,000" },
     { name: "Psychiatry", allIndiaFee: "₹30,00,000" },
     { name: "Respiratory Medicine (TB & Chest)", allIndiaFee: "₹35,00,000" },
     { name: "Emergency Medicine", allIndiaFee: "Not specified" },
     { name: "Geriatrics", allIndiaFee: "Not specified" },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET", "NEET PG"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not specified",
   highestPackage: "Not specified",
   companiesVisited: 0,
  },
  ranking:
   "Recognized by MCI, Affiliated to Dr. MGR Educational and Research Institute",
  faq: [
   {
    question: "Is ACS Medical College good for MBBS?",
    answer:
     "ACS Medical College is recognized by MCI and WHO, offering standard infrastructure and medical training facilities.",
   },
   {
    question: "What is the pass percentage for ACS Medical College?",
    answer:
     "The pass percentage varies each year but aligns with national MBBS average trends.",
   },
   {
    question: "Who is the owner of ACS Medical College?",
    answer:
     "The college is a part of Dr. M.G.R. Educational and Research Institute (Deemed to be University).",
   },
  ],
 },
 //  {
 //   collegename:
 //    "ACS Medical College & Hospital (Dr. MGR Educational & Research Institute), Chennai",
 //   established: "2008",
 //   collegetype: "Private",
 //   location: "Tamil Nadu",
 //   address: "Poonamallee High Rd, Velappanchavadi, Chennai, Tamil Nadu 600077",
 //   approval: ["MCI", "WHO"],
 //   state: "Tamil Nadu",
 //   city: "Chennai",
 //   affiliatedby: "Dr. M.G.R. Educational and Research Institute",
 //   collegecategory: "Medical",
 //   universityDescription:
 //    "ACS Medical College & Hospital, established in 2008 under Dr. MGR Educational and Research Institute (Deemed to be University), was founded with the objective of providing high-quality medical education and health services. The institution is dedicated to preparing a skilled and socially responsible medical community. The college is recognized by the Medical Council of India (MCI) and WHO, and offers a comprehensive MBBS program along with postgraduate courses.",
 //   highlights: [
 //    "Established in 2008",
 //    "Affiliated with Dr. M.G.R. Educational and Research Institute",
 //    "Recognized by MCI and WHO",
 //    "Comprehensive MBBS and PG medical programs",
 //    "Urban campus in Chennai",
 //   ],
 //   image1: "https://example.com/images/acs_frontview.jpg",
 //   image2: "https://example.com/images/acs_campus.jpg",
 //   website: "https://acsmch.ac.in/",
 //   mail: "info@acsmch.ac.in",
 //   courses: [
 //    {
 //     name: "MBBS",
 //     duration: "4.5 years + 1 year internship",
 //     eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
 //     fees: "₹23,00,000 per annum",
 //    },
 //   ],
 //   cutoffdata: [
 //    {
 //     exam: "NEET",
 //     expectedCutoff: "Qualifying NEET marks",
 //    },
 //   ],
 //   admissionProcess: [
 //    "Class X Marksheet / Birth Certificate",
 //    "Class XII Marksheet",
 //    "NEET Scorecard and Rank Letter",
 //    "Aadhaar Card Photocopy",
 //    "Recent Passport-size Photographs",
 //    "Caste Certificate (if applicable)",
 //    "Physical Disability Certificate (if applicable)",
 //   ],
 //   entranceExams: ["NEET"],
 //   hostelFacilities: true,
 //   scholarships: false,
 //   placements: {
 //    averagePackage: "Not specified",
 //    highestPackage: "Not specified",
 //    companiesVisited: 0,
 //   },
 //   ranking:
 //    "Recognized by MCI, Affiliated to Dr. MGR Educational and Research Institute",
 //   faq: [
 //    {
 //     question: "Is ACS Medical College good for MBBS?",
 //     answer:
 //      "ACS Medical College is recognized by MCI and WHO, offering standard infrastructure and medical training facilities.",
 //    },
 //    {
 //     question: "What is the pass percentage for ACS Medical College?",
 //     answer:
 //      "The pass percentage varies each year but aligns with national MBBS average trends.",
 //    },
 //    {
 //     question: "Who is the owner of ACS Medical College?",
 //     answer:
 //      "The college is a part of Dr. M.G.R. Educational and Research Institute (Deemed to be University).",
 //    },
 //   ],
 //  },
 {
  collegename: "Bhaarat Medical College & Hospital, Chennai",
  established: "2020",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "173, Agaram Main Rd., Selaiyur, Chennai, Tamil Nadu 600073",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby: "Bharath Institute of Higher Education and Research",
  collegecategory: "Medical",
  universityDescription:
   "Bhaarat Medical College & Hospital, established in 2020, is a private medical college in Chennai offering high-quality education and healthcare. Recognized by the Medical Council of India (MCI) and WHO, the college aims to provide modern medical training through experienced faculty and state-of-the-art facilities. The MBBS program is offered under the affiliation of Bharath Institute of Higher Education and Research, with the objective of creating competent and compassionate healthcare professionals.",
  highlights: [
   "Established in 2020",
   "Affiliated with Bharath Institute of Higher Education and Research",
   "Recognized by MCI and WHO",
   "Located in the urban region of Chennai",
   "Modern infrastructure and specialized faculty",
  ],
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2022/07/Bhaarath-Medical-College.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHuLdYdGhJtrapx4_zB_BB_uAFDgSn4lsNA&s",
  website: "https://bharathuniv.ac.in/bmch/",
  mail: "info@bharathuniv.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹25,00,000 per year",
     nri: "N/A",
     hostel: "₹1,72,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not specified",
   highestPackage: "Not specified",
   companiesVisited: 0,
  },
  ranking:
   "Recognized by MCI and affiliated to Bharath Institute of Higher Education and Research",
  faq: [
   {
    question:
     "How many seats are available for Bhaarath Medical College Chennai medical science aspirants?",
    answer: "The exact number varies per year, typically around 150 for MBBS.",
   },
   {
    question:
     "What are the courses offered at Bhaarath Medical College Chennai?",
    answer:
     "Currently, the college offers MBBS and plans for PG programs in the future.",
   },
   {
    question: "Does Bhaarath Medical College Chennai have a hostel?",
    answer: "Yes, hostel facilities are available for both boys and girls.",
   },
  ],
 },
 {
  collegename: "Chettinad Hospital & Research Institute, Kanchipuram, Chennai",
  established: "2006",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "Chettinad Health City, SH 49A, Kelambakkam, Tamil Nadu 603103",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby: "Chettinad Academy of Research and Education (CARE)",
  collegecategory: "Medical",
  universityDescription:
   "Chettinad Hospital & Research Institute, founded in 2006, is a leading private medical college in Tamil Nadu. It offers undergraduate, postgraduate, and advanced specialty courses in medical and health sciences. With an annual intake of nearly 500 seats across various disciplines, the institute is known for its academic excellence, research-driven education, and a holistic approach to healthcare training. Affiliated to Chettinad Academy of Research and Education, the institute is approved by the Medical Council of India and the WHO.",
  highlights: [
   "Established in 2006",
   "Located in Chettinad Health City, Chennai",
   "Affiliated to Chettinad Academy of Research and Education",
   "Approved by MCI and WHO",
   "Offers UG, PG, Super Speciality and Diploma programs",
  ],
  image1:
   "https://care.edu.in/wp-content/uploads/2020/07/building-about-care.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtOZU_C_WMVPvJQukc28K2S3hC4Pywe5g5UA&s",
  website: "https://care.edu.in",
  mail: "info@care.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹24,50,000 per year",
     nri: "N/A",
     hostel: "₹2,55,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not specified",
   highestPackage: "Not specified",
   companiesVisited: 0,
  },
  ranking: "Recognized by MCI and affiliated to CARE",
  faq: [
   {
    question: "Who is the chairman of Chettinad Hospital?",
    answer:
     "The chairman is Dr. M.A.M.R. Muthiah, an eminent educationist and industrialist.",
   },
   {
    question: "When was Chettinad Medical College established?",
    answer: "It was established in the year 2006.",
   },
   {
    question: "Does Chettinad Medical College provide hostel facilities?",
    answer:
     "Yes, separate hostels are available for boys and girls with all modern amenities.",
   },
  ],
 },
 {
  collegename: "J R Medical College and Hospital, Villupuram",
  established: "2023",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "Avanampattu, Tamil Nadu 604206",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Villupuram",
  affiliatedby: "Bharath University, Chennai",
  collegecategory: "Medical",
  universityDescription:
   "JR Medical College and Hospital, Villupuram, established in 2023, is a private medical college affiliated with Bharath University, Chennai and approved by the National Medical Commission (formerly MCI). It offers undergraduate medical education with the aim of creating skilled and compassionate doctors. The institution is headed by Dean Dr. G. Rajendran and focuses on a practical, patient-oriented approach to learning. Located in Avanampattu, Tamil Nadu, the college is well-equipped to serve aspiring medical professionals in southern India.",
  highlights: [
   "Established in 2023",
   "Affiliated with Bharath University, Chennai",
   "Approved by MCI and WHO",
   "Located in Avanampattu, Villupuram",
   "Modern infrastructure with medical and paramedical departments",
  ],
  image2: "https://jrmch.ac.in/images/jrmedical.png",
  image1: "https://jrmch.ac.in/images/jrmch5.jpg",
  website: "https://jrmedcollege.edu.in",
  mail: "info@jrmedcollege.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹18,00,000 per year",
     nri: "N/A",
     hostel: "₹1,35,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not yet applicable",
   highestPackage: "Not yet applicable",
   companiesVisited: 0,
  },
  ranking: "Newly established, recognized by MCI",
  faq: [
   {
    question: "What courses are offered at J R Medical College and Hospital?",
    answer: "Currently, the college offers the MBBS undergraduate program.",
   },
   {
    question: "Does the college offer postgraduate (PG) courses?",
    answer: "As of now, PG courses are not yet introduced.",
   },
   {
    question: "What facilities are available on campus?",
    answer:
     "The college provides modern infrastructure, labs, libraries, and hostel accommodation.",
   },
  ],
 },
 {
  collegename:
   "Meenakshi Medical College & Research Institute, Kanchipuram, Chennai",
  established: "2003",
  collegetype: "Private",
  location: "Tamil Nadu",
  address:
   "Raasi Nagar, Karrapettai Post, Enathur, Meenakshi Nagar, Tamil Nadu 631552",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Kanchipuram",
  affiliatedby: "MAHER (Meenakshi Academy of Higher Education and Research)",
  collegecategory: "Medical",
  universityDescription:
   "Meenakshi Medical College Hospital and Research Institute (MMCHRI), a constituent unit of MAHER, is a premier medical institution located in Kanchipuram, Tamil Nadu. Established in 2003, MMCHRI is recognized by the Medical Council of India. The institute provides quality education and healthcare services while fostering research and innovation. With a commitment to service, the college focuses on training future doctors to serve communities, especially the underprivileged, with compassion and skill.",
  highlights: [
   "Established in 2003",
   "Recognized by MCI and WHO",
   "Affiliated with MAHER",
   "Located in the temple city of Kanchipuram",
   "Focus on underprivileged and rural healthcare outreach",
  ],
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDY8lulOsS-tGnWN3BvD11H9dL-IgyZ4mlQ&s",
  image2:
   "data:image/png;base64,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",
  website: "https://mmchri.ac.in",
  mail: "info@mmchri.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹19,50,000 per year",
     nri: "$50,000 per year",
     hostel: "₹1,50,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "N/A",
   highestPackage: "N/A",
   companiesVisited: 0,
  },
  ranking: "Recognized by MCI; among private medical colleges in Tamil Nadu",
  faq: [
   {
    question: "What is the annual intake for the MBBS program?",
    answer: "The current annual intake for MBBS at MMCHRI is 150 students.",
   },
   {
    question: "What is the duration of the MBBS program?",
    answer:
     "The MBBS program is 4.5 years long followed by 1 year of compulsory internship.",
   },
   {
    question: "Does MMCHRI provide hostel facilities?",
    answer:
     "Yes, MMCHRI provides hostel accommodation for both boys and girls with all basic amenities.",
   },
  ],
 },
 {
  collegename: "Saveetha Medical College & Hospital, Kanchipuram, Chennai",
  established: "2008",
  collegetype: "Private",
  location: "Tamil Nadu",
  address:
   "Saveetha Nagar, Thandalam, Chennai Bengaluru, NH 48, Chennai, Tamil Nadu 602105",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Kanchipuram",
  affiliatedby:
   "Saveetha Institute of Medical and Technical Sciences (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "Saveetha Medical College & Hospital is a premier medical institution located in Kanchipuram, Tamil Nadu. Established in 2008, it is affiliated with Saveetha University and is recognized by the MCI and WHO. Saveetha Medical College has achieved a unique distinction of receiving the Platinum Plus rating by QS I-Gauge, the highest awarded to any medical institution in India, owing to its exceptional research output and academic excellence.",
  highlights: [
   "Established in 2008",
   "Recognized by MCI and WHO",
   "Affiliated to Saveetha Institute of Medical and Technical Sciences",
   "Awarded Platinum Plus by QS I-Gauge",
   "Known for high research output",
  ],
  image1:
   "https://images.squarespace-cdn.com/content/v1/6461137574dccf6fafa0d2b2/30cc82fd-3741-4b7a-9842-9ece51fa2a49/118715053_364814978241434_2613171837042119305_n.jpg",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
  website: "https://www.saveetha.com",
  mail: "info@saveetha.com",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualified",
    fees: {
     inr: "₹25,00,000 per year",
     nri: "N/A",
     hostel: "₹1,30,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,000",
      nriFee: "",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,000",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,000",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹7,00,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹10,00,000",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹20,00,000",
      nriFee: "",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,00,000",
      nriFee: "",
     },
     {
      name: "ENT (Oto-Rhino-Laryngology)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹22,00,000",
      nriFee: "",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹25,00,000",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹40,00,000",
      nriFee: "$65,000",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹36,00,000",
      nriFee: "$55,000",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹36,00,000",
      nriFee: "$60,000",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹36,00,000",
      nriFee: "$60,000",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹36,00,000",
      nriFee: "$60,000",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying marks required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "N/A",
   highestPackage: "N/A",
   companiesVisited: 0,
  },
  ranking:
   "Awarded QS I-Gauge Platinum Plus for Research and Academic Excellence",
  faq: [
   {
    question:
     "How is life at Saveetha Institute of Medical and Technical Sciences?",
    answer:
     "Life at Saveetha is enriching with a strong focus on academics, research, and personal growth through extracurricular activities.",
   },
   {
    question: "Is studying at Saveetha University expensive?",
    answer:
     "Yes, the tuition fees are relatively higher, reflecting the premium facilities and education offered.",
   },
   {
    question: "Who is the founder of Saveetha Hospital?",
    answer:
     "Dr. N. M. Veeraiyan is the founder of Saveetha Institute of Medical and Technical Sciences and its medical institutions.",
   },
  ],
 },
 {
  collegename:
   "Shri Satya Sai Medical College & Research Institute (Sri Balaji Vidyapeeth), Kanchipuram",
  established: "2008",
  collegetype: "Private",
  location: "Tamil Nadu",
  address:
   "P4WJ+6R6, Tiruporur-Guduvancherry Main Road, Ammapettai, Chengalpet Taluk, Kancheepuram District, Nellikuppam, Tamil Nadu 603108",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Kanchipuram",
  affiliatedby: "Sri Balaji Vidyapeeth (Deemed to be University), Puducherry",
  collegecategory: "Medical",
  universityDescription:
   "Shri Sathya Sai Medical College and Research Institute, under Sri Balaji Vidyapeeth (Deemed University), Puducherry, is known for its excellent academic environment and modern infrastructure. Located in Ammapettai near Chennai, the college offers UG and PG programs with a mission to produce competent and compassionate healthcare professionals. It is well connected via major roads and provides a nurturing campus environment for medical students.",
  highlights: [
   "Established in 2008",
   "Affiliated with Sri Balaji Vidyapeeth",
   "Recognized by MCI and WHO",
   "Located 45 km from Chennai Central and 28 km from Chennai Airport",
   "Known for its peaceful and well-connected location",
  ],
  image1:
   "https://sssmcri.ac.in/wp-content/uploads/2021/07/DSC_8060-scaled.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy9fQEuyAbeLcAvGsZucfprCl8scXJdM1OA&s",
  website: "https://sbvu.ac.in/sssmcri",
  mail: "admissions@sbvu.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualified",
    fees: {
     inr: "₹21,00,000 per year",
     nri: "N/A",
     hostel: "₹2,00,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Microbiology",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 1,
      nriSeats: 0,
      allIndiaFee: "",
      nriFee: "",
     },
     {
      name: "Forensic Medicine",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹2,00,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 2,
      nriSeats: 0,
      allIndiaFee: "₹4,00,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 3,
      nriSeats: 0,
      allIndiaFee: "₹10,00,000",
      nriFee: "",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 8,
      nriSeats: 1,
      allIndiaFee: "₹32,00,000",
      nriFee: "$60,000",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 3,
      nriSeats: 1,
      allIndiaFee: "₹32,00,000",
      nriFee: "$60,000",
     },
     {
      name: "ENT (Otorhinolaryngology)",
      allIndiaSeats: 2,
      nriSeats: 1,
      allIndiaFee: "₹32,00,000",
      nriFee: "$60,000",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 8,
      nriSeats: 2,
      allIndiaFee: "₹40,00,000",
      nriFee: "$68,000",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 8,
      nriSeats: 2,
      allIndiaFee: "₹40,00,000",
      nriFee: "$68,000",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 1,
      allIndiaFee: "₹40,00,000",
      nriFee: "$68,000",
     },
     {
      name: "Respiratory Medicine",
      allIndiaSeats: 4,
      nriSeats: 1,
      allIndiaFee: "₹40,00,000",
      nriFee: "$68,000",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 11,
      nriSeats: 1,
      allIndiaFee: "₹48,00,000",
      nriFee: "$75,000",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 4,
      nriSeats: 2,
      allIndiaFee: "₹48,00,000",
      nriFee: "$75,000",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 3,
      nriSeats: 1,
      allIndiaFee: "₹48,00,000",
      nriFee: "$75,000",
     },
     {
      name: "Radio Diagnosis",
      allIndiaSeats: 8,
      nriSeats: 2,
      allIndiaFee: "₹48,00,000",
      nriFee: "$75,000",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹3,00,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying marks required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "N/A",
   highestPackage: "N/A",
   companiesVisited: 0,
  },
  ranking:
   "Recognized as a top medical institution under Sri Balaji Vidyapeeth",
  faq: [
   {
    question: "Is Shri Sathya Sai Medical College a deemed university?",
    answer:
     "It is a constituent unit of Sri Balaji Vidyapeeth (Deemed to be University), Puducherry.",
   },
   {
    question: "What is the rank of Shri Sathya Sai Medical College?",
    answer:
     "It is among the recognized private medical colleges in Tamil Nadu under a deemed university.",
   },
   {
    question: "How is the campus life at SSSMCRI?",
    answer:
     "The campus life is peaceful, safe, and academically enriching with modern amenities and a focus on holistic development.",
   },
  ],
 },
 {
  collegename:
   "Sree Balaji Medical College & Hospital (Bharat University), Chennai",
  established: "2003",
  collegetype: "Private",
  location: "Tamil Nadu",
  address:
   "DR. RELA INSTITUTE & MEDICAL CENTER, 7, CLC Works Rd, Shankar Nagar, Chromepet, Chennai, Tamil Nadu 600044",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby:
   "Bharath Institute of Higher Education and Research (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Sree Balaji Medical College & Hospital (SBMCH) is a tertiary care medical institution affiliated with Bharath University. Established in 2003, it serves as a center for academic training, research, and comprehensive patient care. It offers undergraduate and postgraduate courses in medical and allied health sciences, nurturing students into skilled healthcare professionals.",
  highlights: [
   "Established in 2003",
   "Affiliated to Bharath University",
   "Recognized by MCI and WHO",
   "Focus on UG and PG training in Medicine and Allied Health Sciences",
   "Equipped for tertiary care and research excellence",
  ],
  image1:
   "https://mbbscouncil.com/wp-content/uploads/2020/01/Sree-Balaji-Medical-College-and-Hospital-Chennai-1280x720.jpg",
  image2: "https://sbmch.ac.in/wp-content/uploads/2022/08/sbmch-logo.webp",
  website: "https://sbmch.ac.in",
  mail: "admissions@sbmch.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualified",
    fees: {
     inr: "₹27,50,000 per year",
     nri: "$60,000 per year",
     hostel: "₹1,25,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹0",
      nriFee: "",
     },
     {
      name: "Anaesthesiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹0",
      nriFee: "",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹28,00,000",
      nriFee: "",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹5,00,000",
      nriFee: "",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹28,00,000",
      nriFee: "",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹10,00,000",
      nriFee: "",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹0",
      nriFee: "",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹0",
      nriFee: "",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "Radio-Diagnosis",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "Immuno-Haematology & Blood Transfusion",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹9,75,000",
      nriFee: "",
     },
     {
      name: "Respiratory Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "ENT (Otorhinolaryngology)",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "Obstetrics and Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹19,80,000",
      nriFee: "",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying marks required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "N/A",
   highestPackage: "N/A",
   companiesVisited: 0,
  },
  ranking: "Recognized under Bharath University, approved by MCI",
  faq: [
   {
    question:
     "Which university is Sree Balaji Medical College and Hospital affiliated with?",
    answer:
     "It is affiliated with Bharath Institute of Higher Education and Research (Deemed to be University).",
   },
   {
    question:
     "What all courses are offered by Sree Balaji Medical College and Hospital?",
    answer:
     "The college offers UG and PG courses in medicine and allied health sciences.",
   },
   {
    question: "Is Sree Balaji Medical College and Hospital a private college?",
    answer: "Yes, it is a private institution.",
   },
  ],
 },
 {
  collegename: "Sri Lalithambigai Medical College and Hospital",
  established: "2021",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "Service Rd, Maduravoyal, Adayalampattu, Chennai, Tamil Nadu 600095",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby: "Recognized by NMC (National Medical Commission)",
  collegecategory: "Medical",
  universityDescription:
   "Sri Lalithambigai Medical College and Hospital (SLMCH), established in 2021 in Chennai, is a private medical institution offering undergraduate medical education. Approved by the NMC, SLMCH is committed to excellence in medical teaching and providing state-of-the-art clinical training in the health sciences. The institute offers MBBS programs to prepare future physicians through quality education, research, and service.",
  highlights: [
   "Established in 2021",
   "Approved by NMC (Medical Council of India)",
   "State-of-the-art infrastructure and labs",
   "Focus on UG-level medical education (MBBS)",
   "Located in Maduravoyal, Chennai",
  ],
  image1:
   "https://mbbscouncil.com/wp-content/uploads/2022/02/Sri-Lalithambigai-Medical-College-Chennai-Campus-1280x720.jpg",
  image2: "https://slmch.ac.in/wp-content/uploads/2021/12/logo.jpg",
  website: "https://www.slmch.ac.in",
  mail: "info@slmch.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualified",
    fees: {
     inr: "₹19,00,000 per year",
     nri: "$45,000 per year",
     hostel: "₹1,45,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET score required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "N/A",
   highestPackage: "N/A",
   companiesVisited: 0,
  },
  ranking: "Newly established; NMC approved",
  faq: [
   {
    question: "What courses are offered at SLMCH?",
    answer:
     "Currently, Sri Lalithambigai Medical College and Hospital offers an undergraduate MBBS program.",
   },
   {
    question: "What is the annual intake for the MBBS program?",
    answer:
     "The annual intake is subject to NMC norms; typically ranges around 150 students.",
   },
   {
    question: "Does SLMCH offer any postgraduate programs?",
    answer:
     "As of now, SLMCH focuses on undergraduate MBBS programs; postgraduate programs may be introduced in future.",
   },
  ],
 },
 {
  collegename: "Sri Ramachandra Medical College & Research Institute",
  established: "1985",
  collegetype: "Private",
  location: "Tamil Nadu",
  address:
   "Sri Ramachandra Auditorium, Sri Ramachandra Nagar, Porur, Chennai, Tamil Nadu 600116",
  approval: ["MCI", "WHO", "UGC", "NAAC A++", "JCI", "AIU"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby:
   "Sri Ramachandra Institute of Higher Education and Research (SRIHER) Deemed University",
  collegecategory: "Medical",
  universityDescription:
   "Sri Ramachandra Institute of Higher Education and Research (SRIHER), formerly known as Sri Ramachandra University, is one of the top-ranked private medical institutions in India. Recognized for its excellence in education, healthcare, and research, SRIHER is a WHO Collaborating Centre and has received multiple accreditations including NAAC A++ and JCI for its hospital. It offers a wide array of UG, PG, and super-specialty courses with state-of-the-art infrastructure and global recognition.",
  highlights: [
   "Established in 1985",
   "Recognized by MCI, WHO, and UGC",
   "NAAC A++ accredited and JCI certified hospital",
   "WHO Collaborating Centre for Occupational Health",
   "Ranked 20th in Medical category by NIRF 2024",
  ],
  image1:
   "https://www.sriramachandra.edu.in/university/images/about_sru/contact_us/01.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlu0Zc0AAsAFL4JpErooQ0I8XPXxIhQvvqA&s",
  website: "https://www.sriramachandra.edu.in",
  mail: "info@sriramachandra.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualified",
    fees: {
     inr: "₹30,00,000 for entire course", // Special case
     nri: "$2,60,000 for entire course",
     hostel: "₹2,00,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET score required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: true,
  placements: {
   averagePackage: "Information not publicly disclosed",
   highestPackage: "Information not publicly disclosed",
   companiesVisited: "Includes top hospitals and medical research institutions",
  },
  ranking: "Ranked 20th in Medical by NIRF 2024",
  faq: [
   {
    question: "Does Sri Ramachandra University provide scholarships?",
    answer:
     "Yes, SRIHER provides scholarships to deserving and meritorious students under various schemes.",
   },
   {
    question: "How are the placements of Sri Ramachandra University?",
    answer:
     "Sri Ramachandra University provides placement support mainly through internships and hospital tie-ups. Many graduates go on to practice or pursue higher studies.",
   },
   {
    question:
     "What are the affiliated colleges under Sri Ramachandra University?",
    answer:
     "SRIHER includes various faculties like Medical, Dental, Pharmacy, Nursing, Physiotherapy, Allied Health Sciences, Management, and Biomedical Sciences.",
   },
  ],
 },
 {
  collegename: "SRM Medical Hospital & Research Centre",
  established: "2005",
  collegetype: "Private",
  location: "Tamil Nadu",
  address:
   "8, Railway Rd, near Govt Hospital, Ennaikaran, Kanchipuram, Tamil Nadu 631501",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Kanchipuram",
  affiliatedby: "SRM Institute of Science and Technology (Deemed University)",
  collegecategory: "Medical",
  universityDescription:
   "SRM Medical College Hospital and Research Centre, established in 2005 under SRM Institute of Science and Technology, is a leading medical institution offering excellent infrastructure, dedicated faculty, and extensive clinical training. SRM Group is one of India's largest educational groups, delivering education across 8 campuses in 5 states with over 45,000 students. The institution offers a full-time MBBS program approved by MCI and recognized internationally.",
  highlights: [
   "Established in 2005",
   "Part of SRM Group of Institutions",
   "Approved by MCI and WHO",
   "High-end hospital for clinical training",
   "Affordable and advanced hostel facilities",
  ],
  image1:
   "https://www.srmhospital.co.in/wp-content/themes/eightmedi-lite/images/srm/Home-Page-Banner1.png",
  image2:
   "https://i.pinimg.com/474x/dd/a7/47/dda74797cfe0d9f7d8979941ec008248.jpg",
  website: "https://www.srmist.edu.in",
  mail: "admissions.medical@srmist.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualified",
    fees: {
     inr: "₹25,00,000 per year",
     nri: "$50,000 per year",
     hostel: "₹2,20,000 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Qualifying NEET score required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Information not disclosed",
   highestPackage: "Information not disclosed",
   companiesVisited: "Includes leading hospitals and health networks",
  },
  ranking:
   "Consistently ranked among top private medical colleges in Tamil Nadu",
  faq: [
   {
    question:
     "How many seats are there in SRM Medical College for MBBS and how are they allocated?",
    answer:
     "SRM offers 150 MBBS seats. Allocation is based on NEET scores through MCC counselling.",
   },
   {
    question:
     "What are the various elective options to choose from for MBBS students at SRM Medical College?",
    answer:
     "Electives include Clinical Research, Public Health, Radiology, and more, depending on student interest.",
   },
   {
    question:
     "When is the entrance exam for MBBS at SRM Medical College conducted?",
    answer:
     "MBBS admission is purely based on NEET, conducted by NTA, typically in May each year.",
   },
  ],
 },
 {
  collegename: "Vinayaka Missions Kirupananda Variyar Medical College",
  established: "1995",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "H3P7+6HJ, Chinnasiragapadi, Salem, Tamil Nadu 636308",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Salem",
  affiliatedby:
   "Vinayaka Mission's Research Foundation (Deemed to be University)",
  collegecategory: "Medical",
  universityDescription:
   "Vinayaka Missions Kirupananda Variyar Medical College (VMKVMC), established in 1995 in Salem, Tamil Nadu, is a prominent institution providing high-quality medical education under the Vinayaka Mission's Research Foundation. With 23 MCI-recognized departments and a 560-bed hospital, the college is equipped with modern teaching infrastructure and clinical facilities. It is known for serving rural communities while advancing national and international medical education standards.",
  highlights: [
   "Established in 1995",
   "Affiliated with Vinayaka Mission's Research Foundation",
   "560-bed hospital with state-of-the-art facilities",
   "23 departments approved by MCI",
   "ICT-enabled lecture halls with AV teaching aids",
  ],
  image1: "https://variyar.com/wp-content/uploads/2024/10/college-1024x584.png",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrympFiQKNj8Inl_ggvz5Xk3OT1ZfvnjbDwQ&s",
  website: "https://www.vmkvmc.edu.in",
  mail: "admissions@vmkvmc.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualification",
    fees: "₹21,50,000 per annum",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Minimum qualifying marks required",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Information not provided",
   highestPackage: "Information not provided",
   companiesVisited:
    "Tied up with several public and private healthcare institutions",
  },
  ranking: "Recognized among emerging private medical colleges in Tamil Nadu",
  faq: [
   {
    question: "What courses does the college offer?",
    answer:
     "The college offers MBBS and several postgraduate courses across 23 departments.",
   },
   {
    question:
     "Is the MBBS program recognized by the National Medical Commission (NMC)?",
    answer: "Yes, the MBBS program is recognized by the NMC (formerly MCI).",
   },
   {
    question: "What facilities are available on campus?",
    answer:
     "The campus has a 560-bed hospital, ICT-enabled lecture halls, labs, libraries, and residential facilities.",
   },
  ],
 },
 {
  collegename: "Bhaarath Medical College",
  established: "2020",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "173, Agaram Main Rd., Selaiyur, Chennai, Tamil Nadu 600073",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Chennai",
  affiliatedby: "Bharath Institute of Higher Education and Research",
  collegecategory: "Medical",
  universityDescription:
   "Bhaarath Medical College and Hospital, established in 2020 in Chennai, Tamil Nadu, is a private medical institution affiliated with Bharath Institute of Higher Education and Research. It is recognized by the NMC and WHO. The college offers undergraduate medical education with a modern infrastructure, 150 MBBS seats, and a focus on affordable quality education in the Medicine & Health Sciences stream.",
  highlights: [
   "Established in 2020",
   "Affiliated with Bharath Institute of Higher Education and Research",
   "150 MBBS seats",
   "Courses approved by NMC",
   "State-of-the-art campus in Chennai",
  ],
  image1:
   "https://mbbscouncil.com/wp-content/uploads/2021/04/BIHER-Chennai-Overall-Campus-1280x720.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwMhhane9U-b6B4SZRrt8WMVCf7G1e5JRlA&s",
  website: "https://www.bhaarathmedicalcollege.edu.in",
  mail: "info@bhaarathmedicalcollege.edu.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualification",
    fees: "₹25,00,000 per annum",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Minimum NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Information not available",
   highestPackage: "Information not available",
   companiesVisited:
    "N/A – Internship and clinical practice offered as per MCI/NMC norms",
  },
  ranking: "Emerging private medical college in Tamil Nadu",
  faq: [
   {
    question: "How many seats are available for MBBS?",
    answer: "Bhaarath Medical College offers 150 seats for the MBBS program.",
   },
   {
    question:
     "What are the courses offered at Bhaarath Medical College Chennai?",
    answer:
     "Currently, the MBBS program is offered at the undergraduate level.",
   },
   {
    question: "Does Bhaarath Medical College Chennai provide internships?",
    answer: "Yes, a 1-year compulsory internship is part of the MBBS program.",
   },
  ],
 },
 {
  collegename: "VELS Medical College - Tiruvallur",
  established: "2018",
  collegetype: "Private",
  location: "Tamil Nadu",
  address: "Manjankaranai, Bandikavanoor, Tamil Nadu 601102",
  approval: ["MCI", "WHO"],
  state: "Tamil Nadu",
  city: "Tiruvallur",
  affiliatedby:
   "VELS Institute of Science, Technology and Advanced Studies (VISTAS)",
  collegecategory: "Medical",
  universityDescription:
   "VELS Medical College and Hospital (VMCH), a constituent of VISTAS, was established in 2018. Located on a serene 40-acre campus in Tiruvallur, Tamil Nadu, the college serves the local population with quality healthcare and education. It offers modern infrastructure, a comprehensive library, and state-of-the-art medical facilities to foster clinical excellence and academic growth.",
  highlights: [
   "Established in 2018",
   "Affiliated to VISTAS",
   "Situated on a 40-acre green campus",
   "Recognized by MCI and WHO",
   "Advanced library and infrastructure",
  ],
  image1: "https://velsmedicalcollege.com/img/about-us/about-us-gallery-2.jpg",
  image2:
   "https://media.licdn.com/dms/image/v2/C560BAQEUun2oc2Qo5Q/company-logo_200_200/company-logo_200_200/0/1637151738192/vels_mch_logo?e=2147483647&v=beta&t=ufEKqrSUXAArhnKcjvatgtQgvQGT7zoxWYjxvTc5ZXQ",
  website: "https://www.velsmedicalcollege.ac.in",
  mail: "admissions@velsmedicalcollege.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualification",
    fees: {
     inr: "₹21,00,000 per year",
     nri: "$41,800 per year",
     hostel: "₹2,30,450 per year",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Minimum NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited: "Internships provided at in-house hospital",
  },
  ranking: "Emerging private medical institution in Tamil Nadu",
  faq: [
   {
    question: "What courses are offered at VELS Medical College?",
    answer:
     "Currently, the college offers the MBBS program at the undergraduate level.",
   },
   {
    question: "What is the duration of the MBBS program?",
    answer: "The MBBS program lasts 4.5 years followed by a 1-year internship.",
   },
   {
    question: "What are the attendance requirements for students?",
    answer:
     "A minimum of 75% attendance is typically required as per NMC norms.",
   },
  ],
 },
 {
  collegename: "Malla Reddy Institute of Medical Sciences",
  established: "2012",
  collegetype: "Private",
  location: "Telangana",
  address:
   "GCWJ+JC9, Medak Rd, Venkatarama Colony, Suraram, Hyderabad, Telangana 500055",
  approval: ["MCI", "WHO"],
  state: "Telangana",
  city: "Hyderabad",
  affiliatedby: "Kaloji Narayana Rao University of Health Sciences (likely)",
  collegecategory: "Medical",
  universityDescription:
   "Established in 2012, Malla Reddy Institute of Medical Sciences is a premier private medical institution in Hyderabad, Telangana. Offering UG and PG courses in medicine, it is approved by the NMC and strives to deliver quality education through experienced faculty, modern infrastructure, and affordable fees.",
  highlights: [
   "Established in 2012",
   "Recognized by MCI and WHO",
   "Located in Hyderabad, Telangana",
   "Offers MBBS, MD, MS programs",
   "Affordable private medical education",
  ],
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eLcSOcdto6WVw2Wra3r93yDIO242dEvYJA&s",
  image2:
   "https://www.justmbbs.com/img/college/telangana/malla-reddy-institute-of-medical-sciences-hyderabad-logo.jpg",
  website: "https://www.mrimshyd.ac.in",
  mail: "info@mrimshyd.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology and NEET qualification",
    fees: {
     inr: "₹19,00,000 per year",
     nri: "$35,000 per year",
     hostel: "Optional",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Minimum NEET qualifying marks",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not disclosed",
   highestPackage: "Not disclosed",
   companiesVisited:
    "Internship at Malla Reddy Hospital and other affiliated centers",
  },
  ranking: "Recognized regional private medical college",
  faq: [
   {
    question: "Is the institute affiliated with any university?",
    answer:
     "It is likely affiliated with Kaloji Narayana Rao University of Health Sciences, Warangal.",
   },
   {
    question: "What are the facilities available at the campus?",
    answer: "Modern infrastructure, hostels, classrooms, hospital, and labs.",
   },
   {
    question: "How can I apply for admission?",
    answer:
     "Through NEET UG counselling as per Telangana state admission process.",
   },
  ],
 },
 {
  collegename: "Mallareddy Medical College For Women, Suraram, Hyderabad",
  established: "2013",
  collegetype: "Private",
  location: "Telangana",
  address:
   "Jeedimetla, Suraram, Suraram X Road, Quthbullapur, Hyderabad, Telangana 500055",
  approval: ["MCI", "WHO"],
  state: "Telangana",
  city: "Hyderabad",
  affiliatedby: "Kaloji Narayana Rao University of Health Sciences",
  collegecategory: "Medical",
  universityDescription:
   "Malla Reddy Medical College for Women (MRMCW) is a private medical institution in Hyderabad, Telangana, established in 2013. It is exclusively for women and has an annual intake of 150 MBBS students. The college features state-of-the-art facilities, experienced faculty, multimedia-enabled classrooms, and modern laboratories. It is affiliated with KNRUHS and approved by the Medical Council of India.",
  highlights: [
   "Established in 2013",
   "Women-only private medical college",
   "Affiliated to KNRUHS",
   "Recognized by MCI and WHO",
   "Annual MBBS intake: 150 students",
  ],
  image1:
   "https://www.themedicalcounselling.com/uploads/users/1616658591.605c409f17c0d.jpg",
  image2:
   "https://media.licdn.com/dms/image/v2/D4E0BAQEk3Pogs138pQ/company-logo_200_200/company-logo_200_200/0/1685598122870?e=2147483647&v=beta&t=2z54dlyPo0fl2cOIrT6h_0weggjZAb3VblSyWjC3bzg",
  website: "https://mrmcw.org.in",
  mail: "info@mrmcw.org.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology with NEET qualification",
    fees: {
     inr: "₹18,00,000 per year",
     nri: "$35,000 per year",
     hostel: "Optional",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "As per KNRUHS counseling norms",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not specified",
   highestPackage: "Not specified",
   companiesVisited:
    "Internships provided through college hospital and network",
  },
  ranking: "Recognized women's medical college in Telangana",
  faq: [
   {
    question: "What programs does MRMCW offer?",
    answer: "MRMCW currently offers MBBS and is expanding its PG options.",
   },
   {
    question: "What is the annual intake for the MBBS program?",
    answer: "150 students per year.",
   },
   {
    question: "Does the college provide hostel facilities?",
    answer: "Yes, separate hostel facilities are available for women students.",
   },
  ],
 },
 {
  collegename: "Graphic Era Institute Of Medical Sciences, Dehradun",
  established: "1993",
  collegetype: "Private",
  location: "Uttarakhand",
  address:
   "Graphic Era Institute of Medical Science, 16th Milestone, Chakrata Rd, Dehradun, Dhulkot Mafi, Uttarakhand 248008",
  approval: ["MCI", "WHO"],
  state: "Uttarakhand",
  city: "Dehradun",
  affiliatedby: "Graphic Era University",
  collegecategory: "Medical",
  universityDescription:
   "Graphic Era Institute of Medical Sciences in Dehradun is a constituent of the renowned Graphic Era Group. Established with a mission to provide affordable healthcare and advanced medical education, the institute is equipped with state-of-the-art facilities and a team of experienced medical professionals. It is known for blending clinical excellence with cutting-edge technology to deliver high-quality patient care and medical training.",
  highlights: [
   "Established in 1993",
   "Part of the Graphic Era Group",
   "Focus on clinical excellence and affordable healthcare",
   "Equipped with advanced medical technology",
   "Recognized by MCI and WHO",
  ],
  image1:
   "https://manage.collnod.com/Upload/Content/web_img_0_15_4_2023_12_15_19.jpg",
  image2:
   "https://argroupofeducation.com/wp-content/uploads/2022/08/Untitled-design-16-1-1018x1024.png",
  website: "https://geims.graphicera.edu.in",
  mail: "admissions@geims.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹22,00,000 per year",
     nri: "$45,000 per year",
     hostel: "₹3,30,000 per year (10% increment)",
    },
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "Based on state quota and counseling rounds",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not officially disclosed",
   highestPackage: "Not officially disclosed",
   companiesVisited:
    "Internship and practical training through associated hospital",
  },
  ranking: "Upcoming private medical college in Uttarakhand",
  faq: [
   {
    question:
     "Is Graphic Era Institute of Medical Sciences a private or government college?",
    answer:
     "It is a private medical college affiliated to Graphic Era University.",
   },
   {
    question:
     "How to take admission in Graphic Era Institute of Medical Sciences?",
    answer: "Admission is through NEET-UG followed by state counseling.",
   },
   {
    question:
     "What is the fee structure of Graphic Era Institute of Medical Sciences MBBS course?",
    answer: "₹22,00,000 per year with hostel fees of ₹16,57,950.",
   },
  ],
 },
 {
  collegename: "Santosh Medical College & Hospital, Ghaziabad, Uttar Pradesh",
  established: "1995",
  collegetype: "Private",
  location: "Uttar Pradesh",
  address:
   "32, Sector 12, Mirzapur, Pratap Vihar, Ghaziabad, Uttar Pradesh 201001",
  approval: ["MCI", "WHO"],
  state: "Uttar Pradesh",
  city: "Ghaziabad",
  affiliatedby: "Santosh Deemed to be University",
  collegecategory: "Medical",
  universityDescription:
   "Santosh Medical College & Hospital, established in 1995, is a reputed private medical institution located in Ghaziabad, Uttar Pradesh. Initially started with an intake of 50 MBBS students, the college has grown over the years, increasing its intake to 150 students in recent years. It is affiliated with the Santosh Deemed to be University and is recognized by the MCI and WHO. The institution is well-known for its undergraduate, postgraduate, and advanced medical education, offering a comprehensive academic environment with advanced infrastructure and clinical exposure.",
  highlights: [
   "Established in 1995",
   "Affiliated to Santosh University",
   "Recognized by MCI and WHO",
   "Offers UG, PG, and Advanced Masters programs",
   "Intake capacity for MBBS: 150 students",
  ],
  image1: "https://example.com/images/santosh-college-campus.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-iO-Loa6Yjynnu49TD0Mf2GXOHr78Cv_sQ&s",
  website: "https://www.santosh.ac.in",
  mail: "info@santosh.ac.in",
  courses: [
   {
    name: "MBBS",
    duration: "4.5 years + 1 year internship",
    eligibility: "60% in Physics, Chemistry, Biology + NEET qualification",
    fees: {
     inr: "₹24,00,000 per year",
     nri: "$50,000 per year",
     hostel: "₹2,00,000 per year",
    },
   },
   {
    name: "MD / MS (Various Specializations)",
    duration: "3 years",
    eligibility: "MBBS + NEET PG qualification",
    fees: "Varies by specialization",
    specializations: [
     {
      name: "Radio Diagnosis",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹76,00,000",
      nriFee: "$175,000",
     },
     {
      name: "General Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,00,000",
      nriFee: "$120,000",
     },
     {
      name: "Paediatrics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹48,00,000",
      nriFee: "$110,000",
     },
     {
      name: "Psychiatry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Respiratory Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹42,00,000",
      nriFee: "$110,000",
     },
     {
      name: "Dermatology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹68,00,000",
      nriFee: "$175,000",
     },
     {
      name: "General Surgery",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹40,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Obstetrics & Gynaecology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹50,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Ophthalmology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹32,00,000",
      nriFee: "$85,000",
     },
     {
      name: "ENT",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹30,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Orthopaedics",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹40,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Emergency Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹32,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Immuno Haematology & Blood Transfusion",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹10,00,000",
      nriFee: "$10,000",
     },
     {
      name: "Anaesthesia",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹27,00,000",
      nriFee: "$90,000",
     },
     {
      name: "Anatomy",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹75,000",
      nriFee: "$3,000",
     },
     {
      name: "Biochemistry",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹2,00,000",
      nriFee: "$3,000",
     },
     {
      name: "Community Medicine",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹3,00,000",
      nriFee: "$3,000",
     },
     {
      name: "Physiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹75,000",
      nriFee: "$3,000",
     },
     {
      name: "Microbiology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹2,00,000",
      nriFee: "$3,000",
     },
     {
      name: "Pathology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹10,00,000",
      nriFee: "$30,000",
     },
     {
      name: "Pharmacology",
      allIndiaSeats: 0,
      nriSeats: 0,
      allIndiaFee: "₹2,00,000",
      nriFee: "$3,000",
     },
    ],
    stipend: "As per university norms",
    hostelFees: "₹1,50,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "NEET",
    expectedCutoff: "As per NMC and UP State Counseling",
   },
  ],
  admissionProcess: [
   "Class X Marksheet / Birth Certificate",
   "Class XII Marksheet",
   "NEET Scorecard and Rank Letter",
   "Aadhaar Card Photocopy",
   "Recent Passport-size Photographs",
   "Caste Certificate (if applicable)",
   "Physical Disability Certificate (if applicable)",
  ],
  entranceExams: ["NEET"],
  hostelFacilities: true,
  scholarships: false,
  placements: {
   averagePackage: "Not officially disclosed",
   highestPackage: "Not officially disclosed",
   companiesVisited: "Internship provided via associated hospital",
  },
  ranking: "One of the well-known private medical colleges in Uttar Pradesh",
  faq: [
   {
    question: "Where is Santosh Medical College located?",
    answer: "It is located in Pratap Vihar, Ghaziabad, Uttar Pradesh.",
   },
   {
    question: "Who is Santosh Medical College Ghaziabad?",
    answer:
     "It is a private medical institution under Santosh Deemed to be University, offering MBBS and PG medical education.",
   },
   {
    question:
     "How long is Santosh Medical College Ghaziabad postgraduate course?",
    answer: "PG courses like MD/MS are typically 3 years long.",
   },
  ],
 },
];

axios
 .post("http://localhost:3008/api/deemed-medical-colleges/bulk", data)
 .then((res) => console.log(res.data.message))
 .catch((err) => console.error("Upload failed:", err.message));
