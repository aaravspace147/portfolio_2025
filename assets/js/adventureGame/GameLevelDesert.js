// To build GameLevels, each contains GameObjects from below imports
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quiz from './Quiz.js';
import GameControl from './GameControl.js';
import GameLevelStarWars from './GameLevelStarWars.js';

class GameLevelDesert {
  constructor(gameEnv) {
    // Values dependent on this.gameEnv.create()
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_desert = path + "/images/gamify/cyberpunk_background.jpg"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the destopia!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy2_480.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };


    // NPC data for Tux 
    const sprite_src_tux = path + "/images/gamify/Untitled drawing.png"; // be sure to include the path
    const sprite_greet_tux = "Hi I am Cherry, the Cherry Villian.  I am very happy to spend some linux shell time with you!";
    const sprite_data_tux = {
        id: 'Tux',
        greeting: sprite_greet_tux,
        src: sprite_src_tux,
        SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        quiz: { 
          title: "Linux Command Quiz",
          questions: [
            "Which command is used to scan the archives of the Fallen Civilization?\n1. ls\n2. dir\n3. list\n4. show",
            "Which command is used to traverse the ruins of the Old World?\n1. cd\n2. chdir\n3. changedir\n4. changedirectory",
            "Which command is used to establish a new outpost for the Resistance?\n1. mkdir\n2. newdir\n3. createdir\n4. makedir",
            "Which command is used to erase a classified document before it falls into enemy hands?\n1. rm\n2. remove\n3. delete\n4. erase",
            "Which command is used to dismantle an abandoned stronghold?\n1. rmdir\n2. removedir\n3. deletedir\n4. erasedir",
            "Which command is used to duplicate encrypted data before transmission?\n1. cp\n2. copy\n3. duplicate\n4. xerox",
            "Which command is used to transfer sensitive files to a secure vault?\n1. mv\n2. move\n3. transfer\n4. relocate",
            "Which command is used to decrypt and reveal the contents of a lost manuscript?\n1. cat\n2. view\n3. show\n4. display",
            "Which command is used to uncover hidden messages buried within ancient texts?\n1. grep\n2. search\n3. find\n4. locate",
            "Which command is used to access fragments of the Forbidden Knowledge?\n1. less\n2. more\n3. view\n4. cat" 
          ] 
        },
        reaction: function() {
          alert(sprite_greet_tux);
        },
        interact: function() {
          let quiz = new Quiz(); // Create a new Quiz instance
          quiz.initialize();
          quiz.openPanel(sprite_data_tux.quiz);
          }
    
      };

      const sprite_src_colllision = path + "/images/gamify/download(3).jpeg"; // be sure to include the path
      const sprite_data_collision = {
          id: 'Collision',
          greeting: "Hi, to move on in this game, you must answer some questions about the sport of coding. Press e to answer!",
          src: sprite_src_colllision,
          SCALE_FACTOR: 5,  // Adjust this based on your scaling needs
          ANIMATION_RATE: 50,
          pixels: {height: 128, width: 128},
          INIT_POSITION: { x: (width / 6), y: (height * 1/6)},
          orientation: {rows: 1, columns: 1 },
          down: {row: 1, start: 0, columns: 1 },  // This is the stationary npc, down is default 
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
          // Linux command quiz
          quiz: {
            "title": "Coding Quiz",
            "questions": [
              "Which data structure follows Last In, First Out (LIFO) principle?\n1. Queue\n2. Stack\n3. Linked List\n4. Heap",  
              "What is the time complexity of searching an element in a balanced binary search tree (BST)?\n1. O(1)\n2. O(log n)\n3. O(n)\n4. O(n log n)",  
              "Which of the following is NOT a valid variable name in Java?\n1. _myVariable\n2. 1stVariable\n3. $money\n4. camelCase",  
              "What does the following JavaScript code output?\nconsole.log(typeof null);\n1. 'null'\n2. 'undefined'\n3. 'object'\n4. 'string'",  
              "In SQL, which command is used to remove all records from a table without deleting the table itself?\n1. DELETE\n2. DROP\n3. TRUNCATE\n4. REMOVE",  
              "What is the output of the following C code?\n#include <stdio.h>\nint main() { int x = 5; printf('%d', x++); return 0; }\n1. 4\n2. 5\n3. 6\n4. Undefined behavior",  
              "What will be the output of this Python code?\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n1. [1, 2, 3]\n2. [1, 2, 3, 4]\n3. [1, 2, 3], [1, 2, 3, 4]\n4. Error",  
              "What does the len() function return when applied to a dictionary in Python?\n1. Number of keys\n2. Number of values\n3. Number of key-value pairs\n4. The size in bytes",  
              "What will be the output of this JavaScript snippet?\nconsole.log(0 == '0');\nconsole.log(0 === '0');\n1. true, true\n2. false, false\n3. true, false\n4. false, true",  
              "Which sorting algorithm has the worst-case time complexity of O(n²)?\n1. Merge Sort\n2. Quick Sort\n3. Bubble Sort\n4. Heap Sort"  
            ]
          }        
        }; 

