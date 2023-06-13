let links = document.querySelectorAll('.scroll')
let targetID
let tov
let shine1 = document.querySelector('.shine1')
let shine2 = document.querySelector('.shine2')
let shine3 = document.querySelector('.shine3')
let shine4 = document.querySelector('.logo2')
let red = 255
let green = 248
let blue = 231
let draw1 = true
let draw2 = true
let draw3 = true
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault()
        targetID = element.getAttribute('href')
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

function change(){
    if(draw1 == false){
        red -= 0.5
    }else if(draw1 == true){
        red += 0.5
    }
    if(draw2 == false){
        green -= 0.5
    }else if(draw2 == true){
        green += 0.5
    }
    if(draw3 == false){
        blue -= 0.5
    }else if(draw3 == true){
        blue += 0.5
    }

    
    if(red >= 255){
        draw1 = false
    }else   if(red <= 200){
        draw1 = true
    }
    if(green >= 255){
        draw2 = false
    }else   if(green <= 200){
        draw2 = true
    }
    if(blue >= 185){
        draw3 = false
    }else   if(blue <= 70){
        draw3 = true
    }

    shine1.style.color = "rgb(" + red + " , " + green + ", " + blue + ")"
    shine2.style.color = "rgb(" + red + " , " + green + ", " + blue + ")"
    shine3.style.color = "rgb(" + red + " , " + green + ", " + blue + ")"
    shine4.style.border = "solid 4px rgb(" + red + " , " + green + ", " + blue + ")"
}
timer = setInterval(change, 10)

function str1(){
    order1.style.display = 'block'
    order2.style.display = 'none'
    order3.style.display = 'none'
    order4.style.display = 'none'
    order5.style.display = 'none'
}
function str2(){
    order2.style.display = 'block'
    order1.style.display = 'none'
    order3.style.display = 'none'
    order4.style.display = 'none'
    order5.style.display = 'none'
}
function str3(){
    order3.style.display = 'block'
    order1.style.display = 'none'
    order2.style.display = 'none'
    order4.style.display = 'none'
    order5.style.display = 'none'
}
function str4(){
    order4.style.display = 'block'
    order1.style.display = 'none'
    order3.style.display = 'none'
    order2.style.display = 'none'
    order5.style.display = 'none'
}
function str5(){
    order5.style.display = 'block'
    order1.style.display = 'none'
    order3.style.display = 'none'
    order4.style.display = 'none'
    order2.style.display = 'none'
}
function str6(){
    order1.style.display = 'block'
    order2.style.display = 'none'
    order3.style.display = 'none'
    order4.style.display = 'none'
    order5.style.display = 'none'
}
if(!localStorage.getItem('Basket')){
    localStorage.setItem('Basket', JSON.stringify([]))
}

if(!localStorage.getItem('tovs')){
    localStorage.setItem('tovs', JSON.stringify([]))
    let tovs = JSON.parse(localStorage.getItem('tovs'))
    tovs = [
        ['good_1', 'Пирог Капуста с мясом', '320', 0, 0, 0],
        ['good_2', 'Пирог Картофель с говядиной', '330', 0, 0, 1], 
        ['good_3', 'Пирог Курица по-французски', '390', 0, 0, 2], 
        ['good_4', 'Пирог Мясной с говяжим фаршем с луком', '310', 0, 0, 3], 
        ['good_5', 'Пирог Рыбник c горбушей и рисом', '360', 0, 0, 4], 
        ['good_6', 'Пирог Летний со шпинатом и сыром', '340', 0, 0, 5], 
        ['good_7', 'Пирог Курица с сыром и яйцом', '370', 0, 0, 6], 
        ['good_8', 'Пирог Капуста c грибами', '340', 0, 0, 7], 
        ['good_9', 'Пирог Картофель со свининой', '340', 0, 0, 8], 
        ['good_10', 'Пирог Курица с рисом', '350', 0, 0, 9], 
        ['good_11', 'Пирог Зелёный лук с яйцом', '340', 0, 0, 10], 
        ['good_12', 'Пирог Капуста с яйцом', '340', 0, 0, 11], 
        ['good_13', 'Пирог Клубника и банан', '350', 0, 0, 12], 
        ['good_14', 'Пирог Трёхслойный', '370', 0, 0, 13], 
        ['good_15', 'Пирог Лимонник', '350', 0, 0, 14], 
        ['good_16', 'Пирог Малинник', '350', 0, 0, 15], 
        ['good_17', 'Пирог Вишневый', '350', 0, 0, 16], 
        ['good_18', 'Пирог Брусника', '350', 0, 0, 17], 
        ['good_19', 'Пирог Киви', '350', 0, 0, 18], 
        ['good_20', 'Пирог Яблочный', '340', 0, 0, 19], 
        ['good_21', 'Пирог "Сетка" с черносливом', '370', 0, 0, 20], 
        ['good_22', 'Пирог Сметанник', '300', 0, 0, 21], 
        ['good_23', 'Пирог Королевская ватрушка', '323', 0, 0, 22], 
        ['good_24', 'Пирог Сметанник шоколадный', '300', 0, 0, 23],
    ] //  id, Название, Цена, Кол-во, стоим-ть, index
    localStorage.setItem('tovs', JSON.stringify(tovs))
}

