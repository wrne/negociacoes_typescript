export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // Declara template que exibirá os dados das negociacoes
    template(model) {
        return `
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th>DATA</th>
					<th>QUANTIDADE</th>
					<th>VALOR</th>
				</tr>
			</thead>
			<tbody>
			${model.lista().map((negociacao) => {
            return `
				<tr>
					<td>
					${new Intl.DateTimeFormat().format(negociacao.data)}
					</td>
					<td>${negociacao.quantidade}</td>
					<td>${negociacao.valor}</td>
				</tr>
				`;
        }).join('')}
			</tbody>
		</table>
		`;
    }
    // renderiza na página
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
