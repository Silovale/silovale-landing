/*import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {


}*/

import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  // Declarar la opción como una propiedad
  chartOption: any;

  ngOnInit() {
    // Configuración de las estadísticas
    this.chartOption = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          fontSize: 18, // Ajusta el tamaño de la fuente según tus necesidades
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1000, name: 'Trujillo' },
            { value: 300, name: 'Chimbote' },
            { value: 200, name: 'Arequipa'},
            { value: 250, name: 'Piura' },
            { value: 500, name: 'Lima' }
          ]
        }
      ]
    };

    // Llamar a la función para inicializar el gráfico
    this.initChart();
  }

  initChart() {
    // Obtener el elemento del DOM donde deseas renderizar el gráfico
    const chartElement = document.getElementById('chart');

    // Inicializar el gráfico con la configuración proporcionada
    const chart = echarts.init(chartElement);

    // Configurar las opciones del gráfico
    chart.setOption(this.chartOption);
  }
}

