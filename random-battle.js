function toggleArmyTable() {
  var table = document.getElementById("armyTable");
  var arrowIcon = document.getElementById("arrowIcon");
  
  if (table.style.display === "none") {
    table.style.display = "table"; // Show the table
    arrowIcon.innerHTML = "&#9660;"; // Down-pointing triangle
  } else {
    table.style.display = "none"; // Hide the table
    arrowIcon.innerHTML = "&#9658;"; // Right-pointing triangle
  }
}

function toggleAttArmyTable() {
  var table = document.getElementById("att-armyTable");
  var arrowIcon = document.getElementById("arrowIcon");
  
  if (table.style.display === "none") {
    table.style.display = "table"; // Show the table
    arrowIcon.innerHTML = "&#9660;"; // Down-pointing triangle
  } else {
    table.style.display = "none"; // Hide the table
    arrowIcon.innerHTML = "&#9658;"; // Right-pointing triangle
  }
}


function updateCumulativeTotal(army) {
  const knights = parseInt(document.getElementById(army + "-knights").value);
  const lightcav = parseInt(document.getElementById(army + "-lightcav").value);
  const cavarcher = parseInt(document.getElementById(army + "-cavarcher").value);
  const pikemen = parseInt(document.getElementById(army + "-pikemen").value);
  const halberd = parseInt(document.getElementById(army + "-halberd").value);
  const infantry = parseInt(document.getElementById(army + "-infantry").value);
  const levy = parseInt(document.getElementById(army + "-levy").value);
  const archers = parseInt(document.getElementById(army + "-archers").value);
  const crossbow = parseInt(document.getElementById(army + "-crossbow").value);
  const handgunner = parseInt(document.getElementById(army + "-handgunner").value);
  const skirmishers = parseInt(document.getElementById(army + "-skirmishers").value);
  const lightguns = parseInt(document.getElementById(army + "-lightguns").value);
  const mecharty = parseInt(document.getElementById(army + "-mecharty").value);
  const bombards = parseInt(document.getElementById(army + "-bombards").value);
  
  const totalStrength = knights + lightcav + cavarcher + pikemen + halberd + infantry + levy + archers + skirmishers + crossbow + handgunner + mecharty + lightguns + bombards;
  const totalPoints = 10 * knights + 6 * lightcav + 6 * cavarcher + 6 * pikemen + 6 * halberd + 6 * infantry + 2 * levy + 4 * archers + 3 * skirmishers + 5 * crossbow + 6 * handgunner + 7 * lightguns + 7 * lightguns + 10 * bombards;
  
  const grain = Math.round(2.2 * (knights + lightcav + cavarcher + pikemen + halberd + infantry + levy + archers + skirmishers + crossbow + handgunner + mecharty + lightguns + bombards));
  const fodder = Math.round(11 * (knights + lightcav) + (cavarcher * 3));
  const ammunition = Math.round(48 * (archers + crossbow + handgunner));
  
  const totalOxcarts = 3 * (bombards + mecharty) + lightguns + Math.round((grain + fodder + ammunition) / 617);
  
  let marchingDistance;
  if (totalOxcarts < 50) {
    marchingDistance = 20;
  } else if (totalOxcarts >= 51 && totalOxcarts <= 100) {
    marchingDistance = 16;
  } else if (totalOxcarts >= 101 && totalOxcarts <= 200) {
    marchingDistance = 14;
  } else if (totalOxcarts >= 201 && totalOxcarts <= 300) {
    marchingDistance = 13;
  } else if (totalOxcarts >= 301 && totalOxcarts <= 400) {
    marchingDistance = 12;
  } else {
    marchingDistance = 10;
  }
  
  const terrain = document.getElementById("terrain").value;
  const weather = document.getElementById("weather").value;
  
  const terrainDropdown = document.getElementById("terrain");

  terrainDropdown.addEventListener("change", function() {
    // Call your function here
    updateCumulativeTotal(army);
  });
  
  const weatherDropdown = document.getElementById("weather");

  weatherDropdown.addEventListener("change", function() {
    // Call your function here
    updateCumulativeTotal(army);
  });
  
  
  if (terrain === "Forest" || terrain === "Mountains" || terrain === "Marsh") {
    marchingDistance -= 2;
  } else if (terrain === "Desert") {
    marchingDistance -= 1;
  }
  
  if (weather === "Rain"  || weather === "Mud" || weather === "Storm") {
    marchingDistance -= 2;
  } else if (weather === "Fog" || weather === "Snow") {
    marchingDistance -= 1;
  }
  
  document.getElementById(army + "-total").textContent = + totalStrength + " soldiers";
  document.getElementById(army + "-points").textContent = totalPoints + " points";
  document.getElementById(army + "-grain").textContent = "Grain: " + grain + " lb";
  document.getElementById(army + "-fodder").textContent = "Fodder: " + fodder + " lb";
  document.getElementById(army + "-ammunition").textContent = "Ammunition: " + ammunition + " lb";
  document.getElementById(army + "-oxcarts").textContent = "Oxcarts: " + totalOxcarts;
  document.getElementById(army + "-marching-distance").textContent = "Marching Distance: " + marchingDistance + " miles";
}


