var activeChar = 'X';
var activeField = '';
var scoreX = localStorage.getItem('scoreX') ? parseInt(localStorage.getItem('scoreX')) : 0;
var scoreO = localStorage.getItem('scoreO') ? parseInt(localStorage.getItem('scoreO')) : 0;

function printBoard()
{
    const boardPlace = document.createElement('div');
    boardPlace.className = 'board';
    boardPlace.id = 'board';
    document.getElementsByClassName('main_box')[0].append(boardPlace);
}

function printFields()
{
    for(var i = 0; i < 9; i++)
    {
        const field = document.createElement('div');
        field.className = 'field';
        field.id = i;
        document.getElementsByClassName('board')[0].appendChild(field);
    }
}

function prepareBoard()
{
    document.querySelectorAll('.field').forEach(div => {
        div.style.cursor = 'pointer';
    });
    
    for(var i = 0; i < 9; i++)
    {
        document.getElementById(i).addEventListener('click', function()
        {
            printChar(this);
            checkWinner();
            updateActiveChar();
            this.style.cursor = 'default';
            this.style.pointerEvents = 'none';
            checkFullBoard();
        });
    }
}

function printChar(field)
{
    if(field.innerHTML == '')
    {
        if(activeChar == 'X')
        {
            field.innerHTML = 'X';
            activeChar = 'O';
            field.style.color = 'blue';
        }
        else
        {
            field.innerHTML = 'O';
            activeChar = 'X';
            field.style.color = 'red';
        }
    }
}

function printActiveChar()
{
    const activeCharBoard = document.createElement('div');
    activeCharBoard.className = 'active_char';
    activeCharBoard.innerHTML = activeChar;
    document.body.append(activeCharBoard);
}

function updateActiveChar()
{
    const activeCharBoard = document.getElementsByClassName('active_char')[0];
    activeCharBoard.innerHTML = activeChar;
    if(activeChar == 'X')
    {
        activeCharBoard.style.color = 'blue';
    }
    else
    {
        activeCharBoard.style.color = 'red';
    }
}

function resetActiveChar()
{
    activeChar = 'X';
    const activeCharBoard = document.getElementsByClassName('active_char')[0];
    activeCharBoard.innerHTML = activeChar;
}

function printPoints()
{
    const pointsBoard = document.createElement('div');
    pointsBoard.className = 'points_board';
    pointsBoard.innerHTML = '<p class="points_title">Punktacja</p>';
    pointsBoard.innerHTML += 'X: <span id="scoreX">' + scoreX + '</span>';
    pointsBoard.innerHTML += '<br /> O: <span id="scoreO">' + scoreO + '</span>';
    pointsBoard.innerHTML += '<br /><br /> <button class="reset_button" onclick="resetPoints();">Resetuj</button>';
    document.body.append(pointsBoard);
}

function resetPoints()
{
    localStorage.setItem('scoreX', 0);
    localStorage.setItem('scoreO', 0);
    document.getElementById('scoreX').innerText = localStorage.getItem('scoreX');
    document.getElementById('scoreO').innerText = localStorage.getItem('scoreO');
}

function clearBoard()
{
    for(var i = 0; i < 9; i++)
    {
        document.getElementById(i).innerHTML = '';
        document.getElementById(i).style.cursor = 'pointer';
        document.getElementById(i).style.pointerEvents = 'auto';
    }
}

function checkFullBoard()
{
    //Pobranie wszystkich pól na planszy
    var field_0 = document.getElementById('0');
    var field_1 = document.getElementById('1');
    var field_2 = document.getElementById('2');
    var field_3 = document.getElementById('3');
    var field_4 = document.getElementById('4');
    var field_5 = document.getElementById('5');
    var field_6 = document.getElementById('6');
    var field_7 = document.getElementById('7');
    var field_8 = document.getElementById('8'); 

    if(field_0.innerHTML != '' && field_1.innerHTML != '' && field_2.innerHTML != '' && field_3.innerHTML != '' && field_4.innerHTML != '' && field_5.innerHTML != '' && field_6.innerHTML != '' && field_7.innerHTML != '' && field_8.innerHTML != '')
    {
        document.getElementsByClassName('winner_board')[0].style.display = 'block';
    }
}

function updatePoints()
{
    document.getElementById('scoreX').innerText = localStorage.getItem('scoreX');
    document.getElementById('scoreO').innerText = localStorage.getItem('scoreO');
    document.getElementsByClassName('winner_board')[0].style.display = 'none';
}

function winX()
{
    document.getElementsByClassName('winner_board')[0].style.display = 'block';
    document.getElementsByClassName('winner_board')[0].innerHTML = 'X wygrywa';
    scoreX = scoreX + 1;
    localStorage.setItem('scoreX', scoreX);
    setTimeout(updatePoints, 1000);
    resetActiveChar();
    clearBoard();
}

