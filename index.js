document.getElementById('buy').addEventListener('click', function(){

    const cupon = document.getElementById('cupon').value;

    if(cupon === 'VALEN21'){

        const payment = document.getElementById('payment');

        payment.classList.remove('hidden');

        const amount = document.getElementById('taka');

        amount.innerText = '700';

        document.getElementById('cupon').value = "";

    }

    else{

        const payment = document.getElementById('payment');

        payment.classList.remove('hidden');

        const amount = document.getElementById('taka');

        amount.innerText = '1000';

        document.getElementById('cupon').value = "";

        alert('you enter wrong cupon');
    }

});