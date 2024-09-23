
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const ReportsCard = ({ filter }) => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      { name: 'Solde', data: [31, 40, 28, 51, 42, 82, 56] },
      { name: 'Montant envoyé', data: [11, 32, 45, 32, 34, 52, 41] },
      { name: 'Montant reçu', data: [15, 11, 32, 18, 9, 24, 11] }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: { show: false }
      },
      markers: { size: 4 },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z'
        ]
      },
      tooltip: { x: { format: 'dd/MM/yy HH:mm' } }
    }
  });
  ReportsCard.propTypes = {
    filter: PropTypes.string, // ou l'objet si 'filter' est un objet
};
  

  // Utiliser le filter pour changer les données
  const updateChartData = (filter) => {
    if (filter === 'Ce mois-ci') {
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        series: [
          { name: 'Solde', data: [40, 55, 30, 65, 55, 92, 75] },
          { name: 'Montant envoyé', data: [20, 40, 60, 45, 50, 65, 55] },
          { name: 'Montant reçu', data: [25, 20, 40, 30, 20, 35, 25] }
        ]
      }));
    } else if (filter === 'Cette année') {
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        series: [
          { name: 'Solde', data: [10, 20, 15, 35, 30, 45, 40] },
          { name: 'Montant envoyé', data: [5, 10, 25, 20, 15, 30, 25] },
          { name: 'Montant reçu', data: [10, 5, 15, 10, 5, 20, 15] }
        ]
      }));
    } else {
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        series: [
          { name: 'Solde', data: [31, 40, 28, 51, 42, 82, 56] },
          { name: 'Montant envoyé', data: [11, 32, 45, 32, 34, 52, 41] },
          { name: 'Montant reçu', data: [15, 11, 32, 18, 9, 24, 11] }
        ]
      }));
    }
  };

  // Appeler updateChartData lorsque filter change
  useState(() => {
    updateChartData(filter);
  }, [filter]);

  return (
    <div style= {{width: '100%'}}className="card-body">
      <h5 className="card-title">
        Statistiques <br />
        <span>Aujourd&apos;hui</span>
      </h5>
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="area" height={350} />
    </div>
  );
};


export default ReportsCard;