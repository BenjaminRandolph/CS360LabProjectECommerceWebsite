﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab_E_Commerce_Website_API.Models;

// this is a controller to handle the API requests from the front end about listings
// so if the front end accesses https://<ip>:<port>/UserAccounts in different ways,
// different things will happen (get, post, delete http requests)
namespace Lab_E_Commerce_Website_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemListingsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ItemListingsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ItemListings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemListing>>> GetItemListing()
        {
            return await _context.itemListings.ToListAsync();
        }

        // GET: api/ItemListings/<any listing id>
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemListing>> GetItemListing(int id)
        {
            var itemListing = await _context.itemListings.FindAsync(id);

            if (itemListing == null)
            {
                return NotFound();
            }

            return itemListing;
        }

        // PUT: api/ItemListings/<any listing id>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemListing(int id, ItemListing itemListing)
        {
            if (id != itemListing.id)
            {
                return BadRequest();
            }

            _context.Entry(itemListing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemListingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ItemListings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItemListing>> PostItemListing(ItemListing itemListing)
        {
            _context.itemListings.Add(itemListing);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemListing", new { id = itemListing.id }, itemListing);
        }

        // DELETE: api/ItemListings/<any listing id>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemListing(int id)
        {
            var itemListing = await _context.itemListings.FindAsync(id);
            if (itemListing == null)
            {
                return NotFound();
            }

            _context.itemListings.Remove(itemListing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemListingExists(int id)
        {
            return _context.itemListings.Any(e => e.id == id);
        }
    }
}
