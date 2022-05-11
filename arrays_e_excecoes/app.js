try {
    const listaProdutosDisponiveis = [
        'Pão',
        'Leite',
        'Café',
        'Laranja',
        'Macarrão',
        'Sabonete',
        'Detergente',
    ];
    
    const listaArgumentos = process.argv.slice(2);
    
    const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto =>{
        return listaArgumentos.find(argumento => argumento === produto);
    });
    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós já temos: ${produto}`));
    
    const listaProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(argumento => {
        return !listaProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaProdutosSolicitadosNaoDisponiveis.forEach(produto => console.log(`Este produto nós NÃO temos: ${produto}`));
    
    const listaProdutosOrdenados = listaProdutosDisponiveis.sort();
    listaProdutosOrdenados.forEach(produto => console.log(`Este produto está disponível: ${produto}`));
    
} catch (e) {
    console.log('Não foi possível realizar o pedidode compra')
}
