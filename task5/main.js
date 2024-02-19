let banknote = {
    nominal: 100,
    currency: '$',
    issueCountry: "USA",
    releaseYear: "1999",
    serialNumber: 17862265
};

for(item in banknote)
{
    console.log(`${item}: ${banknote[item]}`);
}


