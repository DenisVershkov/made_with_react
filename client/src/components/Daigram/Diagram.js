import { ResponsivePie } from '@nivo/pie'

const MyResponsivePie = ({skills}) => {

    const arr = Object.entries(skills).map((el) => el.filter((el, i, arr) => el))
    const data = arr.filter((el) => el.length > 1 ? el : null)
    console.log(skills)
    const newObj = data.reduce((acc, item) => {
        acc.push({ id: item[0], lable: item[0], value: item[1] })
        return acc
    }, [])

    return (
        <div style={{ height: 500, width: '100%' }}>
            <ResponsivePie
                data={newObj}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                colors={{ scheme: 'dark2' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]],
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'c',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'Haskell',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'Python',
                        },
                        id: 'dots',
                    },
                    {
                        match: {
                            id: 'scala',
                        },
                        id: 'lines',
                    },
                    {
                        match: {
                            id: 'lisp',
                        },
                        id: 'lines',
                    },
                    {
                        match: {
                            id: 'NodeJS',
                        },
                        id: 'lines',
                    },
                    {
                        match: {
                            id: 'Javascript',
                        },
                        id: 'lines',
                    },
                ]}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: -350,
                        translateY: 0,
                        itemsSpacing: 25,
                        itemWidth: 0,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000',
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
}

export default MyResponsivePie
