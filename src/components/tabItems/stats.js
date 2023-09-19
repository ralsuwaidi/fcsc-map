const statList = [
    {
        title: 'Population',
        content: '≈ 9.8 million people in 2021'
    },
    {
        title: 'Area',
        content: '71,023.6 km²'
    },
    {
        title: 'Location',
        content: 'The UAE overlooks the Arabian Gulf and borders the Kingdom of Saudi Arabia to the South and West and the Sultanate of Oman to the Southeast.'
    },
    {
        title: 'Population',
        content: 'The UAE time is 4 hours ahead of GMT'
    },
    {
        title: 'Currency',
        content: 'The Emirati Dirham is the official national currency. The US dollar is exchanged for the UAE Dirham at a rate of 3.67, and credit cards are widely accepted'
    },
    {
        title: 'Climate',
        content: 'The UAE has a warm and sunny weather most of the year, recording an ideal temperature from October to May.'
    },
    {
        title: 'Official Language',
        content: 'Arabic is the official language and English is widely spoken in public, markets and restaurants.'
    },
    {
        title: '200 Nationalities',
        content: 'The UAE hosts large foreign communities and all residents enjoy freedom of civil rights and practice of religion'
    },
    {
        title: 'Security and Safety',
        content: 'The UAE was ranked the third safest country in the world in 2020, offering residents and visitors highest levels of safety'
    }
]


const StatsTab = ({ }) => {


    return (

        <div className="grid-cols-2 grid gap-2">
            {statList.map((stat) => (
                <div className=" grow bg-gray-100 rounded-lg p-1">
                    <div key={stat.title}>
                        <p className="text-sm font-semibold">{stat.title}</p>
                        <p className="text-xs pt-2">{stat.content}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default StatsTab