update_goods()

function update_goods(){ /*обновление*/
    let result_price = 0
    document.querySelector('.cart').innerHTML = ""
    let Basket = JSON.parse(localStorage.getItem('Basket'))
    let tovs = JSON.parse(localStorage.getItem('tovs'))
    let ord_txt = ""
    document.getElementById('ord_text').value = ord_txt
    if(Basket.length){
        document.querySelector('.cart').style.display = 'block'
        document.querySelector('.buttons').style.display = 'block'
        document.getElementById('formOrder').style.display = 'flex'
        document.getElementById('formTopic').style.display = 'block'
        Nan.hidden = true
        Basket = []
        for(let j=0; j<tovs.length; j++){
            if(tovs[j][3] > 0){
                Basket.push(tovs[j])
            }
        }
        for(let i=0; i<Basket.length; i++){
            Basket[i][4] = Basket[i][2]*Basket[i][3]
            result_price += Basket[i][4]
            document.querySelector('.cart').insertAdjacentHTML('beforeend',
            `
            <div class="BasketCard">
                <p class="pos1">${i+1}</p>
                <p class="pos2" class="price_name">${Basket[i][1]}</p>
                <p class="pos3" class="price_one">${Basket[i][2]}</p>
                <div class="count"><p class="price_count">${Basket[i][3]}</p><div class="count_increase"><input type="button" id="plus" class="pointer increase" onclick="to(1, ${Basket[i][5]})" value="+"><input type="button" id="minus" class="pointer increase" onclick="to(2, ${Basket[i][5]})" value="-"></div></div>
                <p class="pos5">${Basket[i][4]}</p>
                <button class="pos6 pointer btn-danger" data-delete="${Basket[i][0]}">&#10006</button>
            </div>
            `
            )
            
            ord_txt +=
            `
            [Название: ${Basket[i][1]};
            Количество: ${Basket[i][3]};
            Стоимость: ${Basket[i][4]}]

            `
            document.getElementById('ord_text').value = ord_txt
        }

        document.getElementById('ord_text').value += "Итого: " + result_price + " руб."
        localStorage.setItem('Basket', JSON.stringify(Basket))
        localStorage.setItem('tovs', JSON.stringify(tovs))
    } else{
        Nan.hidden = false
        document.getElementById('formOrder').style.display = 'none'
        document.getElementById('formTopic').style.display = 'none'
        document.querySelector('.cart').style.display = 'none'
        document.querySelector('.buttons').style.display = 'none'
    }
    
    document.querySelector('.price_result').innerHTML = result_price + ' &#8381;'
    document.querySelector('.price_result2').innerHTML = 'Итого: ' + result_price + ' &#8381;'

    if(localStorage.getItem('doing')){
        let doing = JSON.parse(localStorage.getItem('doing'))
        if(doing[0] == 1){
            goDoing(1)
        } else if (doing[0] == 2) {
            goDoing(2)
        }
        doing = []
        localStorage.setItem('doing', JSON.stringify(doing))
    }
    
}
document.querySelector('.cart').addEventListener('click', function(e){ /*Нажатие на кнопку удалить*/
    if(!e.target.dataset.delete){ /*Берём данные с нажатия на кнопку удалить(если не она, значит функция заканчивается)*/
        return
    }
    Swal.fire({     /*Окно*/
        title:'Внимание',
        text: 'Вы действительно хотите удалить товар?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
    }).then((result) => {
        if(result.isConfirmed){ /*Удаление*/ 
            let Basket = JSON.parse(localStorage.getItem('Basket')) 
            let tovs = JSON.parse(localStorage.getItem('tovs'))
            for(let i=0; i<Basket.length; i++){
                if(Basket[i][0] = e.target.dataset.delete){
                    for(let j=0; j<tovs.length; j++){
                        if(Basket[i][0] == tovs[j][0]){
                            tovs[j][3] = 0
                        }
                    }
                    Basket.splice(i, 1)

                    localStorage.setItem('Basket', JSON.stringify(Basket))
                    localStorage.setItem('tovs', JSON.stringify(tovs))
                    update_goods()
                }
            }
            Swal.fire(
                "Удалено!",
                "Выбранный товар был успешно удалён.",
                "success"
            )
        }
    })


})



