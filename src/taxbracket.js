export const taxbracket=[
    { 
        id:1,
        Income:"$0-$18,200",
        Text:"0%",
        Tax:1,


    },
    {   
        id:2,
        Income:"$18,201-$45,000",
        Text:"Nil + 19% of excess over $18,200",
        Tax:0.19


    },
    {
         id:3,
        Income:"$45,001-$120,000",
        Text:"$5,092 + 32.5% of excess over $45,000",
        Tax:.325

    },
    {
        id:4,
        Income:"$120,001-$180,000",
        Text:"$29,467 + 37% of excess over $120,000",
        Tax:0.37
    },
    {
        id:5,
        Income:"$180,001+",
        Text:"$51,667 + 45% of excess over $180,000",
        Tax:0.45
    }
]
export const Financialyear=[
    {
        id:1,
        text:"FY 2023-24"
    }
]
export const Country=[
    {
        id:1,
        text:"Australia",
       flag:"https://flagsapi.com/AU/flat/32.png"
    }
]