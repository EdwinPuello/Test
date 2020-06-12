import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWordOfficeService {
  constructor(private _http: HttpClient) { }

  getQuery(query: string, type: string, body?: any) {
		const url = environment.apiUrl + query;
		let headers: any = new HttpHeaders({'Accept': 'application/json'});
		if (type == 'get') {
			return this._http.get(url, {params:body, headers: headers })
		}
		else if (type == 'post') {
			return this._http.post(url, body, { headers: headers });
		}
		else if (type == 'delete') {
			let httpOptions = { headers: headers, body: body }
			return this._http.delete(url, httpOptions)
		}
		else {
			return this._http.put(url, body, { headers: headers });
		}
  }

  listarEquipos(){
		return this.getQuery('equipos/listar', 'get')
  }

  crearEquipo(data){
		return this.getQuery('equipos/crear', 'post',data)
  }
  // /equipos/consultar/{fechaInicio}/{fechaFin}
  buscarPorFecha(fehcaini,fechafin){
    let params = new HttpParams();
    params = params.append('fechaInicio', fehcaini);
    params = params.append('fechaFin', fechafin);
    return this.getQuery('equipos/consultar', 'get',params)
  }

  buscarPorid(id){
    return this.getQuery('equipos/consultar/'+id, 'get')
  }

  actualizarEquipo(id,data){
    return this.getQuery('equipos/actualizar/'+id, 'put',data)
  }

  EliminarEquipo(id){
    return this._http.delete(environment.apiUrl+'/equipos/eliminar/'+id)
  }

  // /equipos/actualizar/{id}

}
