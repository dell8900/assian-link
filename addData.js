const axios = require("axios");

// ✅ 40 colleges ka array banao
const collegesArray = [
 {
  collegename: "Ad-din Sakina Medical College",
  established: "2011",
  collegetype: "Private (Women's College)",
  location: "Jessore, Bangladesh",
  approval: "",
  address: "Jessore, Bangladesh",
  state: "Jessore",
  city: "Jessore",
  affiliatedby: "University of Rajshahi",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$37,000",
    firstYearFees: "$17,000",
    hostel: "Included",
    food: "Included (within $120)",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRWEuydwR6ut-A2rXROBhh5_Oek1Sc8iBQQ&s",
  image2:
   "https://shikshaeducationconsultancy.com//upload/college/files/logo-uAhZlE461F.jpg",
  universityDescription:
   "Ad-din Sakina Medical College is a private women's medical college located in Jessore, Bangladesh. It was established in 2011 and is affiliated with the University of Rajshahi.",
 },
 {
  collegename: "Ad-din Akij Medical College",
  established: "2012",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "Bangladesh",
  state: "",
  city: "",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$33,000",
    firstYearFees: "$13,000",
    hostel: "Included",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://ad-din.org/wp-content/uploads/2022/12/15.-Ad-din-Akij-Medical-College-started-in-Khulna-2015-16.jpg",
  image2:
   "https://magnaeducation.com.np/wp-content/uploads/2022/03/ad-din-logo.jpeg",
  universityDescription:
   "Ad-din Akij is one of the best medical colleges present in Bangladesh providing education to the students. The college was established in 2012.",
 },
 {
  collegename: "Shahabuddin Medical College",
  established: "2003",
  collegetype: "Private",
  location: "Gulshan, Dhaka, Bangladesh",
  approval: "",
  address: "Gulshan, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$20,000",
    hostel: "$90 PM",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.piceeducare.com/images/59/Pic,%20Campus%20lates%204th%20floor.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0eHDzjnyZ9lcz-ugMpbg2iTwEVJccD2kLQ&s",
  universityDescription:
   "Shahabuddin Medical College is a medical college of Bangladesh. It is located at Gulshan of capital city Dhaka. Established in 2003, this institute is one of the private medical colleges of Bangladesh. It offers a program leading to an MBBS degree. The college is affiliated to University of Dhaka.",
 },
 {
  collegename: "City Medical College",
  established: "2011",
  collegetype: "Private",
  location: "Gazipur, Dhaka, Bangladesh",
  approval: "",
  address: "Gazipur, Dhaka, Bangladesh",
  state: "",
  city: "Gazipur",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$17,000",
    hostel: "Including",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://piceeducare.com/images/7/jpg",
  image2:
   "https://globaladmissionsv2.s3.amazonaws.com/media/school_logos/1-removebg-preview.png",
  universityDescription:
   "City Medical College (CMC) is located in Gazipur, Dhaka, Bangladesh. It was established in 2011 and is affiliated with the University of Dhaka.",
 },
 {
  collegename: "Tairunnessa Memorial Medical College",
  established: "1995",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "Bangladesh",
  state: "",
  city: "",
  affiliatedby: "Tairunnessa Memorial Medical Centre",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$45,000",
    firstYearFees: "$20,600",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/01/Tairunnessa-Memorial-Medical-College.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvy6hK_Pn9RCIXVQ0TI31dhcE_LizK8SGSsQ&s",
  universityDescription:
   "Tairunnessa Memorial Medical College is a private medical school in Bangladesh, established in 1995. It is an institution of the Tairunnessa Memorial Medical Centre.",
 },
 {
  collegename: "Community Based Medical College",
  established: "1995",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "Bangladesh",
  state: "",
  city: "",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$48,000",
    firstYearFees: "$20,000",
    hostel: "Including",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://hindmbbsabroad.com/wp-content/uploads/2024/04/2021-04-23.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzbD8q_tDulCFV7yoSJwCNSanprgXqMliqQ&s",
  universityDescription:
   "Community Based Medical College (CBMCB) is a prestigious private medical institution affiliated with the University of Dhaka. It was established in 1995.",
 },
 {
  collegename: "Medical College for Women and Hospital",
  established: "",
  collegetype: "Private",
  location: "Uttara, Dhaka, Bangladesh",
  approval: "",
  address: "Sector - 1 and Uttarkhan, Uttara, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$47,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.smileeducation.in/wp-content/uploads/2020/11/Hostel-1-WMCH-scaled.jpg",
  image2:
   "https://doctorshomebd.com/wp-content/uploads/2023/12/Medical-College-for-Women-Hospital-logo.jpg",
  universityDescription:
   "Medical College for Women and Hospital is a private medical college of Bangladesh exclusively for women. It has two academic campuses in Uttara, Dhaka—one in Sector 1 and the other in Uttarkhan. The college is affiliated with Dhaka University as a constituent college.",
 },
 {
  collegename: "Jahurul Islam Medical College",
  established: "1992",
  collegetype: "Private",
  location: "Bhagalpur, Bajitpur Upazila, Kishoreganj District, Bangladesh",
  approval: "",
  address: "Bhagalpur, Bajitpur, Kishoreganj, Bangladesh",
  state: "",
  city: "Kishoreganj",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$41,000",
    firstYearFees: "$19,400",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/01/Jahurul-Islam-Medical-College.webp",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/JIMC_logo.svg/1200px-JIMC_logo.svg.png",
  universityDescription:
   "Jahurul Islam Medical College, established in 1992 by Jahurul Islam, is the second oldest private medical college in Bangladesh. It is located at Bhagalpur in Bajitpur Upazila of Kishoreganj District. It is one of the best medical colleges in Bangladesh.",
 },
 {
  collegename: "Jalalabad Ragib-Rabeya Medical College",
  established: "1995",
  collegetype: "Private",
  location: "Pathantula, Bimanbandar Thana, Sylhet, Bangladesh",
  approval: "",
  address: "Pathantula, Bimanbandar Thana, Sylhet, Bangladesh",
  state: "",
  city: "Sylhet",
  affiliatedby: "Shahjalal University of Science and Technology",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$46,950",
    firstYearFees: "$20,600",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://saraswationline.com/wp-content/uploads/2024/08/JAL-1.jpg",
  image2: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Logo_JRRMC.png",
  universityDescription:
   "Jalalabad Ragib-Rabeya Medical College is a private medical school in Bangladesh, established in 1995. It is located in the Pathantula area of Bimanbandar Thana, in Sylhet. It is affiliated with Shahjalal University of Science and Technology under the School of Medical Sciences.",
 },
 {
  collegename: "Rangpur Community Medical College",
  established: "2008",
  collegetype: "Private",
  location: "Rangpur, Bangladesh",
  approval: "",
  address: "Rangpur, Bangladesh",
  state: "",
  city: "Rangpur",
  affiliatedby: "University of Rajshahi",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$42,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://dacbd.org/wp-content/uploads/2021/09/Rangpur-Community-Medical-College_DACBD1-1024x768.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXSJzQSbUL09xe0d0iMwi_PMuOqFISi8SXg&s",
  universityDescription:
   "Rangpur Community Medical College is a leading and prestigious college in Bangladesh, affiliated with the University of Rajshahi and established in 2008.",
 },
 {
  collegename: "Presidents Abdul Hamid Medical College",
  established: "2013",
  collegetype: "Private",
  location: "Jafrabad, Kishoreganj, Bangladesh",
  approval: "MCI Approved",
  address: "Jafrabad, Kishoreganj - Karimganj Rd, Bangladesh",
  state: "",
  city: "Kishoreganj",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$38,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wFefy6Xcl4zNR-7QF_-Dy7mzi5ZjmdKQ6w&s",
  image2:
   "https://shikshaeducationconsultancy.com//upload/college/files/logo-Sor3ivFcaX.jpg",
  universityDescription:
   "Presidents Abdul Hamid Medical College is an MCI approved private medical college in Bangladesh. This college was established in 2013 and is located at Jafrabad, Kishoreganj - Karimganj Rd. The college is affiliated with University of Dhaka.",
 },
 {
  collegename: "Prime Medical College",
  established: "2008",
  collegetype: "Private",
  location: "Pirzabad, Rangpur, Bangladesh",
  approval: "",
  address: "Pirzabad, Rangpur, Bangladesh",
  state: "",
  city: "Rangpur",
  affiliatedby: "Rajshahi Medical University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$42,000",
    firstYearFees: "$11,500",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEISvhpY9a7jAvLNKrFlPHPJJSN-6UBaIV6g&s",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_cF8DWk5Ywkd543PE1621Xgj_RJg8FyioQ&s",
  universityDescription:
   "Prime Medical College is a private medical school in Bangladesh, established in 2008. It is located in Pirzabad, on the western fringes of Rangpur. The college is affiliated with Rajshahi Medical University.",
 },
 {
  collegename: "Brahmanbaria Medical College",
  established: "2013",
  collegetype: "Private",
  location: "Ghatura, Brahmanbaria Sadar Upazila, Brahmanbaria, Bangladesh",
  approval: "",
  address: "Ghatura, Brahmanbaria Sadar Upazila, Brahmanbaria, Bangladesh",
  state: "",
  city: "Brahmanbaria",
  affiliatedby: "University of Chittagong",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$38,000",
    firstYearFees: "$14,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://bmchbd.com/assets/images/admission/admission-1.jpg",
  image2: "https://piceeducare.com/images/71/png",
  universityDescription:
   "Brahmanbaria Medical College is a private medical college which began educating students in 2013. The college is located in Ghatura, Brahmanbaria Sadar Upazila, Brahmanbaria, Bangladesh, and is affiliated with the University of Chittagong as a constituent college.",
 },
 {
  collegename: "Enam Medical College & Hospital",
  established: "2003",
  collegetype: "Private",
  location: "Savar, Dhaka, Bangladesh",
  approval: "",
  address: "Savar, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$50,000",
    firstYearFees: "$25,000",
    hostel: "Including",
    food: "Including",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://emch.com.bd/wp-content/uploads/2021/08/department-photo-3.jpeg",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/8/8d/Enam_Medical_College_Hospital_Logo.png",
  universityDescription:
   "Enam Medical College & Hospital is a private medical school in Bangladesh, established in 2003. It is located in Savar, Dhaka. It is affiliated with the University of Dhaka as a constituent college.",
 },
 {
  collegename: "Central Medical College",
  established: "2005",
  collegetype: "Private",
  location:
   "Paduar Bazar, Bishaw Road, Cumilla Sadar Dakshin Upazila, Cumilla District, Chittagong Division, Bangladesh",
  approval: "",
  address:
   "Paduar Bazar, Bishaw Road, Cumilla Sadar Dakshin Upazila, Cumilla District",
  state: "Chittagong Division",
  city: "Cumilla",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$16,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://argroupofeducation.com/wp-content/uploads/2023/10/1-cen.jpg",
  image2:
   "https://globaladmissionsv2.s3.amazonaws.com/media/school_logos/logo_1.png",
  universityDescription:
   "Central Medical College is a private medical school in Bangladesh, established in 2005. The main campus is located beside the Dhaka–Chittagong Highway at Paduar Bazar, Bishaw Road in Cumilla Sadar Dakshin Upazila, in the Cumilla District of Chittagong Division.",
 },
 {
  collegename: "Diabetic Association Medical College",
  established: "2009",
  collegetype: "Private",
  location: "Faridpur, Bangladesh",
  approval: "",
  address: "Faridpur, Bangladesh",
  state: "Dhaka Division",
  city: "Faridpur",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$42,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://studymbbsbangladesh.com/images/35/jpg",
  image2:
   "https://shikshaeducationconsultancy.com//upload/college/files/logo-VXOziWy0sB.jpg",
  universityDescription:
   "Diabetic Association Medical College, established in 2009, is an institution of the Faridpur Diabetic Association (FDA) and is affiliated with Dhaka University. It is also known as Faridpur Diabetes Medical College.",
 },
 {
  collegename: "University of Science & Technology Chittagong",
  established: "1989",
  collegetype: "Private",
  location: "Chattogram, Bangladesh",
  approval: "",
  address: "Chattogram, Bangladesh",
  state: "Chittagong Division",
  city: "Chattogram",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$42,000",
    firstYearFees: "$12,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.ruseducation.in/wp-content/uploads/2022/01/university-of-science-and-technology-chittagong.webp",
  image2:
   "https://upload.wikimedia.org/wikipedia/en/7/72/University_of_Science_and_Technology%2C_Chittagong_%28crest%29.png",
  universityDescription:
   "University of Science & Technology Chittagong (USTC) is a private university located in Chattogram, Bangladesh. It was initially established with the sponsorship of a private charity on May 13, 1989, and later upgraded to a full-fledged university under the Private University Act of 1992.",
 },
 {
  collegename: "Monowara Sikder Medical College",
  established: "2015",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "Bangladesh",
  state: "",
  city: "",
  affiliatedby: "Dhaka University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$37,000",
    firstYearFees: "$12,000",
    hostel: "Including",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/05/Monowara-Sikder-Medical-College.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQY7AQ2Vq3r2rv3PlyB3JJoa2sJFxucDgBWw&s",
  universityDescription:
   "Monowara Sikder Medical College (MSMC) is a prestigious private medical institution affiliated with Dhaka University. It was established in 2015.",
 },
 {
  collegename: "Sylhet Women's Medical College",
  established: "2005",
  collegetype: "Private",
  location: "Sylhet, Bangladesh",
  approval: "",
  address: "Sylhet, Bangladesh",
  state: "",
  city: "Sylhet",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$42,000",
    firstYearFees: "$16,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://upload.wikimedia.org/wikipedia/commons/e/ec/Sylhet_Women%27s_Medical_College.jpg",
  image2: "https://swmc.edu.bd//client/img/icon.png",
  universityDescription:
   "Sylhet Women's Medical College is a private medical school in Bangladesh, exclusively for female students, established in 2005. The college and its hospital are housed in three high-rise buildings spanning 130,000 square feet in the heart of Sylhet.",
 },
 {
  collegename: "Shaheed Monsur Ali Medical College",
  established: "",
  collegetype: "Private",
  location: "Uttara, Dhaka, Bangladesh",
  approval: "",
  address: "Uttara Model Town, Uttara, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$45,000",
    firstYearFees: "$20,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shaheed_Monsur_Ali_Medical_College_Campus.jpg/1200px-Shaheed_Monsur_Ali_Medical_College_Campus.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVstGjbd6O2VlR5P0CIhIOqhc2wGx7gm1TgQ&s",
  universityDescription:
   "Shaheed Monsur Ali Medical College, Dhaka is a private medical college in Uttara Model Town, Uttara, Dhaka, the capital of Bangladesh. It is affiliated with the University of Dhaka. The college offers a five-year course of study leading to a Bachelor of Medicine, Bachelor of Surgery (MBBS) degree.",
 },
 {
  collegename: "Khulna City Medical College",
  established: "1992",
  collegetype: "Private",
  location: "Khulna, Bangladesh",
  approval: "",
  address: "Khulna, Bangladesh",
  state: "",
  city: "Khulna",
  affiliatedby: "Rajshahi University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$12,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.ruseducation.in/wp-content/uploads/2022/11/khulna-city-dental-college-bangladesh-banner.webp",
  image2: "https://www.doctorspedia.co/uploads/hospital/64c53251f167b.png",
  universityDescription:
   "Khulna City Medical College is a famous medical college along with a huge teaching hospital. This medical college is affiliated with Rajshahi University. The college was established in the year 1992.",
 },
 {
  collegename: "Army Medical College Bogura",
  established: "2014",
  collegetype: "Military",
  location: "Bogra Cantonment, Bangladesh",
  approval: "",
  address: "Bogra Cantonment, Bangladesh",
  state: "",
  city: "Bogura",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$47,000",
    firstYearFees: "$22,500",
    hostel: "Including",
    food: "Including",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://fortuneeducationconsultancy.com/wp-content/uploads/2024/01/8e93012b-27e8-4da6-a5ed-abe14087d982.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rupzkMKbPZm-DJPTPyXo3sDC1RRVikAEig&s",
  universityDescription:
   "Army Medical College Bogura (AMCB) is a Military medical college, established in 2014. It is located in Bogra Cantonment, Bangladesh.",
 },
 {
  collegename: "Popular Medical College",
  established: "2010",
  collegetype: "Private",
  location: "Dhanmondi, Dhaka, Bangladesh",
  approval: "",
  address: "Dhanmondi, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$42,000",
    firstYearFees: "$20,000",
    hostel: "$1,000",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/01/Popular-Medical-College-Bangladesh.webp",
  image2:
   "https://www.gkworks.in/wp-content/uploads/2023/04/popular-medical-college-gkworks.in_.gif",
  universityDescription:
   "Popular Medical College is a private medical school in Bangladesh, established in 2010. It is located in Dhanmondi, Dhaka. It is affiliated with University of Dhaka as a constituent college. It offers a five-year course of study leading to a Bachelor of Medicine, Bachelor of Surgery degree.",
 },
 {
  collegename: "East-West Medical College & Hospital",
  established: "2000",
  collegetype: "Private",
  location: "Turag, Dhaka, Bangladesh",
  approval: "",
  address: "Turag, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$50,000",
    firstYearFees: "$20,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://edufever.in/colleges/wp-content/uploads/2024/03/East-West-Medical-College-Bangladesh-2.webp",
  image2:
   "https://media.globaladmissions.com/media/school_logos/logo-ewmch-1.png",
  universityDescription:
   "East-West Medical College & Hospital is a leading medical institute located in Turag, Dhaka, Bangladesh established in the year 2000.",
 },
 {
  collegename: "Bangladesh Medical College",
  established: "1986",
  collegetype: "Private",
  location: "Dhanmondi, Dhaka, Bangladesh",
  approval: "",
  address: "Dhanmondi, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$49,000",
    firstYearFees: "$25,000",
    hostel: "Extra",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2023/12/Bangladesh-Medical-College.webp",
  image2: "https://piceeducare.com/images/75/png",
  universityDescription:
   "Bangladesh Medical College, established in 1986, is the oldest private medical college as well as the oldest private institute for tertiary education in Bangladesh. The college is located in Dhanmondi, Dhaka. It is one of the constituent colleges of the University of Dhaka.",
 },
 {
  collegename: "Barind Medical College",
  established: "2011",
  collegetype: "Private",
  location: "Rajshahi, Bangladesh",
  approval: "",
  address: "Rajshahi, 252 km northwest of Dhaka, Bangladesh",
  state: "",
  city: "Rajshahi",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$37,000",
    firstYearFees: "$12,000",
    hostel: "Including",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://ruseducation.in/wp-content/uploads/2022/12/barind-medical-college-bangladesh-banner.webp",
  image2:
   "https://www.mbbsadmissioninbangladesh.com/wp-content/uploads/2024/04/Barind-Medical-College-1.jpg",
  universityDescription:
   "Barind Medical College Rajshahi is a prestigious Private Medical College located at Rajshahi, the education center of Bangladesh, which is 252 km northwest of Dhaka, the capital of Bangladesh. The College was established in 2011.",
 },
 {
  collegename: "TMSS Medical College",
  established: "2008",
  collegetype: "Private",
  location: "Dhaka, Bangladesh",
  approval:
   "Ministry of Health & Family Welfare (MOHFW), Bangladesh Medical and Dental Council (BM&DC)",
  address: "Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "Rajshahi University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$45,000",
    firstYearFees: "$20,000",
    hostel: "Including",
    food: "Including",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.ruseducation.in/wp-content/uploads/2023/02/TMSS-Medical-College.webp",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgLvKzvin8hr_MkasZM6UrgVpvKs-1UGsRg&s",
  universityDescription:
   "TMSS Medical College, established in 2008, is a top private medical college in Dhaka to study MBBS in Bangladesh. It came into existence after receiving approval from the Ministry of Health & Family Welfare (MOHFW), Bangladesh Medical and Dental Council (BM&DC), and is affiliated with Rajshahi University.",
 },
 {
  collegename: "Dr. Sirajul Islam Medical College",
  established: "2011",
  collegetype: "Private",
  location: "Maghbazar, Dhaka, Bangladesh",
  approval: "",
  address: "Maghbazar, Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$44,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.ruseducation.in/wp-content/uploads/2022/01/sirajul-islam-medical-college-and-hospital.webp",
  image2:
   "https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_of_Dr._Sirajul_Islam_Medical_College.jpg",
  universityDescription:
   "Dr. Sirajul Islam Medical College is a private medical college located in Maghbazar, Dhaka, Bangladesh. It was established in 2011 and is affiliated with the University of Dhaka as a constituent college.",
 },
 {
  collegename: "Universal Medical College",
  established: "2013",
  collegetype: "Private",
  location: "Dhaka, Bangladesh",
  approval: "",
  address: "Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$44,000",
    firstYearFees: "$20,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://studypalacehub.com/wp-content/uploads/2022/10/b7.jpg",
  image2: "https://umchltd.com/assets_web/img/sisterConcern/group_logo_UMS.png",
  universityDescription:
   "Established in 2013, Universal Medical College is a reputed medical college in Dhaka to study MBBS in Bangladesh for Indian students.",
 },
 {
  collegename: "US-Bangla Medical College",
  established: "2013",
  collegetype: "Private",
  location: "Dhaka, Bangladesh",
  approval: "",
  address: "Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Actual",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://piceeducare.com/images/55/US%20bangla%20primary.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsKlX5wm3C5LpWIlZf8vBszq9bMn6cDfEj9Q&s",
  universityDescription:
   "US-Bangla Medical College (USBMC) is a prestigious private medical institution situated in the city of Dhaka, Bangladesh. The college began its history in 2013.",
 },
 {
  collegename: "MARKS Medical College (MRMC)",
  established: "2011",
  collegetype: "Private",
  location: "Dhaka, Bangladesh",
  approval: "",
  address: "Dhaka, Bangladesh",
  state: "",
  city: "Dhaka",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$39,000",
    firstYearFees: "$15,000",
    hostel: "Actual",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/01/MARKS-Medical-College-Bangladesh.webp",
  image2:
   "https://www.moumachi.com.bd/images/listings/39779/profile/20231-marks-medical-college-hospital-logo.jpg",
  universityDescription:
   "MARKS Medical College (MRMC) is considered as one of the best private medical colleges in Bangladesh. It was established in 2011 by Late Brig. General Prof. M. R. Khan, an eminent ENT-Head & Neck Surgeon of the country and the founder member, whose vision was to provide quality medical education, research, and health care service to the people of Bangladesh at a reasonable cost.",
 },
 {
  collegename: "Mainamoti Medical College",
  established: "",
  collegetype: "Private",
  location: "Baropara, Comilla, Bangladesh",
  approval: "",
  address: "Baropara, Comilla, Bangladesh",
  state: "",
  city: "Comilla",
  affiliatedby: "Chittagong Medical University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$15,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/01/Mainamoti-Medical-College-Bangladesh-1.webp",
  image2:
   "https://globaladmissionsv2.s3.amazonaws.com/media/school_logos/Mainamoti_Medical_College_Comilla_.jpg",
  universityDescription:
   "Mainamoti Medical College is a private medical college located in Baropara, Comilla, Bangladesh. It operates under the affiliation of Chittagong Medical University and offers an MBBS program to aspiring medical students.",
 },
 {
  collegename: "North Bengal Medical College",
  established: "2000",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "",
  state: "",
  city: "",
  affiliatedby: "North Bengal University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$40,000",
    firstYearFees: "$20,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1: "https://nbmch.ac.in/wp-content/uploads/2019/12/BOYS-HOSTEL.jpg",
  image2:
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4u8R_Vy7S4oDRfJRGq79NmYTx71DdY5E3Bg&s",
  universityDescription:
   "North Bengal Medical College (NBMC) is a prestigious private medical institution in Bangladesh, affiliated with North Bengal University. It was established in the year 2000 and offers quality education in the field of medicine.",
 },
 {
  collegename: "MH Samorita Medical College",
  established: "2010",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "",
  state: "",
  city: "Dhaka",
  affiliatedby: "",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$43,000",
    firstYearFees: "$19,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.ruseducation.in/wp-content/uploads/2022/01/MH-samorita-medical-college.webp",
  image2:
   "https://www.validate-network.org/sites/default/files/styles/mt_image_small/public/validate/images/media/mh_samorita_medical_college.jpeg?itok=RJdmU6Zu",
  universityDescription:
   "MH Samorita Medical College is a well-known medical college in Bangladesh for pursuing an MBBS degree. It was established in 2010 and is based in Dhaka.",
 },
 {
  collegename: "Eastern Medical College",
  established: "2005",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "Kabila, Burichang Upazila, Comilla District, Chittagong Division",
  state: "Chittagong Division",
  city: "Comilla",
  affiliatedby: "University of Chittagong, Chittagong Medical University",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$43,000",
    firstYearFees: "$17,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://blog.rmgoe.org/wp-content/uploads/2024/01/Eastern-Medical-College-Bangladesh.webp",
  image2: "https://piceeducare.com/images/66/png",
  universityDescription:
   "Eastern Medical College is a private medical school in Bangladesh, established in 2005. The main campus is located beside the Dhaka–Chittagong Highway at Kabila in Burichang Upazila, in the Comilla District of Chittagong Division. It is affiliated with University of Chittagong and Chittagong Medical University.",
 },
 {
  collegename: "Kumudini Women's Medical College and Hospital",
  established: "2001",
  collegetype: "Private",
  location: "Bangladesh",
  approval: "",
  address: "Mirzapur, Tangail, Bangladesh",
  state: "Dhaka Division",
  city: "Tangail",
  affiliatedby: "University of Dhaka",
  collegecategory: "MBBS",

  courses: [
   {
    course: "MBBS",
    totalFees: "$45,000",
    firstYearFees: "$17,000",
    hostel: "Including",
    food: "Extra",
   },
  ],
  cutoffdata: "",
  website: "",
  mail: "",
  image1:
   "https://www.edufever.com/wp-content/uploads/2024/01/Kumudini-Womens-Medical-College-Bangladesh.webp",
  image2:
   "https://www.justmbbs.com/img/college/bangladesh/kumudini-women%E2%80%99s-medical-college-logo.jpg",
  universityDescription:
   "Kumudini Women's Medical College and Hospital (KWMCH) is a private medical institution established in 2001. It is affiliated with the University of Dhaka and dedicated to offering quality medical education and healthcare services for women in Bangladesh.",
 },
];

