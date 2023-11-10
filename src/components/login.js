//Wendel Cavalcante
import { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { DataService } from '../service/api.service';
import { doLogin } from '../service/auth';
import { Toast } from 'primereact/toast';
import React from 'react';

export default class Login extends Component {
    state = {
        login: "",
        senha: "",
        error: ""
    };

    constructor(props) {
        super();
        this.toast = React.createRef();
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { login, senha } = this.state;

        try {
            const token = await DataService.autenticar(login, senha);
            doLogin(token);
            this.toast.current.show({ severity: 'info', summary: 'Autenticado!', detail: "Você já pode validar documentos!" });
        } catch (err) {
            this.toast.current.show({ severity: 'error', summary: 'Erro ao autenticar', detail: "Verifique seu usuário e senha" });
            console.log(err);
        }
    };
    render() {
        return (
            <div className="card flex justify-content-center">
                <Toast ref={this.toast} />
                <Card title="Login">
                    <form className="flex flex-column gap-2" onSubmit={this.handleSignIn}>
                        <span className="p-float-label">
                            <InputText id="login" onChange={e => this.setState({ login: e.target.value })}/>
                            <label htmlFor="login">Usuário</label>
                        </span>
                        <span className="p-float-label">
                            <Password id="senha" onChange={e => this.setState({ senha: e.target.value })}/>
                            <label htmlFor="senha">Senha</label>
                        </span>
                        <span>
                            <button type="submit">Entrar</button>
                        </span>

                    </form>
                </Card>
            </div>
        )
    }
}