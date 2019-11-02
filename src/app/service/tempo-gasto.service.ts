import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempoGastoService {

public dataInicio: Date;
public dataFim: Date;
public tempoGastoMinutos: any;

  public pegaData() {
    this.dataInicio = new Date();
    const dataInicioMili = this.dataInicio.getTime();
    window.localStorage.setItem('dataInicio', dataInicioMili.toString());
  }


  public calculadata() {
    const dataInicioMili = window.localStorage.getItem('dataInicio');
    const dataFimMili = new Date().getTime();
    this.dataFim = new Date();
    // tslint:disable-next-line: radix
    const tempo = (dataFimMili - parseInt(dataInicioMili));
    const tempoGasto = (tempo / 1000) / 60;
    this.tempoGastoMinutos = Math.round(tempoGasto * 100) / 100;
  }
}
