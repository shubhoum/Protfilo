/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2"
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shubham",
  logo_name: "Portfolio",
  full_name: "Shubham Pandit",
  subTitle:
    " Full Stack Game Developer, App & Web Developer, Graphics Designer",
  resumeLink:
    "https://docs.google.com/document/d/e/2PACX-1vRX3mPl3-2FtXlANogfDUa7jR9IBoIfdUTGiqC0RPqwK8KNsn0ILYy-dpkJwAcAGg/pub",
  mail: "mailto:shubhoum@gmail.com"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/shubhoum",
  linkedin: "linkedin.com/in/shubham-pandit-888433173/",
  gmail: "im.shubhoum@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/shubhoum/",
  instagram: "https://www.instagram.com/shubhoum/",
  stackoverflow : "https://stackoverflow.com/users/12605257/shubham-pandit"};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for applications and games",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Django and REST-API",
        "⚡ Integration of third party services such as Firebase / Google Cloud"
      ],
      softwareSkills: [
        {
          skillName: "Unity Engine",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#eeeeee"
          }
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33"
          }
        }, {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        }, {
          skillName: "BlockChain / NFTs",
          fontAwesomeClassname: "simple-icons:blockchaindotcom",
          style: {
            color: "#f6f6f6"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE"
          }
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#ff9f3f"
          }
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1"
          }
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "rgba(255,255,255,0.8)"
          }
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297"
          }
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32"
          }
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32"
          }
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Miscellaneous",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Blockchain, NFTs",
        "⚡ Experience working on texture designing, video editing, 3D Modeling",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Marketing the application in the market"
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4b6cff"
          }
        },
        {
          skillName: "Git / Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#ffffff"
          }
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#3f398c"
          }
        },
        {
          skillName: "Video Editing",
          fontAwesomeClassname: "simple-icons:adobepremiere",
          style: {
            color: "rgba(157,37,255,0.8)"
          }
        }, {
          skillName: "Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#008cff"
          }
        },
        {
          skillName: "Blockchain /NFTs",
          fontAwesomeClassname: "simple-icons:blockchaindotcom",
          style: {
            color: "#ffffff"
          }
        },
        {
          skillName: "Digital Marketing",
          fontAwesomeClassname: "simple-icons:marketo",
          style: {
            color: "#ff2243"
          }
        },
        {
          skillName: "Web Hosting",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        }, {
          skillName: "Blender",
          fontAwesomeClassname: "logos:blender",
          style: {
            color: "#ffffff"
          }
        }
      ]
    }
  ]
};

