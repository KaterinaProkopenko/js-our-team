const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  console.log(team[0].name);
  console.log(team[0].role);
  console.log(team[0].image);

  console.log(' ');
  console.log(team[1].name);
  console.log(team[1].role);
  console.log(team[1].image);

  console.log(' ');
  console.log(team[2].name);
  console.log(team[2].role);
  console.log(team[2].image);

  console.log(' ');
  console.log(team[3].name);
  console.log(team[3].role);
  console.log(team[3].image);

  console.log(' ');
  console.log(team[4].name);
  console.log(team[4].role);
  console.log(team[4].image);

  console.log(' ');
  console.log(team[5].name);
  console.log(team[5].role);
  console.log(team[5].image);


  member(team[0].image, team[0].name, team[0].role, team[0].image);
  member(team[1].image, team[1].name, team[1].role, team[1].image);
  member(team[2].image, team[2].name, team[2].role, team[2].image);
  member(team[3].image, team[3].name, team[3].role, team[3].image);
  member(team[4].image, team[4].name, team[4].role, team[4].image);
  member(team[5].image, team[5].name, team[5].role, team[5].image);

function member(img, name, role, image) {
    const card = document.createElement('div');
    document.getElementById('row').appendChild(card);
    card.classList.add('col-4');

    const photo = document.createElement('img');
    card.appendChild(photo);
    photo.classList.add('img-fluid', 'mb-2');
    photo.src = `img/${img}`;

    const titleName = document.createElement('h4');
    card.appendChild(titleName);
    titleName.classList.add('d-inline');
    titleName.innerText = 'Name: ';

    const textName = document.createElement('p');
    card.appendChild(textName);
    textName.classList.add('d-inline');
    textName.innerHTML = `${name}`;

    const spaceFirst = document.createElement('br');
    card.appendChild(spaceFirst);

    const titleRole = document.createElement('h4');
    card.appendChild(titleRole);
    titleRole.classList.add('d-inline');
    titleRole.innerText = 'Role: ';

    const textRole = document.createElement('p');
    card.appendChild(textRole);
    textRole.classList.add('d-inline');
    textRole.innerHTML = `${role}`;

    const spaceSecond = document.createElement('br');
    card.appendChild(spaceSecond);

    const titleImage = document.createElement('h4');
    card.appendChild(titleImage);
    titleImage.classList.add('d-inline');
    titleImage.innerText = 'Image: ';

    const textImage = document.createElement('p');
    card.appendChild(textImage);
    textImage.classList.add('d-inline');
    textImage.innerHTML = `${image}`;
};

const myRow = document.getElementById('row');
myRow.classList.add('gy-5', 'py-4');
