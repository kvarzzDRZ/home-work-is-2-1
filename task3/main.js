
let product = {
    name: "Iphone MAX pro", 
    price: 100000,
    inStock: true,
    brand: "Iphone",
    specifications: {
        ram: 12,
        pam: 512,
        cpu: "A13 Bionic",
        display: "Super Retina XDR",
        protection: "IP68"
    },
    discount: {
        percentage: 0.43,
        expirationDate: "12.06.2025",
    }
}

let customer = {
    name: "Gimmy",
    budget: 250000,
}

const customerName = customer["name"];
const customerBudget = customer["budget"];
const inStock = product["inStock"];

const productPrice = product["price"];
const productName = product["name"];
const productBrand = product["brand"];
const productSpecs = product["specifications"];

const productProcentage = product["discount"]["percentage"];
const productExpDate = product["discount"]["expirationDate"];

if (customerBudget < productPrice)
{
    console.log(`Бюджет ${customerName} слишком мал для покупки. Можете взять кредит в банке и прийти снова:) за ${productName}`);
}
else
{
    if (inStock)
    {
        console.log(`Бюджет ${customerName} позволяет купить ${productBrand} ${productName}.`);
        console.log("Характеристики товара:");
        console.log(`Оперативная память: ${productSpecs["ram"]}`);
        console.log(`Постоянная память: ${productSpecs["pam"]}`);
        console.log(`Процессор: ${productSpecs["cpu"]}`);
        console.log(`Тип экрана: ${productSpecs["display"]}`);
        console.log(`Уровень защиты: ${productSpecs["protection"]}`);

        if (productProcentage > 0.0 && productProcentage <= 1.0)
        {
            console.log(`На этот товар есть скидка в ${productProcentage * 100} до ${productExpDate}.`);
            let resultPrice = productPrice - (productPrice * productProcentage);
            console.log(`Цена ${productBrand} ${productName} со скидкой равна ${resultPrice} рублей.`);
        }
        else
        {
            console.log(`Цена ${productBrand} ${productName} равна ${productPrice} рублей.`);
        }
        console.log(`Будем рады вас видеть снова ${customerName}!`);

    }
    else
    {
        console.log(`Хоть бюджет ${customerName} позволяет купить ${productBrand} ${productName} за ${productPrice}, но товара нет на складе.`);
    }
    
}