function randomlyFillInputs(army) {
  document.getElementById(army + "-knights").value = getRandomNumberInRange(10, 200) * 10;
  document.getElementById(army + "-lightcav").value = getRandomNumberInRange(10, 200) * 10;
  document.getElementById(army + "-cavarcher").value = getRandomNumberInRange(10, 200) * 10;
  document.getElementById(army + "-pikemen").value = getRandomNumberInRange(10, 250) * 10;
  document.getElementById(army + "-halberd").value = getRandomNumberInRange(10, 250) * 10;
  document.getElementById(army + "-infantry").value = getRandomNumberInRange(10, 300) * 10;
  document.getElementById(army + "-levy").value = getRandomNumberInRange(10, 550) * 10;
  document.getElementById(army + "-archers").value = getRandomNumberInRange(10, 350) * 10;
  document.getElementById(army + "-crossbow").value = getRandomNumberInRange(10, 250) * 10;
  document.getElementById(army + "-handgunner").value = getRandomNumberInRange(10, 150) * 10;
  document.getElementById(army + "-skirmishers").value = getRandomNumberInRange(10, 250) * 10;
  document.getElementById(army + "-mecharty").value = getRandomNumberInRange(0, 50);
  document.getElementById(army + "-lightguns").value = getRandomNumberInRange(0, 50);
  document.getElementById(army + "-bombards").value = getRandomNumberInRange(0, 50);
  updateCumulativeTotal(army);
}

function getRandomNumberInRange(min, max) {
  // Generate a random number within the specified range
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Adjust the number to the nearest multiple of 10
  const adjustedNumber = Math.round(randomNumber / 10) * 10;

  return adjustedNumber;
}

function resetInputs(army) {
  document.getElementById(army + "-knights").value = 0;
  document.getElementById(army + "-lightcav").value = 0;
  document.getElementById(army + "-cavarcher").value = 0;
  document.getElementById(army + "-pikemen").value = 0;
  document.getElementById(army + "-halberd").value = 0;
  document.getElementById(army + "-infantry").value = 0;
  document.getElementById(army + "-levy").value = 0;
  document.getElementById(army + "-archers").value = 0;
  document.getElementById(army + "-crossbow").value = 0;
  document.getElementById(army + "-handgunner").value = 0;
  document.getElementById(army + "-skirmishers").value = 0;
  document.getElementById(army + "-mecharty").value = 0;
  document.getElementById(army + "-lightguns").value = 0;
  document.getElementById(army + "-bombards").value = 0;
  updateCumulativeTotal(army);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomDate() {
  const currentDate = new Date();
  const randomYear = Math.floor(Math.random() * (1600 - 800 + 1)) + 800;
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 31) + 1;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = `${months[randomMonth]} ${randomDay}, ${randomYear}`;
  document.getElementById('battle-date').value = formattedDate;
}
document.getElementById('random-date-button').addEventListener('click', generateRandomDate);

