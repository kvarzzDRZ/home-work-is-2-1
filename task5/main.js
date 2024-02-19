let banknote = {
    nominal: 100,
    currency: 'USD',
    issueCountry: "USA",
    releaseYear: "1999",
    serialNumber: 17862265
};

for(item in banknote)
{
    console.log(`${item}: ${banknote[item]}`);
}

console.log("\n");
if (banknote["currency"] === "RUB")
{
    console.log("Валюта банкноты - рубли");
}
else if (banknote["currency"] === "EUR")
{
    console.log("Валюта банкноты - евро");
}
else if (banknote["currency"] === "JPY")
{
    console.log("Валюта банкноты - юани");
}
else if (banknote["currency"] === "USD")
{
    console.log("Валюта банкноты - доллары");
}