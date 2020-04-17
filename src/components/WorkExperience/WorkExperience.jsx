// import React from "react";
// import styles from "./WorkExperience.module.css";

// const WorkExperience = (props) => {
//   return (
//     <>
//       <div className={props.bgColor ? styles.bgChange : styles.innerSection}>
//         <h2>Work Experience</h2>
//         <div className={styles.content}>
//           <div className={styles.conentExp}>
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C560BAQGKfgGTX45gLA/company-logo_100_100/0?e=1593043200&amp;v=beta&amp;t=rnUyPa-BzRE8EUMAidUY2WCsqb0lJWg6MlrUo0UcKAo"
//               loading="lazy"
//               alt="SOS Children's Villages USA"
//             />
//             <div className={styles.expTitle}>
//               <h4>Data Analysis Manager</h4>
//               <p className={styles.jobTitle}>
//                 SOS Children's Villages USA{" "}
//                 <span className={styles.bulletPoint}></span> Full-time
//               </p>

//               <span className={styles.contentDate}>May 2015 - Present</span>
//               <span className={styles.contentcity}>
//                 Washington D.C. Metro Area
//               </span>
//               <div className={styles.jobDesc}>
//                 <p>
//                   Manage the day-to-day operations and management of SOS-USA's
//                   data systems Develop and execute strategic plans to support
//                   the growth of the data architecture Create and oversee the
//                   budget for all of SOS-USA’s data systems and IT equipment.
//                   Head the planning, execution, and reporting of major
//                   multichannel digital fundraising campaigns with a focus on
//                   short and long-term value and return on investment.
//                 </p>
//                 <h4>
//                   Senior Data Coordinator{" "}
//                   <span className={styles.contentDate}>
//                     (Jan 2016 - Nov 2016)
//                   </span>{" "}
//                 </h4>
//                 <p>
//                   Performed database maintenance and hygiene tasks in regularly
//                   scheduled intervals. Created and maintained SQL queries for
//                   various data migration routines and projects. Overlooked
//                   coordinator's data entry of gift information and projects.
//                   Managed maintenance of coding system for donor and gift
//                   information in database. Conducted data imports and exports
//                   from multiple sources in a timely and efficient manner.
//                 </p>
//                 <h4>
//                   Data Coordinator{" "}
//                   <span className={styles.contentDate}>
//                     (May 2014 - Jan 2016)
//                   </span>
//                 </h4>
//                 <p>
//                   Ensured comprehensive data entry of biographical and gift
//                   information. Supported maintenance of coding system for donor
//                   and gift information in database. Supported data imports and
//                   exports from multiple sources in a timely and efficient
//                   manner.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.conentExp}>
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C4D0BAQFUs77nxg-U3w/company-logo_100_100/0?e=1593043200&amp;v=beta&amp;t=lrOE9HSPETpqOyIKf-pogaTqOlaxQyXGXnZTvjRLZdk"
//               loading="lazy"
//               alt="Unispec Enterprises"
//             />
//             <div className={styles.expTitle}>
//               <h4>Data Analyst</h4>
//               <p className={styles.jobTitle}>
//                 Unispec Enterprises <span className={styles.bulletPoint}></span>{" "}
//                 Full-time
//               </p>
//               <span className={styles.contentDate}>Jan 2018 - Jan 2019</span>
//               <span className={styles.contentcity}>
//                 Washington D.C. Metro Area
//               </span>
//               <div className={styles.jobDesc}>
//                 <p>
//                   Collaborated with technical architects, developers, database
//                   specialists and engineers in order to improve various
//                   application processes and model quality Responsible for all
//                   activities involving QA and compliance with regulatory
//                   requirements. Evaluated performance results and recommend
//                   changes affecting project growth/success. Implemented audits
//                   and reviews/analyzes data and documentation.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.conentExp}>
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C510BAQFmywm4l58hFw/company-logo_100_100/0?e=1593043200&amp;v=beta&amp;t=_FYX6Z8n5rJyeBhJWki7wzh_lK2sZ2YZ1dstuXCx9Sc"
//               loading="lazy"
//               alt="DealerOn, Inc"
//             />
//             <div className={styles.expTitle}>
//               <h4>Project Coordinator</h4>
//               <p className={styles.jobTitle}>
//                 DealerOn <span className={styles.bulletPoint}></span> Full-time
//               </p>
//               <span className={styles.contentDate}>Jan 2018 - Mar 2018</span>
//               <span className={styles.contentcity}>
//                 Washington D.C. Metro Area
//               </span>
//               <div className={styles.jobDesc}>
//                 <p>
//                   Communicated effectively with Implementation Teams on the
//                   status of ongoing projects. Processed all new orders excluding
//                   websites, SEO, and SEM. Utilized HTML/CSS and JS to update and
//                   add website content. Migrated websites and scrapped their
//                   contents and tool over to the new site. Collaborated with
//                   business partners to implement third party products on client
//                   websites. Remained aware of both state and OEM compliance
//                   restrictions.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.conentExp}>
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C4D0BAQHGSbyMhhMRIA/company-logo_100_100/0?e=1593043200&amp;v=beta&amp;t=ic_ffA-7ccnA4V6fmKK87DxRG03ZRW7WpbAtTnAyl-Q"
//               loading="lazy"
//               alt="Ginkgo Street Labs"
//             />
//             <div className={styles.expTitle}>
//               <h4>Client Relations Specialist</h4>
//               <p className={styles.jobTitle}>
//                 Ginkgo Street Labs <span className={styles.bulletPoint}></span>{" "}
//                 Full-time
//               </p>
//               <span className={styles.contentDate}> Nov 2014 - May 2015 </span>
//               <span className={styles.contentcity}>
//                 Washington D.C. Metro Area
//               </span>
//               <div className={styles.jobDesc}>
//                 <p>
//                   Managed database set-up, migration and data integrity.
//                   Reviewed and fixed specific issue sent from Customer Relations
//                   Director. Created training materials: screencasts, blog posts,
//                   illustrated manuals, agendas. Evaluated client’s day-to-day
//                   needs as well as an organization’s long-term goals and
//                   solutions. Developed and maintain excellent client
//                   relationships.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkExperience;
