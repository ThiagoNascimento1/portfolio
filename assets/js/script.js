// Request function

const fecthData = async (url) => {
  let data;
  let error = null;

  try {

    const res = await fetch(url);
    const json = await res.json();
    data = json;

  } catch (error) {

    console.log(error);
    error = "Houve um erro ao carregar!";

  }

    return { data, error };
  };

const showProfile = async () => {

  const url = "https://api.github.com/users/thiagonascimento1";
  const {data: profile, error} = await fecthData(url);
  if (!error) {
    // profile image
    const profileImg = document.querySelector(".profile-image");
    profileImg.innerHTML = `<img src=${profile.avatar_url} alt="profile image">`;
    // profile name
    const contentName = document.querySelector("#profile-name");
    const profileName = profile.name;
    const letters = profileName.split('');
    letters.map((item, indice) => {
      setTimeout(() => {
        contentName.innerHTML += item;
      }, 120 * indice);
    })
  } else {
    const contentProfile = documento.querySelector("personal-info");
    contentProfile.innerHTML = "Ocorreu um erro na requisição dos dados, tente novamente!";
  }
};

// selecionando seção da nav
const handleChangeSection = section => {

  const selected = document.querySelector('#selected');

  const hiddenSection = sections => {
    sections.map(sectionName => {
      let section = document.querySelector(`#${sectionName}`);
      section.style.opacity = '0';
      setTimeout(() => {
        section.style.display = 'none';
      }, 500);
    });
  };

  showSection = sectionName => {
    let section = document.querySelector(`#${sectionName}`);
    setTimeout(() => {
      section.style.display = 'grid';
      section.style.opacity = '1';
    }, 500);
  };

  if(section === 'aboutme') {
    selected.style.left = '15px';
    hiddenSection(["skills", "projects"]);
    showSection("aboutme");
  } else if (section === 'skills') {
    selected.style.left = '125px';
    hiddenSection(["aboutme", "projects"]);
    showSection("skills");
  } else if (section === 'projects') {
    selected.style.left = '235px';
    hiddenSection(["skills", "aboutme"]);
    showSection("projects");
  }
}

