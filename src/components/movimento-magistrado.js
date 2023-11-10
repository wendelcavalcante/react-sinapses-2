//Wendel Cavalcante
import { Component } from 'react';
import { Card } from 'primereact/card';
import { DataService } from '../service/api.service';
import { InputTextarea } from 'primereact/inputtextarea';
import { ProgressBar } from 'primereact/progressbar';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { isAuthenticated } from '../service/auth';
import React from 'react';

export default class MovimentoMagistrado extends Component {
    state = {
        texto: "",
        movimentosVisible: false,
        resultados: [],
    };

    constructor(props) {
        super();
        this.toast = React.createRef();
    }

    handleDocumento = async e => {
        e.preventDefault();
        const { texto } = this.state;
        if (!isAuthenticated()) {
            this.toast.current.show({ severity: 'error', summary: 'Não autenticado', detail: "Efetue o login para continuar" });
        } else {
            try {
                let consulta = await DataService.movimentoMagistrado(texto);
                let resultados = consulta.resultados;
                this.setState({ resultados: resultados});
                await this.setState({ movimentosVisible: true});
            } catch (err) {
                this.setState({
                    error:
                        ""+err
                });
                console.log(err);
            }
        }
        this.forceUpdate();
    };
    ocultaMovimentos = () => {
        this.setState({ movimentosVisible: false });
    };
    render() {
        return (
            <div className="card flex justify-content-center">
                <Toast ref={this.toast} />
                <Dialog header="5 movimentos mais relevantes" visible={this.state.movimentosVisible} style={{ width: '50vw' }} onHide={() => this.ocultaMovimentos()}>
                        <b>{this.state.resultados.length > 0 ? this.state.resultados[0].classe.descricao : ""}: </b>
                        {this.state.resultados.length > 0 ? this.state.resultados[0].conviccao : 0}%
                        <span>
                            <ProgressBar value={this.state.resultados.length > 0 ? this.state.resultados[0].conviccao : 0}></ProgressBar>
                        </span>
                        <b>{this.state.resultados.length > 0 ? this.state.resultados[1].classe.descricao : ""}: </b>
                        {this.state.resultados.length > 0 ? this.state.resultados[1].conviccao : 0}%
                        <span>
                            <ProgressBar value={this.state.resultados.length > 0 ? this.state.resultados[1].conviccao : 0}></ProgressBar>
                        </span>
                        <b>{this.state.resultados.length > 0 ? this.state.resultados[2].classe.descricao : ""}: </b>
                        {this.state.resultados.length > 0 ? this.state.resultados[2].conviccao : 0}%
                        <span>
                            <ProgressBar value={this.state.resultados.length > 0 ? this.state.resultados[2].conviccao : 0}></ProgressBar>
                        </span>
                        <b>{this.state.resultados.length > 0 ? this.state.resultados[3].classe.descricao : ""}: </b>
                        {this.state.resultados.length > 0 ? this.state.resultados[3].conviccao : 0}%
                        <span>
                            <ProgressBar value={this.state.resultados.length > 0 ? this.state.resultados[3].conviccao : 0}></ProgressBar>
                        </span>
                        <b>{this.state.resultados.length > 0 ? this.state.resultados[4].classe.descricao : ""}: </b>
                        {this.state.resultados.length > 0 ? this.state.resultados[4].conviccao : 0}%
                        <span>
                            <ProgressBar value={this.state.resultados.length > 0 ? this.state.resultados[4].conviccao : 0}></ProgressBar>
                        </span>
                </Dialog>

                <Card title="Verificar Movimento">
                    <form className="flex flex-column gap-2" onSubmit={this.handleDocumento}>
                        <span className="p-float-label">
                            <InputTextarea id="documento" onChange={e => this.setState({ texto: e.target.value })}/>
                            <label htmlFor="documento">Documento</label>
                        </span>
                        <span>
                            <button type="submit">Verificar Movimento</button>
                        </span>
                    </form>
                </Card>
            </div>
        )
    }
}