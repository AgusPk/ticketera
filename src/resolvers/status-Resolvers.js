const { Ticket, Comment, User, Tag } = require("../db/models");
const { fullTicket } = require("./index");

const STATUS = {
  OPEN: 1,
  PROCESS: 2,
  CLOSED: 3,
  REJECTED: 4
};

const setStatus = function(req, res, next) {
  Ticket.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(ticket => {
      switch (req.body.status) {
        case STATUS.PROCESS:
          ticket
            .createComment({})
            .then(comment => comment.setReplier(req.user.id))
            .then(() => {
              ticket.setStatus(STATUS.PROCESS);
              res.send();
            });

          break;

        case STATUS.CLOSED:
          Comment.findOne({
            where: {
              ticketId: req.params.id
            }
          }).then(comment => {
            if (comment) {
              comment
                .update({
                  description: req.body.description
                })
                .then(() => {
                  ticket.setStatus(STATUS.CLOSED);
                  res.send();
                });
            } else {
              ticket
                .createComment({
                  description: req.body.description
                })
                .then(comment => comment.setReplier(req.user.id))
                .then(() => {
                  ticket.setStatus(STATUS.CLOSED);
                  res.send();
                });
            }
          });

          break;

        case STATUS.REJECTED:
          Comment.findOne({
            where: {
              ticketId: req.params.id
            }
          }).then(comment => {
            if (comment) {
              comment
                .update({
                  description: req.body.description
                })
                .then(() => {
                  ticket.setStatus(STATUS.REJECTED);
                  res.send();
                });
            } else {
              req.body.description
                ? ticket
                    .createComment({
                      description: req.body.description
                    })
                    .then(comment => comment.setReplier(req.user.id))
                    .then(() => {
                      ticket.setStatus(STATUS.REJECTED);
                      res.send();
                    })
                : res.status(403).send("Ingresar motivo");
            }
          });

          break;

        case STATUS.OPEN:
          Comment.findOne({
            where: {
              ticketId: req.params.id
            }
          })
            .then(comment => {
              comment.destroy();
            })
            .then(() => ticket.setStatus(STATUS.OPEN));

          break;
      }
    })
    .catch(err => console.log(err));
};

module.exports = {
  setStatus
};