axios
 .post("http://localhost:3008/api/college/bulk", collegesArray)
 .then((response) => {
  console.log("Bulk colleges added successfully:", response.data.message);
 })
 .catch((error) => {
  console.error("Error in bulk adding colleges:", error.message);
 });

// const axios = require("axios");

// const collegeData = {
//  collegename: "Anwer Khan Modern Medical College",
//  established: "2008",
//  collegetype: "Private",
//  location: "Dhanmondi, Dhaka",
//  approval: "",
//  address: "Dhanmondi, Dhaka, Bangladesh",
//  state: "Dhaka",
//  city: "Dhaka",
//  affiliatedby: "University of Dhaka",
//  collegecategory: "MBBS",

//  courses: [
//   {
//    course: "MBBS",
//    totalFees: "$45,000",
//    firstYearFees: "$26,000",
//    hostel: "$7,000",
//    food: "Included",
//   },
//  ],
//  cutoffdata: "",
//  website: "",
//  mail: "",
//  image1:
//   "https://ik.imagekit.io/syustaging/SYU_PREPROD/image_1735830319274_1hzPOscVz.webp?tr=w-3840",
//  image2:
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuIfubZxlSCevEBE_MkyRVBpiE3TrpctYWg&s",
//  universityDescription:
//   "Anwer Khan Modern Medical College is a private medical school in Bangladesh, established in 2008. It is located in Dhanmondi, Dhaka, and is affiliated with the University of Dhaka.",
// };

// axios
//  .post("http://localhost:3008/api/college", collegeData)
//  .then((response) => {
//   console.log("College added successfully:", response.data);
//  })
//  .catch((error) => {
//   console.error("Error adding college:", error);
//  });