const showSkills = () => {
  const contentSkills = document.querySelector("#skills");
  const skills = [
    {technology: 'React JS', level: 'Intermediate', classIcon: "devicon-react-original colored"},
    {technology: 'Typescript', level: 'Intermediate', classIcon: "devicon-typescript-plain colored"},
    {technology: 'Javascript', level: 'Intermediate', classIcon: "devicon-javascript-plain colored"},
    {technology: 'Bootstrap', level: 'Intermediate', classIcon: "devicon-bootstrap-plain colored"}
  ]
  skills.map(skill => {
    let item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <div class="name-skill">${skill.technology}</div>
      <div class="icon-skill"><i class="${skill.classIcon}"></i></div>
      <div class="level-skill">${skill.level}</div>
    `;
    contentSkills.appendChild(item);
  });
}

const showProjects = () => {

  const contentProjects = document.querySelector("#projects");

  projects = [
    {
      title: "Finance System",
      tech: [
        "devicon-react-original colored",
        "devicon-typescript-plain colored"
      ],
      imgexample: ["financesystem.gif", "horizontal"],
      link: "https://github.com/Thiagonascimento1/personal-budget"
    },
    {
      title: "QRCode Generator",
      tech: [
        "devicon-react-original colored",
        "devicon-typescript-plain colored"
      ],
      imgexample: ["qrcodegenerator.gif", "horizontal"],
      link: "https://github.com/Thiagonascimento1/qr-code-generator"
    },
    {
      title: "Attendance List",
      tech: [
        "devicon-react-original colored",
        "devicon-typescript-plain colored"
      ],
      imgexample: ["attendancelist.gif", "vertical"],
      link: "https://github.com/Thiagonascimento1/attendance-list"
    },
    {
      title: "Secret Word",
      tech: [
        "devicon-react-original colored",
        "devicon-typescript-plain colored"
      ],
      imgexample: ["secretword.gif", "horizontal"],
      link: "https://github.com/Thiagonascimento1/secret-word"
    },
    {
      title: "Dictionary",
      tech: [
        "devicon-typescript-plain colored",
        "devicon-html5-plain colored",
        "devicon-css3-plain colored"
      ],
      imgexample: ["dictionary.gif", "vertical"],
      link: "https://github.com/Thiagonascimento1/dictionary"
    }
  ];

  projects.map(project => {
    // project item
    let item = document.createElement("div");
    item.className = "item";
    item.onclick = () => openProject(project.link);
    item.innerHTML = `<div class="title">${project.title}</div>`;

    // content image
    let contentImg = document.createElement("div");
    contentImg.className = `img-project ${project.imgexample[1]}`;
    contentImg.innerHTML = `<img src="assets/images/${project.imgexample[0]}"/>`;
    item.appendChild(contentImg);

    //content technologies
    let technologies = document.createElement("div");
    technologies.className = `${project.imgexample[1]}tech technologies`;

    item.appendChild(technologies);

    (project.tech).map(tech => {

      //content tech
      let contentTech = document.createElement("div");
      contentTech.className = "tech";
      contentTech.innerHTML += `<i class="${tech}"></i>`;

      technologies.appendChild(contentTech);
    });

    contentProjects.appendChild(item);
  });
};

const openProject = url => {
  window.location.href = url;
}

// themes
const setTheme = () => {

  const theme = document.querySelector("#theme");

  if(theme.checked) {
    document.body.style.setProperty('--cor-background-primary', '#dedede');
    document.body.style.setProperty('--cor-background-secondary', 'linear-gradient(90deg, rgba(0,0,0,1) 98%, rgba(222,222,222,1) 100%)');
    document.body.style.setProperty('--cor-primary', 'rgb(4, 5, 23)');
    document.body.style.setProperty('--cor-secondary', '#scscsc');
    document.body.style.setProperty('--cor-aboutme-text-background', 'rgba(255, 255, 255, 1)');
    document.body.style.setProperty('--cor-background-item', '#fff');
    document.body.style.setProperty('--cor-aboutme-background', 'rgba(255, 255, 255, .5)');
    document.body.style.setProperty('--cor-border-button', 'rgba(0, 0, 0, .8)');
    document.body.style.setProperty('--img-background-project', 'url(../images/background-project2.jpg)');

    const aboutme = document.querySelector('#aboutme');
    aboutme.style.background = "url(assets/images/background-light.jpg)";
  } else {
    document.body.style.setProperty('--cor-background-primary', 'rgb(4, 5, 23)');
    document.body.style.setProperty('--cor-background-secondary', 'rgb(17, 19, 41)');
    document.body.style.setProperty('--cor-primary', '#fff');
    document.body.style.setProperty('--cor-secondary', 'rgb(140, 140, 160)');
    document.body.style.setProperty('--cor-background-item', 'rgb(13, 107, 196)');
    document.body.style.setProperty('--cor-aboutme-text-background', 'rgba(0, 0, 0, .6)');
    document.body.style.setProperty('--cor-aboutme-background', 'rgba(0, 0, 0, .3)');
    document.body.style.setProperty('--cor-border-button', 'rgb(13, 107, 196)');
    document.body.style.setProperty('--img-background-project', 'url(../images/background-project.jpg)');

    const aboutme = document.querySelector('#aboutme');
    aboutme.style.background = "url(assets/images/background-me.jpg)";
  }
};

// Show Content Contact

const animationButton = (value) => {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  if (value) {
    left.style.width = "calc(100% + 7px)";
    left.style.height = "calc(100% + 7px)";
    right.style.width = "calc(100% + 7px)";
    right.style.height = "calc(100% + 7px)";
  } else {
    left.style.width = "20px";
    left.style.height = "20px";
    right.style.width = "20px";
    right.style.height = "20px";
  }
};

let displayContact = false;
const showContact = () => {
  displayContact = !displayContact;
  const divContact = document.querySelector(".icon-contact");
  if (displayContact) {
    divContact.style.height = "45px";
    divContact.style.opacity = '1';
    animationButton(displayContact);
  } else {
    divContact.style.height = "0px";
    divContact.style.opacity = '0';
    animationButton(displayContact);
  }
};

// inicialization
const reloadPage = () => {
  showProfile();
  showSkills();
  showProjects();
};