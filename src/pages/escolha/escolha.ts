import { Carro } from './../../models/carros';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acessorio } from '../../models/acessorio';

@IonicPage()
@Component({
	selector: 'page-escolha',
	templateUrl: 'escolha.html',
})
export class EscolhaPage {

	public carro: Carro;
	public acessorios = [];
	private _precototal: number;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.carro = this.navParams.get('carroSelecionado');
		this._precototal = this.carro.preco;
		this.acessorios = [
			{ nome: 'Freio ABS', preco: 800},
			{ nome: 'Ar-condicionado', preco: 1000},
			{ nome: 'MP3 Player', preco: 500}
		]
	}

	get precoTotal() {
		return this._precototal;
	}

	atualizaPreco(ativado: boolean, acessorio: Acessorio) {
		ativado ?
			this._precototal += acessorio.preco:
			this._precototal -= acessorio.preco
	}

}
