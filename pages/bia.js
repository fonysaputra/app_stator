import Header from '../src/components/header'
import Nav from '../src/components/nav'
import Footers from '../src/components/footer'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 'Berat',
    color: 'hsl(226, 70%, 50%)',
    data: [
      {
        x: '1',
        y: 47,
      },
      {
        x: '2',
        y: 71,
      },
      {
        x: '3',
        y: 121,
      },
      {
        x: '4',
        y: 287,
      },
      {
        x: '5',
        y: 167,
      },
      {
        x: '6',
        y: 27,
      },
      {
        x: '7',
        y: 94,
      },
      {
        x: '8',
        y: 67,
      },
      {
        x: '9',
        y: 135,
      },
      {
        x: '10',
        y: 85,
      },
      {
        x: '11',
        y: 164,
      },
      {
        x: '12',
        y: 191,
      },
    ],
  },

  {
    id: 'TInggi',
    color: 'hsl(231, 70%, 50%)',
    data: [
      {
        x: '1',
        y: 40,
      },
      {
        x: '2',
        y: 71,
      },
      {
        x: '3',
        y: 21,
      },
      {
        x: '4',
        y: 287,
      },
      {
        x: '5',
        y: 167,
      },
      {
        x: '6',
        y: 27,
      },
      {
        x: '7',
        y: 94,
      },
      {
        x: '8',
        y: 7,
      },
      {
        x: '9',
        y: 135,
      },
      {
        x: '10',
        y: 85,
      },
      {
        x: '11',
        y: 164,
      },
      {
        x: '12',
        y: 101,
      },
    ],
  },
]
function Bia() {
  return (
    <>
      <Header title="Bioelectrical Impedance Analysis (BIA)" />
      <Nav head="bia" />
      <main
        className="container mt-5 col-md-7 bg-white"
        style={{ borderRadius: 5 }}
      >
        <div style={{ height: 400 }}>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            enableArea={true}
            axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Jumlah',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </main>
      <Footers />
    </>
  )
}

export default Bia
