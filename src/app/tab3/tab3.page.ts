import { Component } from '@angular/core';
import { TempoGastoService } from '../service/tempo-gasto.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private calcTempo: TempoGastoService) {}


  public faz() {
    this.calcTempo.pegaData();
  }


  public faz2() {
    this.calcTempo.calculadata();
    console.log('-------------------------------------------------------------');
    console.log('dentro de tab inicio às: ', this.calcTempo.dataInicio);
    console.log('dentro de tab fim  às: ', this.calcTempo.dataFim);
    console.log('dentro de tab tempo gasto em minutos: ', this.calcTempo.tempoGastoMinutos);
    console.log('-------------------------------------------------------------');
  }
}
