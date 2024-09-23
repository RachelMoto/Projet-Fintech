import { useEffect } from 'react';
import * as echarts from 'echarts'; 

const WebsiteTraffic = () => {
  useEffect(() => {
    const chartDom = document.getElementById('trafficChart');
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Accès depuis',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Crédit' },
            { value: 735, name: 'Montant envoyé' },
            { value: 580, name: 'Montant reçu' },
            { value: 484, name: 'Partenariat' },
            { value: 300, name: 'Solde' },
          ],
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <div className="card">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown">
          <i className="bi bi-three-dots"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filtrer</h6>
          </li>
          <li><a className="dropdown-item" href="#">Aujourd&apos;hui</a></li>
          <li><a className="dropdown-item" href="#">Ce mois-ci</a></li>
          <li><a className="dropdown-item" href="#">Cette Année</a></li>
        </ul>
      </div>

      <div style= {{ minwidth: '400%' }} className="card-body pb-0">
        <h5 className="card-title">
          Trafic du site <span>| Aujourd&apos;hui</span>
        </h5>
        <div id="trafficChart" style={{ minHeight: '400px' }} className="echart"></div>
      </div>
    </div>
  );
};

export default WebsiteTraffic;
