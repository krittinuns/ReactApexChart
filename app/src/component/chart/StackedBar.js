import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import styled from 'styled-components'

const ChartWrapper = styled.div`
  width: 80%;
`

class StackedBar extends Component {
  MOCK_ITERATION = 100

  mockCategory = () => {
    let categories = []
    for (let i = 1; i <= this.MOCK_ITERATION; i++) categories.push(i)
    return categories
  }

  mockProduct = () => {
    let products = []
    for (let i = 1; i <= this.MOCK_ITERATION; i++) {
      const value = Math.floor(Math.random() * 10) + 1
      products.push(value)
    }
    return products
  }

  constructor(props) {
    super(props)
    this.state = {
      options: {
        chart: {
          stacked: true,
          zoom: {
            enabled: true
          },
          toolbar: {
            show: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },

        xaxis: {
          type: 'numeric',
          categories: this.mockCategory()
        },
        legend: {
          position: 'top',
          offsetY: 0
        },
        fill: {
          opacity: 0.5
        }
      },
      series: [
        {
          name: 'PRODUCT A',
          data: this.mockProduct() // [44, 55, 41, 67, 22, 43]
        },
        {
          name: 'PRODUCT B',
          data: this.mockProduct() // [13, 23, 20, 8, 13, 27]
        },
        {
          name: 'PRODUCT C',
          data: this.mockProduct() // [11, 17, 15, 15, 21, 14]
        },
        {
          name: 'PRODUCT D',
          data: this.mockProduct() // [21, 7, 25, 13, 22, 8]
        }
      ]
    }
  }

  render() {
    return (
      <ChartWrapper>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
          height="300px"
        />
      </ChartWrapper>
    )
  }
}

export default StackedBar
