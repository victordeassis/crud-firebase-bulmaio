import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'pricing-plans-table',
  templateUrl: './pricing-plans-table.component.html',
  styleUrls: ['./pricing-plans-table.component.css']
})
export class PricingPlansTableComponent implements OnInit {

  plans: any[];

  constructor(private ps: ProductService) {
    
    this.plans = [ 
    {"title": "Abertura de Empresa", "price": 0, "description": "Abertura de empresa é gratuita mediante a contratação do plano de contabilidade por 12 meses. Pague somente as taxas do governo."},
    {"title": "Serviço", "price": 69, "description": "Prestadores de serviço em geral, freelancers, consultorias, advogados, agências etc."},
    {"title": "Comércio", "price": 149, "description": "Comércio em geral, loja virtual, bar, restaurante, vestuário, informática etc."} 
    ];

  }

  ngOnInit() {
  }

}