      // NPC data for Octocat
      const sprite_src_octocat = path + "/images/gamify/demon.png"; // be sure to include the path
      const sprite_greet_octocat = "Hi I am Octocat! I am the GitHub code code code collaboration mascot";
      const sprite_data_octocat = {
        id: 'Octocat',
        greeting: sprite_greet_octocat,
        src: sprite_src_octocat,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 801, width: 801},
        INIT_POSITION: { x: (width / 4), y: (height / 4)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        // GitHub command quiz 
        quiz: { 
          title: "Dystopian Git Command Quiz",
          questions: [
            "Which command is used to replicate the encrypted archives of the Resistance?\n1. git clone\n2. git fork\n3. git copy\n4. git download",
            "Which command is used to mark data for synchronization with the Rebellion’s central server?\n1. git add\n2. git stage\n3. git commit\n4. git push",
            "Which command is used to finalize transmissions before they are sent to the Resistance?\n1. git commit\n2. git add\n3. git save\n4. git push",
            "Which command is used to transmit encrypted messages to the Resistance’s mainframe?\n1. git push\n2. git upload\n3. git send\n4. git commit",
            "Which command is used to retrieve intelligence updates from the Rebel network?\n1. git pull\n2. git fetch\n3. git receive\n4. git update",
            "Which command is used to analyze the status of the Resistance’s encrypted files?\n1. git status\n2. git check\n3. git info\n4. git log",
            "Which command is used to establish a new faction within the Resistance?\n1. git branch\n2. git create-branch\n3. git new-branch\n4. git checkout",
            "Which command is used to infiltrate a different sector of the Resistance?\n1. git checkout\n2. git switch\n3. git change-branch\n4. git branch",
            "Which command is used to unite separate factions of the Resistance?\n1. git merge\n2. git combine\n3. git join\n4. git integrate",
            "Which command is used to decrypt the archives of past Resistance operations?\n1. git log\n2. git history\n3. git commits\n4. git show"
          ] 
        },
        reaction: function() {
          alert(sprite_greet_octocat);
        },
        interact: function() {
          let quiz = new Quiz(); // Create a new Quiz instance
          quiz.initialize();
          quiz.openPanel(sprite_data_octocat.quiz);
        }
    }
  

    const sprite_src_robot = path + "/images/gamify/robot.png"; // be sure to include the path
    const sprite_greet_robot = "Hi I am Robot, the Jupyter Notebook mascot.  I am very happy to spend some linux shell time with you!";
    const sprite_data_robot = {
      id: 'Robot',
      greeting: sprite_greet_robot,
      src: sprite_src_robot,
      SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
      ANIMATION_RATE: 100,
      pixels: {height: 316, width: 627},
      INIT_POSITION: { x: (width * 3 / 4), y: (height * 1 / 4)},
      orientation: {rows: 3, columns: 6 },
      down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      // Linux command quiz
      quiz: { 
        title: "Jupyter Notebook Command Quiz",
        questions: [
          "Which shortcut is used to execute a command in the Resistance’s encrypted terminal?\n1. Shift + Enter\n2. Ctrl + Enter\n3. Alt + Enter\n4. Tab + Enter",
          "Which shortcut deploys a new command module above the current one?\n1. A\n2. B\n3. C\n4. D",
          "Which shortcut deploys a new command module below the current one?\n1. B\n2. A\n3. C\n4. D",
          "Which shortcut encodes the current transmission into ciphered text?\n1. M\n2. Y\n3. R\n4. K",
          "Which shortcut switches the terminal back to raw command mode?\n1. Y\n2. M\n3. C\n4. D",
          "Which shortcut purges the active module from the Resistance’s system?\n1. D, D\n2. X\n3. Del\n4. Ctrl + D",
          "Which shortcut archives the Resistance’s current findings?\n1. Ctrl + S\n2. Alt + S\n3. Shift + S\n4. Tab + S",
          "Which shortcut initiates a full system reboot?\n1. 0, 0\n2. R, R\n3. K, K\n4. Shift + R",
          "Which shortcut sends an emergency signal to halt the mainframe?\n1. I, I\n2. Ctrl + C\n3. Shift + I\n4. Alt + I",
          "Which shortcut reveals the hidden sequence markers in encrypted logs?\n1. L\n2. N\n3. T\n4. G"
        ] 
      },
      reaction: function() {
        alert(sprite_greet_robot);
      },
      interact: function() {
        let quiz = new Quiz(); // Create a new Quiz instance
        quiz.initialize();
        quiz.openPanel(sprite_data_robot.quiz);
      }
    }

    // NPC Data for R2D2
    const sprite_src_r2d2 = path + "/images/gamify/walkingboy.png"; // Ensure correct path
const sprite_greet_r2d2 = "Hi I am R2D2. Leave this planet and help defend the rebel base on Hoth!";

const sprite_data_r2d2 = {
  id: 'StarWarsR2D2',
  greeting: sprite_greet_r2d2,
  src: sprite_src_r2d2,
  SCALE_FACTOR: 5,  // Adjust this for proper scaling
  ANIMATION_RATE: 100,
  pixels: { width: 500, height: 500 },  // Fixed dimensions
  INIT_POSITION: { x: (width * 1 / 4), y: (height * 3 / 4) }, // Adjusted position
  orientation: { rows: 1, columns: 3 },
  down: { row: 0, start: 0, columns: 3 },  // Fixed typo (columnss → columns)
  hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },

  /* Reaction function */
  reaction: function() {
    alert(sprite_greet_r2d2);
  },
}

    // List of objects defnitions for this level
    this.classes = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_octocat },
      { class: Npc, data: sprite_data_robot },
      { class: Npc, data: sprite_data_r2d2 },
      { class: Npc, data: sprite_data_collision},
    ];
    
  }

}

export default GameLevelDesert;