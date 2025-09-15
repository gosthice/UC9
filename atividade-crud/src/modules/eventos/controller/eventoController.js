const EventoModel = require("../model/eventoModel");

class EventoController {
   static async criar(req, res) {
      try {
         const { id, nome, descricao, data, local } = req.body;

         if (!id || !nome || !descricao || !data || !local) {
            return res.status(400).json({
               msg : "Todos os campos devem ser preenchido."
            });
         };

         await EventoModel.create({ id, nome, descricao, data, local });
         res.status(200).json({ msg: "Evento criado com sucesso" });
      } catch (error) {
         res.status(500).json({ msg: "Erro do servidor! Tente novamente ou mais tarde.", erro: error.message });
      };
   };

   static async listarTodos(req, res) {
      try {
         const eventos = await EventoModel.findAll();

         if (eventos.length === 0) {
            return res.status(200).json({
               msg: "Não há nenhum evento agendado."
            });
         };

         res.status(200).json(eventos);
      } catch (error) {
         res.status(500).json({ msg: "Erro do servidor! Tente novamente ou mais tarde.", erro: error.message });
      };
   };

   static async listarPorId(req, res) {
      try {
         const {id} = req.params;
         const evento = await EventoModel.findByPk(id);

         if (!evento) {
            return res.status(404).json({
               msg: "Evento não encontrado."
            });
         };

         res.status(200).json(evento);
      } catch (error) {
         res.status(500).json({ msg: "Erro do servidor! Tente novamente ou mais tarde.", erro: error.message });
      };
   };

   static async editar(req, res) {
      try {
         const id = req.params.body;
         const { nome, descricao, data, local } = req.body;

         if (!nome || !descricao || !data || !local) {
            return res.status(401).json({
               msg: "Os campos devem ser preenchidos"
            });
         };
         
         const eventoAtualizado = await EventoModel.update(
            { nome: nome, descricao: descricao, data: data, local: local },
            { where: { id: id }}
         );

         if (eventoAtualizado.length === 0) {
            return res.status(404).json({
               msg: "Evento não encontrado."
            });
         };

         res.status(200).json(eventoAtualizado);
      } catch (error) {
         res.status(500).json({ msg: "Erro do servidor! Tente novamente ou mais tarde.", erro: error.message });
      }
   };

   static async exluirPorId(req, res) {
      try {
         const id = req.params.body;
         const evento = EventoModel.findByPk(id);
         if (!evento) {
            return res.status(404).json({
               msg: "Nenhum evento encontrado."
            });
         };
         await EventoModel.destroy({
            where: {
               id: id
            }
         });
         res.status(200).json({ msg: "Evento excluído com sucesso."});
      } catch (error) {
         res.status(500).json({ msg: "Erro do servidor! Tente novamente ou mais tarde.", erro: error.message });
      }
   }
};

module.exports = EventoController;