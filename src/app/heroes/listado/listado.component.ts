import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['hulk', 'Saitama', 'Superman', 'thor', 'goku'];
  public eliminado :string = "";
  
eliminar(heroe: string){
  this.heroes.splice(this.heroes.indexOf(heroe),1)
  this.eliminado=heroe
}
}