// Generate Random Battle Names

  function generateRandomTitle() {
    const battleTitles = [
"Battle of Kastsyust",
"Battle of Staban",
"Battle of Tetov",
"Battle of Převiná",
"Battle of Nagylint",
"Battle of Ajvas",
"Battle of Grigoriovăț",
"Battle of Tvardă",
"Battle of Świdwrocław",
"Battle of Mysłory",
"Battle of Otoloveni",
"Battle of Milinicu",
"Battle of Lina",
"Battle of Hurbanok",
"Battle of Barazansk",
"Battle of Haivonyk",
"Battle of Perania",
"Battle of Gianninia",
"Battle of Kifka",
"Battle of Lerbo",
"Battle of Pometania",
"Battle of Folindicci",
"Battle of Barda",
"Battle of Manguatejo",
"Battle of Holhada",
"Battle of Bacia",
"Battle of Cataciras",
"Battle of Albamanca",
"Battle of Kuçobnesh",
"Battle of Hiçan",
"Battle of Hadrovo",
"Battle of Kaška",
"Battle of Tevets",
"Battle of Rakovdanski",
"Battle of Darski",
"Battle of Požetija",
"Battle of Probimica",
"Battle of Topocevo",
"Battle of Oracani",
"Battle of Caranracal",
"Battle of Priradin",
"Battle of Lesćin",
"Battle of Ljutožana",
"Battle of Cerkaran",
"Battle of Fürstenbühel",
"Battle of Waidnitz",
"Battle of Naamaarde",
"Battle of Sherpcroen",
"Battle of Vinmans",
"Battle of Angouville",
"Battle of Delmenberg",
"Battle of Tangerstadt",
"Battle of Tippelone",
"Battle of Eastnon",
"Battle of Bredeburg",
"Battle of Vollenstein",
"Battle of Dübenhausen",
"Battle of Burgpach",
"Battle of Helby",
"Battle of Hjortskilde",
"Battle of Narma",
"Battle of Tamja",
"Battle of Pudaskylä",
"Battle of Loviisa",
"Battle of Reykverfi",
"Battle of Drangjahlíð",
"Battle of Jelska",
"Battle of Ikkne",
"Battle of Kaišmerge",
"Battle of Plunneliai",
"Battle of Staros",
"Battle of Brønnøybu",
"Battle of Varvall",
"Battle of Havsstuna",
"Battle of Norcaster Lake",
"Battle of Great Redport",
"Battle of Northholm",
"Battle of Hindbury",
"Battle of Market Southpool",
"Battle of Langham",
"Battle of Lower Portsfield",
"Battle of Kinfield",
"Battle of Great Overport",
"Battle of Hindham Head",
"Battle of Kinburn",
"Battle of Henington",
"Battle of Newworth",
"Battle of Otterhalgh",
"Battle of Whiteby",
"Battle of Blackport",
"Battle of Foxmoor",
"Battle of Overford Lake",
"Battle of Kinworth",
"Battle of Blackmere",
"Battle of Ilworth Bridge",
"Battle of Moorhey",
"Battle of Thornthorpe",
"Battle of Newmere",
"Battle of Hopburgh",
"Battle of Woolthorpe",
"Battle of Marsleigh",
"Battle of Portsden Heath",
"Battle of Hopport",
"Battle of Oulthwaite",
"Battle of Barbrook Heath",
"Battle of Oulbrook",
"Battle of Keldford",
"Battle of Hindbrook",
"Battle of Foxburn",
"Battle of Norburgh",
"Battle of Langhampton",
"Battle of Woolthorpe",
"Battle of Birchburn",
"Battle of Portsmouth",
"Battle of Oakmouth Lake",
"Battle of Foxchester",
"Battle of Marsford Bridge",
"Battle of Oakmarsh Heath",
"Battle of Ilcaster",
"Battle of Langchester Head",
"Battle of Newford",
"Battle of Lower Eastdon",
"Battle of Great Redbrook",
"Battle of Oakford",
"Battle of Upper Langden",
"Battle of Market Westfold",
"Battle of Overthorpe",
"Battle of Loxwell",
"Battle of Langwood Green",
"Battle of Keldlea",
"Battle of Hartworth",
"Battle of Lower Guildby",
"Battle of Otterington",
"Battle of Blackham",
"Battle of Poivers",
"Battle of Vierves",
"Battle of Maiyonne",
"Battle of Colozon",
"Battle of Tabéliard",
"Battle of Besancourt",
"Battle of Cologny",
"Battle of Roabeuge",
"Battle of Épibonne",
"Battle of Poilon",
"Battle of Badago",
"Battle of Barcencia",
"Battle of Luguna",
"Battle of Bavedra",
"Battle of Telencia",
"Battle of Tenegoza",
"Battle of Castesia",
"Battle of Sanse",
"Battle of Vateixo",
"Battle of Poruña"
    ];

    const randomIndex = Math.floor(Math.random() * battleTitles.length);
    const randomTitle = battleTitles[randomIndex];
    
    document.getElementById('battle-title').value = randomTitle;
  }

  document.getElementById('random-title-button').addEventListener('click', generateRandomTitle);
  
