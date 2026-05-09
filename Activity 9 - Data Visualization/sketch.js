let table;
function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}
function setup() {

  createCanvas(900, 600);
  background(240);

  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("NBA Player Stats 2025", width / 2, 40);

  fill(200);
  rect(20, 80, 260, 40);   
  rect(280, 80, 180, 40);  
  rect(460, 80, 100, 40);  
  rect(560, 80, 100, 40);  
  rect(660, 80, 100, 40);  

  //Header text
  fill(0);
  textSize(16);

  text("Player", 150, 100);
  text("Team", 370, 100);
  text("PPG", 510, 100);
  text("APG", 610, 100);
  text("RPG", 710, 100);


  for (let i = 0; i < table.getRowCount(); i++) {

    let player = table.getString(i, 'Player');
    let team = table.getString(i, 'Team');
    let ppg = table.getNum(i, 'PPG');
    let apg = table.getNum(i, 'APG');
    let rpg = table.getNum(i, 'RPG');

    let y = 120 + i * 40;

    //boxes
    fill(255);
    rect(20, y, 260, 40);
    rect(280, y, 180, 40);
    rect(460, y, 100, 40);
    rect(560, y, 100, 40);
    rect(660, y, 100, 40);

    //text
    fill(0);
    textSize(14);

    text(player, 150, y + 20);
    text(team, 370, y + 20);

    text(ppg, 510, y + 20);
    text(apg, 610, y + 20);
    text(rpg, 710, y + 20);

  }

}