function winO()
{
    document.getElementsByClassName('winner_board')[0].style.display = 'block';
    document.getElementsByClassName('winner_board')[0].innerHTML = 'O wygrywa';
    scoreO = scoreO + 1;
    localStorage.setItem('scoreO', scoreO);
    setTimeout(updatePoints, 1000);
    resetActiveChar();
    clearBoard();
}

function noWin()
{
    document.getElementsByClassName('winner_board')[0].style.display = 'block';
    document.getElementsByClassName('winner_board')[0].innerHTML = 'Nikt nie wygrywa';
    clearBoard();
    activeChar = 'X';
    updateActiveChar();
}

function checkWinner()
{
    //alert('Sprawdzam wygraną...');

    //Pobranie wszystkich pól na planszy
    var field_0 = document.getElementById('0');
    var field_1 = document.getElementById('1');
    var field_2 = document.getElementById('2');
    var field_3 = document.getElementById('3');
    var field_4 = document.getElementById('4');
    var field_5 = document.getElementById('5');
    var field_6 = document.getElementById('6');
    var field_7 = document.getElementById('7');
    var field_8 = document.getElementById('8'); 
    
    //Sprawdzenie wszystkich możliwości wygranej X
    if(field_0.innerHTML == 'X' && field_1.innerHTML == 'X' && field_2.innerHTML == 'X')
    {
        winX();
    }
    else if(field_3.innerHTML == 'X' && field_4.innerHTML == 'X' && field_5.innerHTML == 'X')
    {
        winX();
    }
    else if(field_6.innerHTML == 'X' && field_7.innerHTML == 'X' && field_8.innerHTML == 'X')
    {
        winX();
    }
    else if(field_0.innerHTML == 'X' && field_3.innerHTML == 'X' && field_6.innerHTML == 'X')
    {
        winX();
    }
    else if(field_1.innerHTML == 'X' && field_4.innerHTML == 'X' && field_7.innerHTML == 'X')
    {
        winX();
    }
    else if(field_2.innerHTML == 'X' && field_5.innerHTML == 'X' && field_8.innerHTML == 'X')
    {
        winX();
    }
    else if(field_0.innerHTML == 'X' && field_4.innerHTML == 'X' && field_8.innerHTML == 'X')
    {
        winX();
    }
    else if(field_2.innerHTML == 'X' && field_4.innerHTML == 'X' && field_6.innerHTML == 'X')
    {
        winX();
    }
    else if(field_0.innerHTML != '' && field_1.innerHTML != '' && field_2.innerHTML != '' && field_3.innerHTML != '' && field_4.innerHTML != '' && field_5.innerHTML != '' && field_6.innerHTML != '' && field_7.innerHTML != '' && field_8.innerHTML != '')
    {
        noWin();
    }
    else
    {
        //Odblokowanie planszy
        for(var i = 0; i <= 8; i++)
        {
            document.getElementById(i).style.cursor = 'pointer';
            document.querySelectorAll('.field')[i].style.borderColor = '#000';
        }
    }

    //4. Sprawdzenie wszystkich możliwości wygranej O
    if(field_0.innerHTML == 'O' && field_1.innerHTML == 'O' && field_2.innerHTML == 'O')
    {
        winO();
    }
    else if(field_3.innerHTML == 'O' && field_4.innerHTML == 'O' && field_5.innerHTML == 'O')
    {
        winO();
    }
    else if(field_6.innerHTML == 'O' && field_7.innerHTML == 'O' && field_8.innerHTML == 'O')
    {
        winO();
    }
    else if(field_0.innerHTML == 'O' && field_3.innerHTML == 'O' && field_6.innerHTML == 'O')
    {
        winO();
    }
    else if(field_1.innerHTML == 'O' && field_4.innerHTML == 'O' && field_7.innerHTML == 'O')
    {
        winO();
    }
    else if(field_2.innerHTML == 'O' && field_5.innerHTML == 'O' && field_8.innerHTML == 'O')
    {
        winO();
    }
    else if(field_0.innerHTML == 'O' && field_4.innerHTML == 'O' && field_8.innerHTML == 'O')
    {
        winO();
    }
    else if(field_2.innerHTML == 'O' && field_4.innerHTML == 'O' && field_6.innerHTML == 'O')
    {
        winO();
    }
    else if(field_0.innerHTML != '' && field_1.innerHTML != '' && field_2.innerHTML != '' && field_3.innerHTML != '' && field_4.innerHTML != '' && field_5.innerHTML != '' && field_6.innerHTML != '' && field_7.innerHTML != '' && field_8.innerHTML != '')
    {
        noWin();
    }
    else
    {
        //Odblokowanie planszy
        for(var i = 0; i <= 8; i++)
        {
            document.getElementById(i).style.cursor = 'pointer';
            document.querySelectorAll('.field')[i].style.borderColor = '#000';
        }
    }

}

printBoard();
printFields();
printActiveChar();
printPoints();
prepareBoard();