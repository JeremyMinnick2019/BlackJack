import BlackJack from "blackjack-dealer-logic"
export default () =>
{

    
    const buttonstart = document.getElementById("start");
    const buttonhit = document.getElementById("hit");
    const buttonstand = document.getElementById("stand");
    const buttondouble = document.getElementById("double");
    const Game = BlackJack.singleDeckGame;
    const result = BlackJack.result;
    let bet = 0;
    document.getElementById("Chips")
    Chips.innerHTML = `Your chips: ${Game.getUserChips()}`

    buttonstart.onclick = function() 
    {
        setTimeout(function() { bet = window.prompt("How much would you like to bet?") 
        Game.receiveAnte(bet)}, 1500);
        Game.deal();
        setTimeout(function(){ document.getElementById("DealerHand").innerHTML = `Dealer is showing: ${Game.getDealerCardUp()}`
        document.getElementById("PlayerHand").innerHTML = `Your Hand: ${Game.getUserHandValue()}`
        document.getElementById("ask").innerHTML = `Choose hit, stand, double,`}, 5000)

        buttonhit.onclick = function() 
        {
          Game.hitUser();
          Game.evaluateUser();
          document.getElementById("NewHandHit").innerHTML = `Your Hand: ${Game.getUserHandValue()}`
          Game.settleDealerHand();
          document.getElementById("DealerHandValue").innerHTML = `The Dealer's Hand ${Game.getDealerHandValue()}`
          switch(Game.outcome()) 
          {
            case Result.WIN:
            document.getElementById("result").innerHTML = 'You have Won';
            Game.userWin();
            Game.resetPlayers();
            break;
            case Result.LOSS:
            document.getElementById("result").innerHTML = 'You have Lost';
            Game.resetAnte()
            Game.resetPlayers();
            break;
            case Result.PUSH:
            document.getElementById("result").innerHTML = 'Its a Push';
            Game.pushHand();
            Game.resetPlayers();
            break;

            default:
                break;

          }

          
        }

        buttonstand.onclick = function() 
        {
          Game.standUser();
          Game.evaluateUser();
          document.getElementById("NewHandStand").innerHTML = `Your Hand: ${Game.getUserHandValue()}`
          Game.settleDealerHand();
          document.getElementById("DealerHandValue").innerHTML = `The Dealer's Hand ${Game.getDealerHandValue()}`
          switch(Game.outcome()) 
          {
            case Result.WIN:
            document.getElementById("result").innerHTML = 'You have Won';
            Game.userWin();
            Game.resetPlayers();
            break;
            case Result.LOSS:
            document.getElementById("result").innerHTML = 'You have Lost';
            Game.resetAnte()
            Game.resetPlayers();
            break;
            case Result.PUSH:
            document.getElementById("result").innerHTML = 'Its a Push';
            Game.pushHand();
            Game.resetPlayers();
            break;

            default:
                break;

          }
        }

        buttondouble.onclick = function() 
        {
            Game.doubleUser(2 * bet)
            Game.evaluateUser();

        }
    }
}