import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(/*private electronService: ElectronService*/){
    // this.electronService.ipcRenderer.on('rispostaIpc',()=>{
     //  console.log('+++++++++ricevuto da ipcMain++++++++++')
    // })
   }

   public provaIpc(){
     // if(this.electronService.isElectronApp){//verifica se è una app e non una webapp
     //   this.electronService.ipcRenderer.send('provaIpc');
     //   console.log('button test 0k');
     // }
   }

}
