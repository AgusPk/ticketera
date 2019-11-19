const Tag = require("./Tag");
const Comment = require("./Comment");
const User = require("./User");
const Status = require("./Status");
const Ticket = require("./Ticket");

// relacion entre usuarios y preguntas
User.hasMany(Ticket, { as: "author" });
// Ticket.belongsTo(User, { as: "author" });
User.belongsToMany(Ticket, { through: "ticket_participant" });
Ticket.belongsToMany(User, { through: "ticket_participant" });

//status de la pregunta
Ticket.belongsTo(Status);
//respuestas
Ticket.hasOne(Comment);
//tags de la pregunta
Ticket.hasMany(Tag);
// respuestas de los usuarios
User.hasMany(Comment, { as: "author" });
Comment.belongsTo(User, { as: "author" });

module.exports = { User, Tag, Comment, Status, Ticket };