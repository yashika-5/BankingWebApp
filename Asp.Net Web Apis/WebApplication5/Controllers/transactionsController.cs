using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication5;
using WebApplication5.Models;

namespace WebApplication5.Controllers
{
    public class transactionsController : ApiController
    {
        private WebApplication5Context db = new WebApplication5Context();

        // GET: api/transactions
        public IQueryable<transaction> Gettransactions()
        {
            return db.transactions;
        }

        // GET: api/transactions/5
        [ResponseType(typeof(transaction))]
        public IHttpActionResult Gettransaction(int id)
        {
            transaction transaction = db.transactions.Find(id);
            if (transaction == null)
            {
                return NotFound();
            }

            return Ok(transaction);
        }

        // PUT: api/transactions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttransaction(int id, transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != transaction.transId)
            {
                return BadRequest();
            }

            db.Entry(transaction).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!transactionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/transactions
        [ResponseType(typeof(transaction))]
        public IHttpActionResult Posttransaction(transaction transaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.transactions.Add(transaction);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = transaction.transId }, transaction);
        }

        // DELETE: api/transactions/5
        [ResponseType(typeof(transaction))]
        public IHttpActionResult Deletetransaction(int id)
        {
            transaction transaction = db.transactions.Find(id);
            if (transaction == null)
            {
                return NotFound();
            }

            db.transactions.Remove(transaction);
            db.SaveChanges();

            return Ok(transaction);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool transactionExists(int id)
        {
            return db.transactions.Count(e => e.transId == id) > 0;
        }
    }
}