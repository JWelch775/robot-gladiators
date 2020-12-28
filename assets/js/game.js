var playerName = window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack = 25;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;


var fight = function(enemyName)
    {
            //repeat and execute as long as the enemy-robot is alive
        while(enemyHealth > 0 && playerHealth > 0)
            {
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
        
    var startGame = function()
        {
            playerHealth = 100;
            playerAttack = 25;
            playerMoney = 10;

            for(var i = 0; i < enemyNames.length; i++)
                {
                    if(playerHealth > 0)
                        {
                            //player round
                            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                            //pick new enemy to fight based on the index of the enemyNames array
                            var pickedEnemyName = enemyNames[i];
                            //reset enemyHealth
                            enemyHealth = 50;
                            //passed pickedEnemyName value into fight function
                            fight(pickedEnemyName);
                        }
                    else    
                        {
                            window.alert("You have lost your robot in battle! Game over!");
                            break;
                        }
                }
                //play again 
                endGame();
        };

    var endGame = function()
            {
                //if player is still alive, player wins!
                if(playerHealth > 0)
                    {
                        window.alert("great job, you've survived the game! You now have a score of " +playerMoney + ".")
                    }
                else
                    {
                        window.alert("The game has now ended. Let's see how you did");
                    }

                var playAgainConfirm = window.confirm("Would you like to play again?");

                if(playAgainConfirm)
                    {
                        //restart the game
                        startGame();
                    }
                else
                    {
                        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
                    }
            };
            startGame();
        
       