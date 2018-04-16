import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Prestador } from './../dominio/prestador';
import { PrestadorService } from './../services/prestador.service';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-pesquisa-prestador',
  templateUrl: './pesquisa-prestador.component.html',
  styleUrls: ['./pesquisa-prestador.component.css']
})
export class PesquisaPrestadorComponent implements OnInit {

  displayDialog: boolean;
  prestador: Prestador = new CassePrestador(null, null, null, null, null);
  selectedPrestador: Prestador;
  newPrestador: boolean;
  prestadores: Prestador[];

  constructor(private prestadorService: PrestadorService, private router: Router) {

  }

    ngOnInit() {
      this.prestadorService.getPrestadores()
      .then(dados => this.prestadores = dados);
    }

    adicionarPrestador(){
      this.router.navigate(["prestador/novo"])
    }
    /*
    showDialogToAdd() {
      this.newPrestador = true;
      this.prestador = new CassePrestador(null, null, null, null, null);
      this.displayDialog = true;
    }

    onRowSelect(event) {
      this.newPrestador = false;
      this.prestador = this.clonePrestador(event.data);
      this.displayDialog = true;
    }

    clonePrestador(c: Prestador): Prestador {
      let prest = new CassePrestador(null, null, null, null, null);
      for(let prop in c) {
        prest[prop] = c[prop];
      }
      return prest;
    }

  findSelectedCarIndex(): number {
      return this.prestadores.indexOf(this.selectedPrestador);
  }
  */
}

// tslint:disable-next-line:one-line
class CassePrestador implements Prestador{
  constructor(public idPrestador, public nomePrestador, public codPrestador, public telefone, public modalidade ) {}
}