delAll.addEventListener('click', function(){
    Swal.fire({     /*Окно*/
        title:'Внимание',
        text: 'Вы действительно хотите очистить корзину?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
    }).then((result) => {
        if(result.isConfirmed){ /*Удаление*/ 
            let Basket = JSON.parse(localStorage.getItem('Basket'))
            let tovs = JSON.parse(localStorage.getItem('tovs'))
            Basket = []
            for(let j=0; j<tovs.length; j++){
                if(tovs[j][3] > 0){
                    tovs[j][3] = 0
                }
            }
            localStorage.setItem('Basket', JSON.stringify(Basket))
            localStorage.setItem('tovs', JSON.stringify(tovs))
            update_goods()
            Swal.fire(
                "Корзина очищена!",
                "success"
            )
        }
    })
    
})
selfText.hidden = true
function deliver(){
    selfText.selectedIndex = 0
    selfText.hidden = true
    n.value = 1
    address_client.value = "";
    deliveryText.style.display = "flex"
}
function selfer(){
    selfText.hidden = false
    n.value = 2
    address_client.value = " ";
    deliveryText.style.display = "none"
}

function to(increase, numTov){
    let Basket = JSON.parse(localStorage.getItem('Basket'))
    let tovs = JSON.parse(localStorage.getItem('tovs'))
    if(increase==1){
        tovs[numTov][3] += 1
        if (tovs[numTov][3] <= 1) {
            Basket.push(tovs[numTov])
        }
        for(let i=0; i<Basket.length; i++){
            if(Basket[i][0] == tovs[numTov][0]){
                Basket[i][3] = tovs[numTov][3]
            }
        }
    } else if(increase==2) {
        if(tovs[numTov][3] > 0){
            tovs[numTov][3] -= 1
        }
        
        if (tovs[numTov][3] <= 1) {
            Basket.push(tovs[numTov])
        }
        for(let i=0; i<Basket.length; i++){
            if(Basket[i][0] == tovs[numTov][0]){
                Basket[i][3] = tovs[numTov][3]
            }
        }
    }
    
    localStorage.setItem('Basket', JSON.stringify(Basket))
    localStorage.setItem('tovs', JSON.stringify(tovs))
    update_goods()
}

function goDoing(n) {
    if(n == 1){
        Swal.fire({     /*Окно*/
            title:'Заказ отправлен',
            text: 'Ждите нашего звонка',
            icon: 'success',
        })
        let Basket = JSON.parse(localStorage.getItem('Basket'))
        let tovs = JSON.parse(localStorage.getItem('tovs'))
        Basket = []
        for(let j=0; j<tovs.length; j++){
            if(tovs[j][3] > 0){
                tovs[j][3] = 0
            }
        }
        localStorage.setItem('Basket', JSON.stringify(Basket))
        localStorage.setItem('tovs', JSON.stringify(tovs))
        update_goods() 
    } else if(n == 2) {
        Swal.fire({ 
        title:'Ошибка',
        text: 'Что-то пошло не так',
        icon: 'warning',
        })
    }

    
}