// Generate Random Commander Names
		
  function generateRandomName(inputId) {
    const names = [
"Charles de Lampière",
"Robert Montgomery",
"Albèrt Disney",
"Fulque Le Grant",
"Willelme Dyel",
"Thiry Caillot",
"Charles Bernard",
"Anscher de La Hay",
"Fllipin Louis",
"Guillelme Tracey",
"Robert Peletoot",
"Samuel Holcot",
"Cleeve Babyngton",
"Alexander Asplyn",
"Thomas Bradbridge",
"Adam Hussey",
"Dennis Waldeley",
"Joseph Attilburgh",
"Christopher Lowthe",
"Stephen Newdegate",
"Alan Bacon",
"Gerard Boote",
"Philips Ayde",
"Nicholas Brudenell",
"Henry Reynesford",
"Miles Saunders",
"Rolf Thomas",
"Sampson Churmound",
"Laurence Shevington",
"Joscelin Philips",
"Dreue Lefrançois",
"Nicolaus Jeannin",
"Denis Malet",
"Jaquob Pernet",
"Philippot Boisselot",
"Girard Calvet",
"Gieffroy Colbert",
"Sanson Lozé",
"Richard Granet",
"Marquet Bissonnette",
"Christopher Krummen",
"Jobst Murere",
"Ladich Sprengers",
"Jürgenn von Gerach",
"Christoffer Lugglins",
"Anton Fuchs",
"Friedrich von Wickten",
"Markus von Tettingen",
"Johanneß Zorrers",
"Gottfried Wirtz",
"Daniele de Accora",
"Uguccione Giustiniani",
"Guido Albaregno",
"Betto Capello",
"Leonello Fiolo",
"Chimento Michiel",
"Bonino Trevisan",
"Roberto Donato",
"Gentile Albarenno",
"Priore Acciaioli",
"Almeyque de Alarçio",
"Lucas de Sant Martin",
"Fernando de Padilla",
"Gavriel de Çuaçola",
"Alexandre Pina",
"Remon de la Huerta",
"Hortuñño de Arana",
"Ambrosio de Tolosa",
"Manrrique Galvan",
"Garçilaso de Andino",
"Torcadall MacCoinnich",
"Seonaidh Loganach",
"Padean Grannda",
"Ailpean MacAodhagain",
"Risteard MacMhàrtainn",
"Solamh Cearrach",
"Friseal MacCòmhghan",
"Pàrlan Grannda",
"Seaghdh MacSual",
"Steaphan Caimbeulach",
"Parvan Stasov",
"Draha Jakes",
"Wojtek Vinogradsky",
"Strahimir Kondratiev",
"Vojnomir Pasic",
"Brencis Puvaca",
"Varban Grabowsky",
"Dubravko Jelinek",
"Prvan Mucibaba",
"Mijomir Stojanovska",
"Marc de La Mare",
"Haralt Godefroy",
"Baptiste de Caulmont",
"Robèrt Baro",
"Turbert Dufour",
"Mar Ilbert",
"Fllocé Aubert",
"Herbert de Montgomery",
"Osbert Le Masson",
"Turbert Corbett",
"Rainalt Deschamps",
"Thiry Halkett",
"Êdouard d'Ambray",
"Tancrède de Lorraine",
"Erkenger Drury",
"Raimund Cavelier",
"Pierre Bouchard",
"Turbern Large",
"Turchetil Daugherty",
"Hugue Durjardin",
"Baldwin Blancbaston",
"Anthony Fitz Norman",
"Widmund de Seyssel",
"Pierrot Malet",
"Barnabé de Montchrestien",
"Jozelin Du Thuict",
"Frédo Seymour",
"Urse de Challon",
"Henri de Faicterau",
"Gundulf Luci",
"Sarles Pasquier",
"Everart Margas",
"Arnald de Saussay",
"Rainald Centsols",
"Félix Maignart",
"Seinfreid de Blays",
"Laurens Seymour",
"Godfreid Hue",
"Gozelin Martel",
"Rainbalt de Bethencourt",
"Lucian Von Nordlingen",
"Alaric Giengen",
"David Staehillins",
"Johannes Wahingerin",
"Joseph Schuchmacher",
"Reimund Naeyer",
"Goddard Louchers",
"Everard Zellerin",
"Adalbert Lendlin",
"Roderick Bapplins"
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    document.getElementById(inputId).value = randomName;
  }

  document.getElementById('random-att-commander-button').addEventListener('click', function() {
    generateRandomName('att-commander');
  });

  document.getElementById('random-def-commander-button').addEventListener('click', function() {
    generateRandomName('def-commander');
  });

// Generate Random Notable Names

  const attackerNames = [
"Auguinare de Lampérière",
"Robert Montgomery",
"Albèrt Disney",
"Fulque Le Grant",
"Willelme Dyel",
"Thiry Caillot",
"Charles Bernard",
"Anscher de La Hay",
"Fllipin Louis",
"Guillelme Tracey",
"Robert Peletoot",
"Samuel Holcot",
"Cleeve Babyngton",
"Alexander Asplyn",
"Thomas Bradbridge",
"Adam Hussey",
"Dennis Waldeley",
"Joseph Attilburgh",
"Christopher Lowthe",
"Stephen Newdegate",
"Alan Bacon",
"Gerard Boote",
"Philips Ayde",
"Nicholas Brudenell",
"Henry Reynesford",
"Miles Saunders",
"Rolf Thomas",
"Sampson Churmound",
"Laurence Shevington",
"Joscelin Philips",
"Dreue Lefrançois",
"Nicolaus Jeannin",
"Denis Malet",
"Jaquob Pernet",
"Philippot Boisselot",
"Girard Calvet",
"Gieffroy Colbert",
"Sanson Lozé",
"Richard Granet",
"Marquet Bissonnette",
"Christopher Krummen",
"Jobst Murere",
"Ladich Sprengers",
"Jürgenn von Gerach",
"Christoffer Lugglins",
"Anton Fuchs",
"Friedrich von Wickten",
"Markus von Tettingen",
"Johanneß Zorrers",
"Gottfried Wirtz",
"Daniele de Accora",
"Uguccione Giustiniani",
"Guido Albaregno",
"Betto Capello",
"Leonello Fiolo",
"Chimento Michiel",
"Bonino Trevisan",
"Roberto Donato",
"Gentile Albarenno",
"Priore Acciaioli",
"Almeyque de Alarçio",
"Lucas de Sant Martin",
"Fernando de Padilla",
"Gavriel de Çuaçola",
"Alexandre Pina",
"Remon de la Huerta",
"Hortuñño de Arana",
"Ambrosio de Tolosa",
"Manrrique Galvan",
"Garçilaso de Andino",
"Torcadall MacCoinnich",
"Seonaidh Loganach",
"Padean Grannda",
"Ailpean MacIllAodhagain",
"Risteard MacIlleMhàrtainn",
"Solamh Cearrach",
"Friseal MacCòmhghan",
"Pàrlan Grannda",
"Seaghdh MacSual",
"Steaphan Caimbeulach",
"Parvan Stasov",
"Draha Jakes",
"Wojtek Vinogradsky",
"Strahimir Kondratiev",
"Vojnomir Pasic",
"Brencis Puvaca",
"Varban Grabowsky",
"Dubravko Jelinek",
"Prvan Mucibaba",
"Mijomir Stojanovska",
"Alan Blakwall",
"Nigel Fitzherbert",
"Denis Harryses",
"Cuthbert Noke",
"Thomas Stocks",
"Luke Arnold",
"Nicholas Swetecok",
"Matthew Boteler",
"Sigor Geffray",
"Alexander Horsey",
"Joseph Rowdon",
"Odo Kytson",
"Sewel Godfrey",
"Alan Demoke",
"Stewart Harley",
"Merewin Seger",
"Bartholomew Pen",
"Ludovic Stubbe",
"Andrew Kidwelly",
"Thurston Hardy",
"Laurence Williams",
"Norman Acworth",
"Jacob Montagu",
"Swain Pennebrygg",
"Gregory Evyngar",
"Aelric Dyneley",
"Daniel Chanceler",
"Lancelot Blundell",
"Thori Beauchamp",
"Gawain Pole",
"Malger Vavasour",
"Rainalt d'Ambray",
"Dannié De Felius",
"Roger Du Thuict",
"William Asselin",
"Odes de Mesniel",
"Rainbald Chamberlain",
"Louothains de Bourgueville",
"Jozelme de Viuepont",
"Rodalt Du Gouey",
"Richer Martel",
"Seinfrei Hue",
"Turulf de Lacy",
"German de Moustiers",
"Cénéric Mayeux",
"Widmund Carter",
"Ansfreid Bouchard",
"Âbréhan Roger",
"Warin de Servian",
"Cliément Grouchet"
  ];

  const defenderNames = [
"Auguinare de Lampérière",
"Robert Montgomery",
"Albèrt Disney",
"Fulque Le Grant",
"Willelme Dyel",
"Thiry Caillot",
"Charles Bernard",
"Anscher de La Hay",
"Fllipin Louis",
"Guillelme Tracey",
"Robert Peletoot",
"Samuel Holcot",
"Cleeve Babyngton",
"Alexander Asplyn",
"Thomas Bradbridge",
"Adam Hussey",
"Dennis Waldeley",
"Joseph Attilburgh",
"Christopher Lowthe",
"Stephen Newdegate",
"Alan Bacon",
"Gerard Boote",
"Philips Ayde",
"Nicholas Brudenell",
"Henry Reynesford",
"Miles Saunders",
"Rolf Thomas",
"Sampson Churmound",
"Laurence Shevington",
"Joscelin Philips",
"Dreue Lefrançois",
"Nicolaus Jeannin",
"Denis Malet",
"Jaquob Pernet",
"Philippot Boisselot",
"Girard Calvet",
"Gieffroy Colbert",
"Sanson Lozé",
"Richard Granet",
"Marquet Bissonnette",
"Christopher Krummen",
"Jobst Murere",
"Ladich Sprengers",
"Jürgenn von Gerach",
"Christoffer Lugglins",
"Anton Fuchs",
"Friedrich von Wickten",
"Markus von Tettingen",
"Johanneß Zorrers",
"Gottfried Wirtz",
"Daniele de Accora",
"Uguccione Giustiniani",
"Guido Albaregno",
"Betto Capello",
"Leonello Fiolo",
"Chimento Michiel",
"Bonino Trevisan",
"Roberto Donato",
"Gentile Albarenno",
"Priore Acciaioli",
"Almeyque de Alarçio",
"Lucas de Sant Martin",
"Fernando de Padilla",
"Gavriel de Çuaçola",
"Alexandre Pina",
"Remon de la Huerta",
"Hortuñño de Arana",
"Ambrosio de Tolosa",
"Manrrique Galvan",
"Garçilaso de Andino",
"Torcadall MacCoinnich",
"Seonaidh Loganach",
"Padean Grannda",
"Ailpean MacIllAodhagain",
"Risteard MacIlleMhàrtainn",
"Solamh Cearrach",
"Friseal MacCòmhghan",
"Pàrlan Grannda",
"Seaghdh MacSual",
"Steaphan Caimbeulach",
"Parvan Stasov",
"Draha Jakes",
"Wojtek Vinogradsky",
"Strahimir Kondratiev",
"Vojnomir Pasic",
"Brencis Puvaca",
"Varban Grabowsky",
"Dubravko Jelinek",
"Prvan Mucibaba",
"Mijomir Stojanovska",
"Alan Blakwall",
"Nigel Fitzherbert",
"Denis Harryses",
"Cuthbert Noke",
"Thomas Stocks",
"Luke Arnold",
"Nicholas Swetecok",
"Matthew Boteler",
"Sigor Geffray",
"Alexander Horsey",
"Joseph Rowdon",
"Odo Kytson",
"Sewel Godfrey",
"Alan Demoke",
"Stewart Harley",
"Merewin Seger",
"Bartholomew Pen",
"Ludovic Stubbe",
"Andrew Kidwelly",
"Thurston Hardy",
"Laurence Williams",
"Norman Acworth",
"Jacob Montagu",
"Swain Pennebrygg",
"Gregory Evyngar",
"Aelric Dyneley",
"Daniel Chanceler",
"Lancelot Blundell",
"Thori Beauchamp",
"Gawain Pole",
"Malger Vavasour",
"Rainalt d'Ambray",
"Dannié De Felius",
"Roger Du Thuict",
"William Asselin",
"Odes de Mesniel",
"Rainbald Chamberlain",
"Louothains de Bourgueville",
"Jozelme de Viuepont",
"Rodalt Du Gouey",
"Richer Martel",
"Seinfrei Hue",
"Turulf de Lacy",
"German de Moustiers",
"Cénéric Mayeux",
"Widmund Carter",
"Ansfreid Bouchard",
"Âbréhan Roger",
"Warin de Servian",
"Cliément Grouchet"
  ];

  function generateRandomNames(names, inputId) {
	  const randomCount = Math.floor(Math.random() * 4) + 3; // Generate a random count between 3 and 6
	  const randomNames = [];

    for (let i = 0; i < randomCount; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      const randomName = names[randomIndex];
      randomNames.push(randomName);
    }

    document.getElementById(inputId).value = randomNames.join(", ");
  }

  document.getElementById('random-attackers-button').addEventListener('click', function() {
    generateRandomNames(attackerNames, 'attackers');
  });

  document.getElementById('random-defenders-button').addEventListener('click', function() {
    generateRandomNames(defenderNames, 'defenders');
  });
  
// Generate Random Army names
		
  const attackerFactionNames = [
"Garrison of Klagenfelden",
"Forces of Zaltstadt",
"Army of Basinspell",
"Garrison of Chobéliard",
"Rebels from Cueciras",
"Army of Colmur",
"Garrison of Oviejón",
"Forces of Plettensloh",
"Force from Cartatava",
"Rebels from Angouteaux",
"Garrison of Bansloe",
"Forces of Eshus",
"Army of Balava",
"Force from Colollon",
"Garrison of Vadros",
"Rebels from Gammellev",
"Force from Biaburg",
"Garrison of Moorhey",
"Army of Thornthorpe",
"Force from Newmere",
"Rebels from Woolthorpe",
"Garrison of Portsden",
"Army of Hopport",
"Forces of Oulthwaite",
"Garrison of Barbrook",
"Force from Oulbrook",
"Rebels from Keldford",
"Army of Foxburn",
"Garrison of Norburgh",
"Rebels from Langhampton",
"Force from Woolthorpe",
"Army of Birchburn",
"Garrison of Portsmouth",
"Force from Oakmouth",
"Rebels from Foxchester",
"Garrison of Marsford",
"Forces of Oakmarsh",
"Force from Ilcaster",
"Rebels from Langchester",
"Force from Newford",
"Garrison of Eastdon",
"Army of Great Redbrook",
"Rebels from Oakford",
"Force from Langden",
"Garrison from Westfold",
"Rebels from Overthorpe",
"Garrison of Loxwell",
"Forces of Langwood",
"Rebels from Keldlea",
"Army of Hartworth",
"Force from Guildby",
"Rebels from Otterington",
"Army of Blackham",
"Garrison of Moordale",
"Force from Whitefield",
"Garrison of Hazelthwaite",
"Rebels from Harthorpe",
"Forces of Southfold",
"Garrison of Henley",
"Rebels from Westwell",
"Army of Ilhey",
"Garrison of Thornwick",
"Rebels from Hartden",
"Force from Middleton",
"Garrison of Hopthwaite",
"Rebels from Eastfold",
"Army of Oxbrook",
"Garrison of Moorhurst",
"Rebels from Hindfield",
"Forces of Birchwell",
"Garrison of Overwood",
"Force from Southmere",
"Rebels from Barwick",
"Army of Redworth",
"Garrison of Marsport",
"Rebels from Northbeck",
"Army of Overington",
"Force from Hazelington",
"Garrison of Woolthorpe",
"Rebels from Keldhalgh",
"Army of Northburn",
"Garrison of Southhampton",
"Force from Hartwich",
"Rebels from Preshampton",
"Garrison of Kinpool",
"Forces of Whiteholm",
"Force from Oakfield",
"Army of Oxthwaite",
"Rebels from Redthorpe",
"Garrison of Hindbury",
"Army of Kircaster",
"Rebels from Presmarsh",
"Garrison of Foxhey",
"Force from Ashpool",
"Rebels from Loxfield",
"Garrison of Barburgh",
"Garrison of Westwell",
"Army of Westthorpe",
"Garrison of Hartmarsh",
"Rebels from Norwike",
"Army of Henmere",
"Garrison of Langpool",
"Rebels from Birchhall",
"Force from Whitedon",
"Army of Oxburgh",
"Garrison of Oullea",
"Force from Redhaven",
"Rebels from Thorpe",
"Rebels from Dunmoor",
"Garrison of Oxbeck",
"Force from Whiteport",
"Army of Norcaster"
  ];

  const defenderFactionNames = [
"Garrison of Klagenfelden",
"Forces of Zaltstadt",
"Army of Basinspell",
"Garrison of Chobéliard",
"Rebels from Cueciras",
"Army of Colmur",
"Garrison of Oviejón",
"Forces of Plettensloh",
"Force from Cartatava",
"Rebels from Angouteaux",
"Garrison of Bansloe",
"Forces of Eshus",
"Army of Balava",
"Force from Colollon",
"Garrison of Vadros",
"Rebels from Gammellev",
"Force from Biaburg",
"Garrison of Moorhey",
"Army of Thornthorpe",
"Force from Newmere",
"Rebels from Woolthorpe",
"Garrison of Portsden",
"Army of Hopport",
"Forces of Oulthwaite",
"Garrison of Barbrook",
"Force from Oulbrook",
"Rebels from Keldford",
"Army of Foxburn",
"Garrison of Norburgh",
"Rebels from Langhampton",
"Force from Woolthorpe",
"Army of Birchburn",
"Garrison of Portsmouth",
"Force from Oakmouth",
"Rebels from Foxchester",
"Garrison of Marsford",
"Forces of Oakmarsh",
"Force from Ilcaster",
"Rebels from Langchester",
"Force from Newford",
"Garrison of Eastdon",
"Army of Great Redbrook",
"Rebels from Oakford",
"Force from Langden",
"Garrison from Westfold",
"Rebels from Overthorpe",
"Garrison of Loxwell",
"Forces of Langwood",
"Rebels from Keldlea",
"Army of Hartworth",
"Force from Guildby",
"Rebels from Otterington",
"Army of Blackham",
"Garrison of Moordale",
"Force from Whitefield",
"Garrison of Hazelthwaite",
"Rebels from Harthorpe",
"Forces of Southfold",
"Garrison of Henley",
"Rebels from Westwell",
"Army of Ilhey",
"Garrison of Thornwick",
"Rebels from Hartden",
"Force from Middleton",
"Garrison of Hopthwaite",
"Rebels from Eastfold",
"Army of Oxbrook",
"Garrison of Moorhurst",
"Rebels from Hindfield",
"Forces of Birchwell",
"Garrison of Overwood",
"Force from Southmere",
"Rebels from Barwick",
"Army of Redworth",
"Garrison of Marsport",
"Rebels from Nether Northbeck",
"Army of Overington",
"Force from Hazelington",
"Garrison of Woolthorpe",
"Rebels from Keldhalgh",
"Army of Northburn",
"Garrison of Southhampton",
"Force from Hartwich",
"Rebels from Preshampton",
"Garrison of Kinpool",
"Forces of Whiteholm",
"Force from Oakfield",
"Army of Oxthwaite",
"Rebels from Redthorpe",
"Garrison of Hindbury",
"Army of Kircaster",
"Rebels from Presmarsh",
"Garrison of Foxhey",
"Force from Ashpool",
"Rebels from Loxfield",
"Garrison of Barburgh",
"Garrison of Westwell",
"Army of Westthorpe",
"Garrison of Hartmarsh",
"Rebels from Norwike",
"Army of Henmere",
"Garrison of Langpool",
"Rebels from Birchhall",
"Force from Whitedon",
"Army of Oxburgh",
"Garrison of Oullea",
"Force from Redhaven",
"Rebels from Thorpe",
"Rebels from Dunmoor",
"Garrison of Oxbeck",
"Force from Whiteport",
"Army of Norcaster"
  ];

  function generateRandomFactionName(factionNames, inputId) {
    const randomIndex = Math.floor(Math.random() * factionNames.length);
    const randomFactionName = factionNames[randomIndex];

    document.getElementById(inputId).value = randomFactionName;
  }

  document.getElementById('random-attacker-title-button').addEventListener('click', function() {
    generateRandomFactionName(attackerFactionNames, 'attacker-title');
  });

  document.getElementById('random-defender-title-button').addEventListener('click', function() {
    generateRandomFactionName(defenderFactionNames, 'defender-title');
  });
  

// Select Random Scenario

  const scenarioOptions = [
    "Plains",
    "Hills",
    "Forest",
    "Mountains",
    "Marsh",
    "Desert",
    "Siege",
    "Ambush",
    "CampRaid",
    "RiverCrossing",
    "BridgeCrossing",
    "NavalLanding"
  ];

  function generateRandomScenario() {
    const randomIndex = Math.floor(Math.random() * scenarioOptions.length);
    const randomScenario = scenarioOptions[randomIndex];

    document.getElementById("terrain").value = randomScenario;
  }

  document.getElementById("random-scenario-button").addEventListener('click', generateRandomScenario);
  
  // Keep track of the last selected preset for each army
  var lastSelectedAttPreset = "att-default";
  var lastSelectedDefPreset = "def-default";

  // Preset Attacker Army Values
  function applyPresetAttArmy() {
    var selectedPreset = document.getElementById("att-preset-army").value;
    if (selectedPreset !== lastSelectedAttPreset) {
      applyPresetArmy(selectedPreset, "att");
      lastSelectedAttPreset = selectedPreset; // Update the last selected preset
    }
  }

  // Preset Defender Army Values
  function applyPresetDefArmy() {
    var selectedPreset = document.getElementById("def-preset-army").value;
    if (selectedPreset !== lastSelectedDefPreset) {
      applyPresetArmy(selectedPreset, "def");
      lastSelectedDefPreset = selectedPreset; // Update the last selected preset
    }
  }

  function applyPresetArmy(selectedPreset, armyType) {
    // Define the troop ranges for each preset
    var presetTroopRanges = {
      "att-default": {},
      "att-medieval-europe": {
        "knights": { min: 1500, max: 2000 },
        "lightcav": { min: 200, max: 500 },
        "archers": { min: 400, max: 600 },
        "crossbow": { min: 400, max: 700 },
        "infantry": { min: 300, max: 1800 },
        "pikemen": { min: 300, max: 1800 },
        "skirmishers": { min: 200, max: 500 },
        "levy": { min: 1500, max: 4000 },
        // Add more troop types and their corresponding min/max values as needed
      },
      "att-mongols": {
        "knights": { min: 2000, max: 2500 },
        "lightcav": { min: 2000, max: 4000 },
        "cavarcher": { min: 4000, max: 7000 },
        // Add more troop types and their corresponding min/max values as needed
      },
      "att-medieval-europe-peasant": {
        "knights": { min: 0, max: 200 },
        "lightcav": { min: 0, max: 400 },
        "archers": { min: 300, max: 400 },
        "crossbow": { min: 400, max: 700 },
        "infantry": { min: 400, max: 850 },
        "pikemen": { min: 400, max: 1000 },
        "skirmishers": { min: 200, max: 600 },
        "levy": { min: 2000, max: 7000 },
      },
      "att-medieval-europe-early": {
        "knights": { min: 0, max: 500 },
        "lightcav": { min: 500, max: 1500 },
        "archers": { min: 400, max: 500 },
        "infantry": { min: 2000, max: 6000 },
        "skirmishers": { min: 200, max: 600 },
        "levy": { min: 3000, max: 8000 },
      },
      "att-medieval-europe-late": {
        "knights": { min: 3000, max: 5000 },
        "lightcav": { min: 1000, max: 2000 },
        "archers": { min: 2500, max: 4000 },
        "crossbow": { min: 2000, max: 3000 },
        "infantry": { min: 2000, max: 3000 },
        "pikemen": { min: 2000, max: 300 },
        "skirmishers": { min: 500, max: 1000 },
        "halberd": { min: 2000, max: 3000 },
        "handgunner": { min: 500, max: 1500 },
        "lightguns": { min: 20, max: 100 },
      },
      "def-default": {},
      "def-medieval-europe": {
        "knights": { min: 1500, max: 2000 },
        "lightcav": { min: 200, max: 500 },
        "archers": { min: 400, max: 600 },
        "crossbow": { min: 400, max: 700 },
        "infantry": { min: 300, max: 1800 },
        "pikemen": { min: 300, max: 1800 },
        "skirmishers": { min: 200, max: 500 },
        "levy": { min: 1500, max: 4000 },
        // Add more troop types and their corresponding min/max values as needed
      },
      "def-mongols": {
        "knights": { min: 2000, max: 2500 },
        "lightcav": { min: 2000, max: 4000 },
        "cavarcher": { min: 4000, max: 7000 },
        // Add more troop types and their corresponding min/max values as needed
      },
      "def-medieval-europe-peasant": {
        "knights": { min: 0, max: 200 },
        "lightcav": { min: 0, max: 400 },
        "archers": { min: 300, max: 400 },
        "crossbow": { min: 400, max: 700 },
        "infantry": { min: 400, max: 850 },
        "pikemen": { min: 400, max: 1000 },
        "skirmishers": { min: 200, max: 600 },
        "levy": { min: 2000, max: 7000 },
      },
      "def-medieval-europe-early": {
        "knights": { min: 0, max: 500 },
        "lightcav": { min: 500, max: 1500 },
        "archers": { min: 400, max: 500 },
        "infantry": { min: 2000, max: 6000 },
        "skirmishers": { min: 200, max: 600 },
        "levy": { min: 3000, max: 8000 },
      },
  "def-medieval-europe-late": {
    "knights": { min: 3000, max: 5000 },
    "lightcav": { min: 1000, max: 2000 },
    "archers": { min: 2500, max: 4000 },
    "crossbow": { min: 2000, max: 3000 },
    "infantry": { min: 2000, max: 3000 },
    "pikemen": { min: 2000, max: 300 },
    "skirmishers": { min: 500, max: 1000 },
    "halberd": { min: 2000, max: 3000 },
    "handgunner": { min: 500, max: 1500 },
    "lightguns": { min: 20, max: 100 },
  },
      // Add more preset armies and their troop ranges as needed
    };

    // Reset only the troop values for the corresponding army type to zero
    setAllTroopNumbersToZero(armyType);

    // Set troop numbers based on the selected preset and their unique random range
    var troopRanges = presetTroopRanges[selectedPreset];
    if (troopRanges) {
      for (var troopType in troopRanges) {
        setRandomTroopNumber(armyType + "-" + troopType, troopRanges[troopType], armyType);
      }
    }
  }

  function setRandomTroopNumber(troopId, range, armyType) {
    var randomNumber = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    document.getElementById(troopId).value = randomNumber;
    updateCumulativeTotal(armyType); // Call the function to update the cumulative total after setting troop numbers
  }

  function setAllTroopNumbersToZero(armyType) {
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
      if (input.id.startsWith(armyType)) {
        input.value = 0;
      }
    });
    updateCumulativeTotal(armyType); // Call the function to update the cumulative total after setting troop numbers
  }
  
  