const axios = require("axios");

// ✅ 55-college array yahi declare karo
const colleges = [
 {
  collegename: "MIT World Peace University (MIT WPU)",
  established: null, // Year of establishment not explicitly mentioned in the context
  collegetype: "Private University", // Inferred from the name and context
  location: "Pune, Maharashtra, India", // Inferred from the context
  approval: ["UGC"], // UGC approval mentioned for diploma eligibility
  address: null, // Specific address not provided in the context
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: null, // Affiliating university not applicable as it's a university itself
  collegecategory: "Engineering and Management", // Based on the courses offered
  universityDescription:
   "MIT World Peace University (MIT WPU) offers a wide range of courses designed to meet diverse educational ambitions, specializing in engineering and management programs.",
  image1:
   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/MIT-WPU-1.tif/lossless-page1-1200px-MIT-WPU-1.tif.png", // Image URLs not provided
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2TTXfHWwjjm_PSGwaXVGO8euCvQWqGqnhg&s", // Image URLs not provided
  website: "admissions.mitwpu.edu.in", // URL mentioned for admissions
  mail: null, // Email address not explicitly provided
  pdf: null, // PDF for brochure not mentioned
  highlights: [
   "Direct admission options available for B.Tech",
   "Management quota admission for B.Tech",
   "Strong B.Tech placement record",
   "Industry-oriented curriculum",
   "Merit-based scholarships offered",
  ],
  facilities: [
   "Well-equipped engineering labs", // Inferred
   "Library", // Generally available in universities
   "Hostel facilities (likely)", // Common for universities, but specifics not given
   "Placement cell",
  ],
  specializations: [
   "Computer Science and Engineering",
   "CSE (Artificial Intelligence & Data Science)",
   "CSE (Cyber Security & Forensics)",
   "Electronics and Communication Engineering",
   "ECE (Artificial Intelligence & Machine Learning)",
   "Electrical and Computer Engineering",
   "Civil Engineering",
   "Mechanical Engineering",
   "Chemical Engineering",
   "Bioengineering",
   "Petroleum Engineering",
   "Materials Science and Engineering",
  ],
  courses: [
   {
    name: "B.Tech Bioengineering",
    duration: "4 years", // Standard B.Tech duration
    eligibility:
     "Passed XII standard with Physics, Mathematics/Biology, and English with Chemistry/Biotechnology or Biology/Technical Vocational Courses (min 50% PCM/PCB)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Chemical Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Civil Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Computer Science and Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,85,000 (Annual)",
   },
   {
    name:
     "B.Tech Computer Science and Engineering (Artificial Intelligence and Data Science)",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,85,000 (Annual)",
   },
   {
    name:
     "B.Tech Computer Science and Engineering (Cyber Security and Forensics)",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,85,000 (Annual)",
   },
   {
    name: "B.Tech Electrical and Computer Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Electronics and Communication Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name:
     "B.Tech Electronics and Communication Engineering (Artificial Intelligence and Machine Learning)",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Mechanical Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Mechanical Engineering (Robotics and Automation)",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Petroleum Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹3,55,000 (Annual)",
   },
   {
    name: "B.Tech Materials Science and Engineering",
    duration: "4 years",
    eligibility:
     "Passed XII standard with Physics, Mathematics, and English (min 50% PCM)",
    fees: "₹2,55,000 (Annual)",
   },
   // ... (Lateral Entry B.Tech courses could be added similarly with adjusted fees)
  ],
  cutoffdata: [], // Cutoff data for 2025 not yet available
  admissionProcess:
   "Direct admission based on Diploma merit (min 60%), JEE Main/MHT CET scores, and Management Quota. Application via online portal.",
  entranceExams: ["JEE Main", "MHT CET"],
  hostelFacilities: {
   boys: {
    available: null, // Specifics not provided
    fees: null,
    food: null,
   },
   girls: {
    available: null, // Specifics not provided
    fees: null,
    food: null,
   },
  },
  scholarships: [
   "Dr. Vishwanath Karad Merit Scholarship",
   "MIT WPU Merit Scholarship",
   "Scholarships for Elite Sportspersons",
   "Scholarship for Wards of MIT WPU MAEER’s Staff Members",
  ],
  placements: {
   averagePackage: "₹8.25 LPA (for B.Tech 2024)",
   highestPackage: "₹51.36 LPA (for B.Tech 2024)",
   companiesVisited: [
    "IBM",
    "HCL",
    "Infosys",
    "Microsoft",
    "Amdocs",
    "Hitachi",
    "ONGC",
    "TCS",
    "Capgemini",
    "Barclays",
   ],
  },
  ranking: {
   nirf: null, // NIRF ranking not mentioned
   indiaToday: null, // India Today ranking not mentioned
   otherSources: [], // Other rankings not mentioned
  },
  faq: [
   {
    question: "Can I get direct admission in MIT WPU Pune?",
    answer:
     "Yes, students can secure direct admission in MIT WPU Pune if they possess a minimum aggregate score of 60% in a Diploma in Engineering Technology or based on their JEE Main/MHT CET scores.",
   },
   {
    question: "What is the fee structure for B.Tech at MIT WPU Pune?",
    answer:
     "The MIT WPU B.Tech fees range from INR 2,55,000 to INR 3,85,000 annually, depending on the specialization.",
   },
   {
    question: "What are the placement opportunities at MIT WPU Pune?",
    answer:
     "MIT WPU has a strong placement record with an average B.Tech package of ₹8.25 LPA and a highest package of ₹51.36 LPA in 2024. Top companies like IBM, HCL, and Infosys recruit from the university.",
   },
   {
    question: "How to apply for direct admission in MIT WPU Pune 2025?",
    answer:
     "Visit the official website admissions.mitwpu.edu.in, fill out the inquiry form, complete the application, and upload the required documents.",
   },
   {
    question: "What are the eligibility criteria for B.Tech at MIT WPU Pune?",
    answer:
     "Candidates need to pass the XII standard with Physics, Mathematics, and English with a minimum of 50% marks in PCM (45% for reserved categories) or have a Diploma in Engineering Technology with a minimum of 60% marks.",
   },
  ],
  pdf: null,
  timestamps: {
   createdAt: new Date().toISOString(),
   updatedAt: new Date().toISOString(),
  },
 },
 {
  collegename: "SRM Institute of Science and Technology (SRMIST)",
  established: null, // Year of establishment not explicitly mentioned in the context
  collegetype: "Deemed University",
  location:
   "Kattankulathur, Tamil Nadu, India (Main Campus); also has campuses in Ramapuram, Trichy, etc.",
  approval: ["UGC"], // Implied as it's a Deemed University
  address: "Kattankulathur, Tamil Nadu", // Main campus address
  state: "Tamil Nadu",
  city: "Kattankulathur (near Chennai)",
  affiliatedby: null, // Affiliating university not applicable as it's a deemed university
  collegecategory: "Engineering, Management, and other disciplines",
  universityDescription:
   "SRM Institute of Science and Technology (SRMIST) is a renowned educational institution in India, offering world-class programs in engineering, management, and other disciplines. The main campus is located in Kattankulathur, Tamil Nadu.",
  image1: "https://www.mycampusreview.com/images/postgallery/1689139960srm.jpg", // Image URLs not provided
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYc4t2R5tZq6D82MYMQKxRQqwXpdCb0yz5zA&s", // Image URLs not provided
  website: "srmist.edu.in", // Official website likely (though not explicitly given for admissions)
  mail: null, // Email address not explicitly provided
  pdf: null, // PDF for brochure not mentioned
  highlights: [
   "Direct admission options available for B.Tech",
   "Admission through SRMJEEE entrance exam",
   "Management quota admission for B.Tech",
   "Multiple campuses including Chennai (Kattankulathur & Ramapuram) and Trichy",
   "Strong placement opportunities",
  ],
  facilities: [
   "State-of-the-art infrastructure",
   "Modern amenities",
   "Well-equipped engineering labs", // Inferred
   "Library", // Generally available in universities
   "Hostel facilities (likely)", // Common for universities, but specifics not given
   "Placement cell",
   "Sports facilities (implied by 'proven sports backgrounds' for direct admission)",
  ],
  specializations: [
   "Civil Engineering",
   "Computer Science Engineering",
   "Aerospace Engineering",
   "Mechanical Engineering",
   // ... (More B.Tech specializations likely exist but not fully listed in the text)
  ],
  courses: [
   {
    name: "B.Tech Civil Engineering",
    duration: "4 years", // Standard B.Tech duration
    eligibility:
     "Minimum 60% in Class 12 or equivalent in Physics, Chemistry, and Mathematics",
    fees: null, // Specific fees for each branch not detailed in the overview
   },
   {
    name: "B.Tech Computer Science Engineering",
    duration: "4 years",
    eligibility:
     "Minimum 60% in Class 12 or equivalent in Physics, Chemistry, and Mathematics",
    fees: null,
   },
   {
    name: "B.Tech Aerospace Engineering",
    duration: "4 years",
    eligibility:
     "Minimum 60% in Class 12 or equivalent in Physics, Chemistry, and Mathematics",
    fees: null,
   },
   {
    name: "B.Tech Mechanical Engineering",
    duration: "4 years",
    eligibility:
     "Minimum 60% in Class 12 or equivalent in Physics, Chemistry, and Mathematics",
    fees: null,
   },
   // ... (Add other B.Tech courses as needed based on further information)
  ],
  cutoffdata: [], // SRMJEEE cutoff for 2025 not yet available
  admissionProcess:
   "Primarily through SRMJEEE entrance exam. Direct admission options for top performers and through management quota.",
  entranceExams: ["SRMJEEE"],
  hostelFacilities: {
   boys: {
    available: null, // Specifics not provided
    fees: null,
    food: null,
   },
   girls: {
    available: null, // Specifics not provided
    fees: null,
    food: null,
   },
  },
  scholarships: [
   "Merit-based scholarships and financial aid options available",
  ],
  placements: {
   averagePackage: null, // Average package not explicitly mentioned in the overview
   highestPackage: null, // Highest package not explicitly mentioned in the overview
   companiesVisited: [], // Specific companies not listed in the overview
  },
  ranking: {
   nirf: "Ranked among the top private universities in India", // General statement
   indiaToday: null, // Specific India Today ranking not mentioned
   otherSources: [], // Other rankings not mentioned
  },
  faq: [
   {
    question: "Is SRM btech direct admission possible?",
    answer:
     "Yes, SRM B.Tech direct admission is possible for students showcasing exemplary talent or achievements (e.g., state toppers, top IIT JEE rankers, proven sports background) and through the management quota.",
   },
   {
    question: "What is the SRM University admission process?",
    answer:
     "Admission is primarily through the SRMJEEE entrance exam. Direct admission is also available based on specific eligibility conditions and through the management quota.",
   },
   {
    question: "What are the management quota fees at SRM University?",
    answer:
     "Typically, the SRM Management Quota Fees for B.Tech programs ranges from ₹300,000 to ₹400,000 annually, varying by the course.",
   },
   {
    question: "Where is SRM University located?",
    answer:
     "The main campus, SRM University Kattankulathur Tamil Nadu, is situated in Kattankulathur, near Chennai. There are also other campuses like SRM Ramapuram and SRM Trichy.",
   },
   {
    question: "What is the eligibility criteria for SRMJEEE?",
    answer:
     "Candidates must have a minimum of 60% in Class 12 or equivalent in Physics, Chemistry, and Mathematics.",
   },
  ],
  timestamps: {
   createdAt: new Date().toISOString(),
   updatedAt: new Date().toISOString(),
  },
 },
 {
  collegename: "University of Petroleum and Energy Studies (UPES), Dehradun",
  established: null,
  collegetype: "Private",
  location: "Dehradun",
  approval: [],
  address: "Bidholi Campus Area, Dehradun",
  state: "Uttarakhand",
  city: "Dehradun",
  affiliatedby: null,
  collegecategory: "Specialized in energy, infrastructure, and engineering",
  universityDescription:
   "The University of Petroleum and Energy Studies (UPES), Dehradun, is a premier educational institution specializing in energy, infrastructure, and engineering. Known as Dehradun University of Petroleum, it has carved a niche in providing exceptional academic programs, world-class infrastructure, and remarkable placement opportunities.",
  image1: "https://international.upes.ac.in/media/gqbloh1h/about-upes.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVgJdum0IO_3we05wVohCNReudVduSxRssQ&s",
  website: null,
  mail: null,
  pdf: null,
  highlights: [
   "Specialized BTech Programs: Including Petroleum, Computer Science, Civil, and Mechanical Engineering.",
   "World-Class Infrastructure: Advanced labs and modern facilities spread across the UPES Dehradun Campus Area.",
   "Exceptional Placements: The Petroleum University Dehradun Placement records speak volumes about the career opportunities students secure.",
   "Industry-Oriented Programs: Specializations tailored for high-demand industries.",
   "Strategic Location: The scenic UPES Dehradun Location enhances the learning experience.",
   "Strong Industry Links: Partnerships with leading global corporations ensure quality placements.",
   "Consistently ranked among the top private universities in India.",
  ],
  facilities: [],
  specializations: [
   "Petroleum Engineering",
   "Computer Science Engineering (CSE)",
   "Mechanical Engineering",
   "Civil Engineering",
   "Energy Management",
   "Logistics and Supply Chain",
  ],
  courses: [
   {
    name: "BTech",
    duration: null,
    eligibility:
     "Completed 10+2 education with a minimum of 50% marks in relevant subjects.",
    fees: "₹3,80,000 per year (excluding hostel fees)",
   },
   {
    name: "BTech with Hostel",
    duration: null,
    eligibility:
     "Completed 10+2 education with a minimum of 50% marks in relevant subjects.",
    fees: "₹4,00,000 to ₹4,50,000 per year (approx)",
   },
   {
    name: "MBA",
    duration: null,
    eligibility:
     "Bachelor’s degree with a minimum aggregate mark from a recognized university. Valid scores from accepted entrance exams (UPESMET, CAT, CMAT, MAT, GMAT, NMAT).",
    fees:
     "₹1,50,000 to ₹2,50,000 per year (without including additional costs such as accommodation)",
   },
   {
    name: "BBA",
    duration: null,
    eligibility:
     "Completed higher secondary education with a minimum aggregate score of 50%.",
    fees: null,
   },
   {
    name: "BCA",
    duration: null,
    eligibility: null,
    fees: null,
   },
   {
    name: "MCA",
    duration: null,
    eligibility:
     "Bachelor’s degree in any discipline with mathematics as a subject.",
    fees: null,
   },
   {
    name: "MTech",
    duration: null,
    eligibility:
     "Master’s degree or a professional degree equivalent to a master’s declared by a relevant regulatory body. A minimum aggregate of 55% marks in the qualifying examination.",
    fees: null,
   },
   {
    name: "MDes",
    duration: null,
    eligibility:
     "Master’s degree or a professional degree equivalent to a master’s declared by a relevant regulatory body. A minimum aggregate of 55% marks in the qualifying examination. Specific qualifications in design-related fields are essential.",
    fees: null,
   },
   {
    name: "LLM",
    duration: null,
    eligibility: "Recognized LLB or equivalent degree.",
    fees: null,
   },
   {
    name: "MSc",
    duration: null,
    eligibility:
     "Master’s degree or a professional degree equivalent to a master’s declared by a relevant regulatory body. A minimum aggregate of 55% marks in the qualifying examination.",
    fees: null,
   },
   {
    name: "MA",
    duration: null,
    eligibility:
     "Master’s degree or a professional degree equivalent to a master’s declared by a relevant regulatory body. A minimum aggregate of 55% marks in the qualifying examination.",
    fees: null,
   },
   {
    name: "PhD",
    duration: null,
    eligibility:
     "Completion of a master’s degree or a professional degree recognized as equivalent to a master’s degree. An aggregate score of at least 55% in the relevant field. Submission of a research proposal.",
    fees: null,
   },
  ],
  cutoffdata: [
   {
    branch: "BTech",
    year: null,
    closingRank: null,
   },
   {
    branch: "JEE Main",
    year: null,
    closingRank: "Sets its cutoff scores annually for BTech admissions.",
   },
  ],
  admissionProcess:
   "Visit the Official Website, Fill Out the UPES Application Form, Submit Documents, Pay Fees.",
  entranceExams: [
   "UPESEAT",
   "JEE Main",
   "UPESMET",
   "CAT",
   "MAT",
   "CMAT",
   "GMAT",
   "NMAT",
   "UGAT",
   "CUET",
   "GATE",
   "CEED",
   "UPES Research Entrance Test (RET)",
  ],
  hostelFacilities: {
   boys: {
    available: true,
    fees:
     "Included in ₹4,00,000 to ₹4,50,000 per year (approx) for BTech with Hostel",
    food: null,
   },
   girls: {
    available: true,
    fees:
     "Included in ₹4,00,000 to ₹4,50,000 per year (approx) for BTech with Hostel",
    food: null,
   },
  },
  scholarships: [],
  placements: {
   averagePackage: "₹8 LPA (BTech), ₹44 lakhs to ₹75 lakhs (BTech)",
   highestPackage: "₹50 LPA (BTech), ₹75 lakhs (BTech)",
   companiesVisited: [
    "Schlumberger",
    "Shell",
    "ONGC",
    "Infosys",
    "HCL",
    "Wipro",
    "Reliance",
   ],
  },
  ranking: {
   nirf: null,
   indiaToday:
    "Consistently ranked among the top private universities in India.",
   otherSources: [],
  },
  faq: [
   {
    question: "What is the last date to apply for UPES in 2025?",
    answer:
     "Typically falls in May; however, check the official site for exact dates.",
   },
   {
    question: "What exams are accepted for UPES Dehradun admissions?",
    answer:
     "Programs may require exams such as UPESEAT, GATE, UPESMET, CAT, and others based on specialization.",
   },
   {
    question: "How much is the fee structure for BTech at UPES Dehradun?",
    answer:
     "Varies by specialization; consult the official website for detailed breakdowns including any associated hostel fees.",
   },
   {
    question: "Where can I find the UPES application form?",
    answer:
     "All details regarding the UPES forms and application process are listed on the official UPES website.",
   },
   {
    question: "What is the contact number for UPES Dehradun?",
    answer:
     "Can be found on their official site for inquiries related to courses or admissions.",
   },
   {
    question: "Is there an entrance exam for UPES PhD admission?",
    answer:
     "Yes, candidates may need to appear for the UPES entrance exam, especially if they do not qualify for exemptions.",
   },
   {
    question: "What is the fees for the UPES Dehradun PhD program?",
    answer:
     "The fee structure varies by specializations, so it’s best to refer to the official website for detailed information.",
   },
   {
    question: "How can I contact UPES Dehradun for admission queries?",
    answer:
     "For inquiries, you can reach out to the UPES contact number provided on their website.",
   },
   {
    question: "What is the UPES last date to apply 2025?",
    answer:
     "Generally falls in May, but it’s essential to verify this as the date approaches.",
   },
   {
    question:
     "How does the UPES fee structure for BTech compare across different courses?",
    answer:
     "Varies depending on the specialization. For instance, fees for BTech in Computer Science Engineering (CSE) may differ from those in other engineering disciplines.",
   },
   {
    question: "Is there a cutoff for the UPES Dehradun admissions?",
    answer:
     "Yes, UPES has specific cutoffs, including the UPES JEE main cutoff, which applicants must meet to qualify for admission.",
   },
   {
    question: "How can I access the UPES library login?",
    answer:
     "Students can access the UPES library login through the official UPES website, enabling them to utilize a wealth of academic resources.",
   },
   {
    question:
     "What documents are needed to fill out the UPES application form 2025?",
    answer:
     "Candidates should prepare mark sheets, proof of date of birth, and character certificates when completing the UPES application form 2025.",
   },
   {
    question: "What are the courses offered for BTech at UPES?",
    answer:
     "Include various specializations like Computer Science, Electrical Engineering, and Petroleum Engineering among others. Each program has a defined intake and duration.",
   },
   {
    question: "How is the UPES entrance exam structured?",
    answer:
     "An online test lasting 2 hours, assessing skills in subjects relevant to the chosen course.",
   },
   {
    question: "What if I want to apply without appearing for UPESEAT?",
    answer:
     "Candidates can qualify for direct admission if they perform well in JEE Main or show strong board merit, aligning with the UPES JEE Main cutoff.",
   },
   {
    question: "What contact information do I need for inquiries?",
    answer:
     "You can reach out to the UPES contact number Dehradun at 7755889994.",
   },
   {
    question:
     "What is the eligibility criteria for MBA admission at UPES Dehradun?",
    answer:
     "Candidates must hold a bachelor’s degree with a minimum aggregate mark from a recognized university. They also need to provide valid scores from accepted entrance exams.",
   },
   {
    question: "How can I apply for MBA direct admission in UPES Dehradun?",
    answer:
     "Visit the UPES website to access the UPES online degree application form. After filling it out, ensure you pay the required application fee.",
   },
   {
    question: "What is the fees for MBA programs at UPES Dehradun?",
    answer:
     "Varies by specialization, typically ranging from INR 1,50,000 to INR 2,50,000 per year without including additional costs such as accommodation.",
   },
   {
    question: "How can I contact UPES for further inquiries?",
    answer:
     "For any queries, note the UPES contact number Dehradun available on their official website for immediate assistance.",
   },
   {
    question:
     "What are the eligibility criteria for BBA admission at UPES Dehradun?",
    answer:
     "Candidates must have passed their higher secondary examination with a minimum of 50% marks.",
   },
   {
    question: "Which entrance exams are accepted for BBA admissions?",
    answer: "The accepted exams include UGAT, CUET, and UPESMET.",
   },
   {
    question: "What is the application fee for BBA at UPES?",
    answer: "Rs 1,750.",
   },
   {
    question: "What is the fee structure for BBA at UPES?",
    answer:
     "The fee structure varies based on the specialization; details are available on the official website.",
   },
   {
    question: "How do I fill out the UPES application form for 2025?",
    answer:
     "You can fill out the UPES application form 2025 online at the official UPES website.",
   },
   {
    question: "What is the process for document verification after applying?",
    answer:
     "Candidates will undergo verification, which includes submitting educational certificates and attending an interview.",
   },
   {
    question: "What is the UPES full form?",
    answer: "University of Petroleum and Energy Studies.",
   },
   {
    question: "What are the UPES courses available under management quota?",
    answer:
     "UPES offers a range of UPES courses under management quota, including various BTech programs in engineering disciplines.",
   },
   {
    question:
     "What are the UPES eligibility criteria for management quota admission?",
    answer:
     "Candidates typically need to achieve at least 50% marks in their 10+2 examinations, specifically in relevant subjects.",
   },
   {
    question: "What is the UPES JEE Main cutoff?",
    answer:
     "Varies each year based on the number of applicants and overall performance. Reviewing previous years’ cutoffs can provide insight into current standards.",
   },
   {
    question:
     "For query related to UPES btech direct admission you may contact us at?",
    answer: "7755889994.",
   },
   {
    question: "What are the eligibility criteria for BTech courses at UPES?",
    answer:
     "Aspiring students must complete 10+2 education with a minimum of 50% marks in relevant subjects.",
   },
   {
    question: "What is the placement percentage for BTech graduates at UPES?",
    answer:
     "UPES maintains a robust placement record, with a significant percentage of graduates securing employment each year.",
   },
   {
    question: "What is the UPES cutoff for BTech programs?",
    answer:
     "Determined by various factors, including past admission records and the number of candidates applied.",
   },
   {
    question: "What support does the placement cell offer to BTech students?",
    answer:
     "The placement cell provides guidance on resume building, interview preparation, and organizes placement drives to connect students with industry recruiters.",
   },
   {
    question: "How does UPES ensure industry readiness for its BTech students?",
    answer:
     "UPES conducts workshops, seminars, and industry visits to provide hands-on experience, enhancing the overall employability of BTech graduates.",
   },
   {
    question: "What is the UPES BTech highest package?",
    answer: "The highest package reached 75 lakhs last year.",
   },
   {
    question: "What is the placement range for UPES BTech graduates?",
    answer:
     "Graduates receive an average salary between 44 lakhs and 75 lakhs.",
   },
   {
    question: "Which companies recruit UPES BTech students?",
    answer:
     "Prominent companies like HCL, Wipro, Infosys, and Reliance participate in the placement process.",
   },
   {
    question: "Are internships part of the BTech curriculum?",
    answer: "Yes, internships and live projects are incorporated.",
   },
  ],
 },
 {
  collegename: "Bennett University",
  established: "2016",
  collegetype: "Private",
  location: "Greater Noida, Uttar Pradesh",
  approval: ["UGC", "SIRO"],
  address: "Greater Noida, Uttar Pradesh, India",
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Times Group",
  collegecategory: "State Private University",

  universityDescription: `
        Bennett University is a State Private University established by The Times Group in 2016 in Greater Noida, Uttar Pradesh. 
        It is a multi-disciplinary university recognized by UGC and aims to provide Ivy League quality education. 
        It is recognized as a Scientific and Industrial Research Organization (SIRO) by the Government of India.
        The university is ranked at the 5th and 6th position among the top Law Colleges and Private B-Schools respectively in Uttar Pradesh.
        The university offers UG, PG, and Ph.D. courses with 30+ programs and 70+ specializations, including flagship courses in MBA and B.Tech.
      `,

  image1:
   "https://www.bennett.edu.in/wp-content/uploads/2022/05/Uni-of-British-Columbia.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Uv9hr5ERN8A3RX2LwD_KqK3kC63awE-RTg&s",
  website: "https://www.bennett.edu.in",
  mail: "info@bennett.edu.in",
  pdf: "https://example.com/bennett-university-brochure.pdf",

  highlights: [
   "UGC Recognized",
   "SIRO Certification by Govt of India",
   "Ranked 5th in Law Colleges in UP",
   "Flagship Courses: MBA and B.Tech",
   "Offers 30+ Programs and 70+ Specializations",
  ],
  facilities: [
   "Hostels",
   "Sports Facilities",
   "Research Facilities",
   "Campus Wi-Fi",
   "Library",
  ],
  specializations: [
   "Computer Science Engineering",
   "Mechanical Engineering",
   "Electronics & Communication Engineering",
   "Artificial Intelligence",
   "Engineering Physics",
  ],

  courses: [
   {
    name: "B.Tech - Artificial Intelligence",
    duration: "4 years",
    eligibility: "50% in 12th with Physics & Maths",
    fees: "₹19,00,000",
   },
   {
    name: "B.Tech - Computer Science Engineering",
    duration: "4 years",
    eligibility: "50% in 12th with Physics & Maths",
    fees: "₹16,15,000",
   },
   {
    name: "B.Tech - Mechanical Engineering",
    duration: "4 years",
    eligibility: "50% in 12th with Physics & Maths",
    fees: "₹15,35,000",
   },
  ],

  cutoffdata: [
   {
    branch: "Computer Science Engineering",
    year: 2024,
    closingRank: "5000",
   },
   {
    branch: "Mechanical Engineering",
    year: 2024,
    closingRank: "8000",
   },
  ],

  admissionProcess:
   "Admission based on Class XII Best of 3 Subjects scores or JEE Main/SAT/CUET Score. Management quota available.",
  entranceExams: ["JEE Main", "CUET", "SAT"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1,70,000 per year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1,70,000 per year",
    food: true,
   },
  },

  scholarships: ["Merit-based Scholarships", "Need-based Scholarships"],
  placements: {
   averagePackage: "₹6,00,000",
   highestPackage: "₹30,00,000",
   companiesVisited: ["Google", "Microsoft", "Amazon", "Accenture", "TCS"],
  },

  ranking: {
   nirf: "Ranked 50-60 for Engineering",
   indiaToday: "Ranked 70th in Private Universities",
   otherSources: [
    "IIRF 2023 - 5th in Law Colleges in UP",
    "IIRF 2023 - 6th in Private B-Schools in UP",
   ],
  },

  faq: [
   {
    question: "Is direct admission possible in Bennett University for B.Tech?",
    answer:
     "Yes, Bennett University offers direct admission under certain criteria. For more details, call 7755889994.",
   },
   {
    question: "What are the eligibility criteria for B.Tech admission?",
    answer:
     "Candidates must have at least 50% marks in Physics and Mathematics in Class 12. Additionally, admission is based on JEE Main/CUET/SAT scores.",
   },
   {
    question: "What is the fee structure for B.Tech?",
    answer:
     "The fees for B.Tech vary based on specialization. For example, B.Tech in Artificial Intelligence costs ₹19,00,000 for the entire course.",
   },
  ],
 },
 {
  collegename: "Thapar Institute of Engineering and Technology (TIET)",
  established: "1956",
  collegetype: "Private Deemed-to-be University",
  location: "Patiala, Punjab",
  approval: ["UGC", "AICTE"],
  address: "Bhadson Road, Patiala, Punjab – 147004",
  state: "Punjab",
  city: "Patiala",
  affiliatedby: "UGC, AICTE",
  collegecategory: "Engineering & Technology",
  universityDescription:
   "<p>Thapar Institute of Engineering and Technology (TIET), formerly known as Thapar University, is a private Deemed-to-be University established in 1956 in Patiala, Punjab. It is known for its cutting-edge research, world-class faculty, and industry-oriented education. Thapar University is ranked among the top engineering institutions in India and has been ranked 22nd in the NIRF 2023 University Category. It offers a range of undergraduate, postgraduate, and Ph.D. programs, including the popular B.Tech and MBA courses.</p>",
  image1:
   "https://img.jagranjosh.com/images/2023/January/512023/Thapar-Institute-of-Engineering-and-Technology-TIET-Patiala-Campus-View-3.jpg",
  image2:
   "https://bookuradmission.com/college_logo/TIET%20-%20Thapar%20Institute%20of%20Engineering%20And%20Technology_logo210626104431.png",
  website: "https://www.thapar.edu",
  mail: "admissions@thapar.edu",
  pdf: "https://www.thapar.edu/downloads/TIET_Prospectus_2024.pdf",
  highlights: [],
  facilities: [],
  specializations: [
   "Computer Engineering",
   "Electrical Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
   "Chemical Engineering",
   "Electronics & Communication Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: null,
    eligibility:
     "Minimum 60% aggregate in 10+2 with Physics, Chemistry, and Mathematics. Direct admission available for board toppers.",
    fees: "₹4,97,000 per year",
   },
   {
    name: "MBA",
    duration: null,
    eligibility: null,
    fees: "₹6,00,000 per year",
   },
  ],
  cutoffdata: [
   {
    branch: "BTech - Computer Engineering (Outside Punjab - GEN_JEE)",
    year: 2023,
    closingRank: "94.47 percentile",
   },
   {
    branch: "BTech - Computer Engineering (Outside Punjab - GEN_12th)",
    year: 2023,
    closingRank: "95.33 percentile",
   },
   {
    branch: "BTech - Computer Science Engineering (Outside Punjab - GEN_JEE)",
    year: 2023,
    closingRank: "98.06 percentile",
   },
   {
    branch: "BTech - Computer Science Engineering (Outside Punjab - GEN_12th)",
    year: 2023,
    closingRank: "97.5 percentile",
   },
  ],
  admissionProcess:
   "Entrance-Based & Merit-Based (JEE Main, 12th Class Marks) for B.Tech, Entrance-Based (CAT, MAT, GMAT, or XAT scores) for MBA",
  entranceExams: [
   "JEE Main (for B.Tech)",
   "CAT (for MBA)",
   "MAT (for MBA)",
   "GMAT (for MBA)",
   "XAT (for MBA)",
  ],
  hostelFacilities: {
   boys: {
    available: null,
    fees: null,
    food: null,
   },
   girls: {
    available: null,
    fees: null,
    food: null,
   },
  },
  scholarships: [],
  placements: {
   averagePackage: "₹12 LPA (B.Tech), ₹10 LPA (MBA)",
   highestPackage: "₹43 LPA (B.Tech), ₹28 LPA (MBA)",
   companiesVisited: [
    "Amazon",
    "Microsoft",
    "Deloitte",
    "Wipro",
    "IBM",
    "Infosys",
    "McKinsey",
    "TCS",
    "HDFC Bank",
    "Accenture",
   ],
  },
  ranking: {
   nirf: "22nd in the NIRF 2023 University Category",
   indiaToday: null,
   otherSources: [],
  },
  faq: [],
 },
 {
  collegename: "Amrita Vishwa Vidyapeetham",
  established: "1994",
  collegetype: "Private University",
  location: "Coimbatore, Kochi, Bengaluru, Amaravati, Chennai",
  approval: ["UGC", "NAAC A"],
  address: "Amrita Nagar, Ettimadai, Coimbatore, Tamil Nadu 641112",
  state: "Tamil Nadu",
  city: "Coimbatore",
  affiliatedby: "Autonomous",
  collegecategory: "Deemed University",
  universityDescription:
   "Amrita Vishwa Vidyapeetham is one of India’s leading private universities, renowned for excellence in engineering, innovation, and holistic education. It operates across multiple campuses, including Coimbatore, Kochi, Bengaluru, Amaravati, and Chennai, offering world-class programs in engineering, technology, and research.",
  image1:
   "https://www.diginerve.com/blogs/wp-content/uploads/2023/06/Amrita-Vishwa-Vidyapeetham-Courses-Admission-Process-_-Fee-Structure.webp",
  image2:
   "https://images.seeklogo.com/logo-png/51/2/amrita-vishwa-vidyapeetham-logo-png_seeklogo-519922.png",
  website: "https://www.amrita.edu",
  mail: "admissions@amrita.edu",
  pdf: "/brochures/amrita-btech.pdf",
  highlights: [
   "NAAC A++ Accredited",
   "95% Placement Rate",
   "Multiple Campus Options",
   "Industry-Aligned Curriculum",
   "Ranked Among Top 50 by NIRF",
  ],
  facilities: [
   "Hostel Accommodation",
   "Advanced Research Labs",
   "Sports Complexes",
   "Library with Digital Resources",
   "Wi-Fi Enabled Campus",
  ],
  specializations: [
   "Computer Science Engineering (CSE)",
   "Artificial Intelligence & Data Science",
   "Mechanical Engineering",
   "Electronics & Communication Engineering",
   "Cyber Security",
   "Biotechnology",
  ],
  courses: [
   {
    name: "BTech in Computer Science Engineering",
    duration: "4 Years",
    eligibility: "10+2 with 60% in PCM",
    fees: "₹3,00,000 - ₹6,00,000 per annum",
   },
   {
    name: "BTech in Artificial Intelligence",
    duration: "4 Years",
    eligibility: "10+2 with 60% in PCM",
    fees: "₹4,00,000 - ₹6,00,000 per annum",
   },
  ],
  cutoffdata: [
   {
    branch: "Computer Science Engineering",
    year: 2025,
    closingRank: "AEEE Rank ≤ 5000",
   },
  ],
  admissionProcess:
   "Admission via AEEE/JEE Main scores followed by counselling. Direct admission available through management quota.",
  entranceExams: ["AEEE", "JEE Main"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹80,000 - ₹1,00,000 per annum",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹80,000 - ₹1,00,000 per annum",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships (AEEE/JEE Rank)",
   "Need-Based Financial Aid",
   "Sports & Cultural Scholarships",
  ],
  placements: {
   averagePackage: "₹7 LPA",
   highestPackage: "₹52 LPA",
   companiesVisited: ["Amazon", "Google", "Microsoft", "Infosys", "Wipro"],
  },
  ranking: {
   nirf: "Top 50 in Engineering",
   indiaToday: "Top 10 Private Universities",
   otherSources: ["QS World University Rankings"],
  },
  faq: [
   {
    question: "What is the Amrita application fee?",
    answer: "₹1,000 for AEEE and ₹500 for JEE Main applicants.",
   },
   {
    question: "Is AEEE mandatory for BTech admission?",
    answer:
     "No, JEE Main scores are also accepted. Direct admission via management quota is available.",
   },
   {
    question: "What is the hostel fee?",
    answer: "₹80,000 - ₹1,00,000 per annum (varies by campus).",
   },
  ],
 },
 {
  collegename: "Newton School of Technology",
  established: "Not specified",
  collegetype: "Private Institution",
  location: "India",
  approval: ["AICTE"], // Assumed, as offering B.Tech in India
  address: "Not specified",
  state: "Not specified",
  city: "Not specified",
  affiliatedby: "Autonomous",
  collegecategory: "Engineering College",
  universityDescription:
   "Newton School of Technology is a premier institution offering industry-aligned B.Tech programs in Computer Science and Artificial Intelligence. Known for its modern infrastructure, experienced faculty, and strong industry connections, it prepares students for successful careers in technology. The institution emphasizes hands-on learning, research, and placements with top-tier companies.",
  image1:
   "https://cdn.prod.website-files.com/661123dea3c6c677a806b8b2/662a72b9d8ac55f3dcd7c6b3_6475cab2eafda2fc9a184d12_DSC00061%20(1).webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIrxSHP1HFyxIAQoQhNSGRFqJxF0zPmqxDw&s",
  website: "https://www.newtonschool.co",
  mail: "admissions@newtonschool.co",
  pdf: "/brochures/newton-btech.pdf",
  highlights: [
   "98% Placement Rate",
   "Industry-Driven Curriculum",
   "State-of-the-Art Labs",
   "Multiple Scholarship Options",
   "Management Quota Admission",
  ],
  facilities: [
   "Advanced Computing Labs",
   "Hostel & Mess",
   "Wi-Fi Enabled Campus",
   "Career Counseling",
   "Sports Complex",
  ],
  specializations: ["B.Tech in Computer Science & Artificial Intelligence"],
  courses: [
   {
    name: "B.Tech in Computer Science & AI",
    duration: "4 Years",
    eligibility: "10+2 with 50% in PCM",
    fees: "₹2.26 Lakh (Total approx. for 4 years)",
   },
  ],
  cutoffdata: [], // No specific cutoff ranks mentioned
  admissionProcess:
   "Admission via NSAT scores, Group Discussion, and Interview. Direct admission available through management quota.",
  entranceExams: ["NSAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹90,000 per semester (incl. mess)",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹90,000 per semester (incl. mess)",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based (Up to 100% Tuition Fee)",
   "Young Women Leader Scholarship (20% Fee Waiver)",
   "Extraordinary Academic Achievement Scholarship",
  ],
  placements: {
   averagePackage: "₹12 LPA",
   highestPackage: "₹64 LPA",
   companiesVisited: [
    "Amazon",
    "Google",
    "Infosys",
    "Wipro",
    "Deloitte",
    "TCS",
   ],
  },
  ranking: {}, // No ranking details provided
  faq: [
   {
    question: "What is the application fee?",
    answer: "₹1,200 (non-refundable).",
   },
   {
    question: "Is management quota admission available?",
    answer: "Yes. Call 7755889994 for details.",
   },
   {
    question: "What is the eligibility for B.Tech?",
    answer: "10+2 with 50% in PCM and valid NSAT score.",
   },
  ],
 },
 {
  collegename: "Scaler School of Technology",
  established: "Not specified",
  collegetype: "Private Institution",
  location: "Bangalore",
  approval: ["AICTE"], // Assumed for B.Tech in India
  address: "Bangalore, Karnataka",
  state: "Karnataka",
  city: "Bangalore",
  affiliatedby: "Autonomous",
  collegecategory: "Engineering College",
  universityDescription:
   "Scaler School of Technology is a premier institution in Bangalore offering a B.Tech program focused on Computer Science and Artificial Intelligence. Known for its industry-aligned curriculum, hands-on learning, and exceptional placements, it prepares students for careers in technology with a blend of theoretical and practical training.",
  image1:
   "https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/07/22114601/SST.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPrnwnTscw9PzmnA_QQL-BBIa0iZqldcbow&s",
  website: "https://www.scaler.com/school-of-technology/",
  mail: "admissions@scaler.com",
  pdf: "/brochures/scaler-btech.pdf",
  highlights: [
   "95% Placement Rate",
   "Industry-Driven Projects",
   "Innovative Pedagogy",
   "Multiple Admission Cycles",
   "Affordable Fees",
  ],
  facilities: [
   "Advanced AI/ML Labs",
   "Hostel & Mess",
   "Career Counseling",
   "Wi-Fi Campus",
   "Industry Collaboration Labs",
  ],
  specializations: ["B.Tech in Computer Science & Artificial Intelligence"],
  courses: [
   {
    name: "B.Tech in Computer Science & Artificial Intelligence",
    duration: "4 Years",
    eligibility: "10+2 with 60% in Mathematics + valid NSET score",
    fees: "₹2.39 Lakh (Year 1) to ₹3.34 Lakh (Year 4)",
   },
   {
    name: "Certification in Data Science",
    duration: "Not specified",
    eligibility: "Not specified",
    fees: "Not specified",
   },
   {
    name: "Certification in Artificial Intelligence",
    duration: "Not specified",
    eligibility: "Not specified",
    fees: "Not specified",
   },
   {
    name: "Certification in Machine Learning",
    duration: "Not specified",
    eligibility: "Not specified",
    fees: "Not specified",
   },
  ],
  cutoffdata: [], // No explicit cutoff ranks provided
  admissionProcess:
   "Admission via NSET entrance exam, personal interview, and application review. Direct admission through management quota available.",
  entranceExams: ["NSET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1.43 Lakh - ₹1.87 Lakh per annum (incl. mess)",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1.43 Lakh - ₹1.87 Lakh per annum (incl. mess)",
    food: true,
   },
  },
  scholarships: [], // Scholarships mentioned but no specific names/types
  placements: {
   averagePackage: "₹18 LPA",
   highestPackage: "₹1.5 Cr",
   companiesVisited: ["Google", "Microsoft", "Amazon", "Flipkart", "Infosys"],
  },
  ranking: {}, // No ranking details provided
  faq: [
   {
    question: "Is direct admission possible?",
    answer: "Yes. Call 7755889994 for details.",
   },
   {
    question: "What is the eligibility for B.Tech?",
    answer: "10+2 with 60% in Mathematics and valid NSET score.",
   },
   {
    question: "What is the average placement package?",
    answer: "₹18 LPA.",
   },
  ],
 },
 {
  collegename: "Shiv Nadar University",
  established: "2011",
  collegetype: "Private University",
  location: "Dadri, Uttar Pradesh",
  approval: ["UGC", "AICTE", "NAAC"],
  address: "NH91, Tehsil Dadri, Greater Noida, Uttar Pradesh 201314",
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Autonomous",
  collegecategory: "Deemed University",
  universityDescription:
   "Shiv Nadar University (SNU) is a leading private institution renowned for academic excellence, innovation, and industry-aligned programs. With campuses in Greater Noida and Chennai, it offers a transformative educational experience across engineering, management, and sciences. SNU emphasizes research, holistic development, and strong industry partnerships.",
  image1: "https://snu.edu.in/site/assets/files/7907/shss_2.1600x0.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95PRsj0UsmHbOh06ZxFumd72gQmdq3RjCLQ&s",
  website: "https://snu.edu.in",
  mail: "admissions@snu.edu.in",
  pdf: "/brochures/snu-btech.pdf",
  highlights: [
   "NAAC Accredited",
   "286-Acre Campus",
   "58.09 LPA Highest Package",
   "550+ Recruiters",
   "Merit-Based Scholarships",
  ],
  facilities: [
   "Hostel Accommodation",
   "Advanced Research Labs",
   "Sports Complex",
   "Career Development Center",
   "Wi-Fi Enabled Campus",
  ],
  specializations: [
   "B.Tech in Computer Science & Engineering",
   "B.Tech in Mechanical Engineering",
   "B.Tech in Chemical Engineering",
   "B.Tech in Civil Engineering",
   "B.Tech in Electrical & Computer Engineering",
  ],
  courses: [
   {
    name: "B.Tech in Computer Science & Engineering",
    duration: "4 Years",
    eligibility: "10+2 with 65% in PCM + SNUSAT/JEE Main",
    fees: "₹5,50,000/year (Tuition) + ₹2,14,000 (Hostel)",
   },
   {
    name: "B.Tech in Mechanical Engineering",
    duration: "4 Years",
    eligibility: "10+2 with 65% in PCM + SNUSAT/JEE Main",
    fees: "₹4,00,000/year (Tuition) + ₹2,14,000 (Hostel)",
   },
   {
    name: "B.Tech in Chemical Engineering",
    duration: "4 Years",
    eligibility: "10+2 with 65% in PCM + SNUSAT/JEE Main",
    fees: "₹4,00,000/year (Tuition) + ₹2,14,000 (Hostel)",
   },
   {
    name: "B.Tech in Civil Engineering",
    duration: "4 Years",
    eligibility: "10+2 with 65% in PCM + SNUSAT/JEE Main",
    fees: "₹4,00,000/year (Tuition) + ₹2,14,000 (Hostel)",
   },
   {
    name: "B.Tech in Electrical & Computer Engineering",
    duration: "4 Years",
    eligibility: "10+2 with 65% in PCM + SNUSAT/JEE Main",
    fees: "₹4,00,000/year (Tuition) + ₹2,14,000 (Hostel)",
   },
  ],
  cutoffdata: [
   {
    branch: "B.Tech (General)",
    year: 2025,
    closingRank: "JEE Main Percentile ≥ 85",
   },
  ],
  admissionProcess:
   "Admission via SNUSAT/APT entrance exam or JEE Main scores. Direct admission requires 60% in 10+2 with PCM. No management quota available.",
  entranceExams: ["SNUSAT", "APT", "JEE Main"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹2,14,000/year (incl. mess)",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹2,14,000/year (incl. mess)",
    food: true,
   },
  },
  scholarships: [
   "School Topper’s Scholarship: 50% tuition fee waiver",
   "Merit-Based Scholarship: 25% tuition fee waiver",
   "Low-Income Household Scholarship: 100% tuition + hostel fee waiver",
   "Sports Scholarship",
   "College Board India Scholarship",
  ],
  placements: {
   averagePackage: "₹11.35 LPA",
   highestPackage: "₹58.09 LPA",
   companiesVisited: [
    "Cognizant",
    "Adobe",
    "Dell",
    "Goldman Sachs",
    "Tata Consultancy Services",
   ],
  },
  ranking: {
   nirf: "Ranked 61st among Indian Universities (2022)",
   otherSources: ["NAAC Accredited"],
  },
  faq: [
   {
    question: "Is management quota admission available?",
    answer: "No. All admissions are merit-based.",
   },
   {
    question: "What is the eligibility for B.Tech?",
    answer: "10+2 with 65% in PCM + valid SNUSAT/JEE Main score.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹58.09 LPA (2023).",
   },
  ],
 },
 {
  collegename: "Amity University Noida",
  established: "2005",
  collegetype: "Private",
  location: "Noida",
  approval: ["AICTE", "NAAC A+"],
  address: "G8VM+H69, Amity Rd, Sector 125, Noida, Uttar Pradesh 201301",
  state: "Uttar Pradesh",
  city: "Noida",
  affiliatedby: "Self-affiliated",
  collegecategory: "Private University",
  universityDescription:
   "A private university with a 1000+ acre campus, India's first wireless campus, offering global education standards with 12 international campuses. Consistently ranked among India's top private universities with NAAC A+ accreditation.",

  image1: "https://amity.edu/images/university.jpg",
  image2:
   "https://ztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com/7085a4e10fca016c9897b97b8e14b0a1_d9cf0d498d.jpg",
  website: "https://www.amity.edu",
  mail: "",
  pdf: "",

  highlights: [
   "NAAC Grade 'A+' Accredited",
   "NIRF Ranking 25th in Engineering (2023)",
   "1000+ acre wireless campus",
   "12 international campuses",
   "Median B.Tech package: ₹8.13 LPA",
  ],

  facilities: [
   "Modern labs & libraries",
   "AC/Non-AC hostels",
   "Sports complexes",
   "Research centers",
   "Wi-Fi enabled campus",
  ],

  specializations: [
   "Computer Science & Engineering",
   "Artificial Intelligence",
   "Mechanical Engineering",
   "International Business",
   "Biotechnology",
  ],

  courses: [
   {
    name: "B.Tech Computer Science",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM",
    fees: "₹4,18,000/year",
   },
   {
    name: "MBA (General)",
    duration: "2 years",
    eligibility: "Graduation with 50% + CAT/MAT/XAT",
    fees: "₹6,90,000/year",
   },
   {
    name: "BBA",
    duration: "3 years",
    eligibility: "10+2 with 50%",
    fees: "₹4,18,000/year",
   },
  ],

  cutoffdata: [
   {
    branch: "B.Tech CSE",
    year: 2023,
    closingRank: "JEE Main: 15,000",
   },
  ],

  admissionProcess:
   "Direct admission through management quota available. Process includes application submission, document verification, and fee payment.",
  entranceExams: ["JEE MAIN", "CUET", "CAT", "XAT", "NMAT"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "AC: ₹1,76,500/year | Non-AC: ₹94,500/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "AC: ₹1,76,500/year | Non-AC: ₹94,500/year",
    food: true,
   },
  },

  scholarships: [
   "Merit-based (up to 100% fee waiver)",
   "Need-based financial aid",
   "Sports scholarships",
   "Special category scholarships",
  ],

  placements: {
   averagePackage: "B.Tech: ₹5 LPA | MBA: ₹6-7 LPA | BBA: ₹4-5 LPA",
   highestPackage: "₹25 LPA (2023)",
   companiesVisited: ["TCS", "Amazon", "Deloitte", "Accenture", "Microsoft"],
  },

  ranking: {
   nirf: "25th in Engineering (2023)",
   indiaToday: "Top 10 Private Universities",
   otherSources: ["QS World Rankings: 4-star rating"],
  },

  faq: [
   {
    question: "Does Amity accept direct admission?",
    answer: "Yes, through management quota with higher fees",
   },
   {
    question: "What's the B.Tech CSE fee?",
    answer: "₹4,18,000 per annum",
   },
   {
    question: "Hostel accommodation cost?",
    answer: "AC: ₹1.76L/year | Non-AC: ₹94,500/year",
   },
  ],
 },
 {
  collegename: "Delhi Technical Campus",
  established: "2013",
  collegetype: "Private",
  location: "Greater Noida, Uttar Pradesh",
  approval: ["AICTE", "COA"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Technical",
  universityDescription:
   "Private technical institute established in 2013, affiliated with GGSIPU and approved by AICTE/COA. Offers industry-aligned programs with modern infrastructure and strong placements.",

  image1:
   "https://delhitechnicalcampus.com/wp-content/uploads/2023/03/SPNA1855-1024x683.jpg",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU%2C_Delhi_official_logo.png/250px-DTU%2C_Delhi_official_logo.png",
  website: "",
  mail: "",
  pdf: "",

  highlights: [
   "Industry-Relevant Curriculum",
   "State-of-the-Art Infrastructure",
   "Experienced Faculty",
   "91% Placement Rate",
   "Cisco/Microsoft Certified Labs",
  ],

  facilities: [
   "Fully Air-Conditioned Wi-Fi Campus",
   "Separate AC Hostels",
   "ERP Enabled Online Classes",
   "Transport Facility in NCR",
   "8 Active Research Centers",
  ],

  specializations: [
   "Computer Science and Engineering",
   "Artificial Intelligence & Machine Learning",
   "Artificial Intelligence & Data Science",
  ],

  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "55% in 10+2 (Science) + JEE Main",
    fees: "₹1,00,000 - ₹1,25,000/year",
   },
   {
    name: "B.Arch",
    duration: "5 years",
    eligibility: "50% in 10+2 (Maths) + NATA",
    fees: "₹1,50,000 - ₹1,75,000/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "50% in Graduation + CAT/CMAT",
    fees: "₹1,25,000 - ₹1,50,000/year",
   },
   {
    name: "BCA",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET",
    fees: "₹1,20,000/year",
   },
  ],

  cutoffdata: [],

  admissionProcess:
   "Direct admission available through management quota (60% in 12th required) or via IPU CET/JEE Main scores",
  entranceExams: ["IPU CET", "JEE Main", "NATA", "CAT", "CMAT"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "Additional charges apply",
    food: true,
   },
   girls: {
    available: true,
    fees: "Additional charges apply",
    food: true,
   },
  },

  scholarships: ["Merit-based scholarships", "Government scholarships for EWS"],

  placements: {
   averagePackage: "7 LPA",
   highestPackage: "27 LPA",
   companiesVisited: [
    "IBM",
    "Deloitte",
    "Infosys",
    "TCS",
    "Wipro",
    "Capgemini",
   ],
  },

  ranking: {},

  faq: [],
 },
 {
  collegename:
   "JIMS Engineering Management Technical Campus (JIMS Greater Noida)",
  established: "2013",
  collegetype: "Private",
  location: "Greater Noida, Uttar Pradesh",
  approval: ["AICTE", "BCI", "NCTE"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Technical",

  universityDescription:
   "Established in 2013, JIMS Greater Noida (JEMTEC) is affiliated with GGSIPU and approved by AICTE/BCI/NCTE. The campus offers a variety of undergraduate programs including B.Tech, BBA, BCA, B.Com, BA LLB, BBA LLB and BJMC with modern infrastructure, industry-oriented curriculum, and excellent placement opportunities.",

  image1: "https://www.jimsgn.org/images/inner-banner/jims-2_new.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkoibmN9QpwQgVVpI5OmKxdqL4-ptciSrtQ&s",
  website: "https://www.jemtec.in",
  mail: "admissions@jemtec.in",
  pdf: "",

  highlights: [
   "100+ recruiters from tech and business domains",
   "State-of-the-art infrastructure",
   "Approved by AICTE, BCI, NCTE",
   "Separate hostels for boys and girls",
   "Direct admission through management quota",
  ],

  facilities: [
   "Modern Computer Labs",
   "Library",
   "Auditorium",
   "On-Campus Hostel Facility",
   "Transport Facility",
  ],

  specializations: [
   "Computer Science and Engineering",
   "Artificial Intelligence and Machine Learning",
   "Internet of Things",
   "Artificial Intelligence and Data Science",
  ],

  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "60% in 10+2 with PCM + IPU CET or JEE Main",
    fees: "₹1,45,000/year",
   },
   {
    name: "BBA",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET or Management Quota",
    fees: "₹1,17,400/year",
   },
   {
    name: "BCA",
    duration: "3 years",
    eligibility: "50% in 10+2 with Maths/CS + IPU CET or Management Quota",
    fees: "₹1,11,600/year",
   },
   {
    name: "B.Com (Hons)",
    duration: "3 years",
    eligibility: "50% in 10+2",
    fees: "₹1,06,300/year",
   },
   {
    name: "BA LLB",
    duration: "5 years",
    eligibility: "50% in 10+2 + CLAT",
    fees: "₹1,16,700/year",
   },
   {
    name: "BBA LLB",
    duration: "5 years",
    eligibility: "50% in 10+2 + CLAT",
    fees: "₹1,16,700/year",
   },
   {
    name: "BJMC",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET or Management Quota",
    fees: "₹1,08,500/year",
   },
  ],

  cutoffdata: [],

  admissionProcess:
   "Admission via IPU CET or JEE Main followed by counseling. Direct admission also available under management quota with minimum 60% in 12th for B.Tech and 50% for other courses.",

  entranceExams: ["IPU CET", "JEE Main", "CLAT"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "Additional charges apply",
    food: true,
   },
   girls: {
    available: true,
    fees: "Additional charges apply",
    food: true,
   },
  },

  scholarships: ["Merit-based scholarships", "Government scholarships for EWS"],

  placements: {
   averagePackage: "₹4.74 LPA",
   highestPackage: "₹17.5 LPA",
   companiesVisited: [
    "Accenture",
    "IBM",
    "Deloitte",
    "Vodafone",
    "Sopra",
    "Oppo",
    "Jaro Education",
   ],
  },

  ranking: {},

  faq: [],
 },
 {
  collegename: "Vellore Institute of Technology (VIT Vellore)",
  established: "1984",
  collegetype: "Private",
  location: "Vellore, Tamil Nadu",
  approval: ["UGC", "AICTE", "NAAC A++"],
  state: "Tamil Nadu",
  city: "Vellore",
  affiliatedby: "Deemed to be University",
  collegecategory: "Engineering",

  universityDescription:
   "VIT Vellore is one of India’s top private engineering institutions, known for innovation, modern infrastructure, and high placement rates. Admission is via VITEEE or through management quota with a category-based fee structure.",

  image1:
   "https://images.shiksha.com/mediadata/images/1664721059phpQKCqHM.jpeg",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png",
  website: "https://vit.ac.in",
  mail: "ugadmission@vit.ac.in",
  pdf: "",

  highlights: [
   "Top-ranked private university in India",
   "88 LPA Highest Package in 2024",
   "Over 900 recruiters in 2023",
   "Category-based fee model for BTech",
   "Flexible admission via VITEEE or Direct",
  ],

  facilities: [
   "Wi-Fi Enabled Campus",
   "Modern Labs & Classrooms",
   "Hostels with Mess",
   "24x7 Security",
   "Central Library",
   "Gym & Sports Facilities",
  ],

  specializations: [
   "Computer Science and Engineering",
   "Electronics and Communication Engineering",
   "Mechanical Engineering",
   "Biotechnology",
   "Information Technology",
  ],

  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "60% in PCM/PCB in 10+2 + VITEEE or Direct Admission",
    fees: "₹1,98,000 - ₹4,98,000/year (Category-based)",
   },
   {
    name: "B.Des. Industrial Design",
    duration: "4 years",
    eligibility: "10+2 with Design Aptitude Test",
    fees: "₹1,98,000/year",
   },
   {
    name: "B.Arch",
    duration: "5 years",
    eligibility: "10+2 with Maths + NATA",
    fees: "₹2,95,000/year",
   },
   {
    name: "BBA",
    duration: "3 years",
    eligibility: "10+2 with minimum 60%",
    fees: "₹1,75,000/year",
   },
   {
    name: "BCA",
    duration: "3 years",
    eligibility: "10+2 with Mathematics or CS",
    fees: "₹1,60,000/year",
   },
  ],

  cutoffdata: [
   {
    branch: "Computer Science and Engineering",
    year: 2024,
    closingRank: "8000 (Category 1)",
   },
  ],

  admissionProcess:
   "Admission through VITEEE entrance exam followed by counselling. Direct admission through management quota is available with higher category-based fees.",

  entranceExams: ["VITEEE", "NATA"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹80,000 to ₹1,20,000/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹80,000 to ₹1,20,000/year",
    food: true,
   },
  },

  scholarships: [
   "GV School Development Programme (GVSDP)",
   "Merit-based scholarships based on VITEEE rank",
  ],

  placements: {
   averagePackage: "₹9.23 LPA (2023)",
   highestPackage: "₹88 LPA (2024)",
   companiesVisited: [
    "Microsoft",
    "Amazon",
    "TCS",
    "Qualcomm",
    "Adobe",
    "PayPal",
   ],
  },

  ranking: {
   nirf: "11 (Engineering Category, 2023)",
   indiaToday: "Top 10 Private Universities in India",
   otherSources: ["QS Asia Rankings", "THE Impact Rankings"],
  },

  faq: [
   {
    question: "Is there direct admission in VIT Vellore?",
    answer:
     "Yes, direct admission is available through the management quota for eligible candidates.",
   },
   {
    question: "What is the fee structure for BTech at VIT?",
    answer:
     "Fees range from ₹1,98,000 to ₹4,98,000 per year depending on category (1 to 5).",
   },
   {
    question: "What is the highest package offered?",
    answer:
     "₹88 LPA during 2024 placements, with companies like Microsoft and Adobe.",
   },
   {
    question: "How can I apply for VITEEE?",
    answer:
     "You can register on the official website and pay ₹1250 as the application fee.",
   },
   {
    question: "What is the cutoff for CSE in VIT Vellore?",
    answer: "CSE Category 1 closes under rank 8,000 in VITEEE.",
   },
  ],
 },
 {
  collegename: "Maharaja Agrasen Institute of Technology (MAIT)",
  established: "1999",
  collegetype: "Private",
  location: "Delhi",
  approval: ["AICTE", "ISO 9001-2015"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Technical",

  universityDescription:
   "Established in 1999, MAIT Delhi is affiliated with GGSIPU and approved by AICTE. Known for its engineering and management programs, MAIT offers excellent infrastructure, faculty, and placement records with leading recruiters like Amazon and Accenture.",

  image1:
   "https://media.licdn.com/dms/image/v2/C561BAQH8UDTNWyGngA/company-background_1536_768/company-background_1536_768/0/1584551003332?e=2147483647&v=beta&t=RNreP-4dYg3sabUI1bgC4nKBe3M0FvPkUOrAC3SZXSA",
  image2: "https://www.maitabohar.com/images/logo.png",
  website: "https://mait.ac.in/",
  mail: "",
  pdf: "",

  highlights: [
   "Affiliated to GGSIPU",
   "Top Private Engineering Institute in Delhi NCR",
   "51 LPA Highest Package in 2023",
   "600+ Annual Placements",
   "ISO 9001-2015 Certified",
  ],

  facilities: [
   "Auditorium",
   "Cafeteria",
   "Gym",
   "Wi-Fi Campus",
   "Modern Labs and Libraries",
  ],

  specializations: [
   "Computer Science Engineering",
   "Artificial Intelligence and Machine Learning",
   "Information Technology",
   "Electronics & Communication Engineering",
   "Electrical and Electronics Engineering",
   "Mechanical and Automation Engineering",
  ],

  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "70% in 10+2 (PCM) + JEE Main/IPU CET",
    fees: "₹1,86,000/year",
   },
   {
    name: "BBA",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET",
    fees: "₹1,51,300/year",
   },
   {
    name: "BCA",
    duration: "3 years",
    eligibility: "50% in 10+2 with Math/CS + IPU CET",
    fees: "₹1,39,400/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "50% in Graduation + CAT/CSAT/IPU CET",
    fees: "₹2,18,000/year",
   },
   {
    name: "B.Com (Hons)",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET",
    fees: "₹1,46,300/year",
   },
   {
    name: "BA Economics (Hons)",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET",
    fees: "₹1,46,300/year",
   },
   {
    name: "BAJMC",
    duration: "3 years",
    eligibility: "50% in 10+2 + IPU CET",
    fees: "₹1,51,300/year",
   },
   {
    name: "BA LLB",
    duration: "5 years",
    eligibility: "50% in 10+2 + CLAT",
    fees: "₹1,53,000/year",
   },
   {
    name: "BBA LLB",
    duration: "5 years",
    eligibility: "50% in 10+2 + CLAT",
    fees: "₹1,53,000/year",
   },
  ],

  cutoffdata: [
   {
    branch: "Computer Science Engineering",
    year: 2023,
    closingRank: "54287",
   },
   {
    branch: "AI and ML",
    year: 2023,
    closingRank: "76988",
   },
   {
    branch: "Information Technology",
    year: 2023,
    closingRank: "95283",
   },
   {
    branch: "Electronics & Communication Engineering",
    year: 2023,
    closingRank: "119931",
   },
   {
    branch: "Electrical and Electronics Engineering",
    year: 2023,
    closingRank: "181441",
   },
  ],

  admissionProcess:
   "Apply via IPU CET or JEE Main for B.Tech and CLAT for law courses. Direct admission is available through management quota with minimum 70% in PCM for B.Tech.",

  entranceExams: ["JEE Main", "IPU CET", "CLAT", "CAT"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "Separate charges apply",
    food: true,
   },
   girls: {
    available: true,
    fees: "Separate charges apply",
    food: true,
   },
  },

  scholarships: [
   "Merit-based Scholarships",
   "EWS & Reserved Category Government Scholarships",
  ],

  placements: {
   averagePackage: "₹8 LPA",
   highestPackage: "₹51 LPA",
   companiesVisited: [
    "Amazon",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
   ],
  },

  ranking: {
   indiaToday: "Top 10 Private Engineering Colleges in Delhi NCR",
   ghrdc: "1st in North Region for BBA",
   outlook: "2nd for BCA in Delhi/NCR",
  },

  faq: [
   {
    question: "Is direct admission available at MAIT Delhi?",
    answer:
     "Yes, direct admission is available through management quota for eligible candidates with at least 70% in PCM.",
   },
   {
    question: "What is the MAIT B.Tech fee?",
    answer: "₹1,86,000 per year for B.Tech.",
   },
   {
    question: "What is the highest package offered at MAIT?",
    answer: "₹51 LPA in 2023 placements.",
   },
   {
    question: "What exams are accepted for B.Tech admission?",
    answer: "JEE Main and IPU CET.",
   },
  ],
 },
 {
  collegename: "Maharaja Surajmal Institute of Technology (MSIT)",
  established: "2001",
  collegetype: "Private",
  location: "Janakpuri, New Delhi",
  approval: ["AICTE", "NAAC A", "ISO 9001:2015"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Technical",
  universityDescription:
   "Established in 2001, MSIT Delhi is a premier private engineering institute affiliated to GGSIPU. Approved by AICTE and NAAC accredited with 'A' grade, it offers B.Tech programs in CSE, IT, ECE, and EEE. Known for academic excellence, robust infrastructure, and excellent placement record with top recruiters.",

  image1:
   "https://images.shiksha.com/mediadata/images/1548409349phpTBS3kL.jpeg",
  image2: "https://www.msijanakpuri.com/wp-content/uploads/2019/06/logo2x.png",
  website: "http://www.msit.in",
  mail: "",
  pdf: "",

  highlights: [
   "95% Placement Rate",
   "ISO 9001:2015 Certified",
   "NAAC A Grade Accreditation",
   "AICTE Approved Programs",
   "Top Recruiters: Google, Amazon, Infosys",
  ],

  facilities: [
   "Wi-Fi Enabled Campus",
   "State-of-the-art Labs",
   "Modern Library with Journals",
   "Boys and Girls Hostel",
   "Banking and Mess Facilities",
  ],

  specializations: [
   "Computer Science and Engineering",
   "Electronics and Communication Engineering",
   "Electrical and Electronics Engineering",
   "Information Technology",
  ],

  courses: [
   {
    name: "B.Tech Computer Science and Engineering",
    duration: "4 years",
    eligibility: "55% in 10+2 (PCM) + JEE Main",
    fees: "₹1,65,000/year",
   },
   {
    name: "B.Tech Electronics and Communication Engineering",
    duration: "4 years",
    eligibility: "55% in 10+2 (PCM) + JEE Main",
    fees: "₹1,65,000/year",
   },
   {
    name: "B.Tech Electrical and Electronics Engineering",
    duration: "4 years",
    eligibility: "55% in 10+2 (PCM) + JEE Main",
    fees: "₹1,65,000/year",
   },
   {
    name: "B.Tech Information Technology",
    duration: "4 years",
    eligibility: "55% in 10+2 (PCM) + JEE Main",
    fees: "₹1,65,000/year",
   },
  ],

  cutoffdata: [
   { course: "CSE", jeeCutoff: "54287", ipuCetCutoff: "20" },
   { course: "AI & ML", jeeCutoff: "76988", ipuCetCutoff: "57" },
   { course: "IT", jeeCutoff: "95283", ipuCetCutoff: "60" },
   { course: "ECE", jeeCutoff: "119931", ipuCetCutoff: "60" },
   { course: "EEE", jeeCutoff: "181441", ipuCetCutoff: "237" },
  ],

  admissionProcess:
   "Admission is based on JEE Main + IPU CET counselling. Direct admission through management quota is available for students with 70-80% in 10+2 PCM subjects.",

  entranceExams: ["JEE Main", "IPU CET"],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "Separate charges apply",
    food: true,
   },
   girls: {
    available: true,
    fees: "Separate charges apply",
    food: true,
   },
  },

  scholarships: [
   "Merit-based Scholarships",
   "Reserved Category Scholarships",
   "Need-based Financial Aid",
  ],

  placements: {
   averagePackage: "₹9 LPA",
   highestPackage: "₹80 LPA",
   companiesVisited: [
    "Google",
    "Amazon",
    "Microsoft",
    "HSBC",
    "Infosys",
    "IBM",
   ],
  },

  ranking: {
   nirf2020: "Ranked 250-300 band for B.Tech",
   placementRate: "95%",
  },

  faq: [
   {
    question: "Is direct admission available at MSIT?",
    answer:
     "Yes, direct admission is available through management quota with 80%+ in PCM subjects.",
   },
   {
    question: "What is the B.Tech fee at MSIT?",
    answer:
     "The B.Tech fee is approximately ₹1,65,000 per year including all charges.",
   },
   {
    question: "What is the average package at MSIT?",
    answer: "The average package for B.Tech graduates in 2024 was ₹9 LPA.",
   },
   {
    question: "What exams are accepted for MSIT B.Tech admission?",
    answer: "JEE Main and IPU CET are accepted for regular admissions.",
   },
   {
    question: "How many B.Tech seats are available at MSIT?",
    answer: "Total intake across all branches is approximately 600+ seats.",
   },
  ],
 },
 {
  collegename: "Galgotias University",
  established: "2011",
  collegetype: "Private",
  location: "Greater Noida, Uttar Pradesh",
  approval: ["UGC", "AICTE", "BCI", "PCI"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Self-financed (Private University)",
  collegecategory: "Multidisciplinary",
  universityDescription:
   "Galgotias University, located in Greater Noida, is a UGC-recognized private university known for academic excellence, strong placements, and modern infrastructure. It offers a wide range of undergraduate and postgraduate programs with direct and management quota admission options.",

  image1: "https://galgotiasonline.edu.in/images/Aboutus.webp",
  image2:
   "https://galgotiacollege.edu//public/uploads/all/3106/phelosophy.jpeg",
  website: "https://www.galgotiasuniversity.edu.in/",
  mail: "",
  pdf: "",

  highlights: [
   "NIRF Ranked University",
   "Strong Industry Collaborations",
   "Excellent Placement Record",
   "Modern Campus with Advanced Labs",
   "Wide Range of Programs and Global Tie-ups",
  ],

  facilities: [
   "Wi-Fi Enabled Campus",
   "Modern Labs and Classrooms",
   "On-Campus Hostel and Mess",
   "Libraries and Digital Resources",
   "Sports and Cultural Facilities",
  ],

  specializations: [
   "Computer Science and Engineering",
   "Electronics and Communication Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
   "Electrical Engineering",
  ],

  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM or equivalent",
    fees: "₹1,49,000 - ₹1,70,000/year",
   },
   {
    name: "BBA",
    duration: "3 years",
    eligibility: "10+2 with 60%",
    fees: "₹1,20,000 - ₹1,40,000/year",
   },
   {
    name: "BCA",
    duration: "3 years",
    eligibility: "10+2 with Mathematics/Statistics/Accountancy",
    fees: "₹90,000 - ₹1,00,000/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "Graduation with 60%",
    fees: "₹1,50,000/year",
   },
   {
    name: "LLB (BA LLB / BBA LLB)",
    duration: "5 years",
    eligibility: "10+2 with 60%",
    fees: "₹1,20,000 - ₹1,30,000/year",
   },
  ],

  cutoffdata: [],

  admissionProcess:
   "Apply through Galgotias University's website or contact admissions for management quota. Direct admission available based on 10+2 marks. No entrance exam required under management quota.",

  entranceExams: [
   "JEE Main",
   "CUET",
   "GATE",
   "CLAT",
   "CAT",
   "University Level Entrance",
  ],

  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹85,000 - ₹1,40,000/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹85,000 - ₹1,40,000/year",
    food: true,
   },
  },

  scholarships: [
   "Merit-Based Scholarships",
   "Need-Based Scholarships",
   "Sports Scholarships",
   "Early Bird Admission Discounts",
  ],

  placements: {
   averagePackage: "₹5 - ₹6 LPA",
   highestPackage: "₹22 LPA (Domestic), ₹30 LPA (International)",
   companiesVisited: [
    "Amazon",
    "TCS",
    "Infosys",
    "Accenture",
    "Capgemini",
    "Wipro",
    "HCL",
   ],
  },

  ranking: {
   nirfEngineering: "Top 200 in NIRF (Engineering)",
   nirfUniversity: "Top 100 Universities in India",
  },

  faq: [
   {
    question:
     "Is direct admission possible in Galgotias University for B.Tech?",
    answer:
     "Yes, direct admission is available under management quota based on 10+2 performance.",
   },
   {
    question:
     "What is the annual tuition fee for B.Tech at Galgotias University?",
    answer:
     "It ranges from ₹1,49,000 to ₹1,70,000 depending on the specialization.",
   },
   {
    question: "Does Galgotias University offer hostel facilities?",
    answer:
     "Yes, hostel facilities are available for both boys and girls with a fee range of ₹85,000 - ₹1,40,000/year.",
   },
   {
    question: "What is the application fee for Galgotias University?",
    answer: "₹1,200 (one-time, non-refundable).",
   },
   {
    question: "What is the placement record of Galgotias University?",
    answer:
     "The average package is ₹5-6 LPA with the highest package going up to ₹30 LPA internationally.",
   },
  ],
 },
 {
  collegename: "Guru Tegh Bahadur Institute of Technology (GTBIT)",
  established: "1999",
  collegetype: "Private",
  location: "Rajouri Garden, New Delhi",
  approval: ["AICTE", "UGC (12B)", "NAAC A"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Technical",
  universityDescription:
   "Guru Tegh Bahadur Institute of Technology (GTBIT), established in 1999, is a private engineering institute in New Delhi approved by AICTE and affiliated with GGSIPU. It offers top-notch technical education with strong industry collaboration, excellent placements, and modern infrastructure.",

  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHO8Tu8XtBO1PhV8l4rEpGCHeWGODkJCNhsA&s",
  image2:
   "https://play-lh.googleusercontent.com/3AIeSG0MgjUjA-oOYOoSCu802l5Lv5D96brKajRdf01r2IavfOhcmrs_JhkSfhndyA",
  website: "https://www.gtbit.org/",
  mail: "",
  pdf: "",

  highlights: [
   "Affiliated to GGSIPU",
   "NAAC A Accredited",
   "Excellent Industry Placements",
   "Modern Labs and Infrastructure",
   "Located in Heart of West Delhi",
  ],

  facilities: [
   "Library",
   "Canteen",
   "Sports Grounds",
   "Computer Labs",
   "Wi-Fi Enabled Campus",
  ],

  specializations: [
   "Computer Science and Engineering",
   "Information Technology",
   "Electronics and Communication Engineering",
   "Artificial Intelligence and Data Science",
   "Artificial Intelligence and Machine Learning",
   "Computer Science and Engineering (AI & ML)",
   "Computer Science and Engineering (Data Science)",
  ],

  courses: [
   {
    name: "B.Tech Computer Science and Engineering",
    duration: "4 years",
    eligibility: "70% in 10+2 with PCM + JEE Main",
    fees: "₹1,58,000/year",
   },
   {
    name: "B.Tech Information Technology",
    duration: "4 years",
    eligibility: "70% in 10+2 with PCM + JEE Main",
    fees: "₹1,58,000/year",
   },
   {
    name: "B.Tech ECE / EEE / AI / DS",
    duration: "4 years",
    eligibility: "70% in 10+2 with PCM + JEE Main",
    fees: "₹1,58,000/year",
   },
  ],

  cutoffdata: [
   {
    branch: "Computer Science and Engineering",
    cutoff: "50,000 - 80,000 (Expected)",
   },
   {
    branch: "Information Technology",
    cutoff: "60,000 - 90,000 (Expected)",
   },
   {
    branch: "Electronics and Communication Engineering",
    cutoff: "1,20,000 - 1,60,000",
   },
   {
    branch: "AI and Data Science",
    cutoff: "1,30,000 - 1,75,000",
   },
  ],

  admissionProcess:
   "Apply through JEE Mains + GGSIPU counselling. Management quota available for direct admission with 70% in 12th PCM.",

  entranceExams: ["JEE Mains", "IPU CET"],

  hostelFacilities: {
   boys: {
    available: false,
    fees: "N/A",
    food: false,
   },
   girls: {
    available: false,
    fees: "N/A",
    food: false,
   },
  },

  scholarships: [
   "Merit-based Scholarships",
   "SC/ST/OBC Scholarships",
   "Delhi Government Reimbursements",
   "AICTE Pragati, Saksham, Swanath",
  ],

  placements: {
   averagePackage: "₹9 LPA",
   highestPackage: "₹82 LPA",
   companiesVisited: [
    "Microsoft",
    "Amazon",
    "Infosys",
    "Wipro",
    "TCS",
    "HCL",
    "Paytm",
   ],
  },

  ranking: {
   nirf: "Top 250-300 engineering colleges (2020)",
  },

  faq: [
   {
    q: "Is GTBIT a private or government college?",
    a: "GTBIT is a private engineering institute affiliated to GGSIPU and approved by AICTE.",
   },
   {
    q: "What is the eligibility for BTech direct admission at GTBIT?",
    a: "Minimum 70% in 10+2 PCM is required for management quota admission.",
   },
   {
    q: "What is the fee for BTech at GTBIT?",
    a: "The annual tuition fee is ₹1,58,000.",
   },
   {
    q: "What is the highest package offered at GTBIT?",
    a: "GTBIT recorded a highest package of ₹82 LPA in 2024.",
   },
   {
    q: "How can I get direct admission in GTBIT?",
    a: "Direct admission is possible via the management quota. Call 7755889994 for assistance.",
   },
  ],
 },
 {
  collegename: "Bhagwan Parshuram Institute of Technology (BPIT)",
  established: "2007",
  collegetype: "Private",
  location: "Rohini, New Delhi",
  approval: ["AICTE", "Ministry of HRD", "DTTE, Govt. of NCT of Delhi"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Engineering",
  universityDescription:
   "Bhagwan Parshuram Institute of Technology (BPIT) is a premier engineering college in Delhi, established in 2007 and affiliated to GGSIPU. BPIT offers B.Tech, BBA, and MBA programs with a strong placement record and state-of-the-art infrastructure.",
  image1:
   "https://ik.imagekit.io/syustaging/SYU_PREPROD/Bhagwan-Parshuram-Institute-of-Technology---_BPIT_-_New-Delhi-_Delhi-NCR_rONKCcefO.webp?tr=w-3840",
  image2:
   "https://images.shiksha.com/mediadata/images/1652095604phpLTdf0U.jpeg",
  website: "http://www.bpitindia.com/",
  mail: "",
  pdf: "",
  highlights: [
   "Affiliated to GGSIPU",
   "Approved by AICTE and Ministry of HRD",
   "Located in Rohini, Delhi",
   "NAAC Accredited",
   "Excellent Placement Record",
  ],
  facilities: [
   "Library",
   "Canteen",
   "Lecture Halls",
   "Seminar Halls",
   "Girls Hostel",
   "Indoor Sports",
   "Medical Room",
   "Wi-Fi Campus",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Information Technology",
   "Electronics and Communication Engineering",
   "Electrical and Electronics Engineering",
   "Artificial Intelligence and Data Science",
  ],
  courses: [
   {
    name: "B.Tech Computer Science and Engineering",
    duration: "4 years",
    eligibility: "80% in 12th PCM",
    fees: "\u20b91,69,200/year",
   },
   {
    name: "B.Tech Information Technology",
    duration: "4 years",
    eligibility: "80% in 12th PCM",
    fees: "\u20b91,69,200/year",
   },
   {
    name: "B.Tech ECE/EEE/AI",
    duration: "4 years",
    eligibility: "80% in 12th PCM",
    fees: "\u20b91,69,200/year",
   },
  ],
  cutoffdata: [
   {
    branch: "CSE",
    cutoff: "38,113 \u2013 45,317",
   },
   {
    branch: "IT",
    cutoff: "42,625 \u2013 49,644",
   },
   {
    branch: "ECE",
    cutoff: "51,218 \u2013 63,421",
   },
   {
    branch: "EEE",
    cutoff: "61,645 \u2013 74,418",
   },
   {
    branch: "AI & DS",
    cutoff: "44,584 \u2013 93,802",
   },
  ],
  admissionProcess:
   "Apply via JEE Mains followed by IPU Counselling. Management Quota also available based on merit.",
  entranceExams: ["JEE Mains", "IPU CET"],
  hostelFacilities: {
   boys: {
    available: false,
    fees: "N/A",
    food: false,
   },
   girls: {
    available: true,
    fees: "N/A",
    food: true,
   },
  },
  scholarships: [
   "EWS Scholarship",
   "BR Ambedkar State Toppers Award",
   "Merit-based Scholarships",
   "Management Quota Merit Scholarships",
  ],
  placements: {
   averagePackage: "\u20b99 LPA",
   highestPackage: "\u20b972 LPA",
   companiesVisited: [
    "Amazon",
    "Zomato",
    "BNY Mellon",
    "Tortoise",
    "Synopsys",
    "ION Group",
    "ZS Associates",
    "Infosys",
    "IBM",
    "HSBC",
   ],
  },
  ranking: {
   nirf: "Not Available",
  },
  faq: [
   {
    q: "What is the eligibility for B.Tech direct admission at BPIT?",
    a: "Minimum 80% in 12th PCM and application through IPU Counselling.",
   },
   {
    q: "What is the highest package offered at BPIT?",
    a: "BPIT recorded a highest package of \u20b972 LPA in 2024.",
   },
   {
    q: "What is the average placement package?",
    a: "The average package stood at \u20b99 LPA for the B.Tech batch.",
   },
   {
    q: "Is BPIT a private college?",
    a: "Yes, BPIT is a private college affiliated with GGSIPU, Delhi.",
   },
   {
    q: "Is management quota available in BPIT?",
    a: "Yes, around 10% seats are reserved for management quota admission.",
   },
  ],
 },
 {
  collegename: "Bharati Vidyapeeth College of Engineering (BVCOE)",
  established: "1999",
  collegetype: "Private",
  location: "New Delhi",
  approval: ["AICTE"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Engineering",
  universityDescription:
   "Bharati Vidyapeeth College of Engineering (BVCOE), New Delhi, established in 1999, is a private engineering institute affiliated with GGSIPU and approved by AICTE. Known for strong academic performance, diverse specializations, and solid placement records, BVCOE offers direct admission options and management quota seats for BTech aspirants.",
  image1:
   "https://images.shiksha.com/mediadata/images/1488265701php44QPnK.jpeg",
  image2:
   "https://ik.imagekit.io/syustaging/SYU_PREPROD/BVCOE-Pune-Logo_YVZ3d_NOB.webp?tr=w-3840",
  website: "http://bvcoend.ac.in",
  mail: "",
  pdf: "",
  highlights: [
   "Strong academic foundation with experienced faculty",
   "Diverse engineering specializations",
   "Direct admission through management quota",
   "58 LPA highest package in 2024",
   "Excellent placement support and industrial exposure",
  ],
  facilities: [
   "Library and advanced laboratories",
   "Wi-Fi campus and high-speed internet",
   "Hostel and mess facilities",
   "On-campus banking and medical aid",
   "Training & Placement Cell",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science & Engineering (AI & ML)",
   "Electronics and Communication Engineering",
   "Electrical and Electronics Engineering",
   "Information Technology",
   "Instrumentation and Control Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with 55% aggregate in PCM (45% for SC/ST); JEE Mains or management quota",
    fees: "₹1,73,000/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: "85-95 percentile",
    expectedCutoffSCST: "75-85 percentile",
   },
  ],
  admissionProcess:
   "Apply online on BVCOE portal. For direct admission via management quota, contact the college directly. Management quota requires 10+2 with minimum 75% marks in PCM.",
  entranceExams: ["JEE Mains", "IPUCET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Not specified",
    food: true,
   },
   girls: {
    available: true,
    fees: "Not specified",
    food: true,
   },
  },
  scholarships: ["Merit-based scholarships", "Need-based financial aid"],
  placements: {
   averagePackage: "₹9 LPA",
   highestPackage: "₹58 LPA",
   companiesVisited: [
    "Infosys",
    "Amazon",
    "TCS",
    "Cognizant",
    "Wipro",
    "IBM",
    "Microsoft",
    "HSBC",
    "Google",
   ],
  },
  ranking: {
   NIRF: "Tier 2 Institution",
  },
  faq: [
   {
    question: "Is Bharati Vidyapeeth a government or private college?",
    answer: "Bharati Vidyapeeth is a private college affiliated with GGSIPU.",
   },
   {
    question: "What is the eligibility for BTech admission?",
    answer:
     "10+2 with 55% aggregate in PCM (45% for SC/ST), under 25 years of age.",
   },
   {
    question: "What entrance exams are accepted?",
    answer: "JEE Mains and IPUCET for lateral entry.",
   },
   {
    question: "Is direct admission available?",
    answer: "Yes, through management quota with a minimum of 75% in PCM.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹58 LPA as of 2024.",
   },
  ],
 },
 {
  collegename:
   "Dr. Akhilesh Das Gupta Institute of Technology and Management (ADGITM)",
  established: "2003",
  collegetype: "Private",
  location: "New Delhi, Delhi, India",
  approval: ["AICTE", "BCI", "NAAC"],
  address: null,
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Engineering",
  universityDescription:
   "Dr. Akhilesh Das Gupta Institute of Technology and Management (ADGITM), formerly NIEC, is a premier private engineering college in Delhi affiliated with GGSIPU. Offering quality education in engineering, management, and law, the institute is known for its excellent infrastructure, top-notch faculty, strong placement support, and industry collaborations.",
  image1:
   "https://upload.wikimedia.org/wikipedia/commons/b/b0/Adgitm-college-img.png",
  image2:
   "https://images.shiksha.com/mediadata/images/1674199807phpl6t19N.jpeg",
  website: "https://adgitmdelhi.ac.in",
  mail: null,
  pdf: null,
  highlights: [
   "Formerly Northern India Engineering College (NIEC)",
   "Located in 8.08 acres lush campus in Shastri Park, Delhi",
   "Affiliated to GGSIPU and approved by AICTE & BCI",
   "Top recruiters: Infosys, IBM, HCL, Oracle, TCS, Accenture",
   "Collaborations with Microsoft, HP, IBM, CMC",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Sports Complex",
   "Seminar Halls",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Electronics and Communication Engineering",
   "Information Technology",
   "Mechanical Engineering",
   "Civil Engineering",
   "Artificial Intelligence and Machine Learning",
   "Artificial Intelligence and Data Science",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with minimum 55% in PCM and English; Direct admission requires 80% in PCM",
    fees: "₹1,76,000/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "1.5L – 2.75L",
     IT: "1.8L – 4.23L",
     ECE: "2.5L – 5.6L",
     Mechanical: "5.5L – 8L",
     Civil: "6.5L – 9L",
    },
   },
  ],
  admissionProcess:
   "Admission via IPU CET or JEE Main for B.Tech; 10% seats available under Management Quota with 80%+ in PCM. Apply via GGSIPU official site. Management quota admissions handled directly by ADGITM.",
  entranceExams: ["JEE Mains", "IPU CET", "CLAT", "CAT", "MAT", "XAT", "CUET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: null,
    food: true,
   },
   girls: {
    available: true,
    fees: null,
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Need-based Financial Aid",
   "Sports Scholarships",
  ],
  placements: {
   averagePackage: "₹7 LPA",
   highestPackage: "₹42 LPA",
   companiesVisited: [
    "Infosys",
    "TCS",
    "L&T Infotech",
    "HCL",
    "Accenture",
    "IBM",
    "Oracle",
    "India Mart",
    "ICICI Prudential",
    "Capital IQ",
   ],
  },
  ranking: {
   nirf: null,
   indiaToday: null,
   otherSources: ["Ranked among top private engineering colleges in Delhi NCR"],
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech direct admission?",
    answer: "Minimum 80% aggregate in PCM in Class 12.",
   },
   {
    question: "What are the fees for B.Tech at ADGITM?",
    answer: "₹1,76,000 per year for all specializations.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹42 LPA as of 2024.",
   },
   {
    question: "How do I apply for direct admission?",
    answer:
     "Contact ADGITM admission office or call 7755889994 for management quota seats.",
   },
   {
    question: "Is hostel available at ADGITM?",
    answer:
     "Yes, hostel facilities with food are available for both boys and girls.",
   },
  ],
  pdf: null,
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
 },
 {
  collegename: "Symbiosis Institute of Technology (SIT) Pune",
  established: "2008",
  collegetype: "Private",
  location: "Pune",
  approval: ["NAAC 'A' Grade"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Symbiosis International (Deemed University)",
  collegecategory: "Engineering",
  universityDescription:
   "Symbiosis Institute of Technology (SIT), Pune is a premier private engineering college established in 2008. It is a constituent of Symbiosis International (Deemed University) and is known for its industry-relevant education, state-of-the-art infrastructure, and excellent placement record.",
  image1: "https://www.siu.edu.in/uploads/school/66e41169aaf111726222697.webp",
  image2: "https://graduateme.in/collegelogo/Symlogo333.jpg",
  website: "https://www.sitpune.edu.in",
  mail: "",
  pdf: "",
  highlights: [
   "Constituent of Symbiosis International (Deemed University)",
   "NAAC accredited with an ‘A’ grade",
   "Strong industry collaborations and placement record",
   "Focus on research and innovation",
   "State-of-the-art infrastructure and vibrant campus life",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Sports Complex",
   "Cafeteria",
   "Auditorium",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Artificial Intelligence and Machine Learning",
   "Information Technology",
   "Robotics and Automation",
   "Electronics and Telecommunication Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with 45% in PCM (General), 40% for Reserved. Admission through SET/JEE or Direct.",
    fees: "₹3,00,000 – ₹4,00,000/year",
   },
   {
    name: "M.Tech",
    duration: "2 years",
    eligibility: "B.E/B.Tech in relevant field with 50% marks. GATE preferred.",
    fees: "₹1,85,000 – ₹3,00,000/year",
   },
  ],
  cutoffdata: [
   {
    exam: "SET / JEE Mains",
    expectedCutoffGeneral: {
     CSE: "85 – 90 percentile",
     IT: "80 – 85 percentile",
     ECE: "75 – 80 percentile",
     Mechanical: "65 – 70 percentile",
     Civil: "60 – 65 percentile",
    },
   },
  ],
  admissionProcess:
   "Admissions through SET/JEE Main or directly under management quota. Candidates must meet minimum eligibility and can apply online through SIT or Symbiosis University portal.",
  entranceExams: ["SET", "JEE Mains", "GATE"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹95,000 – ₹1,30,000/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹95,000 – ₹1,30,000/year",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "SET Performance Scholarships",
   "Need-based Scholarships",
   "Defense Quota Scholarships",
  ],
  placements: {
   averagePackage: "₹8 – ₹9 LPA",
   highestPackage: "₹62 LPA",
   companiesVisited: [
    "Google",
    "Microsoft",
    "IBM",
    "Infosys",
    "Cognizant",
    "TCS",
    "Wipro",
    "Tech Mahindra",
    "Capgemini",
    "L&T Infotech",
   ],
  },
  ranking: {
   NIRF: "Ranked among top engineering institutes in India",
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech admission?",
    answer:
     "Minimum 45% aggregate in PCM (40% for reserved category) and qualified in SET/JEE Main or eligible for direct admission.",
   },
   {
    question: "What are the B.Tech fees at SIT Pune?",
    answer:
     "Fees range from ₹3,00,000 to ₹4,00,000 per year depending on specialization.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹62 LPA has been the highest package offered at SIT Pune.",
   },
   {
    question: "How to apply for direct admission at SIT?",
    answer:
     "Contact SIT admission office or visit their official website to apply under the management quota.",
   },
   {
    question: "Are hostel facilities available?",
    answer:
     "Yes, hostel facilities with food are available for both boys and girls.",
   },
  ],
 },
 {
  collegename: "Vivekananda Institute of Professional Studies (VIPS)",
  established: "1998",
  collegetype: "Private",
  location: "New Delhi",
  approval: ["AICTE", "Bar Council of India (BCI)", "GGSIPU Affiliated"],
  state: "Delhi",
  city: "New Delhi",
  affiliatedby: "Guru Gobind Singh Indraprastha University (GGSIPU)",
  collegecategory: "Engineering, Management, Law, Media",
  universityDescription:
   "Vivekananda Institute of Professional Studies (VIPS) is a premier institute in Delhi affiliated with GGSIPU, offering diverse UG and PG programs in B.Tech, BBA, BCA, Law, Journalism, and more. Known for its strong academics, industry-driven curriculum, modern infrastructure, and excellent placements, VIPS prepares students for future success.",
  image1:
   "https://upload.wikimedia.org/wikipedia/commons/6/66/VIPS-TC_Campus.jpg",
  image2:
   "https://media.licdn.com/dms/image/v2/D560BAQEqRHB2qMz_kg/company-logo_200_200/company-logo_200_200/0/1710152293254/vivekananda_institute_of_professional_studies_logo?e=2147483647&v=beta&t=tyMXa-MfNLACYjx64Zq_6883seO6Wdnr12yvRiarZYM",
  website: "https://vips.edu",
  mail: "",
  pdf: "",
  highlights: [
   "Affiliated with GGSIPU, Delhi",
   "NAAC 'A' Grade Accredited",
   "Top recruiters include Deloitte, Infosys, Siemens",
   "Scholarships for meritorious students",
   "Strong placement network with 72 LPA highest package",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Auditorium",
   "Sports Facilities",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Artificial Intelligence and Data Science",
   "Artificial Intelligence and Machine Learning",
   "Industrial Internet of Things",
   "Electronics Engineering VLSI Design and Technology",
   "Computer Science and Engineering Cyber Security",
   "Computer Science and Applied Mathematics",
  ],
  courses: [
   {
    name: "B.Tech in Computer Science and Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
   {
    name: "B.Tech in Artificial Intelligence and Data Science",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
   {
    name: "B.Tech in Artificial Intelligence and Machine Learning",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
   {
    name: "B.Tech in Industrial Internet of Things",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
   {
    name: "B.Tech in Electronics Engineering VLSI Design and Technology",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering Cyber Security",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
   {
    name: "B.Tech in Computer Science and Applied Mathematics",
    duration: "4 years",
    eligibility:
     "10+2 with PCM; minimum 55% for counseling, 80% for direct admission; JEE Mains required",
    fees: "₹1,74,000/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     "Computer Science and Engineering": "up to 74,312",
     "Artificial Intelligence and Data Science": "up to 89,140",
    },
   },
  ],
  admissionProcess:
   "Admission via IPU CET counseling or JEE Main; 10% of seats under Management Quota based on 12th performance. Apply via official VIPS portal.",
  entranceExams: ["JEE Mains", "IPU CET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹10,000 - ₹20,000/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹10,000 - ₹20,000/year",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Fee Waivers for Deserving Students",
  ],
  placements: {
   averagePackage: "₹8 - ₹10 LPA",
   highestPackage: "₹72 LPA",
   companiesVisited: ["Deloitte", "Infosys", "Siemens"],
  },
  ranking: {
   NIRF: "Consistently ranked among top private institutes in Delhi NCR",
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech direct admission at VIPS?",
    answer:
     "Candidates must have completed 10+2 with Physics, Chemistry, and Mathematics and scored at least 80%.",
   },
   {
    question: "What is the VIPS B.Tech fee?",
    answer:
     "Fees range between ₹1,64,900 to ₹1,95,300 annually depending on specialization.",
   },
   {
    question: "What is the highest package for B.Tech at VIPS?",
    answer: "₹72 LPA as per recent reports.",
   },
   {
    question: "Is there management quota at VIPS?",
    answer:
     "Yes, around 10% of seats are reserved for Management Quota admission based on 12th score.",
   },
   {
    question: "What are VIPS B.Tech specializations?",
    answer:
     "Specializations include CSE, AI & ML, AI & DS, IoT, VLSI, Cyber Security, Applied Mathematics.",
   },
  ],
 },
 {
  collegename: "Galgotias College of Engineering and Technology (GCET)",
  established: "2000",
  collegetype: "Private",
  location: "Greater Noida",
  approval: ["AICTE", "AKTU"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "Galgotias College of Engineering and Technology (GCET), Greater Noida, is a top-ranked engineering institution affiliated with AKTU. The college offers undergraduate and postgraduate courses in engineering, management, and computer applications. Known for its 100% placement record, modern infrastructure, and strong industry tie-ups, GCET is one of the leading private engineering colleges in Uttar Pradesh.",
  image1:
   "https://galgotiacollege.edu//public/uploads/all/785/bgset-jk-full.webp",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/b/b5/Galgotias_College_logo.jpg",
  website: "https://www.galgotiacollege.edu/",
  mail: "info@galgotiacollege.edu",
  pdf: "",
  highlights: [
   "100% placement assistance with top MNCs",
   "JEE Main and UPTAC-based admission with management quota option",
   "Ranked among top 200 by NIRF",
   "Scholarship opportunities for meritorious and economically weak students",
   "Well-equipped labs, modern classrooms, and residential hostels",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Sports Facilities",
   "Seminar Halls",
   "Cafeteria",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science and Engineering (AI)",
   "Computer Science and Engineering (Data Science)",
   "Computer Science and Engineering (Hindi)",
   "Computer Science and Engineering (AI and ML)",
   "Artificial Intelligence and Data Science",
   "Artificial Intelligence and Machine Learning",
   "Information Technology",
   "Computer Science and Design",
   "Civil Engineering",
   "Mechanical Engineering",
   "Electrical Engineering",
   "Electrical and Electronics Engineering",
   "Electronics and Communication Engineering",
   "Electronics and Communication (Advanced Communication Technology)",
   "Electronics Engineering (VLSI Design and Technology)",
  ],
  courses: [
   {
    name: "B.Tech in Artificial Intelligence and Data Science",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Artificial Intelligence and Machine Learning",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Civil Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Computer Science and Design",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering (Hindi)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name:
     "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name:
     "B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering (Data Science)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Electrical & Electronics Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Electrical Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Electronics and Communication Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name:
     "B.Tech in Electronics and Communication (Advanced Communication Technology)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Electronics Engineering (VLSI Design and Technology)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Information Technology",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
   {
    name: "B.Tech in Mechanical Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,15,603/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "57k – 77k",
     "CSE (AI)": "1L – 1.2L",
     "CSE (DS)": "1.1L – 1.3L",
     IT: "1.2L – 1.3L",
     ECE: "2.5L – 3L",
     AIML: "3L – 3.5L",
     EEE: "6L – 6.5L",
     Mechanical: "7L – 7.4L",
     Civil: "7.5L – 7.8L",
    },
   },
  ],
  admissionProcess:
   "Admission is based on JEE Main score followed by UPTAC counseling. 15% of seats are reserved for direct admission through management quota. Applicants must have at least 60% in PCM in Class XII.",
  entranceExams: ["JEE Mains", "CUET", "CAT", "MAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Not disclosed",
    food: true,
   },
   girls: {
    available: true,
    fees: "Not disclosed",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "Need-Based Scholarships",
   "UP Government Scholarships",
  ],
  placements: {
   averagePackage: "₹8 LPA",
   highestPackage: "₹75 LPA",
   companiesVisited: [
    "Amazon",
    "Adobe",
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Accenture",
    "EY",
    "Tiger Analytics",
    "JellyFish Technologies",
    "Capgemini",
    "Cognizant",
   ],
  },
  ranking: {
   NIRF: "192 (2022)",
   "India Today": "16 (2022)",
  },
  faq: [
   {
    question: "Can I get direct admission in BTech at Galgotias College?",
    answer:
     "Yes, you can apply for BTech direct admission under the management quota with a minimum of 60% in PCM in Class XII.",
   },
   {
    question: "What is the BTech fee at Galgotias College?",
    answer: "The fee is ₹1,15,603 per year for all B.Tech branches.",
   },
   {
    question: "What is the highest package offered?",
    answer: "In 2024, the highest package stood at ₹75 LPA.",
   },
   {
    question: "Is hostel available at Galgotias College?",
    answer:
     "Yes, separate hostels for boys and girls with food facilities are available.",
   },
   {
    question: "What exams are accepted for admission?",
    answer:
     "JEE Main is the primary entrance exam. Management quota does not require a qualifying JEE rank.",
   },
  ],
 },
 {
  collegename: "GL Bajaj Institute of Technology and Management (GLBITM)",
  established: "2007",
  collegetype: "Private",
  location: "Greater Noida",
  approval: ["AICTE", "AKTU"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "GL Bajaj Institute of Technology and Management (GLBITM), located in Greater Noida, is a premier private engineering and management institution established in 2007. Affiliated with AKTU, it offers B.Tech, M.Tech, MBA, and MCA programs. The institute is known for its strong academic framework, industry-focused curriculum, and excellent placement records with the highest package reaching ₹57 LPA and average package at ₹8 LPA.",
  image1:
   "https://blog.glbitm.org/wp-content/uploads/2018/08/GL-BAJAJ-INSTITUTE-OF-MANAGEMENT-AND-RESEARCH-1.jpg",
  image2: "https://www.glbitm.org/Uploads/image/846imguf_LogoGLBajaj.jpg",
  website: "https://www.glbitm.org/",
  mail: "info@glbitm.ac.in",
  pdf: "",
  highlights: [
   "Direct admission available through management quota",
   "Excellent placement track record with top recruiters",
   "Modern infrastructure with advanced research labs",
   "Scholarships for meritorious and financially weak students",
   "Located in the prime education hub of Greater Noida",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Sports Complex",
   "Cafeteria",
   "Auditorium",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science and Engineering (AI-ML)",
   "Computer Science and Engineering (Data Science)",
   "Computer Science and Engineering (IOT)",
   "Computer Science and Information Technology",
   "Information Technology",
   "Electronics & Communication Engineering",
   "Electrical & Electronics Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
  ],
  courses: [
   {
    name: "B.Tech in Computer Science and Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering (AI-ML)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering (Data Science)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Computer Science and Engineering (IOT)",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Computer Science and Information Technology",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Information Technology",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Electronics & Communication Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Electrical & Electronics Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Mechanical Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
   {
    name: "B.Tech in Civil Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,59,950/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "57k – 77k",
     "CSE (AI-ML)": "1L – 1.2L",
     "CSE (DS)": "1.1L – 1.3L",
     "CSE (IOT)": "1.3L – 1.4L",
     IT: "1.2L – 1.3L",
     ECE: "2.5L – 3L",
     EEE: "6L – 6.5L",
     Mechanical: "7L – 7.4L",
     Civil: "7.5L – 7.8L",
    },
   },
  ],
  admissionProcess:
   "Admission is based on JEE Main score followed by UPTAC counseling. 15% of seats are reserved for direct admission through management quota. Applicants must have at least 60% in PCM in Class XII.",
  entranceExams: ["JEE Mains", "GATE", "CUET", "CAT", "MAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Not disclosed",
    food: true,
   },
   girls: {
    available: true,
    fees: "Not disclosed",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "Need-Based Scholarships",
   "UP Government Scholarships",
  ],
  placements: {
   averagePackage: "₹8 LPA",
   highestPackage: "₹57 LPA",
   companiesVisited: [
    "TCS",
    "Wipro",
    "Infosys",
    "Cognizant",
    "Capgemini",
    "Amazon",
    "Accenture",
    "EY",
    "Adobe",
    "HCL",
    "Tech Mahindra",
   ],
  },
  ranking: {
   NIRF: "Top 10 private colleges in UP",
   "India Today": "Ranked among top engineering colleges in India",
  },
  faq: [
   {
    question: "Can I get direct admission in BTech at GL Bajaj?",
    answer:
     "Yes, GL Bajaj offers direct admission under management quota for eligible students with at least 60% in PCM.",
   },
   {
    question: "What is the BTech fee at GL Bajaj?",
    answer: "The annual tuition fee is ₹1,59,950 across all B.Tech branches.",
   },
   {
    question: "What is the highest package offered?",
    answer: "In 2024, the highest package reached ₹57 LPA.",
   },
   {
    question: "What is the average package for BTech students?",
    answer: "The average package stands at ₹8 LPA for BTech graduates.",
   },
   {
    question: "Is hostel available at GL Bajaj?",
    answer:
     "Yes, separate hostel facilities for boys and girls with food services are available.",
   },
  ],
 },
 {
  collegename: "Noida Institute of Engineering and Technology (NIET)",
  established: "2001",
  collegetype: "Private",
  location: "Greater Noida",
  approval: ["AICTE", "AKTU", "NAAC A", "NBA"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "Noida Institute of Engineering and Technology (NIET), established in 2001 in Greater Noida, is one of the top private engineering institutions in Uttar Pradesh. It is affiliated with AKTU and accredited by NAAC (A grade) and NBA. NIET offers UG and PG programs in engineering, pharmacy, management, and computer applications with a strong focus on placements, having recorded the highest BTech package of ₹75 LPA.",
  image1: "https://www.niet.co.in/assets/frontend/images/niet-college-2.webp",
  image2:
   "https://www.static-contents.youth4work.com/university/Documents/Colleges/collegeLogo/20221223142746.png?v=20221223142746",
  website: "https://www.niet.co.in/",
  mail: "info@niet.co.in",
  pdf: "",
  highlights: [
   "NAAC A & NBA accredited",
   "NIRF ranked 101-150 in engineering category",
   "BTech highest package up to ₹75 LPA",
   "Dedicated placement cell with 2700+ offers in 2024",
   "Offers direct admission through management quota",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Sports Facilities",
   "Cafeteria",
   "Gym",
   "Auditorium",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science and Engineering (AI)",
   "Computer Science and Engineering (Data Science)",
   "Computer Science and Engineering (AI & ML)",
   "Computer Science and Technology",
   "Information Technology",
   "Electronics & Communication Engineering",
   "Electronics Engineering (VLSI)",
   "Electrical Engineering",
   "Electrical & Electronics Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
   "Biotechnology",
   "Chemical Engineering",
   "CSE (Cyber Security)",
   "CSE (IOT and Cyber Security including Blockchain)",
  ],
  courses: [
   {
    name: "B.Tech in Computer Science and Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,76,350/year",
   },
   {
    name: "B.Tech in Artificial Intelligence and Machine Learning",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,76,350/year",
   },
   {
    name: "B.Tech in Information Technology",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,76,350/year",
   },
   {
    name: "B.Tech in Electronics & Communication Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,76,350/year",
   },
   {
    name: "B.Tech in Mechanical Engineering",
    duration: "4 years",
    eligibility:
     "10+2 with 60% in PCM; direct admission via management quota available",
    fees: "₹1,76,350/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "48,921",
     "AI & ML": "311,488",
     AI: "339,224",
     CS: "380,089",
     "Cyber Security": "388,567",
    },
   },
  ],
  admissionProcess:
   "Admission is based on JEE Main score followed by UPTAC counseling. 15% seats are reserved for management quota. Candidates must have at least 60% in PCM in Class XII.",
  entranceExams: ["JEE Mains", "UPSEE", "GATE", "CAT", "MAT", "CMAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Included in annual charges",
    food: true,
   },
   girls: {
    available: true,
    fees: "Included in annual charges",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "MCM Scholarships",
   "Sports Scholarships",
   "Donor Scholarships",
  ],
  placements: {
   averagePackage: "₹8.02 LPA",
   highestPackage: "₹75 LPA",
   companiesVisited: [
    "Amazon",
    "Microsoft",
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
    "EY",
    "Deloitte",
    "HCL",
   ],
  },
  ranking: {
   NIRF: "101–150 (Engineering), 42 (Pharmacy)",
   NAAC: "A Grade",
  },
  faq: [
   {
    question: "Can I get direct admission in BTech at NIET?",
    answer:
     "Yes, direct admission is available through the management quota for candidates who meet the eligibility criteria.",
   },
   {
    question: "What is the BTech fee at NIET?",
    answer: "The fee is ₹1,76,350 per year for B.Tech programs.",
   },
   {
    question: "What is the highest package offered in BTech at NIET?",
    answer: "The highest package for B.Tech at NIET stood at ₹75 LPA.",
   },
   {
    question: "What is the average package at NIET for BTech?",
    answer: "For 2024, the average BTech package was ₹8.02 LPA.",
   },
   {
    question: "Is hostel facility available at NIET?",
    answer:
     "Yes, separate hostels for boys and girls are available with food included.",
   },
  ],
 },
 {
  collegename: "Greater Noida Institute of Technology (GNIT)",
  established: "2001",
  collegetype: "Private",
  location: "Greater Noida",
  approval: ["AICTE"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "Greater Noida Institute of Technology (GNIT) is a reputed private engineering college in Greater Noida, affiliated to AKTU and approved by AICTE. Known for its strong placement record, modern infrastructure, and a wide range of undergraduate and postgraduate programs, GNIT offers an ideal platform for aspiring engineers.",
  image1:
   "https://images.shiksha.com/mediadata/images/1499333475phpY9hQNo.jpeg",
  image2:
   "https://indoafrica.allegiance-educare.in/storage/uploads/colleges/thumb/250_250_1624342546Screenshot20210622114437.png",
  website: "https://gnit.ac.in",
  mail: "info@gnit.ac.in",
  pdf: "",
  highlights: [
   "Approved by AICTE and affiliated to AKTU",
   "Strong placement record with top recruiters like HDFC Bank, Airtel, Accenture, and Reliance",
   "JEE Main and UPTAC-based admissions with direct admission option available",
   "Multiple BTech specializations including AI, DS, IoT, and Cyber Security",
   "Scholarships available for meritorious and financially weak students",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Sports Facilities",
   "Cafeteria",
   "Medical Facilities",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science and Engineering (AI & ML)",
   "Computer Science and Engineering (Artificial Intelligence)",
   "Computer Science and Engineering (Data Science)",
   "Computer Science and Information Technology",
   "Information Technology",
   "Electronics & Communication Engineering",
   "Electrical Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
   "Artificial Intelligence and Data Science",
   "Cyber Security",
   "Internet of Things",
  ],
  courses: [
   {
    name: "B.Tech in Computer Science and Engineering",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Artificial Intelligence and Machine Learning",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Data Science",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Internet of Things",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Information Technology",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Electronics & Communication Engineering",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Mechanical Engineering",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
   {
    name: "B.Tech in Civil Engineering",
    duration: "4 years",
    eligibility: "10+2 with 60% in PCM; direct admission available",
    fees: "₹1,55,650/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "240479",
     IT: "260566",
     ECE: "289803",
     Mechanical: "355707",
    },
   },
  ],
  admissionProcess:
   "Admission is based on JEE Main score followed by UPTAC counseling. 15% of seats are reserved for direct admission through management quota. Applicants must have at least 60% in PCM in Class XII.",
  entranceExams: ["JEE Mains", "CUET", "CAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Not disclosed",
    food: true,
   },
   girls: {
    available: true,
    fees: "Not disclosed",
    food: true,
   },
  },
  scholarships: ["Merit-Based Scholarships", "Need-Based Scholarships"],
  placements: {
   averagePackage: "₹6.5 LPA",
   highestPackage: "₹58 LPA",
   companiesVisited: [
    "HDFC Bank",
    "Airtel",
    "Accenture",
    "Reliance",
    "Capgemini",
    "Infosys",
    "TCS",
    "Wipro",
    "Bose",
   ],
  },
  ranking: {
   NIRF: "101–150 (Engineering), 42 (Pharmacy)",
   NAAC: "A Grade",
  },
  faq: [
   {
    question: "Can I get direct admission in BTech at GNIT?",
    answer:
     "Yes, direct admission is possible with a minimum of 60% marks in PCM in Class XII.",
   },
   {
    question: "What is the BTech fee at GNIT?",
    answer: "The fee is approximately ₹1,55,650 per year.",
   },
   {
    question: "What is the highest placement package at GNIT?",
    answer: "The highest placement package for 2024 was ₹58 LPA.",
   },
   {
    question: "Does GNIT offer management quota admissions?",
    answer:
     "Yes, management quota seats are available at GNIT with higher fees and similar eligibility criteria.",
   },
   {
    question: "Which companies visit GNIT for placements?",
    answer:
     "Top recruiters include HDFC Bank, Airtel, Accenture, Reliance, and Capgemini.",
   },
  ],
 },
 {
  collegename: "Mangalmay Institute of Engineering and Technology (MIET)",
  established: "2002",
  collegetype: "Private",
  location: "Greater Noida",
  approval: ["AICTE", "NAAC"],
  state: "Uttar Pradesh",
  city: "Greater Noida",
  affiliatedby: "Dr. A.P.J Abdul Kalam Technical University",
  collegecategory: "Engineering",
  universityDescription:
   "Mangalmay Institute of Engineering and Technology (MIET), Greater Noida is ranked among the top institutes in North India. It is affiliated with AKTU and approved by AICTE. Known for its experienced faculty, industry exposure, and high placement record, MIET offers undergraduate and postgraduate programs in engineering, management, and computer applications.",
  image1:
   "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_938,h_429/https://www.mietengineering.org/wp-content/uploads/2020/01/1.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYO2inpxIxEZSytdlZqmziJoI7Th_pnNRDg&s",
  website: "https://www.mangalmay.org/",
  mail: "",
  pdf: "",
  highlights: [
   "TCS Certified Computer Labs",
   "Distinguished faculty from IITs, NITs, IIMs, XLRI",
   "Active corporate interface with regular industry visits",
   "Digital automated library with e-books and NPTEL DVDs",
   "IEEE, USA student and faculty chapter",
   "Ranked 15th for Engineering by Amar Ujala & IMRB",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostels",
   "Auditorium",
   "Transport",
  ],
  specializations: [
   "Computer Science & Engineering",
   "CSE – Artificial Intelligence",
   "CSE – Data Science",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "10+2 with minimum 50% in PCM; must have appeared in JEE Main",
    fees: "₹1,29,000/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     "CSE (Data Science)": "947778",
    },
   },
  ],
  admissionProcess:
   "Admission via JEE Main followed by UPTAC Counseling. Direct admission and management quota options available based on 50% marks in PCM. Apply online at the official website.",
  entranceExams: ["JEE Mains", "UPTAC", "CAT", "MAT", "XAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Not mentioned",
    food: true,
   },
   girls: {
    available: true,
    fees: "Not mentioned",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Need-based Financial Aid",
   "Sports Scholarships",
  ],
  placements: {
   averagePackage: "₹7 LPA",
   highestPackage: "₹32 LPA",
   companiesVisited: [
    "TCS",
    "Infosys",
    "Amazon",
    "Jaro Education",
    "IndusInd Bank",
    "Future Retail Ltd",
    "Tommy Hilfiger",
    "Hike Education",
   ],
  },
  ranking: {
   "Amar Ujala IMRB": "15th in Engineering",
   "Business & Management Chronicle": "AAA Rated",
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech direct admission?",
    answer:
     "Minimum 50% aggregate in 10+2 with Physics, Mathematics, and an optional subject like Chemistry or Biology.",
   },
   {
    question: "What are the fees for B.Tech at Mangalmay?",
    answer: "₹1,29,000 per year.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹32 LPA as of 2024.",
   },
   {
    question: "How do I apply for direct admission?",
    answer:
     "Contact Mangalmay admission office or call 7755889994 for management quota seats.",
   },
   {
    question: "Is hostel available at Mangalmay?",
    answer:
     "Yes, hostel facilities with food are available for both boys and girls.",
   },
  ],
 },
 {
  collegename: "Bharati Vidyapeeth College of Engineering (BVCOE), Pune",
  established: "1983",
  collegetype: "Private",
  location: "Pune",
  approval: ["AICTE", "NAAC A+", "NBA"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Bharati Vidyapeeth Deemed University",
  collegecategory: "Engineering",
  universityDescription:
   "Bharati Vidyapeeth College of Engineering, Pune is a premier engineering institution established under Bharati Vidyapeeth Deemed University. Known for its modern infrastructure, experienced faculty, and strong placement records, BVCOE offers industry-aligned B.Tech programs across various disciplines. The institute provides both merit-based and management quota admissions and is highly regarded for its academic excellence and corporate ties.",
  image1:
   "https://bvcoe.bharatividyapeeth.edu/media/images/bvcoe_home_photo-1_150520.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkj4WIEfhk2m3AFa8g590QH4j-LKErcFxW9A&s",
  website: "https://bvcoe.bharatividyapeeth.edu/",
  mail: "",
  pdf: "",
  highlights: [
   "Established under Bharati Vidyapeeth Deemed University",
   "NAAC A+ and NBA Accredited",
   "Strong placement record with top recruiters like Amazon, TCS, and Wipro",
   "Direct admission available through management quota",
   "Wide range of B.Tech specializations aligned with industry trends",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Hostels",
   "Sports Complex",
   "Labs",
   "Cafeteria",
   "Auditorium",
  ],
  specializations: [
   "Computer Science Engineering",
   "Information Technology",
   "Mechanical Engineering",
   "Civil Engineering",
   "Electrical Engineering",
   "Electronics and Telecommunication Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with Physics, Chemistry, and Mathematics with 50% (45% for SC/ST); Direct admission available through management quota",
    fees:
     "₹1,00,000 – ₹1,50,000/year (General); ₹3,85,875/year (Management Quota)",
   },
  ],
  cutoffdata: [
   {
    exam: "BVP CET / JEE Mains",
    expectedCutoffGeneral: {
     "Computer Science Engineering": "70% – 80%",
     "Information Technology": "65% – 75%",
     "Electrical Engineering": "60% – 70%",
     "Mechanical Engineering": "55% – 65%",
     "Civil Engineering": "50% – 60%",
     "Electronics and Telecommunication": "55% – 65%",
    },
   },
  ],
  admissionProcess:
   "Apply online via official Bharati Vidyapeeth website. Admission through BVP CET or JEE Main for merit-based seats. Management quota admission available with minimum 50% in PCM. Required documents include mark sheets, photographs, and identity proof.",
  entranceExams: ["BVP CET", "JEE Mains"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹85,000 – ₹1,00,000/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹85,000 – ₹1,00,000/year",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Need-based Scholarships",
   "Special Category Scholarships",
  ],
  placements: {
   averagePackage: "₹8 LPA",
   highestPackage: "₹38 LPA",
   companiesVisited: [
    "Amazon",
    "TCS",
    "Wipro",
    "Infosys",
    "Honda",
    "Asian Paints",
   ],
  },
  ranking: {
   NIRF: "Ranked among top private engineering colleges in Pune",
  },
  faq: [
   {
    question: "Can I get direct admission without an entrance exam?",
    answer:
     "Yes, direct admission is available through the management quota if you meet eligibility criteria.",
   },
   {
    question:
     "What is the fee structure for B.Tech at Bharati Vidyapeeth Pune?",
    answer:
     "Fees range from ₹1,00,000 – ₹1,50,000/year for general and ₹3,85,875/year for management quota.",
   },
   {
    question: "What is the average placement package?",
    answer: "The average package for B.Tech graduates is around ₹8 LPA.",
   },
   {
    question: "Is hostel facility available?",
    answer:
     "Yes, hostel facilities with food are available for both boys and girls with annual charges between ₹85,000 – ₹1,00,000.",
   },
   {
    question: "What is the expected cutoff for Computer Science?",
    answer:
     "The expected cutoff for Computer Science Engineering is around 70% – 80% for general category students.",
   },
  ],
 },
 {
  collegename: "Pimpri Chinchwad College of Engineering (PCCOE)",
  established: "1999",
  collegetype: "Private",
  location: "Pimpri, Pune",
  approval: ["AICTE", "NAAC A"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Savitribai Phule Pune University",
  collegecategory: "Engineering",
  universityDescription:
   "Pimpri Chinchwad College of Engineering (PCCOE), Pune, is one of the top engineering institutes affiliated to Savitribai Phule Pune University. Established in 1999, PCCOE is known for its industry-focused curriculum, robust infrastructure, strong placement support, and modern teaching methodologies. The college offers a variety of BTech programs and facilitates both merit-based and direct admission through management quota.",
  image1:
   "https://www.pccoepune.com/images/slider/campus-pimpri-chinchawad-college-of-engineering.webp",
  image2:
   "https://upload.wikimedia.org/wikipedia/commons/0/00/PCCOE-Logo-24.png",
  website: "https://www.pccoepune.com/",
  mail: "",
  pdf: "",
  highlights: [
   "NAAC Grade 'A' accredited",
   "Affiliated to Savitribai Phule Pune University",
   "Over 20 years of academic excellence",
   "Strong placement record with top recruiters",
   "State-of-the-art labs, classrooms, and hostel facilities",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Cafeteria",
   "Hostels",
   "Auditorium",
   "Sports Facilities",
  ],
  specializations: [
   "Computer Engineering",
   "Information Technology",
   "Mechanical Engineering",
   "Civil Engineering",
   "Electronics and Telecommunication Engineering",
   "Electrical Engineering",
   "Chemical Engineering",
   "Biotechnology",
   "Artificial Intelligence and Data Science",
   "Robotics and Automation",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with Physics, Chemistry, Mathematics; Minimum 45% for General, 40% for Reserved. JEE Main or MHT CET score required for merit seats. Management quota admission available without entrance exam.",
    fees: "₹1,64,245/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains / MHT CET",
    expectedCutoffGeneral: {
     "Computer Engineering": "Rank under 9873",
     "Information Technology": "Rank under 11000",
     "Electronics and Telecommunication Engineering": "Rank under 11500",
     "Mechanical Engineering": "Rank under 12500",
     "Civil Engineering": "Rank under 8945",
     "Electrical Engineering": "Rank under 13000",
    },
   },
  ],
  admissionProcess:
   "Apply online via PCCOE official website. For merit seats, appear in JEE Main or MHT CET. For management quota, fill application form, meet basic eligibility, and submit required documents. Counseling and fee payment follow.",
  entranceExams: ["JEE Mains", "MHT CET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1,55,000/year",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1,45,000/year",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Need-based Financial Aid",
   "SC/ST Scholarships",
   "Sports Scholarships",
   "EWS Scholarships",
  ],
  placements: {
   averagePackage: "₹9 LPA",
   highestPackage: "₹63 LPA",
   companiesVisited: [
    "TCS",
    "IBM",
    "Capgemini",
    "Cognizant",
    "Infosys",
    "Wipro",
    "Amazon",
    "Tech Mahindra",
   ],
  },
  ranking: {
   NIRF: "Ranked among top private engineering colleges in Maharashtra",
  },
  faq: [
   {
    question: "What is the eligibility for direct admission at PCCOE?",
    answer:
     "10+2 with PCM; minimum 45% for general, 40% for reserved. Management quota available without entrance exams.",
   },
   {
    question: "What is the BTech fee at PCCOE?",
    answer:
     "₹1,64,245/year including tuition, lab access, and academic resources.",
   },
   {
    question: "What is the highest placement package at PCCOE?",
    answer: "₹63 LPA as of 2024.",
   },
   {
    question: "Can I get direct admission without JEE or MHT CET?",
    answer:
     "Yes, through the management quota, students can get direct admission without entrance exam scores.",
   },
   {
    question: "Are scholarships available at PCCOE?",
    answer:
     "Yes, including merit-based, need-based, and category-specific scholarships.",
   },
  ],
 },
 {
  collegename: "Sinhgad College of Engineering (SCOE)",
  established: "1996",
  collegetype: "Private",
  location: "Vadgaon (Budruk), Pune",
  approval: ["AICTE", "NBA"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Savitribai Phule Pune University",
  collegecategory: "Engineering",
  universityDescription:
   "Sinhgad College of Engineering (SCOE), Pune is a premier engineering institute established in 1996 and affiliated with Savitribai Phule Pune University. Recognized for academic excellence, the institute offers industry-focused B.Tech programs with strong placement support. The college is known for producing competent engineers and fostering holistic student development.",
  image1: "https://cms.sinhgad.edu/media/447884/college%20image_13145x5000.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9qA2uK13CtJslCnGodSNJbZBn0EJAL0JaA&s",
  website: "https://cms.sinhgad.edu/",
  mail: "",
  pdf: "",
  highlights: [
   "NAAC & NBA Accredited Programs",
   "Awarded as Center of Excellence in Western Zone",
   "95% placement rate with strong industry partnerships",
   "Established in 1996 with over 1000+ B.Tech seat intake",
   "Located in scenic campus at Vadgaon (Budruk), Pune",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Labs",
   "Hostel",
   "Canteen",
   "Sports Complex",
   "Auditorium",
  ],
  specializations: [
   "Mechanical Engineering",
   "Electronics & Telecommunication Engineering",
   "Computer Engineering",
   "Chemical Engineering",
   "Information Technology",
   "Production Engineering",
   "Civil Engineering",
   "Biotechnology",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with Physics, Chemistry, Mathematics; 50% for General category, 45% for Reserved. JEE Main or MHT CET scores preferred; Direct admission available via management quota.",
    fees: "₹1,38,066/year (Open Category)",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains / MHT CET",
    expectedCutoffGeneral: {
     "Computer Engineering": "95% – 97%",
     "Information Technology": "89% – 92%",
     "Electronics & Telecommunication": "90% – 93%",
     "Mechanical Engineering": "85% – 90%",
     "Civil Engineering": "80% – 85%",
     "Chemical Engineering": "75% – 80%",
     Biotechnology: "70% – 75%",
     "Production Engineering": "65% – 70%",
    },
   },
  ],
  admissionProcess:
   "Apply online via official website. Submit academic documents, 12th marksheets, and JEE Main score if available. Management quota admission also available based on 12th marks.",
  entranceExams: ["JEE Mains", "MHT CET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹75,000/year (including mess)",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹75,000/year (including mess)",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "SC/ST Government Scholarships",
   "EWS Scholarships",
   "Minority Scholarships",
  ],
  placements: {
   averagePackage: "₹7 LPA",
   highestPackage: "₹34 LPA",
   companiesVisited: [
    "TCS",
    "Infosys",
    "Wipro",
    "IBM",
    "Capgemini",
    "L&T",
    "Tech Mahindra",
    "Cognizant",
   ],
  },
  ranking: {
   NIRF: "Ranked among top private engineering colleges in Maharashtra",
  },
  faq: [
   {
    question:
     "Can I get direct admission at Sinhgad College of Engineering without entrance exam?",
    answer:
     "Yes, through management quota based on 12th-grade marks. Approximately 20-30% of seats are reserved.",
   },
   {
    question:
     "What is the fee structure for B.Tech at Sinhgad College of Engineering?",
    answer:
     "Fees range from ₹1 lakh to ₹1.5 lakh annually, depending on category and course.",
   },
   {
    question: "What are the highest and average placement packages?",
    answer:
     "As of 2024, the average package is ₹7 LPA and the highest is ₹34 LPA.",
   },
   {
    question: "What is the eligibility for direct admission in SCOE?",
    answer:
     "Minimum 50% in PCM in 12th grade (45% for reserved categories) with or without entrance exam score.",
   },
   {
    question: "Are scholarships available for B.Tech students?",
    answer:
     "Yes, several merit-based, caste-based, and financial need scholarships are available.",
   },
  ],
 },
 {
  collegename: "Pune Institute of Computer Technology (PICT)",
  established: "1983",
  collegetype: "Private",
  location: "Pune, Maharashtra",
  approval: ["AICTE", "UGC"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Savitribai Phule Pune University (SPPU)",
  collegecategory: "Engineering",
  universityDescription:
   "Pune Institute of Computer Technology (PICT) is a premier private engineering college located in Pune, Maharashtra. Renowned for its excellence in computer engineering and IT, PICT has earned NAAC A+ accreditation and offers top-tier facilities, strong academic curriculum, and impressive placement statistics, with top recruiters like Amazon, Microsoft, and TCS. The institute provides a dynamic environment combining academics, innovation, and industry exposure.",
  image1:
   "https://www.pict.edu/images/slider/home1/College%20Photo%2023%20Feb%202023.jpg",
  image2:
   "https://pbs.twimg.com/profile_images/1612297036732452864/BZovoHDY_200x200.png",
  website: "https://pict.edu/",
  mail: "",
  pdf: "",
  highlights: [
   "Established in 1983 with strong emphasis on Computer Science and IT",
   "NAAC A+ Grade Accreditation",
   "Ranked among top engineering colleges in Pune",
   "Strong industry tie-ups with Amazon, Microsoft, TCS, Infosys",
   "Modern infrastructure with hostel, Wi-Fi, gym, library, and labs",
  ],
  facilities: [
   "Library",
   "Wi-Fi",
   "Gym",
   "Medical Facility",
   "Cafeteria",
   "Hostel",
   "Sports Complex",
  ],
  specializations: [
   "Computer Engineering",
   "Information Technology",
   "Electronics and Computer Engineering",
   "Electronics and Telecommunication Engineering",
   "Artificial Intelligence and Data Science",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with 50% in PCM; 45% for reserved categories; JEE Mains or MHT CET score required",
    fees: "₹1,03,500/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains / MHT CET",
    expectedCutoffGeneral: {
     "Computer Engineering": "Rank below 700",
     "Information Technology": "Rank below 1114",
     "Electronics and Computer": "Rank below 1700",
     "Electronics and Telecommunication": "Rank below 2616",
     "AI and Data Science": "Rank below 1238",
    },
   },
  ],
  admissionProcess:
   "Apply online through CAP portal or PICT website; submit required documents; attend counseling; for management quota, apply directly with 50%+ in PCM and non-zero CET/JEE score.",
  entranceExams: ["JEE Mains", "MHT CET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1,15,000 - ₹1,25,000",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1,15,000 - ₹1,25,000",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Government Scholarships",
   "Reserved Category Scholarships",
  ],
  placements: {
   averagePackage: "₹10 LPA",
   highestPackage: "₹48 LPA",
   companiesVisited: [
    "Amazon",
    "Microsoft",
    "TCS",
    "Wipro",
    "Infosys",
    "Capgemini",
    "Accenture",
   ],
  },
  ranking: {
   NIRF: "Ranked among top 10 engineering colleges in Pune",
  },
  faq: [
   {
    question: "What is the B.Tech fee at PICT Pune?",
    answer:
     "₹1,03,500 per year for general admission; management quota can range from ₹1.5L to ₹3L per year.",
   },
   {
    question: "What is the eligibility for direct admission in PICT?",
    answer:
     "Minimum 50% in PCM with non-zero JEE or CET score; 45% for reserved category.",
   },
   {
    question: "What is the average placement package at PICT Pune?",
    answer: "₹10 LPA in 2024.",
   },
   {
    question: "Can I get admission without entrance exam?",
    answer:
     "No, even for management quota, a non-zero score in CET or JEE is required.",
   },
   {
    question: "What are the popular branches at PICT?",
    answer:
     "Computer Engineering, Information Technology, and Electronics & Telecommunication.",
   },
  ],
 },
 {
  collegename:
   "Dr. D.Y. Patil Institute of Engineering and Technology (DYPIET), Pimpri",
  established: "1983",
  collegetype: "Private",
  location: "Pimpri-Chinchwad, Pune, Maharashtra",
  approval: ["AICTE", "DTE Maharashtra"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Savitribai Phule Pune University",
  collegecategory: "Engineering",
  universityDescription:
   "Dr. D.Y. Patil Institute of Engineering and Technology (DYPIET), Pimpri, established in 1983, is one of the oldest and premier engineering institutes under the D.Y. Patil Group. Accredited with NAAC A++ and ranked among the top 200 engineering institutes by NIRF, the college offers excellent academics, state-of-the-art infrastructure, and a strong placement record. It provides undergraduate, postgraduate, and MBA programs with modern facilities and industry collaborations.",
  image1:
   "https://collegekeeda.com/wp-content/uploads/2024/01/DY-Patil-Institute-of-Technology-Pimpri_-Pune.webp",
  image2: "https://upload.wikimedia.org/wikipedia/commons/5/52/DYPCET_Logo.jpg",
  website: "https://engg.dypvp.edu.in/",
  mail: "",
  pdf: "",
  highlights: [
   "NAAC A++ Accredited with CGPA 3.74",
   "Ranked among top 200 engineering colleges by NIRF",
   "Strong placement support with average package of ₹9 LPA",
   "NBA Accredited UG and MBA programs",
   "Diverse BTech specializations including AI, Data Science, Robotics",
  ],
  facilities: [
   "Hostel",
   "Library",
   "Wi-Fi",
   "Cafeteria",
   "Sports Complex",
   "Auditorium",
   "Medical Facilities",
   "Laboratories",
   "Placement Cell",
  ],
  specializations: [
   "Civil Engineering",
   "Computer Engineering",
   "Electrical Engineering",
   "Electronics and Telecommunication Engineering",
   "Instrumentation Engineering",
   "Mechanical Engineering",
   "Information Technology",
   "Artificial Intelligence & Data Science",
   "Automation and Robotics",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "10+2 with Physics, Mathematics and one of Chemistry/Biology/Biotech/Technical subject, minimum 45% (40% for reserved); MHT CET or JEE Main score required",
    fees: "₹1,03,500/year (Open category)",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains / MHT CET",
    expectedCutoffGeneral: {
     "Computer Engineering": "90-95 percentile",
     "AI & Data Science": "88-92 percentile",
     "E&TC Engineering": "85-90 percentile",
     "Information Technology": "87-91 percentile",
     "Mechanical Engineering": "80-85 percentile",
    },
   },
  ],
  admissionProcess:
   "Apply online through DYPIET official website. Fill application form, upload documents, pay application fee, submit. Attend counseling for seat confirmation. Management quota applicants can apply directly with eligibility and entrance exam scores.",
  entranceExams: ["JEE Mains", "MHT CET"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "Approximately ₹85,000/year including mess",
   },
   girls: {
    available: true,
    fees: "Approximately ₹85,000/year including mess",
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "Government Scholarships",
   "Reserved Category Scholarships",
   "EWS Scholarships",
   "Sports and Community Service Scholarships",
  ],
  placements: {
   averagePackage: "₹9 LPA",
   highestPackage: "₹58 LPA",
   companiesVisited: [
    "TCS",
    "Wipro",
    "Infosys",
    "Amazon",
    "Capgemini",
    "Accenture",
   ],
  },
  ranking: {
   NIRF: "Ranked in Top 200 Engineering Institutes in India",
  },
  faq: [
   {
    question: "What is the eligibility for direct admission in DYPIET Pimpri?",
    answer:
     "Candidates must have passed 10+2 with PCM and minimum 45% marks (40% for reserved) along with a valid score in JEE Main or MHT CET.",
   },
   {
    question: "What is the average package for BTech graduates at DYPIET?",
    answer: "The average placement package is around ₹9 LPA for 2024.",
   },
   {
    question: "How much is the BTech fee at DYPIET Pimpri?",
    answer:
     "₹1,03,500/year for Open category; management quota fees may be higher.",
   },
   {
    question: "What is the highest package at DYPIET Pimpri?",
    answer: "The highest package offered in 2024 was ₹58 LPA.",
   },
   {
    question: "Is management quota available at DYPIET?",
    answer:
     "Yes, approximately 20-25% seats are available under management quota with slightly higher fees.",
   },
  ],
 },
 {
  collegename: "Vishwakarma Institute of Technology (VIT), Pune",
  established: "1983",
  collegetype: "Private",
  location: "Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037",
  approval: ["AICTE", "UGC", "NAAC"],
  state: "Maharashtra",
  city: "Pune",
  affiliatedby: "Savitribai Phule Pune University",
  collegecategory: "Engineering",
  universityDescription:
   "Vishwakarma Institute of Technology (VIT), Pune, is one of India’s top private engineering colleges. Established in 1983, VIT Pune is recognized for its academic excellence, modern infrastructure, and strong placement records. It offers a variety of undergraduate, postgraduate, and PhD programs in engineering, with special emphasis on industry relevance and innovation.",
  image1:
   "https://images.shiksha.com/mediadata/images/1742190808phpbsJWrN.jpeg",
  image2:
   "https://i.pinimg.com/736x/07/ee/1b/07ee1b1497d090718f4625ba7833c9a1.jpg",
  website: "https://www.vit.edu/",
  mail: "",
  pdf: "",
  highlights: [
   "Established in 1983 with over 40 years of excellence",
   "NAAC accredited with 'A' grade",
   "Offers 9 UG, 3 PG, and 3 PhD programs",
   "Strong placement record with top companies like Infosys, TCS, Microsoft",
   "Annual intake capacity of 3660 students",
  ],
  facilities: [
   "Wi-Fi enabled campus",
   "Modern labs and research centers",
   "Auditorium and sports facilities",
   "Hostels for boys and girls",
   "Medical and banking services",
  ],
  specializations: [
   "Computer Engineering",
   "Information Technology",
   "Artificial Intelligence and Data Science",
   "Computer Engineering (Software Engineering)",
   "Computer Science and Engineering (AI)",
   "Computer Science and Engineering (AI & ML)",
   "Computer Science and Engineering (Data Science)",
   "Computer Science and Engineering (IoT & Cyber Security)",
   "Electronics and Telecommunication Engineering",
   "Instrumentation and Control Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 Years",
    eligibility:
     "10+2 with PCM, 45% marks (40% for reserved categories), MHT CET or JEE Main score required",
    fees: "₹1,92,000 to ₹1,93,000 per year",
   },
   {
    name: "M.Tech",
    duration: "2 Years",
    eligibility: "BE/BTech with 50% marks, GATE score preferred",
    fees: "Approx ₹90,000 per year",
   },
  ],
  cutoffdata: [
   {
    exam: "MHT CET",
    expectedCutoff: {
     "Computer Engineering": "98-99 percentile",
     IT: "96-97 percentile",
     "E&TC": "94-96 percentile",
     "AI & ML / AI & DS": "96-98 percentile",
    },
   },
  ],
  admissionProcess:
   "Apply via official VIT Pune website, submit 12th mark sheet, entrance exam scorecard (MHT CET/JEE Main), pay application fee, attend counseling and confirm seat.",
  entranceExams: ["MHT CET", "JEE Main"],
  hostelFacilities: {
   boys: "Available",
   girls: "Available",
  },
  scholarships: [
   "Merit-based scholarships",
   "Need-based scholarships",
   "Government scholarships for reserved categories",
  ],
  placements: {
   averagePackage: "₹9.72 LPA",
   highestPackage: "₹51 LPA",
   companiesVisited: ["TCS", "Wipro", "Infosys", "Microsoft", "Amazon"],
  },
  ranking: "Among top engineering colleges in Maharashtra and India",
  faq: [
   {
    question: "Is direct admission possible in VIT Pune?",
    answer:
     "Yes, through management quota for eligible candidates with valid entrance exam scores.",
   },
   {
    question: "What is the average package at VIT Pune?",
    answer: "₹9.72 LPA as of 2024.",
   },
   {
    question: "How much percentile is required for VIT Pune?",
    answer:
     "98-99 percentile in MHT CET for top branches like Computer Engineering.",
   },
   {
    question: "Does VIT Pune accept JEE Main?",
    answer: "Yes, VIT Pune accepts JEE Main scores for BTech admissions.",
   },
  ],
 },
 {
  collegename: "Xavier Institute of Engineering (XIE)",
  established: "2005",
  collegetype: "Private",
  location: "Mumbai, Maharashtra",
  approval: ["AICTE", "DTE Maharashtra"],
  state: "Maharashtra",
  city: "Mumbai",
  affiliatedby: "University of Mumbai",
  collegecategory: "Engineering",
  universityDescription:
   "Xavier Institute of Engineering (XIE), established in 2005 by the Jesuit Fathers, is a premier private engineering college in Mumbai, affiliated with the University of Mumbai. Known for its ethical values and quality education, the institute is AICTE approved and follows DTE Maharashtra guidelines. XIE offers modern infrastructure, vibrant student clubs, and a strong placement record with top recruiters.",
  image1: "https://www.xavier.ac.in/images/slider/1a.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDNp4PEL19gCUE60UInJLE0XVmqVarTwGkA&s",
  website: "https://xavier.ac.in",
  mail: "",
  pdf: "",
  highlights: [
   "Affiliated to University of Mumbai",
   "Approved by AICTE and DTE Maharashtra",
   "Founded by the Society of Jesus (Jesuit Fathers)",
   "Strong placement support with average package of 7 LPA",
   "Scholarships available for merit and need-based students",
  ],
  facilities: [
   "Wi-Fi Enabled Campus",
   "Library and Digital Resources",
   "Computer Labs",
   "Canteen",
   "Auditorium",
   "Workshops and Labs",
   "Sports and Gym",
   "Placement Cell",
  ],
  specializations: [
   "Computer Engineering",
   "Information Technology",
   "Electronics and Telecommunication Engineering",
   "Computer Science and Engineering (Cyber Security, IoT and Blockchain Technology)",
  ],
  courses: [
   {
    name: "B.Tech in Computer Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM and valid JEE/MHT CET score",
    fees: "₹6,63,504",
   },
   {
    name: "B.Tech in Information Technology",
    duration: "4 Years",
    eligibility: "10+2 with PCM and valid JEE/MHT CET score",
    fees: "₹6,63,504",
   },
   {
    name: "B.Tech in Electronics and Telecommunication Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM and valid JEE/MHT CET score",
    fees: "₹6,63,504",
   },
   {
    name:
     "B.Tech in Computer Science and Engineering (Cyber Security, IoT and Blockchain Technology)",
    duration: "4 Years",
    eligibility: "10+2 with PCM and valid JEE/MHT CET score",
    fees: "₹6,63,504",
   },
  ],
  cutoffdata: [
   {
    exam: "MHT CET",
    expectedCutoff: {
     "Computer Engineering": "92%",
     "Information Technology": "90%",
     "Electronics and Telecommunication Engineering": "85%",
     "Computer Science and Engineering": "95%",
    },
   },
  ],
  admissionProcess:
   "Online registration via the official website or consultant, submission of documents, application fee payment, counseling session, and final tuition fee payment for seat confirmation.",
  entranceExams: ["MHT CET", "JEE Main"],
  hostelFacilities: [],
  scholarships: [
   "Merit-based Scholarships",
   "Need-based Financial Aid",
   "Government Scholarships",
  ],
  placements: {
   averagePackage: "₹7 LPA",
   highestPackage: "₹33 LPA",
   companiesVisited: ["TCS", "Infosys", "Wipro", "L&T", "Capgemini"],
  },
  ranking: [
   "Top 30 Engineering Colleges in India by Times of India",
   "Top 10 Prominent Institutes in Maharashtra by Knowledge Review",
  ],
  faq: [
   {
    question:
     "What is the highest package offered by Xavier Institute of Engineering?",
    answer: "The highest package offered is ₹33 LPA.",
   },
   {
    question:
     "What is the total B.Tech fee at Xavier Institute of Engineering?",
    answer: "The total fee for the B.Tech program is ₹6,63,504.",
   },
   {
    question:
     "Is direct admission available at Xavier Institute of Engineering?",
    answer: "Yes, direct admission is available through the management quota.",
   },
   {
    question: "Does Xavier Institute of Engineering accept MHT CET scores?",
    answer: "Yes, MHT CET and JEE Main scores are accepted.",
   },
   {
    question: "What documents are required for direct admission?",
    answer:
     "10th and 12th mark sheets, TC, ID proof, photos, MHT CET/JEE Main scorecard, and domicile/caste certificates if applicable.",
   },
  ],
 },
 {
  collegename: "KJ Somaiya College of Engineering (KJSCE)",
  established: "1983",
  collegetype: "Private",
  location: "Mumbai",
  approval: ["AICTE", "NAAC"],
  state: "Maharashtra",
  city: "Mumbai",
  affiliatedby: "Somaiya Vidyavihar University",
  collegecategory: "Engineering",
  universityDescription:
   "KJ Somaiya College of Engineering (KJSCE), established in 1983, is a premier private engineering institute in Mumbai affiliated with Somaiya Vidyavihar University. It offers state-of-the-art infrastructure, strong placement support, and a vibrant campus life with multiple hostels, libraries, clubs, and dining options. The college emphasizes holistic development and industry-focused education through robust BTech and MTech programs.",
  image1:
   "https://newsletter.somaiya.edu/wp-content/uploads/2024/07/Aryabhatt-Bulding.jpg",
  image2:
   "https://img.favpng.com/20/8/4/k-j-somaiya-college-of-engineering-abhiyantriki-north-myrtle-beach-park-and-sports-complex-somaiya-vidyavihar-png-favpng-V3zc6WKGEyL39nzR82BHsGDSq.jpg",
  website: "https://kjsce.somaiya.edu/",
  mail: "",
  pdf: "",
  highlights: [
   "Over 450+ top recruiting companies including Microsoft, Goldman Sachs, and JP Morgan.",
   "Average BTech package: INR 11.35 LPA",
   "Highest package offered: INR 58 LPA",
   "Vibrant campus with 20-acre recreational space and 20+ student clubs",
   "100% merit-based scholarships up to ₹2 Lakhs",
   "Recognized among Top 11 private engineering colleges in India by TOI",
  ],
  facilities: [
   "Hostel",
   "Library",
   "Wi-Fi Campus",
   "Sports Complex",
   "Medical Facility",
   "Labs",
   "Cafeteria",
  ],
  specializations: [
   "Artificial Intelligence & Data Science",
   "Computer Engineering",
   "Computer & Communication Engineering",
   "Computer Science & Business Systems",
   "Electronics & Computer Engineering",
   "Electronics & Telecommunication Engineering",
   "Electronics Engineering (VLSI Design & Technology)",
   "Information Technology",
   "Mechanical Engineering",
   "Robotics & Artificial Intelligence",
  ],
  courses: [
   {
    name: "BTech",
    duration: "4 Years",
    eligibility:
     "Passed 10+2 with Physics, Mathematics and one of Chemistry/Biotech/Biology/Vocational subjects. Min 45% aggregate. Valid score in JEE Main / MHT CET / CUET / SAT / PERA-CET.",
    fees: "INR 1,95,152 per annum",
   },
   {
    name: "MTech",
    duration: "2 Years",
    eligibility: "Passed B.E./B.Tech with 50% aggregate in relevant branch.",
    fees: "INR 50,000 - INR 1,96,800 per annum depending on specialization",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Main",
    expectedCutoff: "90-95 percentile",
   },
   {
    exam: "MHT CET",
    expectedCutoff: "85-92 percentile",
   },
   {
    exam: "CUET",
    expectedCutoff: "80-90 percentile",
   },
   {
    exam: "PERA CET",
    expectedCutoff: "90-95 percentile",
   },
  ],
  admissionProcess:
   "Online application through the official website. Candidates must upload documents and entrance scores, pay application fee, participate in counselling, and complete fee payment for final admission confirmation.",
  entranceExams: ["JEE Main", "MHT CET", "CUET", "SAT", "PERA-CET"],
  hostelFacilities: {
   available: true,
   details:
    "4 hostels available with dining facilities and common rooms for students",
  },
  scholarships: [
   "100% Merit-based scholarships",
   "Financial aid up to ₹2 lakh per annum",
  ],
  placements: {
   averagePackage: "INR 11.35 LPA",
   highestPackage: "INR 58 LPA",
   companiesVisited: [
    "Microsoft",
    "JP Morgan",
    "Goldman Sachs",
    "Accenture",
    "TCS",
    "Infosys",
   ],
  },
  ranking: "11th among private engineering colleges in India (TOI)",
  faq: [
   {
    question: "Can I get direct admission in KJ Somaiya?",
    answer:
     "Yes, direct admission is possible through the management quota for eligible students.",
   },
   {
    question: "What is the average salary package for BTech graduates?",
    answer: "The average salary package is INR 11.35 LPA.",
   },
   {
    question: "Which companies recruit from KJ Somaiya College of Engineering?",
    answer:
     "Top recruiters include Microsoft, JP Morgan, Goldman Sachs, and Accenture.",
   },
   {
    question: "What is the BTech fee structure?",
    answer:
     "Fees range from INR 1.22 lakh to INR 1.95 lakh per year depending on category and specialization.",
   },
   {
    question: "What is the eligibility criteria for BTech direct admission?",
    answer:
     "Passed 10+2 with minimum 45% in PCM subjects and a valid score in any accepted entrance exam.",
   },
  ],
 },
 {
  collegename: "BMS College of Engineering (BMSCE)",
  established: "1946",
  collegetype: "Private",
  location: "Bengaluru, Karnataka",
  approval: ["AICTE", "NBA", "NAAC"],
  state: "Karnataka",
  city: "Bangalore",
  affiliatedby: "Visvesvaraya Technological University (VTU), Belagavi",
  collegecategory: "Engineering",
  universityDescription:
   "BMS College of Engineering (BMSCE), established in 1946, is the first private engineering college in India. Located in Basavanagudi, Bengaluru, BMSCE offers 17 undergraduate and 15 postgraduate programs. With NAAC ‘A’ Grade accreditation and NBA-approved courses, the institution is known for quality technical education, robust industry connections, and outstanding placement records. Over 350 companies participate in placements annually, and the campus fosters innovation, learning, and holistic development for students.",
  image1:
   "https://www.topbengaluru.com/wp-content/uploads/2024/02/BMS-College-of-Engineering-Bangalore-Campus-View-3.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpBaIK4FHG5AutSPGODcYCyoNI2zwQInm9w&s",
  website: "https://www.bmsce.ac.in",
  mail: "",
  pdf: "",
  highlights: [
   "Established in 1946 – first private engineering college in India.",
   "Affiliated to VTU, approved by AICTE, NBA accredited, NAAC 'A' Grade.",
   "Over 1140 BTech seats across Aided and Unaided programs.",
   "More than 350+ companies visit for campus placements.",
   "Average package of ₹9 LPA, highest package ₹55 LPA.",
   "Direct admission available through management quota.",
  ],
  facilities: [
   "Library",
   "Hostels",
   "Sports Complex",
   "Innovation Labs",
   "Cafeteria",
   "Wi-Fi Campus",
  ],
  specializations: [
   "Civil Engineering",
   "Mechanical Engineering",
   "Electrical & Electronics Engineering",
   "Electronics & Communication Engineering",
   "Industrial Engineering & Management",
   "Aerospace Engineering",
   "Artificial Intelligence and Machine Learning",
   "Biotechnology",
   "Chemical Engineering",
   "Computer Science and Engineering",
   "Electronics and Instrumentation Engineering",
   "Information Science and Engineering",
   "Medical Electronics",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 Years",
    eligibility: "Passed 10+2 with 45% aggregate in PCM",
    fees: "₹2L–₹10L per year",
   },
   {
    name: "M.Tech",
    duration: "2 Years",
    eligibility: "B.E/B.Tech with qualifying entrance exam",
    fees: "₹1.28L–₹7L per year",
   },
   {
    name: "MBA",
    duration: "2 Years",
    eligibility: "Graduation with valid PGCET/KMAT score",
    fees: "₹4.5L per year",
   },
  ],
  cutoffdata: [
   {
    exam: "COMEDK",
    expectedCutoff: {
     "Computer Science and Engineering": 891,
     "Electronics and Communication Engineering": 1020,
     "Mechanical Engineering": 1105,
     "Civil Engineering": 1200,
     "Electrical and Electronics Engineering": 1300,
    },
   },
  ],
  admissionProcess:
   "Apply online on the official website. Admission based on KEA/COMED-K entrance exam. Management quota available for direct admission.",
  entranceExams: ["KCET", "COMED-K"],
  hostelFacilities:
   "Yes, separate hostels for boys and girls with mess and Wi-Fi.",
  scholarships: [
   "National Merit Scholarship",
   "Karnataka Minorities Scholarship",
   "Defense Scholarship",
   "Merit-cum-Means",
  ],
  placements: {
   averagePackage: "₹9 LPA",
   highestPackage: "₹55 LPA",
   companiesVisited: [
    "Microsoft",
    "JP Morgan",
    "Goldman Sachs",
    "TCS",
    "Infosys",
   ],
  },
  ranking: [
   "Ranked 7th among top 170 engineering institutes (TOI)",
   "83rd in NIRF 2022",
  ],
  faq: [
   {
    question: "What is the eligibility criteria for B.Tech at BMSCE?",
    answer:
     "Minimum 45% in PCM for General; 40% for SC/ST/Category-I candidates.",
   },
   {
    question: "Can I get direct admission in BMS College of Engineering?",
    answer: "Yes, through management quota with minimum 60% in PCM.",
   },
   {
    question: "What entrance exams are accepted at BMSCE?",
    answer: "KEA (CET) and COMED-K.",
   },
   {
    question: "What is the average package offered at BMSCE?",
    answer: "Average package is ₹9 LPA; highest up to ₹55 LPA.",
   },
  ],
 },
 {
  collegename: "Sardar Patel Institute of Technology (SPIT)",
  established: "1962",
  collegetype: "Private",
  location: "Mumbai",
  approval: ["AICTE", "NBA"],
  state: "Maharashtra",
  city: "Mumbai",
  affiliatedby: "University of Mumbai",
  collegecategory: "Engineering",
  universityDescription:
   "Sardar Patel Institute of Technology (SPIT), Mumbai, is a premier engineering institute affiliated with the University of Mumbai and approved by AICTE. Established in 2005, it is known for its academic excellence, research-driven approach, and strong industry collaborations. The institute offers B.Tech, M.Tech, Ph.D., and MCA programs with excellent placement records and modern infrastructure.",
  image1:
   "https://mca.spit.ac.in/wp-content/uploads/2022/12/20221212_120147-scaled-e1670904222265-1024x463.jpg",
  image2: "https://www.spit.ac.in/wp-content/uploads/2021/01/LogoSPIT.png",
  website: "",
  mail: "",
  pdf: "",
  highlights: [
   "NBA-accredited programs",
   "Established in 1962 and affiliated to Mumbai University",
   "Located in Andheri, Mumbai with top placement offers",
   "Average B.Tech package: 15.32 LPA",
   "Highest B.Tech package: 61.55 LPA",
  ],
  facilities: ["Wi-Fi", "Hostel", "Library", "Labs", "Canteen", "Sports"],
  specializations: [
   "Computer Engineering",
   "Electronics and Telecommunication Engineering",
   "Computer Science and Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 Years",
    eligibility: "12th with PCM, 50% aggregate",
    fees: "196000",
   },
   {
    name: "M.Tech",
    duration: "2 Years",
    eligibility: "B.E./B.Tech",
    fees: "100000",
   },
   {
    name: "MCA",
    duration: "3 Years",
    eligibility: "Graduation in relevant field",
    fees: "131000",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Main",
    expectedCutoff: {
     "Computer Science and Engineering": "6500 – 7500",
     "Computer Engineering": "7000 – 8500",
     "Electronics and Telecommunication Engineering": "11000 – 13000",
    },
   },
  ],
  admissionProcess: [
   "Fulfill eligibility with minimum 50% in PCM (45% for reserved)",
   "Valid score in JEE Main or MHT CET",
   "Fill direct admission form",
   "Submit required documents",
   "Pay the admission fee",
   "Attend counseling (if applicable)",
   "Get final admission confirmation",
  ],
  entranceExams: ["JEE Main", "MHT CET"],
  hostelFacilities: {
   available: true,
   description:
    "Separate hostels for boys and girls with Wi-Fi, mess, and common rooms",
  },
  scholarships: [
   "Merit-based scholarships",
   "Need-based financial aid",
   "Government scholarships",
  ],
  placements: {
   averagePackage: "15.32 LPA",
   highestPackage: "61.55 LPA",
   companiesVisited: [
    "Google",
    "Microsoft",
    "TCS",
    "Accenture",
    "Jio",
    "Infosys",
   ],
  },
  ranking: {
   NIRF: null,
   TimesOfIndia: null,
  },
  faq: [
   {
    question: "Can I get direct admission in SPIT?",
    answer:
     "Yes, through management quota with a minimum of 50% in PCM and valid entrance exam score.",
   },
   {
    question: "What is the average placement package at SPIT?",
    answer: "The average package for B.Tech in 2024 was 15.32 LPA.",
   },
   {
    question: "What is the fee for B.Tech?",
    answer: "Annual B.Tech fee is around ₹1,96,000.",
   },
   {
    question: "Which entrance exams are accepted?",
    answer: "MHT CET and JEE Main scores are accepted.",
   },
   {
    question: "Are hostels available?",
    answer:
     "Yes, separate hostels for boys and girls are available with all essential amenities.",
   },
  ],
 },
 {
  collegename: "New Horizon College of Engineering",
  established: null,
  collegetype: "Private",
  location: "Bangalore, Karnataka, India",
  approval: ["AICTE", "UGC"],
  address:
   "New Horizon Knowledge Park, Bellandur Main Road, Near Marathahalli, Bengaluru - 560103",
  state: "Karnataka",
  city: "Bangalore",
  affiliatedby: "Visvesvaraya Technological University (VTU)",
  collegecategory: "Engineering",
  universityDescription:
   "New Horizon College of Engineering (NHCE) is a premier engineering institute in Bangalore affiliated to VTU. Accredited by NAAC with an A grade and NBA, NHCE is ranked among the top private engineering colleges in Bangalore. It offers undergraduate, postgraduate, and doctoral programs in Engineering, Technology, and Management with strong placement support and industry tie-ups.",
  image1: null,
  image2: null,
  website: "https://newhorizonindia.edu/nhengineering/",
  mail: null,
  pdf: null,
  highlights: [
   "Ranked 4th among private engineering colleges in Bangalore (NIRF 2019)",
   "Affiliated to VTU and approved by AICTE & UGC",
   "Accredited by NAAC (A grade) and NBA",
   "Located in Bangalore's IT corridor",
   "Offers B.Tech, M.Tech, MBA, MCA with strong industry collaborations",
   "Over 1200+ seat intake for B.Tech",
   "Approx. 30% B.Tech seats reserved for management quota",
  ],
  facilities: [
   "Library",
   "Hostel",
   "Wi-Fi campus",
   "Cafeteria",
   "Medical Facilities",
   "Auditorium",
   "Sports Complex",
   "Labs",
   "Transportation",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science and Engineering (Data Science)",
   "Artificial Intelligence and Machine Learning",
   "Electronics & Communication",
   "Electrical & Electronics",
   "Information Science & Engineering",
   "Mechanical Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "Passed 10+2 with Physics, Mathematics, and one additional subject with minimum 45% aggregate (40% for reserved categories)",
    fees: "INR 10–15 Lakh (total 4 years)",
   },
   {
    name: "M.Tech",
    duration: "2 years",
    eligibility:
     "Bachelor’s degree in Engineering/Technology with minimum 50% marks",
    fees: "INR 1.87–2 Lakh/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "Bachelor’s degree in any discipline with minimum 50% marks",
    fees: "INR 3.25 Lakh/year",
   },
   {
    name: "MCA",
    duration: "3 years",
    eligibility: "Bachelor’s degree with Mathematics as a subject",
    fees: null,
   },
  ],
  cutoffdata: [
   {
    exam: "KCET",
    expectedCutoffGeneral: {
     CSE: "8500–9500",
     ECE: "10000–12000",
     Mechanical: "11000–13000",
    },
   },
  ],
  admissionProcess: [
   "Apply via official NHCE website",
   "Upload 10th/12th marksheets, ID, and entrance scorecard (if applicable)",
   "Verify eligibility (45% in PCM, KCET/JEE/COMEDK optional)",
   "Receive offer letter",
   "Pay fees and complete registration",
   "Receive provisional admission letter and begin enrollment",
  ],
  entranceExams: ["KCET", "COMEDK", "JEE Main"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: null,
    food: true,
   },
   girls: {
    available: true,
    fees: null,
    food: true,
   },
  },
  scholarships: [
   "Merit Scholarships",
   "Sports Scholarships",
   "KEA Scholarships",
   "General Academic Scholarships",
  ],
  placements: {
   averagePackage: "INR 8 LPA (B.Tech), 6 LPA (M.Tech), 7.5 LPA (MBA)",
   highestPackage: "INR 34 LPA (B.Tech), 21 LPA (M.Tech), 26 LPA (MBA)",
   companiesVisited: [
    "Intel",
    "Wipro",
    "TCS",
    "Accenture",
    "Infosys",
    "Amazon",
    "Cognizant",
    "Microsoft",
   ],
  },
  ranking: {
   nirf: "Ranked 4th in Bangalore, 121st in India (NIRF 2019)",
   indiaToday: null,
   otherSources: [],
  },
  faq: [
   {
    question: "How can I get direct admission in BTech in NHCE?",
    answer:
     "You can apply through management quota by submitting an online application and required documents.",
   },
   {
    question: "What is the eligibility for BTech at NHCE?",
    answer:
     "Minimum 45% aggregate in PCM in 10+2 (40% for Karnataka reserved categories).",
   },
   {
    question: "What is the BTech fee structure?",
    answer: "The total BTech fee ranges from INR 10 to 15 lakh over 4 years.",
   },
   {
    question: "What is the placement scenario at NHCE?",
    answer: "Average package is INR 8 LPA; highest up to INR 34 LPA.",
   },
   {
    question: "What scholarships are available?",
    answer:
     "NHCE offers merit-based, sports, KEA, and general academic scholarships.",
   },
  ],
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
 },
 {
  collegename: "CMR Institute of Technology (CMRIT)",
  established: "2000",
  collegetype: "Private",
  location: "Bangalore, Karnataka, India",
  approval: ["AICTE"],
  address:
   "Sri Nivasa Reddy Layout, AECS Layout, Marathahalli, Bengaluru, Karnataka 560037",
  state: "Karnataka",
  city: "Bangalore",
  affiliatedby: "Visvesvaraya Technological University (VTU)",
  collegecategory: "Engineering",
  universityDescription:
   "CMR Institute of Technology (CMRIT), Bangalore, is a leading private engineering college affiliated with VTU. Established in 2000, the institution is approved by AICTE and accredited by NBA and NAAC with A++ grade. CMRIT offers a dynamic learning environment with strong industry connections and state-of-the-art facilities.",
  image1: null,
  image2: null,
  website: "https://www.cmrit.ac.in",
  mail: null,
  pdf: null,
  highlights: [
   "NAAC A++ and NBA accredited",
   "25+ years legacy in quality education",
   "State-of-the-art infrastructure and labs",
   "Centers of Excellence in AI, Data Science, Robotics, Cybersecurity",
   "Excellent placement record with top companies",
   "Bangalore location with metro and public transport access",
   "Scholarships for direct admission students",
  ],
  facilities: [
   "Library",
   "Hostels",
   "Wi-Fi Campus",
   "Digital Classrooms",
   "Labs",
   "Cafeteria",
   "Transportation",
   "Sports Complex",
   "Auditorium",
  ],
  specializations: [
   "Computer Science and Engineering",
   "Computer Science and Engineering (AI and ML)",
   "Computer Science and Engineering (Data Science)",
   "Artificial Intelligence and Machine Learning",
   "Artificial Intelligence and Data Science",
   "Information Science and Engineering",
   "Electronics and Communication Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility:
     "Passed 10+2 with Physics, Mathematics and an optional subject (Chemistry/Biotech/CS/Electronics) with 45% (40% for reserved categories)",
    fees: "INR 3.86–7.5 LPA (annual)",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "Graduation with minimum 50% marks",
    fees: "INR 1.17 LPA",
   },
   {
    name: "MCA",
    duration: "3 years",
    eligibility: "Graduation with Mathematics at 10+2 or degree level",
    fees: null,
   },
   {
    name: "PhD",
    duration: null,
    eligibility: "Postgraduate in relevant field with qualifying entrance",
    fees: null,
   },
  ],
  cutoffdata: [
   {
    exam: "KCET/COMEDK/JEE",
    expectedCutoffGeneral: {
     "Computer Science and Engineering": "85–90",
     "Electronics and Communication Engineering": "80–85",
     "Information Science Engineering": "75–80",
     "Mechanical Engineering": "70–75",
     "Civil Engineering": "65–70",
    },
   },
  ],
  admissionProcess: [
   "Visit official website",
   "Fill out application form",
   "Submit necessary documents (marksheets, entrance score, photo, ID)",
   "Pay application fee",
   "Await confirmation from admission office",
  ],
  entranceExams: ["KCET", "COMEDK", "JEE Main"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "INR 1.20 LPA",
    food: true,
   },
   girls: {
    available: true,
    fees: "INR 1.20 LPA",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "Need-Based Scholarships",
   "Special Category Scholarships (SC/ST, Sports etc.)",
  ],
  placements: {
   averagePackage: "INR 9.23 LPA (B.Tech), 7.44 LPA (MBA)",
   highestPackage: "INR 43 LPA (B.Tech), 21 LPA (MBA)",
   companiesVisited: [
    "TCS",
    "Infosys",
    "Accenture",
    "Wipro",
    "Amazon",
    "Capgemini",
    "Oracle",
    "Deloitte",
   ],
  },
  ranking: {
   nirf: null,
   indiaToday: null,
   otherSources: ["Ranked among top 10 engineering colleges in Bangalore"],
  },
  faq: [
   {
    question: "Is direct admission available at CMRIT Bangalore?",
    answer:
     "Yes, B.Tech direct admission is possible through management quota (approx. 25% seats).",
   },
   {
    question: "What is the fee for B.Tech at CMRIT?",
    answer:
     "INR 3.86 lakh to 7.5 lakh per annum, with higher charges for management quota.",
   },
   {
    question: "What is the expected cutoff for 2025?",
    answer:
     "Cutoffs expected between 65–90 depending on specialization and exam performance.",
   },
   {
    question: "What scholarships are offered by CMRIT?",
    answer:
     "CMRIT provides merit-based, need-based and special category scholarships.",
   },
   {
    question: "Which courses does CMRIT offer?",
    answer:
     "CMRIT offers B.Tech, MBA, MCA and PhD programs across various specializations.",
   },
  ],
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
 },
 {
  collegename: "IMS Engineering College (IMSEC)",
  established: "2002",
  collegetype: "Private",
  location: "Ghaziabad, Uttar Pradesh",
  approval: ["AICTE", "NAAC", "NBA", "UGC"],
  state: "Uttar Pradesh",
  city: "Ghaziabad",
  affiliatedby: "Dr. APJ Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "IMS Engineering College (IMSEC), Ghaziabad, is one of North India's premier technical institutions. Accredited with NAAC 'A' grade, approved by AICTE, and affiliated to AKTU, the college offers B.Tech, MBA, and MCA programs with top-tier placements, infrastructure, and academic performance.",
  image1: null,
  image2: null,
  website: "https://imsec.ac.in",
  mail: null,
  pdf: null,
  highlights: [
   "NAAC 'A' Grade and NBA accredited",
   "Affiliated to Dr. APJ Abdul Kalam Technical University",
   "Ranked 4th in North India as per Times Engineering Survey 2023",
   "4-star rating by IIC, Ministry of Education",
   "Placement offers from Amazon, Microsoft, Coca-Cola",
  ],
  facilities: [
   "Library",
   "Hostels",
   "Wi-Fi Campus",
   "Labs",
   "Auditoriums",
   "Sports Complex",
   "Placement Cell",
  ],
  specializations: [
   "Computer Science",
   "Computer Science & Engineering",
   "Computer Science & Design",
   "Information Technology",
   "Electronics & Communication Engineering",
   "Mechanical Engineering",
   "Biotechnology",
   "CSE Artificial Intelligence and Machine Learning",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "10+2 with minimum 50% in PCM",
    fees: "₹1,35,169/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "30924",
     IT: "51378",
     ECE: "94227",
     Mechanical: "98140",
     Civil: "74993",
     EEE: "98463",
     "AI & ML": "185769",
     Biotechnology: "2822",
    },
   },
  ],
  admissionProcess:
   "Admission through JEE Mains followed by UPTAC counseling; 15% seats under Management Quota available for direct admission.",
  entranceExams: ["JEE Mains", "UPCET", "CUET-PG", "CAT"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1,15,000 - ₹1,75,000",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1,15,000 - ₹1,75,000",
    food: true,
   },
  },
  scholarships: [
   "Merit-based Scholarships",
   "Need-based Financial Aid",
   "Sports Scholarships",
   "UP Government Scholarships",
   "AICTE Pragati Scheme",
  ],
  placements: {
   averagePackage: "₹6.5 LPA",
   highestPackage: "₹50 LPA",
   companiesVisited: ["Amazon", "Microsoft", "IBM", "Coca-Cola", "HDFC Bank"],
  },
  ranking: {
   NIRF: "Band 151-300 (Innovation Category)",
   TimesSurvey: "Ranked 4th in North India (2023)",
   IIRF: "5th Best in Uttar Pradesh (2023)",
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech admission?",
    answer: "Minimum 50% aggregate in PCM in Class 12.",
   },
   {
    question: "Is direct admission available at IMS Engineering College?",
    answer: "Yes, 15% seats are available under management quota.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹50 LPA in 2024.",
   },
   {
    question: "What is the average package offered?",
    answer: "₹6.5 LPA as of 2024.",
   },
   {
    question: "What are the hostel fees?",
    answer: "₹1.15L to ₹1.75L depending on room type and AC.",
   },
  ],
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
 },
 {
  collegename: "JSS Academy of Technical Education, Noida",
  established: "1998",
  collegetype: "Private",
  location: "Noida, Uttar Pradesh",
  approval: ["AICTE"],
  state: "Uttar Pradesh",
  city: "Noida",
  affiliatedby: "Dr. APJ Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "JSS Academy of Technical Education (JSS Noida) is a premier engineering college located in Noida. Affiliated to AKTU and approved by AICTE, it offers B.Tech, MBA, and MCA programs with a strong placement record and NBA-accredited courses.",
  image1: null,
  image2: null,
  website: "https://jssaten.ac.in",
  mail: null,
  pdf: null,
  highlights: [
   "Affiliated to Dr. APJ Abdul Kalam Technical University",
   "NBA Accredited Programs",
   "Strong Industry Connections",
   "High Placement Packages up to ₹47 LPA",
   "Located in the industrial hub of Noida",
  ],
  facilities: [
   "Library",
   "Hostels",
   "Wi-Fi Campus",
   "Labs",
   "Auditoriums",
   "Sports Complex",
   "Placement Cell",
  ],
  specializations: [
   "Computer Science & Engineering",
   "Information Technology",
   "CSE (AI & ML)",
   "CSE (Data Science)",
   "Electronics & Communication Engineering",
   "Electrical Engineering",
   "Electrical & Electronics Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "10+2 with minimum 60% in PCM",
    fees: "₹1,37,850/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility:
     "50% aggregate in graduation with valid CAT/MAT/CMAT/UPSEE score",
    fees: "₹1,38,349/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "90-95 percentile",
     IT: "85-90 percentile",
     ECE: "80-85 percentile",
     Mechanical: "80-85 percentile",
     Civil: "80-85 percentile",
    },
   },
  ],
  admissionProcess:
   "Admission through JEE Mains followed by UPTAC counseling; 15% seats under Management Quota available for direct admission.",
  entranceExams: ["JEE Mains", "CAT", "MAT", "CMAT", "UPSEE"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹95,000 - ₹1,30,000",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹95,000 - ₹1,30,000",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "Need-Based Financial Aid",
   "UP Government Schemes",
  ],
  placements: {
   averagePackage: "₹7.5 LPA",
   highestPackage: "₹47 LPA",
   companiesVisited: [
    "Amazon",
    "Microsoft",
    "Capgemini",
    "TCS",
    "Wipro",
    "HCL",
   ],
  },
  ranking: {
   NIRF: null,
   TimesSurvey: null,
   IIRF: null,
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech admission?",
    answer: "Minimum 60% aggregate in PCM in Class 12.",
   },
   {
    question: "Is direct admission available at JSS Noida?",
    answer: "Yes, 15% seats are available under management quota.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹47 LPA in 2024.",
   },
   {
    question: "What is the average package offered?",
    answer: "₹7.5 LPA as of 2024.",
   },
   {
    question: "What are the hostel fees?",
    answer: "₹95,000 to ₹1,30,000 depending on type.",
   },
  ],
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
 },
 {
  collegename: "ABES Engineering College, Ghaziabad",
  established: "2000",
  collegetype: "Private",
  location: "Ghaziabad, Uttar Pradesh",
  approval: ["AICTE"],
  state: "Uttar Pradesh",
  city: "Ghaziabad",
  affiliatedby: "Dr. APJ Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "ABES Engineering College (ABESEC) is a reputed engineering institute located in Ghaziabad, affiliated with AKTU and approved by AICTE. Known for strong academic performance, placement record, and NAAC A Grade accreditation, ABESEC offers undergraduate and postgraduate programs in engineering, management, and computer applications.",
  image1: null,
  image2: null,
  website: "https://abes.ac.in",
  mail: null,
  pdf: null,
  highlights: [
   "NAAC Accredited with A Grade",
   "NBA Accredited Programs",
   "Strong Placement with Highest Package ₹50 LPA",
   "Located in NCR with Excellent Infrastructure",
   "Participates in NIRF Ranking",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Hostels",
   "Cafeteria",
   "Labs",
   "Medical Facility",
   "Sports Complex",
   "Auditoriums",
   "Placement Cell",
  ],
  specializations: [
   "Computer Science & Engineering",
   "Computer Science & Engineering in AI & ML",
   "Computer Science & Engineering in Data Science",
   "Information Technology",
   "Computer Science",
   "Electronics & Communication Engineering",
   "Electrical & Electronics Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "10+2 with minimum 75% in PCM",
    fees: "₹1,45,500/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "Graduation with 50% marks",
    fees: "₹1,33,600/year",
   },
   {
    name: "M.Tech",
    duration: "2 years",
    eligibility: "B.Tech with 50% + GATE",
    fees: "₹1,17,000/year",
   },
   {
    name: "MCA",
    duration: "2 years",
    eligibility: "Graduation with 50% + CUET PG",
    fees: "₹1,36,600/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "107605",
     IT: "212081",
     "Computer Engineering": "261506",
     "CSE (AI & ML)": "232388",
     "CSE (Data Science)": "213003",
    },
   },
  ],
  admissionProcess:
   "Admission via JEE Mains + UPTAC counseling; 15% seats under Management Quota for direct admission.",
  entranceExams: ["JEE Mains", "GATE", "CUET PG"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1,00,000 - ₹1,20,000",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1,00,000 - ₹1,20,000",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "GATE Scholarship for M.Tech",
   "State & Central Government Scholarships",
  ],
  placements: {
   averagePackage: "₹7.02 LPA",
   highestPackage: "₹50 LPA",
   companiesVisited: [
    "Amazon",
    "Microsoft",
    "Capgemini",
    "TCS",
    "Wipro",
    "Infosys",
    "HCL",
    "Cognizant",
   ],
  },
  ranking: {
   NIRF: "151-300 band",
   TimesSurvey: null,
   IIRF: null,
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech admission?",
    answer: "Minimum 75% aggregate in PCM in Class 12.",
   },
   {
    question: "Is direct admission available at ABESEC?",
    answer: "Yes, 15% seats are available under management quota.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹50 LPA in 2024.",
   },
   {
    question: "What is the average package offered?",
    answer: "₹7.02 LPA as of 2024.",
   },
   {
    question: "What are the hostel fees?",
    answer: "₹1,00,000 to ₹1,20,000 depending on type.",
   },
  ],
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
 },
 {
  collegename: "ABES Engineering College, Ghaziabad",
  established: "2000",
  collegetype: "Private",
  location: "Ghaziabad, Uttar Pradesh",
  approval: ["AICTE"],
  state: "Uttar Pradesh",
  city: "Ghaziabad",
  affiliatedby: "Dr. APJ Abdul Kalam Technical University (AKTU)",
  collegecategory: "Engineering",
  universityDescription:
   "ABES Engineering College (ABESEC) is a reputed engineering institute located in Ghaziabad, affiliated with AKTU and approved by AICTE. Known for strong academic performance, placement record, and NAAC A Grade accreditation, ABESEC offers undergraduate and postgraduate programs in engineering, management, and computer applications.",
  image1: null,
  image2: null,
  website: "https://abes.ac.in",
  mail: null,
  pdf: null,
  highlights: [
   "NAAC Accredited with A Grade",
   "NBA Accredited Programs",
   "Strong Placement with Highest Package ₹50 LPA",
   "Located in NCR with Excellent Infrastructure",
   "Participates in NIRF Ranking",
  ],
  facilities: [
   "Library",
   "Wi-Fi Campus",
   "Hostels",
   "Cafeteria",
   "Labs",
   "Medical Facility",
   "Sports Complex",
   "Auditoriums",
   "Placement Cell",
  ],
  specializations: [
   "Computer Science & Engineering",
   "Computer Science & Engineering in AI & ML",
   "Computer Science & Engineering in Data Science",
   "Information Technology",
   "Computer Science",
   "Electronics & Communication Engineering",
   "Electrical & Electronics Engineering",
   "Mechanical Engineering",
   "Civil Engineering",
  ],
  courses: [
   {
    name: "B.Tech",
    duration: "4 years",
    eligibility: "10+2 with minimum 75% in PCM",
    fees: "₹1,45,500/year",
   },
   {
    name: "MBA",
    duration: "2 years",
    eligibility: "Graduation with 50% marks",
    fees: "₹1,33,600/year",
   },
   {
    name: "M.Tech",
    duration: "2 years",
    eligibility: "B.Tech with 50% + GATE",
    fees: "₹1,17,000/year",
   },
   {
    name: "MCA",
    duration: "2 years",
    eligibility: "Graduation with 50% + CUET PG",
    fees: "₹1,36,600/year",
   },
  ],
  cutoffdata: [
   {
    exam: "JEE Mains",
    expectedCutoffGeneral: {
     CSE: "107605",
     IT: "212081",
     "Computer Engineering": "261506",
     "CSE (AI & ML)": "232388",
     "CSE (Data Science)": "213003",
    },
   },
  ],
  admissionProcess:
   "Admission via JEE Mains + UPTAC counseling; 15% seats under Management Quota for direct admission.",
  entranceExams: ["JEE Mains", "GATE", "CUET PG"],
  hostelFacilities: {
   boys: {
    available: true,
    fees: "₹1,00,000 - ₹1,20,000",
    food: true,
   },
   girls: {
    available: true,
    fees: "₹1,00,000 - ₹1,20,000",
    food: true,
   },
  },
  scholarships: [
   "Merit-Based Scholarships",
   "GATE Scholarship for M.Tech",
   "State & Central Government Scholarships",
  ],
  placements: {
   averagePackage: "₹7.02 LPA",
   highestPackage: "₹50 LPA",
   companiesVisited: [
    "Amazon",
    "Microsoft",
    "Capgemini",
    "TCS",
    "Wipro",
    "Infosys",
    "HCL",
    "Cognizant",
   ],
  },
  ranking: {
   NIRF: "151-300 band",
   TimesSurvey: null,
   IIRF: null,
  },
  faq: [
   {
    question: "What is the eligibility for B.Tech admission?",
    answer: "Minimum 75% aggregate in PCM in Class 12.",
   },
   {
    question: "Is direct admission available at ABESEC?",
    answer: "Yes, 15% seats are available under management quota.",
   },
   {
    question: "What is the highest placement package?",
    answer: "₹50 LPA in 2024.",
   },
   {
    question: "What is the average package offered?",
    answer: "₹7.02 LPA as of 2024.",
   },
   {
    question: "What are the hostel fees?",
    answer: "₹1,00,000 to ₹1,20,000 depending on type.",
   },
  ],
  timestamps: {
   createdAt: "{{now}}",
   updatedAt: "{{now}}",
  },
  additionalColleges: [
   {
    collegename: "ABES Institute of Technology, Ghaziabad",
    established: "2007",
    collegetype: "Private",
    location: "Ghaziabad, Uttar Pradesh",
    approval: ["AICTE"],
    affiliatedby: "Dr. APJ Abdul Kalam Technical University (AKTU)",
    courses: [
     {
      name: "B.Tech",
      duration: "4 years",
      eligibility: "10+2 with minimum 50% in PCM",
      fees: "₹1,22,400/year",
     },
     {
      name: "MCA",
      duration: "2 years",
      eligibility: "Graduation with 50% + CUET PG",
      fees: "₹1,22,400/year",
     },
    ],
    specializations: [
     "Computer Science Engineering",
     "Information Technology",
     "Computer Science and Engineering (AI)",
     "Computer Science and Engineering (Data Science)",
     "Electronics & Communication Engineering",
    ],
    placements: {
     averagePackage: "₹4.2 LPA",
     highestPackage: "₹23 LPA",
    },
    cutoffdata: [
     {
      exam: "JEE Mains",
      expectedCutoffGeneral: {
       CSE: "341746",
       IT: "364923",
       AI: "461811",
      },
     },
    ],
    admissionProcess:
     "Admission via JEE Mains + UPTAC counseling; 15% seats under Management Quota for direct admission.",
    scholarships: [
     "Merit-Based Scholarships",
     "Government Sponsored Scholarships",
     "Special Incentives for Female Candidates",
    ],
   },
  ],
 },
];

axios
 .post("http://localhost:3008/api/engg-colleges/bulk", colleges)
 .then((res) => {
  console.log("✅ Upload Success:", res.data.message);
 })
 .catch((err) => {
  console.error("❌ Upload Failed:", err.message);
 });
