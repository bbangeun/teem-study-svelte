/* eslint-disable */
import { writable } from 'svelte/store';

export let unlockTiles = writable(false);
export let showDrops = writable(false);
export let activeTile = writable(null);
export let dropTarget = writable(null);
export let dragOrigin = writable(null);

export let currentLayout = writable([]);

export let ViewList = writable([]); //윤 추가

export  class  ViewBox{
    constructor(Index, PID, Type, HRatio, VRatio, V1, V2, Title, Display){
     this.Index = Index,
     this.PID   = PID,
     this.Type  = Type,
     this.Title = Title;
     this.HRatio = HRatio,        
     this.VRatio = VRatio,        
     this.V1   = V1,
     this.V2   = V2;
     this.HRealRatio = "calc({HRatio} - 10px)"        
     this.VRealRatio = "calc({VRatio} - 10px)"  
     this.Offset = (((V1 > 0) && (V2 > 0)) || (PID > 0)) ? '10px' : '0px';
     //this.Display = (this.Type === 'H') ? 'inline-flex' : 'Block';
     this.Display = Display;                  
   }
 }