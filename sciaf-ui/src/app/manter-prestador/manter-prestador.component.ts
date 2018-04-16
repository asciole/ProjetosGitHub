import { Prestador } from './../dominio/prestador';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manter-prestador',
  templateUrl: './manter-prestador.component.html',
  styleUrls: ['./manter-prestador.component.css']
})
export class ManterPrestadorComponent implements OnInit {

  modalidades: SelectItem[];
  prestador: Prestador = new CassePrestador(null, null, null, null, null);

  constructor() {
    this.modalidades = [
      {label: ':: modalidade ::', value: ''},
      {label: 'Atividade Fisica', value: 'F'},
      {label: 'Pilates', value: 'P'}

    ];
   }

  ngOnInit() {
  }

  salvar(form: NgForm) {
    console.log(form);
  }
}
class CassePrestador implements Prestador{
  constructor(public idPrestador, public nomePrestador, public codPrestador, public telefone, public modalidade ) {}
}
