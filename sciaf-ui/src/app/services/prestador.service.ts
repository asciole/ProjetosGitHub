import { Prestador } from './../dominio/prestador';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PrestadorService {

  constructor(private http: Http) { }

  getPrestadores(): Promise<any> {
    return this.http.get('http://localhost:8080/prestadores')
    .toPromise()
    .then(response => response.json());
  }


    /*return [
      {'codigo' : '0001', 'nome': 'ACADEMIA FORÇA  FISICA'},
      {'codigo' : '0002', 'nome': 'ACADEMIA PHISICAL'},
      {'codigo' : '0003', 'nome': 'ACADEMIA 2'},
      {'codigo' : '0004', 'nome': 'ACADEMIA 3'},
      {'codigo' : '0005', 'nome': 'ACADEMIA 4'},
      {'codigo' : '0006', 'nome': 'ACADEMIA 5'},
      {'codigo' : '0007', 'nome': 'ACADEMIA 6'},
      {'codigo' : '0008', 'nome': 'ACADEMIA 7'},
      {'codigo' : '0009', 'nome': 'ACADEMIA 8'},
      {'codigo' : '0010', 'nome': 'ACADEMIA 9'},
      {'codigo' : '0011', 'nome': 'ACADEMIA 10'},
      {'codigo' : '0012', 'nome': 'ACADEMIA 11'},
      {'codigo' : '0013', 'nome': 'ACADEMIA 12'},
    ];*/

}
