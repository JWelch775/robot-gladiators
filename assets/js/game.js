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


var fightOrSKip = function()
    {
        //ask a player if they'd like to fight or skip using fightOrSkip function
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // conditional recursive function call
        if(promptFight === "" || promptFight === null)
            {
                window.alert("You need to provide a valid answer! Please try again.");
                return fightOrSKip();
            }

        //if player picks "skip" confirm and them stop the loop
        promptFight = promptFight.toLowerCase();
        if(promptFight === "skip" || promptFight === "SKIP")
            {
                //confirm player wants to skip
                var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

                //if yes(true), leave fight
                if(confirmSkip) 
                    {
                        window.alert(playerInfo.name + " has decided to skip this fight. Coward!");
                        // subtract money from playerMoney for skipping 
                        playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);
                        
                        //return true if player wants to leave
                        return true;
                    }
                else
                    {
                        return false;
                    }
            }
    }


var fight = function(enemy)
    {
        //keep track of who goes first 
        var isPlayerTurn = true;
        //randomly change turn order
        if(Math.random() > 0.5)
            {
                isPlayerTurn = false;
            }

        console.log(enemy);
            //repeat and execute as long as the enemy-robot is alive
        while(playerInfo.health > 0 && enemy.health > 0)
            {    
                if(isPlayerTurn)
                    {   
                        //fight or skip prompt
                        if(fightOrSKip())
                            {
                                //if true, leave fight by breaking loop
                                break;
                            }
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
                                        window.alert(enemy.name + " still has " + enemy.health + " health left.");
                                    }
                    }
                                //player gets attacked first
                    else
                        {
                            // Subtract the value of `enemy Attack` from the value of `player Health` and use that result to update the value in the `playerplayerInfo.health` variable.
                            var damage = randomNumber(enemy.attack - 3, enemy.attack);
                            
                            playerInfo.health = Math.max(0, playerInfo.health - damage);
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
                //switch turn order for next round
                isPlayerTurn = !isPlayerTurn;
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
   

        var randomNumber = function(min, max)
            {
                var value = Math.floor(Math.random() * (max - min + 1) + min);

                return value;
            };

var getPlayerName = function()
            {
                var name = "";

                //****************************************
                // ADD LOOP HERE WITH PROMPT AND CONDITION
                //****************************************
                while (name === "" || name === null)
                    {
                        name = prompt("What is your robot's name?");
                    }
                return name;
                console.log("Your robot's name is " + name);
            };

var playerInfo = 
    {
        name: getPlayerName(),
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
        
       