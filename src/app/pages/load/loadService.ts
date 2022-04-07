import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';
import { Loads } from './data';
import { Load } from './load.model';
import { LoadTableService } from './loadtable/LoadTableService';
@Injectable({
    providedIn: 'root'
})

export class LoadService {

    private _activeLoads = [];
    private _deliveredLoads = [];
    private _cancelledLoads = [];
    private _activeLoadService: LoadTableService;
    private _deliveredLoadService: LoadTableService;
    private _cancelledoadService: LoadTableService;

    constructor(private pipe:DecimalPipe, private authService:AuthfakeauthenticationService) {
        this.fetchLoads()
        this._activeLoadService = new LoadTableService(this._activeLoads, pipe,authService)
        this._deliveredLoadService = new LoadTableService(this._deliveredLoads, pipe,authService)
        this._cancelledoadService = new LoadTableService(this._cancelledLoads, pipe,authService)

    }


    get _activeLoadsTableService(){return this._activeLoadService;}
    get _deliveredLoadsTableService(){return this._deliveredLoadService;}
    get _cancelledLoadsTableService(){return this._cancelledoadService;}

 
    
    private fetchLoads() {

        this._deliveredLoads = Loads.filter(load => load.status === 8);
        this._cancelledLoads = Loads.filter(load => load.status === 6);
        this._activeLoads = Loads.filter(load => {
            if (load.status !== 8 && load.status !== 6)
                return true;
        });


       
    }
}


