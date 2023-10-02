class Produto {
    constructor(id, nome, descricao, preco, categoria_id) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria_id = categoria_id;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getDescricao() {
        return this.descricao;
    }

  
    setDescricao(descricao) {
        this.descricao = descricao;
    }

    getPreco() {
        return this.preco;
    }

  
    setPreco(preco) {
        this.preco = preco;
    }

   
    getCategoriaId() {
        return this.categoria_id;
    }

   
    setCategoriaId(categoria_id) {
        this.categoria_id = categoria_id;
    }
}
