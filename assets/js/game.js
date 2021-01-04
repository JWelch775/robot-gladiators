var fight = function(enemy)
    {
        console.log(enemy);
            //repeat and execute as long as the enemy-robot is alive
        while(enemy.health > 0 && playerInfo.health > 0)
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
                        window.alert(playerInfo.name + " has decided to skip this fight. Coward!");
                        //subtract money from player Money for skipping
                        playerInfo.money = Math.max(0, playerInfo.money - 10);
                        console.log("player Money", playerInfo.money)
                        promptFight
                    }

                        //if player chooses to fight, then fight
                if(promptFight === "fight" || promptFight === "FIGHT")
                    {
                        console.log("enemy health is " + enemy.health)
                        //generate random damage value based on player's attack power
                        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

                        //Subtract the value of `player Attack` from the value of `enemy Health` and use that result to update the value in the `enemy.health` variable
                        enemy.health = Math.max(0, enemy.health - damage);
                        console.log("damage done is " + damage)
                        // Log a resulting message to the console so we know that it worked.
                        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
                        
                        //check enemy health
                        if (enemy.health <= 0)
                                {
                                    window.alert(enemy.name + " has died! ");
                                    
                                    //reward player for winning
                                    playerInfo.money = playerInfo.money + 20
                                    console.log("player money", playerInfo.money)
                                    break;
                                }
                        else
                                {
                                    window.alert(enemy.name + " still has " + enemy.health + " health left.")
                                }
                        
                        // Subtract the value of `enemy Attack` from the value of `player Health` and use that result to update the value in the `playerplayerInfo.health` variable.
                        var damage = randomNumber(enemy.attack - 3, enemy.attack);
                        
                       playerInfo.health = Math.max(0,playerInfo.health - damage);
                        console.log("damage done is " + damage)
                        // Log a resulting message to the console so we know that it worked.
                        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining");
                        
                        //check player health
                        if (playerInfo.health <= 0)
                                {
                                    window.alert(playerInfo.name + " has died!");
                                    break;
                                }
                        else   
                                {
                                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                                }
                    } 
                else
                    {
                        window.alert("Please choose a valid option");
                        promptFight
                    }
                
            }
    };    
        
    var startGame = function()
        {
            //reset player stats
           playerInfo.reset();

            for(var i = 0; i < enemyInfo.length; i++)
                {
                    if(playerInfo.health > 0)
                        {
                            //player round
                            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                            //pick new enemy to fight based on the index of the enemy Names array
                            var pickedEnemyObj = enemyInfo[i];
                            //reset enemy Health
                            pickedEnemyObj.health = randomNumber(40, 60);
                            //passed pickedEnemyObj value into fight function
                            fight(pickedEnemyObj);

                            //if we're not at the last enemy in the array
                            if(playerInfo.health > 0 && i < enemyInfo.length - 1)
                                {
                                    //ask if player wants to use the store before next round
                                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                                    //if yes, take them to the store() function
                                    if(storeConfirm)
                                        {
                                            shop();
                                        }
                                }
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
                if(playerInfo.health > 0)
                    {
                        window.alert("great job, you've survived the game! You now have a score of " +playerInfo.money + ".")
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
    var shop = function()
            {
                var shopOptionPrompt = window.prompt("Would you like to 'REFILL' your health, 'UPGRADE' your attack, or 'LEAVE' the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
                switch(shopOptionPrompt)
                    {
                        case "REFILL":
                        case "refill":
                            playerInfo.refillHealth();
                            break;

                        case "UPGRADE":
                        case "upgrade":
                            playerInfo.upgradeAttack();
                            break;

                        case "LEAVE":
                        case "leave":
                            window.alert("Leaving the store.");

                            //do nothing so function will end
                            break;

                        default:
                            window.alert("You did not pick a valid option. Try again.");

                            //call shop again to force players to choose a valid option
                            shop();
                            break;
                    }
            };

        var randomNumber = function(min, max)
            {
                var value = Math.floor(Math.random() * (max - min + 1) + min);

                return value;
            };

var playerInfo = 
    {
        name: window.prompt("What is your robot's name?"),
        health: 100,
        attack: 10,
        money: 10,
        reset: function()
            {
                this.health = 100;
                this.money = 10;
                this.attack = 10;
            },
            refillHealth: function()
                {
                    if(this.money >= 7)
                        {
                            window.alert("Refilling player's health by 20 for $7.");
                            this.health += 20;
                            this.money -=7;
                        }
                    else
                        {
                            window.alert("You don't have enough money!");
                        }
                },
            upgradeAttack: function()
                {
                    if(this.money >=7)
                        {
                            window.alert("Upgrading your robot's attack potential by 6 for $7")
                            this.attack += 6;
                            this.money -= 7;
                        }
                    else    
                        {
                            window.alert("You don't have enough money!");
                        }
                }
    };

var enemyInfo =
    [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)

        },
        
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];
            startGame();
        
       