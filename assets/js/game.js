var playerName = window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;


/*for(var i = 0; i < enemyNames.length; i++)
    {
        console.log(enemyNames[i]);
        console.log(i);
        console.log(enemyNames[i] + " is at " + i + " index");
    }*/

var fight = function(enemyName)
    {
            //repeat and execute as long as the enemy-robot is alive
        while(enemyHealth > 0 && playerHealth > 0)
            {
                    //window.alert ("Welcome to Robot Gladiators!");

                    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
            
            if (promptFight === "skip" || promptFight === "SKIP")   
                {
                //confirm player wants to skip
                var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
                }
            
            // if yes (true), leave fight
            if(confirmSkip)
                {
                    window.alert(playerName + " has decided to skip this fight. Coward!");
                    //subtract money from playerMoney for skipping
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney)
                }
                    //if player chooses to fight, then fight
            if(promptFight === "fight" || promptFight === "FIGHT")
                {
                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
                enemyHealth = enemyHealth - playerAttack;
                
                // Log a resulting message to the console so we know that it worked.
                console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
                
                //check enemy health
                if (enemyHealth <= 0)
                        {
                            window.alert(enemyName + " has died! ");
                            
                            //reward player for winning
                            playerMoney = playerMoney + 20
                            console.log("playerMoney", playerMoney)
                            break;
                        }
                else
                        {
                            window.alert(enemyName + " still has " + enemyHealth + " health left.")
                        }
                
                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
                playerHealth = playerHealth - enemyAttack;
                
                // Log a resulting message to the console so we know that it worked.
                console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");
                
                //check player health
                if (playerHealth <= 0)
                        {
                            window.alert(playerName + " has died!");
                            break;
                        }
                else   
                        {
                            window.alert(playerName + " still has " + playerHealth + " health left.");
                        }
                } 
                else
                    {
                        window.alert("Please choose a valid option");
                    }
           }
    };    
        for(var i = 0; i < enemyNames.length; i++)
            {
                var pickedEnemyName = enemyNames[i];
                enemyHealth = 50;
                fight(pickedEnemyName);
            }
        
       