const degrees = {
  degrees: [
    {
      title: "Sree Vidyanikethan Engineering College",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "svec-logo.png",
      alt_name: "SVEC",
      duration: "2018 - 2022",
      descriptions: [
        "⚡  I'm currently pursuing my Bachelors in Computer Science and Engineering."
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.svec.education/"
    }
  ]
};

const certifications = {
  certifications: [
    {
      title: "Facial Expression With Keras",
      subtitle: "Coursera Project Network",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VW2TNLKXXLZ5",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#001ed5"
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "coursera.png",
      certificate_link:
        "http://coursera.org/account/accomplishments/records/REKVE7PHCGS5",
      alt_name: "hackathon",
      color_code: "#ffffff"
    },
    {
      title: "Internet and Web Development Fundamentals",
      subtitle: "YouAccel Training",
      logo_path: "udemy.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F"
    }, ,
    {
      title: "NASA Space App Challenge",
      subtitle: "Space App Challenge",
      logo_path: "nasa.png",
      certificate_link:
        "https://www.spaceappschallenge.org/",
      alt_name: "Opensource Event",
      color_code: "#646464"
    },
    {
      title: "Crash Course on Python",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#2AAFED"
    },
    {
      title: "IGNITION | A Global Solana Hackathon",
      subtitle: "Solana Hackathon",
      logo_path: "solana.jpg",
      // certificate_link:
      //   "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#ff4f16"
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "Duke University",
      logo_path: "duke.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#ff8000"
    },

    {
      title: "Applied Machine Learning in Python",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#6fff5b"
    },
   {
      title: "Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming",
      subtitle: "Standford University",
      logo_path: "standford.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#c00202"
    },
   {
      title: "SQL For Data Science",
      subtitle: "UC DAVIS",
      logo_path: "ucdavis.png",
      certificate_link:
        "https://coursera.org/share/fc15f71fa7a13d4ce3c124ffdd0fe5c6",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#ffffff"
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ]
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Own Projects",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Game Development Intern",
          company: "EV Studios",
          company_url: "https://www.evstudios.in/",
          logo_path: "evstudio.jpg",
          duration: "Aug 2021 - Oct 2021",
          location: "Remote",
          description: `My responsibility was to implement NFTs blockchain mechanism in the game, NFT are the unique and non-interchangeable unit of data stored on a digital ledger.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5"
        },
        {
          title: "My Personal Experience",
          company: "",
          company_url: "https://www.subham.com.np/",
          logo_path: "TSF.png",
          duration: "",
          location: "",
          description: "Developing application and games since 2018, experienced with the platform and language required for development of application and games",
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26"
        },
      ]
    },
   /* {
      title: "Volunteerships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "",
          duration: "",
          location: "",
          description:"",
          color: "#4285F4"
        },
      ]
    }*/
  ]
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Game using Unity Engine, React Project, Android Project, and Design the assert and the textures. Below are some of my projects."
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "FacebookPP.png", // Profile
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. "
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to make videos and upload to youtube so it can be helpful to others.",
    link: "https://www.youtube.com/channel/UCVHF0bgIRNogw_WTAv2Ww2Q",
    avatar_image_path: "blogs_image.svg"
  }
};

const projects = {
  data: [
    {
      id: "0",
      name: "Portfolio Website",
      url: "https://www.subham.com.np/",
      description:
        "This is website where my portfolio is present",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html"
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript"
        },

        {
          name: "ReactJS",
          iconifyClass: "logos-react"
        }

      ]
    },
    {
      id: "1",
      name: "Starmaker Downloader",
      url: "https://play.google.com/store/apps/details?id=com.shubham.starmakerdownloader",
      description:
        "Starmaker Downloader is a android app publish in Google Play Store that helps to download videos/audios from Starmaker app\n" +
        "50K+ Downloads,\n" +
        "2.5K reviews with 4.3+ Ratings",
      languages: [
        {
          name: "Android",
          iconifyClass: "flat-color-icons:android-os"
        },
        {
          name: "Java",
          iconifyClass: "logos-java"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }
      ]
    },
    {
      id: "2",
      name: "Instagram Downloader",
      url: "https://play.google.com/store/apps/details?id=com.shubham.instagramdownloader",
      description:
        "Instagram Downloader is a android app publish in Google Play Store that helps to download videos/photos from Instagram app,\n" +
        "500+ Downloads,\n" +
        "4.4+ Ratings\n",
      languages: [
        {
          name: "Android",
          iconifyClass: "flat-color-icons:android-os"
        },
        {
          name: "Java",
          iconifyClass: "logos-java"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }
      ]
    },
    {
      id: "3",
      name: "Live COVID Status",
      url: "https://github.com/shubhoum/LiveCovid",
      description:
      "A web app that shows live COVID status and new cases in each time page visit.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html"
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript"
        },
        {
          name: "Python",
          iconifyClass: "logos-python"
        },
        {
          name: "Google Cloud",
          iconifyClass: "logos:google-cloud"
        }
      ]
    },
    {
      id: "4",
      name: "Brain Mesh",
      url: "https://play.google.com/store/apps/details?id=com.Shubham.Games.BrainMesh",
      description:
        "Brain Mesh is a android puzzle category game made with unity, 1K+ Downloads, 4.4+ Ratings",
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "cib:unity"
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp"
        },
        {
          name: "Google Firebase",
          iconifyClass: "logos:firebase"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }
      ]
    },
    {
      id: "3",
      name: "BlockChain Wallet",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "A Wallet made with react that store the wallet address and NFTs present in the wallet",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html"
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css"
        },
        {
          name: "TypeScript",
          iconifyClass: "vscode-icons:file-type-typescriptdef-official"
        },
        {
          name: "React",
          iconifyClass: "logos-react"
        }
      ]
    },
    {
      id: "4",
      name: "3D-FPS Multiplayer Game (Unity 3d)",
      url: "https://youtu.be/MIniwAH8xGo",
      description:
      "3D Multiplayer game made with unity3D where player can choose a team and play against them, similar to counter strike",
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "cib:unity"
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp"
        },
        {
          name: "Google Firebase",
          iconifyClass: "logos:firebase"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }, {
          name: "Blender",
          iconifyClass: "logos:blender"
        }

      ]
    },
    {
      id: "5",
      name: "J.O.S.H - India's First Play-to-Earn NFT-Based FPS Game",
      url: "https://www.youtube.com/watch?v=g7II-Tzabec&feature=emb_imp_woyt",
      description:
      "A blockchain NFT based 3D game where there are different maps, clans, modes (Team Death Match) etc",
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "cib:unity"
        },
        {
          name: "Blockchain",
          iconifyClass: "icon-park:blockchain"
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp"
        },
        {
          name: "Google Firebase",
          iconifyClass: "logos:firebase"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }, {
          name: "Blender",
          iconifyClass: "logos:blender"
        }


      ]
    },
    {
      id: "6",
      name: "Zoom Auto Login",
      url: "https://drive.google.com/drive/folders/1omioFBk_4yz4wpZIjsd0zwNtT0uuUR6o?usp=sharing",
      description:
      "On Click login to meeting instead of typing id and password everytime",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos:flutter"
        },
        {
          name : "Dart",
          iconifyClass: "vscode-icons:file-type-dartlang"
        }
      ]
    },
    {
      id: "7",
      name: "Color Blast",
      url: "https://play.google.com/store/apps/details?id=com.Shubham.Games.ColorBlast",
      description: "Basic 2D Game where the player has to match the color of the balls",
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "cib:unity"
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }

      ]
    },
    {
      id: "8",
      name: "Tap Endless",
      url: "https://play.google.com/store/apps/details?id=com.Shubham.Games.TapTap",
      description:
        "A tap game where player should collect coin by tapping it",
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "cib:unity"
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        }

      ]
    },
    {
      id: "9",
      name: "COVID-19 Transmission Simulation",
      url: "https://youtu.be/XOKXSZZoc7w",
      description: "Simulation made with python and turtle",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python"
        }
      ]
    },

    {
      id: "10",
      name: "Brain Loop",
      url: "",
      description:
      "2D Game where there are two player with same control, player should pass the level by using both the players",
      languages: [
        {
          name: "Unity Engine",
          iconifyClass: "cib:unity"
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp"
        },
        {
          name: "Photoshop",
          iconifyClass: "vscode-icons:file-type-photoshop"
        },
        {
          name: "Google Firebase",
          iconifyClass: "logos:firebase"
        },
      ]
    },
  ]
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects
};
