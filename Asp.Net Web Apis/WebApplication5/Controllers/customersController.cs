﻿using System;
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
    public class customersController : ApiController
    {
        private WebApplication5Context db = new WebApplication5Context();

        // GET: api/customers
        public IQueryable<customer> Getcustomers()
        {
            return db.customers;
        }

        // GET: api/customers/5
        [ResponseType(typeof(customer))]
        public IHttpActionResult Getcustomer(int id)
        {
            customer customer = db.customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        // PUT: api/customers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcustomer(int id, customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customer.customerId)
            {
                return BadRequest();
            }

            db.Entry(customer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!customerExists(id))
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

        // POST: api/customers
        [ResponseType(typeof(customer))]
        public IHttpActionResult Postcustomer(customer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.customers.Add(customer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = customer.customerId }, customer);
        }

        // DELETE: api/customers/5
        [ResponseType(typeof(customer))]
        public IHttpActionResult Deletecustomer(int id)
        {
            customer customer = db.customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            db.customers.Remove(customer);
            db.SaveChanges();

            return Ok(customer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool customerExists(int id)
        {
            return db.customers.Count(e => e.customerId == id) > 0;
        }
    }
}