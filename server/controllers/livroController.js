function getLivros(req, res) {
    try {
        res.send('Lista de livros');
    } catch (error) {        
        res.status(500).send('Erro ao obter livros');
 }
}

export { getLivros };